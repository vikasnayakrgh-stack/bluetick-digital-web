import React from 'react';

/**
 * Validates whether a URL is safe to render in an <a> tag.
 * Blocks dangerous protocols like javascript:, data:, vbscript:.
 */
const isSafeUrl = (url) => {
  try {
    const trimmed = (url || '').trim();
    if (trimmed.startsWith('/') || trimmed.startsWith('#')) return true;
    const parsed = new URL(trimmed);
    return ['http:', 'https:', 'mailto:', 'tel:'].includes(parsed.protocol);
  } catch {
    return false;
  }
};

/**
 * Regex for inline Markdown elements:
 * 1. Code: `code`
 * 2. Markdown Link: [text](url)
 * 3. Bold-Italic: ***text*** or ___text___
 * 4. Bold: **text** or __text__
 * 5. Italic: *text* or _text_
 * 6. Raw URL: https://... or http://...
 */
const inlineRegex = /(`[^`\n]+`)|(\[([^\]]+)\]\(([^)\s]+)\))|(\*\*\*(?!\s)([^*\n]+?)(?<!\s)\*\*\*|___(?!\s)([^_\n]+?)(?<!\s)___)|(\*\*(?!\s)([^*\n]+?)(?<!\s)\*\*|__(?!\s)([^_\n]+?)(?<!\s)__)|(\*(?!\s)([^*\n]+?)(?<!\s)\*|_(?!\s)([^_\n]+?)(?<!\s)_)|(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/g;

/**
 * Parses inline string into React elements safely (no dangerouslySetInnerHTML)
 */
function renderInline(text, styles = {}, keyPrefix = 'inline') {
  if (!text) return null;

  const elements = [];
  let lastIndex = 0;
  let match;
  let keyIdx = 0;

  // Reset regex pointer
  inlineRegex.lastIndex = 0;

  while ((match = inlineRegex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      elements.push(text.substring(lastIndex, match.index));
    }

    const matchedStr = match[0];

    if (matchedStr.startsWith('`') && matchedStr.endsWith('`')) {
      const codeContent = matchedStr.slice(1, -1);
      elements.push(
        <code key={`${keyPrefix}-c-${keyIdx++}`} className={styles.botCode}>
          {codeContent}
        </code>
      );
    } else if (match[2] && match[3] && match[4]) {
      const linkText = match[3];
      const linkUrl = match[4];
      if (isSafeUrl(linkUrl)) {
        elements.push(
          <a
            key={`${keyPrefix}-l-${keyIdx++}`}
            href={linkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.botLink}
          >
            {linkText}
          </a>
        );
      } else {
        elements.push(linkText);
      }
    } else if (match[5]) {
      const content = match[6] || match[7];
      elements.push(
        <strong key={`${keyPrefix}-bi-${keyIdx++}`} className={styles.botStrong}>
          <em className={styles.botEm}>
            {renderInline(content, styles, `${keyPrefix}-bi-c-${keyIdx++}`)}
          </em>
        </strong>
      );
    } else if (match[8]) {
      const content = match[9] || match[10];
      elements.push(
        <strong key={`${keyPrefix}-b-${keyIdx++}`} className={styles.botStrong}>
          {renderInline(content, styles, `${keyPrefix}-b-c-${keyIdx++}`)}
        </strong>
      );
    } else if (match[11]) {
      const content = match[12] || match[13];
      elements.push(
        <em key={`${keyPrefix}-i-${keyIdx++}`} className={styles.botEm}>
          {renderInline(content, styles, `${keyPrefix}-i-c-${keyIdx++}`)}
        </em>
      );
    } else if (match[14]) {
      const rawUrl = match[14];
      if (isSafeUrl(rawUrl)) {
        elements.push(
          <a
            key={`${keyPrefix}-u-${keyIdx++}`}
            href={rawUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.botLink}
          >
            {rawUrl}
          </a>
        );
      } else {
        elements.push(rawUrl);
      }
    }

    lastIndex = inlineRegex.lastIndex;
  }

  if (lastIndex < text.length) {
    elements.push(text.substring(lastIndex));
  }

  return elements;
}

/**
 * Safe, zero-dependency Markdown renderer for AI Priya chat responses.
 * Converts headings, bullet lists, numbered lists, blockquotes, and paragraphs
 * into structured semantic React elements without using dangerouslySetInnerHTML.
 */
export const SafeMarkdown = ({ content, styles = {} }) => {
  if (!content) return null;

  const lines = content.split(/\r?\n/);
  const blocks = [];
  let currentList = null;
  let currentParagraph = [];

  const flushParagraph = () => {
    if (currentParagraph.length > 0) {
      blocks.push({
        type: 'paragraph',
        lines: [...currentParagraph]
      });
      currentParagraph = [];
    }
  };

  const flushList = () => {
    if (currentList) {
      blocks.push(currentList);
      currentList = null;
    }
  };

  for (let i = 0; i < lines.length; i++) {
    const rawLine = lines[i];
    const trimmed = rawLine.trim();

    if (!trimmed) {
      flushParagraph();
      flushList();
      continue;
    }

    // Headings: #, ##, ###
    const headingMatch = trimmed.match(/^(#{1,4})\s+(.+)$/);
    if (headingMatch) {
      flushParagraph();
      flushList();
      blocks.push({
        type: 'heading',
        level: headingMatch[1].length,
        text: headingMatch[2]
      });
      continue;
    }

    // Bullet list item: - item, * item, • item, + item
    const bulletMatch = trimmed.match(/^[-*•+]\s+(.+)$/);
    if (bulletMatch) {
      flushParagraph();
      if (!currentList || currentList.type !== 'ul') {
        flushList();
        currentList = { type: 'ul', items: [] };
      }
      currentList.items.push(bulletMatch[1]);
      continue;
    }

    // Numbered list item: 1. item, 2) item
    const numberMatch = trimmed.match(/^(\d+)[\.\)]\s+(.+)$/);
    if (numberMatch) {
      flushParagraph();
      if (!currentList || currentList.type !== 'ol') {
        flushList();
        currentList = { type: 'ol', items: [] };
      }
      currentList.items.push(numberMatch[2]);
      continue;
    }

    // Blockquote: > quote
    const quoteMatch = trimmed.match(/^>\s*(.+)$/);
    if (quoteMatch) {
      flushParagraph();
      flushList();
      blocks.push({
        type: 'blockquote',
        text: quoteMatch[1]
      });
      continue;
    }

    // List item continuation (indented line)
    if (currentList && (rawLine.startsWith('  ') || rawLine.startsWith('\t'))) {
      currentList.items[currentList.items.length - 1] += ' ' + trimmed;
      continue;
    }

    if (currentList) {
      flushList();
    }

    currentParagraph.push(trimmed);
  }

  flushParagraph();
  flushList();

  return (
    <div className={styles.botMarkdownRoot}>
      {blocks.map((block, bIdx) => {
        if (block.type === 'heading') {
          const Tag = `h${Math.min(block.level + 2, 6)}`;
          return (
            <Tag key={`h-${bIdx}`} className={styles.botHeading}>
              {renderInline(block.text, styles, `h-${bIdx}`)}
            </Tag>
          );
        }

        if (block.type === 'ul') {
          return (
            <ul key={`ul-${bIdx}`} className={styles.botListUl}>
              {block.items.map((item, itemIdx) => (
                <li key={`li-${itemIdx}`} className={styles.botListItem}>
                  {renderInline(item, styles, `ul-${bIdx}-${itemIdx}`)}
                </li>
              ))}
            </ul>
          );
        }

        if (block.type === 'ol') {
          return (
            <ol key={`ol-${bIdx}`} className={styles.botListOl}>
              {block.items.map((item, itemIdx) => (
                <li key={`li-${itemIdx}`} className={styles.botListItem}>
                  {renderInline(item, styles, `ol-${bIdx}-${itemIdx}`)}
                </li>
              ))}
            </ol>
          );
        }

        if (block.type === 'blockquote') {
          return (
            <blockquote key={`bq-${bIdx}`} className={styles.botBlockquote}>
              {renderInline(block.text, styles, `bq-${bIdx}`)}
            </blockquote>
          );
        }

        // Paragraph
        return (
          <p key={`p-${bIdx}`} className={styles.botParagraph}>
            {block.lines.map((line, lineIdx) => (
              <React.Fragment key={`pl-${lineIdx}`}>
                {renderInline(line, styles, `p-${bIdx}-${lineIdx}`)}
                {lineIdx < block.lines.length - 1 && <br />}
              </React.Fragment>
            ))}
          </p>
        );
      })}
    </div>
  );
};

export default SafeMarkdown;

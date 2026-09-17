import os
from PIL import Image, ImageDraw, ImageFont

WIDTH = 1200
HEIGHT = 630

OUTPUT_DIR = os.path.join(os.path.dirname(__file__), '..', 'public', 'images')
ASSETS_DIR = os.path.join(os.path.dirname(__file__), '..', 'public', 'assets')
os.makedirs(OUTPUT_DIR, exist_ok=True)

FONT_REGULAR = 'C:/Windows/Fonts/segoeui.ttf'
FONT_BOLD = 'C:/Windows/Fonts/segoeuib.ttf'
if not os.path.exists(FONT_BOLD):
    FONT_BOLD = 'C:/Windows/Fonts/arialbd.ttf'
if not os.path.exists(FONT_REGULAR):
    FONT_REGULAR = 'C:/Windows/Fonts/arial.ttf'

def create_base_canvas():
    img = Image.new('RGB', (WIDTH, HEIGHT), color=(8, 10, 14))
    draw = ImageDraw.Draw(img)
    
    # Ambient radial gradient glow in top right
    for r in range(450, 0, -2):
        alpha = int(28 * (1 - r / 450))
        glow_color = (29, 78, 216)
        blend = tuple(int(8 + (c - 8) * (alpha / 255.0)) for c in glow_color)
        draw.ellipse([950 - r, 120 - r, 950 + r, 120 + r], fill=blend)
    
    # Hairline outer border
    draw.rectangle([24, 24, WIDTH - 24, HEIGHT - 24], outline=(255, 255, 255), width=1)
    # Bottom hairline bar
    draw.line([64, 530, WIDTH - 64, 530], fill=(255, 255, 255), width=1)
    
    return img

def render_card(filename, category, title_lines, subtitle, tag="SENIOR TECH PARTNER"):
    img = create_base_canvas()
    draw = ImageDraw.Draw(img)
    
    # Try loading logo icon
    logo_path = os.path.join(ASSETS_DIR, 'logo-icon.png')
    if os.path.exists(logo_path):
        try:
            logo = Image.open(logo_path).convert('RGBA')
            logo.thumbnail((54, 54), Image.Resampling.LANCZOS)
            img.paste(logo, (64, 60), mask=logo)
        except Exception as e:
            print(f"Could not paste logo: {e}")
    
    font_brand = ImageFont.truetype(FONT_BOLD, 26)
    font_cat = ImageFont.truetype(FONT_BOLD, 15)
    font_tag = ImageFont.truetype(FONT_BOLD, 13)
    font_title = ImageFont.truetype(FONT_BOLD, 46)
    font_sub = ImageFont.truetype(FONT_REGULAR, 22)
    font_footer = ImageFont.truetype(FONT_REGULAR, 17)
    font_footer_bold = ImageFont.truetype(FONT_BOLD, 17)
    
    # Brand Name Header
    draw.text((130, 68), "BLUETICK", fill=(255, 255, 255), font=font_brand)
    draw.text((264, 68), "DIGITAL", fill=(96, 165, 250), font=font_brand)
    
    # Right Tag Pill
    tag_text = tag.upper()
    pill_w = len(tag_text) * 11 + 32
    draw.rounded_rectangle([WIDTH - 64 - pill_w, 64, WIDTH - 64, 102], radius=19, fill=(15, 23, 42), outline=(29, 78, 216), width=1)
    draw.text((WIDTH - 64 - pill_w + 16, 73), tag_text, fill=(147, 197, 253), font=font_tag)
    
    # Category Eyebrow
    eyebrow = f"●  {category.upper()}"
    draw.text((64, 160), eyebrow, fill=(96, 165, 250), font=font_cat)
    
    # Title (multi-line)
    y_text = 205
    for line in title_lines:
        draw.text((64, y_text), line, fill=(255, 255, 255), font=font_title)
        y_text += 62
        
    # Subtitle
    draw.text((64, y_text + 15), subtitle, fill=(148, 163, 184), font=font_sub)
    
    # Footer Left: domain
    draw.text((64, 555), "bluetickdigital.in", fill=(255, 255, 255), font=font_footer_bold)
    draw.text((225, 555), "— Websites + AI Automation Partner", fill=(148, 163, 184), font=font_footer)
    
    # Footer Right: verified badge
    footer_right = "Official Meta WhatsApp Business API • React Web Engine"
    draw.text((WIDTH - 64 - 450, 555), footer_right, fill=(148, 163, 184), font=font_footer)
    
    out_path = os.path.join(OUTPUT_DIR, filename)
    img.save(out_path, format='JPEG', quality=94, optimize=True)
    print(f"Saved: {out_path} ({os.path.getsize(out_path)} bytes)")

# 1. Default OG Card
render_card(
    'og-default.jpg',
    category="AI-Powered Digital Transformation Partner",
    title_lines=[
        "High-Speed Websites & Custom",
        "AI Automation Systems for Brands"
    ],
    subtitle="Official WhatsApp Business API • Sub-1.2s React Platforms • 24/7 AI Chatbots",
    tag="2026 Production Ready"
)

# 2. Blog 1: Website Development Cost
render_card(
    'og-website-development-cost-in-india-2026.jpg',
    category="Web Platform Engineering & Pricing",
    title_lines=[
        "Website Development Cost in India:",
        "Complete 2026 Pricing Guide"
    ],
    subtitle="Transparent cost breakdown for small business, WordPress, custom React & e-commerce.",
    tag="Pricing Guide"
)

# 3. Blog 2: WhatsApp Chatbot Automation
render_card(
    'og-whatsapp-chatbot-automation.jpg',
    category="Conversational AI & Lead Pipelines",
    title_lines=[
        "The Ultimate Guide to WhatsApp",
        "Chatbot Automation (2026)"
    ],
    subtitle="Turn inquiries into closed deals 24/7 with Meta Cloud API and atomic CRM sync.",
    tag="Automation Guide"
)

# 4. Blog 3: Automate Lead Qualification
render_card(
    'og-automate-lead-qualification-whatsapp-ai-chatbot.jpg',
    category="Autonomous Sales & Intent Scoring",
    title_lines=[
        "Automate Lead Qualification with",
        "WhatsApp AI Chatbots (2026)"
    ],
    subtitle="Sub-30s qualification, dynamic intent scoring, and zero manual data overhead.",
    tag="Lead Systems"
)

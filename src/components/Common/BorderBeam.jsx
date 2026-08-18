import React from 'react';
import styles from './BorderBeam.module.css';

export default function BorderBeam({
  className = '',
  size = 160,
  duration = 8,
  borderWidth = 1.5,
  colorFrom = '#38bdf8',
  colorTo = '#1d4ed8',
  delay = 0,
}) {
  return (
    <div
      style={{
        '--size': `${size}px`,
        '--duration': `${duration}s`,
        '--border-width': `${borderWidth}px`,
        '--color-from': colorFrom,
        '--color-to': colorTo,
        '--delay': `-${delay}s`,
      }}
      className={`${styles.borderBeam} ${className}`}
      aria-hidden="true"
    />
  );
}

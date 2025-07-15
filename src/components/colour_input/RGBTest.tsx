import React, { useRef, useState } from 'react';

export default function RGBTest() {
  const [values, setValues] = useState(['', '', '']);
  const refs = [useRef<HTMLInputElement>(null), useRef(null), useRef(null)];

  const handleChange = (i: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValues = [...values];
    newValues[i] = e.target.value;
    setValues(newValues);
  };

  const handleKeyDown = (i: number) => (e: React.KeyboardEvent<HTMLInputElement>) => {
    const isBackspaceAtStart =
      e.key === 'Backspace' && e.currentTarget.selectionStart === 0 && values[i] === '';

    if (isBackspaceAtStart && i > 0) {
      e.preventDefault();
      // Delay to allow React to finish handling the current event
      setTimeout(() => {
        refs[i - 1].current?.focus();
        refs[i - 1].current?.setSelectionRange?.(3, 3);
      }, 0);
    }
  };

  return (
    <div style={{ display: 'flex', gap: '1rem' }}>
      {values.map((value, i) => (
        <input
          key={i}
          ref={refs[i]}
          value={value}
          onChange={handleChange(i)}
          onKeyDown={handleKeyDown(i)}
          style={{ width: '60px', fontSize: '1.5rem' }}
        />
      ))}
    </div>
  );
}

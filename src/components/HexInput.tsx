import React, { useState, useRef, useEffect } from 'react';

//const isValidHex = (hex: string): boolean => /^#[0-9a-fA-F]{0-6}$/.test(hex);

const formatHex = (input: string) => {
  let hex = input.replace(/[^0-9a-fA-F]/g, '');
  if (hex.length > 6) hex = hex.slice(0, 6);
  return '#' + hex.toLowerCase();
}

const HexInput: React.FC = () => {
  const [value, setValue] = useState<string>('#');
  const inputRef = useRef<HTMLInputElement>(null);
  const cursorPosRef = useRef<number>(0);

  // Save cursor position before update
  const handleCursor = (e: React.ChangeEvent<HTMLInputElement>) => {
    cursorPosRef.current = e.target.selectionStart ?? 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleCursor(e);

    const formatted = formatHex(e.target.value);

    setValue(formatted);
  };

  useEffect(() => {
    // Restore cursor position after render
    if (inputRef.current && cursorPosRef.current !== null) {
      inputRef.current.setSelectionRange(cursorPosRef.current, cursorPosRef.current);
    }
  }, [value]);

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={handleChange}
        onSelect={handleCursor}
        placeholder="#rrggbb"
        style={{
          caretColor: 'transparent',
          width: '120px',
          padding: '10px',
          fontSize: '16px',
          fontFamily: 'monospace',
          textTransform: 'lowercase',
        }}
      />
    </div>
  );
};

export default HexInput;

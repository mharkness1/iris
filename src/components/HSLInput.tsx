import React, { useState, useRef, useEffect } from 'react';

type HSL = { h: string; s: string; l: string };

const clampHSL = (val: string, max: number): string => {
  const num = parseInt(val, 10);
  if (isNaN(num)) return '';
  return Math.min(max, Math.max(0, num)).toString();
};

const parseHSLString = (value: string): HSL => {
  const match = value.match(/h\((\d*)\)\s*s\((\d*)\)\s*l\((\d*)\)/);
  if (!match) return { h: '', s: '', l: '' };
  const [, h, s, l] = match;
  return {
    h: clampHSL(h, 360),
    s: clampHSL(s, 100),
    l: clampHSL(l, 100),
  };
};

const formatHSLString = ({ h, s, l }: HSL): string => {
  return `hsl: h(${h}) s(${s}) l(${l})`;
};

const HSLInput: React.FC = () => {
  const [value, setValue] = useState<string>(formatHSLString({ h: '', s: '', l: '' }));
  const inputRef = useRef<HTMLInputElement>(null);
  const cursorPosRef = useRef<number>(0);

  // Save cursor position before update
  const handleCursor = (e: React.ChangeEvent<HTMLInputElement>) => {
    cursorPosRef.current = e.target.selectionStart ?? 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleCursor(e);

    const parsed = parseHSLString(e.target.value);
    const formatted = formatHSLString(parsed);

    setValue(formatted);
  };

  useEffect(() => {
    // Restore cursor position after render
    if (inputRef.current && cursorPosRef.current !== null) {
      inputRef.current.setSelectionRange(cursorPosRef.current, cursorPosRef.current);
    }
  }, [value]);

  return (
    <input
      ref={inputRef}
      type="text"
      value={value}
      onChange={handleChange}
      onSelect={handleCursor}
      style={{
        caretColor: 'transparent',
        width: '350px',
        padding: '10px',
        fontSize: '16px',
        fontFamily: 'monospace',
      }}
    />
  );
};

export default HSLInput;
import React, { useRef } from 'react';
import { formatHex } from './helpers';

type Props = {
  values: string;
  onChange: (values: string) => void;
  containerStyle?: React.CSSProperties;
  inputStyle?: React.CSSProperties;
  inputWrapperStyle?: React.CSSProperties;
};

const HexInput: React.FC<Props> = ({
  values,
  onChange,
  containerStyle = { display: 'flex', gap: '1rem', fontSize: '1.5rem' },
  inputWrapperStyle = { display: 'flex', alignItems: 'center' },
  inputStyle = { width: '100px', fontSize: '1.5rem' },
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value;
    console.log('User typed:', raw);
    if (!/^[0-9a-fA-F]{0,6}$/.test(raw)) return;
    const formatted = formatHex(raw);
    console.log('Formatted hex:', formatted);
    onChange(formatted);
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData('text');
    const cleaned = pasted.trim().replace(/[^0-9a-fA-F]/g, '').slice(0, 6);
    if (cleaned.length === 0) return;
    const formatted = formatHex(cleaned);
    onChange(formatted);
  };

  return (
    <div style={containerStyle}>
      <span>#</span>
      <div style={inputWrapperStyle}>
      <input
        ref={inputRef}
        type="text"
        value={values}
        onChange={handleChange}
        onPaste={handlePaste}
        placeholder="000000"
        style={inputStyle}
      />
      </div>
    </div>
  );
};

export default HexInput;

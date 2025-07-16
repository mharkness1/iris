import React, { useRef, useState } from 'react';
import { formatRGBValues } from './Formatters';

type Props = {
  values: [string, string, string];
  onChange: (values: [string, string, string]) => void;
  onBlurField: (index: number, rawValue: string) => void;
};

//const formats = ['r', 'g', 'b'];

const RgbInput: React.FC<Props> = ({ values, onChange, onBlurField }) => {
  const [errors, setErrors] = useState<boolean[]>([false, false, false]);
  const inputsRef = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];

  const handleChange = (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value;
    if (!/^\d{0,3}$/.test(raw)) return;

    const num = Number(raw);
    const isValid = !isNaN(num) && num >= 0 && num <= 255;

    const updated = [...values] as [string, string, string];
    updated[index] = raw;
    onChange(updated);

    const updatedErrors = [...errors];
    updatedErrors[index] = !isValid && raw !== '';
    setErrors(updatedErrors);

    if (raw.length === 3 && isValid && index < 2) {
      inputsRef[index + 1].current?.focus();
      inputsRef[index + 1].current?.setSelectionRange(0, 0);
    }
  };

  const handleBlur = (index: number) => (e: React.FocusEvent<HTMLInputElement>) => {
    onBlurField(index, e.target.value);
  };


  const handleKeyDown = (index: number) => (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && e.currentTarget.selectionStart === 0 && index > 0) {
      e.preventDefault();
      setTimeout(() => {
        inputsRef[index - 1].current?.focus();
        inputsRef[index - 1].current?.setSelectionRange(3, 3);
      }, 0);
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
  e.preventDefault();

  const pasted = e.clipboardData.getData('text');
    const parts = pasted
      .trim()
      .split(/[\s,]+/)
      .map(p => p.replace(/[^\d]/g, '')) 
      .map(p => p.slice(0, 3));

    if (parts.length !== 3) return;

    const formatted: [string, string, string] = [
      formatRGBValues(parts[0] || ''),
      formatRGBValues(parts[1] || ''),
      formatRGBValues(parts[2] || ''),
    ];

    onChange(formatted);
    inputsRef[0].current?.focus();
  };

  return (
    <div style={{ display: 'flex', gap: '1rem', fontSize: '1.5rem' }}>
      <span>(</span>
      {values.map((value, index) => (
        <div key={index} style={{display: 'flex', alignItems: 'center'}}>
          <input
            ref={inputsRef[index]}
            placeholder="000"
            type="text"
            value={value}
            onChange={handleChange(index)}
            onBlur={handleBlur(index)}
            onKeyDown={handleKeyDown(index)}
            onPaste={handlePaste}
            style={{
              width: '40px',
              fontSize: '1.5rem',
            }}
          />
        {index < 2 && <span>,</span>}
        </div>
      ))}
      <span>)</span>
    </div>
  );
};

export default RgbInput;

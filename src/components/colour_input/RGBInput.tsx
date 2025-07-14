import React, { useEffect, useRef, useState } from 'react';

type RGBValue = string;

type Props = {
  values: [string, string, string]
  onChange: (values: [string, string, string]) => void;
}

const formats = ['r', 'g', 'b']

const padRGB = (value: number): RGBValue => {
  const clamped = Math.max(0, Math.min(255, value));
  return clamped.toString().padStart(3, '0');
}

const RgbInput: React.FC<Props> = ({ values, onChange }) => {
  const [errors, setErrors] = useState<boolean[]>([false, false, false]);
  const inputsRef = [useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null)];

  const [localValues, setLocalValues] = useState(values);

  useEffect(() => {
    setLocalValues(values);
    setErrors([false, false, false]);
  }, [values]);

  const handleChange = (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value;
    if (!/^\d{0,3}$/.test(raw)) return; // limit to 3 digits per box

    const num = Number(raw)
    const isValid = !isNaN(num) && num >= 0 && num <= 255;

    const updatedValues = [...localValues] as [string, string, string];
    updatedValues[index] = raw;
    setLocalValues(updatedValues);
    onChange(updatedValues);

    const updatedErrors = [...errors];
    updatedErrors[index] = !isValid && raw !== '';
    setErrors(updatedErrors);

    if (raw.length == 3 && isValid && index < 2) {
      inputsRef[index + 1].current?.focus();
    }
  };

  const handleBlur = (index: number) => () => {
    const raw = localValues[index];
    const num = Number(raw);
    const padded = isNaN(num) ? '000' : padRGB(num);

    const updatedValues = [...values] as [string, string, string];
    updatedValues[index] = padded;
    setLocalValues(updatedValues);
    onChange(updatedValues)
  };

  const handleKeyDown = (index: number) => (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && values[index] === '' && index > 0) {
      inputsRef[index - 1].current?.focus();
    }
  };

  return (
    <div style={{ display: 'flex', gap: '1.5rem', fontSize: '1.5rem'}}>
      {values.map((value, index) => (
        <div key={index}>
          {formats[index]} (
          <input
          placeholder='000'
          type='text'
          value={value}
          onChange={handleChange(index)}
          onBlur={handleBlur(index)}
          onKeyDown={handleKeyDown(index)}
          style={{
            width: '60px',
            padding: '0.6rem',
            fontSize: '1.5rem',
          }}
          />
          )
        </div>
      ))}
    </div>
  );
};

export default RgbInput;

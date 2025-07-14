import React, { useRef, useState } from 'react';

type HSLValue = string;

const formats = ['h', 's', 'l']

const padSL = (value: number): HSLValue => {
  const clamped = Math.max(0, Math.min(100, value));
  return clamped.toString().padStart(3, '0');
}

const padH = (value: number): HSLValue => {
  const clamped = Math.max(0, Math.min(360, value));
  return clamped.toString().padStart(3, '0');
}

const RgbInput: React.FC = () => {
  const [values, setValues] = useState<HSLValue[]>(['','','']);
  const [errors, setErrors] = useState<boolean[]>([false, false, false]);
  const inputsRef = [useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null)];

  const handleChange = (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value;
    if (!/^\d{0,3}$/.test(raw)) return; // limit to 3 digits per box

    const num = Number(raw)
    let isValid = false;
    if (index === 0) {
      isValid = !isNaN(num) && num >= 0 && num <= 360;
    } else {
      isValid = !isNaN(num) && num >= 0 && num <= 100;
    }
  
    const updatedValues = [...values];
    updatedValues[index] = raw;
    setValues(updatedValues);

    const updatedErrors = [...errors];
    updatedErrors[index] = !isValid && raw !== '';
    setErrors(updatedErrors);

    if (raw.length == 3 && isValid && index < 2) {
      inputsRef[index + 1].current?.focus();
    }
  };

  const handleBlur = (index: number) => () => {
    const raw = values[index];
    const num = Number(raw);
    let padded: string = ''
    if (index === 0) {
      padded = isNaN(num) ? '000' : padH(num);
    } else {
      padded = isNaN(num) ? '000' : padSL(num);
    }
    
    const updatedValues = [...values];
    updatedValues[index] = padded;
    setValues(updatedValues);
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

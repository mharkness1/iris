import React, { useEffect, useRef, useState } from 'react';

type RGBValue = string;

type Props = {
  values: [string, string, string];
  onChange: (values: [string, string, string]) => void;
};

const formats = ['r', 'g', 'b'];

const padRGB = (value: number): RGBValue => {
  const clamped = Math.max(0, Math.min(255, value));
  return clamped.toString().padStart(3, '0');
};

const RgbInput: React.FC<Props> = ({ values, onChange }) => {
  const [errors, setErrors] = useState<boolean[]>([false, false, false]);
  const inputsRef = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];

  const [localValues, setLocalValues] = useState(values);

  // Sync only if values actually changed (shallow compare)
  useEffect(() => {
    if (
      values.some((v, i) => v !== localValues[i])
    ) {
      setLocalValues(values);
      setErrors([false, false, false]);
    }
  }, [values]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleChange = (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value;
    if (!/^\d{0,3}$/.test(raw)) return; // only allow 0-3 digits

    const num = Number(raw);
    const isValid = !isNaN(num) && num >= 0 && num <= 255;

    // Update localValues and propagate change
    const updatedValues = [...localValues] as [string, string, string];
    updatedValues[index] = raw;
    setLocalValues(updatedValues);
    onChange(updatedValues);

    // Update error state
    const updatedErrors = [...errors];
    updatedErrors[index] = !isValid && raw !== '';
    setErrors(updatedErrors);

    // Optional: Only move focus to next input if user types 3 digits and valid.
    // Comment out if annoying.
    if (raw.length === 3 && isValid && index < 2) {
      inputsRef[index + 1].current?.focus();
      inputsRef[index + 1].current?.setSelectionRange(0, 0);
    }
  };

  const handleBlur = (index: number) => () => {
    const raw = localValues[index];
    const num = Number(raw);
    if (raw === '') {
      // If input empty, reset to empty string (no padding)
      const updatedValues = [...localValues] as [string, string, string];
      updatedValues[index] = '';
      setLocalValues(updatedValues);
      onChange(updatedValues);
      return;
    }

    const padded = isNaN(num) ? '' : padRGB(num);

    // Only update if padding changed to avoid re-render loops
    if (padded !== raw) {
      const updatedValues = [...localValues] as [string, string, string];
      updatedValues[index] = padded;
      setLocalValues(updatedValues);
      onChange(updatedValues);
    }
  };

  const handleKeyDown = (index: number) => (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && e.currentTarget.selectionStart === 0 && index > 0) {
      e.preventDefault();
      setTimeout(() => {
        inputsRef[index - 1].current?.focus();
        // Put cursor at end of previous input
        const prevValue = inputsRef[index - 1].current?.value ?? '';
        inputsRef[index - 1].current?.setSelectionRange(prevValue.length, prevValue.length);
      }, 0);
    }
  };

  return (
    <div style={{ display: 'flex', gap: '1.5rem', fontSize: '1.5rem' }}>
      {localValues.map((localValue, index) => (
        <div key={index}>
          {formats[index]} (
          <input
            ref={inputsRef[index]}
            placeholder="000"
            type="text"
            value={localValue}
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

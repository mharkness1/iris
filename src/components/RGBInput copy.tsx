import React, { useRef, useEffect } from 'react';

const MAX_DIGITS = 9;

const clamp255 = (val: string) => {
  const num = parseInt(val, 10);
  return !isNaN(num) && num > 255;
};

const splitIntoRgb = (digits: string) => {
  const r = digits.slice(0, 3);
  const g = digits.slice(3, 6);
  const b = digits.slice(6, 9);
  return { r, g, b };
};

const formatRgbHtml = (r: string, g: string, b: string) => {
  const colorize = (val: string) =>
    val && clamp255(val) ? `<span style="color:red">${val}</span>` : val;

  return `r(${colorize(r)}) g(${colorize(g)}) b(${colorize(b)})`;
};

const RgbInput: React.FC = () => {
  const divRef = useRef<HTMLDivElement>(null);

  const handleInput = () => {
    if (!divRef.current) return;


    // Clean & limit to 9 digits
    const rawText = divRef.current.innerText;
    const digitsOnly = rawText.replace(/\D/g, '').slice(0, MAX_DIGITS);

    // Format into rgb(...)
    const { r, g, b } = splitIntoRgb(digitsOnly);
    const html = formatRgbHtml(r, g, b);

    // Replace content
    divRef.current.innerHTML = html;
  };

  const { r, g, b } = splitIntoRgb(
    divRef.current?.innerText.replace(/\D/g, '').slice(0, MAX_DIGITS) || ''
  );

  useEffect(() => {
    // Initial render
    if (divRef.current) {
      const html = formatRgbHtml(r, g, b);
      divRef.current.innerHTML = html;
    }
  }, []);

  return (
    <>
      <input
        <span>
      />
    </>
  );
};

export default RgbInput;

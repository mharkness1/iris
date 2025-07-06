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

  return `rgb: r(${colorize(r)}) g(${colorize(g)}) b(${colorize(b)})`;
};

const RgbInput: React.FC = () => {
  const divRef = useRef<HTMLDivElement>(null);
  const lastSelectionRef = useRef<number>(0); // track caret position as digit offset

  const getDigitOffset = (el: HTMLElement): number => {
    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0) return 0;

    const range = selection.getRangeAt(0);
    const preCaretRange = range.cloneRange();
    preCaretRange.selectNodeContents(el);
    preCaretRange.setEnd(range.endContainer, range.endOffset);

    const textBeforeCaret = preCaretRange.toString();
    return (textBeforeCaret.match(/\d/g) || []).length;
  };

  const placeCaretAtDigitOffset = (el: HTMLElement, digitIndex: number) => {
    const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, null);
    let digitsSeen = 0;
    let node: Text | null = null;

    while ((node = walker.nextNode() as Text | null)) {
      const text = node.textContent || '';
      for (let i = 0; i < text.length; i++) {
        if (/\d/.test(text[i])) {
          if (digitsSeen === digitIndex) {
            const range = document.createRange();
            const sel = window.getSelection();
            range.setStart(node, i);
            range.collapse(true);
            sel?.removeAllRanges();
            sel?.addRange(range);
            return;
          }
          digitsSeen++;
        }
      }
    }

    // fallback to end
    const range = document.createRange();
    const sel = window.getSelection();
    range.selectNodeContents(el);
    range.collapse(false);
    sel?.removeAllRanges();
    sel?.addRange(range);
  };

  const handleInput = () => {
    if (!divRef.current) return;

    // Get caret digit position BEFORE update
    const caretDigitOffset = getDigitOffset(divRef.current);

    // Clean & limit to 9 digits
    const rawText = divRef.current.innerText;
    const digitsOnly = rawText.replace(/\D/g, '').slice(0, MAX_DIGITS);

    // Format into rgb(...)
    const { r, g, b } = splitIntoRgb(digitsOnly);
    const html = formatRgbHtml(r, g, b);

    // Replace content
    divRef.current.innerHTML = html;

    // Store caret offset (max same or smaller after truncation)
    lastSelectionRef.current = Math.min(caretDigitOffset, digitsOnly.length);

    // Restore caret
    placeCaretAtDigitOffset(divRef.current, lastSelectionRef.current);
  };

  const { r, g, b } = splitIntoRgb(
    divRef.current?.innerText.replace(/\D/g, '').slice(0, MAX_DIGITS) || ''
  );
  const allValid = r && g && b && !clamp255(r) && !clamp255(g) && !clamp255(b);

  useEffect(() => {
    // Initial render
    if (divRef.current) {
      const html = formatRgbHtml(r, g, b);
      divRef.current.innerHTML = html;
    }
  }, []);

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <div
        ref={divRef}
        contentEditable
        onInput={handleInput}
        spellCheck={false}
        style={{
          caretColor: 'transparent',
          width: 360,
          minHeight: 36,
          border: '1px solid #ccc',
          padding: '8px 10px',
          fontSize: 16,
          fontFamily: 'monospace',
          whiteSpace: 'pre-wrap',
          overflowX: 'auto',
        }}
        suppressContentEditableWarning
      />
      {allValid && (
        <div
          style={{
            caretColor: 'transparent',
            width: 30,
            height: 30,
            borderRadius: 6,
            border: '1px solid #ccc',
            backgroundColor: `rgb(${r},${g},${b})`,
          }}
        />
      )}
    </div>
  );
};

export default RgbInput;

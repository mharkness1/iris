export function formatHSLValues(index: number, rawValue: string): string {
    if (!/^\d{1,3}$/.test(rawValue)) {
        rawValue = "000";
    }

    let num = parseInt(rawValue, 10);
    if (isNaN(num)) num = 0;
    if (num < 0) num = 0;
    if (index === 0) {
        if (num > 360) num = 360;
    } else {
        if (num > 100) num = 100;
    }

    return num.toString().padStart(3, '0');
};

export function formatRGBValues(rawValue: string): string {
    if (!/^\d{1,3}$/.test(rawValue)) {
        rawValue = "000";
    }

    let num = parseInt(rawValue, 10);
    if (isNaN(num)) num = 0;
    if (num < 0) num = 0;
    if (num > 255) num = 255;

    return num.toString().padStart(3, '0');
};

export function formatHex(input: string) {
  let hex = input.replace(/[^0-9a-fA-F]/g, '');
  if (hex.length > 6) hex = hex.slice(0, 6);
  return hex.toLowerCase();
}

export function getRandomRGB(): [string, string, string] {
    const pad = (n: number) => n.toString().padStart(3, '0');
    return [
        pad(Math.floor(Math.random() * 256)),
        pad(Math.floor(Math.random() * 256)),
        pad(Math.floor(Math.random() * 256)),
    ];
};

export function getRandomHSL(): [string, string, string] {
    const pad = (n: number) => n.toString().padStart(3, '0');
    return [
        pad(Math.floor(Math.random() * 361)),
        pad(Math.floor(Math.random() * 101)),
        pad(Math.floor(Math.random() * 101)),
    ]
}

export function getRandomHex(): string {
    const randomInt = Math.floor(Math.random() * 0xFFFFFF);
    const hex = randomInt.toString(16).padStart(6, '0');
    return hex.toLowerCase();
}
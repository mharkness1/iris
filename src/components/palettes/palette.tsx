import { useState } from "react";
import ColourSquare from "./colour_square";
import type { Palette } from "iris-colour";

type Props = {
  palette: Palette;
};

const PaletteRender: React.FC<Props> = ({ palette }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  if (palette.type === "Complementary") {
    return (
      <div className="palette-block complement-block">
        <div>{palette.type.toUpperCase()}</div>
        <div className="palette">
          <ColourSquare colour={palette.colours[1]} expanded={true} onClick={() => null} />
        </div>
      </div>
    );
  }

  return (
    <div className="palette-block">
      <div>{palette.type.toUpperCase()}</div>
      <div className="palette">
        {palette.colours.map((colour, i) => (
          <ColourSquare
            key={i}
            colour={colour}
            expanded={ expandedIndex === i }
            onClick={() => handleExpand(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default PaletteRender;

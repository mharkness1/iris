import PaletteRender from "./palette";
import type { Palette } from "iris-colour";

type RowProps = {
  palettes: Palette[];
};

const PaletteRow: React.FC<RowProps> = ({ palettes }) => {

  return (
    <div className="palette-row">
      {palettes.map((palette, i) => (
        <PaletteRender
          key={i}
          palette={palette}
        />
      ))}
    </div>
  );
};

export default PaletteRow;

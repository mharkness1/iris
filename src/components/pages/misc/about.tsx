/* eslint-disable no-useless-escape */
import PageHeader from "../../header/header";
import "./about.css";

const AboutPage: React.FC = () => {
  return (
    <>
      <PageHeader />
      <div className="px-30 about-page">
        <h1 className="pixel-font">About Iris</h1>
        <p>
          To the best of my knowledge this colour library does something that
          others do not. The purpose, rather than colour management or color
          palette recommendation is to allow users of the library to define a
          broad &#39;<em>color language</em>&#39;.
        </p>
        <p>
          This is defined over a variety of parameters shared between functions.
          A detailed list of these parameters and their impact is provided
          below.
        </p>
        <p>
          The idea behind this library was that it would be utilised either on
          front/back end to programmatically generate colour palettes over an
          indeterminate number of colours elements/components.
        </p>
        <p>
          For instance, allowing a user specified &#39;base&#39; and generating
          a predefined palette from that which nevertheless conforms to common
          traits e.g., hue or saturation step size, how gray or how white or how
          black colours are able to become etc.
        </p>
        <p>The core of the library is the color interface.</p>
        <pre>
          <code className="language-typescript">
            {`interface Colour {
              hex: string
              rgb: RGB
              hsl: HSL
              hsv: HSV
              luminance: number
              name: string
          }`}
          </code>
        </pre>
        <p>
          with the various colour components defined in turn, all colour formats
          allow for an additional alpha channel, although currently this
          isn&#39;t utilised by the library logic. For example:
        </p>
        <pre>
          <code className="language-typescript">
            {`type RGB = {
              r: number
              g: number
              b: number
              a?: number
          }`}
          </code>
        </pre>
        <strong>
          NOTE: currently only RGB, HSL, HSV, Hex colour modes are supported
        </strong>
        <p>The other core feature is the palette type defined as:</p>
        <pre>
          <code className="language-typescript">
            {`type Palette = {
              colours: Colour[]
              name: string
              type: PaletteType
              primary: Colour
          }`}
          </code>
        </pre>
        <p>
          Where primary is the colour that generated the palette, in most
          instances the primary will also be returned within the colours array
          care should be taken to filter, skip, or remove this colour by
          matching any of its more primative properties. Currently{" "}
          <code>PaletteType</code> is the union of string values taking any of:{" "}
          <code>
            &quot;Tints&quot; | &quot;Shades&quot; | &quot;Tones&quot; |
            &quot;Monochrome&quot; | &quot;Triadic&quot; | &quot;Analagous&quot;
            | &quot;Complementary&quot; | &quot;Tetradic&quot; |
            &quot;Custom&quot; | &quot;Spectrum&quot; | &quot;Quadratic&quot;
          </code>
        </p>
        <p>
          <strong>NOTE: &quot;Custom&quot; is currently not supported.</strong>
        </p>
        <h2>Installation</h2>
        <pre>
          <code className="language-bash">
            {`npm install iris-colour@latest`}
          </code>
        </pre>
        <h2>Functionality</h2>
        <h3>Utilities</h3>
        <h4>1. Parsers</h4>
        <p>
          Each colour mode has a corresponding parser function, it takes a
          string and return a conforming object of the relevant type e.g.,{" "}
          <code>parseRBG(input: string)</code>. They work by matching relevant
          regex statements and check the validity of the value range.
        </p>
        <p>
          These are designed to be as flexible as possible. For instance the RGB
          parser matches against{" "}
          <code>{`^(?:rgba?)?\s*\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})(?:\s*,\s*(\d*\.?\d+))?\s*\)$/i`}</code>{" "}
          and so will successfully parse any of the following strings or
          permutations of the formats:
        </p>
        <ul>
          <li>- rgb(100,200,100)</li>
          <li>- RGB(100, 200, 100)</li>
          <li>- rgb (100,200,100)</li>
          <li>- rgb(100 200 100 0.5)</li>
          <li>- (100,200,100)</li>
          <li>- (100 200 100)</li>
        </ul>
        <p>
          <em>
            I&#39;ve found this flexibility useful in binding it to custom
            front-end inputs, however, it does mean that one must be careful
            about what is being used as an imput string.
          </em>
        </p>
        <p>
          There also exists a general parser. It takes a string and an optional
          format input: <code>InputParser(input: string, format?: string)</code>{" "}
          and returns the relevant object. Where the optional format input takes
          the case insensitive form of &quot;hex&quot;, &quot;rgb&quot;,
          &quot;hsl&quot;, &quot;hsv&quot;. If no format is supplied then it
          iterates through possibilities and return the first valid object.
        </p>
        <p>
          <strong>
            NOTE: in some cases inputs may satisfy the requirements of two modes
            e.g., 50, 50, 50 will satisfy both rgb and hsl requirements. In
            these cases the order of precedence is as follows: Hex, RGB, HSL,
            HSV.
          </strong>
        </p>
        <h4>2. Validity Checkers</h4>
        <p>
          Each colour mode has a corresponding validity check, it takes an
          object of the specific type and checks it for the correct values e.g.,{" "}
          <code>isValidHex(input: Hex)</code> checks using{" "}
          <code>/^#?([0-9a-f]{6})/</code> i.e., an optional # and at least 6
          characters from the digits 0-9 or letters a-f (lowercase only, which
          is done automatically by the parser). And{" "}
          <code>isValidHSL(input: HSL)</code> checks that the object has h, s,
          l, a? (implicity necessary), that the alpha if defined is between 0
          and 1 (inclusive of 1), that h is between 0 and 360 (inclusive), and
          that s, l are between 0 and 100 (inclusive).
        </p>
        <h4>3. Converters</h4>
        <p>The library contains the following converters:</p>
        <ul>
          <li>- Hex to RGB</li>
          <li>- RGB to Hex</li>
          <li>- RGB to HSL</li>
          <li>- RGB to HSV</li>
          <li>- HSL to RGB</li>
          <li>- HSV to RGB</li>
        </ul>
        <p>
          With these 6 converter functions of the form
          lowercasemodeToUPPERCASEMODE e.g., <code>hexToRGB()</code> allow users
          to convert, potentially via a chain, from one format to any other
          supported format.
        </p>
        <h4>4. HTML/CSS Integration</h4>
        <p>
          The function <code>toCssString(col: colour)</code> takes an object of
          the Colour type and returns the rgb string form compatible with CSS
          i.e., rgb(100, 100, 100) (supports alpha inclusion). So it can be
          utilised directly in browser. In a react component I&#39;ve used:{" "}
          <code>const cssColour = toCssString(colour)</code> and{" "}
          <code>{`style={{background: cssColour}}`}</code> as an example.
        </p>
        <h4>5. Accessibility</h4>
        <ul>
          <li>
            <strong>Luminance</strong>
          </li>
        </ul>
        <p>
          By construction colour objects have a luminance value calculated with
          the exposed function{" "}
          <code>{`getLuminanceRGB({ r, g, b }: RGB)`}</code> which returns the
          relative luminance calculated as per WCAG. This can be directly
          utilised to determine overlay text colour e.g.,{" "}
          <code>{`const useWhite = (colour.luminance < 0.3 )`}</code> combined
          with{" "}
          <code>{`style={{ color: useWhite ? '#ffffff'; : '#000000' }}`}</code>{" "}
        </p>
        <p>
          <strong>
            NOTE: to use white overlay the generally suggested value for
            luminance is 0.179
          </strong>
        </p>
        <ul>
          <li>
            <strong>Contrast Ratio</strong>
          </li>
        </ul>
        <p>
          The luminance value is used to calculate the contrast ratio between
          two colours. The exposed function{" "}
          <code>getContrastRatioColour(colour1: Colour, colour2: Colour)</code>{" "}
          return the contrast ratio as a number.
        </p>
        <ul>
          <li>
            <strong>Accessibility</strong>
          </li>
        </ul>
        <p>
          The exposed function{" "}
          <code>
            isAccessible(foreground: Colour, background: Colour, level:
            &quot;AA&quot; | &quot;AAA&quot; = &quot;AA&quot;, largeText:
            boolean = false)
          </code>{" "}
          returns a true/false value reflecting whether, given the parameters
          the accepted WCAG accessibility standard is complied with.
        </p>
        <h3>Colour Management</h3>
        <h4>1. Colour Extensions - inversion and grayscale</h4>
        <ul>
          <li>
            <strong>Inversion</strong>
          </li>
        </ul>
        <p>
          <code>invertColour(col: Colour)</code> takes a colour and returns the
          &#39;inversion&#39; i.e., r: 255 - r, g: 255 - g, b: 255 - b.
        </p>
        <ul>
          <li>
            <strong>Grayscale</strong>
          </li>
        </ul>
        <p>
          <code>toGrayscale(col: Colour)</code> takes a colour and returns the
          grayscale equivalent i.e., just the lightness component of its HSL
          representation.
        </p>
        <h4>2. Factory</h4>
        <p>
          To create a colour object easily use:{" "}
          <code>
            createColour(input: ColourModes, name: string = &#39;Unnamed&#39;,
            format?: string)
          </code>{" "}
          This is a flexible factory function. It checks whether the input is a
          string (or if the format is &quot;hex&quot;) and whether it meets the
          expected format. Or whether the input is an object with the attributes
          expected of RGB, HSL, or HSV.
        </p>
        <p>
          <strong>
            NOTE: generally it is wise to parse an input, which checks both
            validity and type.
          </strong>
        </p>
        <p>
          The function then populates a colour object with the necessary
          properties (it does this by first guaranteeing the existence of the
          RGB property) and returns that colour object.
        </p>
        <h3>Palettes</h3>
        <p>
          The palette generation element of the library has two key elements:
          shared parameters, and the palette generation functions themselves.
          All palette generation occurs with HSL primarily.
        </p>
        <h4>Constants</h4>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Default Value</th>
              <th>Palettes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>GrayTolerance</td>
              <td>Minimum saturation that can be reached</td>
              <td>10</td>
              <td>Monochrome, Tones</td>
            </tr>
            <tr>
              <td>BlackTolerance</td>
              <td>Minimum lightness that can be reached</td>
              <td>10</td>
              <td>Monochrome, Tints, Shades</td>
            </tr>
            <tr>
              <td>WhiteTolerance</td>
              <td>Maximum lightness that can be reached</td>
              <td>10</td>
              <td>Monochrome, Tints, Shades</td>
            </tr>
            <tr>
              <td>LightnessSaturationStepSize</td>
              <td>Amount lightness and saturation change each step</td>
              <td>10</td>
              <td>Tints, Shades, Tones</td>
            </tr>
            <tr>
              <td>SpectrumSize</td>
              <td>Number of intermediary colours</td>
              <td>6</td>
              <td>Spectrum</td>
            </tr>
            <tr>
              <td>AnalogousAngle</td>
              <td>Variation of hue for analogous colours</td>
              <td>30</td>
              <td>Analogous</td>
            </tr>
            <tr>
              <td>HueStepSize</td>
              <td>Amount hue changes each step</td>
              <td>60</td>
              <td>N/A</td>
            </tr>
            <tr>
              <td>MaxPaletteSize</td>
              <td>Maximum number of colours returned</td>
              <td>6</td>
              <td>Monochrome, Tints, Shades, Tones</td>
            </tr>
            <tr>
              <td>BlendFactor</td>
              <td>How far between two colours an intermediary is generated</td>
              <td>0.5</td>
              <td>N/A</td>
            </tr>
          </tbody>
        </table>
        <p>
          It is worth checking specific implementations as of <em>v1.1.1</em>{" "}
          the priority is given to tolerance values not size. Meaning palettes
          will vary in size depending on the initial colour as they return
          whenever the tolerance is reached.
        </p>
        <p>
          <strong>
            NOTE: BlendFactor and HueStepSize are not currently implemented
            directly
          </strong>
        </p>
        <h4>Palettes</h4>
        <p>There are ten supported palettes currently. They are:</p>
        <p>
          <strong>Colour Spaces</strong>
        </p>
        <ol>
          <em>Monochrome makes sense. Shades get darker. Tints get lighter. Tones vary saturation (ish).</em>
          <li>
            <p>
              1. Monochome{" "}
              <code>genMonochromePalette(col: Colour ...params)</code> - returns
              a palette (without primary) of the same hue varied over lightness
              and saturation.
            </p>
          </li>
          <li>
            <p>
              2. Tints <code>genTints(col: Colour ...params)</code> - returns a
              palette (with primary at start) of the lightness increased until
              the white tolerance (
              <em>
                note: if col&#39;s lightness is below black tolerance, it is
                automatically increased to black tolerance v1.1.1
              </em>
              )
            </p>
          </li>
          <li>
            <p>
              3. Shades <code>genShades(col: Colour ...params)</code> - returns
              a palette (with primary at start) of the lightness decreasing
              until the black tolerance (
              <em>
                note: if col&#39;s lightness is above white tolerance, it is
                automatically decreased to white tolerance v1.1.1
              </em>
              )
            </p>
          </li>
          <li>
            <p>
              4. Tones <code>genTones(col: Colour ...params)</code> - returns a
              palette (with primary in sorted location) of the saturation varied
              according to step size excluding until grayTolerance
            </p>
          </li>
        </ol>
        <p><strong>Fixed</strong></p>
        <em>I just hope these make sense.</em>
          <ol>
            <li>
              <p>
                5. Complement <code>genComplement(col: Colour)</code> - returns a
                palette (with primary at start) of primary and it&#39;s complement
              </p>
            </li>
          <li>
            <p>
              6. Triadic <code>genTriadicPalette(col: Colour)</code> - returns a
              palette (with primary at start) of its triadic colors (hue varied
              by 120 each direction)
            </p>
          </li>
          <li>
            <p>
              7. Analogous{" "}
              <code>genAnalogousPalette(col: Colour ...param)</code> - returns a
              palette (with primary second) of its analogous colours i.e., hue
              varied according to the param on either side
            </p>
          </li>
          <li>
            <p>
              8. Tetradic <code>genTetradicPalette(col: Colour)</code> - returns
              a palette (with primary first) of its tetradic colours i.e., hue
              varied by 60, 180, 240
            </p>
          </li>
          <li>
            <p>
              9. Quadratic <code>genQuadraticPalette(col: Colour)</code> -
              return a palette (with primary first) of its quadratic colours
              i.e., hue varied by 90, 180, 270
            </p>
          </li>
        </ol>
        <p><strong>Spectrum</strong></p>
        <em>Watch this space. This is where v2 will happen. Hopefully!</em>
        <ol>
          <li>
            <p>
            10. Spectrum <code>genSpectrumPalette(col1: Colour, col2: Colour ...params)</code> -
            returns a palette (with col1 first and col2 last) of the colours
            between the two of them varied over hue, saturation, and lightness.
            </p>
          </li>
        </ol>
        <h3>Additional Features</h3>
        <p>
          The name property is supported for colours. Currently this only allows
          for manual extraction/checking - names of generated colours are
          automatically generated. It is worth checking the code to see the
          names they take e.g., &quot;Colour1&quot;&#39;s complement will be
          given the name &quot;Colour1-complement&quot; etc.
        </p>
        <h2>Future Versions</h2>
        <ul>
          <li>- Potential rethink re:value boundaries</li>
          <li>- Additional spectrum options i.e., 3 and 4 colours.</li>
          <li>
            - Additional palettes - complementary colours splits, custom hsl
            transformations.
          </li>
          <li>- Custom palette definitions.</li>
          <li>
            - Prune, iterate over a palette given some given colour and remove
            colours that fail contrast/accessibility checks.
          </li>
        </ul>
      </div>
    </>
  );
};

export default AboutPage;

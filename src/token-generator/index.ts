import fs from 'fs'
import path from 'path'
import { TokenList, TokenSet, StitchesConfig } from '../stitches';
import { 
    TailwindColor, 
    TailwindColorSet, 
    TailwindWeight,
    TailwindFontFamily,
    TailwindFontFamilySet,
    TailwindTheme
} from '../tailwindcss';
const JSONFormatter = require('simple-json-formatter');
const theme = require('tailwindcss/defaultTheme');

const prefix = '$';

function simpleMapper<T extends string | number | symbol>(obj: Record<T, string>): TokenSet {
    return (Object.keys(obj) as T[]).reduce((set, key) => {
        set[prefix + key] = obj[key];
        return set;
    }, {} as TokenSet)
}

function stitchifyColors(colors: TailwindColorSet): TokenSet {
    const stitchColors: TokenSet = {};

    for (const color in colors) {
        const prefixedColor = prefix + color;
        const value = colors[color as TailwindColor];

        if (typeof value === 'string') {
            stitchColors[prefixedColor] = value;
        } else {
            for (const weight in value) {
                stitchColors[prefixedColor + weight] = value[weight as TailwindWeight]; 
            }
        }
    }

    return stitchColors;
}

function stitchifyFonts(fonts: TailwindFontFamilySet): TokenSet {
    const stitchFonts: TokenSet = {};

    for (const key in fonts) {
        const prefixedFont = prefix + key;
        stitchFonts[prefixedFont] = fonts[key as TailwindFontFamily]
            .map(family => family.replace(/"/g, '\\"'))
            .join();
    }

    return stitchFonts;
}

function generateConfig(theme: TailwindTheme): StitchesConfig {
    const tokens: Partial<TokenList> = {
        colors: stitchifyColors(theme.colors),
        space: simpleMapper(theme.spacing),
        sizes: simpleMapper(theme.width(key => theme[key])),
        fonts: stitchifyFonts(theme.fontFamily),
        fontSizes: simpleMapper(theme.fontSize),
        fontWeights: simpleMapper(theme.fontWeight),
        lineHeights: simpleMapper(theme.lineHeight),
        letterSpacings: simpleMapper(theme.letterSpacing),
        borderWidths: simpleMapper(theme.borderWidth),
        radii: simpleMapper(theme.borderRadius),
        shadows: simpleMapper(theme.boxShadow),
        zIndices: simpleMapper(theme.zIndex),
    };

    const breakpoints = simpleMapper(theme.screens);

    return { 
        tokens,
        breakpoints 
    };
}

const config = generateConfig(theme);

function generateFileContents(config: StitchesConfig) {
    const json = JSON.stringify(config);
    return `import { StitchesConfig } from '../stitches'
const config: StitchesConfig = ${JSONFormatter.format(json, '\t')};
export default config`;
}

const fileContents = generateFileContents(config);
fs.writeFileSync(path.join(__filename, '..', '..', '..', 'src', 'token-loader', 'config.ts'), fileContents);

console.log('Successfully exported Tailwind -> Stitches config! 🎉')
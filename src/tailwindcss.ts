export type TailwindScreen = 'sm'
    | 'md'
    | 'lg'
    | 'xl';

export type TailwindWeight = '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900';

export type TailwindColor = 'transparent'
    | 'current'
    | 'black'
    | 'white'
    | 'gray'
    | 'red'
    | 'orange'
    | 'yellow'
    | 'green'
    | 'teal'
    | 'blue'
    | 'indigo'
    | 'purple'
    | 'pink';

export type TailwindColorScale = Record<TailwindWeight, string>;

export type TailwindSpacing = '0'
    | '1'
    | '2'
    | '3'
    | '4'
    | '5'
    | '6'
    | '8'
    | '10'
    | '12'
    | '16'
    | '20'
    | '24'
    | '32'
    | '40'
    | '48'
    | '56'
    | '64'
    | 'px'

export type TailwindSize = 'auto'
    | 'full'
    | 'screen'
    | '1/2'
    | '1/3'
    | '2/3'
    | '1/4'
    | '2/4'
    | '3/4'
    | '1/5'
    | '2/5'
    | '3/5'
    | '4/5'
    | '1/6'
    | '2/6'
    | '3/6'
    | '4/6'
    | '5/6'
    | '1/12'
    | '2/12'
    | '3/12'
    | '4/12'
    | '5/12'
    | '6/12'
    | '7/12'
    | '8/12'
    | '9/12'
    | '10/12'
    | '11/12';

export type TailwindFontFamily = 'sans' | 'serif' | 'mono';

export type TailwindFontSize = 'xs'
    | 'sm'
    | 'base'
    | 'lg'
    | 'xl'
    | '2xl'
    | '3xl'
    | '4xl'
    | '5xl'
    | '6xl';

export type TailwindFontWeight = 'hairline'
    | 'thin'
    | 'light'
    | 'normal'
    | 'medium'
    | 'semibold'
    | 'bold'
    | 'extrabold'
    | 'black';

export type TailwindLineHeight = 'none'
    | 'tight'
    | 'snug'
    | 'normal'
    | 'relaxed'
    | 'loose'
    | '3'
    | '4'
    | '5'
    | '6'
    | '7'
    | '8'
    | '9'
    | '10';

export type TailwindLetterSpacing = 'tighter'
    | 'tight'
    | 'normal'
    | 'wide'
    | 'wider'
    | 'widest';

export type TailwindBorderWidth = 'default'
    | '0'
    | '2'
    | '4'
    | '8';

export type TailwindBorderRadius = 'none'
    | 'sm'
    | 'default'
    | 'md'
    | 'lg'
    | 'full';

export type TailwindBoxShadow = 'xs'
    | 'sm'
    | 'default'
    | 'md'
    | 'lg'
    | 'xl'
    | '2xl'
    | 'inner'
    | 'outline'
    | 'none';

export type TailwindZIndex = 'auto'
    | '0'
    | '10'
    | '20'
    | '30'
    | '40'
    | '50';

export type TailwindScreenSet = Record<TailwindScreen, string>;
export type TailwindColorSet = Record<TailwindColor, string | TailwindColorScale>;
export type TailwindSpacingSet = Record<TailwindSpacing, string>;
export type TailwindSizingSet = Record<TailwindSize | TailwindSpacing, string>;
export type TailwindFontFamilySet = Record<TailwindFontFamily, string[]>;
export type TailwindFontSizeSet = Record<TailwindFontSize, string>;
export type TailwindFontWeightSet = Record<TailwindFontWeight, TailwindWeight>;
export type TailwindLineHeightSet = Record<TailwindLineHeight, string>;
export type TailwindLetterSpacingSet = Record<TailwindLetterSpacing, string>;
export type TailwindBorderWidthSet = Record<TailwindBorderWidth, string>;
export type TailwindBorderRadiusSet = Record<TailwindBorderRadius, string>;
export type TailwindBoxShadowSet = Record<TailwindBoxShadow, string>;
export type TailwindZIndexSet = Record<TailwindZIndex, string>;

export type TailwindThemeFunction = (key: keyof TailwindTheme) => TailwindTheme[typeof key];

export type TailwindTheme = {
    screens: TailwindScreenSet;
    colors: TailwindColorSet;
    spacing: TailwindSpacingSet;
    padding: (theme: TailwindThemeFunction) => TailwindSpacingSet; 
    width: (theme: TailwindThemeFunction) => TailwindSizingSet;
    height: (theme: TailwindThemeFunction) => Record<TailwindSpacing | 'auto' | 'full' | 'screen', string>;
    fontFamily: TailwindFontFamilySet;
    fontSize: TailwindFontSizeSet;
    fontWeight: TailwindFontWeightSet;
    lineHeight: TailwindLineHeightSet;
    letterSpacing: TailwindLetterSpacingSet;
    borderWidth: TailwindBorderWidthSet;
    borderRadius: TailwindBorderRadiusSet;
    boxShadow: TailwindBoxShadowSet;
    zIndex: TailwindZIndexSet;
}
type TokenType = 'colors' 
    | 'space' 
    | 'fontSizes' 
    | 'fonts' 
    | 'fontWeights'
    | 'lineHeights'
    | 'letterSpacings'
    | 'sizes'
    | 'borderWidths'
    | 'borderStyles'
    | 'radii'
    | 'shadows'
    | 'zIndices'
    | 'transitions';

type TokenSet = Record<string, string | number>;

type TokenList = Record<TokenType, TokenSet>;

type StitchesConfig = {
    tokens: Partial<TokenList>;
    breakpoints: TokenSet;
};
export type TokenType = 'colors' 
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

export type TokenSet = Record<string, string | number | Function>;

export type TokenList = Record<TokenType, TokenSet>;

export type StitchesConfig = {
    tokens: Partial<TokenList>;
    breakpoints: TokenSet;
};
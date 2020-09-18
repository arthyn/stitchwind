export declare type TokenType = 'colors' | 'space' | 'fontSizes' | 'fonts' | 'fontWeights' | 'lineHeights' | 'letterSpacings' | 'sizes' | 'borderWidths' | 'borderStyles' | 'radii' | 'shadows' | 'zIndices' | 'transitions';
export declare type TokenSet = Record<string, string | number | Function>;
export declare type TokenList = Record<TokenType, TokenSet>;
export declare type StitchesConfig = {
    tokens: Partial<TokenList>;
    breakpoints: TokenSet;
};

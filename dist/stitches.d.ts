export declare type TokenType = 'colors' | 'space' | 'fontSizes' | 'fonts' | 'fontWeights' | 'lineHeights' | 'letterSpacings' | 'sizes' | 'borderWidths' | 'borderStyles' | 'radii' | 'shadows' | 'zIndices' | 'transitions';
export declare type TokenSet = Record<string, string>;
export declare type TokenList = Record<TokenType, TokenSet>;
export declare type StitchwindInternalConfig = {
    tokens: Partial<TokenList>;
    breakpoints: TokenSet;
};

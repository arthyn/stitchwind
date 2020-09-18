# Stitchwind

This library helps bridge the gap between [Tailwind](https://tailwindcss.com/) and [Stitches](https://stitches.dev/). Considering Stitches was somewhat inspired by Tailwind, I thought we should be able to use the design tokens and utilities from Stitches' progenitor. 

## Installation

```bash
    npm install stitchwind
```

## Usage

### Without Customization

If you don't want to customize Stitchwind at all you can just simply pass it to Stitches' `createStyled` method to create your Stitches' functions.

```js
    import stitchwind from 'stitchwind'
    import { createStyled } from '@stitches/react'

    export const { styled, css } = createStyled(stitchwind)
```

### Changing Prefix

```js
    import stitchwind, { usePrefix } from 'stitchwind'
    import { createStyled } from '@stitches/react'

    const customPrefixedConfig = usePrefix('@', stitchwind);
    export const { styled, css } = createStyled(customPrefixedConfig);
```

## Current Support

Currently Stitchwind only supports tokens and breakpoints from Tailwind. Utilities to come soon.

## Available Breakpoints

Every breakpoint is loaded from Tailwind, `$sm` through `$xl`

## Available Tokens

### Colors

Every color and color scale is loaded ie. `$black` or `$indigo600` into Stitches' `colors` token.

### Spacing

Every spacing size is loaded ie. `$0` through `$64` and `$px`

### Sizes

Sizes are loaded using the set from Tailwind's `width` property. This allows for everything from spacing plus all the fractional sizes `$1/2` through `$11/12` and `$auto`, `$full`, and `$screen`. Currently screen is equivalent to `100vw` but may later be transformed into `$screenH` and `$screenW` with the respective viewport units used for each.

### Fonts

Fonts from Tailwind are loaded as comma delimited strings and include `$sans`, `$serif`, and `$mono`

### Font Weights

Every font weight is loaded, `$hairline` through `$black`

### Font Sizes

Every font size is loaded, `$xs` through `$6xl`

### Line Heights

Every line height is loaded, `$3` through `$10` and `$none` through `$loose`

### Letter Spacings

Every letter spacing is loaded, `$tighter` through `$widest`

### Border Widths

Every border width is loaded, `$0` through `$8` including `$default` for `1px`

### Border Radius

Every border radii is loaded, `$none` through `$full`

### Box Shadow

Every box shadow is loaded, `$xs` through `$2xl`, `$inner`, `$outline`, and `$none`

### Z Index

Every z-index is loaded, `$0` through `$50` and `$auto`


## License

Licensed under the MIT License, Copyright © 2020-present Hunter Miller.

See LICENSE for more information.
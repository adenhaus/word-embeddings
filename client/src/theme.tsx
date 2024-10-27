
import { extendTheme } from '@mui/joy/styles';
import type { PaletteRange } from '@mui/joy/styles';

declare module '@mui/joy/styles' {
  interface ColorPalettePropOverrides {
    // apply to all Joy UI components that support `color` prop
    custom_blue: true;
  }

  interface Palette {
    // this will make the node `secondary` configurable in `extendTheme`
    // and add `secondary` to the theme's palette.
    custom_blue: PaletteRange;
  }
}

const theme = extendTheme({
  "colorSchemes": {
    "light": {
      "palette": {
        "primary": {
          "50": "#fff1eb",
          "100": "#fac5af",
          "200": "#faa27d",
          "300": "#f79363",
          "400": "#f5773b",
          "500": "#f6651f",
          "600": "#db4e09",
          "700": "#ab3b05",
          "800": "#702601",
          "900": "#3d1400"
        },
        "custom_blue": {
          // Credit:
          // https://github.com/tailwindlabs/tailwindcss/blob/master/src/public/colors.js
          "50": "#ecfdf5",
          "100": "#d1fae5",
          "200": "#a7f3d0",
          "300": "#6ee7b7",
          "400": "#34d399",
          "500": "#10b981",
          "600": "#059669",
          "700": "#047857",
          "800": "#065f46",
          "900": "#064e3b",
          // Adjust the global variant tokens as you'd like.
          // The tokens should be the same for all color schemes.
          solidBg: 'var(--joy-palette-custom_blue-400)',
          solidActiveBg: 'var(--joy-palette-custom_blue-500)',
          outlinedBorder: 'var(--joy-palette-custom_blue-500)',
          outlinedColor: 'var(--joy-palette-custom_blue-700)',
          outlinedActiveBg: 'var(--joy-palette-custom_blue-100)',
          softColor: 'var(--joy-palette-custom_blue-800)',
          softBg: 'var(--joy-palette-custom_blue-200)',
          softActiveBg: 'var(--joy-palette-custom_blue-300)',
          plainColor: 'var(--joy-palette-custom_blue-700)',
          plainActiveBg: 'var(--joy-palette-custom_blue-100)',
        },
      }
    },
    "dark": {
      "palette": {
        "primary": {
          "50": "#fff1eb",
          "100": "#fac5af",
          "200": "#faa27d",
          "300": "#f79363",
          "400": "#f5773b",
          "500": "#f6651f",
          "600": "#db4e09",
          "700": "#ab3b05",
          "800": "#702601",
          "900": "#3d1400"
        },
        "custom_blue": {
          // Credit:
          // https://github.com/tailwindlabs/tailwindcss/blob/master/src/public/colors.js
          "50": "#ecfdf5",
          "100": "#d1fae5",
          "200": "#a7f3d0",
          "300": "#6ee7b7",
          "400": "#34d399",
          "500": "#10b981",
          "600": "#059669",
          "700": "#047857",
          "800": "#065f46",
          "900": "#064e3b",
          // Adjust the global variant tokens as you'd like.
          // The tokens should be the same for all color schemes.
          solidBg: 'var(--joy-palette-custom_blue-400)',
          solidActiveBg: 'var(--joy-palette-custom_blue-500)',
          outlinedBorder: 'var(--joy-palette-custom_blue-500)',
          outlinedColor: 'var(--joy-palette-custom_blue-700)',
          outlinedActiveBg: 'var(--joy-palette-custom_blue-100)',
          softColor: 'var(--joy-palette-custom_blue-800)',
          softBg: 'var(--joy-palette-custom_blue-200)',
          softActiveBg: 'var(--joy-palette-custom_blue-300)',
          plainColor: 'var(--joy-palette-custom_blue-700)',
          plainActiveBg: 'var(--joy-palette-custom_blue-100)',
        },
      }
    }
  }
})

export default theme;
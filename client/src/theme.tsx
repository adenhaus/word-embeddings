
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
          "50": "#f5ebff",
          "100": "#d1a7fa",
          "200": "#c28bf7",
          "300": "#be81f7",
          "400": "#984ede",
          "500": "#9135e8",
          "600": "#761ec9",
          "700": "#5d12a3",
          "800": "#410875",
          "900": "#20003d",
          solidBg: 'var(--joy-palette-primary-400)',
          solidActiveBg: 'var(--joy-palette-primary-500)',
          outlinedBorder: 'var(--joy-palette-primary-500)',
          outlinedColor: 'var(--joy-palette-primary-700)',
          outlinedActiveBg: 'var(--joy-palette-primary-100)',
          softColor: 'var(--joy-palette-primary-800)',
          softBg: 'var(--joy-palette-primary-200)',
          softActiveBg: 'var(--joy-palette-primary-300)',
          plainColor: 'var(--joy-palette-primary-700)',
          plainActiveBg: 'var(--joy-palette-primary-100)',
        },
      }
    },
    "dark": {
      "palette": {
        "primary": {
          "50": "#f5ebff",
          "100": "#d1a7fa",
          "200": "#c28bf7",
          "300": "#be81f7",
          "400": "#984ede",
          "500": "#9135e8",
          "600": "#761ec9",
          "700": "#5d12a3",
          "800": "#410875",
          "900": "#20003d",
          solidBg: 'var(--joy-palette-primary-400)',
          solidActiveBg: 'var(--joy-palette-primary-500)',
          outlinedBorder: 'var(--joy-palette-primary-500)',
          outlinedColor: 'var(--joy-palette-primary-700)',
          outlinedActiveBg: 'var(--joy-palette-primary-100)',
          softColor: 'var(--joy-palette-primary-800)',
          softBg: 'var(--joy-palette-primary-200)',
          softActiveBg: 'var(--joy-palette-primary-300)',
          plainColor: 'var(--joy-palette-primary-700)',
          plainActiveBg: 'var(--joy-palette-primary-100)',
        },
      }
    }
  }
})

export default theme;
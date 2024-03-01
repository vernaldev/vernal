import {
    createBaseThemeOptions,
    createUnifiedTheme,
    genPageTheme,
    palettes,
    shapes,
} from '@backstage/theme';
  
export const vernalTheme = createUnifiedTheme({
    ...createBaseThemeOptions({
        palette: palettes.dark,
      }),
      defaultPageTheme: 'home',
      /* below drives the header colors */
      pageTheme: {
        home: genPageTheme({ colors: ['#8c4351', '#343b58'], shape: shapes.none }),
        documentation: genPageTheme({
          colors: ['#8c4351', '#343b58'],
          shape: shapes.none,
        }),
        tool: genPageTheme({ colors: ['#8c4351', '#343b58'], shape: shapes.none }),
        service: genPageTheme({
          colors: ['#8c4351', '#343b58'],
          shape: shapes.none,
        }),
        website: genPageTheme({
          colors: ['#8c4351', '#343b58'],
          shape: shapes.none,
        }),
        library: genPageTheme({
          colors: ['#8c4351', '#343b58'],
          shape: shapes.none,
        }),
        other: genPageTheme({ colors: ['#8c4351', '#343b58'], shape: shapes.none }),
        app: genPageTheme({ colors: ['#8c4351', '#343b58'], shape: shapes.none }),
        apis: genPageTheme({ colors: ['#8c4351', '#343b58'], shape: shapes.none }),
      },
});
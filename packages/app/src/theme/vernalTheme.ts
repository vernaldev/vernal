import {
    createBaseThemeOptions,
    createUnifiedTheme,
    genPageTheme,
    palettes,
    shapes,
} from '@backstage/theme';
  
export const vernalLightTheme = createUnifiedTheme({
    ...createBaseThemeOptions({
        palette: palettes.light,
      }),
      defaultPageTheme: 'home',
      /* below drives the header colors */
      components: {
        BackstageHeader: {
          styleOverrides: {
            title: () => ({
              color: `#000000`,
            }),
            subtitle: () => ({
              color: `#000000`,
            }),
            type: () => ({
              color: `#000000`,
            }),
          },
        },
      },
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

export const vernalDarkTheme = createUnifiedTheme({
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
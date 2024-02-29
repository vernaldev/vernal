import { BackstageOverrides } from '@backstage/core-components';

export const customThemeOverrides = (): BackstageOverrides => {
  return {
    BackstagePage: {
      root: {
        display: 'grid',
        overflow: 'hidden !important',
        gridTemplateColums: '30px 280px 3fr 30px',
        gridTemplateAreas:
          '"header header header header" ". sidenav content ." ". sidenav content . "',
      },
    },

    BackstageHeader: {
      header: {
        height: '80px',
        gridArea: 'header',
        display: 'flex',
        borderBottom: `1px solid #FFFFFF`,
        backgroundImage: `none`,
        backgroundPosition: 'center',
        padding: '50px',
        boxShadow: 'none',
        background: `#FFFFFF`
      },

      title: {
        color: `#FFFFFF`,
        fontSize: 24,
      },
      subtitle: {
        color: `#666666`,
      },
      type: {
        color: `#FFFFFF`,
      },
    },
    BackstageHeaderLabel: {
      label: {
        color: '#FFFFFF',
      },
      root: { color: '#FFFFFF',  },
      value: { color: '#FFFFFF' },
    },

  };
};

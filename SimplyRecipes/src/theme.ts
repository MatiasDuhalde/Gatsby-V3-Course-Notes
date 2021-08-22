import { createTheme, responsiveFontSizes } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createTheme({
  spacing: factor => `${0.25 * factor}rem`,
  overrides: {
    MuiCssBaseline: {
      '@global': {
        html: {
          '& a': {
            textDecoration: 'none',
          },
        },
      },
    },
  },
});

export default responsiveFontSizes(theme);

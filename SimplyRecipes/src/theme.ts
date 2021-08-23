import { createTheme, responsiveFontSizes } from '@material-ui/core/styles';

const baseTheme = createTheme({
  spacing: factor => `${0.25 * factor}rem`,
});

// A custom theme for this app
const theme = createTheme({
  ...baseTheme,
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
    // MuiTypography: {
    //   gutterBottom: {
    //     marginBottom: baseTheme.spacing(20),
    //   },
    // },
  },
});

export default responsiveFontSizes(theme);

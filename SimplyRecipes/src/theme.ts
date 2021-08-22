import { createTheme, responsiveFontSizes } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createTheme({
  spacing: factor => `${0.25 * factor}rem`,
});

export default responsiveFontSizes(theme);

import { deepPurple, lightGreen } from "@mui/material/colors";

import { createTheme } from "@mui/material/styles";

// Create a theme instance.
const theme = createTheme({
	palette: {
		primary: {
			main: deepPurple[900],
		},
		secondary: {
			main: lightGreen[800],
		},
	},
});

export default theme;

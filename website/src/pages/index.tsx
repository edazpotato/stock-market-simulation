import { Box, Button, Container, Typography } from "@mui/material";

export default function Index() {
	return (
		<Container maxWidth="sm">
			<Box sx={{ my: 4 }}>
				<Typography variant="h4" component="h1" gutterBottom>
					Stock market simulation will be here soon(tm)
				</Typography>
				<Button variant="outlined">Button!</Button>
			</Box>
		</Container>
	);
}

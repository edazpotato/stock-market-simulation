import { Box, Button, Container, Typography } from "@mui/material";

import Link from "../components/Link";

export default function Index() {
	return (
		<Container maxWidth="sm">
			<Box sx={{ my: 4 }}>
				<Typography variant="h4" component="h1" gutterBottom>
					Next.js v5-beta with TypeScript example
				</Typography>
				<Button>Button!</Button>
				<Link href="/about" color="secondary">
					Go to the about page
				</Link>
			</Box>
		</Container>
	);
}

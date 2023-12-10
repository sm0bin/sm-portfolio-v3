import { Box, Container, Divider, Link, Typography } from "@mui/material";

const Footer = () => {
    return (
        <Box>
            <Divider inset="context" />
            <Container sx={{ display: 'flex', my: 2 }}>
                <Typography
                    sx={{ flexGrow: 1 }}>
                    All rights reserved © 2023 Shehjad Mobin
                </Typography>
                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                    <Link underline="hover" color="neutral">Terms & Condition</Link>
                    <Link underline="hover" color="neutral">Privacy Policy</Link>
                </Box>
            </Container >
        </Box>
    );
};

export default Footer;
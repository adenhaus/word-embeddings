import { Box, Link, Typography } from "@mui/joy";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', mb: 2 }}>
      <Typography level='body-xs' sx={{ color: 'text.secondary', textAlign: 'center', mt: 2, mx: 'auto' }}>
        © {currentYear} <Link href='https://github.com/adenhaus/word-embeddings' target='_blank'>Word Embeddings Playground</Link>
      </Typography>
    </Box>
  );
};

export default Footer;
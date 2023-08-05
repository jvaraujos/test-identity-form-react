import { Box, Typography, Stack } from '@mui/material';

export default function BlockContent() {
  return (
    <Stack
      spacing={2}
      alignItems="center"
      justifyContent="center"
      direction={{ xs: 'column', md: 'row' }}
      sx={{ width: 1, textAlign: { xs: 'center', md: 'left' } }}
    >

      <Box sx={{ p: 3 }}>
        <Typography gutterBottom variant="h5">
          Arraste ou Selecione
        </Typography>

        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Arraste o arquivo aqui ou clique&nbsp;
          <Typography
            variant="body2"
            component="span"
            sx={{ color: 'primary.main', textDecoration: 'underline' }}
          >
            Explorar
          </Typography>
          &nbsp; em seu device.
        </Typography>
      </Box>
    </Stack>
  );
}

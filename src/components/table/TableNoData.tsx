// @mui
import { TableRow, TableCell, CircularProgress, Typography, styled, Box } from '@mui/material';
//
import EmptyContent from '../EmptyContent';

// ----------------------------------------------------------------------

type Props = {
  isNotFound: boolean;
  isLoading: boolean;
};

const RootStyle = styled(Box)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  textAlign: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: theme.spacing(8, 2),
}));

export default function TableNoData({ isNotFound, isLoading, ...other }: Props) {
  const body = () => {
    if (isLoading) {
      return (
        <TableCell colSpan={12}>
          <RootStyle {...other}>
            <CircularProgress />
          </RootStyle>
        </TableCell>
      );
    }
    if (isNotFound) {
      return (
        <TableCell colSpan={12}>
          <EmptyContent
            title="Não há dados"
            sx={{
              '& span.MuiBox-root': { height: 160 },
            }}
          />
        </TableCell>
      );
    }
    return <TableCell colSpan={12} sx={{ p: 0 }} />;
  };

  return body();
}

// form
import { useFormContext, Controller } from 'react-hook-form';
// @mui
import { Switch, FormControlLabel, FormControlLabelProps } from '@mui/material';

// ----------------------------------------------------------------------

type IProps = Omit<FormControlLabelProps, 'control'>;

interface Props extends IProps {
  name: string;
  disabled?: boolean;
}

export default function RHFSwitch({ name, disabled, ...other }: Props) {
  const { control } = useFormContext();

  return (
    <FormControlLabel
      control={
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <Switch {...field} checked={field.value} disabled={!!disabled ? disabled : false} />
          )}
        />
      }
      {...other}
    />
  );
}

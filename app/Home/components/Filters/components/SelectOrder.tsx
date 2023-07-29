import * as React from 'react';
import Box from '@mui/material/Box';
import {InputLabel, FormControl, NativeSelect} from '@mui/material/';

function SelectOrder() {
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
          Ordenar por
        </InputLabel>
        <NativeSelect
          defaultValue={30}
          inputProps={{
            name: 'age',
            id: 'uncontrolled-native',
          }}
        >
          <option value={10}>Nada</option>
          <option value={20}>De menor a mayor precio</option>
          <option value={30}>De mayor a menor precio</option>
          <option value={30}>Más nuevos primero</option>
          <option value={30}>Más viejos primero</option>
        </NativeSelect>
      </FormControl>
    </Box>
  );
}

export default SelectOrder;
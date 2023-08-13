import React from 'react';
import {Box, InputLabel, FormControl, NativeSelect} from '@mui/material/';
import { SetFilterProp } from '../models/setFilterProp';

function SelectOrder({setFilters}: SetFilterProp) {

  const handleSort = (orderBy: number) => {
    setFilters(prev => ({
      ...prev,
      orderBy: orderBy
    }))
  }

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
          onChange={(e) => handleSort(Number(e.target.value))}
        >
          <option value={30}>Nada</option>
          <option value={1}>De menor a mayor precio</option>
          <option value={2}>De mayor a menor precio</option>
          <option value={4}>Más nuevos primero</option>
          <option value={3}>Más viejos primero</option>
        </NativeSelect>
      </FormControl>
    </Box>
  );
}

export default SelectOrder;
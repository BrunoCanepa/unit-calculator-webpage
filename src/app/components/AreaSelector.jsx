'use client'

import * as React from 'react';
import { Autocomplete, TextField } from '@mui/material';



export default function AreaSelector({ onSelectArea }) {
    let areas = ["Velocidad", "Distancia", "Tiempo", "Masa", "Volumen", "Área", "Presión", "Energía", "Fuerza", "Temperatura"];
    return (
        <div>
            <Autocomplete
                disablePortal
                onChange={(event, newValue) => onSelectArea(newValue)}
                options={areas}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Area" />}
            />
        </div>
    )
}
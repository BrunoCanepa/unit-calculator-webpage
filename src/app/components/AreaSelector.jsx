'use client'

import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';



export default function AreaSelector() {
    let areas = ["Velocidad", "Distancia", "Tiempo", "Masa", "Volumen", "Área", "Presión", "Energía", "Fuerza", "Temperatura"];
    return (
        <div>
            <Autocomplete
                disablePortal
                options={areas}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Area" />}
            />
        </div>
    )
}
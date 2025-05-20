'use client'
import React from "react"
import { TextField, MenuItem } from "@mui/material"


export default function UnitSelector({ area, onSelect }) {

    const optionsByArea = {
        "Velocidad": ["km/h", "m/s", "km/s"],
        "Distancia": ["km", "m", "cm"]
    }

    const options = area ? optionsByArea[area] || [] : [];

    return (
        <div>
            <TextField select label="Opcion" fullWidth
                onChange={(event, newValue) => onSelect(newValue)}
            >
                {options.map((option) => (
                    <MenuItem key={option} value={option}

                    >
                        {option}
                    </MenuItem>
                ))}
            </TextField>

        </div>
    )
}

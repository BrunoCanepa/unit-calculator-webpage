"use client"

import { Input } from "@mui/material"

export default function ValueInput({ placeholder, value, onSelectValue }) {
    return (
        <div>

            <Input placeholder={placeholder} size="md" variant="outlined" color="black" value={value} onChange={(event) => onSelectValue(event.target.value)} />
        </div>
    )
}
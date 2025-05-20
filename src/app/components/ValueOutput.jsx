"use client"

import { Typography } from "@mui/material"

export default function ValueOutput({ value }) {
    return (
        <div>
            <Typography color="black" >{value}</Typography>
        </div>
    )
}
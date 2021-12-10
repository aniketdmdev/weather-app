import React from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Typography } from '@mui/material';

function Dropdown({ options, onChange, value, info, label }) {
    return (
        <FormControl className="dropDownMenu" fullWidth>
            <InputLabel >{label}</InputLabel>
            <Select
                value={value}
                label={label}
                onChange={onChange}
            >
                {
                    options.map((option, index) => {
                        return <MenuItem key={index} value={option.id}>{option.name}</MenuItem>
                    })
                }
            </Select>
            <Typography variant="caption">{info}</Typography>
        </FormControl>
    )
}

export default Dropdown;

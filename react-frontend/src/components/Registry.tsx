import { Box, TextField, InputAdornment  } from '@mui/material'
import AccountCircle from '@mui/icons-material/AccountCircle';

export default function Registry() {
  return (
    <Box width={'100%'}>
      <TextField
        variant='standard'
        label='Username'
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
      />
      <TextField variant='standard' label='Email' />
      <TextField variant='standard' label='Password' />

    </Box>
  )
}

import { TextField, InputAdornment, Card, CardContent, Typography, CardActions, Button, IconButton } from '@mui/material'
import { AccountCircle, Password, Email, Visibility, VisibilityOff } from '@mui/icons-material'
import { useState } from 'react'

export default function Registry() {
  const [ showPassword, setShowPassword ] = useState(false)

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

	return (
		<Card sx={{ maxWidth: '100%' }} className='text-center'>
			<CardContent className='p-8'>
        <Typography gutterBottom variant='h4' component='h4'>
          { 'Registry' }
        </Typography>
				<TextField
					variant='standard'
					label='Username'
          className='pb-4'
          fullWidth
					InputProps={{
						startAdornment: (
							<InputAdornment position='start'>
								<AccountCircle />
							</InputAdornment>
						),
					}}
				/>
				<TextField
					variant='standard'
					label='Email'
          className='pb-4'
          fullWidth
          InputProps={{
						startAdornment: (
							<InputAdornment position='start'>
								<Email />
							</InputAdornment>
						),
					}}
				/>
				<TextField
					variant='standard'
					label='Password'
          className='pb-4'
          type='password'
          fullWidth
          InputProps={{
						startAdornment: (
							<InputAdornment position='start'>
								<Password />
							</InputAdornment>
						),
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>

            )
					}}
				/>
			</CardContent>
      <CardActions className='justify-end'>
        <Button size="large">Clear</Button>
        <Button size="large">Sign up</Button>
      </CardActions>
		</Card>
	)
}

import * as React from 'react';
import { Container, Box, Stack, Tab, AppBar } from '@mui/material'
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import './App.css'
import Login from './components/Login'
// import Logout from './components/Logout'
import Registry from './components/Registry';


const App = () => {
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Container maxWidth="sm" className='mt-12'>
      <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
          <AppBar position='static' color='transparent' sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList indicatorColor="primary" onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Login" value="1" />
              <Tab label="Registry" value="2" />
            </TabList>
          </AppBar>

          <TabPanel value="1">
            <Stack direction={'column'}>
              <Login/>
              {/* <Logout /> */}
            </Stack>
          </TabPanel>

          <TabPanel value="2">
            <Registry />
          </TabPanel>
          
        </TabContext>
      </Box>
    </Container>
  );
}

export default App

import {Button, Container} from '@mui/material';
import { useEffect } from 'react';
import {ThemeProvider} from '@mui/material';
import theme from './styles/theme';
import {Appbar} from './component/index'


function App() {
  useEffect(()=>{
      document.title="E-commerce ALH "
  },[]);

  return (
    <ThemeProvider theme={theme}>
    <Container maxWidth="xl" sx={{backgroundColor:"#fff"}}>
      <Button variant="contained">numan</Button>
      <Appbar/>
   </Container>
   </ThemeProvider>
  );
}

export default App;

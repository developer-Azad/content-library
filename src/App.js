import logo from './logo.svg';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import ChakComponent from './Components/ChakComponents/ChakComponent/ChakComponent';

function App() {
  return (
    <ChakraProvider cssVarsRoot='#app'> 
      <ChakComponent></ChakComponent>
    </ChakraProvider>
  );
}

export default App;

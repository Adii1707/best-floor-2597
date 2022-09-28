import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Flex,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import Login from "./Pages/Login";
import Signup from './Pages/SignUp';

function App() {
  return (
    <ChakraProvider theme={theme}>
    
        <Signup/>
        <Login />
    
    </ChakraProvider>
  );
}

export default App;

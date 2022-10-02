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
import Navbar from './Component/Navbar';
import AllRoutes from "./Pages/AllRoutes";

function App() {
  return (
    <ChakraProvider theme={theme}>
       <Navbar/>
       <AllRoutes />
    </ChakraProvider>
  );
}

export default App;

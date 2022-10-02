import {Link} from "react-router-dom";
import {  IconButton,Flex,ButtonGroup,Heading,Box,Spacer, Input, Text } from '@chakra-ui/react'
import { SearchIcon } from "@chakra-ui/icons";

const Navbar = ()=>{
    return (
        <>
        <Flex minWidth='max-content' alignItems='center' gap='2'>
        <Flex p='2'>
        <IconButton aria-label='Search database' icon={<SearchIcon />} />
        <Input type="text" placeholder="Search Sephora" />
  </Flex>
  <Box p='2' alignItems={"center"} ml = {75}>
    <Heading size='xl' textAlign="center">S E P H O R A</Heading>
  </Box>
  <Spacer />
  <ButtonGroup gap='1' mr ={8}>
    <Link to= "/"><Text color="pink.500">Home</Text></Link>
    <Link to="./Cart"><Text color="pink.500">Cart</Text></Link>
    <Link to="./Login"><Text color="pink.500">Login</Text></Link>
    <Link to= "./SignUp"><Text color="pink.500">SignUp</Text></Link>
  </ButtonGroup>
</Flex>
        </>
    )
}
export default Navbar;
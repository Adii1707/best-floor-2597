import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,Input,Box,Heading, Center, Button
  } from '@chakra-ui/react'

const Signup = ()=>{

return (
    <>
     <Heading fontSize={20} textAlign={"center"} mt={4}>SIGN UP</Heading>
     <Center>
     <Box w= {400}>
<FormControl m ={5}>
<FormLabel>Name</FormLabel>
  <Input type='text' />
  <FormLabel>Phone Number</FormLabel>
  <Input type='number' />
  <FormLabel>Email address</FormLabel>
  <Input type='email' />
  <FormHelperText>We'll never share your email.</FormHelperText>
  <FormLabel>Password</FormLabel>
  <Input type='password' />
  <Button bg="pink.500" ml={8} mt={8} w={200} alignItems="center">SIGNUP</Button>
</FormControl>
</Box>
     </Center>
    </>
   
)


}

export default Signup;
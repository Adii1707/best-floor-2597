import {
    FormControl,
    FormLabel,
    FormHelperText,Input,Box,Heading, Center, Button,
  } from '@chakra-ui/react'

const Login = ()=>{


  

return (
    <>
     <Heading textAlign={"center"}>Login</Heading>
     <Center>
     <Box mt = {13} w= {400} >
<FormControl>
  <FormLabel mt={10}>Email address</FormLabel>
  <Input type='email' />
  <FormHelperText>We'll never share your email.</FormHelperText>
  <FormLabel>Password</FormLabel>
  <Input type='password' />
  <Button bg="pink.500" w={200} mt={5}>LOGIN</Button>
</FormControl>
</Box>
     </Center>

    </>
   
)


}

export default Login;
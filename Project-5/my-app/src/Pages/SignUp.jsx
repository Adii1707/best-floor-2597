import {
    FormControl,
    FormLabel,
    FormHelperText,Input,Box,Heading, Center,
  } from '@chakra-ui/react'
import { useState } from 'react';

const initState = {
  name: "",
  email: "",
  password: "",
  number: "",
}

const Signup = ()=>{
const [user, setuser] = useState(initState);

const handlechange =(e)=>{
  const {name, value} = e.target;
      setuser({...user, [name]: value}) 

}

const {name,email, number, password} = user;

 const handleclick= (e)=>{
  e.preventDefault();
        localStorage.setItem("user",JSON.stringify(user));     
  }




return (
    <>
     <Heading fontSize={20} textAlign={"center"} mt={4}>SIGN UP</Heading>
     <Center>
     <Box w= {400}>
<FormControl onSubmit={()=>handleclick} m ={5}>
<FormLabel>Name</FormLabel>
  <Input type='text' name="name" value={name} onChange={handlechange} />
  <FormLabel >Phone Number</FormLabel>
  <Input type='number' name="number" value={number} onChange={handlechange} />
  <FormLabel>Email address</FormLabel>
  <Input type='email' name="email" value={email} onChange={handlechange} />
  <FormHelperText>We'll never share your email.</FormHelperText>
  <FormLabel>Password</FormLabel>
  <Input type='password' name="password" value={password} onChange={handlechange} />
  <Input type='submit' bg="pink.500" ml={8} mt={8} w={200} alignItems="center" />
</FormControl>
</Box>
     </Center>
    </>
   
)


}

export default Signup;
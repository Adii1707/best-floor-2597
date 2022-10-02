import { Box, Button, Container, Heading, Image, SimpleGrid, Text,Flex,Center, Select } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Data = [
    {
        image: "https://cdn15.nnnow.com/web-images/medium/styles/G80RER5PPS3/1631790635720/1.jpg",
        name: "HUDA BEAUTY",
        desc: "#Faux Filter Luminous Matte Full Coverage Liquid Foundation - 300N Latte",
        price: 3300,
    },
    {
        image: "https://cdn09.nnnow.com/web-images/medium/styles/YSXYR0CURFQ/1631791050442/1.jpg",
        name: "HUDA BEAUTY",
        desc: "#Faux Filter Luminous Matte Full Coverage Liquid Foundation - 300N Latte",
        price: 3300,
    },
    {
        image: "https://cdn16.nnnow.com/web-images/medium/styles/CH65NKWC2ZU/1533201155002/1.jpg",
        name: "SEPHORA COLLECTION",
        desc: "#Faux Filter Luminous Matte Full Coverage Liquid Foundation - 300N Latte",
        price: 1352,
    },
    {
        image: "https://cdn03.nnnow.com/web-images/medium/styles/75HLNNHR3CH/1551249758446/1.jpg",
        name: "SEPHORA COLLECTION",
        desc: "#Faux Filter Luminous Matte Full Coverage Liquid Foundation - 300N Latte",
        price: 1500,
    },
    {
        image: "https://cdn16.nnnow.com/web-images/medium/styles/CH65NKWC2ZU/1533201155002/1.jpg",
        name: "HUDA BEAUTY",
        desc: "#Faux Filter Luminous Matte Full Coverage Liquid Foundation - 300N Latte",
        price: 2955,
    },
    {
        image: "https://cdn13.nnnow.com/web-images/medium/styles/ZCBB5GMA7B4/1655707355173/1.jpg",
        name: "HUDA BEAUTY",
        desc: "#Faux Filter Luminous Matte Full Coverage",
        price: 1499,
    },
    {
        image: "https://cdn03.nnnow.com/web-images/medium/styles/T3MQPLRYA72/1632206084348/1.jpg",
        name: "NATASHA DENONA",
        desc: "#Faux Filter Luminous Matte Full Coverage",
        price: 2699,
    },
    {
        image: "https://cdn10.nnnow.com/web-images/medium/styles/NHQO3R3X9M3/1533203888871/1.jpg",
        name: "DENONA",
        desc: "#Faux Filter Luminous Matte Full Coverage",
        price: 2810,
    },
    {
        image: "https://cdn05.nnnow.com/web-images/medium/styles/1LDIEEW1CQW/1569310805705/1.jpg",
        name: "HUDDA",
        desc: "#Faux Filter Luminous Matte Full Coverage",
        price: 3299,
    },
    {
        image: "https://cdn13.nnnow.com/web-images/medium/styles/K6QHZVJ43H6/1600069770420/1.jpg",
        name: "NATASHA",
        desc: "#Faux Filter Luminous Matte Full Coverage",
        price: 1299,
    },
    {
        image: "https://cdn06.nnnow.com/web-images/medium/styles/MWMVLMAOP67/1605089862026/1.jpg",
        name: "BAD",
        desc: "#Faux Filter Luminous Matte Full Coverage",
        price: 1599,
    },
    {
        image: "https://cdn00.nnnow.com/web-images/medium/styles/LX577PFWOAN/1605089041662/1.jpg",
        name: "THEY",
        desc: "#Faux Filter Luminous Matte Full Coverage",
        price: 1699,
    },
    {
        image: "https://cdn12.nnnow.com/web-images/medium/styles/GGX0OA2SZQZ/1602578402902/1.jpg",
        name: "HUDDA BEAUTY",
        desc: "#Faux Filter Luminous Matte Full Coverage",
        price: 1499,
    },
    {
        image: "https://cdn16.nnnow.com/web-images/medium/styles/DOQC70AQ1O2/1633678341239/1.jpg",
        name: "NATASHA DENONA",
        desc: "Love Glow Check Palette",
        price: 5000,
    },
    {
        image: "https://cdn16.nnnow.com/web-images/medium/styles/DOQC70AQ1O2/1633678341239/1.jpg",
        name: "NATASHA DENONA",
        desc: "Bloom Palette",
        price: 4500,
    },
    {
        image: "https://cdn03.nnnow.com/web-images/medium/styles/75HLNNHR3CH/1551249758446/1.jpg",
        name: "SEPHORA COLLECTION",
        desc: "#Faux Filter Luminous Matte Full Coverage Liquid Foundation - 300N Latte",
        price: 1500,
    },
]

const MakeUp = ()=>{

const [data, setData] = useState([]);

useEffect(()=>{
    setData(Data);
},[])

const handleclick = ()=>{

}


return (
    <>
        <Center>
        <Flex w= "full" gap={31} boxShadow='lg' p='6' rounded='md' bg='white' >
            
            <Box ml={10} className= "box" >
               <Link to="/Sale"> <Heading fontSize={20}>SALE</Heading></Link>
            </Box>
            <Box ml={10} className="box">
                <Link to="/MakeUp"><Heading fontSize={20}>MAKEUP</Heading></Link>
            </Box>
            <Box className="box" ml={10}>
                <Heading fontSize={20}>SKINCARE</Heading>
            </Box>
            <Box className="box" ml={10}>
                <Heading fontSize={20}>FRAGRANCE</Heading>
            </Box>
            <Box className="box" ml={10}>
                <Heading fontSize={20}>HAIRCARE</Heading>
            </Box>
            <Box className="box" ml={10}  >
                <Heading fontSize={20}>TOOLS & BRUSHES</Heading>
            </Box>
            <Box className="box" ml={10}>
                <Heading fontSize={20}>BRANDS</Heading>
            </Box>
        </Flex>
        </Center>
        <Box w={400} >
            <Flex gap={2} >
                <Text fontFamily={"bold"} mt={2}>SORT:</Text>
                <Select placeholder='Select option' onclick={handleclick}>
  <option value='option1' >Popularity</option>
  <option value='lth'>Price: Low To High</option>
  <option value='htl'>Price: High To Low </option>
                </Select>
            </Flex>
        </Box>

    <SimpleGrid columns={{base: 1, md: 2, xl:4}} spacing={5} m= {3}>
{data.map((item)=> 
     (

 <Box ml= {13} >
    <Box>
      <Image src={item.image} w = {250} h = {380} />
      <Text fontFamily={"bold"} m={2} >{item.name}</Text>
      <Text fontSize={10} m={2}>{item.desc}</Text>
      <Text fontSize={18} m={2}  fontFamily={"bold"}>Rs: {item.price}</Text> 
      <Button colorScheme='pink' m={2} variant='solid' align='center' disabled = {onclick}  >Add To Cart</Button>
  </Box>
</Box>
     ))}
</SimpleGrid>

    </>
)

}
export default MakeUp;
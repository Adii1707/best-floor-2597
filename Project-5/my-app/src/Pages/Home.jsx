import { Box, Center, Flex, Heading, Image, Text } from "@chakra-ui/react"
import {Link} from "react-router-dom";
import {
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    SliderMark,
  } from '@chakra-ui/react';
import { useState } from "react";

const Home = ()=>{
    
    const img1 = [
        {img: "https://logan.nnnow.com/content/dam/nnnow-project/20-sep-2022/Mac_Topbannerdesktop.jpg"},
        {img: "https://logan.nnnow.com/content/dam/nnnow-project/17-aug-2022/Benefit_Homepagebanner_Colordesktop.jpg"},
        {img: "https://logan.nnnow.com/content/dam/nnnow-project/15-sep-2022/Sephora_Homepagebanner_kajaldesktop.jpg"},
        {img: "https://logan.nnnow.com/content/dam/nnnow-project/24-aug-2022/EsteeLauder_TopBannerdesktop.jpg"},

          ]

    const [val, setval] = useState([])
  
    const handleonChangeEnd = ()=>{
        setval(img1)
    }



    return (
        <>
        <Center>
        <Flex w= "full" gap={31} boxShadow='lg' p='6' rounded='md' bg='white' >
            
            <Box ml={10}>
               <Link> <Heading fontSize={20}>SALE</Heading></Link>
            </Box>
            <Box ml={10}>
                <Heading fontSize={20}>MAKEUP</Heading>
            </Box>
            <Box ml={10}>
                <Heading fontSize={20}>SKINCARE</Heading>
            </Box>
            <Box ml={10}>
                <Heading fontSize={20}>FRAGRANCE</Heading>
            </Box>
            <Box ml={10}>
                <Heading fontSize={20}>HAIRCARE</Heading>
            </Box>
            <Box ml={10}>
                <Heading fontSize={20}>TOOLS & BRUSHES</Heading>
            </Box>
            <Box ml={10}>
                <Heading fontSize={20}>BRANDS</Heading>
            </Box>
        </Flex>
        </Center>
        <Slider colorScheme='pink' aria-label='slider-ex-5'>
  <SliderTrack>
    <SliderFilledTrack />
  </SliderTrack>
  <SliderThumb />
</Slider>
<Image h={500} w={"full"} src="https://logan.nnnow.com/content/dam/nnnow-project/15-sep-2022/Sephora_Homepagebanner_kajaldesktop.jpg" />
  
<Center>
        <Flex w= "full" gap={31} boxShadow='lg' p='6' rounded='md' bg='white' >
            
        <Box ml={10} bg="black" w={150} h={20}>
                <Text pt={5}  fontSize={16} color="white" textAlign={"center"}>STEALS & DEALS</Text>
            </Box>
            <Box ml={10} bg="black" w={150} h={20}>
                <Text pt={5}  fontSize={16} color="white" textAlign={"center"}>BEAUTY MINIS UNDER 999</Text>
            </Box>
            <Box ml={10} bg="black" w={150} h={20}>
                <Text pt={5}  fontSize={16} color="white" textAlign={"center"}>EVERYDAY ESSENTIAL</Text>
            </Box>
            <Box ml={10} bg="black" w={150} h={20}>
                <Text pt={5}  fontSize={16} color="white" textAlign={"center"}>TRENDING</Text>
            </Box>
            <Box ml={10} bg="black" w={150} h={20}>
                <Text pt={5}  fontSize={16} color="white" textAlign={"center"}>EDITOR'S PICKS</Text>
            </Box>
            <Box ml={10} bg="black" w={150} h={20}>
                <Text pt={5} fontSize={16} color="white" textAlign={"center"}>TOP FRAGRANCES</Text>
            </Box>       
        </Flex>
        </Center>
        </>
    )
}
export default Home;
import { Box, Button, Center, Flex, Heading, Image, Input, Text } from "@chakra-ui/react"
import {Link} from "react-router-dom";
import { SimpleGrid } from '@chakra-ui/react';
import 'react-slideshow-image/dist/styles.css';

import { useState } from "react";
import React from 'react';
import { Slide } from 'react-slideshow-image';
import "./slides.css";



const Home = ()=>{
    // const img = Example();
    const img1 = [
         "https://logan.nnnow.com/content/dam/nnnow-project/15-sep-2022/SC_TopBanner_Exclusivelyatsephoradesktop.jpg",
         "https://logan.nnnow.com/content/dam/nnnow-project/20-sep-2022/Mac_Topbannerdesktop.jpg",
         "https://logan.nnnow.com/content/dam/nnnow-project/15-sep-2022/Sephora_Homepagebanner_kajaldesktop.jpg",
         "https://logan.nnnow.com/content/dam/nnnow-project/24-aug-2022/EsteeLauder_TopBannerdesktop.jpg",

          ]


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
        <Slide h={800} >
            <Box className="each-slide-effect"  display="flex" >
                <Box h={500} w={"full"} style={{ 'backgroundImage': `url(${img1[0]})` }}>
                </Box>
            </Box>
            <Box className="each-slide-effect"  display="flex" >
                <Box h={500} w={"full"} style={{ 'backgroundImage': `url(${img1[1]})` }}>
                   
                </Box>
            </Box>
            <Box className="each-slide-effect"  display="flex"  >
                <Box h={500} w={"full"} style={{ 'backgroundImage': `url(${img1[2]})` }}>
                </Box>
            </Box>
            <Box className="each-slide-effect"  display="flex"  >
                <Box h={500} w={"full"} style={{ 'backgroundImage': `url(${img1[3]})` }}>
                </Box>
            </Box>
        </Slide>
  
{/* <Image h={500} w={"full"} src="https://logan.nnnow.com/content/dam/nnnow-project/15-sep-2022/Sephora_Homepagebanner_kajaldesktop.jpg" /> */}
  
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
        <Box>
            <Text fontFamily={"bold"} lineHeight={8} fontSize="25px" fontStyle={"italic"} textAlign={"center"}>#SephorabrandOfTheWeek</Text>
        </Box>
        <Box>
            <Image ml={60} mb={10} src= "https://logan.nnnow.com/content/dam/nnnow-project/22-sep-2022/MAC_Brandoftheweekdesktop.jpg" w={940} h={180} />
        </Box>

        <SimpleGrid columns={3} spacing={10} m={10}>
          <Box>
             <Image src="https://logan.nnnow.com/content/dam/nnnow-project/22-sep-2022/MAC_Brandoftheweek_TileEye.jpg"  />
             <Text textAlign={"center"} >EYES</Text>
          </Box>
          <Box>
             <Image src="https://logan.nnnow.com/content/dam/nnnow-project/22-sep-2022/MAC_Brandoftheweek_TileLips.jpg" />
             <Text textAlign={"center"} >LIPS</Text>
          </Box>
          <Box>
             <Image src="https://logan.nnnow.com/content/dam/nnnow-project/22-sep-2022/MAC_Brandoftheweek_TileFace.jpg" />
             <Text textAlign={"center"} >FACE</Text>
          </Box>
          
</SimpleGrid>
      <Box>
        <Heading textAlign={"center"} >Just Landed</Heading>
      </Box>
      <SimpleGrid columns={3} spacing={7} m={6}>
          <Box>
             <Image src="https://cdn02.nnnow.com/web-images/medium/styles/0SY7OCB8YQD/1662448603131/1.jpg"  />
             <Text textAlign={"center"} fontFamily="bold" >OLAPLEX</Text>
             <Text textAlign={"center"} fontFamily="bold">Rs. 2,950</Text>

          </Box>
          <Box>
             <Image src="https://cdn11.nnnow.com/web-images/medium/styles/VDLYY2JHV2V/1662106601741/1.jpg" />
             <Text textAlign={"center"} fontFamily="bold" >BURBERRY</Text>
             <Text textAlign={"center"} fontFamily="bold" >Rs. 5,600-Rs. 9,400</Text>

          </Box>
          <Box w={500}>
             <Image src="https://logan.nnnow.com/content/dam/nnnow-project/22-sep-2022/MAC_Video_SS.jpg" />
             <Text textAlign={"center"} >MAC Fix+ 5-in-1 Setting Spray</Text>
          </Box>
          
</SimpleGrid>
     
     <Box  w= "full" h={100} m ={5} >
          <Image src="https://logan.nnnow.com/content/dam/nnnow-project/22-march-2022/Loyalty_Strip_Desk.jpg" />
     </Box> 
     <Box textAlign={"center"} m ={8}>
        <Heading fontWeight={"semibold"}>Autumn Favorites</Heading>
     </Box>
         
     <SimpleGrid columns={3} spacing={10} m={6}>
          <Box>
             <Image src="https://logan.nnnow.com/content/dam/nnnow-project/01-sep-2022/BurntBlush.jpg"  />
          </Box>
          <Box>
             <Image src="https://logan.nnnow.com/content/dam/nnnow-project/01-sep-2022/LoadedLashes.jpg" />

          </Box>
          <Box>
             <Image src="https://logan.nnnow.com/content/dam/nnnow-project/01-sep-2022/CoolJewels.jpg" />
          </Box>
          
</SimpleGrid>
           <Box m={6}>
             <Image src="https://logan.nnnow.com/content/dam/nnnow-project/01-oct-2020/sephora/2OCT20_PREHEADER_4_DESK.jpg" />
          </Box>

          <SimpleGrid columns={6} spacing={10} m={6}>
          <Box>
             <Image src="https://logan.nnnow.com/content/dam/nnnow-project/17-jan-2020/logo-dsk/scdsk.jpeg"  />
          </Box>
          <Box>
             <Image src="https://logan.nnnow.com/content/dam/nnnow-project/11-oct-2021-/12OCT21-TILE-MUFE(1).jpg"  />
          </Box>
          <Box>
             <Image src="https://logan.nnnow.com/content/dam/nnnow-project/17-jan-2020/logo-dsk/bendsk.jpg"  />
          </Box>
          <Box>
             <Image src="https://logan.nnnow.com/content/dam/nnnow-project/05-jan-2022/TF_Logo(1).jpg"  />
          </Box>
          <Box>
             <Image src="https://logan.nnnow.com/content/dam/nnnow-project/03-jan-2022/se/Lancome_Logo(1).jpeg"  />
          </Box>
          <Box>
             <Image src="https://logan.nnnow.com/content/dam/nnnow-project/17-jan-2020/logo-dsk/HDdesk.jpg"  />
          </Box>
          
</SimpleGrid>
          <Box m={6}>
             <Image src="https://logan.nnnow.com/content/dam/nnnow-project/01-oct-2020/sephora/2OCT20_PREHEADER_5_DESK.jpg" />
          </Box>

          <SimpleGrid columns={3} spacing={10} m={6}>
          <Box>
             <Image src="https://logan.nnnow.com/content/dam/nnnow-project/31-mar-2022/se/SC_NOTB_BigByDefinitionMascara.jpg"  />
          </Box>
          <Box>
             <Image src="https://logan.nnnow.com/content/dam/nnnow-project/31-mar-2022/se/SC_NOTB_OutrageousPlumpLipgloss.jpg"  />
          </Box>
          <Box>
             <Image src="https://logan.nnnow.com/content/dam/nnnow-project/26-aug-2022/Dior_NOTB.jpg"  />
          </Box>
          <Box>
             <Image src="https://logan.nnnow.com/content/dam/nnnow-project/24-aug-2022/ABH_NOTB_NouveauPalette1.jpg"  />
          </Box>
          <Box>
             <Image src="https://logan.nnnow.com/content/dam/nnnow-project/14-sep-2022/Hudabeauty_NOTB.jpg"  />
          </Box>
          <Box>
             <Image src="https://logan.nnnow.com/content/dam/nnnow-project/24-aug-2022/EsteeLauder_NOTB.jpg"  />
          </Box>
          
</SimpleGrid>
            
            <Box m={6}>
                <Image src="https://logan.nnnow.com/content/dam/nnnow-project/01-oct-2020/sephora/2OCT20_PREHEADER_7_DESK.jpg" />
            </Box>
           <SimpleGrid columns={3} spacing={7} m={6}>
          <Box>
             <Image src="https://logan.nnnow.com/content/dam/nnnow-project/23-march-2022/se-blog/Sephora_MakingaLook_BlogCoverTileOption02.jpg"  />
             <Heading fontWeight={""} fontSize={22} m={2} >MAKING A LOOK</Heading>
             <Text>With Anaita Shroff Adajania</Text>

          </Box>
          <Box>
             <Image src="https://logan.nnnow.com/content/dam/nnnow-project/24dec19/23DEC19_BLOG3.jpg" />
             <Heading fontWeight={""} fontSize={22} m={2}>7 MASK</Heading>
             <Text  >that'll save your skin</Text>

          </Box>
          <Box >
             <Image src="https://logan.nnnow.com/content/dam/nnnow-project/24dec19/23DEC19_BLOG4.jpg" />
             <Heading fontWeight={""} fontSize={22} m={2} >LONG LASTING MAKEUP?</Heading>
             <Text>Here's how!</Text>
          </Box>
          
</SimpleGrid>  

              <Box m={6} textAlign={"center"}>
               <Heading fontWeight={"medium"}>GET THE LATEST NEWS & OFFERS IN BEAUTY & FASHION</Heading>
                </Box> 
                <Center m={6}>
                   <Flex spacing={15}>
                    <Input w={400} type="email" p={8} placeholder="Enter your email address" />
                    <Button bg={"black"} ml={8} p={8} color={"white"}>SUBSCRIBE</Button>
                    </Flex> 
                    </Center> 

                     <Box>
                        <Text textAlign={"center"} color="#656565" fontSize={24}>Sephora online India is a trailblazer in the Indian beauty scene</Text>
                    </Box>  
                         <Box m={4} ml= {20} mr={20}>
                        <Text fontSize={13} textAlign={"center"} color="#656565">A leader in luxury beauty and skincare, our purpose at Sephora online India is to create an inviting online beauty shopping experience and inspire fearlessness in our community. Since the Sephora India launch in</Text>
                        <Text fontSize={13} textAlign={"center"} color="#656565">2013, we have been an industry-leading champion of diversity, and empowerment, guided by our longstanding company values.</Text>
                        </Box> 

                     <Box >
                        <Text textAlign={"center"} color="#656565" fontSize={24}>Discover who we are and what we entail only on NNNOW.com</Text>
                    </Box>  
                         <Box m={4} ml= {20} mr={20}>
                        <Text fontSize={13} textAlign={"center"} color="#656565">\nOwned by LVMH Moet Hennessy Louis Vuitton, the world's leading luxury goods group, Sephora was founded in France by Dominique Mandonnaud in 1970 and is defined by its unique, open-sell environment with an ever-increasing assortment of best-selling lipsticks, eyeliners, foundations, eye palettes and more from carefully curated brands such as Make Up For Ever, Estee Lauder, Benefit Cosmetics, Huda Beauty and many more.</Text>
                        {/* <Text fontSize={12} textAlign={"center"} color="#656565">2013, we have been an industry-leading champion of diversity, and empowerment, guided by our longstanding company values.</Text> */}
                        </Box>           

                      <Box>
                        <Text textAlign={"center"} color="#656565" fontSize={24}>Shop Our unrivalled range of Sephora products for a more beautiful you</Text>
                    </Box>  
                    <Box m={4}>
                        <Text fontSize={13} textAlign={"center"} color="#656565">\nOur array on Sephora NNNOW features trusted classics from Pixi, 
                        Elizabeth Arden, Anastasia Beverly Hills, Clinique, Tom Ford, and 
                        Sephora’s own, SEPHORA COLLECTION. Today, Sephora India online is a powerful beauty presence in the digital space, thanks to its unparalleled assortment of prestige products in every category, unbiased service from beauty experts, interactive shopping environment, and innovation.</Text>
                    </Box>
                   
                    <Box m={4} ml= {20} mr={20}>
                        <Text fontSize={13} textAlign={"center"} color="#656565">Through some of our bestsellers such as Sephora lipsticks, Sephora foundations,
                         and other Sephora products, we explore the universe of beauty and wellness with an unbiased approach to experiential retail. We also host expert tutorial videos from our top brands to help you nail the perfect smokey eye or winged eyeliner. Our team of experts in-store also works hard to assure you have a seamless shopping experience with us and helps you define your skin undertones while purchasing the right sephora foundation for you. Sephora continues to give back to communities and advance inclusion in the beauty industry by providing an unrivaled range
                         of shades for Sephora foundations at unbeatable prices.</Text>
                    </Box>
                    <Box m={4} ml= {20} mr={20}>
                        <Text fontSize={13} textAlign={"center"} color="#656565">Sephora in India also encompasses a formidable range of skincare,
                         bath and body products, haircare, fragrances and perfumes from international brands. Many of our brands such as Botanist and Forest Essentials boast of incorporating only natural ingredients in their products, whereas award-winning such as Natasha Denona, Nudestix, Kora Organics, Aveda, Olaplex, and more promise only SLS/Paraben-free formulas in their range of products. Be sure to also check out our range of cruelty-free brands that include best-selling brands such as Caudalie, Smashbox, Dear Dahlia, Juice Beauty and much more. Sephora online hosts the entire range of makeup and skin products available in Sephora stores in India. Buy Sephora online on NNNOW and be the first to be 
                        alerted when we have a major Sephora India sale event coming up!</Text>
                    </Box>
                    <Box m={4} ml= {20} mr={20}>
                        <Text fontSize={13} textAlign={"center"} color="#656565">Start your Sephora India online shopping on NNNOW.com</Text> 
                    </Box>
                    <Box m={4} ml= {20} mr={20}>
                        <Text fontSize={13} textAlign={"center"} color="#656565">Women can now shop their favorite luxury beauty brands on the Sephora site or via the NNNOW mobile app. Be spoilt for choice with a wide variety of makeup, skincare, haircare, bath and body and fragrances that you can shop from the comfort of your home. Discover online shopping that offers advantages such as Gift With Purchase, freebie sachets, and discount offers on beauty! Buy Sephora
                         online at amazing deals and prices at the click of a button.</Text> 
                    </Box>
                   <Center>
                   <Flex gap={4} m={4} >
                        <Heading fontSize={14}>WHO WE ARE</Heading>
                        <Heading fontSize={14}>FREQUENTLY ASKED QUESTIONS</Heading>
                        <Heading fontSize={14}>CONTACT US</Heading>
                         
                    </Flex>
                   </Center>
                   


        </>  
    )
}
export { Home };
import * as React from "react"
import "./styles.css"
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Grid,
  theme,
  Image,
  HStack,
  IconButton,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
  Button,
  Heading,
  SimpleGrid,
  ButtonGroup,
  Stack,
  Flex
} from "@chakra-ui/react"
import { ArrowForwardIcon, HamburgerIcon } from "@chakra-ui/icons"
import { Feature } from "./components/Feature"
import { FcIdea, FcPrivacy, FcServices, FcShop } from 'react-icons/fc'
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"

export const App = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <ChakraProvider theme={theme}>
      <Box flexDirection="column" display="flex" minHeight="100vh">
        <Box backgroundColor="rgb(255, 255, 255)" width="100%" borderBottomWidth={1}>
          <Box paddingLeft="2rem" paddingRight="2rem" maxWidth="80rem" marginLeft="auto" display="flex" justifyContent="space-between" padding="1rem 1.5rem" marginRight="auto">
            <Link><Image src="/egnite.svg" height="2.5rem"></Image></Link>
            <Box display={{ base:"none",  sm: "none", md: "flex" }} alignItems="center">
              <HStack spacing="2rem">
                <Link fontWeight="600" color="blue.500">Home</Link>
                <Link href="#features" fontWeight="600" color="rgb(74, 85, 104)">Features</Link>
                <Link href="https://egnite.dev/marketplace"  target="_blank"  fontWeight="600" color="rgb(74, 85, 104)">Marketplace</Link>
                <Link href="https://egnite.dev/documentation"  target="_blank"  fontWeight="600" color="rgb(74, 85, 104)">Docs</Link>
              </HStack>
            </Box>
            <Box display={{  base:"none",  sm: "none", md: "flex", }}>
              <HStack spacing="2rem">
                <Link href="https://app.egnite.dev/login"  target="_blank"  fontWeight="600" color="rgb(74, 85, 104)">Login</Link>
                <Button as={"a"} href="https://dw4b516oom0.typeform.com/to/amFe8E8d" target="_blank" colorScheme="blue" marginInlineStart="2rem">Get Early Access</Button>
              </HStack>
            </Box>
            <Box display={{  base:"flex", sm: "flex", md: "none" }} alignItems="center">
              <Link onClick={onOpen} aria-label="menu icon" display="flex" align="center"><HamburgerIcon w={6} h={6} /></Link>
            </Box>
            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent marginTop="1rem">
                <ModalHeader><Image src="/egnite.svg" height="2rem"></Image></ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Grid templateColumns="repeat(2, 1fr)" gap={2}>
                    <Box w="100%" padding="0.4rem" borderRadius="0.2rem" _hover={{ backgroundColor: "gray.100" }}><Link marginLeft="0.5rem" fontWeight="600" colorScheme="blue"> Home</Link></Box>
                    <Box w="100%" padding="0.4rem" borderRadius="0.2rem" _hover={{ backgroundColor: "gray.100" }}><Link marginLeft="0.5rem" fontWeight="600" colorScheme="blue"> Features</Link></Box>
                    <Box w="100%" padding="0.4rem" borderRadius="0.2rem" _hover={{ backgroundColor: "gray.100" }}><Link marginLeft="0.5rem" fontWeight="600" colorScheme="blue"> Solutions</Link></Box>
                    <Box w="100%" padding="0.4rem" borderRadius="0.2rem" _hover={{ backgroundColor: "gray.100" }}><Link marginLeft="0.5rem" fontWeight="600" colorScheme="blue"> Documentation</Link></Box>


                  </Grid>
                  <Button  as="a" href="https://dw4b516oom0.typeform.com/to/amFe8E8d" target="_blank" marginTop="2rem" w="100%" colorScheme="purple" onClick={onClose}>
                    Start free trial
                </Button>
                  <HStack marginTop="1rem" marginBottom="1rem" justifyContent="center" align="center"><Text fontWeight="600" color="rgb(74, 85, 104)">Already Registered?</Text><Link fontWeight="600" color="purple.500"> Login</Link></HStack>
                </ModalBody>


              </ModalContent>
            </Modal>
          </Box>
        </Box>
        <Box display="flex" flexDirection={{ base:"column", sm: "column", md: "row" }} justifyContent="center" alignItems="center" flex="1">
          <Box width={{  base:"100%", sm: "100%", md: "50%" }} padding="2rem" height="100%" display="flex" justifyContent="center" alignItems="center" >
            <Box maxWidth="36rem">
              <Box display="inline-flex" flexDirection="row" alignItems="center" backgroundColor="rgb(226, 232, 240)" borderRadius="9999px" padding="0.5rem" minWidth="18rem" marginBottom="2rem" fontSize="0.875rem">
                <Box display="inline-flex" flexDirection="row" alignItems="center" backgroundColor="green.500" borderRadius="9999px" padding="0 0.5rem" fontWeight="700" color="white" fontSize="0.875rem">New</Box>
                <Text fontWeight="500" margin="0 0.5rem">Introduction to the new Egnite Api Builder</Text>
                <ArrowForwardIcon margin="0 0.5rem" />
              </Box>
              <Heading fontSize={{ md:"3.75rem", sm:"2.7rem", base:"2.7rem" }} fontWeight="800">Build <Text display="inline" color="rgb(49, 130, 206)">REST and gRPC apis</Text> without writing code</Heading>
              <Text fontSize="1.25rem" color="rgb(74, 85, 104)" fontWeight="500" marginTop="1.5rem">Egnite gives you the fastest api development experience, driven by its easy to use api builder and api marketplace.</Text>
              <HStack marginTop="2rem">
                <Button  as="a" href="https://dw4b516oom0.typeform.com/to/amFe8E8d" target="_blank" colorScheme="blue" size="lg">
                  Get Early Access
                </Button>
                <Button size="lg" variant="outline">
                  Watch Video
                </Button>
              </HStack>
              <HStack marginTop="2rem">
                <Text>Already Registered ?</Text>
                <Link href="https://app.egnite.dev/login"  target="_blank"  color="blue.500">Login</Link>
              </HStack>
            </Box>
          </Box>

          <Box display={{ base:"none", sm: "none", lg: "flex" }} clipPath="polygon(8% 0%, 100% 0%, 100% 100%, 0% 100%)" width={{ base:"100%", sm: "100%", md: "50%" }} height="100%">
            <Image src="/mockup.png" width="100%" height="calc(100vh - 72px)" objectFit="cover" />

          </Box>
        </Box>
      </Box>
      <Box  id="features"  backgroundColor="white" as="section" py="24">
        <Box
          maxW="2xl"
          mx="auto"
          px={{ base: '6', lg: '8' }}
          pb={{ base: '16', sm: '20' }}
          pt={"1rem"}
          textAlign="center"
        >
          <Heading as="h2" size="3xl" fontWeight="extrabold" letterSpacing="tight">
            Why use Egnite?
        </Heading>
          <Text mt="4" fontSize="lg">
          We give you all the tools that you need to build apis faster at scale.
        </Text>

        </Box>
        <Box pb={"4rem"} maxW={{ base: 'xl', md: '5xl' }} mx="auto" px={{ base: '6', md: '8' }}>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacingX="10" spacingY="14">
            <Feature title="Easy to use Api Builder" icon={<FcIdea />}>
              Building your api with Egnite is just three simple steps. Define the schema, Import the functions you need and you are ready to export the code.
          </Feature>
            <Feature title="Marketplace Apis" icon={<FcShop />}>
              Egnite has a marketplace full of ready to use apis(functions & schemas) which you can import directly into your project and save 100s of hours of development time.
          </Feature>

            <Feature title="Authentication & Security" icon={<FcPrivacy />}>
              Egnite has support for different kinds of authentication mechanisms. So that you can secure and restrict access to your apis with ease. 
          </Feature>
            <Feature title="Code Generation" icon={<FcServices />}>
              With the power of our code generation egnine, everything you build with Egnite can be exported as GO code, which you can deploy on any environment you see fit.
          </Feature>
          </SimpleGrid>
        </Box>
      </Box>


      <Box as="section" py="24" display={{  base:"none",  sm: "none", md: "flex", }} background="rgb(237, 242, 247)">
        <Box maxWidth={{ base:"36rem", sm: "36rem", md: "80rem" }} mx={"auto"} px={"1.5rem"}>
          <Grid templateColumns="380px 1fr" gap={16}>
            <Box>
              <Heading fontWeight="800" fontSize="3.75rem" lineHeight="1">Build Apis with <Text display="inline" color="rgb(49, 130, 206)">ease!</Text></Heading>
              <Text marginTop="1.5rem" marginBottom="2rem" fontSize="1.125rem" fontWeight="500">Building an api with Egnite is as easy as filling out a form and pressing some buttons.</Text>
              <Button  as="a" href="https://dw4b516oom0.typeform.com/to/amFe8E8d" target="_blank" colorScheme="blue" size="lg">
                Get Early Access <ArrowForwardIcon margin="0 0.5rem" />
              </Button>
              <Box marginTop="4rem" backgroundColor="white" padding="2rem" borderRadius="0.5rem">
                <Text textTransform="uppercase" fontWeight="700">User Feedback</Text>
                <Text marginTop="1rem" fontSize="1.125rem" lineHeight="1.625">“Using Egnite to build my application's backend was a delight, I did not know you could build gRPC and REST api's at this speed.”</Text>
                <HStack alignItems="center" justifyContent="flex-start" mt={6}>
                  <Image borderRadius="50rem" src="/avatar.png" h={6} mr={2} />
                  <VStack alignItems="flex-start" justifyContent="flex-start" spacing={0}>
                    <Text fontWeight="700">Ashutosh Dubey</Text>
                    <Text marginTop="0">Software Engineer, CadenceIQ</Text>
                  </VStack>
                </HStack>
              </Box>
            </Box>
            <Box display={{ md: "block", sm: "none",  base:"none" }}>
              <Box display="flex" justifyContent="center" alignItems="center" borderRadius="0.5rem" backgroundColor="white" minHeight="480px" boxShadow="rgb(0 0 0 / 10%) 0px 10px 15px -3px, rgb(0 0 0 / 5%) 0px 4px 6px -2px">
                  <Image w={"95%"} src="/egif.gif" borderRadius="0.5rem" border="solid 3px #8080802b"/>
              </Box>
              <HStack alignItems="flex-start" mt={6}>
                <Box padding="1rem">
                  <VStack alignItems="flex-start">
                    <Text fontWeight="700">Create Schema</Text>
                    <Text>Schema is a table with its relationship with other tables, So building the schema is just defining the fields and relationships assosiated with the tables in the application. </Text>
                  </VStack>
                </Box>
                <Box padding="1rem">
                  <VStack alignItems="flex-start">
                    <Text fontWeight="700">Import Functions</Text>
                    <Text>Egnite has a marketplace of ready to use functions and schemas for different use cases which can be directly imported to the project to build you application on.</Text>
                  </VStack>
                </Box>
                <Box padding="1rem">
                  <VStack alignItems="flex-start">
                    <Text fontWeight="700">Deploy / Export Code</Text>
                    <Text>Everything you build using Egnite can be exported as Go code which you can compile into a single binary and deploy it to any environment you see fit.</Text>
                  </VStack>
                </Box>
              </HStack>
            </Box>
          </Grid>
        </Box>
        {/* <Box mt={"6rem"} maxWidth={{ sm: "36rem", md: "80rem" }} mx={"auto"} px={"1.5rem"}>
          <Grid templateRows={{ md: "none", sm:"repeat(2, 1fr)" }}  templateColumns={{ md: "60% 380px 1fr", sm: "none" }} gap={16}>
          <Box>
              <Box display="flex" justifyContent="center" alignItems="center" borderRadius="0.5rem" backgroundColor="white" minHeight="480px" boxShadow="rgb(0 0 0 / 10%) 0px 10px 15px -3px, rgb(0 0 0 / 5%) 0px 4px 6px -2px">

              </Box>
             
            </Box>
            <Box>
              <Heading fontWeight="800" fontSize="3.75rem" lineHeight="1.2">Marketplace of ready to use<Text display="inline" color="rgb(49, 130, 206)"> apis</Text></Heading>
              <Text marginTop="1.5rem" marginBottom="2rem" fontSize="1.125rem" fontWeight="500">At volutpat diam ut venenatis tellus. Sit amet consectetur.</Text>
              <Button colorScheme="blue" size="lg">
                Get Early Access <ArrowForwardIcon margin="0 0.5rem" />
              </Button>
             
            </Box>
            
          </Grid>
        </Box> */}
      </Box>
      <Box as="section" backgroundColor="white">
        <Box
          maxW="2xl"
          mx="auto"
          px={{ base: '6', lg: '8' }}
          py={{ base: '16', sm: '20' }}
          textAlign="center"
        >
          <Heading as="h2" size="3xl" fontWeight="extrabold" lineHeight="1.2">
            Ready to <Text display="inline" color="rgb(49, 130, 206)">build</Text> your <Text display="inline" color="rgb(49, 130, 206)">Apis</Text> with Egnite ?
        </Heading>
          <Text mt="4" fontSize="lg">
          If yes then apply for the early access and we will reach out to you.
        </Text>
          <Flex flexDirection={{ md:"row", sm: "column", base:"column"}}  mt="8" justifyContent="center">
            <Button as="a" href="https://dw4b516oom0.typeform.com/to/amFe8E8d" margin="10px" target="_blank" size="lg" colorScheme="blue" fontWeight="bold">
              Get Early Access
            </Button>
            <Button as="a" href="https://egnite.dev/documentation" margin="10px" target="_blank"   size="lg" fontWeight="bold" variant="outline">
              Documentation <ArrowForwardIcon margin="0 0.5rem" />
            </Button>
          </Flex>

        </Box>
      </Box>
      <Box as="footer" backgroundColor="white" borderTop="solid 1px #80808014" role="contentinfo" py="6">
        <Flex
          direction={{ base: 'column', md: 'row' }}
          maxW={{ base: 'xl', md: '7xl' }}
          mx="auto"
          px={{ base: '6', md: '8' }}
          align="center"
        >
          <a aria-current="page" aria-label="Back to Home page" href="/" rel="home">
            <Image src="/egnite-logo.svg" h="6" iconColor="blue.600" />
          </a>
          <Stack
            my={{ base: '6', md: 0 }}
            direction={{ base: 'column', md: 'row' }}
            marginStart={{ md: '8' }}
            fontSize="sm"
            spacing={{ base: '2', md: '8' }}
            textAlign={{ base: 'center', md: 'start' }}
          >
            <Text>&copy; {new Date().getFullYear()} Egnite Technology</Text>
            <Link>Privacy</Link>
            <Link>Terms and Conditions</Link>
          </Stack>
          <ButtonGroup marginStart={{ md: 'auto' }} color="gray.600" variant="ghost">
            <IconButton as="a" href="https://www.linkedin.com/company/egnite-dev" target="_blank" aria-label="LinkedIn" icon={<FaLinkedin />} />
            <IconButton as="a" href="https://github.com/egnite-dev" target="_blank" aria-label="Github" icon={<FaGithub />} />
            <IconButton as="a" href="https://twitter.com/egnitedev" target="_blank" aria-label="Twitter" icon={<FaTwitter />} />
          </ButtonGroup>
        </Flex>
      </Box>
    </ChakraProvider>
  )
}

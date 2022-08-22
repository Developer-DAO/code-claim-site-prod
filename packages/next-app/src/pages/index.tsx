import type { NextPage } from "next";
import Head from "next/head";
import {
  Box,
  Flex,
  Heading,
  SlideFade,
  Spacer,
  Image,
  Center,
  useBreakpointValue,
  usePrefersReducedMotion,
  textDecoration,
} from "@chakra-ui/react";
import { useAccount, useNetwork } from "wagmi";
import { useState, useEffect } from "react";

import Confetti from "react-confetti";

import { ClaimCard } from "@/components/ClaimCard";
import { Logo } from "@/components/Logo";
import { MainBox } from "@/components/MainBox";
import { SocialLinks } from "@/components/SocialLinks";
import { SocialLinksMobile } from "@/components/SocialLinksMobile";
import { bounceAnimation } from "@/chakra.config";


const Home: NextPage = () => {
  // show a splash page while the code claim site is not live
  return (
        <Flex
          m="0"
          w="100vw"
          h="100vh"
          background="black"
          align="center"
          justifyContent="center"
          textAlign={"center"}
          >
            <Box>
              <Heading as="h1" color="white" fontSize={"96px"} fontWeight="500">
                Coming soon
              </Heading>
              <Heading
                as="h2"
                marginTop={10}
                >
                <a href="https://developerdao.notion.site/The-CODE-Token-3c1e14dbc6bd461fa07978bf37d04fd9" style={{color:"white", textDecoration:"underline"}}>Learn More</a>
              </Heading>
            </Box>
        </Flex>
  );
  /**
  const [{ data: networkData, error, loading }] = useNetwork();
  const [{ data: accountData }, disconnect] = useAccount({
    fetchEns: true,
  });

  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  const [showConfetti, setShowConfetti] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = useBreakpointValue({ base: true, lg: false });

  const isConnected =
    typeof accountData !== "undefined" &&
    Object.entries(accountData).length > 0;

  const isUnsupported = networkData.chain?.unsupported;
  const isSupportedNetwork = !isUnsupported;

  return (
    <div>
      {!prefersReducedMotion && (
        <Confetti
          width={windowSize.width}
          height={windowSize.height}
          colors={["#DD95FF"]}
          numberOfPieces={showConfetti ? 200 : 0}
        />
      )}
      <Box
        m="0"
        w="100vw"
        h="100vh"
        background="white"
        scrollSnapType={{ base: "y mandatory", lg: "none" }}
        overflowY={{ base: "scroll", lg: "clip" }}
      >
        <Head>
          <title>$CODE Claim Page</title>
        </Head>

        <Flex direction="row" flexWrap="wrap" h="100vh">
          <Box
            w={{ base: "100vw", lg: "50vw" }}
            h="100vh"
            m="0"
            pl={["24px", "5vw"]}
            pr={["24px", "8vw"]}
            background="#08010D"
            scrollSnapAlign={{ base: "start", lg: "none" }}
            position="relative"
            zIndex="1"
          >
            <Flex mt={["32px", "48px"]}>
              <Logo />
              {isMobile && (
                <>
                  <Spacer />
                  <SocialLinksMobile />
                </>
              )}
            </Flex>
            <Flex align="center" h="full" justify="center">
              <MainBox
                isConnected={isConnected}
                isUnsupported={isUnsupported}
              />
            </Flex>
            <Center position="absolute" bottom="0" left="0" right="0">
              {isMobile && isSupportedNetwork && isConnected && (
                <Image
                  alignSelf="end"
                  mb="5"
                  src="assets/arrow-down.svg"
                  alt="scroll down"
                  w="48px"
                  h="48px"
                  animation={bounceAnimation}
                />
              )}
            </Center>
          </Box>

          {(!isMobile || (isSupportedNetwork && isConnected)) && (
            <Flex
              w={{ base: "100vw", lg: "50vw" }}
              h="100vh"
              m="0"
              backgroundImage={`linear-gradient(0deg, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), url("/assets/bg-art.svg")`}
              backgroundRepeat="no-repeat"
              backgroundSize="cover"
              align="center"
              justifyContent="center"
              direction="column"
              scrollSnapAlign={{ base: "start", lg: "none" }}
              position="relative"
            >
              <Center position="absolute" top="0" left="0" right="0">
                {isMobile && (
                  <Image
                    alignSelf="end"
                    mt="5"
                    src="assets/arrow-up.svg"
                    alt="scroll up"
                    w="48px"
                    h="48px"
                  />
                )}
              </Center>
              <SlideFade in={isConnected} offsetY="20px">
                {isSupportedNetwork && (
                  <Box position="relative" zIndex="popover">
                    <ClaimCard
                      setConfetti={({ state }: { state: boolean }) =>
                        setShowConfetti(state)
                      }
                    />
                  </Box>
                )}
              </SlideFade>
            </Flex>
          )}
        </Flex>

        {isMobile ? (
          <Flex />
        ) : (
          <Flex
            position="absolute"
            top="48px"
            left={["24px", "5vw"]}
            right={["24px", "5vw"]}
          >
            <Spacer />
            <SocialLinks />
          </Flex>
        )}
      </Box>
    </div>
  );
  */
};

export default Home;

import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import style from "../Education/Education.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Heading,
  Text,
  Box,
  Image,
  HStack,
  Container,
  Grid,
  GridItem,
  Button,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";

const Education = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    document.title = "Education News: Latest News, India News, Breaking News, Today's News Headlines Online, English News Top Stories, Coronavirus News, IPL 2022 Updates|The Indian Express";
    axios
      .get(
        "https://newsapi.org/v2/everything?q=education&apiKey=07ee45696e7b4c7dae7bc94ac0c4ddd6"
        // `https://newsapi.org/v2/everything?q=education&from=2022-05-16&sortBy=publishedAt&apiKey=07ee45696e7b4c7dae7bc94ac0c4ddd6`
      )
      .then((r) => setData(r.data.articles))
      .catch((e) => console.log(e));
  }, []);

  console.log(data);

  return (
    <div id={style.Education_main}>
      <div>
        <Grid
          h="50px"
          templateRows="repeat(2, 1fr)"
          templateColumns="repeat(5, 1fr)"
          gap={0}
        >
          <GridItem
            rowSpan={1}
            colSpan={1}
            bg="tomato"
            textAlign="center"
            fontWeight="bold"
            color="white"
          >
            MUST READ
          </GridItem>
          <GridItem colSpan={4} bg="while" border={"1px"} borderColor="red">
            <Carousel
              autoFocus={true}
              showThumbs={false}
              showStatus={false}
              useKeyboardArrows
              className="presentation-mode"
            >
              <Box>
                {" "}
                Maharashtra SSC Class 10th results declared; pass percentage
                comes down to ‘regular range’
              </Box>
              <Box>
                WBJEE 2022 result to be released today: Here’s how to check
                marks
              </Box>
              <Box>
                {" "}
                NCERT drops content on Gujarat riots from Class 12 textbook
              </Box>
              <Box>
                Agnipath Recruitment Scheme: NIOS to launch customised courses
                for ‘Agniveers’ to clear Class 12 exams
              </Box>
              <Box>Bihar STET 2022 exam cancelled; know why</Box>
            </Carousel>
          </GridItem>
        </Grid>
        <Breadcrumb mb="20px">
          <BreadcrumbItem>
            <BreadcrumbLink href="/" color="red">
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink href="/Education">Education</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        <HStack direction="column">
          <Text fontSize="25px" fontWeight="bold" color="red">
            EDUCATION
          </Text>
          <Wrap spacing={0} _hover>
            <WrapItem>
              <Button color="gray" variant="ghost" border="red">
                JOBS
              </Button>
            </WrapItem>
            <WrapItem>
              <Button color="gray" variant="ghost" border="red">
                STUDENTS VOICE
              </Button>
            </WrapItem>
            <WrapItem>
              <Button color="gray" variant="ghost" border="red">
                STUDY ABROAD
              </Button>
            </WrapItem>
            <WrapItem>
              <Button color="gray" variant="ghost" border="red">
                MOCK TEST
              </Button>
            </WrapItem>
          </Wrap>
        </HStack>

        <Text fontWeight="bold" fontSize="20">
          EDUCATION NEWS
        </Text>
        <HStack>
          <Box>
            <Carousel
              autoFocus={true}
              showThumbs={false}
              showStatus={false}
              useKeyboardArrows
              className="presentation-mode"
            >
              <Box maxW={730}>
                <Image src="https://images.indianexpress.com/2022/06/ch1160699-1-1.jpg?resize=480,260" />
                <Text fontSize={25}>
                  Maharashtra SSC Class 10th results declared; pass percentage
                  comes down to ‘regular range’
                </Text>
              </Box>
              <Box maxW={720}>
                <Image src="https://images.indianexpress.com/2022/05/WhatsApp-Image-2022-05-16-at-5.49.02-PM.jpg?resize=480,260" />
                <Text fontSize={25}>
                  WBJEE 2022 result to be released today: Here’s how to check
                  marks
                </Text>
              </Box>
              <Box maxW={720}>
                <Image src="https://images.indianexpress.com/2022/06/gujarat-riots.jpg?resize=480,260" />
                <Text fontSize={25}>
                  NCERT drops content on Gujarat riots from Class 12 textbook
                </Text>
              </Box>
              <Box maxW={720}>
                <Image src="https://images.indianexpress.com/2022/06/indian-army-1-1.jpeg?resize=480,260" />
                <Text fontSize={25}>
                  Agnipath Recruitment Scheme: NIOS to launch customised courses
                  for ‘Agniveers’ to clear Class 12 exams
                </Text>
              </Box>
              <Box maxW={720}>
                <Image src="https://images.indianexpress.com/2022/06/Bihar-STET.jpg?resize=480,260" />
                <Text fontSize={25}>
                  Bihar STET 2022 exam cancelled; know why
                </Text>
              </Box>
            </Carousel>
          </Box>
          <Box>
            <Box>
              <Image src="https://images.indianexpress.com/2022/06/JEE-Main-2022-card-1.jpg?resize=250,175" />
              <Text fontSize="17px">
                NTA JEE Main 2022 Session 1 Admit Card Highlights: Admit card
                link to go live at jeemain.nta.nic.in
              </Text>
            </Box>
            <Box>
              <Image src="https://images.indianexpress.com/2022/06/ch1441446-1.jpg?resize=250,150" />
              <Text fontSize="17px">
                TN board +2, SSLC Result 2022: Date and time announced
              </Text>
            </Box>
          </Box>
        </HStack>

        <HStack>
          <Box>
            <Image src="https://images.indianexpress.com/2022/06/gujarat-riots.jpg?resize=450,250" />
            <Text fontSize="17px">
              Bandon Mein Tha Dum review: While comprehensive, series falls flat
              in capturing glory & drama of India’s win
            </Text>
          </Box>
          <Box>
            <Image src="https://images.indianexpress.com/2022/06/karnataka-textbook-row-1.jpg?resize=450,250" />
            <Text fontSize="17px">
              Bandon Mein Tha Dum review: While comprehensive, series falls flat
              in capturing glory & drama of India’s win
            </Text>
          </Box>
          <Box>
            <Image src="https://images.indianexpress.com/2022/04/GUJCET.jpg?resize=450,250" />
            <Text fontSize="17px">
              Bandon Mein Tha Dum review: While comprehensive, series falls flat
              in capturing glory & drama of India’s win
            </Text>
          </Box>
        </HStack>

        <Box mr={5} mt="20px">
          {data.map((value) => (
            <div key={value.url}>
              <Grid
                h="190"
                templateRows="repeat(2, 1fr)"
                templateColumns="repeat(5, 1fr)"
                gap={3}
                paddingBottom="2px"
                borderBottom="1px"
                borderColor="gray.400"
              >
                <GridItem rowSpan={1} colSpan={1}>
                  <Image
                    boxSize="300px"
                    height="auto"
                    src={value.urlToImage}
                    alt="SportNews"
                  />
                </GridItem>
                <GridItem colSpan={4} bg="while">
                  <Heading fontSize="20px">{value.title}</Heading>
                  <Text fontSize="15px">{value.publishedAt}</Text>
                  <br />
                  <Text>{value.description}</Text>
                </GridItem>
              </Grid>
            </div>
          ))}
        </Box>
      </div>
    </div>
  );
};

export default Education;

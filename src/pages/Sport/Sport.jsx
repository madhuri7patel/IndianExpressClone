import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import style from "../Sport/Sport.module.css";
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
  Grid,
  GridItem,
  Button,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";

const Sport = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    document.title = "Sports News: Latest News, India News, Breaking News, Today's News Headlines Online, English News Top Stories, Coronavirus News, IPL 2022 Updates|The Indian Express";
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=07ee45696e7b4c7dae7bc94ac0c4ddd6`
      )
      .then((r) => setData(r.data.articles))
      .catch((e) => console.log(e));
  }, []);

  console.log(data);
  return (
    <div id={style.Sport_main}>
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
                Cycling coach RK Sharma faces more heat: star cyclist Deborah
                Herold says he slapped, harassed her
              </Box>
              <Box>
                Where Liverpool’s record signing Darwin Nunez stands among
                Europe’s best goal-scorers
              </Box>
              <Box>
                {" "}
                ‘Expectations hurt’: Rahul Tewatia tweets after Team India snub
                for Ireland tour
              </Box>
              <Box>
                India versus Ireland: Rishabh Pant & Shreyas Iyer’s omission
                from T20I squad likely due to commitment for the Birmingham
              </Box>
              <Box>
                Faster, Sharper, Better – the all new Bhuvneshwar Kumar is back
                with a bang
              </Box>
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
            <BreadcrumbLink href="/Sport">Sports</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>

        <HStack direction="column">
          <Text fontSize="25px" fontWeight="bold" color="red">
            SPORTS
          </Text>
          <Wrap spacing={0} _hover>
            <WrapItem>
              <Button color="gray" variant="ghost" border="red">
                CRICKET
              </Button>
            </WrapItem>
            <WrapItem>
              <Button color="gray" variant="ghost" border="red">
                FOOTBALL
              </Button>
            </WrapItem>
            <WrapItem>
              <Button color="gray" variant="ghost" border="red">
                TENNIS
              </Button>
            </WrapItem>
            <WrapItem>
              <Button color="gray" variant="ghost" border="red">
                WWE
              </Button>
            </WrapItem>
            <WrapItem>
              <Button color="gray" variant="ghost" border="red">
                PHOTOS
              </Button>
            </WrapItem>
            <WrapItem>
              <Button color="gray" variant="ghost" border="red">
                PODCAST
              </Button>
            </WrapItem>
            <WrapItem>
              <Button color="gray" variant="ghost" border="red">
                EXPLAINED
              </Button>
            </WrapItem>
          </Wrap>
        </HStack>

        <Text fontWeight="bold" fontSize="20">
          Sports
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
                <Image src="https://images.indianexpress.com/2022/06/deborah-herold-cycling.jpg?resize=480,260" />
                <Text fontSize={25}>
                  Cycling coach RK Sharma faces more heat: star cyclist Deborah
                  Herold says he slapped, harassed her
                </Text>
              </Box>
              <Box maxW={720}>
                <Image src="https://images.indianexpress.com/2022/06/Untitled-design-9-3.jpg?resize=480,260" />
                <Text fontSize={25}>
                  Where Liverpool’s record signing Darwin Nunez stands among
                  Europe’s best goal-scorers
                </Text>
              </Box>
              <Box maxW={720}>
                <Image src="https://images.indianexpress.com/2022/06/Rahul-Tewatia.jpg?resize=480,260" />
                <Text fontSize={25}>
                  ‘Expectations hurt’: Rahul Tewatia tweets after Team India
                  snub for Ireland tour
                </Text>
              </Box>
              <Box maxW={720}>
                <Image src="https://images.indianexpress.com/2022/06/shreyas-iyer-rishabh-pant.jpg?resize=480,260" />
                <Text fontSize={25}>
                  India versus Ireland: Rishabh Pant & Shreyas Iyer’s omission
                  from T20I squad likely due to commitment for the Birmingham
                </Text>
              </Box>
              <Box maxW={720}>
                <Image src="https://images.indianexpress.com/2022/06/Untitled-design-7.jpg?resize=480,260" />
                <Text fontSize={25}>
                  Faster, Sharper, Better – the all new Bhuvneshwar Kumar is
                  back with a bang
                </Text>
              </Box>
            </Carousel>
          </Box>
          <Box>
            <Box>
              <Image src="https://images.indianexpress.com/2022/06/Bandon.jpg?resize=250,175" />
              <Text fontSize="17px">
                Bandon Mein Tha Dum review: While comprehensive, series falls
                flat in capturing glory & drama of India’s win
              </Text>
            </Box>
            <Box>
              <Image src="https://images.indianexpress.com/2022/06/Chhetri-3.jpg?resize=250,175" />
              <Text fontSize="17px">
                Yours faithfully, Sunil Chhetri: The reliable, versatile
                talisman leads Indian football from the front
              </Text>
            </Box>
          </Box>
        </HStack>
        <HStack>
          <Box>
            <Image src="https://images.indianexpress.com/2022/06/osaka-1200-10.jpeg?resize=450,250" />
            <Text fontSize="17px">
              Bandon Mein Tha Dum review: While comprehensive, series falls flat
              in capturing glory & drama of India’s win
            </Text>
          </Box>
          <Box>
            <Image src="https://images.indianexpress.com/2022/06/While-You-Were-Asleep-3-1.jpg?resize=450,250" />
            <Text fontSize="17px">
              Bandon Mein Tha Dum review: While comprehensive, series falls flat
              in capturing glory & drama of India’s win
            </Text>
          </Box>
          <Box>
            <Image src="https://images.indianexpress.com/2022/06/Nadal-1-3.jpg?resize=450,250" />
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
                h="190px"
                templateRows="repeat(2, 1fr)"
                templateColumns="repeat(5, 1fr)"
                gap={1}
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
                  <Heading fontSize="25px">{value.title}</Heading>
                  <Text fontSize="15">{value.publishedAt}</Text>
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

export default Sport;

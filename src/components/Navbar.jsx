import React, { useRef } from "react";
import style from "./HEADER_CSS/Navbar.module.css";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  IconButton,
  Input,
  Flex,
  Spacer,
  Tooltip,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { HamburgerIcon, Search2Icon, SearchIcon } from "@chakra-ui/icons";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: Media,
    onOpen: openMedia,
    onClose: CloseMedia,
  } = useDisclosure();
  const {
    isOpen: Search,
    onOpen: openSearch,
    onClose: CloseSearch,
  } = useDisclosure();
  const initialRef = useRef(null);
  const finalRef = useRef(null);

  return (
    <div className={style.NavbarMainDiv}>
      <div className={style.MenuIconBtn}>
        <Button
          onClick={onOpen}
          icon={<HamburgerIcon />}
          as={IconButton}
          aria-label="Options"
          bg="none"
          variant="none"
          fontSize="35px"
          color="white"
        ></Button>
        <div className={style.MediaScreen_Menu}>
          <Modal onClose={onClose} size="full" isOpen={isOpen}>
            <ModalOverlay />
            <ModalContent>
              <ModalCloseButton />
              <ModalBody bg="whitesmoke">
                <div className={style.MenuContainer}>
                  <div className={style.MenuFirstDiv}>
                    <ul className={style.ForAllUls}>
                      <li className={style.ForBoldLi}>Home</li>
                      <li className={style.ForBoldLi}>World</li>
                      <li className={style.ForBoldLi}>India</li>
                      <li className={style.ForBoldLi}>North East India</li>
                      <li>Arunachal Pradesh</li>
                      <li>Assam</li>
                      <li>Manipur</li>
                      <li>Meghalaya</li>
                      <li>Mizoram</li>
                      <li>Nagaland</li>
                      <li>Tripura</li>
                    </ul>
                    <ul className={style.ForAllUls}>
                      <li className={style.ForBoldLi}>Photos</li>
                      <li>Entertainment</li>
                      <li>Sports</li>
                      <li>News</li>
                      <li>Lifestyle</li>
                      <li>Viral</li>
                      <li>Technology</li>
                      <li>Archives</li>
                      <button className={style.NavLinks_btn1}>
                        <Link
                          to="https://www.99acres.com/"
                          
                          rel="noreferrer"
                        >
                          99acres.com
                        </Link>
                      </button>
                    </ul>
                    <ul className={style.ForAllUls}>
                      <li className={style.ForBoldLi}>Videos</li>
                      <li>Explained</li>
                      <li>Technology</li>
                      <li>Entertainment</li>
                      <li>Lifestyle</li>
                      <li>Food</li>
                      <li>Sports</li>
                      <li>Auto</li>
                      <li>Idea Exchange</li>
                      <li>News</li>
                    </ul>
                    <ul className={style.ForAllUls}>
                      <li className={style.ForBoldLi}>Audio</li>
                      <li>3 Things</li>
                      <li>Express Sports</li>
                      <li>Water</li>
                      <li>Likh:The Process</li>
                      <li>Metro Food Hoppers</li>
                      <li>The Sandip Roy Show</li>
                      <li>Talking Books</li>
                      <li>What To Watch This Weekend</li>
                    </ul>
                    <ul className={style.ForAllUls}>
                      <li className={style.ForBoldLi}>From the print</li>
                      <li>Opinion</li>
                      <li>Explained</li>
                      <li>Delhi Confidential</li>
                      <li>Astrology</li>
                      <li>Epaper</li>
                      <li>Todays Paper</li>
                      <li>Sunday Eye</li>
                    </ul>
                  </div>
                  <center>
                    <hr />
                  </center>
                  <div className={style.MenuFirstDiv}>
                    <ul className={style.ForAllUls}>
                      <li className={style.ForBoldLi}>Entertainment</li>
                      <li>Bollywood</li>
                      <li>Hollywood</li>
                      <li>Television</li>
                      <li>Music</li>
                      <li>Reviews</li>
                      <li>Regional</li>
                      <li>Tamil</li>
                      <li>Telugu</li>
                      <li>Malayalam</li>
                      <li>Box Office</li>
                      <li>Web Series</li>
                    </ul>
                    <ul className={style.ForAllUls}>
                      <li className={style.ForBoldLi}>Featured</li>
                      <li>What Is</li>
                      <li>Who Is</li>
                      <li>When Is</li>
                      <li>How to</li>
                      <li>Research</li>
                      <li>GenderAnd</li>
                    </ul>
                    <ul className={style.ForAllUls}>
                      <li className={style.ForBoldLi}>Sports</li>
                      <li>Olympics</li>
                      <li>T20 WC</li>
                      <li>Badminton</li>
                      <li>Cricket</li>
                      <li>Football</li>
                      <li>FIFA 2018</li>
                      <li>Hockey</li>
                      <li>Motor Sport</li>
                      <li>Tennis</li>
                      <li>WWE Wrestling</li>
                    </ul>
                    <ul className={style.ForAllUls}>
                      <li className={style.ForBoldLi}>Tech</li>
                      <li>Technology</li>
                      <li>Mobile & Tabs</li>
                      <li>Gadgets</li>
                      <li>Science</li>
                      <li>Tech Reviews</li>
                      <li>Social</li>
                      <li>Tech News</li>
                    </ul>
                    <ul className={style.ForAllUls}>
                      <li className={style.ForBoldLi}>Lifestyle</li>
                      <li>Books</li>
                      <li>Fashion</li>
                      <li>Food Wine</li>
                      <li>Health</li>
                      <li>Fitness</li>
                      <li>Art & Culture</li>
                      <li>Workplace</li>
                      <li>Auto & Travel</li>
                    </ul>
                  </div>
                  <center>
                    <hr />
                  </center>
                  <div className={style.MenuFirstDiv}>
                    <ul className={style.ForAllUls}>
                      <li className={style.ForBoldLi}>Trending</li>
                      <li>Trending In India</li>
                      <li>Trending Globally</li>
                      <li>Viral Videos</li>
                      <li>Bizarre</li>
                      <li>Voice</li>
                      <li className={style.ForBoldLi}>Parenting</li>
                      <li>Food</li>
                      <li>Health & Fitness</li>
                      <li>Learning</li>
                      <li>Family</li>
                      <li>Blogs</li>
                      <li>Things to do</li>
                    </ul>
                    <ul className={style.ForAllUls}>
                      <li className={style.ForBoldLi}>Cities News</li>
                      <li>Ahmedabad</li>
                      <li>Bangalore</li>
                      <li>Chandigarh</li>
                      <li>Chennai</li>
                      <li>Delhi</li>
                      <li>Jaipur</li>
                      <li>Kolkata</li>
                      <li>Lukhnow</li>
                      <li>Ludhiana</li>
                      <li>Mumbai</li>
                      <li>Pune</li>
                    </ul>
                    <ul className={style.ForAllUls}>
                      <li className={style.ForBoldLi}>Jobs</li>
                      <li>Bank Jobs</li>
                      <li>Defence Jobs</li>
                      <li>PSU</li>
                      <li>Railway</li>
                      <li>UPSC</li>
                      <li>Teachers Job</li>
                      <li>SSC</li>
                    </ul>
                    <ul className={style.ForAllUls}>
                      <li className={style.ForBoldLi}>Business</li>
                      <li>Aviation</li>
                      <li>Banking & Finance</li>
                      <li>Budget</li>
                      <li>Business Other</li>
                      <li>Companies</li>
                      <li>Economy</li>
                      <li>Market</li>
                    </ul>
                    <ul className={style.ForAllUls}>
                      <li className={style.ForBoldLi}>Education</li>
                      <li>Students Voice</li>
                      <li>Study Abroad</li>
                      <li className={style.ForBoldLi}>More</li>
                      <li>Elections</li>
                      <li>Brands Solution</li>
                    </ul>
                  </div>
                </div>
              </ModalBody>
            </ModalContent>
          </Modal>
        </div>
      </div>

      <div className={style.MenuIconBtn_medium}>
        <Button
          onClick={openMedia}
          icon={<HamburgerIcon />}
          as={IconButton}
          aria-label="Options"
          bg="none"
          variant="none"
          fontSize="25px"
          color="white"
        ></Button>
        <div className={style.MediaScreen}>
          <Modal onClose={CloseMedia} size="full" isOpen={Media}>
            <ModalOverlay />
            <ModalContent>
              <ModalCloseButton color="white" />
              <ModalBody bg="black" color="white">
                <div className={style.Media_logo_medium_screen_1}>
                  <div className={style.Black_modal_inner_logo}>
                    <img
                      src="	https://indianexpress.com/wp-content/themes/indianexpress/images/theindianexpress-logo-n.svg"
                      alt="Indian Express"
                    />
                  </div>
                </div>

                <div>
                  <div>
                    <InputGroup size="md">
                      <Input pr="4.5rem" type="text" />
                      <InputRightElement width="4.5rem">
                        <Button h="1.75rem" size="sm" bg="none">
                          <Search2Icon />
                        </Button>
                      </InputRightElement>
                    </InputGroup>
                  </div>
                  <div>
                    <div className={style.Inner_subscribe_btn}>
                      <h3>NewsLetters</h3>
                      <button className={style.NavLinks_btn2}>Subscribe</button>
                      <h3>Sign In</h3>
                    </div>
                  </div>
                </div>
                <div className={style.MenuContainer}>
                  <Link to="/"  rel="noreferrer">
                    <h3>Home</h3>
                  </Link>
                  <Link
                    to="https://www.99acres.com/"
                    
                    rel="noreferrer"
                  >
                    <h3>Explained</h3>
                  </Link>
                  <Link
                    to="https://www.99acres.com/"
                    
                    rel="noreferrer"
                  >
                    <h3>Political Pulse</h3>
                  </Link>
                  <Link
                    to="https://www.99acres.com/"
                    
                    rel="noreferrer"
                  >
                    <h3>India</h3>
                  </Link>
                  <Link to="/Cities"  rel="noreferrer">
                    <h3>Cities</h3>
                  </Link>
                  <Link
                    to="https://www.99acres.com/"
                    
                    rel="noreferrer"
                  >
                    <h3>Opinion</h3>
                  </Link>
                  <Link to="/Entertainment"  rel="noreferrer">
                    <h3>Entertainment</h3>
                  </Link>
                  <Link to="/Education"  rel="noreferrer">
                    <h3>Education</h3>
                  </Link>
                  <Link
                    to="https://www.99acres.com/"
                    
                    rel="noreferrer"
                  >
                    <h3>Premium</h3>
                  </Link>
                  <Link to="/Sport"  rel="noreferrer">
                    <h3>Sports</h3>
                  </Link>
                  <Link
                    to="https://www.99acres.com/"
                    
                    rel="noreferrer"
                  >
                    <h3>Audio</h3>
                  </Link>

                  <button className={style.NavLinks_btn1}>
                    <Link
                      to="https://www.99acres.com/"
                      
                      rel="noreferrer"
                    >
                      99acres.com
                    </Link>
                  </button>
                  <Link
                    to="https://www.99acres.com/"
                    
                    rel="noreferrer"
                  >
                    <h3>Subscribe</h3>
                  </Link>
                  <Link to="/login"  rel="noreferrer">
                    <h3>Sign in</h3>
                  </Link>
                </div>
                <div className={style.MultyLang}>
                  <Flex flexDirection="column">
                    <li>
                      <Tooltip
                        hasArrow
                        label="ENGLISH"
                        bg="black"
                        fontSize="x-small"
                        aria-label="A tooltip"
                      >
                        ENGLISH
                      </Tooltip>
                    </li>
                    <Spacer />
                    <li>
                      <Tooltip
                        hasArrow
                        label="TAMIL"
                        bg="black"
                        fontSize="x-small"
                        aria-label="A tooltip"
                      >
                        தமிழ்
                      </Tooltip>
                    </li>
                    <Spacer />
                    <li>
                      <Tooltip
                        hasArrow
                        label="BANGLA"
                        bg="black"
                        fontSize="x-small"
                        aria-label="A tooltip"
                      >
                        বাংলা
                      </Tooltip>
                    </li>
                    <Spacer />
                    <li>
                      <Tooltip
                        hasArrow
                        label="MALAYALAM"
                        bg="black"
                        fontSize="x-small"
                        aria-label="A tooltip"
                      >
                        മലയാളം
                      </Tooltip>
                    </li>
                    <Spacer />
                    <li>
                      <Tooltip
                        hasArrow
                        label="HINDI"
                        bg="black"
                        fontSize="x-small"
                        aria-label="A tooltip"
                      >
                        हिंदी
                      </Tooltip>
                    </li>
                    <Spacer />
                    <li>
                      <Tooltip
                        hasArrow
                        label="MARATHI"
                        bg="black"
                        fontSize="x-small"
                        aria-label="A tooltip"
                      >
                        मराठी
                      </Tooltip>
                    </li>
                  </Flex>
                </div>
              </ModalBody>
            </ModalContent>
          </Modal>
        </div>
      </div>

      <div className={style.Media_logo_medium_screen}>
        <div>
          <img
            src="	https://indianexpress.com/wp-content/themes/indianexpress/images/theindianexpress-logo-n.svg"
            alt="Indian Express"
          />
        </div>
      </div>
      <div className={style.NavLinks}>
        <Link to="/"  rel="noreferrer">
          <h3>Home</h3>
        </Link>
        <Link to="https://www.99acres.com/"  rel="noreferrer">
          <h3>Explained</h3>
        </Link>
        <Link to="https://www.99acres.com/"  rel="noreferrer">
          <h3>Political Pulse</h3>
        </Link>
        <Link to="https://www.99acres.com/"  rel="noreferrer">
          <h3>India</h3>
        </Link>
        <Link to="/Cities"  rel="noreferrer">
          <h3>Cities</h3>
        </Link>
        <Link to="https://www.99acres.com/"  rel="noreferrer">
          <h3>Opinion</h3>
        </Link>
        <Link to="/Entertainment"  rel="noreferrer">
          <h3>Entertainment</h3>
        </Link>
        <Link to="/Education"  rel="noreferrer">
          <h3>Education</h3>
        </Link>
        <Link to="https://www.99acres.com/"  rel="noreferrer">
          <h3>Premium</h3>
        </Link>
        <Link to="/Sport"  rel="noreferrer">
          <h3>Sports</h3>
        </Link>
        <Link to="https://www.99acres.com/"  rel="noreferrer">
          <h3>Audio</h3>
        </Link>

        <button className={style.NavLinks_btn1}>
          <Link to="https://www.99acres.com/"  rel="noreferrer">
            99acres.com
          </Link>
        </button>
        <button className={style.NavLinks_btn2}>Subscribe</button>
        <Link to="/login"  rel="noreferrer">
          <h3>Sign in</h3>
        </Link>
      </div>
      <div className={style.SearchIcondiv}>
        <Button onClick={openSearch} colorScheme="white">
          <SearchIcon w={5} h={5} />
        </Button>
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={Search}
          onClose={CloseSearch}
        >
          <ModalOverlay />
          <ModalContent top="28%">
            <ModalCloseButton />
            <ModalBody pb={6}>
              <div className={style.searchModal}>
                <Input
                  ref={initialRef}
                  placeholder="Search..."
                  focusBorderColor="black"
                  borderRadius="none"
                />
                <Button bg="black" colorScheme="white" borderRadius="none">
                  SEARCH
                </Button>
              </div>
            </ModalBody>
          </ModalContent>
        </Modal>
      </div>

      <div className={style.Subscribe_button_main}>
        <div className={style.Subscribe_button}>
          <button>Subscribe</button>
          <div>
            <img
              src="https://cdn-icons-png.flaticon.com/512/709/709579.png"
              alt="user"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

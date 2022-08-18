import React from "react";
import style from "./HEADER_CSS/Logo.module.css";
import {
  Tooltip,
  Flex,
  Spacer,
  Wrap,
  WrapItem,
  Avatar,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

var objToday = new Date(),
  weekday = new Array(
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ),
  dayOfWeek = weekday[objToday.getDay()],
  domEnder = (function () {
    var a = objToday;
    if (/1/.test(parseInt((a + "").charAt(0)))) return "th";
    a = parseInt((a + "").charAt(1));
    return 1 == a ? "" : 2 == a ? "" : 3 == a ? "" : "";
  })(),
  dayOfMonth =
    today + (objToday.getDate() < 10)
      ? "0" + objToday.getDate() + domEnder
      : objToday.getDate() + domEnder,
  months = new Array(
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ),
  curMonth = months[objToday.getMonth()],
  curYear = objToday.getFullYear();
var today = dayOfWeek + ", " + curMonth + " " + dayOfMonth + ",  " + curYear;

const Logo = () => {
  return (
    <div className={style.Media_logo}>
      <div className={style.LogoHead}>
        <div className={style.MultyLang}>
          <Flex>
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
      </div>
      <div className={style.LogoBody}>
        <div className={style.FollowLinks}>
          <label>Follow us:</label>
          <Wrap>
            <WrapItem>
              <a href="https://www.facebook.com/indianexpress" target="_blank">
                <Avatar
                  name="Facebook"
                  bg="blackAlpha.50"
                  size="sm"
                  src="https://indianexpress.com/wp-content/themes/indianexpress/images/fb-followus.svg"
                />
              </a>
            </WrapItem>
            <WrapItem>
              <a
                href="https://twitter.com/IndianExpress?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
                target="_blank"
              >
                <Avatar
                  name="Twitter"
                  bg="blackAlpha.50"
                  size="sm"
                  src="https://indianexpress.com/wp-content/themes/indianexpress/images/twitter-followus.svg"
                />
              </a>
            </WrapItem>
          </Wrap>
        </div>
        <div className={style.LogoImgDiv}>
          <img
            src="https://indianexpress.com/wp-content/themes/indianexpress/images/indian-express-logo-n.svg"
            alt="Indian Express"
          />
          <div>
            <label>{today}</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logo;

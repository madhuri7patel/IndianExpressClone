import React, { useState, useEffect } from "react";
import axios from "axios";
import City from "./Advertisement/City";
// import { v4 as uuidv4 } from "uuid";
import styled from "./Cities.module.css";
import Addvertise from "./Advertisement/Advertise";
import Sidenews from "./Advertisement/Sidenews";
import { Crousel } from "./Crousel";
// import { Image } from "@chakra-ui/react";
const Cities = () => {
  useEffect(() => {
    document.title = "City News: Latest News, India News, Breaking News, Today's News Headlines Online, English News Top Stories, Coronavirus News, IPL 2022 Updates|The Indian Express";
  }, [])
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get(
  //       "https://newsapi.org/v2/top-headlines?country=in&apiKey=b6f591e710ed4d32a7e03e9844f731ea"
  //     )
  //     .then((res) => setData(res.data.articles))
  //     .catch((e) => console.log(e));
  // }, []);
  // console.log(data);

  return (
    <div >
      <div className={styled.add1}>
        <img
          src="https://tpc.googlesyndication.com/daca_images/simgad/17135105900879832363"
          alt=""
        />
      </div>
      <div className={styled.box1}>
        <div className={styled.rbox}>
          <p>MUST READ</p>
        </div>
        <div className={styled.wrt}>
          <marquee>
            LIMITED PERIOD OFFER/ GET THE INDIAN EXPRESS DIGITAL PREMIUM NOW
            WITH AD-LITE
          </marquee>
        </div>
      </div>

      {/* ....... */}
<div className={styled.maindiv}>

  {/* ADD1 */}
        <div className={styled.image1}>
          <img
            src="https://tpc.googlesyndication.com/simgad/4933651823984287320"
            width="160px"
            height="600px"
            alt=""
          />
        </div>
  {/* ADD1 */}
  

{/* <div>
</div> */}

{/* City Page */}
      <div className={styled.news}>
<Crousel/>
       
        <City/>
      </div>
{/* City Page */}


{/* SideNews */}
<div className={styled.Sidenews}>
<Sidenews/>
</div>
{/* SideNews */}



{/* SideAdd */}
      <div className={styled.add}>
      <Addvertise/>
      </div>
{/* SideAdd */}



{/* Add2 */}
        <div className={styled.image1}>
          <img
            src="https://tpc.googlesyndication.com/simgad/4933651823984287320"
            width="160px"
            height="600px"
            alt=""
          />
        </div>
{/* Add2 */}

        </div>

    </div>
  );
};

export default Cities;

// c9146378e4af465bacf36a65828ba9f0

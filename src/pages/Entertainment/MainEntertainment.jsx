import React, { useEffect } from "react";
import Cities from "../Cities/Cities";
import EnterApi from "./EnterApi";
import Entermore from "./Entersidebar/Entermore";
import Entertaimentnews from "./Entertaimentnews";
import Entertainment from "./Entertainment";
import Headline from "./Navbar/Headline";
import Mininavbar from "./Navbar/Mininavbar";

const MainEntertainment = () => {
  useEffect(() => {
    document.title = "Entertainment News: Latest News, India News, Breaking News, Today's News Headlines Online, English News Top Stories, Coronavirus News, IPL 2022 Updates|The Indian Express";
  }, []);
  return (
    <div style={{ width: "85%", margin: "auto", marginTop: "25px" }}>
      <Mininavbar />

      <Headline />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <Entertainment />
          <Entertaimentnews />
          <EnterApi />
        </div>
        <div>
          <Entermore />
        </div>
      </div>
    </div>
  );
};

export default MainEntertainment;

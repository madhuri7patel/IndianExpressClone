import axios from "axios";
import React, { useEffect, useState } from "react";
import Enterarticles from "./Enterarticles";

const EnterApi = () => {
  let headline = JSON.parse(localStorage.getItem("titles"));

  const [Enterapi, setEnterapi] = useState([]);
  useEffect(() => {
    // "https://newsapi.org/v2/top-headlines?country=in&apiKey=b6f591e710ed4d32a7e03e9844f731ea"
    axios
      .get(
        `https://newsapi.org/v2/everything?q=${headline}&from=2022-05-19&sortBy=publishedAt&apiKey=b6f591e710ed4d32a7e03e9844f731ea`
      )
      .then(({ data }) => {
        setEnterapi(data.articles);
      });
  }, []);

  return (
    <div>
      {Enterapi.map((data) => (
        <Enterarticles key={data.id} {...data} />
      ))}
    </div>
  );
};

export default EnterApi;

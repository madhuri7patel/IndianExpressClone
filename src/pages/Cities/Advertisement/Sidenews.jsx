import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Sidenews = ({ title, content, publishedAt, urlToImage, description }) => {
  let localdata = {
    title: title,
    content: content,
    img: urlToImage,
    des: description,
  };

  const [sidedata, setSideData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // "https://newsapi.org/v2/top-headlines?country=in&apiKey="
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=b6f591e710ed4d32a7e03e9844f731ea`
      )
      .then((res) => setSideData(res.data.articles))
      .catch((e) => console.log(e));
  }, []);

  const newpage = () => {
    navigate(".Cities/NewPage.jsx")
    // localStorage.setItem("new", JSON.stringify(localdata));
  };
  return (
    <div style={{marginTop:"10px"}}>
      {sidedata.map((el,index) => {
        return (
          <div key={index}
            onClick={newpage}
            className="card mb-3 ml-4"
            style={{ maxWidth: "340px", justifyContent: "center" }}
          >
                      <div class="card-header text-info">Featured</div>
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={el.urlToImage}
                  className="img-fluid rounded-start"
                  alt="..."
                />
                <p>{el.author}</p>
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{el.title}</h5>
                  {/* <p className="card-text">{el.description}</p> */}
                  <p className="card-text">
                    <small className="text-muted">{el.publishedAt}</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
//           </div>
        );
      })}
    </div>
  );
};

export default Sidenews;

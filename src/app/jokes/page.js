"use client";
import axios from "axios";
import { useEffect, useState } from "react";

const Alljokes = () => {
  const [mydata, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.freeapi.app/api/v1/public/randomjokes")
      .then((res) => setData(res.data?.data?.data));
  }, []);

  return (
    <div>
      All jokes
      {mydata.map((post) => {
        const { id, content } = post;
        return (
          <div>
            <h1>{id}</h1>
            <p>{content}</p>
          </div>
        );
      })}
    </div>
  );
};
export default Alljokes;

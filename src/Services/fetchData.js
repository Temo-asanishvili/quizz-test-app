import { API } from "../Utilities/Variables";
import { useState, useEffect } from "react";

function FetchData() {
  const [data, setData] = useState();
  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);
  return data;
}

export default FetchData;

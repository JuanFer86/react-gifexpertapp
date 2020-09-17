import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

//custom hook, se puede usar efectos, estados entre otros...

export const useFetchGifs = (category) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getGifs(category).then((imgs) =>
      setState({
        data: imgs,
        loading: false,
      })
    );
  }, [category]);

  return state; // data: [], loading: true
};

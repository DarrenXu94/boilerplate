import React, { useEffect } from "react";
import Body from "./frames/Body/Body";
import Navbar from "./frames/Navbar/Navbar";
import { fetchTodos } from "./LandingActions";
import { useLandingStore } from "./LandingStore";

export default function Landing() {
  const [_, { setData }] = useLandingStore();

  const init = async () => {
    try {
      const res = await fetchTodos();
      console.log(res);
      setData(res);
    } catch (e) {
      // Handle the error here
      console.log(e);
    }
  };
  useEffect(() => {
    init();
  }, []);
  return (
    <div>
      <Navbar />
      Landing
      <Body />
    </div>
  );
}

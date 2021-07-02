import React, { useEffect } from "react";
import { useQuery } from "react-query";
import Body from "./frames/Body/Body";
import Navbar from "./frames/Navbar/Navbar";
import { fetchTodos } from "./LandingActions";
import { useLandingStore } from "./LandingStore";

export default function Landing() {
  const [_, { setData }] = useLandingStore();

  const { data } = useQuery("todos", fetchTodos);

  useEffect(() => {
    if (data) {
      setData(data);
    }
  }, [data]);

  return (
    <div>
      <Navbar />
      Landing
      <Body />
    </div>
  );
}

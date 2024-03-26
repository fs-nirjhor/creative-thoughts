"use client";

import { useEffect, useState } from "react";

const RenderingTest = () => {
  //! rendering test
  const [random, setRandom] = useState(null);
  useEffect(() => {
    setRandom(Math.random());
  }, []);
  const date = Date.now();
  console.log("RenderingTest: " + { date, random });
  return (
    <>
      <h1>Date: {date}</h1>
      <h1>Random: {random}</h1>
    </>
  );
};
export default RenderingTest;

"use client";

const RenderingTest = () => {
  const test = Date.now();
  console.log("RenderingTest: " + test);
  return <h1>{test}</h1>;
};
export default RenderingTest;

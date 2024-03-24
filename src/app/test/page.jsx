"use client";

//! navigation test
import NavigationTest from "@/components/Test/NavigationTest";

//! two valid way for csr are using useEffect or dynamic import. otherwise page will render twich and causes errors
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
const RenderingTest = dynamic(() => import("@/components/Test/RenderingTest"), {
  ssr: false,
});

const TestPage = () => {
  //! rendering test
  const [renderingTest, setRenderingTest] = useState(null);
  useEffect(() => {
    setRenderingTest(Math.random());
  }, []);
  console.log("renderingTest: " + renderingTest);
  return (
    <main className="text-center text-lg leading-loose">
      <h1 className="text-cyan-500 text-xl">Testing Next JS Features</h1>
      {/* rendering test */}
      <h1>{renderingTest}</h1>
      <RenderingTest />
      {/* navigation test */}
      <NavigationTest />
    </main>
  );
};
export default TestPage;

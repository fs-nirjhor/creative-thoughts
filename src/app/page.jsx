//"use client";

import Image from "next/image";
import hero from "@/../public/hero.gif";
import brands from "@/../public/brands.png";
import Link from "next/link";

//! two valid way for csr are using useEffect or dynamic import. otherwise page will render twich and causes errors
//import { useEffect, useState } from "react";

//import dynamic from "next/dynamic";
//const RenderingTest = dynamic(() => import("@/components/Test/RenderingTest"), { ssr: false });

const HomePage = () => {
  /* const [test, setTest] = useState(null);
  useEffect(() => {
      setTest(Math.random());
  }, []); 
  console.log(test); */
  return (
    <section className="flex justify-between items-center gap-3">
      <div>
        {/* <h1>{test}</h1> */}
        {/* <RenderingTest />  */}
        <h1 className="text-6xl font-bold mb-5">Creative Thoughts Agency.</h1>
        <p className="mb-3 text-justify">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam
          velit, iste hic voluptate impedit esse tenetur soluta omnis mollitia
          perspiciatis.
        </p>
        <div className="flex gap-5">
          <Link
            href="/learn-more"
            className="px-3 py-2 rounded hover:opacity-50 bg-blue-600"
          >
            Learn More
          </Link>
          <Link
            href="/contact"
            className="px-3 py-2 rounded hover:opacity-50 bg-white text-background"
          >
            Contact
          </Link>
        </div>
        <div className="grayscale">
          <Image src={brands} alt="brands" />
        </div>
      </div>
      <Image src={hero} alt="hero" className="w-1/2 hidden md:block rounded" />
    </section>
  );
};
export default HomePage;

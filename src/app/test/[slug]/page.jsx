"use client";

import { useParams, usePathname, useSearchParams } from "next/navigation";

const Subtest = () => {
  const params = useParams();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  // console.log(params);
  // console.log(pathname);
  //console.log(searchParams);
  return (
    <main className="text-center text-lg leading-loose">
      <p>params: {params.slug}</p>
      <p>pathname: {pathname}</p>
      <p>searchParams: {searchParams.get("search")}</p>
    </main>
  );
};
export default Subtest;

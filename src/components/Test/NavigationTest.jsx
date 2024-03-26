"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

const NavigationTest = () => {
  const router = useRouter();

  const btnStyle = "px-2 border border-foreground rounded hover:opacity-50";
  return (
    <main>
      <div className="flex flex-wrap gap-5 justify-center mt-5">
        <Link href="/blog" prefetch={false} className={btnStyle}>
          Link Blog
        </Link>
        <button
          className={btnStyle}
          onClick={() => router.push("/test/subtest?search=abcd")}
        >
          Push sub-test
        </button>
        <button className={btnStyle} onClick={() => router.replace("/contact")}>
          Replace contact
        </button>
        <button className={btnStyle} onClick={() => router.prefetch("/blog")}>
          Prefetch Blog
        </button>
        <button className={btnStyle} onClick={() => router.refresh()}>
          Refresh
        </button>
        <button className={btnStyle} onClick={() => router.back()}>
          Back
        </button>
        <button className={btnStyle} onClick={() => router.forward()}>
          Forward
        </button>
      </div>
    </main>
  );
};
export default NavigationTest;

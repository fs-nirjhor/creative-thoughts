import Link from "next/link";
import { useRouter } from "next/navigation";

const NavigationTest = () => {
  const router = useRouter();
  const btnStyle = "px-2 border border-foreground";
  return (
    <div className="flex gap-5 justify-center mt-5">
      <Link href="/blog" prefetch={false} className={btnStyle}>
        Link Blog
      </Link>
      <button className={btnStyle} onClick={() => router.push("/")}>
        Push Home
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
  );
};
export default NavigationTest;

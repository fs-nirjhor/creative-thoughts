import Image from "next/image";
import about from "@/../public/about.png";

const AboutPage = () => {
  return (
    <section className="flex justify-between items-center gap-3">
      <div>
        <h1>Creative Thoughts</h1>
      </div>
      <Image
        src={about}
        alt="about"
        className="w-1/2 hidden md:block rounded"
      />
    </section>
  );
};
export default AboutPage;

import Image from "next/image";
import about from "@/../public/about.png";

const AboutPage = () => {
  return (
    <section className="flex justify-between items-center gap-2">
      <div>
        <h1>Creative Thoughts</h1>
      </div>
      <div className="w-1/2">
        <Image src={about} alt="about" />
      </div>
    </section>
  );
};
export default AboutPage;

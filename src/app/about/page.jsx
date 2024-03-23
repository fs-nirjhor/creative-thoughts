import Image from "next/image";
import about from "@/../public/about.png";

const AboutPage = () => {
  return (
    <section className="flex justify-between items-center gap-5">
      <div>
        <h3 className="font-bold text-blue-700">About Company</h3>
        <h1 className="text-6xl font-bold my-5">Creative Thoughts Agency.</h1>
        <p className="mb-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
          architecto in quas nihil et labore cupiditate voluptatem, quaerat
          distinctio consequuntur ea similique omnis exercitationem delectus
          fugit cumque laborum vero ex!
        </p>
        <div className="flex justify-between">
          <div>
            <h4 className="font-bold text-blue-700 text-xl">10 K+</h4>
            <p className="text-sm">Year of experience</p>
          </div>
          <div>
            <h4 className="font-bold text-blue-700 text-xl">274 K+</h4>
            <p className="text-sm">People reached</p>
          </div>
          <div>
            <h4 className="font-bold text-blue-700 text-xl">5 K+</h4>
            <p className="text-sm">Services and plugins</p>
          </div>
        </div>
      </div>
      <div className="hidden lg:block rounded">
        <Image src={about} alt="about" />
      </div>
    </section>
  );
};
export default AboutPage;

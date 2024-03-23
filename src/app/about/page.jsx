import Image from "next/image";
import about from "@/../public/about.png";

const AboutPage = () => {
  return (
    <section className="flex justify-between items-center gap-5">
      <div>
        <h3 className="font-bold text-blue-700">About Company</h3>
        <h1 className="text-6xl font-bold my-5">
          We create digital ideas that are bigger, bolder, braver and better.
        </h1>
        <p className="mb-5 text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
          architecto in quas nihil et labore cupiditate voluptatem, quaerat
          distinctio consequuntur ea similique omnis exercitationem delectus
          fugit cumque laborum vero ex!
        </p>
        <div className="flex flex-col md:flex-row justify-between text-center gap-3">
          <div>
            <h4 className="font-bold text-blue-700 text-2xl">10 K+</h4>
            <p className="text-sm">Year of experience</p>
          </div>
          <div>
            <h4 className="font-bold text-blue-700 text-2xl">274 K+</h4>
            <p className="text-sm">People reached</p>
          </div>
          <div>
            <h4 className="font-bold text-blue-700 text-2xl">5 K+</h4>
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

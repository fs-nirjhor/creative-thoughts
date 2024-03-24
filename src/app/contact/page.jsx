import Image from "next/image";
import contact from "@/../public/contact.png";

export const metadata = {
  title: "Contact",
  description: "Contact with creative thoughts agency",
};

const ContactPage = () => {
  const inputClass =
    "focus:border-2 border-foreground rounded bg-slate-800 p-2 w-full";
  return (
    <section className="flex justify-between items-center gap-20">
      <div className="flex-1 hidden lg:block rounded">
        <Image src={contact} alt="contact" />
      </div>
      <form className="flex-1 flex flex-col gap-3">
        <input
          type="text"
          name="name"
          placeholder="Name and Surename"
          className={inputClass}
        />
        <input
          type="email"
          name="email"
          placeholder="Email address"
          className={inputClass}
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone number (optional)"
          className={inputClass}
        />
        <textarea
          name="message"
          id=""
          cols="30"
          rows="10"
          placeholder="Message"
          className={inputClass}
        ></textarea>
        <button className="bg-blue-700 rounded p-2 mt-2">Send</button>
      </form>
    </section>
  );
};
export default ContactPage;

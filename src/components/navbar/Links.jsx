import Link from "next/link";

const Links = () => {
  const links = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Contact", path: "/contact" },
    { title: "Blog", path: "/blog" },
    // { title: "Login", path: "/login" },
  ];
  return (
    <nav>
      {links.map((link) => (
        <Link href={link.path} key={link.title}>
          {" "}
          {link.title}{" "}
        </Link>
      ))}
    </nav>
  );
};
export default Links;

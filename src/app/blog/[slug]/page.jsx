import Image from "next/image";

const SingleBlogPage = () => {
  const title = "Title";
  const slug = "title";
  const author = "John Smith";
  const description =
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad debitis inventore numquam accusantium totam libero facilis autem error nam dolores.";
  const date = "Mar 03 2024";
  const image =
    "https://images.pexels.com/photos/19598115/pexels-photo-19598115/free-photo-of-women-painting-on-easels.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
  const avatar =
    "https://images.pexels.com/photos/19598115/pexels-photo-19598115/free-photo-of-women-painting-on-easels.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
  return (
    <main className="flex flex-col lg:flex-row justify-between gap-5">
      <section className="relative aspect-square flex-1">
        <Image src={image} alt={title} fill className="rounded" />
      </section>
      <section className="flex-1">
        <h1 className="font-bold text-2xl mb-3">{title}</h1>
        <div className="flex items-center gap-5 mb-3">
          <div className="relative w-10 h-10">
            <Image
              src="/noavatar.png"
              alt={author}
              fill
              className="rounded-full"
            />
          </div>
          <div>
            <h5 className="text-gray-400 font-semibold">Author</h5>
            <p>{author}</p>
          </div>
          <div>
            <h5 className="text-gray-400 font-semibold">Published</h5>
            <p>{date}</p>
          </div>
        </div>
        <p>{description}</p>
      </section>
    </main>
  );
};
export default SingleBlogPage;

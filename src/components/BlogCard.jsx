import { Link } from "react-router-dom";
import notfound from "../assets/notFound.jpg";

const BlogCard = ({ blog }) => {
  const { cover_image, title, description, published_at, id } = blog;
  return (
    <main className="transition border-2 hover:scale-105 border-primary hover:border-secondary border-opacity-30">
      <Link
        to={"/blog/${id}"}
        className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-[#e85d04] "
      >
        <img
          role="presentation"
          className="object-cover w-full rounded h-44 bg-gray-500"
          src={cover_image || notfound}
        />
        <div className="p-6 space-y-2 bg-[#e85d04]">
          <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
            {title}
          </h3>
          <span className="text-xs text-gray-400">
            {new Date(published_at).toLocaleDateString()}
          </span>
          <p>{description}</p>
        </div>
      </Link>
    </main>
  );
};

export default BlogCard;

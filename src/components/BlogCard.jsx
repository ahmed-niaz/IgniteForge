import { Link } from "react-router-dom";
import notfound from "../assets/notFound.jpg";
import PropTypes from 'prop-types'
import { MdDeleteForever } from "react-icons/md";


const BlogCard = ({ blog,deletable,handleDelete }) => {
  const { cover_image, title, description, published_at, id } = blog;

  console.log(id);
  return (
    <main className="transition border-2 hover:scale-105 border-primary hover:border-secondary border-opacity-30">
      <div className="relative">
      <Link
        to={`/blog/${id}`}
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
      {
      deletable && (
        <div onClick={()=>handleDelete(id)} className="absolute top-0 -right-2 text-red-900"><MdDeleteForever size={40} /></div>
      )
      }
      </div>
    </main>
  );
};

BlogCard.propTypes = {
  blog: PropTypes.object,
}

export default BlogCard;

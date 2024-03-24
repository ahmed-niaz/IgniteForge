import { useLoaderData } from "react-router-dom";
import notfound from "../assets/notFound.jpg";
import Markdown from 'react-markdown'
import rehypeRaw from "rehype-raw";

const Content = () => {
  const blog = useLoaderData();
  const { cover_image, title,tags,body_html,url} = blog;
  return (
    <main>
      <div className=" mx-auto group bg-[#e85d04] p-2 ">
        <img
          role="presentation"
          className="object-cover w-full rounded h-44 bg-gray-500"
          src={cover_image || notfound}
        />
        <div>
          <div className="flex flex-wrap py-6 gap-2 border-t border-dashed dark:border-gray-400">
           {
            tags.map((tag)=>(
                <a key={tag}
                rel="noopener noreferrer"
                href="#"
                className="px-3 py-1 rounded-sm hover:underline dark:bg-violet-400 dark:text-gray-900"
              >
                #{tag}
              </a>
            ))
           }
            
          </div>
          
        </div>
        <div className="p-6 space-y-2 bg-[#e85d04]">
          <a href={url} target="_blank" className="text-2xl font-semibold group-hover:underline group-focus:underline">
            {title}
          </a>
          <Markdown rehypePlugins={[rehypeRaw]}>{body_html}</Markdown>
        </div>
      </div>
    </main>
  );
};

export default Content;

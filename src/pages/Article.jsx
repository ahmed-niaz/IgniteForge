import { useState } from "react";
import { Link, Outlet, useLoaderData } from "react-router-dom";
import { MdBookmarkAdd } from "react-icons/md";
import { saveBlogs } from "../utils";

const Article = () => {
  const [tabIdx,setTabIdx] = useState(0);
  const handleBookmark = (article)=>{
 console.log(article);
saveBlogs(article);
  }

  // console.log(article);
  const article = useLoaderData();
  const {
    comments_count,
    title,
    reading_time_minutes,
    public_reactions_count,
    published_at

  } = article;
 
  return (
    <main>
      <div className="max-w-3xl px-6 py-16 mx-auto space-y-12">
        <article className="space-y-8">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold md:tracking-tight md:text-5xl">
              {title}
            </h1>
            <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center dark:text-gray-400">
              <p className="text-sm">
                {reading_time_minutes} min read•{" "}
                {new Date(published_at).toLocaleDateString()}
              </p>

              <p className="flex-shrink-0 mt-3 text-sm md:mt-0">
                {comments_count} comments • {public_reactions_count} views
              </p>
            </div>
            {/* tabs starts */}
            <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap">
              <Link
              to=''
              onClick={()=>setTabIdx(0)}
              className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIdx === 0 ? 'border border-b-0': 'border-b'} rounded-t-lg dark:border-[#e85d04] dark:text-[#e85d04] text-bold`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4"
                >
                  <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                </svg>
                <span>Content</span>
              </Link>
              <Link
               to={`author`}
               onClick={()=>setTabIdx(1)}
                className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIdx === 1 ? 'border border-b-0': 'border-b'} rounded-t-lg dark:border-[#e85d04] dark:text-[#e85d04] text-bold`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4"
                >
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                </svg>
                <span>Author</span>
              </Link>
              {/* Bookmarks Button */}
              <div onClick={()=> handleBookmark(article)} className="bg-[#e85d04] p-3 ml-12 hover:bg-opacity-30 bg-opacity-20 cursor-pointer rounded-full hover:scale-105 hover:overflow-hidden"><MdBookmarkAdd size={20} className="text-[#e85d04]"/></div>
            </div>
            {/* end */}
          </div>
          <Outlet/>
        </article>
        
      </div>
    </main>
  );
};

export default Article;


// Part 4 => 44:54
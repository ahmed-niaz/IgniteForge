import { Link } from "react-router-dom";


const Hero = () => {
  return (
    <main className="primary-font">
      <div className="hero -mt-16">
        <div className="hero-content text-center">
          <div className="max-w-full">
            <h1 className="text-6xl font-extrabold">
              Welcome to <span  className="bg-gradient-to-r from-orange-700 via-[#e85d04] to-[#ee9b00] text-transparent bg-clip-text animate-gradient bg-300%">IgniteForge</span>
            </h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <div className="flex justify-center gap-8">
              <Link
                to="/blogs"
                className="relative px-5 py-2 font-medium text-white group"
              >
                <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-[#ee9b00] group-hover:bg-[#faa307] group-hover:skew-x-12"></span>
                <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-[#e85d04] group-hover:bg-[#ee9b00] group-hover:-skew-x-12"></span>
                <span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-[#ee9b00] -rotate-12"></span>
                <span className="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-[#ee9b00] -rotate-12"></span>
                <span className="relative">Read Blogs</span>
              </Link>
              <Link
                to="/bookmarks"
                className="relative px-5 py-2 font-medium text-white group"
              >
                <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-[#ee9b00] group-hover:bg-[#ee9b00] group-hover:skew-x-12"></span>
                <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-[#e85d04] group-hover:bg-[#ee9b00] group-hover:-skew-x-12"></span>
                <span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-[#ee9b00] -rotate-12"></span>
                <span className="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-[#ee9b00] -rotate-12"></span>
                <span className="relative">Bookmarks</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;

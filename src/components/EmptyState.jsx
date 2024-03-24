import { Link } from "react-router-dom";

const EmptyState = ({message,address,label}) => {
    return (
        <main className="h-screen gap-5 flex flex-col justify-center items-center pb-16">
            <p>{message}</p>
            <Link
                to={address}
                className="relative px-5 py-2 font-medium text-white group"
              >
                <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-[#ee9b00] group-hover:bg-[#faa307] group-hover:skew-x-12"></span>
                <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-[#e85d04] group-hover:bg-[#ee9b00] group-hover:-skew-x-12"></span>
                <span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-[#ee9b00] -rotate-12"></span>
                <span className="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-[#ee9b00] -rotate-12"></span>
                <span className="relative">{label}</span>
              </Link>
        </main>
    );
};

export default EmptyState;
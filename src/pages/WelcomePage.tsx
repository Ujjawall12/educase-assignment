import { Link } from "react-router-dom";

const WelcomePage = () => {
  return (
    <div className="bg-[#F7F8F9] w-[375px] h-[730px] border border-gray-200 flex flex-col justify-end">
      <div className="p-5">
        <h1 className="text-[28px] font-medium text-[#1D2226] leading-[30px] mb-[10px]">
          Welcome to PopX
        </h1>
        <p className="text-lg text-[#1D2226] opacity-60 leading-[26px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>

        <div className="flex flex-col gap-[10px] font-medium mt-7 mb-8">
          <Link to="/signup" className="w-full">
            <button className="bg-[#6C25FF] rounded-md text-white text-base leading-[17px] h-[46px] cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#5A1EDB] w-full">
              Create Account
            </button>
          </Link>
          <Link to="/signin" className="w-full">
            <button className="bg-[#6C25FF4B] rounded-md text-[#1D2226] text-base leading-[17px] h-[46px] cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#6e25ff37] w-full">
              Already Registered? Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;

import { useNavigate } from "react-router-dom";
import { useForm, type SubmitHandler } from "react-hook-form";

type FormInputs = {
  email: string;
  password: string;
};

const SignInPage = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    // In a real app, we would validate credentials with an API
    console.log(data);

    // For demo purposes, we'll just redirect to profile page
    // Normally you'd check if the credentials are valid first
    navigate("/profile");
  };

  return (
    <div className="bg-[#F7F8F9] w-[375px] h-[730px] border border-gray-200 px-5 pt-10">
      <h1 className="text-[28px] font-medium text-[#1D2226] leading-9">
        Signin to your PopX account
      </h1>
      <p className="text-lg text-[#1D2226] opacity-60 leading-[26px] mt-[14px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      </p>

      <form className="space-y-6 mt-6" onSubmit={handleSubmit(onSubmit)}>
        <div className="relative w-full">
          <input
            id="email"
            type="email"
            className="border border-gray-300 rounded-md px-3 py-2.5 w-full mt-2 focus:outline-none focus:ring-1 focus:ring-[#6C25FF]"
            {...register("email", {
              required: "Email address is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address"
              }
            })}
          />
          <label
            htmlFor="email"
            className="absolute text-[13px] left-2 -top-2 pl-1.5 pr-2 leading-[17px] bg-[#F7F8F9] text-[#6C25FF]"
          >
            Email address
          </label>
          {errors.email && (
            <span className="text-red-500 text-xs">{errors.email.message}</span>
          )}
        </div>

        <div className="relative w-full">
          <input
            id="password"
            type="password"
            className="border border-gray-300 rounded-md px-3 py-2.5 w-full mt-2 focus:outline-none focus:ring-1 focus:ring-[#6C25FF]"
            {...register("password", { required: "Password is required" })}
          />
          <label
            htmlFor="password"
            className="absolute text-[13px] left-2 -top-2 pl-1.5 pr-2 leading-[17px] bg-[#F7F8F9] text-[#6C25FF]"
          >
            Password
          </label>
          {errors.password && (
            <span className="text-red-500 text-xs">{errors.password.message}</span>
          )}
        </div>

        <button
          type="submit"
          className="bg-[#6C25FF] rounded-md text-white text-base leading-[17px] font-medium w-full h-[46px] cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#5A1EDB] mt-4"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default SignInPage;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, type SubmitHandler } from "react-hook-form";

type FormInputs = {
  name: string;
  phone: string;
  email: string;
  password: string;
  company: string;
  isAgency: "Yes" | "No";
};

const SignUpPage = () => {
  const navigate = useNavigate();
  const [agency, setAgency] = useState<"Yes" | "No">("Yes");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    // In a real app, we would send this data to an API
    console.log(data);

    // Store user data in localStorage (for demo purposes)
    localStorage.setItem("user", JSON.stringify({
      ...data,
      isAgency: agency
    }));

    // Redirect to profile page
    navigate("/profile");
  };

  return (
    <div className="bg-[#F7F8F9] w-[375px] h-[730px] border border-gray-200 px-5 pt-10 pb-7">
      <h1 className="text-[28px] font-medium text-[#1D2226] leading-9">
        Create your PopX account
      </h1>

      <form className="space-y-6 mt-6" onSubmit={handleSubmit(onSubmit)}>
        <div className="relative w-full">
          <input
            id="name"
            type="text"
            className="border border-gray-300 rounded-md px-3 py-2.5 w-full mt-2 focus:outline-none focus:ring-1 focus:ring-[#6C25FF]"
            {...register("name", { required: "Full name is required" })}
          />
          <label
            htmlFor="name"
            className="absolute text-[13px] left-2 -top-2 pl-1.5 pr-2 leading-[17px] bg-[#F7F8F9] text-[#6C25FF]"
          >
            Full Name<span className="ml-0.5 text-red-500">*</span>
          </label>
          {errors.name && (
            <span className="text-red-500 text-xs">{errors.name.message}</span>
          )}
        </div>

        <div className="relative w-full">
          <input
            id="phone"
            type="text"
            className="border border-gray-300 rounded-md px-3 py-2.5 w-full mt-2 focus:outline-none focus:ring-1 focus:ring-[#6C25FF]"
            {...register("phone", { required: "Phone number is required" })}
          />
          <label
            htmlFor="phone"
            className="absolute text-[13px] left-2 -top-2 pl-1.5 pr-2 leading-[17px] bg-[#F7F8F9] text-[#6C25FF]"
          >
            Phone number<span className="ml-0.5 text-red-500">*</span>
          </label>
          {errors.phone && (
            <span className="text-red-500 text-xs">{errors.phone.message}</span>
          )}
        </div>

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
            Email address<span className="ml-0.5 text-red-500">*</span>
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
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters"
              }
            })}
          />
          <label
            htmlFor="password"
            className="absolute text-[13px] left-2 -top-2 pl-1.5 pr-2 leading-[17px] bg-[#F7F8F9] text-[#6C25FF]"
          >
            Password<span className="ml-0.5 text-red-500">*</span>
          </label>
          {errors.password && (
            <span className="text-red-500 text-xs">{errors.password.message}</span>
          )}
        </div>

        <div className="relative w-full">
          <input
            id="company"
            type="text"
            className="border border-gray-300 rounded-md px-3 py-2.5 w-full mt-2 focus:outline-none focus:ring-1 focus:ring-[#6C25FF]"
            {...register("company", { required: "Company name is required" })}
          />
          <label
            htmlFor="company"
            className="absolute text-[13px] left-2 -top-2 pl-1.5 pr-2 leading-[17px] bg-[#F7F8F9] text-[#6C25FF]"
          >
            Company name<span className="ml-0.5 text-red-500">*</span>
          </label>
          {errors.company && (
            <span className="text-red-500 text-xs">{errors.company.message}</span>
          )}
        </div>

        <div>
          <span className="text-[13px] leading-[17px] text-[#1D2226]">
            Are you an Agency?<span className="text-red-500 ml-1">*</span>
          </span>
          <div className="flex gap-6 mt-2">
            <label className="flex items-center gap-2 text-sm">
              <div className="relative">
                <input
                  type="radio"
                  className="appearance-none h-4 w-4 border border-gray-300 rounded-full checked:border-[#6C25FF] checked:border-[5px] transition-all cursor-pointer focus:outline-none"
                  checked={agency === "Yes"}
                  onChange={() => setAgency("Yes")}
                />
              </div>
              Yes
            </label>
            <label className="flex items-center gap-2 text-sm">
              <div className="relative">
                <input
                  type="radio"
                  className="appearance-none h-4 w-4 border border-gray-300 rounded-full checked:border-[#6C25FF] checked:border-[5px] transition-all cursor-pointer focus:outline-none"
                  checked={agency === "No"}
                  onChange={() => setAgency("No")}
                />
              </div>
              No
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="bg-[#6C25FF] rounded-md text-white text-base leading-[17px] font-medium w-full h-[46px] cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#5A1EDB] mt-[88px]"
        >
          Create Account
        </button>
      </form>
    </div>
  );
};

export default SignUpPage;

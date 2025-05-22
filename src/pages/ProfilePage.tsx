import { useEffect, useState } from "react";
import profileImage from "../assets/profile.png";
import cameraIcon from "../assets/camera.png";

interface UserData {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  isAgency?: string;
}

const ProfilePage = () => {
  const [userData, setUserData] = useState<UserData>({
    name: "Marry Doe",
    email: "Maary@Gmail.com",
  });

  useEffect(() => {
    // Try to get user data from localStorage
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUserData(parsedUser);
      } catch (e) {
        console.error("Failed to parse user data", e);
      }
    }
  }, []);

  return (
    <div className="bg-[#F7F8F9] w-[375px] h-[730px] border-2 border-gray-200">
      <div className="bg-white h-[68px] drop-shadow shadow-[0px_3px_6px_#00000007] text-lg leading-[21px] text-[#1D2226] flex items-center pl-4">
        Account Settings
      </div>

      <div className="px-5 mt-5 space-y-[30px]">
        <div className="flex items-start gap-5 text-[#1D2226]">
          <div className="relative">
            <img
              src={profileImage}
              alt="Profile"
              className="w-[76px] h-[76px] rounded-full object-cover border border-gray-200"
            />
            <div className="absolute bottom-0 right-0 bg-[#6C25FF] rounded-full p-1 flex items-center justify-center">
              <img
                src={cameraIcon}
                alt="camera"
                width="21"
                height="23"
                style={{ width: "21px", height: "23px" }}
              />
            </div>
          </div>
          <div className="space-y-1">
            <p className="text-[15px] font-medium capitalize">{userData.name}</p>
            <p className="text-sm leading-[19px]">{userData.email}</p>
          </div>
        </div>

        <p className="text-sm leading-[22px]">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy
          Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
        </p>
      </div>

      <div className="mt-5 border-t border-dashed border-[#CBCBCB]" />
    </div>
  );
};

export default ProfilePage;

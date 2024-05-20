import Logo from "./ui/Logo";
import Socials from "./ui/Socials";

const Nav = () => {
  return (
    <div className="relative">
      <div className="bg-gradient-to-r from-black via-brandCol2 via-[50%] to-black p-1 flex justify-center shadow-md">
        <div className="max-w-screen-2xl w-full flex justify-between items-center">
          <div className="md:ml-[5rem]">
            <Logo />
          </div>

          <div className="md:mr-[5rem]">
            <Socials />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;

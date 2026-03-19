import HeaderNavigation from "./HeaderNavigation";

const Header = () => {
  return (
    <div className="w-full max-w-[800px] h-48 flex flex-col justify-center items-center gap-4 lg:flex-row lg:justify-between px-5 lg:px-10 mx-auto">
      <h1 className="font-sketch text-4xl sm:text-5xl text-center pointer-events-none select-none">
        STUFFED ANIMALS
      </h1>
      <HeaderNavigation />
    </div>
  );
};

export default Header;
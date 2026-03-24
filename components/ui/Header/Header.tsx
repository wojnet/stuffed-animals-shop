import Link from "next/link";
import HeaderNavigation from "./HeaderNavigation";

const Header = () => {
  return (
    <>
      <Link
        href="/cart"
        className="border bg-background border-black fixed top-5 right-5 z-10 p-1 rounded-lg"
      >
        <p>CART</p>
      </Link>
      <div className="w-full max-w-[800px] h-48 flex flex-col justify-center items-center gap-4 lg:flex-row lg:justify-between px-5 lg:px-10 mx-auto">
        <h1 className="font-sketch text-4xl sm:text-5xl text-center pointer-events-none select-none">
          STUFFED ANIMALS
        </h1>
        <HeaderNavigation />
      </div>
    </>
  );
};

export default Header;
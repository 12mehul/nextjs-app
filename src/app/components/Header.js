import Image from "next/image";
import Link from "next/link";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className=" p-0 justify-between items-center border-none outline-none">
      <div className=" text-left">
        <Link href="/">
          <Image src="/logo.png" alt="my logo" width={150} height={100} />
        </Link>
      </div>
      <Nav />
    </header>
  );
};

export default Header;

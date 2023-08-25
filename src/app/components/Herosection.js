import Image from "next/image";
import Link from "next/link";

const Herosection = ({ title, imageUrl }) => {
  return (
    <main className=" relative">
      <div className=" max-w-[120rem] mx-0 my-auto px-[6rem] py-[2rem]">
        <div className=" w-full grid grid-rows-2 h-[60rem]">
          <div className=" flex flex-col justify-center items-center">
            <h1 className=" uppercase text-7xl text-white">{title}</h1>
            <p className=" mx-0 my-9 font-light text-base">
              {" "}
              From award-winning dramas to blockbuster action movies, we&apos;ve
              got you covered. Browse our selection of the latest and greatest
              movies, and find your new favorite today.
            </p>
            <Link href="/movies">
              <button className="flex px-4 py-2 mb-4 font-bold text-white bg-blue-600 rounded-full w-fit">
                <span className="text-sm">Explore Movies</span>
              </button>
            </Link>
          </div>
          <div>
            <Image
              src={imageUrl}
              alt="watching movies"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Herosection;

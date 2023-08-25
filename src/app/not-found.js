import Link from "next/link";

const NotFound = () => {
  return (
    <section className=" max-w-[140rem] mx-0 my-auto px-[6rem] py-[2rem]">
      <div className=" w-full h-[60vh] flex justify-center items-center">
        <div className=" flex flex-col">
          <h1 className=" pt-20">
            404
            <span className=" ml-2 ">Not Found</span>
          </h1>
          <p>Could not find requested resource</p>
        </div>
        <div className=" flex flex-col ml-2">
          <Link href="/">
            <button>Go to Home Page</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;

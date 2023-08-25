import Image from "next/image";
import Link from "next/link";
const MovieCard = (curElem) => {
  const { id, type, title, synopsis } = curElem.jawSummary;

  return (
    <div className="w-full">
      <div className="relative p-4 bg-white  rounded shadow dark:bg-gray-700">
        <div className="block mb-2">
          <div className="relative overflow-hidden">
            <div className="mb-5 overflow-hidden">
              <Image
                className="object-cover w-full mx-auto transition-all rounded h-72 hover:scale-110"
                src={curElem.jawSummary.backgroundImage.url}
                alt={title}
                width={260}
                height={200}
              />
            </div>
          </div>
          <div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">
              {title.substring(0, 20)}
            </h3>
          </div>
          <p className="text-lg font-bold text-blue-500 dark:text-blue-300">
            {`${synopsis.substring(0, 63)} ...`}
          </p>

          <div className="pt-4">
            <Link href={`/movies/${id}`}>
              <button className="flex px-4 py-2 mb-4 font-bold text-white bg-blue-600 rounded-full w-fit">
                <span className="text-sm">View Details</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;

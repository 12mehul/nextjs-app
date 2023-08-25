import MovieCard from "../components/MovieCard";

const Movie = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const url = process.env.RAPID_KEY;

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "284210cafemsh207233bad363c8dp152a9bjsn1fbfc559c911",
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
  };

  const res = await fetch(url, options);
  const data = await res.json();
  const main_data = data.titles;
  console.log(data);

  return (
    <div className="container mx-auto px-4">
      <section className="flex items-center py-20">
        <div className="px-4 mx-auto max-w-7xl">
          <h2 className="text-3xl mb-8">Series & Movies</h2>
          <div className="grid grid-cols-1 gap-4 lg:gap-6 sm:gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {main_data?.map((curElem) => {
              return <MovieCard key={curElem.id} {...curElem} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Movie;

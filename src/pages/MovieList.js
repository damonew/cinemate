import { useFetch } from "../useHooks/useFetch";
import { useTitle } from "../useHooks/useTitle";
import { Card } from "../components";

export const MovieList = ({apiPath, title}) => {
  const { data: movies } = useFetch(apiPath);

  useTitle(`${title} / Cinemate`);

  return (
    <main>
      <section className='max-w-7x1 mx-auto py-7'>
        <div className='flex justify-start flex-wrap other:justify-evenly'>
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie}/>
          ))}
        </div>
      </section>
    </main>
  )
}

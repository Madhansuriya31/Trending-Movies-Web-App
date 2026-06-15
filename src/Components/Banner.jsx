import { urltoposterPath } from "../utility/movieutility";

export default function Banner({url, title}) {
  const posterPath = urltoposterPath(url);
  return (
    <main className="relative">
      <img className="h-[20vh] md:h-[75vh] w-full" src={posterPath} alt="Banner-Image" />
      <p className="absolute bottom-1 w-full text-white text-center text-2xl">
        {title}
      </p>
    </main>
  );
}

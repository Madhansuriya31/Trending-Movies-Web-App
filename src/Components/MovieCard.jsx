export default function MovieCard({ url, title }) {
  return (
    <div className="relative h-70 w-50 rounded-2xl hover:scale-105 transition delay-150 duration-300 ease-in-out cursor-pointer">
      <img className="h-full w-full rounded-2xl" src={url} alt="Banner-Image" />
      <p className="absolute bottom-3 w-full text-white text-center text-xl">
        {title}
      </p>
    </div>
  );
}

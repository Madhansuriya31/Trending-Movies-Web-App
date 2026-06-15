export default function Pagenation({PageNo,SetPageNo}) {

  const handleprev = () => {
    if (PageNo > 1) {
      SetPageNo(PageNo - 1);
    }
  };
  return (
    <section className="mt-4 bg-gray-400 flex justify-center gap-8 p-3 text-xl">
      <div
        onClick={() => handleprev()}
        className="cursor-pointer hover:scale-120  ease-in-out"
      >
        <i className="fa-solid fa-arrow-left"></i>
      </div>
      <div className="font-bold">{PageNo}</div>
      <div
        onClick={() => SetPageNo(PageNo + 1)}
        className="cursor-pointer hover:scale-120  ease-in-out"
      >
        <i className="fa-solid fa-arrow-right"></i>
      </div>
    </section>
  );
}

function ShoeCard({ imgUrl, changeBigShoeImage, bigShoeImg }) {
  const handelClick = () => {
    if (bigShoeImg !== imgUrl.bigShoe) {
      changeBigShoeImage(imgUrl.bigShoe);
    }
  };
  return (
    <div
      className={`rounded-xl border-2 cursor-pointer max-sm:flex-1 ${
        bigShoeImg === imgUrl.bigShoe ? "border-red-600" : "border-transparent"
      }`}
      onClick={handelClick}
    >
      <div className=" flex items-center justify-center bg-card bg-cover sm:h-40 sm:w-40 bg-center max-sm:p-4">
        <img
          src={imgUrl.thumbnail}
          alt="card coll "
          width={127}
          height={102}
          className="object-contain"
        />
      </div>
    </div>
  );
}

export default ShoeCard;

import { star } from "../assets/icons";

function Box(props) {
  const { id, title, description, category, price, rating, images } = props;
  return (
    <div className="bg-white py-4 px-3 shadow-xl ">
      <div className="w-full h-[308px]">
        <img
          src={images}
          alt="imageone"
          className="w-full h-full object-contain"
        />
      </div>
      <h3 className="text-xl text-red-600 font-mono my-2">{title}</h3>
      <p className="text-[15px] text-gray-500 mb-3 ">{description}</p>
      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          <img src={star} alt="image star" width={30} height={30} />
          <p className="text-gray-400 text-xl">{rating}</p>
        </div>
        <p className="text-green-600  my-4 text-xl">$ {price}</p>
      </div>
      <span className="text-white px-6 w-full block text-center py-2 bg-red-500 hover:bg-red-600">
        {category}
      </span>
    </div>
  );
}

export default Box;

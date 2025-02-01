import { Link } from "react-router-dom";
import {
  BiologySvg,
  ChemistrySvg,
  GeometrySvg,
  MathSvg,
  PhysicsSvg,
  SearchSvg,
} from "../assets/Svg";

const Main = () => {
  return (
    <div>
      <div className="grid grid-cols-1 mx-4">
        <div className="my-4 xl:mx-[20rem]">
          <h1 className="text-[2.5rem] font-bold">
            What Subject do you want to improve today?
          </h1>
        </div>
        <div
          className="flex bg-gradient-to-r from-[#d9d9d91f] to-[#7373731f] rounded-[2rem] px-4 my-4 xl:mx-[20rem]"
          style={{ alignItems: "center" }}
        >
          <span className="">
            <SearchSvg />
          </span>
          <input
            className="w-[20rem] py-4 pl-4 text-lg font-semibold"
            type="text"
            style={{ outline: "none" }}
          />
        </div>
        <div className="grid grid-cols-2 gap-4 my-4 xl:grid-cols-3 xl:gap-14 xl:mx-[20rem]">
          <div className="flex flex-col items-center justify-center p-2 bg-gradient-to-r from-[#d9d9d91f] to-[#7373731f] rounded-[1.5rem] hover:bg-[#015055] hover:text-white">
            <Link to="biology">
              <span>
                <BiologySvg />
              </span>
              <h1 className="text-center text-lg font-semibold">Biology</h1>
            </Link>
          </div>
          <div className="flex flex-col items-center justify-center p-2 bg-gradient-to-r from-[#d9d9d91f] to-[#7373731f] rounded-[1.5rem] hover:bg-[#015055] hover:text-white">
            <span>
              <ChemistrySvg />
            </span>
            <h1 className="text-center text-lg font-semibold">Chemistry</h1>
          </div>
          <div className="flex flex-col items-center justify-center p-2 bg-gradient-to-r from-[#d9d9d91f] to-[#7373731f] rounded-[1.5rem] hover:bg-[#015055] hover:text-white">
            <span>
              <PhysicsSvg />
            </span>
            <h1 className="text-center text-lg font-semibold">Physics</h1>
          </div>
          <div className="flex flex-col items-center justify-center p-2 bg-gradient-to-r from-[#d9d9d91f] to-[#7373731f] rounded-[1.5rem] hover:bg-[#015055] hover:text-white">
            <span>
              <MathSvg />
            </span>
            <h1 className="text-center text-lg font-semibold">Math</h1>
          </div>
          <div className="flex flex-col items-center justify-center p-2 bg-gradient-to-r from-[#d9d9d91f] to-[#7373731f] rounded-[1.5rem] hover:bg-[#015055] hover:text-white">
            <span>
              <GeometrySvg />
            </span>
            <h1 className="text-center text-lg font-semibold">Geometry</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Main;

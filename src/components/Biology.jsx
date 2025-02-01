import { useNavigate } from "react-router-dom";
import { Chapters } from "../data/Data";

const Biology = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div>
        <h1 className="text-center text-[2rem] font-semibold my-4">Chapters</h1>
      </div>
      {Chapters().map((chapter, idx) => (
        <div
          key={idx}
          className="flex justify-center p-4 text-[1.5rem] xl:mx-[30rem] xl:my-8 border-3 border-slate-300 rounded hover:bg-slate-300 hover:cursor-pointer"
          onClick={() => {
            navigate("/quiz", { state: { chapter } });
          }}
        >
          <span className="mx-4">Chapter {idx + 1}.</span>
          <div>
            <h1>{chapter}</h1>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Biology;

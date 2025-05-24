
import Button5 from "./Button5";

const Button1 = () => {


  return (
    <div>
      {/* button 1 */}
      <div className="relative animationBtn1 overflow-hidden rounded-full p-1 w-fit">
        <button className=" text-white text-lg px-6 py-3 rounded-full bg-blue-950 ">
          Animation
        </button>
      </div>

      {/* button 2 */}
      <div className="mt-10 relative p-1 animationBtn2 rounded-full w-fit overflow-hidden">
        <button className=" text-white text-lg px-6 py-3 rounded-full bg-blue-950 ">
          Animation 2
        </button>
      </div>

      {/* button 3 */}
      <div className="mt-10 relative p-1 animate-gradient rounded-full w-fit overflow-hidden">
        <button className=" text-white text-lg px-6 py-3 rounded-full bg-blue-950 ">
          Animation 3
        </button>
      </div>

      {/* button 4 */}
      <div className="mt-10 relative p-1 animationBtn4 rounded-full w-fit overflow-hidden hover:scale-[105%] transition-all duration-200 ease-in-out">
        <button className=" text-white text-lg px-6 py-3 rounded-full cursor-pointer bg-gray-500 hover:bg-blue-950 transition-all duration-200 ease-in-out ">
          Hover me 4
        </button>
      </div>

      {/* button 5 */}
     <Button5 />
    </div>
  );
};

export default Button1;

import { Sparkle } from "lucide-react";
import { useState } from "react";

const Button5 = () => {
  const [sparkle3Active, setSparkle3Active] = useState(false);
  const [sparkle2Active, setSparkle2Active] = useState(false);
  const [sparkle1Active, setSparkle1Active] = useState(false);

  const handleMouseEnter = () => {
    // Reset all states first
    setSparkle3Active(false);
    setSparkle2Active(false);
    setSparkle1Active(false);

    // Delay chain animation
    setTimeout(() => {
      setSparkle3Active(true);
      setTimeout(() => {
        setSparkle3Active(false);
        setSparkle2Active(true);
        setTimeout(() => {
          setSparkle2Active(false);
          setSparkle1Active(true);
          setTimeout(() => {
            setSparkle1Active(false);
          }, 200); // Sparkle 1 reset
        }, 200); // Sparkle 2 duration
      }, 200); // Sparkle 3 duration
    }, 200); // Initial delay before Sparkle 3
  };

  return (
    <div
      onMouseEnter={() => {
        handleMouseEnter();
      }}
      className="mt-10 relative p-1 animationBtn5 rounded-full w-fit overflow-hidden hover:scale-[105%] transition-all duration-200 ease-in-out group"
    >
      <button className=" text-white text-lg px-6 py-4 rounded-full cursor-pointer bg-gray-500 hover:bg-blue-950 transition-all duration-200 ease-in-out ">
        <span className="flex items-center gap-2">
          <span className="flex">
            {/* sparkle 1 */}
            <span
              className="-mr-[12px] transition-all duration-200 ease-in-out"
              style={{
                transform: sparkle1Active ? "scale(1.4)" : "scale(1)",
                transition: "all 200ms ease-in-out",
              }}
            >
              <Sparkle
                strokeWidth={0}
                size={10}
                fill={sparkle1Active ? "white" : "#A9A9A9"}
              />
            </span>

            {/* sparkle 2 */}
            <span
              className="mt-[14px] -mr-[6px] transition-all duration-200 ease-in-out"
              style={{
                transform: sparkle2Active ? "scale(1.2)" : "scale(1)",
                transition: "all 200ms ease-in-out",
              }}
            >
              <Sparkle
                strokeWidth={0}
                size={15}
                fill={sparkle2Active ? "white" : "#A9A9A9"}
              />
            </span>

            {/* sparkle 3 */}
            <span
              className="transition-all duration-200 ease-in-out"
              style={{
                transform: sparkle3Active ? "scale(0.8)" : "scale(1)",
                transition: "all 200ms ease-in-out",
              }}
            >
              <Sparkle
                strokeWidth={0}
                size={24}
                fill={sparkle3Active ? "#A9A9A9" : "white"}
              />
            </span>
          </span>
          <span className=""> Hover me 4</span>
        </span>
      </button>
    </div>
  );
};

export default Button5;

import RainbowHighlight from "./rainbow-highlight";
import { RoughNotationGroup } from "react-rough-notation";

const Intro = () => {
  const colors = ["#F7EE7F", "#7F7FF2", "#EF8908", "#FC6471"];
  return (
    <div className="flex flex-row justify-center items-start overflow-hidden">
      {/* Text container */}

      <div className="w-full md:w-1/2 mx-auto text-center md:text-left lg:p-20">
        <RoughNotationGroup show={true}>
          <RainbowHighlight color={colors[0]}>
            <h1 className="text-4xl md:text-8xl font-bold text-gray-700 dark:text-gray-200 my-2">
              Developer
            </h1>
          </RainbowHighlight>
          <br />
          <RainbowHighlight color={colors[1]}>
            <h1 className="text-4xl md:text-8xl font-bold text-gray-700 dark:text-gray-200 my-2">
              Tinkerer
            </h1>
          </RainbowHighlight>
          <br />
          <RainbowHighlight color={colors[2]}>
            <h1 className="text-4xl md:text-8xl font-bold text-gray-700 dark:text-gray-200 my-2">
              Student
            </h1>
          </RainbowHighlight>
          <br />
          <RainbowHighlight color={colors[3]}>
            <h1 className="text-4xl md:text-8xl font-bold text-gray-700 dark:text-gray-200 my-2">
              Adventurer
            </h1>
          </RainbowHighlight>
        </RoughNotationGroup>
      </div>
      {/* Image container */}
      <div className="hidden lg:block relative w-full md:w-1/2 -mr-40 mt-20">
        <div className="w-3/4 ">
          <img src="/me.jpeg" alt="avatar" className=" shadow" />
          <div className="flex flex-row justify-between mt-4"></div>
        </div>
      </div>
    </div>
  );
};

export default Intro;

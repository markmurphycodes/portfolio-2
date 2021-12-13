import Thumbnail from "../components/thumbnail";
import { Fade } from "react-reveal";

const Project = ({
  picture,
  description,
  techStack,
  repo,
  left = null,
  right = null,
}) => {
  return (
    <div className="rounded-xl bg-red-100 my-10 grid grid-cols-1 md:grid-cols-3">
      {/* Image on the left */}
      {left || (!left && !right) ? (
        <div className="grid grid-cols-1 mx-auto p-4 m-4">
          <Fade left>
            <img src={picture} className="rounded-xl h-150 w-150 " />
          </Fade>
        </div>
      ) : null}

      {/* body */}
      <div className=" grid grid-cols-1 md:col-span-2 mx-auto m-4 p-4">
        <div>{description}</div>
        <div className="flex flex-row flex-wrap mt-4">
          <h4 className="text-2xl text-gray-500 rounded-md px-2 py-1 font-bold ">
            Tech Stack:
          </h4>
          {techStack.map((val, index) => {
            return (
              <Fade top big order={index}>
                <Thumbnail img={val} key={index} />
              </Fade>
            );
          })}
        </div>
        <a className="flex flex-row ml-auto" href={repo} target="blank">
          <div className="mx-2 text-md text-gray-500 font-bold">
            View Repository
          </div>
          <svg
            className="fill-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        </a>
      </div>

      {/* Image on the right */}
      {right || (left && right) ? (
        <div className="grid grid-cols-1 mx-auto gap-y-20 gap-x-20">
          <Fade right>
            <img src={picture} className="rounded-xl h-150 w-150 mx-4 my-4" />
          </Fade>
        </div>
      ) : null}
    </div>
  );
};

export default Project;

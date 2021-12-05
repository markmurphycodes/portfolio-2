import PageLayout from "../components/page-layout";
import SectionSeparator from "../components/section-separator";

export default function Index() {
  return (
    <PageLayout color="#EB8258" header="About Me">
      <div className="pt-20 grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto gap-y-20 gap-x-20">
        <div className="col-span-1 ">
          <h1 className="text-3xl rounded-md px-2 py-1 inline-block font-bold text-black-50">
            whoami
          </h1>
          <div className="bg-purple-50 p-4 mt-4 mb-4">
            <p>
              I am a father, a maker, and a doer. I have been fixing and
              breaking computers for around 15 years, and have barely scratched
              the surface. The world of technology is so fascinating to me
              partially because it is so vast.
            </p>
          </div>
          <h1 className="text-3xl rounded-md px-2 py-1 inline-block font-bold text-black-50">
            education
          </h1>
          <div className="bg-purple-50 p-4 mt-4 mb-4">
            <h4 className="text-2xl text-gray-500 rounded-md px-2 py-1 font-bold ">
              Master's
            </h4>
            <p>MS | Computer Science | 2024</p>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Georgia_Tech_seal.svg/2048px-Georgia_Tech_seal.svg.png"
              className="h-20 w-20 mx-4 my-4 center"
            />
            <p>Georgia Institute of Technology</p>
            <br />
            <h4 className="text-2xl text-gray-500 rounded-md px-2 py-1 font-bold ">
              Bachelor's
            </h4>
            <p>BS | Computer Science | 2021</p>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/e/eb/WGU-AcademicLogo_Seal.png"
              className="h-20 w-20 mx-4 my-4 center"
            />
            <p>Western Governors University</p>
          </div>
        </div>
        {/* Tech Stack */}
        <div className="col-span-1 md:col-span-2">
          <h1 className="text-3xl rounded-md px-2 py-1 inline-block font-bold text-black-50">
            tech
          </h1>
          <div className="bg-red-50 mb-4 mt-4">
            <h4 className="text-2xl text-gray-500 rounded-md px-2 py-1 font-bold ">
              languages
            </h4>
            <div className="flex flex-row flex-wrap mt-8">
              <img
                src="https://raw.githubusercontent.com/jmnote/z-icons/master/svg/java.svg"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://raw.githubusercontent.com/jmnote/z-icons/master/svg/c.svg"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://raw.githubusercontent.com/jmnote/z-icons/master/svg/php.svg"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://raw.githubusercontent.com/jmnote/z-icons/master/svg/python.svg"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png"
                className="h-20 w-20 mx-4 my-4"
              />
            </div>
          </div>
          <div className="bg-red-50 mb-4 mt-4">
            <h4 className="text-2xl text-gray-500 rounded-md px-2 py-1 font-bold ">
              web
            </h4>
            <div className="flex flex-row flex-wrap mt-8">
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-line.svg"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png"
                className="h-20 w-20 mx-4 my-4"
              />
            </div>
          </div>
          <div className="bg-red-50 mb-4 mt-4">
            <h4 className="text-2xl text-gray-500 rounded-md px-2 py-1 font-bold ">
              databases
            </h4>
            <div className="flex flex-row flex-wrap mt-8">
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mysql/mysql.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mongodb/mongodb.png"
                className="h-20 w-20 mx-4 my-4"
              />
            </div>
          </div>
          <div className="bg-red-50 mb-4 mt-4">
            <h4 className="text-2xl text-gray-500 rounded-md px-2 py-1 font-bold ">
              tools
            </h4>
            <div className="flex flex-row flex-wrap mt-8">
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original-wordmark.svg"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vim/vim-original.svg"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://raw.githubusercontent.com/jmnote/z-icons/master/svg/bash.svg"
                className="h-20 w-20 mx-4 my-4"
              />
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-3xl rounded-md px-2 py-1 inline-block font-bold text-black-50">
        interests
      </h1>
      <div className="colspan-1 bg-blue-50  p-4">
        <p>
          These are all things that I'm not necessarily an expert on, but enjoy
          learning about thoroughly.
        </p>
        <br />
        <p>
          Languages, Operating Systems, Compilers, Ethical Hacking,
          Physical-Digital Interaction, Privacy, Cryptography, Security
        </p>
      </div>
    </PageLayout>
  );
}

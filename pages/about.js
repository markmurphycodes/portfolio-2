import PageLayout from "../components/page-layout";
import SectionSeparator from "../components/section-separator";
import Thumbnail from '../components/thumbnail';

import {education, tech} from '../const';

export default function Index() {
  return (
    <PageLayout color="#EB8258" header="About Me">
      <div className="pt-20 grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto gap-y-20 gap-x-20">
        <div className="col-span-1 ">
          <h1 className="text-3xl rounded-md px-2 py-1 inline-block font-bold text-black-50">
            whoami
          </h1>
          <div className="bg-purple-100 p-4 mt-4 mb-4">
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
          <div className="bg-purple-100 p-4 mt-4 mb-4">
            <h4 className="text-2xl text-gray-500 rounded-md px-2 py-1 font-bold ">
              Master's
            </h4>
            <p>MS | Computer Science | 2024</p>
            <Thumbnail img={education.gatech} />
            <p>Georgia Institute of Technology</p>
            <br />
            <h4 className="text-2xl text-gray-500 rounded-md px-2 py-1 font-bold ">
              Bachelor's
            </h4>
            <p>BS | Computer Science | 2021</p>
            <Thumbnail img={education.wgu} />
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
                <Thumbnail img={tech.java} />
                <Thumbnail img={tech.c} />
                <Thumbnail img={tech.php} />
                <Thumbnail img={tech.python} />
                <Thumbnail img={tech.javascript} />
            </div>
          </div>
          <div className="bg-red-100 mb-4 mt-4">
            <h4 className="text-2xl text-gray-500 rounded-md px-2 py-1 font-bold ">
              web
            </h4>
            <div className="flex flex-row flex-wrap mt-8">
                <Thumbnail img={tech.react} />
                <Thumbnail img={tech.nextjs} />
                <Thumbnail img={tech.node} />
                <Thumbnail img={tech.html} />
                <Thumbnail img={tech.css} />
            </div>
          </div>
          <div className="bg-red-200 mb-4 mt-4">
            <h4 className="text-2xl text-gray-500 rounded-md px-2 py-1 font-bold ">
              databases
            </h4>
            <div className="flex flex-row flex-wrap mt-8">
                <Thumbnail img={tech.mysql} />
                <Thumbnail img={tech.postgres} />
                <Thumbnail img={tech.mongodb} />
            </div>
          </div>
          <div className="bg-red-300 mb-4 mt-4">
            <h4 className="text-2xl text-gray-500 rounded-md px-2 py-1 font-bold ">
              tools
            </h4>
            <div className="flex flex-row flex-wrap mt-8">
                <Thumbnail img={tech.linux} />
                <Thumbnail img={tech.git} />
                <Thumbnail img={tech.vim} />
                <Thumbnail img={tech.bash} />
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-3xl rounded-md px-2 py-1 inline-block font-bold text-black-50">
        interests
      </h1>
      <div className="colspan-1 bg-blue-100  p-4">
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

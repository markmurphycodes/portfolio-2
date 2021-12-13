import PageLayout from "../components/page-layout";
import SectionSeparator from "../components/section-separator";
import Thumbnail from "../components/thumbnail";
import { Fade } from "react-reveal";

import { education, tech } from "../const";

export default function Index() {
  return (
    <PageLayout color="#EB8258" header="About Me">
      <div className="pt-20 grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto gap-y-20 gap-x-20">
        <div className="col-span-1 ">
          <h1 className="text-3xl rounded-md px-2 py-1 inline-block font-bold text-black-50">
            whoami
          </h1>
          <div className="bg-purple-100 rounded-xl p-4 mt-4 mb-4">
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
          <div className="bg-purple-100 rounded-xl p-4 mt-4 mb-4">
            <h4 className="text-2xl text-gray-500 rounded-md px-2 py-1 font-bold ">
              Master's
            </h4>
            <p>MS | Computer Science | 2024</p>
            <Fade top order={1}>
              <Thumbnail img={education.gatech} />
            </Fade>
            <p>Georgia Institute of Technology</p>
            <br />
            <h4 className="text-2xl text-gray-500 rounded-md px-2 py-1 font-bold ">
              Bachelor's
            </h4>
            <p>BS | Computer Science | 2021</p>
            <Fade top order={2}>
              <Thumbnail img={education.wgu} />
            </Fade>
            <p>Western Governors University</p>
          </div>
        </div>
        {/* Tech Stack */}
        <div className="col-span-1 md:col-span-2">
          <h1 className="text-3xl rounded-md px-2 py-1 inline-block font-bold text-black-50">
            tech
          </h1>
          <div className="bg-red-50 rounded-xl mb-4 mt-4">
            <h4 className="text-2xl text-gray-500 rounded-md px-2 py-1 font-bold ">
              languages
            </h4>
            <div className="flex flex-row flex-wrap mt-8">
              <Fade top order={3}>
                <Thumbnail img={tech.java} />
              </Fade>
              <Fade top order={4}>
                <Thumbnail img={tech.c} />
              </Fade>
              <Fade top order={5}>
                <Thumbnail img={tech.php} />
              </Fade>
              <Fade top order={6}>
                <Thumbnail img={tech.python} />
              </Fade>
              <Fade top order={7}>
                <Thumbnail img={tech.javascript} />
              </Fade>
            </div>
          </div>
          <div className="bg-red-100 rounded-xl mb-4 mt-4">
            <h4 className="text-2xl text-gray-500 rounded-md px-2 py-1 font-bold ">
              web
            </h4>
            <div className="flex flex-row flex-wrap mt-8">
              <Fade top order={8}>
                <Thumbnail img={tech.react} />
              </Fade>
              <Fade top order={9}>
                <Thumbnail img={tech.nextjs} />
              </Fade>
              <Fade top order={10}>
                <Thumbnail img={tech.node} />
              </Fade>
              <Fade top order={11}>
                <Thumbnail img={tech.html} />
              </Fade>
              <Fade top order={12}>
                <Thumbnail img={tech.css} />
              </Fade>
            </div>
          </div>
          <div className="bg-red-200 rounded-xl mb-4 mt-4">
            <h4 className="text-2xl text-gray-500 rounded-md px-2 py-1 font-bold ">
              databases
            </h4>
            <div className="flex flex-row flex-wrap mt-8">
              <Fade top order={13}>
                <Thumbnail img={tech.mysql} />
              </Fade>
              <Fade top order={14}>
                <Thumbnail img={tech.postgres} />
              </Fade>
              <Fade top order={15}>
                <Thumbnail img={tech.mongodb} />
              </Fade>
            </div>
          </div>
          <div className="bg-red-300 rounded-xl mb-4 mt-4">
            <h4 className="text-2xl text-gray-500 rounded-md px-2 py-1 font-bold ">
              tools
            </h4>
            <div className="flex flex-row flex-wrap mt-8">
              <Fade top order={16}>
                <Thumbnail img={tech.linux} />
              </Fade>
              <Fade top order={17}>
                <Thumbnail img={tech.git} />
              </Fade>
              <Fade top order={18}>
                <Thumbnail img={tech.vim} />
              </Fade>
              <Fade top order={19}>
                <Thumbnail img={tech.bash} />
              </Fade>
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-3xl rounded-md px-2 py-1 inline-block font-bold text-black-50">
        interests
      </h1>
      <div className="colspan-1 bg-blue-100 rounded-xl p-4">
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

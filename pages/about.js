import PageLayout from "../components/page-layout";

export default function Index() {
  return (
    <PageLayout color="#EB8258" header="About Me">
      <div className="pt-20 grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto gap-y-20 gap-x-20">
        <div className="col-span-1 ">
          <h1 className="text-3xl rounded-md px-2 py-1 inline-block font-bold text-black-50">
            whoami
          </h1>
          <p>Coming soon!</p>
          <h1 className="text-3xl rounded-md px-2 py-1 inline-block font-bold text-black-50">
            education
          </h1>
          <p>Coming soon!</p>
          <h1 className="text-3xl rounded-md px-2 py-1 inline-block font-bold text-black-50">
            interests
          </h1>
          <p>Coming soon!</p>
        </div>
        {/* Tech Stack */}
        <div className="col-span-1 md:col-span-2">
          <h1 className="text-3xl rounded-md px-2 py-1 inline-block font-bold text-black-50">
            tech
          </h1>
          <p>
            More information to come here shortly. In the meantime, enjoy this
            list of technologies that I like and use!
          </p>
          <div className="flex flex-row flex-wrap mt-8">
            <img
              src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png"
              className="h-20 w-20 mx-4 my-4"
            />
            <img
              src="https://raw.githubusercontent.com/jmnote/z-icons/master/svg/java.svg"
              className="h-20 w-20 mx-4 my-4"
            />
            <img
              src="https://raw.githubusercontent.com/jmnote/z-icons/master/svg/php.svg"
              className="h-20 w-20 mx-4 my-4"
            />
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg"
              className="h-20 w-20 mx-4 my-4"
            />
            <img
              src="https://raw.githubusercontent.com/jmnote/z-icons/master/svg/python.svg"
              className="h-20 w-20 mx-4 my-4"
            />
            <img
              src="https://raw.githubusercontent.com/jmnote/z-icons/master/svg/c.svg"
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
            <img
              src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png"
              className="h-20 w-20 mx-4 my-4"
            />
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-line.svg"
              className="h-20 w-20 mx-4 my-4"
            />
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
    </PageLayout>
  );
}

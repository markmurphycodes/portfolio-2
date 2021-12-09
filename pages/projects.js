import PageLayout from "../components/page-layout";
import Project from '../components/project';

export default function Index() {
  return (
    <PageLayout color="#EB8258" header="My Projects">
      <div className="pt-20 grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto gap-y-20 gap-x-20">
        <div className="col-span-1 ">
      <Project />
        </div>
      </div>
    </PageLayout>
  );
}

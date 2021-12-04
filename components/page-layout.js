import Layout from "./layout";
import RainbowHighlight from "./rainbow-highlight";
import { RoughNotationGroup } from "react-rough-notation";

const PageLayout = ({ color, header, preview = false, children }) => {
  return (
    <Layout preview={preview}>
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800 antialiased">
        <RoughNotationGroup show>
          <RainbowHighlight color={color}>
            <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
              {header}
            </h1>
          </RainbowHighlight>
        </RoughNotationGroup>
      </div>
      <br />
      <div className="relative z-10 rounded-md shadow-md  p-4 md:p-10 lg:p-20 max-w-6xl mx-auto mb-20 mt-4">
        {children}
      </div>
    </Layout>
  );
};

export default PageLayout;

import { TfiMenu } from "react-icons/tfi";
import { PiBellSimpleRingingDuotone } from "react-icons/pi";
import { AiTwotoneEdit } from "react-icons/ai";

const HomePage = () => {
  return (
    <div className="flex h-screen w-full flex-col">
      <header className="flex h-20 w-full flex-row items-center justify-around border border-b-[2px] border-gray-200 bg-white">
        <div className="text-3xl">
          <TfiMenu />
        </div>
        <div className="text-xl font-thin">Ultimate blog app</div>
        <div className="flex items-center space-x-4">
          <div className="text-3xl">
            <PiBellSimpleRingingDuotone />
          </div>
          <div>
            <div className="h-5 w-5 rounded-full bg-gray-600"></div>
          </div>
          <div>
            <button className="flex items-center space-x-3 rounded border border-gray-200 px-4 py-2 transition hover:border-gray-900 hover:text-gray-500">
              <div>
                <AiTwotoneEdit />
              </div>
              <div>Write</div>
            </button>
          </div>
        </div>
      </header>
      <div className="grid grid-cols-12">main screen</div>
    </div>
  );
};

export default HomePage;

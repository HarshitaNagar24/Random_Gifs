import Random from "./components/Random";
import Tag from "./components/Tag";

function App() {
  return (
    <div className="w-full h-full flex flex-col background items-center">
      <h1 className="text-center bg-white rounded-lg w-11/12 mt-[40px] p-2 text-4xl">RANDOM GIFS</h1>
      <div className="flex flex-col w-full items-center gap-y-10 mt-[30px]">
        <Random />
        <Tag />
      </div>
    </div>
  );
}

export default App;

import Admin from "./Admin";

const Settings = () => {
  return (
    <div>
      <Admin/>
      <div className="mt-16">
        <h2 className="text-xl font-semibold mb-4">Dashboard Management Key</h2>
        <div className="flex gap-4">
          <input
            type="text"
            className="flex-1 px-4 py-2 w-[850px] border border-black rounded-full focus:ring-blue-500"
          />
          <button className="px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors">
            Enter
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;

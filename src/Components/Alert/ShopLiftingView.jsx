const ShopLiftingView = () => {
    return (
      <div className="w-[170vh] ml-48 mb-10 border border-black rounded-3xl p-4">
        <h1 className="font-semibold text-xl mb-20">Shop Lifting Alert</h1>
  
        <div className="">
          <div className="flex flex-col space-y- ml-10 mb-10 ">
            <img className="w-20 h-20 " src="src/assets/red.svg" />
            <span className="font-bold text-2xl ml-8">2</span>
          </div>
  
          <div className="overflow-x-auto">
            <table className="table-auto border-collapse border border-black w-full text-sm text-left text-gray-600">
              <thead className="bg-black text-whitew">
                <tr>
                  <th className="border border-black px-4 h-20 py-2">DATE</th>
                  <th className="border border-black px-4 h-20 py-2">TIME</th>
  
                  <th className="border border-black px-4 h-20 py-2">IMAGE</th>
                  <th className="border border-black px-4 h-20 py-2">AREA</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-black px-4 h-20 py-2"></td>
                  <td className="border border-black px-4 h-20 py-2"></td>
                  <td className="border border-black px-4 h-20 py-2"></td>
                  <td className="border border-black px-4 h-20 py-2"></td>
                  
                </tr>
                <tr>
                  <td className="border border-black px-4 h-20 py-2"></td>
                  <td className="border border-black px-4 h-20 py-2"></td>
                  <td className="border border-black px-4 h-20 py-2"></td>
                  <td className="border border-black px-4 h-20 py-2"></td>
              
                </tr>
                <tr>
                  <td className="border border-black px-4 h-20 py-2"></td>
                  <td className="border border-black px-4 h-20 py-2"></td>
                  <td className="border border-black px-4 h-20 py-2"></td>
                  <td className="border border-black px-4 h-20 py-2"></td>
                  
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  };
  
  export default ShopLiftingView;
  
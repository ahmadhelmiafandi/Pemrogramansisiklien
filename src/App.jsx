import "./App.css";

function App() {
  return (
    <>
      <div className="bg-gray-100 min-h-screen p-6">
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white p-6 min-h-40 rounded-lg shadow hover:shadow-lg transition-shadow hover:border hover:bg-gray-200 hover:scale-105 duration-300 flex justify-center items-center text-5xl">
            card 1
          </div>
          <div className="bg-white p-6 min-h-40 rounded-lg shadow hover:shadow-lg transition-shadow hover:border hover:bg-gray-200 hover:scale-105 duration-300 flex justify-center items-center text-5xl">
            card 2
          </div>
          <div className="bg-white p-6 min-h-40 rounded-lg shadow hover:shadow-lg transition-shadow hover:border hover:bg-gray-200 hover:scale-105 duration-300 flex justify-center items-center text-5xl">
            card 3
          </div>
          <div className="bg-white p-6 min-h-40 rounded-lg shadow hover:shadow-lg transition-shadow hover:border hover:bg-gray-200 hover:scale-105 duration-300 flex justify-center items-center text-5xl">
            card 4
          </div>
          <div className="bg-white p-6 min-h-40 rounded-lg shadow hover:shadow-lg transition-shadow hover:border hover:bg-gray-200 hover:scale-105 duration-300 flex justify-center items-center text-5xl">
            card 5
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

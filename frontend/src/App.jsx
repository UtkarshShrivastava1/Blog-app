const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">
        Frontend Vite+ React TailwindCSS Test
      </h1>

      <p className="text-lg text-gray-700 mb-6">
        If you see colors, padding, and styles, TailwindCSS is working!
      </p>

      <div className="grid grid-cols-2 gap-4">
        <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
          Button 1
        </button>
        <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
          Button 2
        </button>
        <div className="p-4 bg-white shadow-lg rounded-lg border border-gray-200">
          <h2 className="text-xl font-semibold text-purple-600">Card Title</h2>
          <p className="text-gray-600">
            This is a simple card to test Tailwind classes.
          </p>
        </div>
        <div className="p-4 bg-white shadow-lg rounded-lg border border-gray-200">
          <h2 className="text-xl font-semibold text-yellow-600">
            Another Card
          </h2>
          <p className="text-gray-600">
            Tailwind grid, spacing, and colors check.
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;

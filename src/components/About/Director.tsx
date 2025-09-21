import { User } from "lucide-react"; // Lucide icon

function Director() {
  const directors = ["CHAKRAVARTHY M", "HARIHARAN M", "ASWIN MC"];

  return (
    <div className="bg-amber-50 py-12 mt-10 rounded-md">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
        Our Directors
      </h2>
      <div className="max-w-4xl mx-auto grid gap-6 sm:grid-cols-2 md:grid-cols-3 px-6">
        {directors.map((name, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow hover:shadow-md transition p-6 flex flex-col items-center text-center"
          >
            <div className="w-12 h-12 flex items-center justify-center bg-amber-100 rounded-full mb-4">
              <User className="text-amber-600" size={28} />
            </div>
            <h3 className="text-lg font-semibold text-gray-700">{name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Director;

import { useNavigate, useLocation } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleAnalyticsClick = () => {
    navigate("/analytics");
  };

  const handleLeadsClick = () => {
    navigate("/");
  };

  return (
    <aside className="w-64 h-screen bg-white border-r p-6 flex flex-col justify-between">
      <div>
        <div className="text-blue-600 font-bold text-2xl mb-8">Recepto</div>
        <div className="mb-8">
          <div className="text-gray-400 text-xs mb-2">Main</div>

          <button
            className={`w-full text-sm font-medium leading-tight px-3 py-2.5 rounded-lg flex items-center gap-3 ${
              location.pathname === "/" 
                ? "text-blue-600 bg-blue-50"
                : "text-gray-700 hover:bg-gray-100"
            }`}
            onClick={handleLeadsClick}
          >
            Leads
          </button>

          <button
            className={`w-full text-sm font-medium leading-tight px-3 py-2.5 rounded-lg flex items-center gap-3 mt-2 ${
              location.pathname === "/analytics"
                ? "text-blue-600 bg-blue-50"
                : "text-gray-700 hover:bg-gray-100"
            }`}
            onClick={handleAnalyticsClick}
          >
            Analytics
          </button>
        </div>
        <div>
          <div className="text-gray-400 text-xs mb-2">More</div>
          <button className="w-full px-3 py-2.5 rounded-lg hover:bg-red-100 flex items-center gap-3 text-sm">
            Logout
          </button>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;

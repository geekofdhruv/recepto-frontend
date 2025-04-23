function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-white border-r p-6 flex flex-col justify-between">
      <div>
        <div className="text-blue-600 font-bold text-2xl mb-8">Recepto</div>

        {/* Main Section */}
        <div className="mb-8">
          <div className="text-gray-400 text-xs mb-2">Main</div>
          {/* Leads - selected by default */}
          <div
            className="px-3 py-2.5 bg-blue-50 rounded-lg flex items-center gap-3"
          >
            <div className="text-blue-600 text-sm font-medium leading-tight">
              Leads
            </div>
          </div>

          {/* Analytics */}
          <button className="w-full text-left mt-2 px-3 py-2.5 rounded-lg hover:bg-gray-100 flex items-center gap-3 text-sm text-gray-700">
            Analytics
          </button>
        </div>
        <div>
          <div className="text-gray-400 text-xs mb-2">More</div>
          <button className=" w-full px-3 py-2.5 rounded-lg hover:bg-red-100 flex items-center gap-3 text-sm">
            Logout
          </button>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;

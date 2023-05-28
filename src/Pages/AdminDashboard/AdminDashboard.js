import React from "react";
import DashboardLeft from "./DashboardLeft/DashboardLeft";

const AdminDashboard = () => {
  return (
    <div>
      <div className="grid grid-cols-12">
        <div className="col-span-2 bg-[#E8F0FD] min-h-screen text-center">
          <DashboardLeft></DashboardLeft>
        </div>
        <div className="col-span-10 min-h-screen"></div>
      </div>
    </div>
  );
};

export default AdminDashboard;

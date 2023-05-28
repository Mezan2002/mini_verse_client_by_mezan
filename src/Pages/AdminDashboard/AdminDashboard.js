import React, { useEffect } from "react";
import DashboardLeft from "./DashboardLeft/DashboardLeft";
import { loadLoggedInUserData } from "../../Redux/Thunk/LoadLoggedInUserData/LoadLoggedInUserData";
import { useDispatch } from "react-redux";

const AdminDashboard = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadLoggedInUserData());
  }, [dispatch]);
  return (
    <div>
      <div className="grid grid-cols-12">
        <div className="col-span-2 bg-[#E8F0FD] min-h-screen text-center relative">
          <DashboardLeft></DashboardLeft>
        </div>
        <div className="col-span-10 min-h-screen"></div>
      </div>
    </div>
  );
};

export default AdminDashboard;

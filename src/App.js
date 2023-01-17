import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import PrimaryRoutes from "./Routes/PrimaryRoutes/PrimaryRoutes";

function App() {
  return (
    <div className="App">
      <RouterProvider router={PrimaryRoutes}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;

import { RouterProvider } from "react-router-dom";
import "./App.css";
import PrimaryRoutes from "./Routes/PrimaryRoutes/PrimaryRoutes";

function App() {
  return (
    <div className="App">
      <RouterProvider router={PrimaryRoutes}></RouterProvider>
    </div>
  );
}

export default App;

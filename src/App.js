import { RouterProvider } from "react-router-dom";
import "./App.css";
import PrimaryRoutes from "./Routes/PrimaryRoutes/PrimaryRoutes";
import { Provider } from "react-redux";
import store from "./Redux/Store/Store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <RouterProvider router={PrimaryRoutes}></RouterProvider>
      </Provider>
    </div>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import routes from "@/routes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((item) => (
          <Route
            key={item.path}
            path={item.path}
            element={item.component}
            {...item}
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

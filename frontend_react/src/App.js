import { BrowserRouter, Route } from "react-router-dom";
import routes from "@/routes";
import Header from "@/components/Header";
import useAuth from "@/hooks/useAuth";
import { useEffect } from "react";
import Routes from "@/routes";

function App() {
  const { getMeMutation } = useAuth();

  useEffect(() => {
    getMeMutation.mutate();
  }, []);

  return (
    <div>
      <Header />
      <div>
        <Routes />
      </div>
    </div>
  );
}

export default App;

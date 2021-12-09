import { BrowserRouter, Route } from "react-router-dom";
import routes from "@/routes";
import Header from "@/components/Header";
import useAuth from "@/hooks/useAuth";
import { useEffect, useState } from "react";
import Routes from "@/routes";

function App() {
  const [ready, setReady] = useState(false);
  const { getMeMutation } = useAuth(setReady);

  useEffect(() => {
    getMeMutation.mutate();
  }, []);

  return (
    <div>
      <Header />
      <div>{ready && <Routes />}</div>
    </div>
  );
}

export default App;

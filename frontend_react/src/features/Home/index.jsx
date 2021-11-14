import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Link to={"/viewer"}>Viewer</Link>
    </div>
  );
}

export default Home;

import { Link } from "react-router-dom";
import useBaseModel from "@/hooks/useBaseModel";
import ModelCard from "@/components/ModelCard";

function Home() {
  const { data } = useBaseModel();

  return (
    <div>
      <Link to={"/viewer"}>Viewer</Link>

      <div className="container px-4">
        <div className={"grid grid-cols-3 gap-4"}>
          {data?.map((item) => (
            <ModelCard key={item.id} name={item.name} path={"abc"} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;

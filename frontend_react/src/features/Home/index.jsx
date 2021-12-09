import Layout from "@/components/Layout";
import ModelCard from "@/components/ModelCard";

function Home() {
  return (
    <Layout>
      <div className={"container mx-auto p-4 mt-10"}>
        <div className={"flex justify-center"}>
          <p className={"font-bold text-4xl"}>Model của tôi</p>
        </div>
      </div>
    </Layout>
  );
}

export default Home;

import Layout from "@/components/Layout";
import { useQuery } from "react-query";
import { fetchMyModel } from "@/services/models";
import RequiredAuth from "@/components/RequiredAuth";
import { Empty } from "antd";
import { Link } from "react-router-dom";

function MyModel() {
  const { data: models } = useQuery("models", async () => {
    const response = await fetchMyModel();
    return response.data.data;
  });
  return (
    <Layout isShowSearch={false}>
      <div className={"container mx-auto p-5 mt-10"}>
        <div className="flex justify-center">
          <div>
            <div>
              <p className={"font-bold text-4xl "}>Model của tôi</p>
            </div>
            <div>
              {models?.length === 0 && (
                <Empty description={"Bạn chưa có model"}>
                  <Link to={"#"}>Upload Model của bạn ngay tại đây</Link>
                </Empty>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default RequiredAuth(MyModel);
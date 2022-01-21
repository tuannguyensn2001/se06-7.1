import Layout from "@/components/Layout";
import { useMutation, useQuery } from "react-query";
import {
  fetchDeleteModel,
  fetchMyModel,
  fetchUpdateModel,
} from "@/services/models";
import RequiredAuth from "@/components/RequiredAuth";
import { Empty, Skeleton } from "antd";
import { Link } from "react-router-dom";
import ModelCard from "@/components/ModelCard";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Modal from "@/features/MyModel/components/Modal";
import useNotification from "@/hooks/useNotification";

function MyModel() {
  const [models, setModels] = useState([]);

  const { data, isLoading } = useQuery(
    "models",
    async () => {
      const response = await fetchMyModel();
      return response.data.data;
    },
    {
      onSuccess(data) {
        setModels(data);
      },
    }
  );

  const [visible, setVisible] = useState(false);

  const { control, handleSubmit, setValue } = useForm();

  const fire = useNotification();

  const update = useMutation(
    "update",
    async (data) => {
      const response = await fetchUpdateModel(
        data.id,
        {
          name: data.name,
        },
        {
          _name: true,
        }
      );
      return response.data;
    },
    {
      onSuccess(data) {
        fire.success(data.message);
        const model = models?.find(
          (item) => Number(item.id) === Number(data.data.id)
        );
        model.name = data.data.name;
      },
      onError(error) {
        fire.error(error?.response?.data?.message);
      },
    }
  );

  const deleteModel = useMutation(
    "delete",
    async (id) => {
      const response = await fetchDeleteModel(id);
      return response.data;
    },
    {
      onSuccess(data) {
        fire.success(data.message);
        const id = data.data;

        setModels((prevState) =>
          prevState.filter((item) => Number(item.id) !== Number(id))
        );
      },
      onError(error) {
        fire.error(error?.response.data?.message);
      },
    }
  );

  const handleClickItem = (id, name) => {
    setVisible(true);
    setValue("name", name);
    setValue("id", id);
  };

  const submitModal = (data) => {
    update.mutate(data);
    setVisible(false);
  };

  const closeModal = () => setVisible(false);

  const handleDeleteItem = (id) => {
    deleteModel.mutate(id);
  };

  return (
    <Layout isShowSearch={false}>
      <Modal
        onSubmit={handleSubmit(submitModal)}
        visible={visible}
        closeModal={closeModal}
        control={control}
      />
      <div className={"container mx-auto p-5 mt-10"}>
        <div className="flex justify-center">
          <div className={"w-full"}>
            <div>
              <p className={"font-bold text-4xl "}>Model của tôi</p>
            </div>
            <div className={"flex justify-end"}>
              <Link to={"/my-models/create"}>Tạo mới </Link>
            </div>
            <div>
              {isLoading && (
                <div className={"grid grid-cols-3 gap-6"}>
                  <div>
                    <Skeleton key={1} />
                  </div>
                  <div>
                    <Skeleton key={2} />
                  </div>
                  <div>
                    <Skeleton key={3} />
                  </div>
                </div>
              )}

              {!isLoading && (
                <>
                  {models?.length === 0 && data?.length === 0 && (
                    <Empty description={"Bạn chưa có model"}>
                      <Link to={"/my-models/create"}>
                        Upload Model của bạn ngay tại đây
                      </Link>
                    </Empty>
                  )}
                  {models?.length !== 0 && (
                    <div>
                      <div className={"grid grid-cols-3 gap-6"}>
                        {models?.map((item) => (
                          <div key={item.id}>
                            <ModelCard
                              img={item.preview}
                              onDelete={handleDeleteItem}
                              onClick={handleClickItem}
                              id={item.id}
                              name={item.name}
                              key={item.id}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default RequiredAuth(MyModel);

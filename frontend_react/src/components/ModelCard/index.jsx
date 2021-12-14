import avatar from "@/assets/img/sieunhando.jpg";
import styles from "./style.module.scss";
import { Link } from "react-router-dom";

function ModelCard({ name, id }) {
  return (
    <div className={`${styles["content-list"]} ${"w-64 h-60 mb-20"}`}>
      <div className={styles["content-item"]}>
        <img src={avatar} />
        <div className={styles["content-content"]}>
          <h1
            className={`${styles["content-title"]} ${"w-full pl-24 pb-2 pt-4"}`}
          >
            {name}
          </h1>
          <div className="w-full text-center pb-10 pt-5 text-2xl ">
            <Link to={`/my-models/${id}`}>Xem chi tiết</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModelCard;

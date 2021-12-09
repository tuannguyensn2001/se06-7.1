import avatar from "@/assets/img/sieunhando.jpg";
import styles from "./style.module.scss";

function ModelCard() {
  return (
    <div className={`${styles["content-list"]} ${"w-64 h-60 mb-20"}`}>
      <div className={styles["content-item"]}>
        <img src={avatar} />
        <div className={styles["content-content"]}>
          <h1
            className={`${styles["content-title"]} ${"w-full pl-24 pb-2 pt-4"}`}
          >
            Sieu nhan
          </h1>
          <div className="w-full text-center pb-10 pt-5 text-2xl ">
            <a href="#">Go to Editor</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModelCard;

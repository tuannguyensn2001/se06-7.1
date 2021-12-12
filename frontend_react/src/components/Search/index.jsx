import styles from "./style.module.scss";
import styled from "styled-components";
import background from "@/assets/img/slider.png";

const Slider = styled.div`
  width: 100%;
  min-height: 300px;
  padding-top: 100px;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${(props) => props.src});
  position: relative;
`;

function Search() {
  return (
    <div>
      <Slider src={background}>
        <p className={styles["slider-content"]}>How can we help you ? </p>
        <div className={styles["search-container"]}>
          <input type="text" placeholder="Search..." />
          <div className={styles["search"]}></div>
        </div>
      </Slider>
    </div>
  );
}

export default Search;

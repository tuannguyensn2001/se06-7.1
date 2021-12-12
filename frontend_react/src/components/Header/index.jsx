import { useSelector } from "react-redux";
import useAuth from "@/hooks/useAuth";
import styles from "./style.module.scss";
import { Link } from "react-router-dom";
import avatar from "../../assets/img/man.png"
import like from "../../assets/img/apple.png"
import { Menu, Dropdown } from 'antd';
import { useState } from "react";

function Header() {

  const { user, isAuth } = useSelector((state) => state.auth);

  const { logoutMutation } = useAuth();

  const [checked, isChecked] = useState(false)

  const handleChecked = () => {
    isChecked(!checked);
  }

  return (
    <div className={styles.header}>
      <div className="flex space-x">

        <h1 className={` ${styles["nav-item"]} ${"text-white m-3 font-bold text-lg "}`}>Se06-7.1</h1>
      </div>

      {/* Chỗ này là khi mà ở màn chưa đăng nhập dùng để căn chỉnh home và go to model ra giữa */}

      {
        isAuth && 
        <div className="flex space-x-4 m-3 space-between">
          <Link to={"/"} className={` ${styles["nav-item"]} ${"text-white ml-20"} `}>Home</Link>
          <button className={`${styles["nav-item"]} ${"text-white mr-2"} `}>Go to my model</button>
        </div>
      }

      {
        !isAuth &&
          <div className="flex space-x-4 m-3 space-between ml-32 mr-2">
            <Link to={"/"} className={` ${styles["nav-item"]} ${"text-white"} `}>Home</Link>
            <Link to={""} className={`${styles["nav-item"]} ${"text-white "} `}>Go to my model</Link>
          </div>
      }


      { !isAuth &&
        <div className="flex space-x-4 m-3 space-between ">
          <Link className={`${styles["nav-item"]} ${"text-white"}`} to={"/login"}>Đăng nhập</Link>

          <Link className={`${styles["nav-item"]} ${"text-blue-700 border border-solid bg-white rounded hover:bg-gray-100 hover:text-blue-500 transition-colors duration-300 "}`} to={"/register"}>Đăng kí</Link>

        </div>
      }

      {
        isAuth && 

        <div>
          
          <div className="h-full flex pr-11 ">
            
            <div className="flex flex-col justify-center space-between mt-20">

              <div className="flex space-x-4  p-1 justify-center ">
                {/* <div>{user.name}</div> */}
                <span className="flex flex-col justify-center text-white " >Vinh</span>
                <button onClick={handleChecked} className="flex flex-col justify-center h-12 cursor-pointer"> <img src={avatar} className="h-3/5"/></button>
              </div>

              <Menu className={`${"rounded z-10 h-60"} ${checked ? "visible" : "invisible"}`} >
                  <Menu.Item>
                    <button className="w-28 h-full ">Setting</button>
                  </Menu.Item>
              
                  <Menu.Item>
                    <button className="w-28 h-full " onClick={logoutMutation.mutate}>Đăng xuất</button>
                  </Menu.Item>
              </Menu>
            </div>

          </div>
        </div>

      }
     
    </div>
  );
}

export default Header;
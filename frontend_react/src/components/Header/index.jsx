import { useSelector } from "react-redux";
import useAuth from "@/hooks/useAuth";
import styles from "./style.module.scss";
import { Link } from "react-router-dom";
import avatar from "../../assets/img/man.png"
import like from "../../assets/img/like.png"
import { Menu, Dropdown } from 'antd';
function Header() {
  const { user, isAuth } = useSelector((state) => state.auth);

  const { logoutMutation } = useAuth();

  return (
    <div className={styles.header}>
      <div className="flex space-x">
        <div className="h-full"><img className="h-5/6 pt-2 pl-2" src={like}/></div>
        <h1 className={` ${styles["title"]} ${"text-white m-3 font-bold text-lg font-serif"}`}>Se06-7.1</h1>
      </div>

      {/* Chỗ này là khi mà ở màn chưa đăng nhập dùng để căn chỉnh home và go to model ra giữa */}

      {
        isAuth && 
        <div className="flex space-x-4 m-3 space-between">
          <Link to={"/"} className={` ${styles["nav-item"]} ${"text-blue-500 rounded bg-gray-100 ml-20"} `}>Home</Link>
          <button className={`${styles["nav-item"]} ${"text-white hover:text-blue-500 rounded hover:bg-gray-100 transition-colors duration-300"} `}>Go to my model</button>
        </div>
      }

      {
        !isAuth &&
          <div className="flex space-x-4 m-3 space-between ml-24 mr-2">
            <Link to={"/"} className={` ${styles["nav-item"]} ${"text-blue-500 rounded bg-gray-100 "} `}>Home</Link>
            <button className={`${styles["nav-item"]} ${"text-white hover:text-blue-500 rounded hover:bg-gray-100 transition-colors duration-300"} `}>Go to my model</button>
          </div>
      }


      { !isAuth &&
        <div className="flex space-x-4 m-3 space-between ">
          <Link className={`${styles["nav-item"]} ${"text-white hover:text-blue-500 rounded hover:bg-gray-100 transition-colors duration-300"}`} to={"/login"}>Đăng nhập</Link>

          <Link className={`${styles["nav-item"]} ${"text-white border border-solid border-gray-100 rounded hover:bg-gray-100 hover:text-blue-500 transition-colors duration-300 "}`} to={"/register"}>Register</Link>

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
                <div className="flex flex-col justify-center h-12"> <img src={avatar} className="h-3/5"/></div>
              </div>

              <Menu className=" rounded z-10 h-60 ">
                  <Menu.Item>
                    <button className="w-32 h-full hover:bg-gray-300 rounded">Setting</button>
                  </Menu.Item>
              
                  <Menu.Item>
                    <button className="w-32 h-full hover:bg-gray-300 rounded " onClick={logoutMutation.mutate}>Đăng xuất</button>
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

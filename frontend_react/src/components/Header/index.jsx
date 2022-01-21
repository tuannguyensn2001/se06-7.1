// import { useSelector } from "react-redux";
// import useAuth from "@/hooks/useAuth";
// import styles from "./style.module.scss";
// import { Link } from "react-router-dom";
// import avatar from "../../assets/img/man.png";
// import like from "../../assets/img/apple.png";
// import { Menu, Dropdown } from "antd";
// import { useState } from "react";
//
// function Header() {
//   const { user, isAuth } = useSelector((state) => state.auth);
//
//   const { logoutMutation } = useAuth();
//
//   const [checked, isChecked] = useState(false);
//
//   const handleChecked = () => {
//     isChecked(!checked);
//   };
//
//   return (
//     <div className={styles.header}>
//       <div className="flex space-x">
//         <h1
//           className={` ${
//             styles["nav-item"]
//           } ${"text-white m-3 font-bold text-lg "}`}
//         >
//           Se06-7.1
//         </h1>
//       </div>
//
//       {/* Chỗ này là khi mà ở màn chưa đăng nhập dùng để căn chỉnh home và go to model ra giữa */}
//
//       {isAuth && (
//         <div className="flex space-x-4 m-3 space-between">
//           <Link
//             to={"/"}
//             className={` ${styles["nav-item"]} ${"text-white ml-20"} `}
//           >
//             Home
//           </Link>
//           <button className={`${styles["nav-item"]} ${"text-white mr-2"} `}>
//             Go to my model
//           </button>
//         </div>
//       )}
//
//       {!isAuth && (
//         <div className="flex space-x-4 m-3 space-between ml-32 mr-2">
//           <Link to={"/"} className={` ${styles["nav-item"]} ${"text-white"} `}>
//             Home
//           </Link>
//           <Link to={""} className={`${styles["nav-item"]} ${"text-white "} `}>
//             Go to my model
//           </Link>
//         </div>
//       )}
//
//       {!isAuth && (
//         <div className="flex space-x-4 m-3 space-between ">
//           <Link
//             className={`${styles["nav-item"]} ${"text-white"}`}
//             to={"/login"}
//           >
//             Đăng nhập
//           </Link>
//
//           <Link
//             className={`${
//               styles["nav-item"]
//             } ${"text-blue-700 border border-solid bg-white rounded hover:bg-gray-100 hover:text-blue-500 transition-colors duration-300 "}`}
//             to={"/register"}
//           >
//             Đăng kí
//           </Link>
//         </div>
//       )}
//
//       {isAuth && (
//         <div>
//           <div className="h-full flex pr-11 ">
//             <div className="flex flex-col justify-center space-between mt-20">
//               <div className="flex space-x-4  p-1 justify-center ">
//                 {/* <div>{user.name}</div> */}
//                 <span className="flex flex-col justify-center text-white ">
//                   Vinh
//                 </span>
//                 <button
//                   onClick={handleChecked}
//                   className="flex flex-col justify-center h-12 cursor-pointer"
//                 >
//                   <img src={avatar} className="h-3/5" />
//                 </button>
//               </div>
//
//               <Menu
//                 className={`${"rounded z-10 h-60"} ${
//                   checked ? "visible" : "invisible"
//                 }`}
//               >
//                 <Menu.Item>
//                   <button className="w-28 h-full ">Setting</button>
//                 </Menu.Item>
//
//                 <Menu.Item>
//                   <button
//                     className="w-28 h-full "
//                     onClick={logoutMutation.mutate}
//                   >
//                     Đăng xuất
//                   </button>
//                 </Menu.Item>
//               </Menu>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
//
// export default Header;
//
// // function Header() {
// //   return <div>abc</div>;
// // }
// //
// // export default Header;

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import styles from "./style.module.scss";
import { useState } from "react";
import useToggle from "@/hooks/useToggle";
import useAuth from "@/hooks/useAuth";

function Header() {
  const { user, isAuth } = useSelector((state) => state.auth);

  const [toggle, setToggle] = useToggle();

  const { logoutMutation } = useAuth();

  const handleLogout = () => {
    setToggle();
    logoutMutation.mutate();
  };

  return (
    <div>
      <nav className={styles.header}>
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex-shrink-0 flex items-center">
                {/*<img*/}
                {/*  className="block lg:hidden h-8 w-auto"*/}
                {/*  src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"*/}
                {/*  alt="Workflow"*/}
                {/*/>*/}
                {/*<img*/}
                {/*  className="hidden lg:block h-8 w-auto"*/}
                {/*  src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"*/}
                {/*  alt="Workflow"*/}
                {/*/>*/}
              </div>
              <div className="hidden sm:block sm:ml-6">
                <div className="flex space-x-4">
                  <Link
                    to="/"
                    className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm text-lg"
                    aria-current="page"
                  >
                    Trang chủ
                  </Link>
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              {isAuth && (
                <div className="ml-3 relative">
                  <div>
                    <button
                      onClick={setToggle}
                      type="button"
                      className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                      id="user-menu-button"
                      aria-expanded="false"
                      aria-haspopup="true"
                    >
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </button>
                  </div>

                  {toggle && (
                    <div
                      className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="user-menu-button"
                      tabIndex="-1"
                    >
                      <button
                        className="block w-full py-2 text-sm text-gray-700"
                        role="menuitem"
                        tabIndex="-1"
                        id="user-menu-item-0"
                      >
                        Thông tin của bạn
                      </button>
                      <button
                        className="block  w-full py-2 text-sm text-gray-700"
                        role="menuitem"
                        tabIndex="-1"
                        id="user-menu-item-1"
                      >
                        Cài đặt
                      </button>
                      <button
                        onClick={handleLogout}
                        className="block  w-full py-2 text-sm text-gray-700"
                        role="menuitem"
                        tabIndex="-1"
                        id="user-menu-item-2"
                      >
                        Đăng xuất
                      </button>
                    </div>
                  )}
                </div>
              )}

              {!isAuth && (
                <div>
                  <div className={"flex"}>
                    <Link
                      to={"/login"}
                      className={" text-white text-lg hover:text-white"}
                    >
                      Đăng nhập
                    </Link>
                    <Link
                      to={"/register"}
                      className={" ml-10 text-white text-lg hover:text-white"}
                    >
                      Đăng ký
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;

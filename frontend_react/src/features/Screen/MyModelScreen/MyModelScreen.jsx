import styles from "./MyModelScreen.module.scss"
import homestyle from "../MainScreen/MainScreen.module.scss"
import avatar from '../../../assets/img/sieunhando.jpg'
export default function MyModelScreen() {
    return (
        <div>
            <div id={homestyle["main"]}>
                <div id={homestyle["nav-container"]}>
                    <ul className={homestyle["nav-list"]}>
                        <li><a className = {homestyle["nav-item"]} href = "#">SE06-7.1</a></li>
                    </ul>
                    <ul className = {homestyle["nav-list"]}>
                        <li><a className = {homestyle["nav-item"]} href="">Go to Home</a></li>
                        <li><button className={homestyle["nav-item"]}>Log out</button></li>
                    </ul>
                </div>

                <div id={homestyle["slider"]}>
                    <p className={homestyle["slider-content"]}>Your Model</p>
                    <div className={homestyle["search-container"]}>
                        <input type="text" placeholder="Search..."/>
                        <div className={homestyle["search"]}></div>
                    </div>
                </div>
                
                <div id={homestyle["content-container"]} >
                    <h1 className="text-5xl w-full bg-gray-300">Your Model</h1>
                    <div className="grid grid-cols-3 gap-20 p-20">
                        <div className="w-64 h-60 mb-20 bg-gray-300 rounded-3xl">
                            <div className="text-5xl text-center pt-24"> <a href="#">+</a> </div>
                            <p className="text-center pt-24 mt-3 text-2xl ">Add you Model</p>
                        </div>
                        <div className={`${homestyle["content-list"]} ${"w-64 h-60 mb-20 "}`}>
                            <div className={homestyle["content-item"]}>
                                <img src={avatar}/>
                                <div className={homestyle["content-content"]}>
                                    <h1 className={`${homestyle["content-title"]} ${"w-full pl-24 pb-2 pt-4"}`}>Sieu nhan</h1>
                                    <div className="w-full text-center pb-10 pt-5 text-2xl "><a href="#">Go to Editor</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <footer className={homestyle["footer"]}>
                    <div className={homestyle["waves"]} >
                    <div className={homestyle["wave" ]} id={homestyle["wave1"]}></div>
                    <div className={homestyle["wave" ]} id={homestyle["wave2"]}></div>
                    <div className={homestyle["wave" ]} id={homestyle["wave3"]}></div>
                    <div className={homestyle["wave" ]} id={homestyle["wave4"]}></div>
                    </div>
                    <ul className={homestyle["social-icon"]}>
                    <li className={homestyle["social-icon__item"]}><a className={homestyle["social-icon__link"]} href="#">
                        <ion-icon name="logo-facebook"></ion-icon>
                        </a></li>
                    <li className={homestyle["social-icon__item"]}><a className={homestyle["social-icon__link"]} href="#">
                        <ion-icon name="logo-twitter"></ion-icon>
                        </a></li>
                    <li className={homestyle["social-icon__item"]}><a className={homestyle["social-icon__link"]} href="#">
                        <ion-icon name="logo-linkedin"></ion-icon>
                        </a></li>
                    <li className={homestyle["social-icon__item"]}><a className={homestyle["social-icon__link"]} href="#">
                        <ion-icon name="logo-instagram"></ion-icon>
                        </a></li>
                    </ul>
                    <ul className={homestyle["menu"]}>
                    <li className={homestyle["menu__item"]}><a className={homestyle["menu__link"]} href="#">Home</a></li>
                    <li className={homestyle["menu__item"]}><a className={homestyle["menu__link"]} href="#">About</a></li>
                    <li className={homestyle["menu__item"]}><a className={homestyle["menu__link"]} href="#">Services</a></li>
                    <li className={homestyle["menu__item"]}><a className={homestyle["menu__link"]} href="#">Team</a></li>
                    <li className={homestyle["menu__item"]}><a className={homestyle["menu__link"]} href="#">Contact</a></li>

                    </ul>
                    <p>&copy;2021 SE06-7.1 | All Rights Reserved</p>
                </footer>

            </div>
        </div>
    )
}
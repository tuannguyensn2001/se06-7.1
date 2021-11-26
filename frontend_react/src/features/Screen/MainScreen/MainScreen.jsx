import styles from "./MainScreen.module.scss"
import avatar from '../../../assets/img/sieunhando.jpg'
export default function MainScreen() {
    return (
        <div>
            <div id={styles["main"]}>
                <div id={styles["nav-container"]}>
                    <ul className={styles["nav-list"]}>
                        <li><a className={`${styles["nav-item"]} ${styles["slider"]}`}>Slidebar</a></li>
                        <li><a className={styles["nav-item"]} href = "">SE06-7.1</a></li>
                    </ul>
                    <ul className={styles["nav-list"]}>
                        <li><a className={styles["nav-item"]} href="">Go to my Model</a></li>
                        <li><a className={`${styles["nav-item"]} ${styles["login"]}`} href=""> Login</a></li>
                        <li><a className={`${styles["nav-item"]} ${styles["signUp"]}`} href="">Sign up</a></li>
                        <li><img src = ""/></li>
                    </ul>
                </div>

                <div id={styles["slider"]}>
                    <p className={styles["slider-content"]}>How can we help you ? </p>
                    <div className={styles["search-container"]}>
                        <input type="text" placeholder="Search..."/>
                        <div className={styles["search"]}></div>
                    </div>
                </div>
                
                <div id={styles["content-container"]} >
                    <div className="grid grid-cols-3 gap-20 p-20">
                        <div className={`${styles["content-list"]} ${"w-64 h-60 mb-20"}`}>
                            <div className={styles["content-item"]}>
                                <img src={avatar}/>
                                <div className={styles["content-content"]}>
                                    <h1 className={`${styles["content-title"]} ${"w-full pl-24 pb-2 pt-4"}`}>Sieu nhan</h1>
                                    <div className="w-full text-center pb-10 pt-5 text-2xl "><a href="#">Go to Editor</a></div>
                                </div>
                            </div>
                        </div>

                        <div className={`${styles["content-list"]} ${"w-64 h-60 mb-20"}`}>
                            <div className={styles["content-item"]}>
                                <img src={avatar}/>
                                <div className={styles["content-content"]}>
                                    <h1 className={`${styles["content-title"]} ${"w-full pl-24 pb-2 pt-4"}`}>Sieu nhan</h1>
                                    <div className="w-full text-center pb-10 pt-5 text-2xl "><a href="#">Go to Editor</a></div>
                                </div>
                            </div>
                        </div>

                        <div className={`${styles["content-list"]} ${"w-64 h-60 mb-20"}`}>
                            <div className={styles["content-item"]}>
                                <img src={avatar}/>
                                <div className={styles["content-content"]}>
                                    <h1 className={`${styles["content-title"]} ${"w-full pl-24 pb-2 pt-4"}`}>Sieu nhan</h1>
                                    <div className="w-full text-center pb-10 pt-5 text-2xl "><a href="#">Go to Editor</a></div>
                                </div>
                            </div>
                        </div>

                        <div className={`${styles["content-list"]} ${"w-64 h-60 mb-20"}`}>
                            <div className={styles["content-item"]}>
                                <img src={avatar}/>
                                <div className={styles["content-content"]}>
                                    <h1 className={`${styles["content-title"]} ${"w-full pl-24 pb-2 pt-4"}`}>Sieu nhan</h1>
                                    <div className="w-full text-center pb-10 pt-5 text-2xl "><a href="#">Go to Editor</a></div>
                                </div>
                            </div>
                        </div>

                        <div className={`${styles["content-list"]} ${"w-64 h-60 mb-20"}`}>
                            <div className={styles["content-item"]}>
                                <img src={avatar}/>
                                <div className={styles["content-content"]}>
                                    <h1 className={`${styles["content-title"]} ${"w-full pl-24 pb-2 pt-4"}`}>Sieu nhan</h1>
                                    <div className="w-full text-center pb-10 pt-5 text-2xl "><a href="#">Go to Editor</a></div>
                                </div>
                            </div>
                        </div>

                        <div className={`${styles["content-list"]} ${"w-64 h-60 mb-20"}`}>
                            <div className={styles["content-item"]}>
                                <img src={avatar}/>
                                <div className={styles["content-content"]}>
                                    <h1 className={`${styles["content-title"]} ${"w-full pl-24 pb-2 pt-4"}`}>Sieu nhan</h1>
                                    <div className="w-full text-center pb-10 pt-5 text-2xl "><a href="#">Go to Editor</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <footer className={styles["footer"]}>
                    <div className={styles["waves"]} >
                    <div className={styles["wave" ]} id={styles["wave1"]}></div>
                    <div className={styles["wave" ]} id={styles["wave2"]}></div>
                    <div className={styles["wave" ]} id={styles["wave3"]}></div>
                    <div className={styles["wave" ]} id={styles["wave4"]}></div>
                    </div>
                    <ul className={styles["social-icon"]}>
                    <li className={styles["social-icon__item"]}><a className={styles["social-icon__link"]} href="#">
                        <ion-icon name="logo-facebook"></ion-icon>
                        </a></li>
                    <li className={styles["social-icon__item"]}><a className={styles["social-icon__link"]} href="#">
                        <ion-icon name="logo-twitter"></ion-icon>
                        </a></li>
                    <li className={styles["social-icon__item"]}><a className={styles["social-icon__link"]} href="#">
                        <ion-icon name="logo-linkedin"></ion-icon>
                        </a></li>
                    <li className={styles["social-icon__item"]}><a className={styles["social-icon__link"]} href="#">
                        <ion-icon name="logo-instagram"></ion-icon>
                        </a></li>
                    </ul>
                    <ul className={styles["menu"]}>
                    <li className={styles["menu__item"]}><a className={styles["menu__link"]} href="#">Home</a></li>
                    <li className={styles["menu__item"]}><a className={styles["menu__link"]} href="#">About</a></li>
                    <li className={styles["menu__item"]}><a className={styles["menu__link"]} href="#">Services</a></li>
                    <li className={styles["menu__item"]}><a className={styles["menu__link"]} href="#">Team</a></li>
                    <li className={styles["menu__item"]}><a className={styles["menu__link"]} href="#">Contact</a></li>

                    </ul>
                    <p>&copy;2021 SE06-7.1 | All Rights Reserved</p>
                </footer>

            </div>
        </div>
    )
}
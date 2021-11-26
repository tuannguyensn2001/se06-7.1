import "./MainScreen.css"
import avatar from '../../../assets/img/sieunhando.jpg'
export default function MainScreen() {
    return (
        <div>
            <div id="main">
                <div id="nav-container">
                    <ul className="nav-list">
                        <li><a className = "nav-item slidebar">Slidebar</a></li>
                        <li><a className = "nav-item" href = "">SE06-7.1</a></li>
                    </ul>
                    <ul className = "nav-list">
                        <li><a className = "nav-item" href="">Go to my Model</a></li>
                        <li><a className = "nav-item login" href=""> Login</a></li>
                        <li><a className = "nav-item signUp" href="">Sign up</a></li>
                        <li><img src = ""/></li>
                    </ul>
                </div>

                <div id="slider">
                    <p className="slider-content">How can we help you ? </p>
                    <div className="search-container">
                        <input type="text" placeholder="Search..."/>
                        <div className="search"></div>
                    </div>
                </div>
                <div id="content-container" >
                    <div className=" grid grid-cols-3 gap-20 p-20">
                        <div className="content-list w-64 h-60 mb-20">
                            <div className="content-item ">
                                <img src={avatar}/>
                                <div className="content-content">
                                    <h1 className="content-title w-full pl-24 pb-2 pt-4 ">Sieu nhan</h1>
                                    <div className="button w-full text-center pb-10 pt-5 text-2xl "><a href="#">Go to Editor</a></div>
                                </div>
                            </div>
                        </div>

                        <div className="content-list w-64 h-60 mb-20">
                            <div className="content-item ">
                                <img src={avatar}/>
                                <div className="content-content">
                                    <h1 className="content-title w-full pl-24 pb-2 pt-4 ">Sieu nhan</h1>
                                    <div className="button w-full text-center pb-10 pt-5 text-2xl"><a href="#">Go to Editor</a></div>
                                </div>
                            </div>
                        </div>

                        <div className="content-list w-64 h-60 mb-20">
                            <div className="content-item ">
                                <img src={avatar}/>
                                <div className="content-content">
                                    <h1 className="content-title w-full pl-24 pb-2 pt-4 ">Sieu nhan</h1>
                                    <div className="button w-full text-center pb-10 pt-5 text-2xl"><a href="#">Go to Editor</a></div>
                                </div>
                            </div>
                        </div>

                        <div className="content-list w-64 h-60 mb-20">
                            <div className="content-item ">
                                <img src={avatar}/>
                                <div className="content-content">
                                    <h1 className="content-title w-full pl-24 pb-2 pt-4 ">Sieu nhan</h1>
                                    <div className="button w-full text-center pb-10 pt-5 text-2xl"><a href="#">Go to Editor</a></div>
                                </div>
                            </div>
                        </div>

                        <div className="content-list w-64 h-60 mb-20">
                            <div className="content-item ">
                                <img src={avatar}/>
                                <div className="content-content">
                                    <h1 className="content-title w-full pl-24 pb-2 pt-4 ">Sieu nhan</h1>
                                    <div className="button w-full text-center pb-10 pt-5 text-2xl"><a href="#">Go to Editor</a></div>
                                </div>
                            </div>
                        </div>

                        <div className="content-list w-64 h-60 mb-20">
                            <div className="content-item ">
                                <img src={avatar}/>
                                <div className="content-content">
                                    <h1 className="content-title w-full pl-24 pb-2 pt-4 ">Sieu nhan</h1>
                                    <div className="button w-full text-center pb-10 pt-5 text-2xl"><a href="#">Go to Editor</a></div>
                                </div>
                            </div>
                        </div>

                    </div>



                </div>


                <footer className="footer">
                    <div className="waves">
                    <div className="wave" id="wave1"></div>
                    <div className="wave" id="wave2"></div>
                    <div className="wave" id="wave3"></div>
                    <div className="wave" id="wave4"></div>
                    </div>
                    <ul className="social-icon">
                    <li className="social-icon__item"><a className="social-icon__link" href="#">
                        <ion-icon name="logo-facebook"></ion-icon>
                        </a></li>
                    <li className="social-icon__item"><a className="social-icon__link" href="#">
                        <ion-icon name="logo-twitter"></ion-icon>
                        </a></li>
                    <li className="social-icon__item"><a className="social-icon__link" href="#">
                        <ion-icon name="logo-linkedin"></ion-icon>
                        </a></li>
                    <li className="social-icon__item"><a className="social-icon__link" href="#">
                        <ion-icon name="logo-instagram"></ion-icon>
                        </a></li>
                    </ul>
                    <ul className="menu">
                    <li className="menu__item"><a className="menu__link" href="#">Home</a></li>
                    <li className="menu__item"><a className="menu__link" href="#">About</a></li>
                    <li className="menu__item"><a className="menu__link" href="#">Services</a></li>
                    <li className="menu__item"><a className="menu__link" href="#">Team</a></li>
                    <li className="menu__item"><a className="menu__link" href="#">Contact</a></li>

                    </ul>
                    <p>&copy;2021 SE06-7.1 | All Rights Reserved</p>
                </footer>

            </div>
        </div>
    )
}
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
            </div>
        </div>
    )
}
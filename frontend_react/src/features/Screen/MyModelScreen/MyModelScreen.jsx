import styles from "./MyModelScreen.module.scss"
import homestyle from "../MainScreen/MainScreen.module.scss"
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
                        <li><img src = ""/>avatar</li>
                    </ul>
                </div>

                <div id={homestyle["slider"]}>
                    <p className={homestyle["slider-content"]}>Search your Model</p>
                    <div className={homestyle["search-container"]}>
                        <input type="text" placeholder="Search..."/>
                        <div className={homestyle["search"]}></div>
                    </div>
                </div>

            </div>
        </div>
    )
}
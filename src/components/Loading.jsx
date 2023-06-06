import styles from "./Loading.module.css";
import loading_img from "../assets/logo.gif"


const Loading = () => {
    return (
        <div className={styles.loader_container}>
            <img className={styles.loader} src={loading_img} alt="Loading" />
        </div>
    )
}

export default Loading
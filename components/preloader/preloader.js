import styles from "./preloder.module.css"
import Spinner from "../elements/spiner/spinner";
export const Preloader = () => {
  return (
    <div className={styles.container}>
      {/*<img width={50} src={"/assets/img/DE66.gif"} />*/}
      <Spinner size={"60px"}/>

    </div>
  )
}
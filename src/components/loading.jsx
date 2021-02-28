import logo from '../static/微信图片_20190823171319.jpg';
import style from '../style/loading.module.scss';
let loading = () => {
    return (
        <div className={style.center}>
            <img src={logo} alt="helo"/>
        </div>
    )
}

export default loading;
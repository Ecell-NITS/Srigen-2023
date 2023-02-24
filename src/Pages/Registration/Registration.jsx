import style from "./Registration.module.scss";

const Registration = ()=> {

    return (
    <div className={style.registrationcontainer}>
        <div className={style.leftcontainer}>
            <div className={style.iconcontainer}>
                <div className={style.iconimgcont}>
                    <img src="/images/Facebook.png" alt="facebook" />
                </div>
                <div className={style.iconimgcont}>
                    <img src="/images/Facebook.png" alt="facebook" />
                </div>
                <div className={style.iconimgcont}>
                    <img src="/images/Facebook.png" alt="facebook" />
                </div>
                <div className={style.iconimgcont}>
                    <img src="/images/Line1.png" alt="facebook" />
                </div>
            </div>
        </div>
        <div className={style.rightcontainer}>

        </div>
    </div>
    );

}

export default Registration;
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
            <div className={style.coverpicontainer}>
                <div className={style.coverimgcontainer}>
                    <img src="/images/iplimg.png" />
                </div>
                <div className={style.descriptioncontainer}>
                    <div className={style.descheading}>IPL AUCTION</div>
                    <div className={style.description}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque numquam officiis delectus nam tenetur iusto mollitia magni voluptatum nisi? Tenetur.
                    </div>
                </div>
            </div>
        </div>
    </div>
    );

}

export default Registration;
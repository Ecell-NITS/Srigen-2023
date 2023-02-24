import style from "./Registration.module.scss";
import {Form1, Form2} from "../../Components";

const Registration = ()=> {

    return (
    <div className={style.registrationcontainer}>
        <div className={style.leftcontainer}>
            <div className={style.iconcontainer}>
                <div className={style.iconimgcont}>
                    <img src="/images/linkedin.png" alt="linkedin" className={style.social} />
                </div>
                <div className={style.iconimgcont}>
                    <img src="/images/Facebook.png" alt="facebook" className={style.social} />
                </div>
                <div className={style.iconimgcont}>
                    <img src="/images/Instagram.png" alt="instagram" className={style.social} />
                </div>
                <div className={style.iconimgcont}>
                    <img src="/images/Line1.png" alt="line" />
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
            <div className={style.formcontainer}>
                <div className={style.formheading}>Registration Form</div>
                <div className={style.form}>
                    <div className={style.form2}>
                        <Form1 />
                    </div>
                    <div className={style.form2}>
                        <div>Member 2</div>
                        <Form2 />
                    </div>
                    <div className={style.form2}>
                        <div>Member 3</div>
                        <Form2 />
                    </div>
                </div>
                <div className={style.addmember}><img src="/images/addmember.png" /></div>
                <div className={style.submit}><img src="/images/registerbutton.png" /></div>
            </div>
        </div>
    </div>
    );

}

export default Registration;
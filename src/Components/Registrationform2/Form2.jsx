import style from "./Form2.module.scss";

const Form2 =() => {
    return (
        <div className={style.formelementcontainer}>
            <div className={style.inputcontainer}>
                <input type="text" className={style.input} placeholder="Name"  />
            </div>
            <div className={style.inputcontainer}>
                <input type="text" className={style.input} placeholder="Phone Number"  />
            </div>
            <div className={style.inputcontainer}>
                <input type="text" className={style.input} placeholder="Email"  />
            </div>
            <div className={style.inputcontainer}>
                <select className={style.select}>
                    <option selected value="Gender" className={style.option}>Gender</option>
                    <option className={style.option} value="Male">Male</option>
                    <option className={style.option} value="Female">Female</option>
                </select>
            </div>
            <div className={style.formendline}></div>
        </div>
    )
}

export default Form2;
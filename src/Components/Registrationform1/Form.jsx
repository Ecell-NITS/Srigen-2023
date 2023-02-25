import style from "./Form.module.scss";

const Form1 =({fields, handleMainFormChange}) => {
    return (
        <div className={style.formelementcontainer}>
            <div className={style.inputcontainer}>
                <input type="text" className={style.input} value={fields.teamName} name="teamName" onChange={(event) => handleMainFormChange(event)}  />
            </div>
            <div className={style.inputcontainer}>
                <input type="text" className={style.input} value={fields.name} name="name" onChange={(event) => handleMainFormChange(event)}  />
            </div>
            <div className={style.inputcontainer}>
                <input type="text" className={style.input} value={fields.phone} name="phone" onChange={(event) => handleMainFormChange(event)}  />
            </div>
            <div className={style.inputcontainer}>
                <input type="text" className={style.input} value={fields.email} name="email" onChange={(event) => handleMainFormChange(event)}  />
            </div>
            <div className={style.inputcontainer}>
                <select className={style.select} name="gender" onChange={(event) => handleMainFormChange(event)}>
                    <option defaultValue={fields.gender} className={style.option}>Gender</option>
                    <option className={style.option} value="Male">Male</option>
                    <option className={style.option} value="Female">Female</option>
                </select>
            </div>
            <div className={style.formendline}></div>
        </div>
    )
}

export default Form1;
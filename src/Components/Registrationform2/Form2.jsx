import style from "./Form2.module.scss";

const Form2 = ({ fields, handleFormChange, index }) => {
  return (
    <div className={style.formelementcontainer}>
      <div className={style.inputcontainer}>
        <input
          type="text"
          className={style.input}
          value={fields.name}
          name="name"
          onChange={(event) => handleFormChange(index, event)}
        />
      </div>
      <div className={style.inputcontainer}>
        <input
          type="text"
          className={style.input}
          value={fields.phone}
          name="phone"
          onChange={(event) => handleFormChange(index, event)}
        />
      </div>
      <div className={style.inputcontainer}>
        <input
          type="text"
          className={style.input}
          value={fields.email}
          name="email"
          onChange={(event) => handleFormChange(index, event)}
        />
      </div>
      <div className={style.inputcontainer}>
        <select
          className={style.select}
          name="gender"
          onChange={(event) => handleFormChange(index, event)}
        >
          <option defaultValue={fields.gender} className={style.option}>
            Gender
          </option>
          <option className={style.option} value="Male">
            Male
          </option>
          <option className={style.option} value="Female">
            Female
          </option>
        </select>
      </div>
      <div className={style.formendline}></div>
    </div>
  );
};

export default Form2;

import style from "./IndividualForm.module.scss";

const IndividualForm = ({ fields, handleFormChange, index }) => {
  return (
    <div className={style.formelementcontainer}>
      <div className={style.inputcontainer}>
        <input
          type="text"
          className={style.input}
          value={fields.name}
          name="name"
          placeholder="Name"
          onChange={(event) => handleFormChange(index, event)}
        />
      </div>
      <div className={style.inputcontainer}>
        <input
          type="text"
          className={style.input}
          value={fields.phone}
          name="phone"
          placeholder="Phone Number"
          onChange={(event) => handleFormChange(index, event)}
        />
      </div>
      <div className={style.inputcontainer}>
        <input
          type="text"
          className={style.input}
          value={fields.email}
          name="email"
          placeholder="Email"
          onChange={(event) => handleFormChange(index, event)}
        />
      </div>
      <div className={style.inputcontainer}>
        <select
          className={style.select}
          name="gender"
          defaultValue="Gender"
          onChange={(event) => handleFormChange(index, event)}
        >
          <option disabled selected className={style.option}>
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

export default IndividualForm;

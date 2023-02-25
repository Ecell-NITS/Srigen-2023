import { useState } from "react";
import style from "./Registration.module.scss";
import { Form1, Form2 } from "../../Components";

const Registration = ({ maxTeamSize = 4 }) => {
  const [inputMainField, setMainInputField] = useState({
    name: "Name",
    email: "Email",
    phone: "Phone Number",
    teamName: "Team Name",
    gender: "Gender",
  });
  const [inputField, setInputField] = useState([]);

  const handleMainFormChange = (event) => {
    const data = { ...inputMainField };
    data[event.target.name] = event.target.value;
    setMainInputField(data);
  };

  const handleFormChange = (index, event) => {
    const data = [...inputField];
    data[index][event.target.name] = event.target.value;
    setInputField(data);
  };

  const addMembers = () => {
    if (inputField.length === maxTeamSize - 1) {
      alert(`Maximum Team Size is ${maxTeamSize}`);
      return;
    }
    const newForm = { name: "Name", email: "Email", phone: "Phone-no", gender: "Gender" };
    setInputField([...inputField, newForm]);
  };

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
            <img src="/images/iplimg.png" alt="cover pic" />
          </div>
          <div className={style.descriptioncontainer}>
            <div className={style.descheading}>IPL AUCTION</div>
            <div className={style.description}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque numquam
              officiis delectus nam tenetur iusto mollitia magni voluptatum nisi? Tenetur.
            </div>
          </div>
        </div>
        <div className={style.formcontainer}>
          <div className={style.formheading}>Registration Form</div>
          <div className={style.form}>
            <div className={style.form2}>
              <Form1
                fields={inputMainField}
                handleMainFormChange={handleMainFormChange}
              />
            </div>
            {inputField.map((item, index) => {
              return (
                <div className={style.form2} key={item.email}>
                  <div>Member {index + 2}</div>
                  <Form2
                    fields={item}
                    handleFormChange={handleFormChange}
                    index={index}
                  />
                </div>
              );
            })}
          </div>
          <div className={style.addmember}>
            <button onClick={addMembers}>
              <img src="/images/plussign.png" alt="plus" />
              Add member
            </button>
          </div>
          <div className={style.submit}>
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;

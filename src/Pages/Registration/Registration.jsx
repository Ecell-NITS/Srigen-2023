import { useState } from "react";
import { FiFacebook, FiLinkedin } from "react-icons/fi";
import { AiOutlineInstagram } from "react-icons/ai";
import style from "./Registration.module.scss";
import { TeamForm, IndividualForm } from "../../Components";

const Registration = ({ maxTeamSize = 4 }) => {
  const [inputMainField, setMainInputField] = useState({
    name: "",
    email: "",
    phone: "",
    teamName: "",
    gender: "",
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
    const newForm = { name: "", email: "", phone: "", gender: "" };
    setInputField([...inputField, newForm]);
  };

  return (
    <div className={style.registrationcontainer}>
      <div className={style.leftcontainer}>
        <div className={style.iconcontainer}>
          <div className={style.iconimgcont}>
            <FiLinkedin className={style.icon} />
          </div>
          <div className={style.iconimgcont}>
            <FiFacebook className={style.icon} />
          </div>
          <div className={style.iconimgcont}>
            <AiOutlineInstagram className={style.icon} />
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
              <TeamForm
                fields={inputMainField}
                handleMainFormChange={handleMainFormChange}
              />
            </div>
            {inputField.map((item, index) => {
              return (
                <div className={style.form2} key={item.email}>
                  <div>Member {index + 2}</div>
                  <IndividualForm
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

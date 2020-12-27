import React, { useContext, useState } from "react";
import { setLocalStorage } from "../helpers/localStorage";
import { multiStepContext } from "../StepContext";
import "./Secondstep.css";
import axios from "axios";
import { Button } from "./Button";
export default function Secondstep() {
  const templateOneName = "hello";
  const { setStep, userData, setUserData } = useContext(multiStepContext);
  const [checked, setChecked] = useState(true);

  const validerstepTow = async () => {
    setLocalStorage("processValues", userData);

    const user = await localStorage.getItem("user");

    const userObj = JSON.parse(user);
    const userid = userObj._id;
    console.log(userid);
    //setUserData({ ...userData, userid: userid });
    const obj = { userData, userid };

    console.log(userData);
    try {
      const response = await axios.post("/leads", obj);
    } catch (err) {
      console.log("lead api error: ", err);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <div className="custom-control custom-radio">
            <input
              type="radio"
              name="templateOne"
              className="custom-control-input"
              id="ck2a"
              value={userData["template"]}
              onClick={(e) =>
                setUserData({ ...userData, template: e.target.name })
              }
            />

            <label htmlFor="ck2a">
              <img src="img/template.png" alt="#" />
            </label>
          </div>
        </div>
        <div className="col-md-3">
          <div className="custom-control custom-radio">
            <input
              type="radio"
              className="custom-control-input"
              id="ck2b"
              name="templateTwo"
              value={userData["template"]}
              onClick={(e) =>
                setUserData({ ...userData, template: e.target.name })
              }
            />
            <label htmlFor="ck2b">
              <img src="img/template.png" alt="#" />
            </label>
          </div>
        </div>
        <div className="col-md-3">
          <div className="custom-control custom-radio">
            <input
              type="radio"
              className="custom-control-input"
              name="templateThree"
              id="ck2c"
              value={userData["template"]}
              onClick={(e) =>
                setUserData({ ...userData, template: e.target.name })
              }
            />
            <label htmlFor="ck2c">
              <img src="img/template.png" alt="#" />
            </label>
          </div>
        </div>
        <div className="col-md-3">
          <div className="custom-control custom-radio">
            <input
              type="radio"
              className="custom-control-input"
              name="templateFour"
              id="ck2d"
              value={userData["template"]}
              onClick={(e) =>
                setUserData({ ...userData, template: e.target.name })
              }
            />
            <label htmlFor="ck2d">
              <img src="img/template.png" alt="#" />
            </label>
          </div>
        </div>
      </div>
      <div className="buttons">
        <Button
          onClick={() => setStep(2)}
          buttonStyle="btn--primary1"
          buttonColor="orange"
        >
          Back
        </Button>
        <Button
          variant="contained"
          type="submit"
          color="primary"
          onClick={validerstepTow}
        >
          Submit
        </Button>
      </div>
    </div>
  );
}

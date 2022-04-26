import { useState, useEffect } from "react";
import Axios from "axios";

function Encode() {
  const [listOfUsers, setListOfUsers] = useState([]);
  const [text, setText] = useState("");
  const [pic, setPic] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:3001/getUsers").then((response) => {
      setListOfUsers(response.data);
    });
  }, []);

  const createUser = () => {
    let variable = document.getElementById("img").files[0].name;
    //console.log(variable);
    Axios.post("http://localhost:3001/createUser", {
      text,
      //pic,
      pic: variable,
    }).then((response) => {
      setListOfUsers([
        ...listOfUsers,
        {
          text,
          pic,
        },
      ]);
    });
  };

  return (
    <div className="encode">
      <div className="container-fluid px-0">
        <div className="row align-items-center content">
          <div className="col-md-6 text-center order-1 order-md-1">
            <div className="row justify-content-center">
              <div className="col-10 col-lg-8 blurb mb-5 mb-md-0">
                <p>Enter any text that you want to encode:</p>
                <input
                  type="text"
                  placeholder="Enter text"
                  onChange={(event) => {
                    setText(event.target.value);
                  }}
                />
                <p>Insert the image you want to encode:</p>
                <input
                  type="file"
                  id="img"
                  onChange={(event) => {
                    setPic(event.target.value);
                  }}
                />
                <br />
                <br />
                <button onClick={createUser}> Encode </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Encode;

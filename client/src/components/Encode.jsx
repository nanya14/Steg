import { useState, useEffect } from "react";
import Axios from "axios";

function Encode() {
  const [listOfUsers, setListOfUsers] = useState([]);
  const [text, setText] = useState("");
  const [pic, setPic] = useState("");
  // const [inputName, setInputName] = useState("");
  // const [outputPath, setOutputPath] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:3001/getUsers").then((response) => {
      setListOfUsers(response.data);
    });
  }, []);

  const createUser = () => {
    let variable = document.getElementById("img").files[0].name;
    console.log(variable);

    Axios.post("http://localhost:3001/createUser", {
      text,
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
    Axios.post("http://localhost:3001/encode", {
      text,
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
    window.location.reload(false);
  };

  return (
    <div className="encode">
      <div className="container-sm">
        <div className="center">
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
              // let uploaded_image = event.target.value;
              // let input_filename = uploaded_image
              //   .split("\\")[2]
              //   .split(".")[0];

              // console.log(input_filename);
              // setInputName(input_filename);
              // // setOutputPath("images/" + input_filename + "output.png");
              // setOutputPath("images/0011output.png");
            }}
          />
          <br />
          <br />
          <button onClick={createUser}> Encode </button>
          <br />
          <br />
          <img className="img-fluid" src="images/output.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Encode;

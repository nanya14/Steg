import { useState, useEffect } from "react";
import Axios from "axios";

function Decode() {
  const [listOfUsers, setListOfUsers] = useState([]);
  const [encpic, setEncpic] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:3001/getUsers").then((response) => {
      setListOfUsers(response.data);
    });
  }, []);

  const createUser = () => {
    let variable = document.getElementById("img").files[0].name;
    console.log(variable);
    Axios.post("http://localhost:3001/createUser2", {
      encpic: variable,
    }).then((response) => {
      setListOfUsers([
        ...listOfUsers,
        {
          encpic,
        },
      ]);
    });
    //   Axios.post("http://localhost:3001/decode", {
    //     encpic: variable,
    //   }).then((response) => {
    //     setListOfUsers([
    //       ...listOfUsers,
    //       {
    //         encpic,
    //       },
    //     ]);
    //   });
    //   window.location.reload(false);
  };

  return (
    <div className="decode">
      <div className="container-sm">
        <div className="center">
          <p>Insert the image you want to decode:</p>
          <input
            type="file"
            id="img"
            onChange={(event) => {
              setEncpic(event.target.value);
            }}
          />
          <br />
          <br />
          <button onClick={createUser}> Decode </button>
          {/* <img className="img-fluid" src="images/decoded.png" alt="" /> */}
          <br />
          <br />
        </div>
      </div>
    </div>
  );
}

export default Decode;

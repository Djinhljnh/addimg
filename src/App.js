/*import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [question, setQuestion] = useState("");
  const [image, setImage] = useState("logo192.png");

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/question")
      .then((response) => {
        setQuestion(response.data.question);
        setImage(response.data.image);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleChangeQuestion = () => {
    axios
      .post("http://localhost:5000/api/change-question", {
        question: "New question",
        image: "https://example.com/new-image.jpg",
      })
      .then((response) => {
        setQuestion(response.data.question);
        setImage(response.data.image);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h1>{question}</h1>
      <img src={image} alt="Question" />
      <button onClick={handleChangeQuestion}>Change Question</button>
    </div>
  );
}

export default App;
*/

import React, { useState } from "react";
import axios from "axios";

function App() {
  const [question, setQuestion] = useState("");
  const [image, setImage] = useState("logo192.png");

  const handleChangeQuestion = () => {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.onchange = () => {
      const file = fileInput.files[0];
      const reader = new FileReader();
      reader.onload = (event) => {
        const content = event.target.result;
        axios
          .post("http://localhost:5000/api/change-question", {
            question: content,
            image: "https://example.com/new-image.jpg",
          })
          .then((response) => {
            setQuestion(response.data.question);
            setImage(response.data.image);
          })
          .catch((error) => {
            console.log(error);
          });
      };
      reader.readAsText(file);
    };
    fileInput.click();
  };

  return (
    <div>
      <h1>{question}</h1>
      <img src={image} alt="Question" />
      <button onClick={handleChangeQuestion}>Change Question</button>
    </div>
  );
}

export default App;

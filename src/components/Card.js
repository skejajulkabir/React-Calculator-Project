import React, { useEffect } from "react";
import { useState } from "react";
import "./css/card.css";
function Card(props) {
  let [answer, setanswer] = useState("");
  let input = answer;
  let solution = 0;
  let operators = "+-/X";

  useEffect(() => {
    setanswer("0");
    rendernow();
  }, []);
  function rendernow() {
    /// Code To Apply different themes
    function handleTheme(themeNumber) {
      let screen = document.body;
      // console.log(screen);
      let headerColor = document.getElementById("calc");
      let deleteColor = document.getElementById("delete");
      let resetColor = document.getElementById("reset");
      let equalsColor = document.getElementById("equals");

      let answerColor = document.getElementsByClassName("answer")[0];
      let keypadColor = document.getElementsByClassName("keypad")[0];
      let keysColor = document.getElementsByClassName("key");
      // console.log(keypadColor.style);

      if (themeNumber === "1") {
        screen.style.backgroundColor = "hsl(222, 26%, 31%)";
        answerColor.style.backgroundColor = "hsl(224, 36%, 15%)";
        keypadColor.style.backgroundColor = "hsl(223, 31%, 20%)";
        keypadColor.style.color = "hsl(223, 31%, 20%)";
        answerColor.style.color = "aliceblue";
        headerColor.style.color = "aliceblue";

        deleteColor.style.backgroundColor = "hsl(225, 21%, 49%)";
        resetColor.style.backgroundColor = "hsl(225, 21%, 49%)";
        equalsColor.style.backgroundColor = "hsl(6, 63%, 50%)";

        deleteColor.style.boxShadow =
          "inset 0px -5px 0px 0px hsl(224, 28%, 35%)";
        resetColor.style.boxShadow =
          "inset 0px -5px 0px 0px hsl(224, 28%, 35%)";
        equalsColor.style.boxShadow = "inset 0px -5px 0px 0px hsl(6, 70%, 34%)";

        for (let each of keysColor) {
          each.style.backgroundColor = "hsl(30, 25%, 89%)";
          each.style.boxShadow = "inset 0px -5px 0px 0px hsl(28, 16%, 65%)";
          each.style.Color = "hsl(30, 25%, 89%)";
        }
      } else if (themeNumber === "2") {
        screen.style.backgroundColor = "hsl(0, 0%, 90%)";
        answerColor.style.backgroundColor = "hsl(0, 0%, 93%)";
        keypadColor.style.backgroundColor = "hsl(0, 5%, 81%)";
        keypadColor.style.color = "hsl(60, 10%, 19%)";
        answerColor.style.color = "hsl(60, 10%, 19%)";
        headerColor.style.color = "hsl(60, 10%, 19%)";

        deleteColor.style.backgroundColor = "hsl(185, 42%, 37%)";
        resetColor.style.backgroundColor = "hsl(185, 42%, 37%)";
        equalsColor.style.backgroundColor = "hsl(25, 98%, 40%)";

        deleteColor.style.boxShadow =
          "inset 0px -5px 0px 0px hsl(185, 58%, 25%)";
        resetColor.style.boxShadow =
          "inset 0px -5px 0px 0px hsl(185, 58%, 25%)";
        equalsColor.style.boxShadow =
          "inset 0px -5px 0px 0px hsl(25, 99%, 27%)";

        for (let each of keysColor) {
          each.style.backgroundColor = "hsl(45, 7%, 89%)";
          each.style.boxShadow = "inset 0px -5px 0px 0px hsl(35, 11%, 61%)";
          each.style.Color = "hsl(60, 10%, 19%)";
        }
      } else if (themeNumber === "3") {
        screen.style.backgroundColor = "hsl(268, 75%, 9%)";
        answerColor.style.backgroundColor = "hsl(268, 71%, 12%)";
        keypadColor.style.backgroundColor = "hsl(268, 71%, 12%)";
        keypadColor.style.color = "hsl(52, 100%, 62%)";
        answerColor.style.color = "hsl(52, 100%, 62%)";
        headerColor.style.color = "hsl(52, 100%, 62%)";

        deleteColor.style.backgroundColor = "hsl(281, 89%, 26%)";
        resetColor.style.backgroundColor = "hsl(281, 89%, 26%)";
        equalsColor.style.backgroundColor = "hsl(176, 100%, 44%)";

        deleteColor.style.boxShadow =
          "inset 0px -5px 0px 0px hsl(285, 91%, 52%)";
        resetColor.style.boxShadow =
          "inset 0px -5px 0px 0px hsl(285, 91%, 52%)";
        equalsColor.style.boxShadow =
          "inset 0px -5px 0px 0px hsl(177, 92%, 70%)";

        for (let each of keysColor) {
          each.style.backgroundColor = "hsl(268, 47%, 21%)";
          each.style.Color = "hsl(52, 100%, 62%)";
          // document.getElementsByClassName(keys)[0].style.Color="hsl(52, 100%, 62%)";
          each.style.boxShadow = "inset 0px -5px 0px 0px hsl(290, 70%, 36%)";
        }
      }
    }

    let circle1 = document.getElementById("c1");
    let circle2 = document.getElementById("c2");
    let circle3 = document.getElementById("c3");
    circle1.addEventListener("click", (e) => handleTheme("1"));
    circle2.addEventListener("click", (e) => handleTheme("2"));
    circle3.addEventListener("click", (e) => handleTheme("3"));

    ///Main Code

    const keys = document.getElementsByClassName("keys")[0].childNodes;

    function check(input) {
      for (let i = 0; i < input.length - 1; i++) {
        if (operators.includes(input[i]) && operators.includes(input[i + 1])) {
          setanswer("!!! ERROR");
          return 0;
        }
      }
    }

    function handlekeypress(e) {
      // console.log(e);
      let keypress = "1,2,3,4,5,6,7,8,9,0,-,+,=,/,Backspace,Enter";
      let find = keypress.search(e.key);
      if (find !== -1) {
        // console.log(find);
        handleclick(e.key);
      }
    }
    function handleclick(key) {
      if (
        key === "DEL" ||
        key === "RESET" ||
        key === "=" ||
        key === "Backspace" ||
        key === "Enter" ||
        key === "r"
      ) {
        if (key === "DEL" || key === "Backspace") {
          input = input.slice(0, input.length - 1);
          setanswer(input);
        } else if (key === "RESET" || key === "r") {
          setanswer("0");
          input = "";
        } else if (key === "=" || key === "Enter") {
          let a = check(input);
          // console.log(a);
          if (a !== 0) {
            // console.log(input);
            // console.log("Correct");
            let correctinput = input.replace("X", "*");
            // console.log(correctinput);
            solution = eval(correctinput);
            setanswer(solution);
            input = solution.toString();
          }
        }
      } else {
        input += key;
        setanswer(input);
      }
    }

    for (let i = 0; i < keys.length; i++) {
      let key = keys[i].innerHTML;
      // console.log(key);
      keys[i].addEventListener("click", (e) => handleclick(key));
    }
    document.addEventListener("keydown", (e) => handlekeypress(e));
  }

  return (
    <div className="card">
      <div className="header">
        <div id="calc">Calculator</div>
        <div className="toggletheme">
          <button className="circles" id="c1"></button>
          <button className="circles" id="c2"></button>
          <button className="circles" id="c3"></button>
        </div>
      </div>
      <div className="answer">
        <p>{answer}</p>
      </div>
      <div className="keypad">
        <div className="keys">
          <div className="key">7</div>
          <div className="key">8</div>
          <div className="key">9</div>
          <div id="delete">DEL</div>
          <div className="key">4</div>
          <div className="key">5</div>
          <div className="key">6</div>
          <div className="key">+</div>
          <div className="key">1</div>
          <div className="key">2</div>
          <div className="key">3</div>
          <div className="key">-</div>
          <div className="key">.</div>
          <div className="key">0</div>
          <div className="key">/</div>
          <div className="key">X</div>
          <div id="reset">RESET</div>
          <div id="equals">=</div>
        </div>
      </div>
    </div>
  );
}

export default Card;

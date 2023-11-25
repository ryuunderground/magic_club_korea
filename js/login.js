const loginInput = document.querySelector(".login-form");
const idInput = loginInput.querySelector(".id");
const pwInput = loginInput.querySelector(".pw");
const loginBtn = loginInput.querySelector(".login__btn");
const DBid = ["남자성기삽니다", "토끼겅듀", "성기사이즈킹"];
const DBpw = ["malePaladin", "rabbitPrincess", "paladinIsKing"];

//가상의 서버 속 DB /
function login(event) {
  event.preventDefault();
  console.log(idInput);
  console.log("남자성기삽니다");
  const id = idInput.value;
  const pw = pwInput.value;
  if (DBid.includes(id) && DBpw.includes(pw)) {
    window.location.replace("/template/main.html");
  } else {
    window.alert("아이디 또는 비밀번호가 일치하지 않습니다.");
  }
}

loginBtn.addEventListener("click", login);

const registerForm = document.querySelector(".register-form");
const registerNameInput = registerForm.querySelector(".name");
const registerIdInput = registerForm.querySelector(".id");
const registerPasswordInput = registerForm.querySelector(".pw");
const registerUsernameInput = registerForm.querySelector(".username");
const registerFirstPhoneNumberInput = registerForm.querySelector(
  "#first_phone_number"
);
const registerSecondPhoneNumberInput = registerForm.querySelector(
  "#second_phone_number"
);
const registerThirdPhoneNumberInput = registerForm.querySelector(
  "#third_phone_number"
);

// const savedUsername = localStorage.getItem(USERNAME_KEY); //

function registerSubmit(event) {
  event.preventDefault();
  const name = registerNameInput.value;
  const id = registerIdInput.value;
  const password = registerPasswordInput.value;
  const username = registerUsernameInput.value;
  const firstPhonNumber = registerFirstPhoneNumberInput.value;
  const secondPhonNumber = registerSecondPhoneNumberInput.value;
  const thirdPhonNumber = registerThirdPhoneNumberInput.value;
  //서버로 정보 전송//
  console.log(id);
  console.log(password);
  console.log(username);
  console.log(firstPhonNumber);
  console.log(secondPhonNumber);
  console.log(thirdPhonNumber);

  window.alert("매직클럽 회원이 되신 것을 축하드립니다. 아님 말구.");
  window.location.replace("/template/login.html");
}

registerForm.addEventListener("submit", registerSubmit);

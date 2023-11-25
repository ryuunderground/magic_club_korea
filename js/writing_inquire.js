const uploadBtn = document.querySelector(".upload__btn");
const inputTitle = document.querySelector(".title__input");
const currentDate = new Date();
const formattedDate = currentDate.toLocaleDateString("ko-KR", {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
});

function inquireUpload(event) {
  console.log(inputTitle);
  console.log(formattedDate);
  //등등 서버로 문의 내용 전송//
  event.preventDefault();
  window.alert("문의 내용이 작성되었습니다.");
  window.location.replace("/templates/inquire.html");
}

uploadBtn.addEventListener("click", inquireUpload);
/*어려우면 문의는 DM으로 해달라고 하면 됨.
하면 좋고 아님 말고 */

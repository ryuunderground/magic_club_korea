let age = document.querySelector("#adult-check");

function age_alret() {
  alert(
    "미성년자가 허위로 가입한 사실이 발각된 경우, 제명과 추가적인 불이익이 있을 수 있습니다."
  );
}

if ((age.checked = true)) {
  age_alret();
}

const input = document.querySelector(".js-input");
const button = document.querySelector(".js-btn");
const result = document.querySelector(".js-result");

button.addEventListener("click", () => {
  let inputValue = input.value.trim();
  if (!inputValue) return;

  checkPalindrome(inputValue);
  input.value = "";
});

function checkPalindrome(inputValue) {
  const cleanedText = inputValue.toLowerCase().replace(/[ \-:–,]/g, "");

  const palindromeText = cleanedText.split("").reverse().join("");

  if (palindromeText === cleanedText) {
    result.innerHTML = `"${inputValue}" is a palindrome`;
    result.style.background = "rgba(3, 173, 3, 0.697)";
  } else {
    result.innerHTML = `"${inputValue}" is not a palindrome`;
    result.style.background = " rgba(173, 3, 3, 0.7)";
  }
}

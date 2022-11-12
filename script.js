const askBtn = document.getElementById("ask-btn");
const aboutLink = document.getElementById("about-link");

askBtn.addEventListener("click", aboutAlert);
aboutLink.addEventListener("click", aboutAlert);

function aboutAlert(e) {
  e.preventDefault();
  alert(
    "BitLabs >>> Curious Kids is a series for children of all ages. If you have a question you’d like an expert to answer, send it to curiouskidsus@theconversation.com."
  );
}

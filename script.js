document.addEventListener("DOMContentLoaded", function () {
  const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
});



let Quests = document.querySelectorAll(".doubt-quest .ques .ques-ans h4");
let answers = document.querySelectorAll(".doubt-quest .ques .ques-ans p");

Quests.forEach((question, index) => {
  let arrow = question.querySelector("i");

  question.addEventListener("click", () => {
    const isAnswerVisible = answers[index].style.display === "block";

    answers.forEach((answer, idx) => {
      answer.style.display = "none";
      Quests[idx].querySelector("i").classList.remove("rotate");
    });

    if (!isAnswerVisible) {
      answers[index].style.display = "block";
      arrow.classList.add("rotate");
    }
  });
});

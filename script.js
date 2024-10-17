document.addEventListener("DOMContentLoaded", function () {
  const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
});
function faqs() {
  let Quests = document.querySelectorAll(".doubt-quest .ques .ques-ans h4");
  let answers = document.querySelectorAll(".doubt-quest .ques .ques-ans p");

  function fctnOfFaqs() {
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
  }
  fctnOfFaqs();
}
faqs();

function caseStudy() {
  let topics = document.querySelectorAll(
    ".case-study .flex-container .accordion .accordion-item button"
  );
  let content = document.querySelectorAll(
    ".case-study .flex-container .accordion .accordion-item .accordion-content"
  );

  function fctnOfFaqs() {
    topics.forEach((topic, index) => {
      let arrow = topic.querySelector("i");

      topic.addEventListener("click", () => {
        const isContentVisible = content[index].style.display === "block";

        content.forEach((tpc, idx) => {
          tpc.style.display = "none";
          topics[idx].querySelector("i").classList.remove("rotate");
        });

        if (!isContentVisible) {
          content[index].style.display = "block";
          arrow.classList.add("rotate");
        }
      });
    });
  }
  fctnOfFaqs();
}
caseStudy();


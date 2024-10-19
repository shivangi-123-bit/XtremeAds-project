function gsap() {
  let tl = gsap.timeline();

  gsap.from("section .hero", {
    opacity: 0,
    y: 10,
    duration: 2,
    stagger: 1,
  });

  gsap.from(".hero .hero-container .hero-content .left .box", {
    x: -20,
    opacity: 0,
    delay: 1,
    duration: 2,
  });

  let plans = document.querySelectorAll(".pricing-section .container2 .pricing-plans .plan");
  let smoPlans = document.querySelectorAll(".smo-plans .plans-container .plan2");

  plans.forEach((plan) => {
    gsap.from(plan, {
      opacity: 0,
      transform: "rotate3D(0,500,0,180deg)",
      x: -10,
      duration: 2,
      scrollTrigger: {
        scrub: 5,
        trigger: plan,
        markers: false,
        start: "top 70%",
        end: "top 30%",
      },
    });
  });

  smoPlans.forEach((smoplan) => {
    gsap.from(smoplan, {
      opacity: 0,
      transform: "rotate3D(0,500,0,180deg)",
      x: -10,
      duration: 2,
      scrollTrigger: {
        scrub: 5,
        trigger: smoplan,
        markers: false,
        start: "top 80%",
        end: "top 40%",
      },
    });
  });
}
gsap();

function caseStudy() {
  let topics = document.querySelectorAll(".case-study .flex-container .accordion .accordion-item button");
  let content = document.querySelectorAll(".case-study .flex-container .accordion .accordion-item .accordion-content");

  function fctnOfCaseStd() {
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
  fctnOfCaseStd();
}
caseStudy();

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

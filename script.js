function getFreeEstimateForm() {
  let crossBtn = document.querySelector("#Close_Btn");
  let getFreeEstimate = document.querySelector("#getFreeEstimate");
  let formContainer = document.querySelector("#form-container");
  let EstimateBtn = document.querySelector("#EstimateBtn");
  console.log(EstimateBtn);
  crossBtn.addEventListener("click", function btnFun() {
    getFreeEstimate.style.display = "none";
    formContainer.style.display = "none";
  });
  EstimateBtn.addEventListener("click", () => {
    getFreeEstimate.style.display = "flex";
    formContainer.style.display = "flex";
  });
}

getFreeEstimateForm();

function caseStudy() {
  let topics = document.querySelectorAll(
    ".case-study .flex-container .accordion .accordion-item button"
  );
  let content = document.querySelectorAll(
    ".case-study .flex-container .accordion .accordion-item .accordion-content"
  );

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

document.addEventListener("DOMContentLoaded", function () {
  let tl = gsap.timeline();
  function animation() {
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

    let plans = document.querySelectorAll(
      ".pricing-section .container2 .pricing-plans .plan"
    );

    let smoPlans = document.querySelectorAll(
      ".smo-plans .plans-container .plan2"
    );

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

    // ------------------- for menu -----------------------

    let menu = document.querySelector("nav .menu-icon");
    let menuCross = document.querySelector(".menu-content .cross .menu-cross");

    tl.to(".menu-content", {
      right: 0,
      duration: 0.7,
    });

    tl.from(".menu-content h4", {
      x: 150,
      opacity: 0,
      stagger: 0.2,
      duration: 0.4,
    });

    tl.from(menuCross, {
      x: 100,
      opacity: 0,
    });

    tl.pause();

    menu.addEventListener("click", () => {
      tl.play();
    });
    menuCross.addEventListener("click", () => {
      tl.reverse();
    });
  }
  animation();
});

function contactForm() {
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbyVNxYz2mNXkcOCscKAbx9_wH7sC6SZmY77axPUpNYfINUKKVHHGv_4EmbAajdiN7CH/exec";
  const form = document.forms["submit-to-google-sheet"];
  
  form.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent default form submission
    fetch(scriptURL, { method: "POST", body: new FormData(form) })
      .then((response) => {
        showPopup("Your details have been submitted successfully!");
        form.reset(); // Reset the form fields
      })
      .catch((error) => {
        console.error("Error!", error.message);
        showPopup("There was an error submitting the form. Please try again.");
      });
  });
  
}

// Function to show a popup message
function showPopup(message) {
  const popup = document.createElement("div");
  popup.innerText = message;
  popup.style.position = "fixed";
  popup.style.top = "50%";
  popup.style.left = "50%";
  popup.style.transform = "translate(-50%, -50%)";
  popup.style.backgroundColor = "#4caf50";
  popup.style.color = "#fff";
  popup.style.padding = "15px 20px";
  popup.style.borderRadius = "8px";
  popup.style.boxShadow = "0px 4px 8px rgba(0, 0, 0, 0.2)";
  popup.style.zIndex = "10001";
  document.body.appendChild(popup);

  // Automatically remove popup after 3 seconds
  setTimeout(() => {
    popup.remove();
  }, 2000);
}

// Initialize the contact form submission
contactForm();


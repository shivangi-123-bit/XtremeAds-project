document.addEventListener("DOMContentLoaded", function () {
  const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });

   var id = document.querySelector("#strategy");
   toggleAccordion(id);
});

function toggleAccordion(id) {
  let content = document.getElementById(id);

  if (content) {
    // Ensure content exists
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
      reverseArrow(id);
    }
  }
}

function reverseArrow(id) {
  let arrow = document.querySelectorAll(
    ".accordion-item button.accordion-header i"
  );
  console.log(arrow);
  for (i = 0; i < arrow.length; i++) {
    id.addEventListener("click", () => {
      arrow[i].style.transform = "rotate(180deg)";
    });
  }
}


var ques1 = document.querySelector(".ques1")
var ans1 = document.querySelector(".ans1")
var iQues1 = document.querySelector("#i-ques1")


ques1.addEventListener("click",function(){
   iQues1.style.rotate = "180deg"
})

ques1.addEventListener("click",function(){
  ans1.style.opacity = 1
})
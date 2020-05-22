document.addEventListener("DOMContentLoaded", function () {
  let button = document.createElement("button");
  let buttonText = document.createTextNode("Add Square");
  button.appendChild(buttonText);
  document.body.appendChild(button);

  button.addEventListener("click", newDiv);

  let contain = document.createElement("div");
  contain.classList = "container";
  document.body.appendChild(contain);

  let idNum = 1;

  let colors = ["pink", "purple", "teal", "blue"];

  function newDiv() {
    let boxes = document.createElement("div");
    boxes.classList = "boxes";
    contain.appendChild(boxes);
    boxes.setAttribute("id", idNum);
    idNum++;
    boxes.addEventListener("mouseenter", function () {
      boxes.textContent = boxes.id;
    });
    boxes.addEventListener("mouseleave", function () {
      boxes.textContent = "";
    });
    boxes.addEventListener("click", function () {
      boxes.style.backgroundColor =
        colors[Math.floor(Math.random() * colors.length)];
    });
    boxes.addEventListener("dblclick", function () {
      if (boxes.id % 2 == 0) {
        if (boxes.nextElementSibling) {
          boxes.nextElementSibling.remove();
        } else {
          alert("No squares behind me!");
        }
      } else if (boxes.id % 2 == 1) {
        if (boxes.previousElementSibling) {
          boxes.previousElementSibling.remove();
        } else {
          alert("No squares before me!");
        }
      }
    });
  }
});

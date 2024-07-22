document.addEventListener("DOMContentLoaded", () => {
  async function fetchData() {
    const data = await fetch("https://jsonplaceholder.typicode.com/comments");
    const dataJson = await data.json();
    const comments = dataJson.splice(0, 7);
    displayAcordion(comments);
  }
  fetchData();

  function displayAcordion(comments) {
    const accordionItems = document.getElementById("accordion-items");

    comments.forEach((comment) => {
      console.log(comments);
      const accordion = document.createElement("div");
      accordion.classList.add("accordion");

      const accordionHeading = document.createElement("h2");
      accordionHeading.classList.add("accordion-heading");
      accordionHeading.innerText = comment.name;

      const accordionContent = document.createElement("p");
      accordionContent.classList.add("accordian-content");
      accordionContent.innerText = comment.body;

      accordionHeading.addEventListener("click", () => {
        accordionContent.classList.toggle("show");
      });

      accordion.appendChild(accordionHeading);
      accordion.appendChild(accordionContent);
      accordionItems.appendChild(accordion);
    });
  }
});

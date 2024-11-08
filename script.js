// let products = document.querySelectorAll(".products");
// products.forEach((wrapper) => {
//   wrapper.querySelector("span").addEventListener("click", (e) => {
//     let span = e.target;
//     let wrapper = span.nextElementSibling;
//     wrapper.classList.toggle("show");
//   });
// });

// let accordions = document.querySelectorAll(".accordion");
// accordions.forEach((accordion) => {
  // Array.from(accordion.children).forEach((wrapper) => {
    // if (wrapper.classList.contains("show")) {
    //   wrapper.querySelector("div").style.maxHeight =
    //     wrapper.querySelector("div").scrollHeight + 30 + "px";
    // }
    // wrapper.querySelector("span").addEventListener("click", (e) => {
    //   let span = e.target;
    //   let wrapper = span.parentElement;
    //   let div = span.nextElementSibling;
    //   console.log(span);
    //   wrapper.classList.toggle("show");
    //   if (wrapper.classList.contains("show")) {
    //     div.style.maxHeight = div.scrollHeight + 30 + "px";
    //   } else {
    //     wrapper.maxHeight = null;
    //   }
      // Array.from(accordion.children).forEach((w) => {
      //   if (w != wrapper) {
      //     w.classList.remove("show");
      //     w.querySelector("div").style.maxHeight = null;
      //   }
      // });
//     });
//   });
// });

let accordions = document.querySelectorAll(".accordion");

accordions.forEach((accordion) => {
  Array.from(accordion.children).forEach((wrapper) => {
    wrapper.querySelector("span").addEventListener("click", (e) => {
      let span = e.target;
      let wrapper = span.parentElement;
      wrapper.classList.toggle("show");
      Array.from(accordion.children).forEach((w) => {
        if (w != wrapper) {
          w.classList.remove("show");
        }
      });
    });
  });
});

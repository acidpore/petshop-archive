document.addEventListener("DOMContentLoaded", () => {
  const startButton = document.getElementById("start-button");
  const searchSection = document.getElementById("search-section");
  const header = document.querySelector("header");

  // Scroll the page when "Let's Start" button is clicked
  startButton.addEventListener("click", () => {
    searchSection.scrollIntoView({ behavior: "smooth" });
  });

  // Add a scroll event listener to the window
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      // Adjust scrollY value as needed
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  // Get the "Home" link by its href value
  const homeLink = document.querySelector('a[href="#home"]');

  // Add a click event listener to the "Home" link
  homeLink.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent default anchor behavior

    // Scroll to the top of the page manually
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  // Get the "About Us" link by its href value
  const aboutLink = document.querySelector('a[href="#about"]');

  // Add a click event listener to the "About Us" link
  aboutLink.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent default anchor behavior

    // Get the footer element
    const footer = document.querySelector("footer");

    // Scroll to the footer section smoothly
    footer.scrollIntoView({
      behavior: "smooth",
      block: "end", // Ensures it scrolls to the bottom of the footer
    });
  });
});



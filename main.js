// FIXED NAVBAR
document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      document.getElementById("nav-on-top").classList.add("fixed-top");
      navbar_height = document.querySelector(".navbar").offsetHeight;
      document.body.style.paddingTop = navbar_height + "px";
    } else {
      document.getElementById("nav-on-top").classList.remove("fixed-top");
      document.body.style.paddingTop = "0";
    }
  });
});
//LOGIN FUNCTION
function validateForm() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  if (
    email === "dimagibat@students.nu-laguna.edu.ph" &&
    password === "Dimagibs1234"
  ) {
    alert("Login successful!");
    window.location.href = "index.html";
    return false;
  } else if (
    email === "juandc@librarian.nu-laguna.edu.ph" &&
    password === "AkosiJuan123"
  ) {
    alert("Login successful!");
    window.location.href = "Librarian_home.html";
    return false;
  } else if (
    email === "dalisayc@admin.nu-laguna.edu.ph" &&
    password === "CardoD123"
  ) {
    alert("Login successful!");
    window.location.href = "Admin_home.html";
    return false;
  } else {
    alert("Incorrect login details");
    return false;
  }
}

// BOOK SEARCH FUNCTION
function search() {
  const searchInput = document.getElementById("search-item");
  const searchTerm = searchInput.value.toLowerCase();
  const books = document.querySelectorAll(".book");

  books.forEach((book) => {
    const bookTitle = book.querySelector("h3").textContent.toLowerCase();
    if (bookTitle.includes(searchTerm)) {
      book.style.display = "block";
    } else {
      book.style.display = "none";
    }
  });
}
// SORT BOOKS FUNCTIONS
function sortBooks() {
  const selectedCategory = document.getElementById("sort").value;
  const books = document.querySelectorAll(".book");

  books.forEach((book) => {
    const category = book.getAttribute("data-category");
    if (selectedCategory === "all" || selectedCategory === category) {
      book.style.display = "block";
    } else {
      book.style.display = "none";
    }
  });
}

// STAR RATING
function initializeStarRating() {
  const stars = document.querySelectorAll(".rating-star");
  const ratingValue = document.getElementById("rating-value");
  let rating;

  stars.forEach((star) => {
    star.addEventListener("click", () => {
      rating = star.getAttribute("data-value");
      ratingValue.textContent = `You rated ${rating} stars.`;
      highlightSelectedStars(rating);
    });

    star.addEventListener("mouseover", () => {
      resetStarsColor();
      highlightSelectedStars(star.getAttribute("data-value"));
    });

    star.addEventListener("mouseout", () => {
      resetStarsColor();
      highlightSelectedStars(rating);
    });
  });

  function resetStarsColor() {
    stars.forEach((star) => {
      star.style.color = "gray";
    });
  }

  function highlightSelectedStars(value) {
    for (let i = 0; i < value; i++) {
      stars[i].style.color = "gold";
    }
  }
}
window.addEventListener("load", initializeStarRating);

//DATE PICKER
document.addEventListener("DOMContentLoaded", function () {
  const pickupDateInput = document.getElementById("pickup-date");
  const returnDateInput = document.getElementById("return-date");
  const today = new Date().toISOString().split("T")[0];
  const maxReturnDate = new Date(); // Initialize maxReturnDate variable

  pickupDateInput.setAttribute("min", today);
  pickupDateInput.addEventListener("input", function () {
    const pickupDate = pickupDateInput.value;
    const minReturnDate = new Date(pickupDate);
    minReturnDate.setDate(minReturnDate.getDate() + 1);
    maxReturnDate.setDate(minReturnDate.getDate() + 7); // Set max return date to 7 days after pickup

    returnDateInput.setAttribute(
      "min",
      minReturnDate.toISOString().split("T")[0]
    );
    returnDateInput.setAttribute(
      "max",
      maxReturnDate.toISOString().split("T")[0]
    );

    if (returnDateInput.value < minReturnDate.toISOString().split("T")[0]) {
      returnDateInput.value = minReturnDate.toISOString().split("T")[0];
    }

    if (returnDateInput.value > maxReturnDate.toISOString().split("T")[0]) {
      returnDateInput.value = maxReturnDate.toISOString().split("T")[0];
    }
  });
});

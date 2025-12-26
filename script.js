document.addEventListener("DOMContentLoaded", () => {

  const currentPage = window.location.pathname.split("/").pop();

  document.querySelectorAll(".navbar a").forEach(link => {
    const linkPage = link.getAttribute("href");
    if (linkPage === currentPage || (currentPage === "" && linkPage === "index.html")) {
      link.classList.add("active");
    }
  });

  document.querySelectorAll(".sidebar a").forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      alert(link.innerText + " will be available soon");
    });
  });

  document.querySelectorAll(".btn").forEach(btn => {
    btn.addEventListener("mousedown", () => {
      btn.style.opacity = "0.85";
    });
    btn.addEventListener("mouseup", () => {
      btn.style.opacity = "1";
    });
    btn.addEventListener("mouseleave", () => {
      btn.style.opacity = "1";
    });
  });

  const loginForm = document.querySelector("form");
  if (loginForm && currentPage === "login.html") {
    loginForm.addEventListener("submit", e => {
      e.preventDefault();
      alert("Login successful (demo)");
    });
  }

});

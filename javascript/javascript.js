/* external library */
var swiper = new Swiper(".mySwiper", {
  speed: 600,
  parallax: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 1000,
    disableOnInteraction: true,
  },
});
/* --------------------------------------------------- */

(function () {
  const nav = document.querySelector(".nav");
  nav.addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target.tagName === "A") {
      const old = document.querySelector(".nav .tech");
      if (old) old.classList.remove("tech");
      e.target.classList.add("tech");
      const top = document.querySelector(`.${e.target.dataset.name}`).offsetTop;
     
      window.scrollTo({
        top,
        behavior: "smooth"
      });
    }
  });
})();

  window.addEventListener("scroll", () => {
    const old = document.querySelector(".nav .tech");
    if (old) old.classList.remove("tech");
    const about = document.querySelector(".about");
    const skill = document.querySelector(".skill");
    const project = document.querySelector(".project");
    const contact = document.querySelector(".contact");
    const n = document.documentElement.scrollTop;
    const tolerance = 120;
    if (n >= about.offsetTop-tolerance && n < skill.offsetTop-tolerance) {
      document.querySelector("[data-name=about]").classList.add("tech");
    } else if (n >= skill.offsetTop-tolerance && n < project.offsetTop-tolerance) {
      document.querySelector("[data-name=skill]").classList.add("tech");
    } else if (n >= project.offsetTop-tolerance && n < contact.offsetTop-tolerance) {
      document.querySelector("[data-name=project]").classList.add("tech");
    } else if (n >= contact.offsetTop-tolerance) {
      document.querySelector("[data-name=contact]").classList.add("tech");
    }
  });

const menu = document.querySelector(".menu img");
menu.addEventListener("click", () => {
  document.querySelectorAll(".nav a").forEach((a) => {
    a.style.display === "flex" || a.style.display === "block"? a.style.display = "none": a.style.display = "block";
  });
});

const topic = document.querySelector(".topic");
const timelineOne = document.querySelector(".timeline-1");
const timeline = document.querySelector(".timeline");
topic.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    document.querySelector(".topic .change").classList.remove("change");
    e.target.classList.add("change");
    if (e.target.classList.contains("work")) {
      timelineOne.classList.toggle("hide");
      timeline.classList.remove("active");
      timeline.classList.add("hide");
    } else if (e.target.classList.contains("edu")) {
      timeline.classList.toggle("active");
      timelineOne.classList.remove("active");
      timelineOne.classList.add("hide");
    }
  }
});

const front = document.querySelector(".front");
const img = document.querySelector(".img");
front.addEventListener("click", () => {
  img.classList.toggle("hide");
});

const url = "https://api.github.com/users/janetli82-ui/repos";
const divElement = document.getElementById("repo-data");
async function fetchData() {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Could not fetch resource");
    }
    const data = await response.json();
    let index = data.length;
    const id = data.map((repo) => repo.id).join("=====");
    const name = data.map((repo) => repo.name).join("=====");
    const fullName = data.map((repo) => repo.full_name).join("=====");
    const htmlUrl = data.map((repo) => repo.html_url).join("=====");
    const language = data.map((repo) => repo.language).join("=====");
    const create = data.map((repo) => repo.created_at).join("=====");
    const update = data.map((repo) => repo.updated_at).join("=====");
    const push = data.map((repo) => repo.pushed_at).join("=====");
    divElement.innerHTML = `<h4>🎉There are ${index} public repositories</h4> 
     <p>🆔Repo ID: ${id}</p> 
     <p>🎆Repo Name: ${name}</p> 
     <p>🎃Repo Fullname: ${fullName}</p> 
     <p>🎪Repo html Url: ${htmlUrl}</p>
     <p>🎀Repo language: ${language}</p> 
     <p>🎠Repo created day: ${create}</p> 
     <p>🎡Repo updated day: ${update}</p> 
     <p>🎈Repo pushed day: ${push}</p>`;
  } catch (error) {
      divElement.textContent = `Error: ${error.message}`;
  }
}
const latest = document.querySelector(".new");
window.addEventListener('DOMContentLoaded', () => {
  fetchData();
});

latest.addEventListener("click", () => {
  divElement.classList.toggle("hide");
});

const gitHub = [
  "https://github.com/janetli82-ui/homework-1.git",
  "https://github.com/wineynia/version-control-assignment.git",
  "https://github.com/janetli82-ui/homework-3.git",
  "https://github.com/DobeenKim/AustraliaZoo.git",
  "https://github.com/janetli82-ui/homework-5.git",
  "https://github.com/wineynia/weather-and-country-information.git",
];
const project = document.querySelector(".project");
const box = document.querySelector(".box");
let repo = document.querySelector(".repo-detail");
box.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    if (repo) repo.remove();
    repo = document.createElement("div");
    repo.classList.add("repo-detail");
    if (!repo.innerHTML) {
      project.appendChild(repo);
      const repoId = e.target.dataset.id;
      repo.innerHTML = `<a href="${gitHub[repoId]}" target="_blank">
    <h3 style="color:green">View source code</h3>
    </a>
    <button class="btn">Close</button>`;
      const button = document.querySelector(".btn");
      button.addEventListener("click", () => {
        repo.style.display = "none";
      });
    }
  }
});

const scroll = document.querySelector(".scroll");
scroll.addEventListener("click", () => {
  document.documentElement.scrollTop = 0;
});



// Project data: each object in the array describes one project card.
const projects = [
  {
    title: "RiskRules",
    description: "An explainable financial risk system with a Spring Boot backend and Next.js frontend.",
    tools: ["Java", "Spring Boot", "Next.js", "PostgreSQL", "Docker", "AWS", "Terraform"],
    link: null
  },
  {
    title: "Side B",
    description: "A full-stack music app built on the Spotify API, validated with 105 automated tests.",
    tools: ["TypeScript", "Next.js", "PostgreSQL", "Redis", "OAuth 2.0"],
    link: "https://github.com/tanayaxsharmaa/side-b"
  },
  {
    title: "Socly",
    description: "A connected E-Ink device with a web dashboard for device setup, management, and telemetry.",
    tools: ["C++", "Embedded", "REST APIs", "Full-stack web"],
    link: null
  },
  {
    title: "Personal Website",
    description: "This site: a Materialize-based portfolio deployed with GitHub Pages.",
    tools: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
    link: "https://github.com/tanayaxsharmaa/tanayaxsharmaa.github.io"
  }
];

// How many projects to show before "Load More" is clicked.
const INITIAL_COUNT = 2;

// Get the elements from the page once, by their ids.
const projectList = document.getElementById("project-list");
const loadMoreButton = document.getElementById("load-more");

// Build the HTML for one project card and return it as a string.
function createProjectCard(project) {
  let linkHtml = "";
  if (project.link) {
    linkHtml = `
      <div class="card-action">
        <a href="${project.link}" target="_blank" class="teal-text">View Source</a>
      </div>`;
  }

  return `
    <div class="col s12 m6">
      <div class="card">
        <div class="card-content">
          <span class="card-title teal-text">${project.title}</span>
          <p>${project.description}</p>
          <p><b>Tools:</b> ${project.tools.join(", ")}</p>
        </div>
        ${linkHtml}
      </div>
    </div>`;
}

// Insert the projects from index `start` up to (not including) `end`.
function renderProjects(start, end) {
  for (let i = start; i < end; i++) {
    projectList.insertAdjacentHTML("beforeend", createProjectCard(projects[i]));
  }
}

// On page load: show the first two projects.
renderProjects(0, INITIAL_COUNT);

// On click: show the rest, then hide the button since nothing is left to load.
loadMoreButton.addEventListener("click", function () {
  renderProjects(INITIAL_COUNT, projects.length);
  loadMoreButton.style.display = "none";
});
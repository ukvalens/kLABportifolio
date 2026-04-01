// --- DATA ---
const projects = [
  { id: 1, title: "E-Commerce App", desc: "Full-stack shopping platform with cart and payments.", img: "images/project1.jpg", category: "backend", demo: "#", github: "#" },
  { id: 2, title: "Portfolio UI", desc: "Responsive personal portfolio with dark mode.", img: "images/project2.jpg", category: "frontend", demo: "#", github: "#" },
  { id: 3, title: "Brand Identity", desc: "Logo and design system for a tech startup.", img: "images/project3.jpg", category: "design", demo: "#", github: "#" },
];

const blogs = [
  { title: "Getting Started with React", desc: "A beginner's guide to building UIs with React.", img: "images/blog1.jpg" },
  { title: "CSS Grid vs Flexbox", desc: "When to use each layout system in modern CSS.", img: "images/blog2.jpg" },
];

// --- RENDER PROJECTS ---
function renderProjects(filter = "all") {
  const grid = document.getElementById("projects-grid");
  const filtered = filter === "all" ? projects : projects.filter(p => p.category === filter);
  grid.innerHTML = filtered.map(p => `
    <div class="project-card" data-id="${p.id}">
      <img src="${p.img}" alt="${p.title}" onerror="this.style.display='none'" />
      <div class="project-card-body">
        <h3>${p.title}</h3>
        <p>${p.desc}</p>
        <div class="project-links">
          <a href="${p.demo}" target="_blank">Live Demo</a>
          <a href="${p.github}" target="_blank">GitHub</a>
        </div>
      </div>
    </div>
  `).join("");

  grid.querySelectorAll(".project-card").forEach(card => {
    card.addEventListener("click", () => openModal(card.dataset.id));
  });
}

// --- FILTER ---
document.querySelectorAll(".filter-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    renderProjects(btn.dataset.filter);
  });
});

// --- MODAL ---
function openModal(id) {
  const p = projects.find(x => x.id == id);
  if (!p) return;
  document.getElementById("modal-body").innerHTML = `
    <h2>${p.title}</h2>
    <p style="margin:1rem 0;color:var(--text-muted)">${p.desc}</p>
    <div style="display:flex;gap:1rem">
      <a href="${p.demo}" target="_blank" class="btn btn-primary">Live Demo</a>
      <a href="${p.github}" target="_blank" class="btn btn-outline" style="border-color:var(--primary);color:var(--primary)">GitHub</a>
    </div>
  `;
  document.getElementById("project-modal").classList.remove("hidden");
}
document.getElementById("modal-close").addEventListener("click", () => {
  document.getElementById("project-modal").classList.add("hidden");
});
document.getElementById("project-modal").addEventListener("click", e => {
  if (e.target === e.currentTarget) e.currentTarget.classList.add("hidden");
});

// --- RENDER BLOG ---
function renderBlog() {
  document.getElementById("blog-grid").innerHTML = blogs.map(b => `
    <div class="blog-card">
      <img src="${b.img}" alt="${b.title}" onerror="this.style.display='none'" />
      <div class="blog-card-body">
        <h3>${b.title}</h3>
        <p>${b.desc}</p>
      </div>
    </div>
  `).join("");
}

// --- CONTACT FORM ---
document.getElementById("contact-form").addEventListener("submit", e => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const msg = document.getElementById("form-msg");

  if (!name || !email || !message) {
    msg.textContent = "Please fill in all fields.";
    msg.className = "form-msg error";
    return;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    msg.textContent = "Please enter a valid email.";
    msg.className = "form-msg error";
    return;
  }
  msg.textContent = "Message sent! I'll get back to you soon.";
  msg.className = "form-msg";
  e.target.reset();
});

// --- DARK MODE ---
const toggle = document.getElementById("theme-toggle");
const icon = toggle.querySelector("i");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  icon.className = document.body.classList.contains("dark") ? "fa fa-sun" : "fa fa-moon";
});

// --- HAMBURGER ---
document.getElementById("hamburger").addEventListener("click", () => {
  document.querySelector(".nav-links").classList.toggle("open");
});

// --- SHOW MORE SKILLS ---
const skillsToggle = document.getElementById('skills-toggle');
const skillsExtra = document.querySelector('.skills-extra');
skillsToggle.addEventListener('click', () => {
  skillsExtra.classList.toggle('hidden');
  skillsToggle.classList.toggle('open');
  skillsToggle.innerHTML = skillsExtra.classList.contains('hidden')
    ? 'Show More <i class="fa fa-chevron-down"></i>'
    : 'Show Less <i class="fa fa-chevron-down"></i>';
});

// --- INIT ---
renderProjects();
renderBlog();

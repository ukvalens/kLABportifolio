// --- DATA ---
const projects = [
  { id: 1,  title: "Restaurant Management System", desc: "A web-based restaurant management system for handling orders, menus, and reservations.",              lang: "PERN Stack", category: "react",  demo: "",                                   github: "https://github.com/ukvalens/codealpha_tasks" },
  { id: 2,  title: "Event Registration System",     desc: "An event registration platform allowing users to register and manage event attendance.",            lang: "PERN Stack", category: "react",  demo: "",                                   github: "https://github.com/ukvalens/codealpha_tasks" },
  { id: 3,  title: "SMS - School Mgmt System",      desc: "Full-featured school management system with student, teacher, and admin modules built in PHP.",    lang: "PHP",        category: "backend",  demo: "",                                   github: "https://github.com/ukvalens/sms" },
  { id: 4,  title: "SmartShop",                     desc: "E-commerce shopping platform with product management and cart features built in PHP.",              lang: "PHP",        category: "backend",  demo: "https://smart-shop-swart.vercel.app",  github: "https://github.com/ukvalens/SmartShop" },
  { id: 5,  title: "Product Management",            desc: "Product management dashboard built with TypeScript for inventory and product tracking.",           lang: "TypeScript", category: "backend",  demo: "",                                   github: "https://github.com/ukvalens/productmanagement" },
  { id: 6,  title: "Mothercare System",             desc: "Maternal healthcare management system for tracking patient records and appointments.",             lang: "PHP",        category: "backend",  demo: "",                                   github: "https://github.com/ukvalens/mothercare" },
  { id: 7,  title: "IT Project",                    desc: "A web-based IT project built with HTML covering core web development concepts and structure.",     lang: "HTML",       category: "frontend", demo: "",                                   github: "https://github.com/ukvalens/it-project" },
  { id: 8,  title: "kLAB Portfolio",                desc: "This portfolio website built with HTML, CSS, and JavaScript featuring dark mode and animations.", lang: "HTML",       category: "frontend", demo: "",                                   github: "https://github.com/ukvalens/kLABportifolio" },
  { id: 9,  title: "GPA Calculator",                desc: "A web-based GPA calculator built with PHP to help students compute and track academic performance.", lang: "PHP",       category: "backend",  demo: "",                                   github: "https://github.com/ukvalens/gpa" },
  { id: 10, title: "Crosswalk Game",                desc: "A fun crosswalk browser game built with HTML, CSS, and JavaScript.",                             lang: "HTML",       category: "frontend", demo: "",                                   github: "https://github.com/ukvalens/game_croswalk" },
  { id: 11, title: "ExpertHub",                     desc: "A platform connecting experts and clients, built with PHP and MySQL.",                            lang: "PHP",        category: "backend",  demo: "",                                   github: "https://github.com/ukvalens/ExpertHub" },
];

const PROJECTS_VISIBLE = 6;

const blogs = [
  { title: "Getting Started with React", desc: "A beginner's guide to building UIs with React.", img: "images/blog1.jpg" },
  { title: "CSS Grid vs Flexbox", desc: "When to use each layout system in modern CSS.", img: "images/blog2.jpg" },
];

// --- RENDER PROJECTS ---
let showAllProjects = false;

function renderProjects(filter = "all") {
  const grid = document.getElementById("projects-grid");
  const filtered = filter === "all" ? projects : projects.filter(p => p.category === filter);
  const visible = showAllProjects ? filtered : filtered.slice(0, PROJECTS_VISIBLE);

  grid.innerHTML = visible.map(p => `
    <div class="project-card" data-id="${p.id}">
      <div class="project-card-body">
        <div class="project-lang-badge">${p.lang}</div>
        <h3>${p.title}</h3>
        <p>${p.desc}</p>
        <div class="project-links">
          <a href="${p.github}" target="_blank"><i class="fab fa-github"></i> GitHub</a>
        </div>
      </div>
    </div>
  `).join("");

  grid.querySelectorAll(".project-card").forEach(card => {
    card.addEventListener("click", () => openModal(card.dataset.id));
  });

  // Show More / Show Less button
  let btn = document.getElementById("projects-toggle");
  if (!btn) {
    btn = document.createElement("div");
    btn.id = "projects-toggle";
    btn.style.cssText = "text-align:center;margin-top:1.5rem";
    grid.parentNode.appendChild(btn);
  }
  if (filtered.length > PROJECTS_VISIBLE) {
    btn.innerHTML = `<button class="btn btn-outline" style="border-color:var(--primary);color:var(--primary)" onclick="toggleProjects()">${showAllProjects ? 'Show Less' : 'Show More Projects'} <i class="fa fa-chevron-${showAllProjects ? 'up' : 'down'}"></i></button>`;
  } else {
    btn.innerHTML = '';
  }
}

function toggleProjects() {
  showAllProjects = !showAllProjects;
  const activeFilter = document.querySelector('.filter-btn.active')?.dataset.filter || 'all';
  renderProjects(activeFilter);
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
    <div class="project-lang-badge" style="margin-bottom:0.8rem">${p.lang}</div>
    <h2>${p.title}</h2>
    <p style="margin:1rem 0;color:var(--text-muted)">${p.desc}</p>
    <div style="display:flex;gap:1rem;flex-wrap:wrap">
      <a href="${p.github}" target="_blank" class="btn btn-primary"><i class="fab fa-github"></i> GitHub</a>
      ${p.demo ? `<a href="${p.demo}" target="_blank" class="btn btn-outline" style="border-color:var(--primary);color:var(--primary)"><i class="fa fa-external-link-alt"></i> Live Demo</a>` : ''}
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

// --- SKILLS TABS ---
function filterSkills(group) {
  document.querySelectorAll('.skill-bar-item, .skill-tag-item').forEach(el => {
    const match = group === 'all' || el.dataset.group === group;
    el.classList.toggle('hidden', !match);
  });
  // reset fills then animate
  document.querySelectorAll('.fill').forEach(f => f.style.width = '0');
  setTimeout(animateBars, 50);
}

function animateBars() {
  document.querySelectorAll('.skill-bar-item:not(.hidden) .fill').forEach(fill => {
    fill.style.width = fill.dataset.width + '%';
  });
}

document.querySelectorAll('.skills-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.skills-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    filterSkills(tab.dataset.group);
  });
});

// Animate bars on scroll into view
const skillsObserver = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) animateBars(); });
}, { threshold: 0.2 });
const skillsSection = document.getElementById('skills');
if (skillsSection) skillsObserver.observe(skillsSection);


renderProjects();
renderBlog();
filterSkills('frontend');

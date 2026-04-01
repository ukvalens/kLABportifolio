// --- DATA ---
const projects = [
  { id: 1,  title: "Restaurant Management System", desc: "A web-based restaurant management system for handling orders, menus, and reservations.", lang: "JavaScript", category: "backend",  demo: "", github: "https://github.com/ukvalens/codealpha_tasks" },
  { id: 2,  title: "Event Registration System",      desc: "An event registration platform allowing users to register and manage event attendance.",  lang: "JavaScript", category: "backend",  demo: "", github: "https://github.com/ukvalens/codealpha_tasks" },
  { id: 2,  title: "SMS – School Mgmt System", desc: "Full-featured school management system with student, teacher, and admin modules built in PHP.",    lang: "PHP",        category: "backend",  demo: "",                                        github: "https://github.com/ukvalens/sms" },
  { id: 3,  title: "ExpertHub",               desc: "A platform connecting experts and clients, built with PHP and MySQL.",                              lang: "PHP",        category: "backend",  demo: "",                                        github: "https://github.com/ukvalens/ExpertHub" },
  { id: 4,  title: "REB System",              desc: "Rwanda Education Board internal system built with TypeScript for managing educational resources.",   lang: "TypeScript", category: "backend",  demo: "",                                        github: "https://github.com/ukvalens/reb" },
  { id: 5,  title: "school-management-system",desc: "PHP-based school management system covering students, courses, and staff administration.",           lang: "PHP",        category: "backend",  demo: "",                                        github: "https://github.com/ukvalens/school-management-system" },
  { id: 6,  title: "SmartShop",               desc: "E-commerce shopping platform with product management and cart features built in PHP.",               lang: "PHP",        category: "backend",  demo: "https://smart-shop-swart.vercel.app",      github: "https://github.com/ukvalens/SmartShop" },
  { id: 7,  title: "mothercaresystem",        desc: "Maternal healthcare management system for tracking patient records and appointments.",               lang: "PHP",        category: "backend",  demo: "https://mothercaresystem.vercel.app",      github: "https://github.com/ukvalens/mothercaresystem" },
  { id: 8,  title: "productmanagement",       desc: "Product management dashboard built with TypeScript for inventory and product tracking.",             lang: "TypeScript", category: "backend",  demo: "",                                        github: "https://github.com/ukvalens/productmanagement" },
  { id: 9,  title: "feedback-board",          desc: "A feedback collection board web app built with PHP and deployed on Vercel.",                        lang: "PHP",        category: "backend",  demo: "https://feedback-board-ten.vercel.app",    github: "https://github.com/ukvalens/feedback-board" },
  { id: 10, title: "task-manager",            desc: "A full-featured task manager app with CRUD operations built in JavaScript.",                        lang: "JavaScript", category: "frontend", demo: "",                                        github: "https://github.com/ukvalens/task-manager" },
  { id: 11, title: "walletweb",               desc: "A financial wallet web app for tracking income and expenses, deployed on Vercel.",                   lang: "JavaScript", category: "frontend", demo: "https://finacial-wallet.vercel.app",         github: "https://github.com/ukvalens/walletweb" },
  { id: 12, title: "myrportfolio",            desc: "Personal portfolio website built with HTML/CSS/JS and deployed on Vercel.",                         lang: "HTML",       category: "frontend", demo: "https://myportfolio-one-inky.vercel.app",   github: "https://github.com/ukvalens/myrportfolio" },
  { id: 13, title: "quote",                   desc: "A random quote generator web app built with JavaScript.",                                           lang: "JavaScript", category: "frontend", demo: "",                                        github: "https://github.com/ukvalens/quote" },
  { id: 14, title: "quiz-ap",                 desc: "An interactive quiz application with score tracking built in JavaScript.",                          lang: "JavaScript", category: "frontend", demo: "https://quiz-ap.vercel.app",                github: "https://github.com/ukvalens/quiz-ap" },
  { id: 15, title: "todolist_app",            desc: "A to-do list app with add, complete, and delete features built with HTML/CSS/JS.",                  lang: "HTML",       category: "frontend", demo: "https://todolist-app-three-amber.vercel.app", github: "https://github.com/ukvalens/todolist_app" },
  { id: 16, title: "CODEALPHA – Age Calculator",desc: "Web-based age calculator built with CSS/HTML/JS, deployed on Vercel.",                           lang: "CSS",        category: "frontend", demo: "https://codealpha-eta.vercel.app",          github: "https://github.com/ukvalens/CODEALPHA" },
  { id: 17, title: "game_croswalk",           desc: "A crosswalk browser game built with HTML/CSS/JS.",                                                  lang: "HTML",       category: "frontend", demo: "",                                        github: "https://github.com/ukvalens/game_croswalk" },
  { id: 18, title: "tictactoe",               desc: "An interactive Tic Tac Toe game with two-player gameplay built in JavaScript.",                     lang: "JavaScript", category: "frontend", demo: "",                                        github: "https://github.com/ukvalens/tictactoe" },
  { id: 19, title: "taskmanger",              desc: "A task manager app with local storage persistence built in JavaScript.",                            lang: "JavaScript", category: "frontend", demo: "",                                        github: "https://github.com/ukvalens/taskmanger" },
  { id: 20, title: "GPA Calculator",          desc: "A web-based GPA calculator built with PHP to help students track academic performance.",            lang: "PHP",        category: "backend",  demo: "",                                        github: "https://github.com/ukvalens/gpa" },
  { id: 21, title: "LAPTOPREGISTRATION",      desc: "A PHP-based system for registering and managing laptop assets with a database backend.",           lang: "PHP",        category: "backend",  demo: "",                                        github: "https://github.com/ukvalens/LAPTOPREGISTRATION" },
  { id: 22, title: "mothercare",              desc: "Maternal care web app for managing patient health records built in PHP.",                          lang: "PHP",        category: "backend",  demo: "",                                        github: "https://github.com/ukvalens/mothercare" },
  { id: 23, title: "nirdakmsa",               desc: "Knowledge Management System developed during NIRDA internship.",                                   lang: "N/A",        category: "backend",  demo: "",                                        github: "https://github.com/ukvalens/nirdakmsa" },
  { id: 24, title: "calculator",              desc: "A Python-based calculator supporting basic and advanced arithmetic operations.",                    lang: "Python",     category: "backend",  demo: "",                                        github: "https://github.com/ukvalens/calculator" },
  { id: 25, title: "cipher-app",              desc: "A cipher encryption/decryption application for encoding and decoding text messages.",              lang: "JavaScript", category: "frontend", demo: "",                                        github: "https://github.com/ukvalens/cipher-app" },
  { id: 26, title: "it-project",              desc: "A web-based IT project built with HTML covering core web development concepts.",                   lang: "HTML",       category: "frontend", demo: "",                                        github: "https://github.com/ukvalens/it-project" },
  { id: 27, title: "kLAB Portfolio",          desc: "This portfolio website built with HTML, CSS, and JavaScript featuring dark mode and animations.",  lang: "HTML",       category: "frontend", demo: "",                                        github: "https://github.com/ukvalens/kLABportifolio" },
  { id: 28, title: "valandingpage",           desc: "A personal landing page project.",                                                                  lang: "HTML",       category: "frontend", demo: "",                                        github: "https://github.com/ukvalens/valandingpage" },
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

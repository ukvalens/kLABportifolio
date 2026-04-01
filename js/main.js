// --- DATA ---
const projects = [
  { id: 1,  title: "Restaurant Management System", desc: "A web-based restaurant management system for handling orders, menus, and reservations.",              lang: "PERN Stack", category: "react",    demo: "", github: "https://github.com/ukvalens/codealpha_tasks" },
  { id: 2,  title: "Event Registration System",     desc: "An event registration platform allowing users to register and manage event attendance.",            lang: "PERN Stack", category: "react",    demo: "", github: "https://github.com/ukvalens/codealpha_tasks" },
  { id: 3,  title: "SMS - School Mgmt System",      desc: "Full-featured school management system with student, teacher, and admin modules built in PHP.",    lang: "PHP",        category: "backend",  demo: "", github: "https://github.com/ukvalens/sms" },
  { id: 4,  title: "SmartShop",                     desc: "E-commerce shopping platform with product management and cart features built in PHP.",              lang: "PHP",        category: "backend",  demo: "https://smart-shop-swart.vercel.app", github: "https://github.com/ukvalens/SmartShop" },
  { id: 5,  title: "Product Management",            desc: "Product management dashboard built with TypeScript for inventory and product tracking.",           lang: "TypeScript", category: "backend",  demo: "", github: "https://github.com/ukvalens/productmanagement" },
  { id: 6,  title: "Mothercare System",             desc: "Maternal healthcare management system for tracking patient records and appointments.",             lang: "PHP",        category: "backend",  demo: "", github: "https://github.com/ukvalens/mothercare" },
  { id: 7,  title: "IT Project",                    desc: "A web-based IT project built with HTML covering core web development concepts and structure.",     lang: "HTML",       category: "frontend", demo: "", github: "https://github.com/ukvalens/it-project" },
  { id: 8,  title: "kLAB Portfolio",                desc: "This portfolio website built with HTML, CSS, and JavaScript featuring dark mode and animations.", lang: "HTML",       category: "frontend", demo: "", github: "https://github.com/ukvalens/kLABportifolio" },
  { id: 9,  title: "GPA Calculator",                desc: "A web-based GPA calculator built with PHP to help students compute and track academic performance.", lang: "PHP",      category: "backend",  demo: "", github: "https://github.com/ukvalens/gpa" },
  { id: 10, title: "Crosswalk Game",                desc: "A fun crosswalk browser game built with HTML, CSS, and JavaScript.",                             lang: "HTML",       category: "frontend", demo: "", github: "https://github.com/ukvalens/game_croswalk" },
  { id: 11, title: "ExpertHub",                     desc: "A platform connecting experts and clients, built with PHP and MySQL.",                            lang: "PHP",        category: "backend",  demo: "", github: "https://github.com/ukvalens/ExpertHub" },
];

const PROJECTS_VISIBLE = 6;

// --- BLOG DATA ---
const blogs = [
  {
    id: 1,
    title: "Getting Started with the PERN Stack",
    category: "React",
    date: "March 2025",
    desc: "A beginner-friendly guide to building full-stack apps with PostgreSQL, Express, React, and Node.js.",
    content: [
      { type: "p", text: "The <strong>PERN Stack</strong> (PostgreSQL, Express.js, React, Node.js) is one of the most powerful combinations for building modern full-stack web applications." },
      { type: "h4", text: "1. Setting Up the Backend" },
      { type: "code", text: "mkdir pern-app && cd pern-app\nnpm init -y\nnpm install express pg cors dotenv" },
      { type: "h4", text: "2. Express Server" },
      { type: "code", text: "const express = require('express');\nconst cors = require('cors');\nconst app = express();\napp.use(cors());\napp.use(express.json());\napp.listen(5000, () => console.log('Server on port 5000'));" },
      { type: "h4", text: "3. Connecting PostgreSQL" },
      { type: "code", text: "const { Pool } = require('pg');\nconst pool = new Pool({ connectionString: process.env.DATABASE_URL });\nmodule.exports = pool;" },
      { type: "h4", text: "4. React Frontend" },
      { type: "code", text: "npx create-react-app client\ncd client && npm start" },
      { type: "p", text: "With this setup you can build REST APIs with Express and consume them in React. Happy coding!" }
    ]
  },
  {
    id: 2,
    title: "Building a REST API with PHP and MySQL",
    category: "PHP",
    date: "February 2025",
    desc: "Learn how to create a clean and secure REST API using PHP and MySQL from scratch.",
    content: [
      { type: "p", text: "PHP remains one of the most widely used server-side languages. Let's build a simple REST API." },
      { type: "h4", text: "1. Database Setup" },
      { type: "code", text: "CREATE TABLE users (\n  id INT AUTO_INCREMENT PRIMARY KEY,\n  name VARCHAR(100),\n  email VARCHAR(100) UNIQUE\n);" },
      { type: "h4", text: "2. Database Connection" },
      { type: "code", text: "$conn = new PDO(\"mysql:host=localhost;dbname=mydb\", 'root', '');\n$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);" },
      { type: "h4", text: "3. GET Endpoint" },
      { type: "code", text: "header('Content-Type: application/json');\n$stmt = $conn->query('SELECT * FROM users');\necho json_encode($stmt->fetchAll(PDO::FETCH_ASSOC));" },
      { type: "p", text: "This gives you a solid foundation for building full CRUD APIs with PHP and MySQL." }
    ]
  },
  {
    id: 3,
    title: "My Journey: From Student to Full Stack Developer",
    category: "Career",
    date: "October 2024",
    desc: "How I went from studying Computer Engineering to building real-world full-stack applications.",
    content: [
      { type: "p", text: "My journey into software development started during my Computer Engineering studies." },
      { type: "h4", text: "The Beginning" },
      { type: "p", text: "I started with HTML, CSS, and JavaScript. My first project was a simple Python calculator — it sparked my passion for building things." },
      { type: "h4", text: "Learning the Stack" },
      { type: "p", text: "I moved to PHP and MySQL, then discovered Node.js and React. The PERN stack became my go-to for modern applications." },
      { type: "h4", text: "Real-World Experience" },
      { type: "p", text: "Internships at <strong>NIRDA</strong> and <strong>Rwanda Education Board (REB)</strong> gave me hands-on professional experience writing production code and solving real problems." },
      { type: "h4", text: "Key Lessons" },
      { type: "list", items: ["Build projects, not just tutorials", "Read other people's code on GitHub", "Don't fear errors — they are your best teachers", "Consistency beats intensity"] },
      { type: "p", text: "If you are just starting out — keep going. Every expert was once a beginner." }
    ]
  },
  {
    id: 4,
    title: "PostgreSQL vs MySQL: Which Should You Choose?",
    category: "Database",
    date: "December 2024",
    desc: "A practical comparison of PostgreSQL and MySQL to help you pick the right database for your project.",
    content: [
      { type: "p", text: "Both are powerful relational databases. Here is a practical comparison." },
      { type: "p", text: "<strong>PostgreSQL</strong> is fully ACID-compliant, supports JSON, arrays, UUID, and is better for complex queries." },
      { type: "p", text: "<strong>MySQL</strong> is faster for simple read-heavy workloads and has wider hosting support." },
      { type: "h4", text: "PostgreSQL JSON Example" },
      { type: "code", text: "CREATE TABLE products (\n  id SERIAL PRIMARY KEY,\n  name VARCHAR(100),\n  attributes JSONB\n);\nSELECT attributes->>'ram' AS ram FROM products;" },
      { type: "h4", text: "MySQL Example" },
      { type: "code", text: "SELECT * FROM users\nWHERE status = 'active'\nORDER BY created_at DESC\nLIMIT 10;" },
      { type: "p", text: "<strong>Recommendation:</strong> Use PostgreSQL for PERN stack projects, MySQL for simpler PHP apps." }
    ]
  },
  {
    id: 5,
    title: "React Hooks: useState and useEffect Guide",
    category: "React",
    date: "November 2024",
    desc: "Master the two most important React Hooks with practical examples you can use right away.",
    content: [
      { type: "p", text: "React Hooks changed how we write components. Here are the two most essential ones." },
      { type: "h4", text: "useState — Managing State" },
      { type: "code", text: "import { useState } from 'react';\n\nfunction Counter() {\n  const [count, setCount] = useState(0);\n  return (\n    <div>\n      <p>Count: {count}</p>\n      <button onClick={() => setCount(count + 1)}>Increment</button>\n    </div>\n  );\n}" },
      { type: "h4", text: "useEffect — Side Effects" },
      { type: "code", text: "import { useState, useEffect } from 'react';\n\nfunction Users() {\n  const [users, setUsers] = useState([]);\n  useEffect(() => {\n    fetch('/api/users')\n      .then(res => res.json())\n      .then(data => setUsers(data));\n  }, []);\n  return <ul>{users.map(u => <li key={u.id}>{u.name}</li>)}</ul>;\n}" },
      { type: "p", text: "These two hooks cover 80% of what you need in React. Master them first!" }
    ]
  }
];

const blogComments = {};

function renderBlogContent(content) {
  return content.map(block => {
    if (block.type === 'p')   return `<p>${block.text}</p>`;
    if (block.type === 'h4')  return `<h4>${block.text}</h4>`;
    if (block.type === 'code') return `<pre><code>${block.text.replace(/</g,'&lt;').replace(/>/g,'&gt;')}</code></pre>`;
    if (block.type === 'list') return `<ul style="margin:0.5rem 0 0.5rem 1.5rem">${block.items.map(i => `<li>${i}</li>`).join('')}</ul>`;
    return '';
  }).join('');
}

// --- RENDER BLOG ---
const BLOGS_PER_PAGE = 3;
let currentBlogPage = 1;

function renderBlog(cat) {
  cat = cat || 'all';
  const filtered = cat === 'all' ? blogs : blogs.filter(b => b.category === cat);
  const totalPages = Math.ceil(filtered.length / BLOGS_PER_PAGE);
  if (currentBlogPage > totalPages) currentBlogPage = 1;
  const start = (currentBlogPage - 1) * BLOGS_PER_PAGE;
  const paginated = filtered.slice(start, start + BLOGS_PER_PAGE);

  document.getElementById('blog-grid').innerHTML = paginated.map(b => `
    <div class="blog-card">
      <div class="blog-img-placeholder"><i class="fa fa-newspaper"></i></div>
      <div class="blog-card-body">
        <span class="blog-category-badge">${b.category}</span>
        <h3>${b.title}</h3>
        <p>${b.desc}</p>
        <div class="blog-card-footer">
          <span class="blog-date"><i class="fa fa-calendar"></i> ${b.date}</span>
          <button class="btn btn-primary blog-read-btn" onclick="openBlogPost(${b.id})">Read More</button>
        </div>
      </div>
    </div>
  `).join('');

  // Pagination dots
  const dotsEl = document.getElementById('blog-pagination');
  if (totalPages <= 1) { dotsEl.innerHTML = ''; return; }
  dotsEl.innerHTML = Array.from({ length: totalPages }, (_, i) => `
    <button class="blog-dot ${i + 1 === currentBlogPage ? 'active' : ''}" onclick="goToBlogPage(${i + 1}, '${cat}')"></button>
  `).join('');
}

function goToBlogPage(page, cat) {
  currentBlogPage = page;
  renderBlog(cat);
}

function openBlogPost(id) {
  const b = blogs.find(x => x.id === id);
  if (!b) return;
  document.getElementById('blog-modal-body').innerHTML = `
    <span class="blog-category-badge">${b.category}</span>
    <h2 style="margin:0.8rem 0 0.3rem">${b.title}</h2>
    <p style="color:var(--text-muted);font-size:0.85rem;margin-bottom:1.5rem"><i class="fa fa-calendar"></i> ${b.date}</p>
    <div class="blog-full-content">${renderBlogContent(b.content)}</div>
  `;
  const list = document.getElementById('comments-list');
  const comments = blogComments[id] || [];
  list.innerHTML = comments.length
    ? comments.map(c => `<div class="comment-item"><strong>${c.name}</strong><p>${c.text}</p></div>`).join('')
    : '<p style="color:var(--text-muted);font-size:0.9rem">No comments yet. Be the first!</p>';

  document.getElementById('comment-form').onsubmit = function(e) {
    e.preventDefault();
    const name = document.getElementById('comment-name').value.trim();
    const text = document.getElementById('comment-text').value.trim();
    if (!name || !text) return;
    if (!blogComments[id]) blogComments[id] = [];
    blogComments[id].push({ name, text });
    document.getElementById('comment-name').value = '';
    document.getElementById('comment-text').value = '';
    list.innerHTML = blogComments[id].map(c => `<div class="comment-item"><strong>${c.name}</strong><p>${c.text}</p></div>`).join('');
  };
  document.getElementById('blog-modal').classList.remove('hidden');
}

document.getElementById('blog-modal-close').addEventListener('click', () => {
  document.getElementById('blog-modal').classList.add('hidden');
});
document.getElementById('blog-modal').addEventListener('click', e => {
  if (e.target === e.currentTarget) e.currentTarget.classList.add('hidden');
});

document.querySelectorAll('.blog-filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.blog-filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentBlogPage = 1;
    renderBlog(btn.dataset.cat);
  });
});

// --- RENDER PROJECTS ---
let showAllProjects = false;

function renderProjects(filter) {
  filter = filter || "all";
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
          <a href="${p.demo || '#'}" target="_blank" class="demo-link"><i class="fa fa-external-link-alt"></i> Live Demo</a>
        </div>
      </div>
    </div>
  `).join("");

  grid.querySelectorAll(".project-card").forEach(card => {
    card.addEventListener("click", () => openModal(card.dataset.id));
  });

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
  const activeFilter = document.querySelector('.filter-btn.active') ? document.querySelector('.filter-btn.active').dataset.filter : 'all';
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

const skillsObserver = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) animateBars(); });
}, { threshold: 0.2 });
const skillsSection = document.getElementById('skills');
if (skillsSection) skillsObserver.observe(skillsSection);

// --- SKILLS SHOW MORE ---
const skillsToggleBtn = document.getElementById('skills-toggle');
const skillsExtraEl = document.querySelector('.skills-extra');

// --- INIT ---
renderProjects();
renderBlog();
filterSkills('frontend');

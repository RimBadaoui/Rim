// AI Control Room Portfolio - JavaScript

// ===================================
// Global State & Content Data
// ===================================
let logMessageIndex = 0;
let logInterval = null;

// Embedded content data (avoids CORS issues with file:// protocol)
const contentData = {
    "profile": {
        "name": "Rim Ba",
        "headline": "Software Engineering Student | Building Human-Centered AI Solutions",
        "image": "Rim/assets/me.jpeg",
        "statusBadges": [
            "🎯 SEEKING: Summer 2026 SWE Internship",
            "📍 LOCATION: MA / Remote",
            "💡 FOCUS: Human-centered software & AI"
        ],
        "links": {
            "github": "https://github.com/rimba",
            "linkedin": "https://linkedin.com/in/rimba",
            "email": "mailto:contact@rimba.dev"
        }
    },
    "overview": {
        "mission": "Passionate software engineer focused on building AI-powered solutions that prioritize human values, privacy, and accessibility. Currently seeking Summer 2026 SWE internship opportunities to apply my skills in real-world impact.",
        "status": "Computer Science Student",
        "interests": ["Software Engineering", "Artificial Intelligence", "Tech Policy", "Human-Centered Design"]
    },
    "projects": [
        {
            "id": "styles-by-sheyu",
            "title": "Styles By Sheyu",
            "tagline": "Modern hair salon website with online booking",
            "techStack": ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
            "description": "Built a full-featured website for a local hair salon enabling online appointment booking, service browsing, and customer management.",
            "highlights": [
                "Developed responsive front-end with modern UI/UX design",
                "Implemented backend booking system with PHP and MySQL",
                "Integrated payment processing for online deposits",
                "Increased booking efficiency by 40%"
            ],
            "links": {
                "demo": "https://stylesbysheyu.com",
                "code": "https://github.com/rimba/styles-by-sheyu"
            },
            "image": null
        },
        {
            "id": "displaced-documents",
            "title": "Displaced Documents App",
            "tagline": "Digital archive platform for refugee documentation",
            "techStack": ["React", "Node.js", "MongoDB", "AWS S3"],
            "description": "Developed at Fletcher IDEA Lab to help displaced persons securely store and access important documents digitally.",
            "highlights": [
                "Designed secure document storage with encryption",
                "Built user-friendly interface for non-technical users",
                "Implemented multi-language support (English, Spanish, Arabic)",
                "Collaborated with policy researchers on privacy features"
            ],
            "links": {
                "code": "https://github.com/fletcher-idea-lab/displaced-docs"
            },
            "image": null
        }
    ],
    "experience": [
        {
            "role": "Software Development Intern",
            "organization": "Fletcher IDEA Lab",
            "date": "Sep 2025 - Present",
            "description": [
                "Developing web applications addressing global policy challenges",
                "Collaborating with graduate researchers on tech-policy initiatives"
            ]
        },
        {
            "role": "Freelance Web Developer",
            "organization": "Self-Employed",
            "date": "Jan 2024 - Present",
            "description": [
                "Built custom websites for local businesses and organizations",
                "Managed full development lifecycle from design to deployment"
            ]
        },
        {
            "role": "Computer Science Tutor",
            "organization": "Tufts University",
            "date": "Sep 2024 - May 2025",
            "description": [
                "Mentored students in intro programming courses (C++, Python)",
                "Held weekly office hours and code review sessions"
            ]
        }
    ],
    "leadership": [
        {
            "role": "Board Member",
            "organization": "AI Safety Students Association",
            "date": "2024 - Present",
            "description": [
                "Organizing workshops on AI ethics and safety",
                "Leading discussions on responsible AI development",
                "Building community around AI governance"
            ]
        },
        {
            "role": "Youth Program Coordinator",
            "organization": "Community Outreach Initiative",
            "date": "2023 - 2024",
            "description": [
                "Coordinated STEM education programs for underserved youth",
                "Mentored 20+ students in coding and technology",
                "Organized community tech literacy workshops"
            ]
        },
        {
            "role": "Interfaith Ambassador",
            "organization": "Tufts Interfaith Center",
            "date": "2023 - Present",
            "description": [
                "Facilitating dialogue on intersection of technology and ethics",
                "Promoting inclusive community building"
            ]
        }
    ],
    "skills": {
        "programming": ["HTML", "CSS", "JavaScript", "PHP", "SQL", "Node.js", "C++", "Python", "React"],
        "concepts": ["Web Development", "Database Design", "RESTful APIs", "Responsive Design", "Version Control (Git)"],
        "languages": ["English (Native)", "Spanish (Fluent)", "Arabic (Conversational)"],
        "tools": ["VS Code", "GitHub", "Figma", "MongoDB", "MySQL", "AWS"]
    },
    "systemLog": [
        "Initializing portfolio interface...",
        "Loading neural network modules...",
        "✓ Design system loaded successfully",
        "✓ Navigation mesh established",
        "Scanning project database...",
        "✓ Found 2 active projects",
        "Loading experience timeline...",
        "✓ Experience data synchronized",
        "Analyzing skill matrix...",
        "✓ Technical proficiencies mapped",
        "Security protocols: Human-centered design enabled",
        "Privacy framework: Zero-knowledge principles active",
        "AI ethics module: Operational",
        "✓ All systems nominal",
        "Status: Ready for internship opportunities",
        "Recommendation: Explore projects section →",
        "Tip: Check out leadership initiatives",
        "Contact systems: Online and responsive",
        "GitHub repositories: Public and documented",
        "Resume: Available for download",
        "System uptime: 100% commitment to excellence"
    ]
};

// ===================================
// Initialize Application
// ===================================
document.addEventListener('DOMContentLoaded', () => {
    try {
        // Initialize all sections
        initializeProfile();
        initializeOverview();
        initializeProjects();
        initializeExperience();
        initializeLeadership();
        initializeSkills();
        initializeContact();
        initializeSystemLog();

        // Setup interactions
        setupNavigation();
        setupScrollAnimation();
        setupMobileMenu();

        console.log('✓ Portfolio initialized successfully');
    } catch (error) {
        console.error('Error loading portfolio:', error);
    }
});

// ===================================
// Profile Section
// ===================================
function initializeProfile() {
    const { profile } = contentData;

    // Update profile information
    document.getElementById('profileName').textContent = profile.name;
    document.getElementById('profileHeadline').textContent = profile.headline;

    // Create status badges
    const badgesContainer = document.getElementById('statusBadges');
    profile.statusBadges.forEach(badge => {
        const badgeEl = document.createElement('div');
        badgeEl.className = 'status-badge';
        badgeEl.textContent = badge;
        badgesContainer.appendChild(badgeEl);
    });

    // Create social links
    const socialContainer = document.getElementById('socialLinks');
    const socialIcons = {
        github: '💻',
        linkedin: '💼',
        email: '✉️'
    };

    Object.entries(profile.links).forEach(([platform, url]) => {
        const link = document.createElement('a');
        link.href = url;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.setAttribute('aria-label', `Visit ${platform} profile`);
        link.textContent = socialIcons[platform] || '🔗';
        socialContainer.appendChild(link);
    });
}

// ===================================
// Overview Section
// ===================================
function initializeOverview() {
    const { overview } = contentData;
    const container = document.getElementById('overviewContent');

    container.innerHTML = `
        <p style="font-size: 1.125rem; line-height: 1.8; margin-bottom: 1.5rem;">
            ${overview.mission}
        </p>
        <div style="display: flex; flex-wrap: wrap; gap: 1rem; margin-top: 1.5rem;">
            <div style="flex: 1; min-width: 200px; padding: 1rem; background: rgba(255,255,255,0.02); border-radius: 0.5rem; border: 1px solid rgba(255,255,255,0.05);">
                <div style="font-size: 0.75rem; color: var(--color-text-dim); text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 0.5rem;">Current Status</div>
                <div style="font-weight: 600; color: var(--color-accent-cyan);">${overview.status}</div>
            </div>
            <div style="flex: 1; min-width: 200px; padding: 1rem; background: rgba(255,255,255,0.02); border-radius: 0.5rem; border: 1px solid rgba(255,255,255,0.05);">
                <div style="font-size: 0.75rem; color: var(--color-text-dim); text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 0.5rem;">Interests</div>
                <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
                    ${overview.interests.map(interest =>
        `<span style="background: rgba(168, 85, 247, 0.1); color: var(--color-accent-purple); padding: 0.25rem 0.75rem; border-radius: 0.375rem; font-size: 0.875rem; border: 1px solid rgba(168, 85, 247, 0.2);">${interest}</span>`
    ).join('')}
                </div>
            </div>
        </div>
    `;
}

// ===================================
// Projects Section
// ===================================
function initializeProjects() {
    const { projects } = contentData;
    const container = document.getElementById('projectsGrid');

    projects.forEach((project, index) => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.style.animationDelay = `${index * 0.1}s`;

        projectCard.innerHTML = `
            <h3 class="project-title">${project.title}</h3>
            <p class="project-tagline">${project.tagline}</p>
            
            <div class="tech-stack">
                ${project.techStack.map(tech =>
            `<span class="tech-chip">${tech}</span>`
        ).join('')}
            </div>
            
            <div class="project-description">
                <p>${project.description}</p>
                <ul>
                    ${project.highlights.map(highlight =>
            `<li>${highlight}</li>`
        ).join('')}
                </ul>
            </div>
            
            <div class="project-actions">
                ${project.links.demo ?
                `<a href="${project.links.demo}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
                        🌐 Live Demo
                    </a>` : ''}
                ${project.links.code ?
                `<a href="${project.links.code}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">
                        💻 View Code
                    </a>` : ''}
            </div>
        `;

        container.appendChild(projectCard);
    });
}

// ===================================
// Experience Section
// ===================================
function initializeExperience() {
    const { experience } = contentData;
    const container = document.getElementById('experienceTimeline');

    experience.forEach((exp, index) => {
        const expItem = document.createElement('div');
        expItem.className = 'timeline-item';
        expItem.style.animationDelay = `${index * 0.1}s`;

        expItem.innerHTML = `
            <div class="experience-role">${exp.role}</div>
            <div class="experience-org">${exp.organization}</div>
            <div class="experience-date">${exp.date}</div>
            <div class="experience-description">
                <ul>
                    ${exp.description.map(item => `<li>${item}</li>`).join('')}
                </ul>
            </div>
        `;

        container.appendChild(expItem);
    });
}

// ===================================
// Leadership Section
// ===================================
function initializeLeadership() {
    const { leadership } = contentData;
    const container = document.getElementById('leadershipTimeline');

    leadership.forEach((item, index) => {
        const leadershipItem = document.createElement('div');
        leadershipItem.className = 'timeline-item';
        leadershipItem.style.animationDelay = `${index * 0.1}s`;

        leadershipItem.innerHTML = `
            <div class="experience-role">${item.role}</div>
            <div class="experience-org">${item.organization}</div>
            <div class="experience-date">${item.date}</div>
            <div class="experience-description">
                <ul>
                    ${item.description.map(desc => `<li>${desc}</li>`).join('')}
                </ul>
            </div>
        `;

        container.appendChild(leadershipItem);
    });
}

// ===================================
// Skills Section
// ===================================
function initializeSkills() {
    const { skills } = contentData;
    const container = document.getElementById('skillsGrid');

    const categoryLabels = {
        programming: '💻 Programming Languages',
        concepts: '🎯 Technical Concepts',
        tools: '🛠️ Tools & Technologies',
        languages: '🌍 Languages'
    };

    Object.entries(skills).forEach(([category, skillList]) => {
        const categoryDiv = document.createElement('div');
        categoryDiv.className = 'skill-category';

        categoryDiv.innerHTML = `
            <div class="skill-category-title">${categoryLabels[category] || category}</div>
            <div class="skill-tags">
                ${skillList.map(skill =>
            `<span class="skill-tag">${skill}</span>`
        ).join('')}
            </div>
        `;

        container.appendChild(categoryDiv);
    });
}

// ===================================
// Contact Section
// ===================================
function initializeContact() {
    const { profile } = contentData;
    const container = document.getElementById('contactList');

    const contactItems = [
        {
            icon: '✉️',
            label: 'Email',
            value: profile.links.email.replace('mailto:', ''),
            link: profile.links.email,
            action: 'copy'
        },
        {
            icon: '💼',
            label: 'LinkedIn',
            value: 'Connect on LinkedIn',
            link: profile.links.linkedin,
            action: 'link'
        },
        {
            icon: '💻',
            label: 'GitHub',
            value: 'View Repositories',
            link: profile.links.github,
            action: 'link'
        },
        {
            icon: '📄',
            label: 'Resume',
            value: 'Download PDF',
            link: '#',
            action: 'download'
        }
    ];

    contactItems.forEach(item => {
        const contactItem = document.createElement('div');
        contactItem.className = 'contact-item';

        if (item.action === 'copy') {
            contactItem.style.cursor = 'pointer';
            contactItem.onclick = () => copyToClipboard(item.value);
        }

        contactItem.innerHTML = `
            <div class="contact-icon">${item.icon}</div>
            <div class="contact-details">
                <div class="contact-label">${item.label}</div>
                <div class="contact-value">${item.value}</div>
            </div>
            ${item.action === 'link' ?
                `<a href="${item.link}" target="_blank" rel="noopener noreferrer" style="margin-left: auto; color: var(--color-accent-cyan);">→</a>` : ''}
        `;

        container.appendChild(contactItem);
    });
}

// ===================================
// System Log Animation
// ===================================
function initializeSystemLog() {
    const { systemLog } = contentData;
    const container = document.getElementById('systemLog');

    // Start animated log messages
    logInterval = setInterval(() => {
        if (logMessageIndex < systemLog.length) {
            const logLine = document.createElement('div');
            logLine.className = 'log-line';

            const timestamp = new Date().toLocaleTimeString('en-US', {
                hour12: false,
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
            });

            logLine.innerHTML = `<span class="log-timestamp">[${timestamp}]</span>${systemLog[logMessageIndex]}`;
            container.appendChild(logLine);

            // Auto-scroll to bottom
            container.scrollTop = container.scrollHeight;

            logMessageIndex++;
        } else {
            // Loop back to start after a pause
            setTimeout(() => {
                container.innerHTML = '';
                logMessageIndex = 0;
            }, 5000);
        }
    }, 1500); // New message every 1.5 seconds
}

// ===================================
// Navigation
// ===================================
function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                // Update active state
                navLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');

                // Smooth scroll to section
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });

                // Close mobile menu if open
                if (window.innerWidth <= 768) {
                    document.getElementById('sidebar').classList.remove('open');
                }
            }
        });
    });

    // Update active nav on scroll
    window.addEventListener('scroll', updateActiveNav);
}

function updateActiveNav() {
    const sections = document.querySelectorAll('.panel');
    const navLinks = document.querySelectorAll('.nav-link');

    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.pageYOffset >= sectionTop - 200) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

// ===================================
// Scroll Animations
// ===================================
function setupScrollAnimation() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    // Observe all panels
    document.querySelectorAll('.panel').forEach(panel => {
        observer.observe(panel);
    });
}

// ===================================
// Mobile Menu
// ===================================
function setupMobileMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const sidebar = document.getElementById('sidebar');

    menuToggle.addEventListener('click', () => {
        sidebar.classList.toggle('open');
    });

    // Close sidebar when clicking outside on mobile
    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
            if (!sidebar.contains(e.target) && !menuToggle.contains(e.target)) {
                sidebar.classList.remove('open');
            }
        }
    });
}

// ===================================
// Utility Functions
// ===================================
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        // Show feedback
        const feedback = document.createElement('div');
        feedback.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: var(--color-accent-cyan);
            color: var(--color-bg-primary);
            padding: 1rem 2rem;
            border-radius: 0.5rem;
            font-weight: 600;
            z-index: 1000;
            animation: fadeInOut 2s ease-in-out;
        `;
        feedback.textContent = '✓ Email copied to clipboard!';
        document.body.appendChild(feedback);

        setTimeout(() => {
            feedback.remove();
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy:', err);
    });
}

// Add fade in/out animation for clipboard feedback
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInOut {
        0%, 100% { opacity: 0; }
        10%, 90% { opacity: 1; }
    }
`;
document.head.appendChild(style);

// Respect reduced motion preference
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('*').forEach(el => {
        el.style.animation = 'none';
        el.style.transition = 'none';
    });
}

// Cleanup on page unload
window.addEventListener('beforeunload', () => {
    if (logInterval) {
        clearInterval(logInterval);
    }
});

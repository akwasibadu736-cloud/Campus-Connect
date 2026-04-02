// Navigation & Dark Mode Logic
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');
const darkModeBtn = document.getElementById('darkModeBtn');

menuToggle.addEventListener('click', () => navMenu.classList.toggle('active'));

darkModeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    const isDark = document.body.classList.contains('dark-theme');
    darkModeBtn.textContent = isDark ? '☀️' : '🌙';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// Load saved theme
if(localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-theme');
    darkModeBtn.textContent = '☀️';
}

function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

function addEvent() {
    const list = document.getElementById('eventList');
    const name = prompt("Event Name and Date:");
    if(name) {
        const li = document.createElement('li');
        li.innerHTML = <i class='bx bx-calendar-event'></i> ${name};
        list.appendChild(li);
    }
}

// Form Alert
document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    document.getElementById('formMessage').innerText = "Message sent successfully!";
    e.target.reset();
});

!function addEvent() {
    const eventGrid = document.getElementById('eventList');
    const eventName = prompt("Enter Event Name:");
    const eventDate = prompt("Enter Date (e.g., 20 MAY):");
    
    if (eventName && eventDate) {
        // Split date into day and month
        const dateParts = eventDate.split(" ");
        const day = dateParts[0] || "00";
        const month = dateParts[1] || "DATE";

        const card = document.createElement('div');
        card.className = 'event-card';
        card.innerHTML = `
            <div class="event-date">
                <span class="day">${day}</span>
                <span class="month">${month}</span>
            </div>
            <div class="event-info">
                <h3>${eventName}</h3>
                <p><i class='bx bx-time'></i> 10:00 AM — Campus Venue</p>
                <p>New event added to the campus calendar.</p>
            </div>
        `;
        eventGrid.appendChild(card);
    }
}
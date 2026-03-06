const logs = [
    "> Analyzing input stream...",
    "> Generating high-fidelity modules...",
    "> Error correction level set to HIGH.",
    "> Overlaying logo artifact...",
    "> Exporting PNG to system cache.",
    "> Batch protocol initiated.",
    "> 500 artifacts fabricated in 1.2s.",
    "> Security handshake: SUCCESS.",
    "> J.A.R.V.I.S. core nominal.",
    "> WiFi protocol formatted.",
    "> vCard encryption active.",
    "> Stark Industries servers: CONNECTED."
];

const logBody = document.getElementById('log-body');

function addLog() {
    const log = logs[Math.floor(Math.random() * logs.length)];
    const div = document.createElement('div');
    div.textContent = log;
    logBody.appendChild(div);
    
    if (logBody.children.length > 10) {
        logBody.removeChild(logBody.firstChild);
    }
}

// Add logs every 2 seconds
setInterval(addLog, 2000);

// Comms Terminal Logic
const commsForm = document.getElementById('comms-form');
const feedback = document.getElementById('terminal-feedback');

if (commsForm) {
    commsForm.addEventListener('submit', function(e) {
        e.preventDefault();
        feedback.innerHTML = "> Establishing uplink...<br>> Encrypting data stream...<br>> Transmitting...";
        
        setTimeout(() => {
            feedback.innerHTML = "> TRANSMISSION SUCCESSFUL.<br>> PROJECT ARCHITECT WILL REVIEW DATA SOON.";
            commsForm.reset();
        }, 2000);
    });
}

// Smooth scroll for nav links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

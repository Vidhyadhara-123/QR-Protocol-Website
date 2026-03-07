// --- HUD ANIMATION LOGIC ---
const logs = [
    "> Analyzing input stream...",
    "> Generating high-fidelity modules...",
    "> Error correction level set to HIGH.",
    "> Batch protocol initiated.",
    "> Security handshake: SUCCESS.",
    "> J.A.R.V.I.S. core nominal.",
    "> WiFi protocol formatted.",
    "> vCard encryption active."
];

const logBody = document.getElementById('log-body');
function addLog() {
    if (!logBody) return;
    const log = logs[Math.floor(Math.random() * logs.length)];
    const div = document.createElement('div');
    div.textContent = log;
    logBody.appendChild(div);
    if (logBody.children.length > 10) logBody.removeChild(logBody.firstChild);
}
setInterval(addLog, 2000);

// --- INTELLIGENT WEB PROTOCOL LOGIC ---
const webInput = document.getElementById('web-input');
const qrContainer = document.getElementById('qrcode-canvas');
const btnDownload = document.getElementById('download-web-qr');
const btnClearWeb = document.getElementById('clear-web-input');
const webFg = document.getElementById('web-fg');
const webBg = document.getElementById('web-bg');
const webEc = document.getElementById('web-ec');
const protoBtns = document.querySelectorAll('.proto-btn');

let currentProtocol = 'url';
let qrcode = null;

const templates = {
    url: "https://",
    text: "Type your text stream here...",
    wifi: "WIFI:S:MyNetwork;T:WPA;P:MyPassword;;",
    email: "mailto:recipient@example.com?subject=Hello&body=Message",
    vcard: "BEGIN:VCARD\nVERSION:3.0\nFN:Tony Stark\nTEL:+15551234567\nEND:VCARD"
};

function updateWebQR() {
    const text = webInput.value.trim() || templates[currentProtocol];
    
    // Clear previous
    qrContainer.innerHTML = '';
    
    // Create new with current settings
    qrcode = new QRCode(qrContainer, {
        text: text,
        width: 200,
        height: 200,
        colorDark: webFg.value,
        colorLight: webBg.value,
        correctLevel: QRCode.CorrectLevel[webEc.value]
    });
}

// Handle Protocol Switching
protoBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Update UI
        protoBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        // Update State
        currentProtocol = btn.getAttribute('data-type');
        webInput.value = templates[currentProtocol];
        
        updateWebQR();
    });
});

// Listeners
webInput.addEventListener('input', updateWebQR);
webFg.addEventListener('input', updateWebQR);
webBg.addEventListener('input', updateWebQR);
webEc.addEventListener('change', updateWebQR);

// Actions
btnDownload.addEventListener('click', function() {
    const img = qrContainer.querySelector('img');
    if (img) {
        const link = document.createElement('a');
        link.download = `jarvis_${currentProtocol}_artifact.png`;
        link.href = img.src;
        link.click();
    }
});

btnClearWeb.addEventListener('click', function() {
    webInput.value = templates[currentProtocol];
    webFg.value = '#00f0ff';
    webBg.value = '#050510';
    webEc.value = 'H';
    updateWebQR();
});

// Initial build
updateWebQR();

// --- COMMS TERMINAL LOGIC ---
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

// Smooth scroll
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
});

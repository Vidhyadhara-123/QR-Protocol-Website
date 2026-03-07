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

// Web QR Generator Logic
const webInput = document.getElementById('web-input');
const qrContainer = document.getElementById('qrcode-canvas');
const btnDownload = document.getElementById('download-web-qr');
const btnClearWeb = document.getElementById('clear-web-input');
const webFg = document.getElementById('web-fg');
const webBg = document.getElementById('web-bg');
const webEc = document.getElementById('web-ec');

let qrcode = null;

function updateWebQR() {
    const text = webInput.value.trim() || "https://vidhyadhara-123.github.io/QR-Protocol-Website/";
    
    // Clear previous
    qrContainer.innerHTML = '';
    
    // Create new with current settings
    qrcode = new QRCode(qrContainer, {
        text: text,
        width: 256,
        height: 256,
        colorDark: webFg.value,
        colorLight: webBg.value,
        correctLevel: QRCode.CorrectLevel[webEc.value]
    });
}

// Initial build
updateWebQR();

// Listeners for all controls
webInput.addEventListener('input', updateWebQR);
webFg.addEventListener('input', updateWebQR);
webBg.addEventListener('input', updateWebQR);
webEc.addEventListener('change', updateWebQR);

// Download Function
btnDownload.addEventListener('click', function() {
    const img = qrContainer.querySelector('img');
    if (img) {
        const link = document.createElement('a');
        link.download = 'jarvis_qr_artifact.png';
        link.href = img.src;
        link.click();
    }
});

// Clear Function
btnClearWeb.addEventListener('click', function() {
    webInput.value = '';
    webFg.value = '#000000';
    webBg.value = '#ffffff';
    webEc.value = 'H';
    updateWebQR();
});

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

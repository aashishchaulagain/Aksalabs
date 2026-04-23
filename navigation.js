
const input = document.querySelector('#terminal-input');
const terminal = document.querySelector('.terminal');
const terminalHead = document.querySelector('.terminal-head');
const output = document.querySelector('.terminal-line');
const validCommands = ['clear', 'about', 'help', 'contact']; 

let lastscroll = 0; 
const threshold = 80;
const nav = document.querySelector('nav');
const history = document.querySelector('.terminal-history'); 

window.addEventListener("scroll", () => {
    let currentscroll = window.pageYOffset;
    
    if (currentscroll <= threshold) {
        nav.classList.remove('hidden');
    } else if (currentscroll > lastscroll) {
        nav.classList.add('hidden');
    }
    lastscroll = currentscroll;
});

terminal.addEventListener('click', () => {
    input.focus();
});

terminalHead.addEventListener('click', (e) => {
    e.stopPropagation();
});

input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const command = input.value.toLowerCase().trim();
        
        if (validCommands.includes(command)) {
            if (command === 'clear') {
                output.innerHTML = '';
            } else {
                output.innerHTML += `<div>> ${command}</div>`;
                if (command === 'about') {
                    output.innerHTML += `<div>AlsaLabs is a freelancing company...</div>`;
                } else if (command === 'help') {
                    output.innerHTML += `<div>Commands: clear, about, help, contact</div>`;
                } else if (command === 'contact') {
                    output.innerHTML += `<div>Phone: +911 9876543210</div><div>Email: 2kNl8@example.com</div>`;
                }
            }
        } else if (!validCommands.includes(command)) {
            output.innerHTML += `<div style="color: red;">>${command}</div>`;
            output.innerHTML += `<div style="color: red;">Command not found</div>`;
        }
        
        input.value = '';
    }
});

const Progressdata = document.querySelector('#status');
const backgroundloader = document.querySelector('.progress-track');
function loader() {
    let property = 0;
    const interval = setInterval(() => {
            property += 1;
            if (Progressdata) {
                Progressdata.textContent = property + '%';
            }
            if (property >= 100) {
                clearInterval(interval);
                setTimeout(() => {
                    backgroundloader.style.opacity = 0;
                    backgroundloader.style.transition = 'opacity 0.5s ease';
                    setTimeout(() => {
                       backgroundloader.style.display = 'none'; 
                    }, 500);
            }, 500);
        }
    }, 10);
}
loader();   

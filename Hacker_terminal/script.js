

let messages = [
    { element: document.querySelector('#one'), text: 'Initialized Hacking...' },
    { element: document.querySelector('#two'), text: 'Reading your Files...' },
    { element: document.querySelector('#three'), text: 'Password Files Detected...' },
    { element: document.querySelector('#four'), text: 'Sending all passwords and personal files to server...' },
    { element: document.querySelector('#five'), text: 'Cleaning up...' }
];

let currentIndex = 0;

setInterval(() => {
    // Reset styles for all elements
    messages.forEach(message => {
        message.element.style.backgroundColor = 'transparent';
        message.element.style.color = '#000';
        message.element.style.textDecoration = 'none'; // Reset text decoration
    });

    // Set styles for the current element with blinking effect
    let currentMessage = messages[currentIndex];
    document.body.style.backgroundColor = 'green';
    currentMessage.element.innerHTML = currentMessage.text;
    currentMessage.element.style.color = '#fff';
    currentMessage.element.style.textDecoration = 'underline'; // Add text decoration (underline) for blinking effect

    // Move to the next message or loop back to the first one
    currentIndex = (currentIndex + 1) % messages.length;
}, 2000); // Adjust the interval as needed

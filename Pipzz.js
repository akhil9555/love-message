// Create a new div element for the message container
const messageDiv = document.createElement('div');
messageDiv.className = 'message';

// Create the heading element
const heading = document.createElement('h1');
heading.textContent = 'Hey Neemus 🌙';

// Create the paragraph elements
const paragraph1 = document.createElement('p');
paragraph1.textContent = 'You are the most precious gift life has given me. Talking to you is the highlight of my days, and I cherish every conversation we share. Though we haven\'t met yet, I already feel a deep connection, and I can\'t wait for the moment we see each other.';

const paragraph2 = document.createElement('p');
paragraph2.textContent = 'No matter what challenges come our way, I want us to face them hand in hand, growing stronger together. One day, I dream of holding your hand forever, waking up beside you every morning, and loving you endlessly until my last breath.';

const paragraph3 = document.createElement('p');
paragraph3.textContent = 'Love you always, and Happy Valentine\'s Day! ❤️';

// Append the heading and paragraphs to the message container
messageDiv.appendChild(heading);
messageDiv.appendChild(paragraph1);
messageDiv.appendChild(paragraph2);
messageDiv.appendChild(paragraph3);

// Append the message container to the body of the document
document.body.appendChild(messageDiv);

// Apply styles dynamically
document.body.style.display = 'flex';
document.body.style.justifyContent = 'center';
document.body.style.alignItems = 'center';
document.body.style.height = '100vh';
document.body.style.backgroundColor = '#ffcccc';
document.body.style.fontFamily = 'Arial, sans-serif';
document.body.style.fontSize = '24px';
document.body.style.color = 'red';
document.body.style.textAlign = 'center';
document.body.style.padding = '20px';

messageDiv.style.maxWidth = '600px';

// Background Music Logic
const backgroundMusic = document.getElementById('background-music');

// Start music after user interaction (e.g., click)
document.addEventListener('click', () => {
    backgroundMusic.play();
});

// Optional: Hide the audio element
backgroundMusic.style.display = 'none';
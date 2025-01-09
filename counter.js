let counter = 0; 

function count() {
    counter++;
    document.querySelector('h1').innerHTML = counter;

    if (counter % 10 === 0) {
        alert(`Count is now ${counter}`);
    }
}

// Ensure that the DOM is fully loaded before attaching the event
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('button').onclick = count;

    setinterval(count, 1000);
});
// Example of using Browser API in JavaScript

// Accessing the Document Object Model (DOM) API to manipulate HTML elements
const button = document.querySelector('button'); // Selects the first <button> element

// Using the Fetch API to make network requests
function fetchData() {
    fetch('https://api.example.com/data') // Replace with your API endpoint
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error fetching data:', error));
}

// Listening for a click event on the button using the EventListener API
button.addEventListener('click', () => {
    console.log('Button was clicked!');
    fetchData(); // Call fetchData function when button is clicked
});

// Example of using both Local Storage and Session Storage

// Using the Web Storage API to store data locally in Local Storage
localStorage.setItem('localKey', 'localValue'); // Stores a value by key in local storage
console.log(localStorage.getItem('localKey')); // Retrieves the value by key from local storage

// Using the Web Storage API to store data temporarily in Session Storage
sessionStorage.setItem('sessionKey', 'sessionValue'); // Stores a value by key in session storage
console.log(sessionStorage.getItem('sessionKey')); // Retrieves the value by key from session storage

// Using the Cache API to cache assets for offline use
if ('caches' in window) {
    caches.open('my-site-cache-v1').then(function(cache) {
        cache.addAll([
            '/',
            '/index.html',
            '/index.js',
            '/styles.css'
        ]).then(function() {
            console.log('Assets added to cache');
        }).catch(function(error) {
            console.error('Failed to add assets to cache:', error);
        });
    });
}

// Function to set a cookie
function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

// Function to get a cookie
function getCookie(name) {
    let nameEQ = name + "=";
    let ca = document.cookie.split(';');
    for(let i=0;i < ca.length;i++) {
        let c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

// Function to check if a cookie exists
function checkCookie() {
    let user = getCookie("username");
    if (user != "") {
        alert("Welcome again " + user);
    } else {
        user = prompt("Please enter your name:", "");
        if (user != "" && user != null) {
            setCookie("username", user, 365);
        }
    }
}

// Example usage
setCookie("testCookie", "Hello World", 7);
console.log(getCookie("testCookie"));
checkCookie();





// Using the Geolocation API to get the user's current position
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        console.log("Geolocation is not supported by this browser.");
    }
}

function showPosition(position) {
    console.log("Latitude: " + position.coords.latitude + 
    ", Longitude: " + position.coords.longitude);
}

function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            console.log("User denied the request for Geolocation.");
            break;
        case error.POSITION_UNAVAILABLE:
            console.log("Location information is unavailable.");
            break;
        case error.TIMEOUT:
            console.log("The request to get user location timed out.");
            break;
        case error.UNKNOWN_ERROR:
            console.log("An unknown error occurred.");
            break;
    }
}

// Call getLocation function to get the current position
getLocation();

function accessCamera() {
    // Check if the browser supports the getUserMedia API
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        // Request access to the camera
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(function(stream) {
                // Stream the video to a video element
                var video = document.createElement('video');
                video.srcObject = stream;
                video.play();
                // Optionally, append the video element to the DOM to display the video
                document.body.appendChild(video);
            })
            .catch(function(error) {
                console.error("Error accessing the camera:", error);
            });
    } else {
        console.log("getUserMedia not supported by this browser.");
    }
}

// Call accessCamera function to access the camera
accessCamera();


function initializeCanvas() {
    // Create a canvas element
    var canvas = document.createElement('canvas');
    // Set canvas width and height
    canvas.width = 400;
    canvas.height = 400;
    // Append canvas to the body of the document
    document.body.appendChild(canvas);
    // Get the drawing context of the canvas
    var ctx = canvas.getContext('2d');
    // Set some properties for the drawing
    ctx.fillStyle = 'green';
    ctx.fillRect(10, 10, 150, 150); // Draw a rectangle
}

// Call initializeCanvas function to setup and display the canvas
initializeCanvas();

if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('./service-worker.js').then(function(registration) {
            // Registration was successful
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }, function(err) {
            // registration failed :(
            console.log('ServiceWorker registration failed: ', err);
        });
    });
}

if (window.Worker) {
    const myWorker = new Worker('worker.js');

    myWorker.onmessage = function(e) {
        console.log('Message received from worker', e.data);
    };

    myWorker.postMessage('Hello');
}

function sendNotification(message) {
    // Check if the browser supports notifications
    if (!("Notification" in window)) {
        console.log("This browser does not support desktop notification");
    }
    // Check whether notification permissions have already been granted
    else if (Notification.permission === "granted") {
        // If it's okay let's send a notification
        var notification = new Notification(message);
    }
    // Otherwise, we need to ask the user for permission
    else if (Notification.permission !== "denied") {
        Notification.requestPermission().then(function (permission) {
            // If the user accepts, let's send a notification
            if (permission === "granted") {
                var notification = new Notification(message);
            }
        });
    }
}

// Example usage:
sendNotification("Hello! This is a notification.");

// Simple WebRTC example
// navigator.mediaDevices.getUserMedia({ video: true, audio: true })
//   .then(stream => {
//     const video = document.createElement('video');
//     video.srcObject = stream;
//     video.autoplay = true;
//     document.body.appendChild(video);
//   })
//   .catch(err => {
//     console.error('Error accessing media devices.', err);
//   });


// // for (let no = 0; no <=100; no++){
// //     const number = no * 2
// //     console.log("number "+number)
// // }


// // const cars = "ONXP"

// // for (let car of cars){
// //     console.log(car)
// // }


// // if (color == "merah") {
// //     console.log("merah 1")
// // } else if (color == "merah") {
// //     console.log("merah  2")
// // } else if (color == "kuning") {
// //     console.log("kuning")
// // } else if (color == "pink") {
// //     console.log("pink")
// // } else if (color == "merah") {
// //     console.log("merah")
// // } else {
// //     console.log("salah")
// // }


// // const color = 11

// // switch (color) {
// //     case 11:
// //         console.log("merah")
// //         break;

// //     case 10:
// //         console.log("kuning")
// //         break;

// //     case "biru":
// //         console.log("biru")
// //         break;

// //     default:
// //         console.log("tidak ada yang sesuai")
// //         break;
// // }

// let title = document.title

// // console.log(title)

// title = document.title = "onxp 🔥"
// // console.log(title)

// const body = document.body;

// body.append("testt 123")

// const headerText = document.createElement('h1')
// headerText.textContent = "ini h1"

// body.append(headerText)

// const text = document.createElement('a')
// text.innerText = "ke halaman google"
// text.setAttribute('href', "https://google.com")
// text.setAttribute('id', "1")
// text.classList.add('color-red')
// text.setAttribute('style', 'font-size: 20px;')

// body.append(text)


// // const textONXP = document.getElementById("text-header")
// // textONXP.addEventListener('click', function() {
// //     textONXP.textContent = "MANTAP!!"
// // })
// // textONXP.textContent = "ONXP MANTAP"
textONXP





.classList




.add('color-red');

// function clickH1(text) {
//     text.textContent = "halo"
// }

function fetchData() {
    fetch('https://pokeapi.co/api/v2/pokemon/ditto')
.then(response => response.json())
        .then(data => {
            console.log(data.abilities)
        })
        .catch(error => console.error('Error fetching data:', error));
}

// fetchData()


// // Using the Geolocation API to get the user's current position
// function getLocation() {
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(showPosition, showError);
//     } else {
//         console.log("Geolocation is not supported by this browser.");
//     }
// }

// function showPosition(position) {
//     console.log("Latitude: " + position.coords.latitude + 
//     ", Longitude: " + position.coords.longitude);
// }

// function showError(error) {
//     switch(error.code) {
//         case error.PERMISSION_DENIED:
//             console.log("User denied the request for Geolocation.");
//             break;
//         case error.POSITION_UNAVAILABLE:
//             console.log("Location information is unavailable.");
//             break;
//         case error.TIMEOUT:
//             console.log("The request to get user location timed out.");
//             break;
//         case error.UNKNOWN_ERROR:
//             console.log("An unknown error occurred.");
//             break;
//     }
// }

// getLocation()


// function accessCamera() {
//     // Check if the browser supports the getUserMedia API
//     if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
//         // Request access to the camera
//         navigator.mediaDevices.getUserMedia({ video: true })
//             .then(function(stream) {
//                 // Stream the video to a video element
//                 var video = document.createElement('video');
//                 video.srcObject = stream;
//                 video.play();
//                 // Optionally, append the video element to the DOM to display the video
//                 document.body.appendChild(video);
//             })
//             .catch(function(error) {
//                 console.error("Error accessing the camera:", error);
//             });
//     } else {
//         console.log("getUserMedia not supported by this browser.");
//     }
// }

// // Call accessCamera function to access the camera
// accessCamera();



// function sendNotification(message) {
//     // Check if the browser supports notifications
//     if (!("Notification" in window)) {
//         console.log("This browser does not support desktop notification");
//     }
//     // Check whether notification permissions have already been granted
//     else if (Notification.permission === "granted") {
//         // If it's okay let's send a notification
//         var notification = new Notification(message);
//     }
//     // Otherwise, we need to ask the user for permission
//     else if (Notification.permission !== "denied") {
//         Notification.requestPermission().then(function (permission) {
//             // If the user accepts, let's send a notification
//             if (permission === "granted") {
//                 var notification = new Notification(message);
//             }
//         });
//     }
// }

// // Example usage:
// sendNotification("Hello! This is a notification.");
// sendNotification("Hello! This is a notification1.");
// sendNotification("Hello! This is a notification2.");
// sendNotification("Hello! This is a notification3.");
// sendNotification("Hello! This is a notification4.");
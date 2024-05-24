document.getElementById("loginForm").addEventListener("submit",async function(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;


    const loggedData = await login(username, password)
    console.log(loggedData)

    const photo = await profilePicture(loggedData.token)
    console.log(photo)

    dataUser(function (dataUser) {
        console.log(dataUser)
    })

});

function login(username, password){
    console.log('login di process')
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            console.log('login selesai')
            resolve({
                    token: "AJSBDIU@12312",
                    username: username
            })
        }, 2000);
    })
}

function profilePicture(token){
    console.log('profilePicture di process')
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            console.log('profilePicture selesai')
            if (!token) {
                reject("perlu token")
            }
            resolve({
                    photo : "image.png"
            })
        }, 2000);
    })
}

function dataUser(callback){
    setTimeout(() => {
        const dataUser = {
            nama: "onxp",
            email: "onxp@gmail.com",
            alamat: "jakarta"
        }

        console.log("data")
        callback(callback)
    }, 2000);
}

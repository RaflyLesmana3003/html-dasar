
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    getDataFromServer(username, (x)=>{
        console.log(x)
    })
});

function getDataFromServer(username, callback) {
    setTimeout(() => {
        const userData = {
            username: username,
            email: "example@example.com",
            age: 30
        };
        callback(userData);
    }, 2000);
}

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    getDataFromServer(username)
        .then(userData => {
            console.log(userData);
        })
        .catch(error => {
            console.error(error);
        });
});

function getDataFromServer(username) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const userData = {
                username: username,
                email: "example@example.com",
                age: 30
            };
            resolve(userData);
        }, 2000);
    });
}

document.getElementById("loginForm").addEventListener("submit", async function(event) {
    event.preventDefault(); // Prevent form submission

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    try {
        const userData = await getDataFromServer(username);
        console.log(userData);
    } catch (error) {
        console.error(error);
    }
});

function getDataFromServer(username) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const userData = {
                username: username,
                email: "example@example.com",
                age: 30
            };
            resolve(userData);
        }, 2000);
    });
}

// ---------------------------------------------------------------------------------


const form = document.getElementById('barangForm');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const id = document.getElementById('id').value;
    const nama = document.getElementById('nama').value;
    const harga = document.getElementById('harga').value;

    const transaction = db.transaction(['barang'], 'readwrite');
    const objectStore = transaction.objectStore('barang');
    const request = objectStore.put({ id, nama, harga });

    request.onsuccess = () => {
        form.reset();
        displayData();
    };

    request.onerror = (event) => {
        console.error('Transaction error:', event.target.errorCode);
    };
});

function displayData() {
    const barangList = document.getElementById('barangList');
    barangList.innerHTML = '';

    const transaction = db.transaction(['barang'], 'readonly');
    const objectStore = transaction.objectStore('barang');

    objectStore.openCursor().onsuccess = (event) => {
        const cursor = event.target.result;
        if (cursor) {
            const li = document.createElement('li');
            li.textContent = `ID: ${cursor.value.id}, Nama: ${cursor.value.nama}, Harga: ${cursor.value.harga}`;
            
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Hapus';
            deleteButton.addEventListener('click', () => {
                deleteItem(cursor.value.id);
            });

            li.appendChild(deleteButton);
            barangList.appendChild(li);
            cursor.continue();
        }
    };
}

function deleteItem(id) {
    const transaction = db.transaction(['barang'], 'readwrite');
    const objectStore = transaction.objectStore('barang');
    const request = objectStore.delete(id);

    request.onsuccess = () => {
        displayData();
    };

    request.onerror = (event) => {
        console.error('Delete error:', event.target.errorCode);
    };
}
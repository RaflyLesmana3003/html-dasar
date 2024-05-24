let db;

document.addEventListener('DOMContentLoaded', () => {
    const request = indexedDB.open('alfaApril', 1);

    // migration
    request.onupgradeneeded = (event) => {
        db = event.target.result;
        const objectStore = db.createObjectStore('barang', { keyPath: 'id' });
        objectStore.createIndex('nama', 'nama', { unique: false });
        objectStore.createIndex('harga', 'harga', { unique: false });
    };

    request.onsuccess = (event) => {
        db = event.target.result;
        displayData()
    };

    request.onerror = (event) => {
        console.error('Database error:', event.target.errorCode);
    };
});


const form = document.getElementById("barangForm")

form.addEventListener('submit', (event) => {
    event.preventDefault()
    const id = document.getElementById("id").value;
    const nama = document.getElementById("nama").value;
    const harga = document.getElementById("harga").value;

    const transaction = db.transaction('barang', 'readwrite')
    const objectStore = transaction.objectStore('barang')

    const request = objectStore.put({
        id: id,
        nama: nama,
        harga: harga,
        categori: "komoditas"
    })

    request.onsuccess = () => {
        form.reset()
    }

})

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
    try {
        const transaction = db.transaction('barang', 'readonly')
        const objectStore = transaction.objectStore('barang')

        const deletedData = objectStore.delete(id)

        deletedData.onsuccess = () => {
            displayData()
        }
    } catch (error) {
        console.error("errorrr")
        alert("error bos")
    }
}
let db;

document.addEventListener('DOMContentLoaded', () => {
    const request = indexedDB.open('barangDB', 1);

    request.onupgradeneeded = (event) => {
        db = event.target.result;
        const objectStore = db.createObjectStore('barang', { keyPath: 'id' });
        objectStore.createIndex('nama', 'nama', { unique: false });
        objectStore.createIndex('harga', 'harga', { unique: false });
    };

    request.onsuccess = (event) => {
        db = event.target.result;
        displayData();
    };

    request.onerror = (event) => {
        console.error('Database error:', event.target.errorCode);
    };
});
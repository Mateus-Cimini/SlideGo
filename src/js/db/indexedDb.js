
let db;

export function withDB(callback) {
  let request = indexedDB.open("slideGoDb", 1);

  request.onupgradeneeded = (event) => {
    const database = event.target.result;
    if (!database.objectStoreNames.contains("imagens")) {
      database.createObjectStore("imagens", { keyPath: "id", autoIncrement: true });
    }
  };

  request.onerror = (event) => {
    console.error(`Erro ao abrir IndexedDB:`, event.target.error);
  };

  request.onsuccess = (event) => {
    db = event.target.result;
    callback(db);
  };
}

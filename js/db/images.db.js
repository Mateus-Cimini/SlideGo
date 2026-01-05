import { withDB } from "./indexedDb.js";

export function addImageToDB(data) {
  return new Promise((resolve, reject) => {
    withDB((db) => {
      const tx = db.transaction("imagens", "readwrite");
      const store = tx.objectStore("imagens");

      const request = store.add(data);

      request.onsuccess = (event) => {
        resolve(event.target.result);
      };
      request.onerror = (event) => {
        reject(event.target.error);
      };
    });
  });
}

export function deleteImageFromDB(id) {
  return new Promise((resolve, reject) => {
    withDB((db) => {
      const tx = db.transaction("imagens", "readwrite");
      const store = tx.objectStore("imagens");

      const request = store.delete(id);

      request.onsuccess = (event) => {
        resolve(event.target.result);
      };
      request.onerror = (event) => {
        reject(event.target.error);
      };
    });
  });
}

export function editImageFromDB(id, newData) {
  return new Promise((resolve, reject) => {
    withDB((db) => {
      const tx = db.transaction("imagens", "readwrite");
      const store = tx.objectStore("imagens");

      const request = store.get(id);
      
      request.onsuccess = (event) => {
        const oldData = event.target.result;
        if (!oldData) {
          reject("imagem não encontrada");
          return
        }

        const updated = {
          ...oldData,
          ...newData,
        }

        const putRequest = store.put(updated);

        putRequest.onsuccess = () => resolve(updated);
        putRequest.onerror = (event) => reject(event.target.error);
      };

      request.onerror = (event) => reject(event.target.error);
    });
  });
}



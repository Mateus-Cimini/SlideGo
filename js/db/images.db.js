
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
        reject(event.target.error)
      }
    });
  });
}


import { withDB } from "./indexedDb.js";

export function loadImagesFromDB() {
  return new Promise((resolve, reject) => {
    withDB((db) => {
      const tx = db.transaction("imagens", "readonly");
      const store = tx.objectStore("imagens");

      const request = store.getAll();

      request.onsuccess = (event) => {
        resolve(event.target.result);
      };
      request.onerror = (event) => {
        reject(event.target.error);
      };
    });
  });
}

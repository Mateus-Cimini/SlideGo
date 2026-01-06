import { loadImagesFromDB } from  "../db/loadImagesDB.js";
import { addImageCarousel } from "../components/carousel.js";


export function initCarouselFromDB(carouselEl) {
  loadImagesFromDB()
    .then((images) => {
      images.forEach((image) => {
        addImageCarousel(carouselEl, image.id, image.title, image.url);
      });
      console.log("imagens no banco de dados:", images);
    })
    .catch((err) => {
      console.error("erro ao carregar", err);
    });
}

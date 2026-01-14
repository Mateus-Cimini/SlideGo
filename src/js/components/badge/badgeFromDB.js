import { getAllImagesFromDB } from "../../db/images.db.js";
import { showBadge } from "../../components/badge/badge.js";

export async function showGalleryBadge() {
  const images = await getAllImagesFromDB();

  const total = images.length;

  if (total === 0) {
    showBadge("Nenhuma imagem na galeria", {
      target: "#badge-container",
    });
    return;
  }

  showBadge(
    [
      `${total} imagens na galeria`,
      `Você tem ${total} imagens salvas`,
      `Galeria com ${total} imagens`,
    ],
    {
      target: "#badge-container",
    }
  );
}

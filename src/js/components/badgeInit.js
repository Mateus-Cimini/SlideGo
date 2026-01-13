import { showBadge } from "../../components/badge/badge.js";
import { showGalleryBadge } from "./badgeFromDB.js";

// badges de ação

document.addEventListener("image:add", () => {
  showBadge(
    [
      "Imagem adicionada com sucesso",
      "Nova imagem salva",
      "Upload concluído",
      "Imagem adicionada à galeria",
    ],
    {
      target: "#badge-container",
    }
  );
});

document.addEventListener("image:edit", () => {
  showBadge(
    [
      "Imagem editada com sucesso",
      "Alterações salvas",
      "Imagem atualizada",
      "Edição concluída",
      "Dados da imagem atualizados",
      "Imagem modificada",
      "Atualização realizada",
      "Edição salva com sucesso",
    ],
    {
      target: "#badge-container",
    }
  );
});

document.addEventListener("image:delete", () => {
  showBadge(
    [
      "Imagem removida com sucesso",
      "Imagem excluída da galeria",
      "Remoção concluída",
      "Imagem apagada",
      "Imagem deletada com sucesso",
      "Imagem removida do carousel",
      "Item excluído",
      "Imagem descartada",
    ],
    {
      target: "#badge-container",
    }
  );
});

document.addEventListener("DOMContentLoaded", () => {
  showGalleryBadge();
});

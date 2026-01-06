import { createBadge } from "../../components/badge/badge.js";

const totalCards = 5;
const totalFavorites = 2;

createBadge({
  phrases: [
    `${totalCards} cards adicionados`,
    `${totalFavorites} favoritos ativos`,
    "Keep going 🚀",

    "Imagem adicionada com sucesso",
    "Nova imagem salva",
    "Imagem adicionada à galeria",
    "Upload de imagem concluído",

    "Imagem editada com sucesso",
    "Alterações salvas na imagem",
    "Imagem atualizada",
    "Edição concluída",

    "Imagem removida com sucesso",
    "Imagem excluída",
    "Imagem apagada da galeria",
    "Remoção concluída",
  ],
  target: "#badge-container",
});


# SlideGo

## Galeria de imagens dinâmica com persistência local e integração externa

Aplicação **front-end** desenvolvida para demonstrar domínio de **JavaScript moderno**, **manipulação de dados no navegador** e **integração com APIs externas**, sem uso de frameworks front-end.

O projeto implementa uma **galeria de imagens dinâmica**, com persistência via **IndexedDB**, interface interativa com **Bootstrap e jQuery**, além de **coleta de emails integrada ao Google Sheets**, simulando um fluxo real de captação de leads.

---

## 🛠️ Tecnologias utilizadas

- HTML  
- CSS  
- JavaScript (ES Modules)  
- jQuery  
- Bootstrap  
- IndexedDB  
- LocalStorage  
- Google Sheets API (via GoogleSheetsDB)

---

## 🚀 Funcionalidades principais

- Adição de imagens com título e URL.  
- Edição de imagens diretamente no carousel.  
- Remoção de imagens com atualização automática da interface.  
- Persistência de dados no navegador usando **IndexedDB**.  
- Carousel dinâmico com indicadores e controles automáticos.  
- Ocultação automática do carousel quando não há imagens cadastradas.  
- Modal reutilizável para adicionar e editar imagens.  
- Feedback visual e experiência do usuário aprimorada com:
  - Toasts  
  - Badges dinâmicos  
  - Animações (fade in / fade out)  
- Suporte a **tema claro e escuro**, com persistência via **LocalStorage**.  
- Captura de emails através de formulário no footer.  
- Armazenamento automático dos emails em uma planilha do **Google Sheets** via API.

---

## 📩 Integração com Google Sheets

- O formulário localizado no footer captura emails de usuários.
- Os dados são enviados para uma API intermediária (**GoogleSheetsDB**).
- Os emails são armazenados automaticamente em uma planilha do Google Sheets.
- Essa integração simula um fluxo real de **coleta de leads**, sem necessidade de backend próprio.

---

## 🛠️ Decisões técnicas

- **IndexedDB** foi escolhido para permitir persistência local robusta, mesmo após recarregar a página, sem dependência de backend.
- Arquitetura modular baseada em **ES Modules**, garantindo separação de responsabilidades e melhor manutenção.
- Componentização manual em JavaScript puro para demonstrar domínio da linguagem sem abstrações de frameworks.
- **Bootstrap** utilizado como base de layout, com personalizações via CSS próprio.
- Uso de **LocalStorage** para gerenciamento de preferências do usuário (tema).
- Integração com API externa para demonstrar comunicação assíncrona e fluxo real de dados.

---

## 🧩 Estrutura do projeto

```

📁 src/
├── 📁 assets/
│   ├── 📁 img/
│   │   └── 🖼️ logoSlideGo.png
│   └── 📁 vendor/
│
├── 📁 js/
│   ├── 📁 components/
│   │   ├── 📁 badge/
│   │   │   ├── 📄 badge.js
│   │   │   ├── 📄 badgeInit.js
│   │   │   └── 📄 badgeFromDB.js
│   │   ├── 📄 carousel.js
│   │   ├── 📄 confetti.js
│   │   ├── 📄 modal.js
│   │   └── 📄 toast.js
│   │
│   ├── 📁 db/
│   │   ├── 🗄️ indexedDb.js
│   │   ├── 🗄️ images.db.js
│   │   └── 🗄️ loadImagesDB.js
│   │
│   ├── 📁 handlers/
│   │   ├── 🧠 carousel.handler.js
│   │   ├── 🧠 carouselInitHandlers.js
│   │   ├── 🧠 imageFormHandler.js
│   │   └── 🧠 modal.handlers.js
│   │
│   ├── 📁 services/
│   │   └── 🌐 email.js
│   │
│   └── 📄 main.js
│
├── 📁 styles/
│   ├── 🎨 base.css
│   ├── 🎨 main.css
│   ├── 🎨 responsive.css
│   │
│   ├── 📁 components/
│   │   ├── 🎨 badge.css
│   │   ├── 🎨 cards.css
│   │   ├── 🎨 carousel.css
│   │   └── 🎨 modal.css
│   │
│   └── 📁 layout/
│       ├── 🎨 header.css
│       ├── 🎨 footer.css
│       └── 🎨 home.css
│
├── 🧩 theme.js
└── 🧪 utils/
    └── ✅ validate.js

📄 index.html  
⚙️ vite.config.js  
📦 package.json  
📘 README.md

```

---

## ▶️ Como usar

1. Clique no botão **Adicionar imagem**.
2. Informe o título e a URL da imagem.
3. Salve para visualizar automaticamente no carousel.
4. Utilize os botões de **editar** ou **excluir** sobre cada imagem.
5. Insira um email no formulário do footer para salvá-lo na planilha do Google Sheets.

Todos os dados permanecem salvos mesmo após recarregar a página.

- **Link online:** https://slide-go.vercel.app/  
- **Repositório GitHub:** https://github.com/Mateus-Cimini/SlideGo  

---

## 📌 Aprendizados

- Manipulação avançada de dados com IndexedDB.
- Organização de código front-end sem frameworks.
- Integração com APIs externas.
- Gerenciamento manual de estado e UI.
- Aplicação de boas práticas de UX e feedback visual.

---

## 🤝 Contribuição

Contribuições são bem-vindas.  
Sinta-se à vontade para abrir issues ou enviar pull requests.

---

## 📄 Licença

Este projeto está licenciado sob a licença **MIT**.

---

## 👤 Autor

Desenvolvido por **Mateus Cimini**  
https://github.com/Mateus-Cimini



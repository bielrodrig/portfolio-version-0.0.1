document.addEventListener("DOMContentLoaded", function () {
  const projectCards = document.querySelectorAll(
    ".card-one-project, .card-two-project, .card-three-project"
  );

  let modalOverlay = document.createElement("div");
  modalOverlay.classList.add("modal-overlay");

  let modal = document.createElement("div");
  modal.classList.add("modal");

  document.body.appendChild(modalOverlay);
  modalOverlay.appendChild(modal);

  projectCards.forEach((card) => {
    card.addEventListener("click", function () {
      const videoSrc = card.getAttribute("data-video") || "";
      const projectText =
        card.querySelector(".card-text-project")?.innerHTML ||
        "Sem descrição disponível";

      modal.innerHTML = `
        <div class="modal-content">
          <video controls autoplay class="modal-video">
            <source src="${videoSrc}" type="video/mp4">
            Seu navegador não suporta o elemento de vídeo.
          </video>
          <div class="modal-description">${projectText}</div>
          <button class="close-modal">Fechar</button>
        </div>
      `;

      const video = modal.querySelector(".modal-video");

      // Mostrar o modal
      modalOverlay.classList.add("show");

      // Fechar o modal ao clicar no botão
      modal.querySelector(".close-modal").addEventListener("click", function () {
        // Pausar o vídeo
        if (video) {
          video.pause();
        }
        modalOverlay.classList.remove("show");
      });

      // Fechar o modal ao clicar fora dele
      modalOverlay.addEventListener("click", function (e) {
        if (e.target === modalOverlay) {
          // Pausar o vídeo
          if (video) {
            video.pause();
          }
          modalOverlay.classList.remove("show");
        }
      });
    });
  });
});

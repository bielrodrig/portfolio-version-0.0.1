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

  modal.innerHTML = `
    <div class="modal-content">
      <video controls autoplay class="modal-video">
        <source src="" type="video/mp4">
        Seu navegador não suporta o elemento de vídeo.
      </video>
      <div class="modal-description"></div>
      <button class="close-modal">Fechar</button>
    </div>
  `;

  const modalVideo = modal.querySelector(".modal-video");
  const modalDescription = modal.querySelector(".modal-description");
  const closeModalBtn = modal.querySelector(".close-modal");

  projectCards.forEach((card) => {
    card.addEventListener("click", function () {
      const videoSrc = card.getAttribute("data-video") || "";
      const projectText =
        card.querySelector(".card-text-project")?.innerHTML ||
        "Sem descrição disponível";

      modalVideo.querySelector("source").src = videoSrc;
      modalVideo.load();
      modalDescription.innerHTML = projectText;

      modalOverlay.classList.add("show");
    });
  });

  closeModalBtn.addEventListener("click", function () {
    modalOverlay.classList.remove("show");
    modalVideo.pause();
  });

  modalOverlay.addEventListener("click", function (e) {
    if (e.target === modalOverlay) {
      modalOverlay.classList.remove("show");
      modalVideo.pause();
    }
  });
});

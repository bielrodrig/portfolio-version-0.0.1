//Animação do título
const titulo = document.querySelector("h1#script-title");
typeWriter(titulo);

function typeWriter(elemento) {
  const textoArray = elemento.innerHTML.replace(/<br\s*\/?>/g, "\n").split(""); // Converte <br> para \n
  elemento.innerHTML = "";

  textoArray.forEach((letra, i) => {
    setTimeout(() => {
      elemento.innerHTML += letra === "\n" ? "<br>" : letra;
    }, 75 * i);
  });
}

//Gera divs ao clicar o botao
document.addEventListener("DOMContentLoaded", () => {
  const btnVerMais = document.querySelector(".btn-project");
  const containerProjetos = document.querySelector(".project-card");

  let projetosAdicionados = 3;
  const limiteProjetos = 5;

  let alternadorDeDiv = 2;

  btnVerMais.addEventListener("click", () => {
    if (projetosAdicionados < limiteProjetos) {
      const novoProjeto = document.createElement("div");

      if (window.innerWidth > 768) {
        if (alternadorDeDiv === 2) {
          novoProjeto.classList.add("card-two-project");
          novoProjeto.innerHTML = `
            <div class="card-text-project">
                <label class="card-title-project">
                    <label style="color: white;">Sobre o Projeto:</label> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </label>
                <br><br><br>
                <hr class="row-project">
                <br><br>
                <label class="card-title-project">
                    <label style="color: white;">Técnologias:</label> MySQL, HTML, CSS, PHP
                </label>
            </div>
            <img src="./images/convencionais/fotoTeste.png" class="img-project">
          `;
        } else {
          novoProjeto.classList.add("card-one-project");
          novoProjeto.innerHTML = `
            <img src="./images/convencionais/fotoTeste.png" class="img-project">
            <div class="card-text-project">
                <label class="card-title-project">
                    <label style="color: white;">Sobre o Projeto:</label> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </label>
                <br><br><br>
                <hr class="row-project">
                <br><br>
                <label class="card-title-project">
                    <label style="color: white;">Técnologias:</label> MySQL, HTML, CSS, PHP
                </label>
            </div>
          `;
        }
        alternadorDeDiv = alternadorDeDiv === 2 ? 1 : 2;
      } else {
        novoProjeto.classList.add("card-one-project");
        novoProjeto.innerHTML = `
          <img src="./images/convencionais/fotoTeste.png" class="img-project">
          <div class="card-text-project">
              <label class="card-title-project">
                  <label style="color: white;">Sobre o Projeto:</label> Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </label>
              <br><br><br>
              <hr class="row-project">
              <br><br>
              <label class="card-title-project">
                  <label style="color: white;">Técnologias:</label> MySQL, HTML, CSS, PHP
              </label>
          </div>
        `;
      }

      containerProjetos.appendChild(novoProjeto);

      projetosAdicionados++;

      novoProjeto.style.marginTop = "25px";
    }

    if (projetosAdicionados >= limiteProjetos) {
      btnVerMais.disabled = true;
      btnVerMais.textContent = "Limite de projetos atingido";
      btnVerMais.style.fontSize = "13px";
    }
  });
});

//Ajuste de zoom
function ajustarZoom() {
  const larguraTela = window.innerWidth;

  if (larguraTela > 1920) {
    document.body.style.zoom = "1"; // Padrão para telas grandes
  } else if (larguraTela > 1440) {
    document.body.style.zoom = "1"; // Padrão para Full HD
  } else if (larguraTela > 1024) {
    document.body.style.zoom = "0.9"; // Leve redução em telas menores
  } else if (larguraTela > 768) {
    document.body.style.zoom = "0.8"; // Ajuste para tablets
  } else {
    document.body.style.zoom = "1"; // Mobile mantém padrão
  }
}
ajustarZoom();
window.addEventListener("resize", ajustarZoom);

//Animação da página
function initObserver() {
  if (window.innerWidth < 768) return;

  const elementos = document.querySelectorAll(".fade-element");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.5,
      rootMargin: "0px 0px 200px 0px",
    }
  );

  elementos.forEach((elemento) => {
    observer.observe(elemento);
  });
}

window.addEventListener("load", initObserver);

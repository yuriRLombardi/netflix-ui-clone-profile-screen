document.addEventListener('DOMContentLoaded', () => {
    const profileLinks = document.querySelectorAll('.profile');

    profileLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            // Pega a imagem e o nome do perfil clicado
            const img = link.querySelector('img');
            const figcaption = link.querySelector('figcaption');

            if (img && figcaption) {
                const nomePerfil = figcaption.textContent;
                const imagemPerfil = img.src;

                // Armazena no localStorage
                localStorage.setItem('perfilAtivoNome', nomePerfil);
                localStorage.setItem('perfilAtivoImagem', imagemPerfil);
            }
        });
    });
});

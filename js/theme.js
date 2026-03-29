// Seleciona o elemento <body> para aplicar classes de tema.
const body = document.body;

// Seleciona o botão do toggle de tema.
const themeToggleBtn = document.getElementById('theme-toggle');

// Aplica o tema passado ('light' ou 'dark') e persiste no localStorage.
function setTheme(theme) {
    if (theme === 'dark') {
        // Ativa dark-mode e remove light-mode.
        body.classList.add('dark-mode');
        body.classList.remove('light-mode');

        // Atualiza atributo de acessibilidade para descrever a ação.
        if (themeToggleBtn) themeToggleBtn.setAttribute('aria-label', 'Modo escuro ativo, clique para modo claro');
    } else {
        // Ativa light-mode e remove dark-mode.
        body.classList.add('light-mode');
        body.classList.remove('dark-mode');

        // Atualiza atributo de acessibilidade para descrever a ação.
        if (themeToggleBtn) themeToggleBtn.setAttribute('aria-label', 'Modo claro ativo, clique para modo escuro');
    }

    // Salva o tema escolhido para manter após recarregar.
    localStorage.setItem('theme', theme);
}

// Retorna o tema preferido pelo usuário.
function getPreferredTheme() {
    // Verifica se já existe tema salvo pelo usuário.
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        return savedTheme;
    }

    // Caso não tenha, usa a preferência do sistema.
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
    }

    // Default para light se não houver preferência.
    return 'light';
}

// Inicializa o tema ao carregar a página.
const initialTheme = getPreferredTheme();
setTheme(initialTheme);

// Adiciona o evento de clique para alternar tema.
if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
        const nextTheme = body.classList.contains('dark-mode') ? 'light' : 'dark';
        setTheme(nextTheme);
    });
}

// Sincroniza tema entre abas/páginas usando localStorage.
window.addEventListener('storage', (event) => {
    if (event.key === 'theme' && event.newValue) {
        setTheme(event.newValue);
    }
});


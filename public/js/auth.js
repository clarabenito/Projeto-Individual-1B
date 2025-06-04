// Função para adicionar o token em todas as requisições
function addAuthHeader() {
    const token = localStorage.getItem('accessToken');
    if (token) {
        return {
            'Authorization': `Bearer ${token}`
        };
    }
    return {};
}

// Verifica se o usuário está autenticado
function isAuthenticated() {
    return !!localStorage.getItem('accessToken');
}

// Função para fazer logout
function logout() {
    localStorage.removeItem('accessToken');
    window.location.href = '/';
}

// Adiciona o token em todas as requisições fetch
const originalFetch = window.fetch;
window.fetch = function() {
    let [resource, config] = arguments;
    
    // Se não houver configuração, cria uma
    if (!config) {
        config = {};
    }
    
    // Se não houver headers, cria headers
    if (!config.headers) {
        config.headers = {};
    }

    // Adiciona o header de autorização
    const authHeaders = addAuthHeader();
    config.headers = {
        ...config.headers,
        ...authHeaders
    };

    return originalFetch(resource, config);
}; 
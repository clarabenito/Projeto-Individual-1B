const { supabase } = require('../lib/supabase');

const authMiddleware = async (req, res, next) => {
    try {
        // Verifica se existe um token de autenticação em várias fontes possíveis
        const token = req.headers.authorization?.split(' ')[1] || 
                     req.cookies?.accessToken ||
                     req.query?.token ||
                     req.headers['x-access-token'];

        if (!token) {
            console.log('Token não encontrado');
            return res.redirect('/?error=auth');
        }
        
        // Verifica o token com o Supabase
        const { data: { user }, error } = await supabase.auth.getUser(token);

        if (error) {
            console.log('Erro ao verificar token:', error.message);
            return res.redirect('/?error=invalid');
        }

        if (!user) {
            console.log('Usuário não encontrado');
            return res.redirect('/?error=user');
        }

        // Adiciona o token e o usuário ao request para uso nas rotas
        req.token = token;
        req.user = user;

        // Configura o token para todas as requisições subsequentes
        res.locals.token = token;
        res.locals.user = user;

        next();
    } catch (error) {
        console.error('Erro no middleware de autenticação:', error);
        return res.redirect('/?error=auth');
    }
};

module.exports = authMiddleware; 
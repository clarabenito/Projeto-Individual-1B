require('dotenv').config();
const fetch = require('node-fetch');
const { createClient } = require('@supabase/supabase-js');
const supabaseConfig = require('../config/supabase');

global.fetch = fetch;

// Cria o cliente do Supabase
const supabase = createClient(
    supabaseConfig.url,
    supabaseConfig.key,
    {
        auth: {
            autoRefreshToken: true,
            persistSession: true,
            detectSessionInUrl: true
        },
        db: {
            schema: 'public'
        }
    }
);

module.exports = { supabase }; 
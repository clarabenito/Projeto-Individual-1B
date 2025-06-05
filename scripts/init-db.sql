-- Criação da tabela de salas
CREATE TABLE IF NOT EXISTS salas (
    id SERIAL PRIMARY KEY,
    numero VARCHAR(10) NOT NULL,
    nome VARCHAR(100) NOT NULL,
    capacidade INTEGER NOT NULL,
    recursos TEXT[] DEFAULT '{}',
    descricao TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Criação da tabela de reservas
CREATE TABLE IF NOT EXISTS reservas (
    id SERIAL PRIMARY KEY,
    sala_id INTEGER REFERENCES salas(id),
    titulo VARCHAR(200) NOT NULL,
    descricao TEXT,
    data_inicio TIMESTAMP NOT NULL,
    data_fim TIMESTAMP NOT NULL,
    participantes TEXT[] DEFAULT '{}',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT check_datas CHECK (data_fim > data_inicio)
);

-- Inserção de dados de exemplo
INSERT INTO salas (numero, nome, capacidade, recursos, descricao)
VALUES 
    ('101', 'Sala de Reunião 1', 8, ARRAY['projetor', 'quadro'], 'Sala equipada com projetor e quadro branco'),
    ('102', 'Sala de Reunião 2', 4, ARRAY['videoconferencia'], 'Sala para videoconferências'),
    ('103', 'Sala de Reunião 3', 12, ARRAY['projetor', 'quadro', 'videoconferencia'], 'Sala grande com recursos completos')
ON CONFLICT (id) DO NOTHING;
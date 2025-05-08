-- Ative a extensão para UUIDs
create extension if not exists "uuid-ossp";


-- Tabela de usuários
create table users (
 id uuid primary key default uuid_generate_v4(),
 nome text not null,
 email text not null unique,
 criado_em timestamp with time zone default now()
);


-- Tabela de salas/quartos
create table rooms (
 id uuid primary key default uuid_generate_v4(),
 nome text not null,
 descricao text,
 capacidade integer not null,
 status text default 'disponivel'
);


-- Tabela de reservas
create table bookings (
 id uuid primary key default uuid_generate_v4(),
 user_id uuid not null references users(id) on delete cascade,
 room_id uuid not null references rooms(id) on delete cascade,
 data_reserva timestamp with time zone default now(),
 data_inicio timestamp with time zone not null,
 data_fim timestamp with time zone not null,
 status text default 'confirmada'
);
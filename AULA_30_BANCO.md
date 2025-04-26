ATIVIDADE PARA CASA:
1. INSTALAR O POSTGRES
2. CRIAR UM BANCO DE DADOS gestor_escolar
3. CRIAR TABELAS E INSERIR DADOS.

SEGUE COMANDOS:
´´´
CREATE DATABASE fs21;

CREATE TABLE alunos(
    id SERIAL PRIMARY KEY,
    nome VARCHAR(200) NOT NULL,
    cpf varchar(11) NOT NULL UNIQUE
    data_nascimento date
);

CREATE TABLE cursos(
    id SERIAL PRIMARY KEY,
    nome varchar(200) NOT NULL UNIQUE,
    sigla varchar(20) NOT NULL UNIQUE
);

CREATE TABLE professores(
    id SERIAL PRIMARY KEY,
    nome varchar(200) NOT NULL,
    cpf varchar(11) NOT NULL UNIQUE
);

CREATE TABLE turmas(
    id SERIAL PRIMARY KEY,
    turno varchar(20) NOT NULL,
    matricula varchar(20) NOT NULL,
    aluno_id integer NOT NULL,
    FOREIGN KEY(aluno_id) REFERENCES alunos(id),

    curso_id integer,
    FOREIGN KEY(curso_id) REFERENCES cursos(id),

    professor_id integer,
    FOREIGN KEY(professor_id) REFERENCES professores(id)
);

´´´

ATIVIDADE:
INSIRA DOIS alunos
INSIRA DOIS cursos
INSIRA DOIS professores
INSIRA DUAS turmas
INSERT INTO turmas(turno, matricula, aluno_id, curso_id, professor_id)
VALUES('Manha', '019203', 1, 1, 1);
aluno_id = 
curso_id = 
professor_id = 


# Cadastro de Usuários

Um projeto full-stack para gerenciamento de usuários, utilizando **Express.js** no backend e **React** no frontend. O backend usa o **Prisma** como ORM para interagir com o banco de dados.

---

## 📦 Estrutura do Projeto

```
.
├── API
│   ├── prisma/
│   │   ├── migrations/
│   │   └── schema.prisma
│   ├── package.json
│   └── server.js
└── cadastro_usuarios
    ├── public/
    ├── src/
    │   ├── assets/
    │   ├── pages/
    │   │   └── Home/
    │   │       ├── index.jsx
    │   │       └── style.css
    │   ├── services/
    │   │   └── api.js
    │   ├── index.css
    │   └── main.jsx
    ├── package.json
    └── README.md
```

---

## 🚀 Como Rodar o Projeto

### Pré-requisitos

- Node.js
- Yarn ou npm
- Banco de dados (SQLite, PostgreSQL, MySQL, etc.)

### Backend (API)

1. **Instale as dependências:**
   ```bash
   cd API
   npm install
   ```

2. **Configure o Prisma:**
   - Edite o arquivo `prisma/schema.prisma` para configurar a conexão com o banco de dados.
   - Execute as migrações:
     ```bash
     npx prisma migrate dev
     ```

3. **Inicie o servidor:**
   ```bash
   node server.js
   ```
   O servidor estará disponível em `http://localhost:3000`.

---

### Frontend (React)

1. **Instale as dependências:**
   ```bash
   cd cadastro_usuarios
   npm install
   ```

2. **Inicie o aplicativo React:**
   ```bash
   npm run dev
   ```
   O aplicativo estará disponível em `http://localhost:5173`.

---

## 🔧 Funcionalidades

### Backend

- **Listar usuários:** `GET /usuarios`
- **Criar usuário:** `POST /usuarios`
- **Atualizar usuário:** `PUT /usuario/:id`
- **Deletar usuário:** `DELETE /usuario/:id`

### Frontend

- Interface para cadastrar, listar e deletar usuários.
- Integração com a API para manipulação de dados.

---

## 📝 Exemplo de Uso

### Criar um Usuário

```bash
curl -X POST http://localhost:3000/usuarios   -H "Content-Type: application/json"   -d '{"name": "João Silva", "email": "joao@example.com", "age": 30}'
```

### Listar Usuários

```bash
curl -X GET http://localhost:3000/usuarios
```

---

## 🛠 Tecnologias Utilizadas

- **Backend:** Express.js, Prisma, SQLite/PostgreSQL
- **Frontend:** React, Vite, Axios
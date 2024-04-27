# Pesto Todo Zeta

A fullstack todo app built with Next.js, Typescript, Tailwind CSS, and many more.

## Setup

- Clone the repository:

```
git clone https://github.com/qurashi-akeel/pesto-todo-zeta.git
```

> I would appriciate if you fork it instead of cloning directly. And also give it a star.

- Install pnpm:

```
npm install -g pnpm
```

- Install dependencies:

```
pnpm install
```

- Copy the .env.example file and create your own .env.local file:
  - Get resend api key from [Resend](https://resend.com/api-keys).

```
cp .env.example .env.local
```

Accordingly change the contents of .env.local as per your environment.

- Run dev server:

```
pnpm dev
```

## Completed functionality

- [x] Add config (editor, prettier etc)
- [x] Add tanstack table and radax UI
- [x] Models for create/edit todo
- [x] Theme (dark/light/system)
- [x] Setup API routes
- [x] Database (mongoDB) Integration
- [x] Complete Authentication
- [x] Create todo (without error handling)
- [x] View all todos
- [x] Mark fields as required in create/edit todo
- [x] Error handling for empty create todo

## Next tasks

- [ ] Delete todo
- [ ] View Single Todo
- [ ] Trim description in table
- [ ] Edit todo
- [ ] Error handling

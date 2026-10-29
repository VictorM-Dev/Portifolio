# Portfólio — João Victor

Site de portfólio pessoal desenvolvido com React, TypeScript e Tailwind CSS. Apresenta informações sobre mim, minhas experiências profissionais e acadêmicas, e disponibiliza meu currículo para download.

🔗 **[Ver online](https://victorM-dev.github.io/Portifolio/)**

---

## Seções

- **Hero** — Apresentação, links para LinkedIn/GitHub e principais tecnologias
- **Sobre** — Descrição pessoal e interesses
- **Experiências** — Estágio na Compass UOL e formação na UEPB

## Stack

| Tecnologia | Uso |
|---|---|
| React 19 + TypeScript | UI e tipagem |
| Tailwind CSS v4 | Estilização |
| Vite | Build e dev server |
| React Router DOM | Roteamento |
| React Icons | Ícones |
| clsx | Classes condicionais |
| oxlint | Linting |

## Como rodar

```bash
npm install
npm run dev
```

| Script | Descrição |
|---|---|
| `npm run dev` | Servidor de desenvolvimento |
| `npm run build` | Build de produção |
| `npm run preview` | Preview do build |
| `npm run lint` | Lint com oxlint |

## Estrutura

```
src/
├── components/
│   ├── Header/
│   ├── Hero/
│   ├── About/
│   ├── Experiences/
│   ├── Footer/
│   └── Utils/Container/
└── pages/
    └── Home/
```

## Deploy

O projeto está configurado para GitHub Pages com `base: '/Portifolio/'` no `vite.config.ts`. O build gerado fica na pasta `docs/`.

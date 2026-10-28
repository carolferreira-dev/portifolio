# Portfólio · Caroline Ferreira de Souza

Site pessoal em HTML, CSS e JavaScript puros, em português e inglês, com modo claro e escuro, publicado pelo GitHub Pages.

## Estrutura

```
.
├── index.html                  página inicial (português)
├── projetos/
│   ├── safevoice.html          estudo de caso
│   └── orienta-plus.html       estudo de caso
├── en/                         versão em inglês (mesma estrutura)
│   ├── index.html
│   └── projects/
├── assets/
│   ├── css/style.css           todo o visual do site
│   ├── js/main.js              botão de modo claro/escuro
│   ├── img/                    prints dos apps e diagramas
│   └── docs/                   currículo em PDF
├── 404.html                    página de erro
├── favicon.svg
├── robots.txt
└── sitemap.xml
```

As pastas `capturas/`, `proposta/`, `arquivos/` e `diagramas/` guardam o material de trabalho (prints originais, rascunhos) e estão no `.gitignore`.

## Rodar localmente

Não há instalação nem build. Na pasta do projeto:

```bash
python -m http.server 8100
```

Depois abra http://localhost:8100. Use um servidor, e não o arquivo direto no navegador, para que os links funcionem como no site publicado. A página `404.html` só é usada automaticamente no GitHub Pages; localmente, abra http://localhost:8100/404.html para vê-la.

## Como editar

- **Cores e fontes:** variáveis no começo de `assets/css/style.css` (`--paper`, `--ink`, `--accent` etc.). O modo escuro redefine as mesmas variáveis logo abaixo.
- **Modo escuro:** segue o tema do sistema da pessoa. O botão no menu troca o tema e guarda a escolha no navegador.
- **Textos:** cada página tem uma versão em português e outra em inglês. Ao mudar um texto, mude nas duas: `index.html` ↔ `en/index.html`, `projetos/*.html` ↔ `en/projects/*.html`.
- **Novo projeto:** copie um `<article>` da seção “Também fiz”. Para um projeto com estudo de caso, copie `projetos/safevoice.html` e a versão em `en/projects/`, e acrescente as duas URLs ao `sitemap.xml`.
- **Foto:** substitua `assets/img/caroline.jpg` (hoje com 900 × 996 px) e ajuste `width` e `height` da tag `<img>` se a proporção mudar.
- **Currículo:** substitua `assets/docs/curriculo-caroline-ferreira.pdf` mantendo o mesmo nome.

## Publicar no GitHub Pages

1. O repositório é o **`carolferreira-dev/portifolio`**, público.
2. Na pasta do projeto:
   ```bash
   git remote add origin https://github.com/carolferreira-dev/portifolio.git
   git push -u origin main
   ```
3. No repositório, abra **Settings → Pages** e, em *Build and deployment*, escolha **Deploy from a branch**, branch `main`, pasta `/ (root)`.
4. Em um ou dois minutos o site fica em https://carolferreira-dev.github.io/portifolio/.

Como o site fica dentro de `/portifolio/`, a `404.html` usa caminhos começando com `/portifolio/`. Se mudar o nome do repositório, troque esses caminhos e as URLs em `sitemap.xml` e nas tags `canonical`, `hreflang` e `og:url`.

Depois disso, cada `git push` publica a nova versão.

### Domínio próprio (opcional)

Compre o domínio, crie um arquivo `CNAME` na raiz com o domínio (ex.: `carolferreira.dev`), configure o DNS conforme a documentação do GitHub Pages e marque **Enforce HTTPS**. Atualize as URLs em `sitemap.xml`, `robots.txt` e nas tags `canonical`/`og:url`.

## Checklist antes de publicar

- [ ] Revisar os textos em inglês (`en/`)
- [ ] Prints do alerta no WhatsApp (com nome e foto do contato ocultados), se quiser incluí-los

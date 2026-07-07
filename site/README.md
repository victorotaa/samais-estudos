# Site institucional Samais

Site institucional estático da **Samais — Gestão + Saúde**, padrão editorial
dark-luxury (identidade visual institucional), com motion no hero, parallax,
reveal on-scroll e responsivo até 380px. Sem build step e sem dependências de
runtime — HTML/CSS/JS puros.

## Estrutura

```
site/
  index.html        ← home institucional (hero, manifesto, atuação, números,
                       teaser do Co-piloto, portfólio, visão tech-first, contato)
  copiloto.html     ← página de produto do SAMU Co-piloto (tese, 3 pilares,
                       jornada operacional em sticky-scroll, IA/data lake,
                       segurança/LGPD, BI, roadmap)
  assets/
    css/style.css   ← design system (tokens, componentes, responsivo)
    js/main.js      ← interações: preloader, parallax, reveal, count-up,
                       nav, journey sticky, botões magnéticos
    logo.svg / logo-mark.svg / favicon.svg
    img/            ← fotografia e telas do produto (otimizadas p/ web)
```

## Identidade (resumo do brand system)

- **Fundo** navy-black `#04060C`; cards `#0A0E18`–`#0D1220`.
- **Acento** dourado `#D4A857` — escasso (≤10% da superfície): números-chave,
  linhas, ícones, um CTA.
- **Texto** off-white quente `#EDEAE2` / secundário `#B0AEA5`.
- **Tipografia**: Syne (display), Inter (corpo), JetBrains Mono (dados/labels).

## Rodar localmente

Qualquer servidor estático serve. Por exemplo:

```bash
cd site && python3 -m http.server 8099
# abrir http://localhost:8099
```

## Notas

- **Progressive enhancement**: o conteúdo é visível sem JavaScript; as animações
  (reveal, parallax, count-up) só entram quando o JS está presente (classe `.js`).
  Respeita `prefers-reduced-motion`.
- **Fontes** via Google Fonts CDN (método de import do brand system), com
  fallback para Arial/Courier.
- **Fotografia** derivada do banco oficial de imagens Samais; usada como camada
  atmosférica sob o sistema escuro. Nenhum dado sensível/confidencial no site.
- **Deploy**: por ser estático, publica direto em GitHub Pages, Netlify, Vercel
  ou qualquer hospedagem de arquivos.

# CLAUDE.md — Instruções para qualquer sessão neste repositório

Este repositório é a **metodologia de estudo de custo de SAMU da Samais** (a
"Fórmula Mestre"). Toda sessão que for **fazer, validar ou calibrar um estudo de
município** DEVE seguir o procedimento abaixo. Não improvise um método próprio —
use o que está aqui.

## Procedimento obrigatório (leia nesta ordem antes de calcular)

1. [`FORMULA-MESTRE.md`](FORMULA-MESTRE.md) — o motor de cálculo (9 blocos +
   Princípios Reitores + Regras Operacionais Samais + checklist de execução).
2. [`referencias/parametros-base.md`](referencias/parametros-base.md) — os "botões"
   (FC, encargos, tributos, margem) e os **valores calibrados** (§9: pisos CCT-PA,
   custos unitários, com aval do CEO).
3. [`referencias/mapa-rubricas-maringa.md`](referencias/mapa-rubricas-maringa.md) —
   checklist de escopo (as 66 rubricas do padrão ouro). Nenhuma rubrica sai do
   estudo sem justificativa.
4. [`referencias/fontes-dados-publicos.md`](referencias/fontes-dados-publicos.md) —
   onde pesquisar cada dado.

## Não-negociáveis (errar aqui = estudo errado)

- **Princípio da Realidade:** nunca inventar dado inexistente. Sem dado → marcar
  "a levantar"/premissa a validar; jamais apresentar premissa como fato.
- **Projeção conservadora:** na dúvida, sempre o **mais caro** (regime, faixas → teto).
- **Fator de Cobertura 24/7 = ~4,5** por posto (12×36), **NUNCA 2,2 para cobrir
  24/7**. O 2,2 cobre só um turno e subdimensiona pela metade (erro histórico —
  lição Taboão 148 vs 80). Não duplicar férias/13º: se já estão nos encargos
  (~68%), o FC é só o headcount físico (~4,5). *Nuance Lean Sizing:* um **posto
  deliberadamente de 12h** (2ª USB no pico, motolância diurna) usa FC ≈ 2,25 e é
  legítimo — o proibido é usar 2,2 achando que cobre 24h.
- **Encargos e FC são multiplicativos** sobre o salário — esquecer um (ou os dois)
  produz os "valores muito errados" que originaram esta fórmula.
- **Dois cenários sempre:** A = Custo Real Atual (com os invisíveis públicos
  somados) · B = Proposta Samais. **Preço do B pela Métrica de Ouro (CEO,
  jul/2026, válida de Avaré em diante): `VCM = população × R$ 5,20/hab/mês`
  (teto)** — preço ancorado no mercado; a margem (alvo interno ≥ ~30–35%) sai do
  **Lean Sizing** do escopo, nunca de inflar o preço. Se o escopo não couber no
  teto, enxugar ou escalonar por gatilhos (`parametros-base.md` §5a/5b). O
  gross-up `Preço = Custo ÷ [1 − (Trib% + Margem%)]` vira conferência. Estudos
  publicados antes da régua não são recalculados retroativamente, salvo pedido.
- **Regras Operacionais:** frota é do ente (sem CAPEX de aquisição; Samais faz
  manutenção + reativação; **inclusão de viatura nova via locação+equipação só por
  aditivo de contrato**, fora do objeto do estudo-base); equipe própria CLT no
  piso; bases/CRU e suas obras são do ente; atendimentos por histórico. **USA/USB
  são ativos do ente**; a USA existente fica e é administrada pelo maior município
  da regional de saúde — precificada dentro da proposta pela régua Ourinhos, com o
  **repasse tripartite (federal ~R$ 134k/USA) voltando ao município** como desconto.
- **Custo aparente × custo real (obrigatório em todo estudo):** Cenário A não é só
  o declarado — somar os ocultos (frota na pasta geral, combustível, insumos no
  almox central, imóvel, coordenação e, o maior, **médicos cedidos à USA/CRU**).
  Fator de referência calibrado em Avaré: **declarado × 1,38 ≈ real**. Comparar 3
  níveis: declarado × custo real hoje × **autogestão da estrutura cheia** × oferta
  Samais. **Honestidade:** a Samais não é "mais barata" que a autogestão (preço tem
  tributo+margem); o argumento é **empate em custo real + sem passivo + tecnologia +
  chave-na-mão**. Cabe na página-mãe multi-cenário.
- **Varredura completa do termo de referência (lição Canoas, jul/2026).** O edital
  é fonte do **escopo E do custo** — ler só a matriz de pessoal e a frota é erro.
  Extrair *sempre*, com checklist: **horas extras obrigatórias de capacitação/NEP**
  (em Canoas eram 400h médico + 600h enf + 600h téc + 250h condutor = **R$ 229
  mil/mês omitidos**), seguros exigidos (seguro total da frota), EPI/uniformes
  especificados, resíduos/esterilização/controle de pragas, manutenção predial e
  de equipamentos, **imóvel por conta da contratada**, e metas com desconto no
  repasse. Cada obrigação do termo que consome dinheiro **é rubrica de custo**.
- **Nunca presumir que o BDI fecha — calcular a remuneração residual (lição
  Canoas).** A tabela canônica de BDI lista as linhas como "% sobre CDO", mas
  **tributos incidem sobre faturamento**. Com BDI 35%: tributos 13,5% × preço =
  **18,2% do CDO** (não 13,5%), e as demais linhas somam 20,5% do CDO → 38,7% >
  35% disponíveis. **A remuneração real fica em −2,8% do preço — negativa, em
  qualquer estudo.** Portanto: (a) sempre computar explicitamente
  `remuneração = preço − CDO − tributos×preço − demais×CDO`; (b) se der < ~5% do
  preço, o BDI está errado para aquela operação. **Piso prático: BDI ≈ 46% para
  4% de remuneração · ≈ 52% para 7%** (usado em Canoas) · ≈ 57% para 10%. O preço
  segue ancorado no teto de mercado — o BDI maior não infla preço, apenas revela
  o custo verdadeiro e evita operar no prejuízo.
- **Contratação via OS/OSC — PERGUNTAR O CENÁRIO ANTES DE PRECIFICAR (regra do
  CEO, jul/2026).** Quando o objeto envolve Organização Social/OSC, existem
  **caminhos de precificação diferentes**, e o número muda em cada um. Sempre
  perguntar **antes** de calcular:
  1. **OS contrata a Samais** (Camada 1) — precificamos a nossa operação para a
     OS. O "mais um pouco" que a OS agrega até o ente **não é nosso** e não entra
     no estudo. Foi o caso de Canoas.
  2. **Samais assume o processo licitatório completo e vence** — somos a
     contratada direta do ente. Aqui entram as obrigações do edital por inteiro
     (garantias, habilitação, CEBAS quando exigido) e a carga tributária do
     **nosso** regime.
  O regime tributário acompanha o caminho: parceria MROSC/OSC (~13,5%) ×
  contratação privada em Lucro Presumido (**15,33%** em Canoas, com ISS
  municipal de 4%). **Nunca assumir o caminho** — a diferença muda preço e
  remuneração.
- **Validar por benchmark** antes de entregar (per capita vs R$ 5,20/hab — régua
  principal; custo/viatura mercado ~R$ 93–159k/mês; peso da folha ~55–70%). Fora
  da faixa = investigar. **Per capita sempre exibido no estudo** (pedido do CEO).

## Saída

Cada estudo gera **três artefatos**:

1. **Markdown interno** em `estudos-internos/<municipio-uf>.md` (ver
   [`estudos-internos/belem-pa.md`](estudos-internos/belem-pa.md)) — o cálculo completo, com margem,
   composição custo→preço e todas as premissas. **Uso interno.**
2. **Página HTML de apresentação** em `estudos/<municipio-uf>.html` +
   cartão em `index.html`, publicada na Vercel. **Cliente-facing.** Seguir
   [`referencias/apresentacao-html.md`](referencias/apresentacao-html.md).
3. **Anexo de composição de preço** em
   `anexos/<municipio-uf>-memoria-financeira.html` — a memória de cálculo
   apresentável à **diretoria** (validação da fórmula): composição rubrica a
   rubrica com regra de cálculo, ponte custo→preço até a **remuneração residual**,
   benchmark e tabela fato × premissa. Seguir
   [`referencias/anexo-composicao-preco.md`](referencias/anexo-composicao-preco.md);
   referência de implementação: `anexos/canoas-rs-memoria-financeira.html`.
   ⚠️ **Fica FORA do que é publicado** — o deploy varre a raiz (com `.vercelignore`), e este anexo expõe
   BDI, remuneração e composição. **Nunca publicar na Vercel.**

> ⚠️ O HTML é visto pelo cliente (gestores/secretários/políticos). **Nunca** expor
> nele margem (35%), bridge custo→preço, benchmark desfavorável ou estratégia
> jurídico-tributária. Isso vive só no markdown interno e em conversa.

- Sempre marcar a procedência de cada dado: ✅ real (com fonte) × ⚠️ premissa a validar.
- **Identidade visual Samais:** preto `#0A0A0A` · dourado `#B8954E` · branco;
  marcas em `assets/brand/`; estilo único em `css/samais.css`.
## Publicação (lições de jul/2026 — não repetir estes erros)

**O site é a PRÓPRIA RAIZ do repositório** (`index.html`, `css/`, `js/`, `assets/`,
`estudos/`). O conteúdo interno convive na mesma raiz e é protegido por
`.vercelignore` + lista de exclusão no script de deploy.

- **Publicar = mergear na `main`.** O projeto Vercel está conectado ao GitHub;
  todo merge na `main` dispara build e publica. O script por token
  (`TOK=<vercel_token> node scripts/deploy-vercel.mjs`) é fallback — o token
  **nunca** é versionado e deve ser rotacionado se exposto.

### Armadilhas que já custaram horas

1. **`.vercelignore` exige padrões ancorados com `/`.** Igual ao `.gitignore`,
   `estudos/` sem barra casa em **qualquer nível** — chegou a excluir as próprias
   páginas do site, que passaram a dar 404 enquanto a home funcionava. Sempre
   `/anexos/`, `/estudos-internos/`, etc.
2. **`outputDirectory` NÃO funciona para site estático sem build.** Essa chave
   vale para a *saída de um build*; sem build a Vercel ignora e serve a raiz. Foi
   por isso que o site virou a raiz — não tentar reintroduzir subpasta + config.
3. **O domínio pode ficar preso em um deployment antigo.** Sintoma: builds novos
   ficam `Ready` mas o ar não muda. Correção: no deployment novo → "⋯" →
   **Promote to Production** (cuidado para não tocar em "Instant Rollback", que
   causa o problema inverso). O script já fixa o alias após o READY.
4. **Cache do navegador mascara sucesso.** Depois de publicar, testar com
   `?v=N` no fim da URL (ou aba anônima) — páginas já visitadas ficam em cache e
   parecem não ter atualizado, mesmo com `must-revalidate`.
5. **Verificar por conteúdo, nunca por HTTP 200.** Um 200 pode ser conteúdo
   velho. Conferir se a informação nova aparece de fato.
6. **Checklist pós-deploy:** (a) home lista o estudo novo · (b) a página abre
   **sem** `.html` (prova que o `cleanUrls` foi lido) · (c)
   `/anexos/<estudo>-memoria-financeira.html` dá **404** — se abrir, a memória
   financeira vazou e é urgente.

## Observações de manutenção

- As planilhas de origem (template de Maringá, modelo de custos de Belém do André)
  **não estão no repositório** — vieram como anexos efêmeros. Os valores úteis já
  foram extraídos para `parametros-base.md` §9. Se precisar de novo, pedir o anexo.
- **Assuntos estratégicos confidenciais** (estruturação jurídico-tributária,
  veículos de remuneração etc.) **não devem ser registrados** nos arquivos da
  fórmula — tratar apenas em conversa.
- Calibrar os parâmetros conforme entrarem dados reais; a estrutura do motor é
  estável, os valores evoluem. Padrão ouro a fixar: números reais de Maringá.

## Git

- A `main` já contém a Fórmula Mestre (PR #1 mergeado). Para mudanças novas,
  trabalhar em branch própria e abrir PR para a `main`.
- **Nunca** commitar segredos (tokens Vercel etc.) — ver `.gitignore`.

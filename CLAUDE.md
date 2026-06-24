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
- **Fator de Cobertura 24/7 = ~4,5** por posto (12×36), **NUNCA 2,2**. O 2,2 cobre
  só um turno e subdimensiona pela metade (é o erro histórico — lição Taboão
  148 vs 80). Não duplicar férias/13º: se já estão nos encargos (~68%), o FC é só
  o headcount físico (~4,5).
- **Encargos e FC são multiplicativos** sobre o salário — esquecer um (ou os dois)
  produz os "valores muito errados" que originaram esta fórmula.
- **Dois cenários sempre:** A = Custo Real Atual (com os invisíveis públicos
  somados) · B = Proposta Samais (margem-alvo **35%**, definida pelo CEO, embutida
  no gross-up `Preço = Custo ÷ [1 − (Tributos% + Margem%)]`).
- **Regras Operacionais:** frota é do ente (sem CAPEX de aquisição; Samais faz
  manutenção + reativação; aluguel só como contingência); equipe própria CLT no
  piso; bases/CRU e suas obras são do ente; atendimentos por histórico.
- **Validar por benchmark** antes de entregar (custo/habitante, /viatura — mercado
  ~R$ 93–159k/viatura/mês; peso da folha ~55–70%). Fora da faixa = investigar.

## Saída

Cada estudo gera **dois artefatos**:

1. **Markdown interno** em `estudos/<municipio-uf>.md` (ver
   [`estudos/belem-pa.md`](estudos/belem-pa.md)) — o cálculo completo, com margem,
   composição custo→preço e todas as premissas. **Uso interno.**
2. **Página HTML de apresentação** em `site/estudos/<municipio-uf>.html` +
   cartão em `site/index.html`, publicada na Vercel. **Cliente-facing.** Seguir
   [`referencias/apresentacao-html.md`](referencias/apresentacao-html.md).

> ⚠️ O HTML é visto pelo cliente (gestores/secretários/políticos). **Nunca** expor
> nele margem (35%), bridge custo→preço, benchmark desfavorável ou estratégia
> jurídico-tributária. Isso vive só no markdown interno e em conversa.

- Sempre marcar a procedência de cada dado: ✅ real (com fonte) × ⚠️ premissa a validar.
- **Identidade visual Samais:** preto `#0A0A0A` · dourado `#B8954E` · branco;
  marcas em `site/assets/brand/`; estilo único em `site/css/samais.css`.
- **Publicar:** `TOK=<vercel_token> node scripts/deploy-vercel.mjs` (token **nunca**
  versionado — variável de ambiente; rotacionar se exposto).

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

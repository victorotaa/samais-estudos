# Apresentação HTML — geração da página de estudo

Cada estudo gera, além do markdown interno (`estudos/<municipio>.md`), uma
**página HTML de apresentação** hospedada na Vercel, para gestores, secretários e
políticos. O markdown é o cálculo interno; o HTML é a vitrine cliente-facing.

## Regra de ouro: cliente-facing ≠ interno

A página é vista pelo **cliente** (ente público). Portanto **NÃO** exibir:

- margem-alvo (35%) nem o bridge custo→preço (gross-up);
- composição de custo que, somada, revele a margem;
- benchmark "nosso valor vs mercado por viatura" quando desfavorável;
- regime jurídico-tributário, estruturação societária ou qualquer assunto
  estratégico confidencial.

A página vende **operação, escopo, rigor metodológico e valor**. O detalhamento de
custo/preço e a estratégia ficam **apenas** no markdown interno e em conversa.

## Identidade visual Samais (real)

- Preto institucional **#0A0A0A** · Dourado matte **#B8954E** · Branco **#FFFFFF**.
- Logotipo: fonte *Sweet Gothic* (no corpo usamos Montserrat/Inter como análogos).
- Marcas em `site/assets/brand/` (logo primária, branca, monograma dourado, favicon).
- Estilo: premium, sóbrio, preto+dourado — adequado a autoridades.
- Folha de estilo única: `site/css/samais.css` (reutilizada por todas as páginas).

## Estrutura da página (modelo: `site/estudos/belem-pa.html`)

1. **Nav** fixa com logo branca.
2. **Hero** full-bleed com **foto do município** (buscada na web; ver abaixo) +
   título, subtítulo e 3–4 números-chave.
3. **Sumário executivo** + cartão de **valor de referência** mensal.
4. **Panorama da operação** (cartões: frota, população, 24/7, profissionais).
5. **Metodologia & rigor** (Portarias MS, cobertura 24/7 correta, dados reais) —
   credibilidade, sem expor margem.
6. **Escopo** (os 4 blocos: RH, Gestão, Insumos, Tecnologia).
7. **Diferenciais Samais**.
8. **Valor** (referência mensal, escopo integral) — sem o cálculo de margem.
9. **Próximos passos** (diligência, mobilização, início).
10. **Footer** com identidade + crédito da foto.

## Preferências fixas (CEO)

- **CTA final sem contato e sem botão.** A dobra de fechamento é uma afirmação
  (eyebrow + título + lede), nunca um formulário ou "fale conosco".
- **Rodapé sem link cruzado para os demais estudos** (cada estudo é peça fechada;
  a navegação entre estudos vive só no hub `index.html`).
- **Variar as fotos ao longo do documento** — não repetir a mesma imagem do
  município em hero, faixas e CTA. Buscar 3–4 fotos distintas e validadas.

## Imagens

- **Hero:** foto que identifique o município. Buscar em fonte com URL estável e
  licença livre (ex.: Wikimedia Commons) e **referenciar a URL** (o navegador do
  visitante carrega a imagem; o ambiente de build pode ter egress restrito).
  Creditar a foto no rodapé.
- **Banco de imagens Samais** (viaturas etc.) está no Drive da Samais; quando
  embutir, salvar em `site/assets/img/` (arquivos grandes não cabem no contexto da
  sessão — baixar fora ou pedir o anexo).

## Publicação na Vercel

- Projeto: **`samais-estudos`** (team Samais). Domínio: `samais-estudos.vercel.app`.
- `site/vercel.json` força `noindex` (documentos não devem ser indexados).
- Deploy: `TOK=<vercel_token> node scripts/deploy-vercel.mjs`
  - O **token não é versionado** — passar por variável de ambiente e **rotacionar**
    se for exposto. Ideal: guardar como secret no projeto Vercel.
- Alternativa: conectar o repositório ao projeto Vercel (deploy automático no push).

## Convenção de arquivos

```
site/
  index.html                 ← landing que lista os estudos
  vercel.json                ← config (noindex, cleanUrls)
  css/samais.css             ← sistema visual único
  assets/brand/*.svg         ← marcas Samais
  assets/img/                ← fotos (hero local, banco Samais)
  estudos/<municipio>.html   ← uma página por estudo
```

Ao criar um estudo novo: gerar `site/estudos/<municipio>.html`, adicionar o cartão
em `site/index.html` e publicar com o script.

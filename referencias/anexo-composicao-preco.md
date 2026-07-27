# Anexo de composição de preço — geração do 3º artefato

Todo estudo gera, além do markdown interno e da página cliente-facing, um
**anexo de memória financeira** em `anexos/<municipio-uf>-memoria-financeira.html`.

**Referência de implementação:** `anexos/canoas-rs-memoria-financeira.html`
(SAMU + CAPS de Canoas, jul/2026).

## Para que serve

É a peça que **valida a fórmula perante a diretoria**. O markdown interno é
memória de trabalho (desorganizada, cheia de decisões); o anexo é a versão
**apresentável** dessa mesma memória: mostra que o número não é chute, e permite
ao CEO auditar cada rubrica sem reabrir o cálculo.

Audiência: **diretoria/CEO**. Não é do cliente e não é do site.

## Regra de localização (não-negociável)

- Fica em **`anexos/`**, que está no `.vercelignore` — **nunca em pasta publicada**.
- Motivo: `scripts/deploy-vercel.mjs` varre a raiz (com `.vercelignore`). Qualquer arquivo
  publicado na raiz vai ao ar em `samais-estudos.vercel.app`. O anexo expõe
  **BDI, remuneração e composição de custo** — exatamente o que a regra de ouro
  proíbe no cliente-facing.
- Cabeçalho obrigatório: selo **"Confidencial · uso interno Samais · diretoria"**
  e a frase de que a peça cliente-facing não expõe nada do documento.

## Estrutura obrigatória (5 seções)

### 01 · O método
- A fórmula em bloco `.fx` (monoespaçado, fundo preto): buildup do CDO
  (A pessoal · B materiais · C frota/apoio · D gestão) → preço → **linha de
  validação da remuneração**.
- Tabela de parâmetros aplicados, cada um com **origem** (régua Samais, exigência
  do termo, piso legal) e selo ✅ fato / ⚠️ premissa.
- **Sempre incluir o alerta do BDI** (ver `CLAUDE.md` § não-negociáveis): tributos
  incidem sobre faturamento, então BDI 35% entrega remuneração negativa. Mostrar
  a tabela de pisos de BDI (46% → 4% · 51,6% → 7% · 57,5% → 10%) e a salvaguarda:
  **o BDI maior não infla preço, revela o custo**.

### 02 · Serviço principal (ex.: SAMU)
- **Bloco A rubrica a rubrica**, cada linha com: rubrica · quantidade (com selo
  de fonte quando vem do termo) · **regra de cálculo explícita** · R$/mês.
  A regra de cálculo é o que dá credibilidade — escrever
  `piso 3.600 × 1,20 insal. × 1,6824 encargos`, não só o valor final.
- Blocos B/C/D com **justificativa** de cada um (o que está dentro e por quê).
- **Ponte custo → preço** linha a linha, terminando na **remuneração residual**
  com o % sobre o preço.
- Cartões de destaque (preço, BDI implícito, remuneração, per capita).
- **Validação por benchmark** (Ourinhos corrigido, Métrica de Ouro, faixa de
  mercado) — provar que o preço não está inflado.
- **Destacar em callout qualquer rubrica que quase escapou** da varredura do
  termo (em Canoas: a NEP, R$ 229 mil/mês = 17% do CDO). É a justificativa viva
  da régua de varredura integral.

### 03 · Serviço secundário (quando houver)
Mesma estrutura, condensada. Se o serviço **não couber na régua de BDI padrão**,
demonstrar numericamente (em Canoas, o CAPS dava remuneração negativa de
R$ 63 mil a 35%) e registrar o **piso de preço recomendado**.

### 04 · Consolidado
Tabela por frente: CDO · preço · remuneração (R$ e %) · BDI. Mais os cartões do
total, per capita integrado e remuneração total.

### 05 · Procedência
- Tabela **fato × premissa**, item a item, com a fonte de cada fato (número do
  orçamento e item) e o que falta para firmar cada premissa.
- **Análise de sensibilidade**: qual rubrica é a maior alavanca e quanto o número
  se move. Quando o preço está ancorado num teto, explicitar que **variação de
  custo vira variação de remuneração** — é o que justifica a reserva.

## Padrão visual

Documento claro (fundo `#F7F5F1`), cabeçalho preto `#0A0A0A`, dourado `#B8954E`,
Syne + Inter + JetBrains Mono. Selos `.tagf.f` (fato, verde) e `.tagf.p`
(premissa, vermelho). Callouts: neutro (`.callout`), `.warn` para achados que
mudam a conta, `.ok` para validações.

**Responsividade obrigatória** (mesma regra global): sem scroll horizontal. As
tabelas empilham em cartões abaixo de 700px via `table.resp` + `data-l` em cada
célula — o CSS está inline no anexo de Canoas, copiar de lá. Testar com viewport
390px antes de entregar; blocos `.fx` usam `white-space:pre` + `overflow-x:auto`
(o scroll fica dentro do bloco, nunca no body).

## Entrega

- Commitar em `anexos/`.
- Enviar o arquivo ao CEO (abre no navegador; imprime em PDF com Ctrl+P se ele
  preferir circular assim).
- **Nunca** linkar o anexo a partir do `index.html` nem de qualquer página publicada.

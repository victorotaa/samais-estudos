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

> **Não incluir seção "Premissas e fontes".** Decisão do CEO: separação fato ×
> premissa não é relevante comercialmente numa apresentação digital — é tratativa
> verbal/interna. Se o rascunho gerar essa seção, remover antes de publicar.

## Preferências fixas (CEO)

- **CTA final sem contato e sem botão.** A dobra de fechamento é uma afirmação
  (eyebrow + título + lede), nunca um formulário ou "fale conosco".
- **Rodapé sem link cruzado para os demais estudos** (cada estudo é peça fechada;
  a navegação entre estudos vive só no hub `index.html`).
- **Variar as fotos ao longo do documento** — não repetir a mesma imagem do
  município em hero, faixas e CTA. Buscar 3–4 fotos distintas e validadas.
- **Valor + população juntos:** ao lado de cada valor de referência/ofertado,
  repetir o número de habitantes declarado. Ancora o decisor (valor × população
  lado a lado).
- **Curadoria de fotos:** priorizar **paisagens e cartões-postais** (sobretudo no
  hero). **Evitar** imagens religiosas, fotos de bairros sem destaque e ambientes
  fechados/institucionais (prédios públicos, interiores). A foto compõe o estudo —
  tem de "vender" o lugar.
- **Critério de resolução mínima** (somos muito visuais — foto ruim derruba o estudo):
  hero com fonte ≥ **2000px** de largura (ideal 2400px+); bandas e CTA ≥ **1600px**.
  **Nunca ampliar** imagem pequena; orientação sempre **paisagem**; sem
  texto/marca-d'água/logo embutidos; nítida e bem exposta. Servir em ~1920px no web.
- **Fotos protagonistas:** a imagem deve estar **aparente**, não só decorativa —
  bandas generosas, hero com escurecimento contido (legibilidade × visibilidade) e,
  quando houver cidades-foco, mostrar uma foto de cada logo no início.
- **Fonte das imagens:** preferir **licença livre + URL estável** (Wikimedia Commons)
  por ser cliente-facing publicado. Imagens de busca genérica (Google) só se
  **baixadas e hospedadas no próprio site** após checagem de uso — nunca hotlink.
- **Contatos-chave após os valores:** incluir, em "próximos passos", os contatos
  reais (presidentes de consórcio, secretários executivos, prefeitos, secretários
  de saúde, SES-MG), com selo de procedência (✓ verificado / ⚠ a reconfirmar).
  Nomes voláteis (secretários) sempre marcados para reconfirmar por telefone.
  **Exceção:** se o documento é uma **proposta entregue diretamente** aos próprios
  interlocutores listados (ex.: HTML enviado à governança do consórcio-alvo), **não**
  incluir a tabela de Interlocução — soa estranho mostrar "a quem ligar" sobre a
  própria organização do leitor. A tabela vale para documentos internos/prospecção,
  não para a peça final entregue ao próprio contato.
- **O valor da proposta é o objeto central do documento — na seção de
  Viabilidade, ele deve ser o elemento visualmente mais alto de todo o estudo.**
  Não embutir o valor mensal como mais uma linha de tabela: usar um componente de
  destaque (`.value-hero`: número grande, `clamp(46px,9vw,100px)`, cor de destaque,
  centralizado, com label acima e sub-info de população/escopo abaixo). Valor
  anual e por-morador ficam **secundários** (menores, ao lado, tratados como
  `.value-secondary`). A dedução da verba federal e o valor líquido final ficam
  **visíveis mas discretos** (fonte pequena, mono, `.value-federal`) — aparecem,
  mas não competem com o número principal. Ver `site/estudos/avare-sp.html` §05
  como referência de implementação.
- **Responsividade é obrigatória, não opcional — e regra vale para TODA criação
  nossa: nunca recorrer a barra de rolagem horizontal.** Toda informação deve
  ficar sempre visível na tela, com baixo atrito cognitivo — o usuário não deve
  ter que arrastar o dedo lateralmente para ler um valor.
  - **Tabelas (`.tbl`) nunca mais fazem scroll horizontal.** O mecanismo é
    **automático e global** (não precisa de nada extra por estudo): `samais.js`
    injeta `data-label` em cada célula (a partir do header da coluna) e, abaixo
    de 720px, `samais.css` empilha cada linha em um cartão (título em negrito +
    pares rótulo/valor abaixo) — funciona para qualquer tabela, de 2 a 5+
    colunas, mesmo com texto longo (ex.: tabelas de "comparação honesta" com
    frases inteiras por célula). Basta usar `<table class="tbl">` com
    `<thead><tr><th>...</th></tr></thead>` normalmente; nada a configurar.
  - `.bring .row` (blocos de escopo) empilha em coluna única abaixo de 720px —
    already corrigido globalmente (antes o texto do valor sobrepunha o da chave).
  - **Antes de publicar, sempre testar a versão mobile de verdade** (Playwright
    num viewport ~390px, ou o navegador do celular) — não basta revisar o CSS de
    olho; capturar print da seção crítica (hero, tabelas, blocos de escopo) e
    conferir que nada corta, sobrepõe ou exige scroll lateral.
  Quando um estudo usa o bloco inline `<style>` de "fotos protagonistas" (hero/band
  com opacidade e altura customizadas), **sempre** incluir dentro dele a media
  query mobile:
  ```css
  @media (max-width:720px){
    .hero-bg{opacity:.58}
    .band{height:clamp(220px,58vw,340px)}
  }
  ```
  Herói/bandas com opacidade "mais aparente" (~.50–.52) em telas grandes ficam
  claras demais e cortam mal em telas estreitas; no mobile sobe a opacidade e
  reduz a altura da banda para manter legibilidade e enquadramento.

## Imagens

- **Hero:** foto que identifique o município. Buscar em fonte com URL estável e
  licença livre (ex.: Wikimedia Commons) e **referenciar a URL** (o navegador do
  visitante carrega a imagem; o ambiente de build pode ter egress restrito).
  Creditar a foto no rodapé.
- **Banco de imagens Samais** (viaturas etc.) está no Drive da Samais; quando
  embutir, salvar em `site/assets/img/` (arquivos grandes não cabem no contexto da
  sessão — baixar fora ou pedir o anexo).
- **Imagens geradas (IA): a imagem pode e deve ser grande (hero/banda/CTA em
  tamanho normal) — só o TEXTO de disclosure é que fica pequeno e discreto.**
  Quando o CEO indicar um banco de imagens geradas (ex.: storyboard de vídeo),
  usá-las em tamanho pleno é válido e esperado; a norma de transparência é
  satisfeita com um selo mínimo, não com uma imagem minúscula. Padrão: componente
  `.illustrative-tag` — uma etiqueta pequena (8px, mono, fundo escuro translúcido)
  posicionada no canto inferior direito da própria imagem grande, com o texto
  "Imagem ilustrativa". A legenda principal (eyebrow/título da banda) fica limpa,
  sem menção a "ilustrativa" — só a etiqueta de canto carrega essa informação.
  Ver `site/estudos/avare-sp.html` para o padrão de referência.

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

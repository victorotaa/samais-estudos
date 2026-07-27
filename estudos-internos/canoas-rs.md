# Canoas/RS — SAMU 192 + Rede CAPS (estudo de operação · Camada 1 Samais→OS)

> **CONFIDENCIAL · USO INTERNO SAMAIS.** Contém composição de custo, BDI e
> premissas. HTML cliente-facing: `estudos/canoas-rs.html` (não expõe
> BDI/CDO nem a decomposição). Valores **v2**, ancorados no número do CEO — ver §4 e §5.

> **Enquadramento (nota do cliente):** a OS/CEBAS contrata a Samais para operar
> (Camada 1). Precificamos com **nosso BDI** (Composição do Valor Contratual). O
> "mais um pouco" da OS até o município (Camada 2) **não** é tratado aqui — o
> estudo é a apresentação da Samais à OS, não toca nos números da OS.

## 1. Escopo (fonte: Orçamentos SMS Canoas 194/2026 SAMU e 211/2026 CAPS)

- **Canoas — 347.657 hab** (IBGE cód. 4304606) · atende também **Nova Santa Rita**.
- **SAMU 194/2026** · prazo de orçamento **24/07/2026 17h**. Frota **cedida pelo
  município** (sem CAPEX): 2 USA + 4 USB + 2 reserva + 2 moto + 1 reserva. Base:
  Av. Victor Barreto 1870 (nova sede unificada). Regulação própria.
- **CAPS 211/2026** · prazo **06/08/2026 18h**. 5 unidades: CAPS III Recanto dos
  Girassóis (24h), CAPS AD III Amanhecer (24h), CAPS AD III Travessia (24h),
  CAPS II Novos Tempos (diurno), **CAPSi Cataventos (diurno, nova — imóvel por
  conta da contratada)**.
- **Enquadramento:** parceria MROSC (Lei 13.019/2014), OSC/CEBAS. Equipe CLT.

## 2. Dimensionamento (headcount)

**SAMU ~80 CLT.** O termo (item 4.9) lista **40 efetivos no plantão** e manda
**provisionar folguistas/feristas** — é o FC na letra do edital. Postos 24/7 em
12×36 (2 médico, 3 enf, 4 téc, 6 condutor) + motolância 12h + admin 40h. O termo
ainda fornece as **horas mensais por categoria** (pág. 14) — usadas direto no custo.

**CAPS ~183 CLT.** 3 unidades 24h (com plantão noturno e fim de semana cobertos,
folguista exigido) ≈ 46 cada; 2 diurnas ≈ 21 cada; + comuns (1 farmacêutico, 2
motoristas). Rateio fino da escala 24h a fechar em diligência.

## 3. Parâmetros aplicados

| Parâmetro | Valor | Procedência |
|---|---|---|
| Encargos | 68,24% (régua Avaré) | ⚠️ confirmar para RS |
| Insalubridade | 20% (NR15 Anexo 14) | ✅ exigência do termo |
| Periculosidade | 30% (condutor motolância) | ✅ exigência do termo |
| Pisos enfermagem | Enf R$ 4.750 · Téc R$ 3.325 (Lei 14.434) | ✅ piso legal |
| Médico | R$ 140/h carregado (v2) | ⚠️ maior sensibilidade do bloco A |
| Demais pisos (condutor, farmac., admin, CAPS) | estimativa | ⚠️ a validar CCT-RS |
| BDI | Composição do Valor Contratual — **52% (v2)**, para reserva real | decisão CEO jul/2026 |

## 4. Preço — v2, ancorado no número do CEO (André)

> **Âncora (jul/2026):** André informou que **o SAMU comporta R$ 2,0 milhões/mês**,
> confirmado como **o que a Samais recebe e também o teto do município** (a camada
> da OS fica dentro desse valor, não por cima). Base de trabalho a partir daqui.

### Correção relevante da v1 → v2

A v1 (R$ 1,22 mi) estava **subdimensionada**. Dois motivos:

1. **Horas extras de capacitação (NEP) — R$ 229 mil/mês omitidos.** O termo (pág.
   14) exige horas extras obrigatórias: médico 400h, enfermeiro 600h, técnico
   600h, condutor 250h, motolância 150h. ✅ **FATO do edital.**
2. Pisos estimados baixos e blocos B/C/D subestimados (sem seguro total da frota
   — exigência do termo —, uniformes/EPI detalhados, resíduos, esterilização,
   controle de pragas, manutenção predial e de equipamentos).

### SAMU · CDO reforçado

| Bloco | R$/mês |
|---|---|
| A · Pessoal (~80 CLT, inclui NEP 229k) | 1.028.200 |
| B · Materiais/medicamentos/gases | 110.000 |
| C · Frota + apoio (comb/manut ✅ + seguro, EPI, resíduos, predial) | 83.555 |
| D · Gestão/TI/CoPilot/NEP estrutura | 95.000 |
| **CDO** | **1.316.755** |

**Preço = R$ 2.000.000/mês** · R$ 5,75/hab · R$ 24 mi/ano · **BDI implícito 52%**.

Composição a R$ 2,0 mi: tributos 13,5% (270.000) · administrativas 8% (105.340) ·
tecnologia 5% (65.838) · reserva técnica 3% (39.503) · capacitação 2% (26.335) ·
contingências 2,5% (32.919) · **remuneração empresarial R$ 143.310 (7,2% do preço)**.

> **Por que 52% e não os 35% da doutrina:** a R$ 1,22 mi (BDI 35%) a remuneração
> ficava em ~R$ 36 mil — **margem que não sobrevive a um problema operacional**
> (viatura parada, reposição de escala, passivo). Decisão do CEO: operar com
> reserva real. O preço segue **ancorado no teto de mercado** (R$ 5,75/hab está
> **abaixo** da régua Ourinhos corrigida de 10,6/hab e da Métrica de Ouro de
> 5,20/hab + linha USA — Canoas tem 2 USA).

### CAPS · CDO reforçado

| Bloco | R$/mês |
|---|---|
| Pessoal (5 unidades, ~183 CLT) | 1.429.014 |
| Imóvel CAPSi (locação + adequação amortizada) | 28.000 |
| Materiais e medicamentos | 95.000 |
| Apoio (limpeza, resíduos, transporte de equipes) | 52.000 |
| Gestão/TI/NEP | 88.000 |
| **CDO** | **1.692.014** |

**Preço ≈ R$ 2.570.000/mês** (BDI 52%) · remuneração ~R$ 186 mil (7,2%).

> ⚠️ **Achado crítico:** no BDI padrão de 35%, o CAPS daria **resultado negativo
> (−2,8%)** — R$ 2,28 mi não cobre CDO + tributos + linhas do BDI. Uma operação de
> 183 CLT em 5 unidades **não se sustenta na régua de 35%**. Não propor CAPS abaixo
> de ~R$ 2,5 mi.

### Operação integrada (referência exibida no HTML)

**≈ R$ 4,6 mi/mês** (SAMU 2,0 + CAPS 2,6) · **R$ 13,15/hab** · ~263 CLT ·
R$ 54,9 mi/ano.

⚠️ O CAPS **não tem âncora do CEO** — o R$ 2,0 mi do André é do SAMU. Validar o
valor do CAPS antes de apresentar.

## 5. O que firma o número

- ✅ Fatos: horas por categoria (termo), pisos de enfermagem (Lei 14.434),
  combustível e manutenção reais (termo), frota cedida.
- ⚠️ Premissas a validar: pisos de médico, condutor, farmacêutico, admin e todas
  as categorias CAPS; blocos B e D; escala 24h fina do CAPS; encargos para RS;
  base de cálculo da insalubridade (SM × piso × salário-base).
- Firma quando: (a) egress web reabrir (pesquisa CCT-RS) ou (b) CEO passar a CCT.

## 6. Riscos e pendências

- **Qualificação CEBAS** é pré-requisito da parceria — assunto jurídico da OS,
  tratar só em conversa (não em arquivo).
- **Deploy Vercel + pesquisa de pisos** bloqueados por egress fechado nesta sessão
  (política de rede mudou no meio; provável exigir nova sessão/ambiente).
- SAMU tem prazo curto (24/07); CAPS 06/08.
- Coexiste o Salvar-SAMU estadual (RMPA) — escopo distinto do SAMU municipal.

## 7. Cenário tributário B — contratação privada com Lucro Presumido

> **Pedido do CEO (jul/2026):** precificar o SAMU também como **contratação
> privada tributada pelo Lucro Presumido**, em vez da parceria MROSC/OSC. Muda
> a carga tributária e, portanto, a remuneração.

### A carga em Canoas

| Tributo | Alíquota |
|---|---|
| PIS | 0,65% |
| COFINS | 3,00% |
| IRPJ (presumido) | 4,80% |
| CSLL (presumido) | 2,88% |
| **ISS Canoas — serviços de saúde** | **4,00%** ✅ |
| **Total sobre faturamento** | **15,33%** |

✅ **ISS confirmado:** Canoas elevou a alíquota de serviços de saúde para **4,0%**,
em vigor desde **12/01/2026** (reajuste do município em resposta à reforma
tributária; Lei Municipal 4.818/2003 e alterações). **Não são os 5% do teto** —
diferença que vale ~R$ 20 mil/mês no SAMU. ⚠️ Confirmar o subitem/CNAE exato na
tabela oficial da Prefeitura antes de fechar proposta.

### Comparação dos dois regimes

| | A · MROSC/OSC (13,5%) | B · Privada · L. Presumido (15,33%) |
|---|---|---|
| **SAMU — preço mantido** | R$ 2,00 mi · rem. R$ 143 mil (**7,2%**) | R$ 2,00 mi · rem. **R$ 107 mil (5,3%)** |
| **CAPS — preço mantido** | R$ 2,57 mi · rem. R$ 186 mil (**7,2%**) | R$ 2,57 mi · rem. **R$ 139 mil (5,4%)** |

**Manter o preço no regime privado custa ~1,9 ponto de remuneração.**

### Preço que preserva os 7,2%

| Frente | Preço ajustado | Delta | Remuneração | BDI |
|---|---|---|---|---|
| SAMU | **R$ 2.048.134** | +R$ 48.134 | R$ 147.466 (7,2%) | 56% |
| CAPS | **R$ 2.631.828** | +R$ 59.967 | R$ 189.492 (7,2%) | 56% |
| **Integrado** | **R$ 4.679.962** | +R$ 108.101 | — | — |

Per capita do SAMU: **5,75 → 5,89/hab**. Segue **muito abaixo** da régua Ourinhos
corrigida (10,6/hab), então o ajuste **não compromete a defesa do preço**.

### Leitura

O reajuste necessário é de apenas **+2,4%** — pequeno porque o ISS de Canoas (4%)
ficou abaixo do teto. Se a alíquota fosse 5%, o mesmo preço entregaria só 4,3% de
remuneração e o ajuste teria de ser bem maior.

**Recomendação:** se o contrato for privado, propor **R$ 2,05 mi** no SAMU em vez
de R$ 2,0 mi. Se o teto de R$ 2,0 mi for inegociável, aceitar 5,3% de remuneração
é viável, mas fica **abaixo do piso prudente de ~7%** definido após a lição do BDI
— margem que não sobrevive bem a oscilação operacional.

⚠️ **Assunto de estruturação jurídico-tributária não é registrado aqui** — tratar
apenas em conversa (regra do CLAUDE.md).

## 8. CORREÇÃO — Fator de Cobertura do plantão CAPS (jul/2026)

⚠️ **Erro de cálculo identificado e corrigido.** Na v2 apliquei **FC 2,25** ao
bloco de plantão das unidades CAPS 24h. O correto é **3,00**.

O termo exige, **além** da equipe diurna de segunda a sexta:
- **(b)** plantão noturno 19h–7h **todos os dias** → 12h × 7 = **84h/semana**
- **(c)** plantão diurno 7h–19h em **sábados, domingos e feriados** → 12h × 2 = **24h/semana**

Total de **108h/semana** por posto. Com jornada CLT de **36h/semana** da
categoria: **FC = 108 ÷ 36 = 3,00**. Eu havia contabilizado apenas a cobertura
noturna aproximada, deixando o plantão de fim de semana descoberto.

| | Valor |
|---|---|
| Bloco de plantão por unidade (1 enf + 3 téc + 1 aux limpeza) | R$ 36.542 |
| Subestimação por unidade 24h (0,75 × bloco) | R$ 27.406 |
| **× 3 unidades 24h** (Recanto, Amanhecer, Travessia) | **R$ 82.219** |

**CDO do CAPS: 1.692.014 → 1.774.233.**

### O que é enxugável (e por que quase se anula)

| Alavanca | Efeito | Situação |
|---|---:|---|
| Sinergia SAMU+CAPS (gestão, NEP, TI, farmácia) | −58.560 | ✅ real — vantagem da operação integrada |
| Materiais e apoio mais enxutos | −22.050 | ✅ premissa, dá para apertar |
| Composição das equipes | 0 | ❌ **fixada unidade a unidade no termo (item 11.15)** |
| Cobertura 24h | 0 | ❌ exigência do termo |
| **Correção do FC acima** | **+82.219** | ⚠️ obrigatória |

**Saldo: +R$ 1.609.** O enxugamento praticamente anula a correção — o CDO fica em
**R$ 1.693.623** e o preço a 7,2% permanece em **~R$ 2,63 mi**.

### A única alavanca grande: regime de vínculo dos psiquiatras

O termo do CAPS **não exige CLT** — ao contrário do SAMU:

> **Item 11.4:** *"A definição da modalidade de vínculo ou de contratação dos
> profissionais compete à OSC, sob sua exclusiva responsabilidade"*

Psiquiatras custam **R$ 363.398/mês em CLT** (21% do CDO do CAPS). Como
PJ/plantonista: **R$ 216.000** — economia de **R$ 147.398/mês**, levando o preço
a 7,2% de R$ 2,63 mi para **~R$ 2,40 mi**.

✅ **ADOTADO (decisão do CEO, jul/2026)** — o termo do CAPS permite (item 11.4).

**CDO do CAPS: 1.693.623 → 1.546.225. Preço a 7,2%: R$ 2,63 mi → ~R$ 2,40 mi.**

⚠️ Ressalvas que permanecem e devem ser tratadas com o jurídico: (a) vínculo PJ
em função com subordinação gera **risco de passivo trabalhista**; (b) colide com
o nosso argumento comercial de "equipe CLT sem passivo" — o discurso precisa ser
ajustado para não prometer no CAPS o que só vale no SAMU.

## 10. Valores consolidados e discriminação por viatura (jul/2026)

Consolida as decisões: **contratação privada** (Lucro Presumido 15,33%, com ISS
Canoas de 4%) e **psiquiatras PJ no CAPS** (autorizado pelo item 11.4 do termo).

### Valores de referência

| Frente | CDO | **Preço @7,2%** | Remuneração | BDI |
|---|---:|---:|---:|---:|
| SAMU 192 (~80 CLT) | 1.316.755 | **R$ 2.048.134** | 147.466 (7,2%) | 56% |
| Rede CAPS (~183 CLT, psiq. PJ) | 1.546.225 | **R$ 2.405.061** | 173.164 (7,2%) | 56% |
| **Integrado** | **2.862.980** | **R$ 4.453.196** | — | 56% |

**SAMU: R$ 5,89/hab · Integrado: R$ 12,81/hab · R$ 53,4 mi/ano.**

### Faixa de negociação

| Nível | SAMU | CAPS |
|---|---:|---:|
| **Referência** (remuneração 7,2%) | **2.048.134** | **2.405.061** |
| **Piso** (remuneração 4% — mínimo) | 1.966.890 | 2.309.658 |
| Equilíbrio (0%) — **nunca contratar** | 1.873.969 | 2.200.545 |

O espaço de desconto é **estreito: ~4%** no SAMU. Diferente de Avaré (17%),
porque aqui o escopo é fixado pelo termo e não há Lean Sizing para absorver.

### Tabela por viatura — régua Canoas

⚠️ **Não usar a tabela de `referencias/tabela-precos-unitarios.md` aqui.** Aquela
é da régua de Avaré (CCT-SP, margem sobre custo com indiretos). Canoas está na
régua do BDI, com tributos de 15,33% e pisos do RS — frames diferentes.

| Unidade | Custo | **Referência** | Piso 4% |
|---|---:|---:|---:|
| **USA** · Suporte Avançado 24/7 | 327.387 | **509.232** | 489.032 |
| **USB** · Suporte Básico 24/7 | 78.978 | **122.846** | 117.973 |
| **Motolância** 12h | 58.594 | **91.139** | 87.524 |
| **Reserva técnica** (por viatura) | 10.444 | **16.245** | 15.600 |
| **Gestão da operação** | 207.990 | **323.516** | 310.683 |

**Aferição:** 2 USA + 4 USB + 2 motolâncias + 2 reservas + gestão = CDO de
**R$ 1.316.755** — bate exatamente com o bloco A+B+C+D do estudo ✓

**Alocação:** pessoal direto por posto (2 médicos, 3 enfermeiros, 4 técnicos, 6
condutores, 2 condutores de motolância, conforme o termo); NEP rateada pelo peso
do pessoal de cada unidade; materiais e frota divididos pelas 8 viaturas ativas;
apoio 40h e bloco D na linha de gestão.

### O contraste que explica tudo

| | Avaré (CCT-SP) | **Canoas** |
|---|---:|---:|
| USA — preço de referência | R$ 422.286 | **R$ 509.232** (+21%) |
| Médico da USA | R$ 91.312 (plantonista) | **R$ 175.239** (CLT + 68% encargos) |

A USA de Canoas custa 21% mais **porque o termo exige CLT** (item 4.9). Em Avaré
o médico é plantonista com taxa cheia. **É a maior diferença estrutural entre os
dois contratos** — e é o que impede replicar a régua de um no outro.

## 11. Discurso comercial — ajuste obrigatório após o PJ

Com psiquiatras PJ no CAPS, **não podemos mais prometer "equipe CLT sem passivo"
naquela frente**. O argumento precisa ser segmentado:

- **SAMU:** ✅ equipe 100% CLT (exigência do próprio termo, item 4.9) — o
  argumento de "sem passivo" continua válido e é verificável.
- **CAPS:** ❌ **não usar** o argumento de CLT. Vender **cobertura de escala
  garantida, equipe multiprofissional completa e continuidade do cuidado**, que
  são as dores reais da RAPS.

⚠️ Usar o discurso errado no CAPS é risco duplo: perde credibilidade se
verificarem, e enfraquece a posição se o vínculo for questionado depois.

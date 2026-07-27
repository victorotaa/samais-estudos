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

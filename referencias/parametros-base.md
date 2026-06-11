# Parâmetros-Base — os "botões" da Fórmula Mestre

> Centraliza todos os percentuais, fatores, índices e valores de referência usados
> no cálculo. **Calibre aqui** conforme entrarem dados reais — a começar pelos
> números de Maringá (padrão ouro). Cada valor traz a fonte e o status
> (`normativo` = de portaria/lei; `referência` = típico de mercado, confirmar;
> `a calibrar` = placeholder até termos dado real).

---

## 1. Dimensionamento de frota (normativo)

| Parâmetro | Valor | Fonte | Status |
|---|---|---|---|
| 1 USB a cada | 100.000–150.000 hab | Portaria GM/MS 1.864/2003; 1.010/2012 | normativo |
| 1 USA a cada | 400.000–450.000 hab | idem | normativo |
| Motolância / VIR | por densidade urbana e tempo-resposta | Portaria 1.010/2012 | normativo |
| Prioridade de cálculo | sempre o que o **edital** exige; parâmetro = checagem | — | regra |

## 2. Composição mínima das viaturas (normativo — Portaria 1.010/2012)

| Unidade | Tripulação por turno |
|---|---|
| USB | condutor socorrista + técnico/auxiliar de enfermagem |
| USA | condutor socorrista + enfermeiro + médico |
| VIR | condutor + médico + enfermeiro |
| Motolância | 1 enfermeiro (técnico ou superior) habilitado |
| Central de Regulação (até 350 mil hab) | 1 médico regulador (dia/noite) + 2–3 TARM + 1 rádio-operador (dia/noite) |

## 3. Fator de Cobertura de Escala (FC) — posto 24×7

| Item | Valor de referência | Observação |
|---|---|---|
| Horas a cobrir/mês por posto 24×7 | ≈ 730,5 h | 24 h × 30,44 dias |
| FC só para fechar escala (jornada 44h) | ≈ 4,0–4,5 | antes de férias/13º/absenteísmo |
| **FC efetivo (com férias, 13º, absenteísmo)** | **≈ 5,0–5,5** | usar este para provisionar pessoal |
| Absenteísmo de referência | 5–10% | calibrar pela operação real |

> Ajustar por jornada da CCT (12×36, 44 h, 40 h) e por categoria. **A calibrar**
> com a escala real de Maringá.

## 4. Encargos sociais e custo de pessoal (referência)

| Componente | Faixa de referência | Status |
|---|---|---|
| Encargos sociais sobre salário (CLT, saúde) | **68–80%** | referência |
| — Grupo A (INSS patronal, FGTS, RAT/SAT, terceiros) | ~36–38% | referência |
| — Grupo B (férias, 13º, abono, licenças) | ~20–22% | referência |
| — Grupo C (aviso prévio, multa FGTS, rescisão) | ~5–8% | referência |
| — Grupo D (incidências de A sobre B) | ~7–9% | referência |
| Adicional de insalubridade (saúde, grau médio) | 20% do salário-mín. ou base CCT | normativo/CCT |
| Adicional noturno | ≥ 20% sobre hora noturna | normativo/CCT |
| Sobreaviso médico | conforme CCT | a calibrar |
| Piso salarial por função | **da CCT da categoria/região** | a calibrar |

> Os pisos (médico, enfermeiro, técnico de enfermagem, condutor socorrista, TARM,
> rádio-operador, administrativo) vêm da **Convenção Coletiva vigente** da região
> do estudo. Manter aqui uma tabela por estudo.

## 5. BDI, margem e tributos (Cenário B)

| Item | Valor | Status |
|---|---|---|
| **Margem-alvo Samais** | **35% (arredondar para mais)** | política interna |
| Forma de embutir | distribuída no BDI (despesas indiretas, reserva técnica, risco, remuneração da gestão) — **não** como linha "lucro" isolada | política |
| Fator K de referência (serviços, MPU) | 2,5–2,7 (faixa de mercado p/ serviços; ver fonte) | referência |
| Gross-up correto | `Preço = Custo ÷ [1 − (Tributos% + Margem%)]` | método |

### Tributos sobre faturamento — referência por regime

| Tributo | Lucro Presumido (serviços) | Observação |
|---|---|---|
| ISS | 2–5% | alíquota do município contratante |
| PIS (cumulativo) | 0,65% | — |
| COFINS (cumulativo) | 3,00% | — |
| IRPJ | 15% sobre presunção de 32% → ~4,8% efetivo | + adicional 10% acima de R$20k/mês |
| CSLL | 9% sobre presunção de 32% → ~2,88% efetivo | — |
| **Carga efetiva aproximada** | **~13–16% do faturamento** | confirmar caso a caso |

> Decidir Lucro Real × Presumido por contrato. **A calibrar** com a contabilidade
> da Samais.

## 6. Repasse federal SAMU 192 (receita — para o Encontro de Contas)

| Item | Valor | Fonte | Status |
|---|---|---|---|
| Marco do reajuste | +30% no custeio (de R$1,3 bi → R$1,7 bi/ano), 1ª atualização desde 2013 | Portaria GM/MS 958/2023 (altera Portaria de Consolidação 6/2017) | normativo |
| Valores mensais por unidade (USB, USA, Central, motolância, fluvial) | **confirmar na tabela vigente da Portaria de Consolidação 6/2017 atualizada** | MS/FNS | a confirmar |
| Repasse estadual | varia por UF | Secretaria Estadual de Saúde | a calibrar |
| Contrapartida municipal | rateio por população/cota do consórcio | estatuto/contrato | a calibrar |

> Buscar os valores unitários atualizados por habilitação (habilitada ×
> habilitada e qualificada) antes de cada estudo — eles mudam por portaria.

## 7. Camada temporal

| Item | Referência | Status |
|---|---|---|
| Índice de reajuste de insumos/serviços | IPCA (ou o do edital) | conforme edital |
| Reajuste de pessoal | dissídio/CCT na data-base | conforme CCT |
| Vida útil de ambulância (depreciação) | 5 anos / ~150–200 mil km | referência |
| Mobilização/start-up | % do contrato no 1º mês | a calibrar |

## 8. Benchmarks de validação (sanidade)

| Indicador | Faixa esperada | Status |
|---|---|---|
| Peso da folha (pessoal ÷ custo total) | ~55–70% | referência |
| Custo por habitante/ano | **calibrar com Maringá** | a calibrar |
| Custo por viatura/mês | **calibrar com Maringá** | a calibrar |
| Custo por atendimento | **calibrar com Maringá** | a calibrar |
| Cobertura do repasse federal | informativo | — |

> **Padrão Ouro Maringá:** assim que tivermos a planilha de Maringá preenchida,
> registrar aqui os valores reais por indicador. Eles passam a ser o gabarito
> contra o qual todo estudo novo é checado.

---

### Fontes

- Portaria GM/MS nº 1.864/2003 — diretrizes e parâmetros do SAMU.
- Portaria GM/MS nº 1.010/2012 — composição das unidades e Central de Regulação.
- Portaria GM/MS nº 958/2023 — reajuste de custeio (+30%), altera Portaria de
  Consolidação GM/MS nº 6/2017.
- Convenção Coletiva de Trabalho (CCT) da categoria/região — pisos e adicionais.
- Referências de Fator K / BDI em serviços terceirizados (mercado / TCU / MPU).

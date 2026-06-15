# Parâmetros-Base — os "botões" da Fórmula Mestre

> Centraliza percentuais, fatores, índices e referências do cálculo. **Não são
> valores fixos a aplicar cegamente** — a fórmula é alimentada pelo contexto real
> de cada ente. Leia junto com os **Princípios Reitores** da Fórmula Mestre.
>
> Cada item tem um **status** que define como pode ser usado:
> - `normativo` — de portaria/lei: é dado real, pode ser usado direto.
> - `a levantar` — **deve vir da pesquisa/input do estudo**; nunca preencher por
>   estimativa inventada (Princípio da Realidade). Sem dado = pendência sinalizada.
> - `validação` — banda apenas para **conferir sanidade** do resultado, não para
>   preencher valor.
> - `referência (teto conservador)` — quando admitida como premissa e o real não
>   foi levantado, usar o **limite superior** da faixa e rotular como premissa a
>   validar (Princípio da Projeção Conservadora — sempre o mais caro).

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
| **FC para posto 24/7 (12×36), com férias/13º já nos encargos** | **≈ 4,4–4,5** | headcount físico: 2 turnos × 2 turmas + absenteísmo |
| FC alternativo (se férias/13º **não** estiverem nos encargos) | ≈ 5,0–5,5 | evita subcontagem, mas **não** usar junto com encargos que já provisionam férias |
| Absenteísmo de referência | 5–10% | já embutido no FC |
| ❌ **Erro comum (não usar)** | FC ≈ 2,0–2,2 | cobre só **um turno de 12h** — subdimensiona o 24/7 pela metade |

> **Não duplicar férias/13º:** se os encargos (~68%) já provisionam férias e 13º, o
> FC é só o **headcount físico** (~4,5). O fator **2,2** do modelo preliminar de
> Belém cobre apenas um turno — é exatamente o erro que infla a diferença entre
> projeção e realidade (lição Taboão: **148 reais vs 80 modelados ≈ 1,85×**, que
> coincide com a correção da nossa fórmula). André usou 4,5 para o médico regulador
> e 2,2 para o resto: aplicar **4,5 de forma consistente** a todo posto 24/7.

## 4. Encargos sociais e custo de pessoal (referência)

| Componente | Faixa de referência | Status |
|---|---|---|
| Encargos sociais sobre salário (CLT, APH) | **68,24%** (calibrado) | calibrado (modelo André, IN SEGES 05/2017); insalubridade à parte |
| — Grupo A (INSS patronal, FGTS, RAT/SAT, terceiros) | ~36–38% | referência |
| — Grupo B (férias, 13º, abono, licenças) | ~20–22% | referência |
| — Grupo C (aviso prévio, multa FGTS, rescisão) | ~5–8% | referência |
| — Grupo D (incidências de A sobre B) | ~7–9% | referência |
| Adicional de insalubridade (saúde, grau médio) | 20% do salário-mín. ou base CCT | normativo/CCT |
| Adicional noturno | ≥ 20% sobre hora noturna | normativo/CCT |
| Sobreaviso médico | conforme CCT | a calibrar |
| Piso salarial por função | **da CCT da categoria/região** | a levantar |

> Os pisos (médico, enfermeiro, técnico de enfermagem, condutor socorrista, TARM,
> rádio-operador, administrativo) vêm da **Convenção Coletiva vigente** da região
> do estudo. Manter aqui uma tabela por estudo.

## 5. BDI, margem e tributos (Cenário B)

| Item | Valor | Status |
|---|---|---|
| **Margem-alvo Samais** | **35% (arredondar para mais)** | política interna |
| ⚠️ Conflito a resolver | modelo preliminar do André usa **18%** (faixa 15–22%) | André × política 35% |
| Forma de embutir | distribuída no BDI (despesas indiretas, reserva técnica, risco, remuneração da gestão) — **não** como linha "lucro" isolada | política |
| Regime tributário | quando indefinido, projetar **sempre o de MAIOR carga** (mais caro) | política conservadora |
| Fator K de referência (serviços, MPU) | 2,5–2,7 (faixa de mercado p/ serviços; ver fonte) | validação |
| Gross-up correto | `Preço = Custo ÷ [1 − (Tributos% + Margem%)]` | método |

### Tributos sobre faturamento — referência por regime

| Tributo | Lucro Presumido (serviços) | Observação |
|---|---|---|
| ISS | 2–5% | alíquota do município contratante |
| PIS (cumulativo) | 0,65% | — |
| COFINS (cumulativo) | 3,00% | — |
| IRPJ | 15% sobre presunção de 32% → ~4,8% efetivo | + adicional 10% acima de R$20k/mês |
| CSLL | 9% sobre presunção de 32% → ~2,88% efetivo | — |
| **Carga efetiva (Belém, Presumido)** | **16,33% do faturamento** | calibrado (modelo André): PIS 0,65 + COFINS 3 + IRPJ 4,8 + CSLL 2,88 + ISS 5 |

> Quando o regime efetivo não estiver definido pelo contexto, **projetar o de
> maior carga** (mais caro). Quando definido, usar o real. **A calibrar** com a
> contabilidade da Samais.

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
| **Custo por viatura/mês (mercado)** | **R$ 93k–159k** (CIMSAMU 94k · Ourinhos/Samais 159k · FAHECE 93k) | calibrado (modelo André) |
| Custo por atendimento | **calibrar com Maringá** | a calibrar |
| Cobertura do repasse federal | informativo | — |

> **Padrão Ouro Maringá:** assim que tivermos a planilha de Maringá preenchida,
> registrar aqui os valores reais por indicador. Eles passam a ser o gabarito
> contra o qual todo estudo novo é checado.
>
> ⚠️ **Tensão de benchmark:** os contratos reais ganhos rodam a **R$ 93k–159k/
> viatura/mês** (já com margem). Pessoal honesto (FC 4,5) + margem 35% empurra para
> ~R$ 280k/viatura — **~2× o mercado**. Em pregão competitivo isso não vence; só
> fecha em **contrato dirigido** ou escopo premium. A margem é a maior alavanca.

---

## 9. Valores calibrados — Belém/PA (modelo André, CCT 2024/25, data-base abr/2026)

Pisos, encargos e custos unitários extraídos do modelo de custos do André
(`SAMU_Belem_Modelo_Custos.xlsx`) — **com aval do CEO**. Servem de referência
para o Pará e de ponto de partida para outras regiões (ajustar pela CCT local).

### Pisos salariais por função (R$/mês, salário-base)

| Função | Base | Adicionais | Custo/posto carregado* |
|---|---|---|---|
| Médico Regulador (24h sem.) | 13.500 | noturno | 25.472 |
| Médico Intervencionista USA | 14.500 | noturno | 27.272 |
| Enfermeiro Intervencionista USA | 4.800 | insalub.+noturno | 10.832 |
| Enfermeiro Supervisor | 5.800 | — | 10.928 |
| Técnico de Enfermagem (Lei 14.434) | 3.325 | insalub.+noturno | 8.177 |
| Condutor Socorrista | 2.400 | insalub.+noturno | 6.512 |
| TARM | 2.100 | noturno | 4.950 |
| Rádio-Operador | 2.300 | noturno | 5.310 |
| Supervisor Operacional CR | 4.500 | noturno | 9.271 |
| Auxiliar Administrativo | 2.000 | — | 4.535 |
| Aux. Serviços Gerais/Higienização | 1.518 | insalub. | 4.745 |
| Coordenador de Frota | 4.200 | — | 8.236 |
| Mecânico/Auxiliar Frota | 2.400 | insalub. | 6.229 |
| Coordenador Médico | 18.000 | — | 31.453 |
| Coordenador de Enfermagem | 8.500 | — | 15.470 |
| Diretor Técnico (rateio 50%) | 12.000 | — | 21.359 (×0,5) |
| Piloto/Condutor Ambulancha | 3.200 | insalub.+noturno | 7.952 |

\*Custo/posto = (base + insalub. + noturno) × (1 + 68,24% encargos) + R$ 1.170 benefícios.
Insalubridade = 40% × salário-mínimo (R$ 1.518 em 2026); noturno ≈ 7% (20% sobre ~35% das horas).

### Custos unitários não-pessoal (R$/mês)

| Item | Unitário | Base |
|---|---|---|
| Combustível USB | 4.500/viatura | ~4 mil km/mês |
| Combustível USA | 4.800/viatura | uso intensivo |
| Combustível motolância | 600/moto | — |
| Combustível ambulancha | 7.500 | marítimo |
| Manutenção USB | 3.500/viatura | pneus/óleo/peças |
| Manutenção USA | 4.500/viatura | mais equipamentos |
| Manutenção motolância | 800/moto | — |
| Manutenção ambulancha | 6.000 | naval |
| Seguro de frota | 850/veículo | — |
| IPVA/licenciamento | 320/veículo | rateio mensal |
| Insumos descartáveis USB | 4.200/viatura | curativos/EPI/soros |
| Insumos USA (UTI móvel) | 9.500/viatura | drogas vasoativas/ventilador |
| Insumos motolância | 800/moto | — |
| Insumos ambulancha | 3.500 | — |
| Oxigênio medicinal | 18.000 (global) | recarga+cilindros |
| Almoxarifado + logística | 15.000 (global) | distribuição bases |
| Sistema de regulação (software) | 18.000 (global) | licenças+suporte |
| Telefonia 0800/192 + PABX | 12.000 (global) | — |
| Indiretos: overhead admin | 7% do custo direto | sede/RH/jurídico/qualidade |
| Indiretos: operacional não-pessoal | 3% do custo direto | TI/comunicação/capacitação |

> **Frota/USB de Belém:** o modelo do André usa **12 USB**; a entrega de jan/2025
> levou Belém a **20 USB** (dado real levantado). Usar **20** e confirmar em
> diligência (a própria Nota nº 1 do André pede isso).

---

### Fontes

- Portaria GM/MS nº 1.864/2003 — diretrizes e parâmetros do SAMU.
- Portaria GM/MS nº 1.010/2012 — composição das unidades e Central de Regulação.
- Portaria GM/MS nº 958/2023 — reajuste de custeio (+30%), altera Portaria de
  Consolidação GM/MS nº 6/2017.
- Convenção Coletiva de Trabalho (CCT) da categoria/região — pisos e adicionais.
- Referências de Fator K / BDI em serviços terceirizados (mercado / TCU / MPU).

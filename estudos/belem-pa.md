# Estudo SAMU — Belém/PA  ·  CONFIDENCIAL (uso interno Samais)

> Aplicação da Fórmula Mestre calibrada com o modelo de custos do André
> (`SAMU_Belem_Modelo_Custos.xlsx`). Pisos, encargos, tributos e custos unitários
> calibrados em [`../referencias/parametros-base.md`](../referencias/parametros-base.md) §9.

## 0. Decisões travadas (André)

| Decisão | Valor |
|---|---|
| Frota USB | **20** (notícias oficiais jan/2025) — + 4 USA, 4 motolâncias, 1 ambulancha |
| Margem-alvo | **35%** (definida pelo André) |
| Regime jurídico | **OS / Contrato de Gestão** (entidade do grupo Samais) |
| Fator de cobertura 24/7 | **4,5** (corrigido; o 2,2 do modelo preliminar subdimensiona) |

## 1. Os três números de partida

| Fonte | Valor/mês | Leitura |
|---|---|---|
| Modelo preliminar do André | R$ 3,25 mi | Subdimensionado (FC 2,2; 12 USB; margem 18%) |
| Alvo verbal do André | R$ 7,9 mi | Intuição do CEO |
| Fórmula Mestre (FC 4,5; 20 USB; **regime empresa**) | ~R$ 8,1 mi | Bate com o alvo verbal |

A planilha do André dava menos da metade por três erros (fator de cobertura 2,2 vs
4,5; 12 USB vs 20; margem 18% vs 35%). Detalhe e a "prova Taboão" (148/80 = 1,85×,
igual à nossa correção de custo) no histórico do commit anterior.

## 2. Custo (travado: 20 USB, FC 4,5)

| Bloco | Total/mês |
|---|---|
| Pessoal em viaturas (USB 20, USA 4, moto 4, ambulancha 1) | ~R$ 2.304 mil |
| Central de Regulação (pessoal FC 4,5 + infra) | ~R$ 643 mil |
| Não-pessoal (frota, insumos, suporte, estrutura) | ~R$ 646 mil |
| **Custo direto** | **~R$ 3.593 mil** |
| + indiretos (overhead 7% + operacional 3%) | ~R$ 359 mil |
| **Subtotal (B)** | **~R$ 3.952 mil** |

## 3. O regime OS muda o preço — esta é a questão central

O gross-up depende da carga tributária, e **OS imune ≈ 0–1%** contra **empresa ≈ 16,33%**:

| Regime tributário | Gross-up @ 35% | **Preço (35%)** | A R$ 7,9 mi, o superávit efetivo é… |
|---|---|---|---|
| Empresa (Presumido, 16,33%) | ÷ 0,487 | **~R$ 8,1 mi** | ~33% (≈ alvo) |
| **OS imune/CEBAS (~0–1%)** | ÷ 0,645 | **~R$ 6,1 mi** | **~49%** (bem acima de 35%) |

**Tradução:** se o OS obtiver imunidade (objetivo provável), manter os **35%** leva
o preço a **~R$ 6,1 mi/mês** — porque os ~16% de tributo somem do gross-up. Para
sustentar o preço em **R$ 7,9 mi** sob imunidade, o superávit efetivo sobe para
**~49%**, não 35%.

Ou seja, o ganho tributário do OS é uma **escolha estratégica**:
- **Repassar como preço menor** → ~R$ 6,1 mi: altamente competitivo e defensável.
- **Reter como superávit** → manter ~R$ 7,9 mi: captura ~49%, mas é o ponto sensível abaixo.

## 4. ⚠️ Ponto de compliance (protege o contrato)

OS é **sem fins lucrativos**. Dois cuidados, por ordem:

1. **A imunidade precisa ser real** (CEBAS + operação genuína sem distribuição de
   lucro). Sem isso, cai no regime empresa (16,33%) e o preço volta a ~R$ 8,1 mi.
2. **Superávit alto chama TCU/MP.** Muitos Contratos de Gestão **limitam a taxa de
   administração** (faixas de 5–10%). Um superávit de 35–49% repassado ao grupo
   precisa de **estrutura defensável** (composição auditável) — senão
   descaracteriza a imunidade e expõe a improbidade. É o mesmo princípio que já
   está na fórmula: *a composição tem de sobreviver à auditoria*.

> Não é recomendação de recuar do número — é o guard-rail para que o número
> **se sustente**. Com o André/jurídico, definir o **veículo** do superávit
> (taxa de gestão, contratos de serviço intragrupo a preço de mercado etc.).

## 5. Número travado (sujeito ao regime)

- **OS com imunidade + 35%** → **~R$ 6,1 mi/mês** *(mais competitivo e limpo)*.
- **OS sem imunidade (empresa) + 35%** → **~R$ 8,1 mi/mês** *(≈ alvo do André)*.
- O alvo de **R$ 7,9 mi** só fica em 35% no cenário **sem** imunidade; **com**
  imunidade, R$ 7,9 mi = ~49% de superávit.

## 6. Pendências que fecham de vez

1. **Imunidade do OS confirmada?** (CEBAS) — decide R$ 6,1 mi vs R$ 8,1 mi.
2. **Veículo do superávit de 35%** sob Contrato de Gestão (jurídico).
3. **Headcount real** em diligência (lição Taboão).
4. **CCT-PA** confirmada (André usou piso nacional da enfermagem como base).
5. **Frota cedida** (assumido); locação eventual de USA/USB como contingência (R1).

---

*Status: calibrado e com decisões travadas (20 USB, 35%, OS). Falta confirmar
imunidade tributária, veículo do superávit e diligência de headcount.*

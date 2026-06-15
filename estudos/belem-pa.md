# Estudo SAMU — Belém/PA  ·  CONFIDENCIAL (uso interno Samais)

> Aplicação da Fórmula Mestre calibrada com o modelo de custos do André
> (`SAMU_Belem_Modelo_Custos.xlsx`). Pisos, encargos, tributos e custos unitários
> calibrados em [`../referencias/parametros-base.md`](../referencias/parametros-base.md) §9.

## 0. Decisões travadas (André)

| Decisão | Valor |
|---|---|
| Frota | **20 USB** (notícias oficiais jan/2025) + 4 USA + 4 motolâncias + 1 ambulancha |
| Margem-alvo | **35%** (definida pelo André) |
| Fator de cobertura 24/7 | **4,5** (corrigido; o 2,2 do modelo preliminar subdimensiona) |

## 1. Os três números de partida

| Fonte | Valor/mês | Leitura |
|---|---|---|
| Modelo preliminar do André | R$ 3,25 mi | Subdimensionado (FC 2,2; 12 USB; margem 18%) |
| Alvo verbal do André | R$ 7,9 mi | Intuição do CEO |
| Fórmula Mestre (FC 4,5; 20 USB; 35%) | **~R$ 8,1 mi** | Bate com o alvo verbal |

A planilha do André dava menos da metade por três fatores: fator de cobertura 2,2
vs 4,5; 12 USB vs 20; margem 18% vs 35%. A "prova Taboão" (148/80 = 1,85×, igual à
nossa correção de custo direto) confirma o erro de cobertura.

## 2. Custo (travado: 20 USB, FC 4,5)

| Bloco | Total/mês |
|---|---|
| Pessoal em viaturas (USB 20, USA 4, moto 4, ambulancha 1) | ~R$ 2.304 mil |
| Central de Regulação (pessoal FC 4,5 + infra) | ~R$ 643 mil |
| Não-pessoal (frota, insumos, suporte, estrutura) | ~R$ 646 mil |
| **Custo direto** | **~R$ 3.593 mil** |
| + indiretos (overhead 7% + operacional 3%) | ~R$ 359 mil |
| **Subtotal (B)** | **~R$ 3.952 mil** |

## 3. Preço

```
Faturamento = B ÷ [1 − (tributos 16,33% + margem 35%)] = ÷ 0,4867
PREÇO SAMAIS                                          ≈ R$ 8,1 mi/mês
```

Coerente com o alvo do André (R$ 7,9 mi). Com margem 18% (a do modelo preliminar),
o mesmo custo daria ~R$ 6,0 mi — a margem é a maior alavanca do número final.

## 4. Benchmark de mercado (sanidade)

| Contrato real | R$/viatura/mês |
|---|---|
| CIMSAMU 02/2020 (Ponta Grossa) | R$ 94k |
| Ourinhos/SP (Samais) | R$ 159k |
| FAHECE/SC (estado) | R$ 93k |
| **Belém — nosso cálculo (R$ 8,1 mi ÷ 29)** | **~R$ 280k** |

Nosso número fica acima do mercado por viatura; é sustentável em escopo amplo
(capital + área fluvial) e/ou contrato dirigido. O pessoal honesto (FC 4,5) não
deve ser cortado — cortá-lo repete o erro do modelo preliminar.

## 5. Pendências que fecham de vez

1. **Headcount real** em diligência (lição Taboão).
2. **CCT-PA** confirmada (André usou piso nacional da enfermagem como base).
3. **Frota cedida** (assumido); locação eventual de USA/USB como contingência (R1).
4. **Regime tributário** efetivo confirmado (afeta o gross-up).

---

*Status: calibrado e com decisões travadas (20 USB, 35%). Falta diligência de
headcount, CCT-PA e confirmação do regime tributário.*

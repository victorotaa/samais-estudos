# Estudo SAMU — Belém/PA (calibração com o modelo do André)

> Aplicação da Fórmula Mestre cruzada com o **modelo de custos do André**
> (`SAMU_Belem_Modelo_Custos.xlsx`). O modelo trouxe os pisos reais da CCT-PA,
> encargos, tributação e custos unitários (todos calibrados em
> [`../referencias/parametros-base.md`](../referencias/parametros-base.md) §9).
> Referência verbal do CEO: **R$ 7,9 mi/mês**.

## 1. Os três números — e por que divergem

| Fonte | Valor/mês | Leitura |
|---|---|---|
| **Modelo preliminar do André** | **R$ 3,25 mi** | Subdimensionado (3 erros, abaixo) |
| Alvo verbal do André | R$ 7,9 mi | Intuição do CEO |
| **Fórmula Mestre (corrigida)** | **~R$ 8,1 mi** | Bate com o alvo verbal |

O modelo do André contém **o erro que a Fórmula Mestre existe para pegar**:

1. **Fator de cobertura 24/7 = 2,2 (deveria ser ~4,5).** O 2,2 cobre só um turno
   de 12h; um posto 24h em 12×36 exige 2 turnos × 2 turmas ≈ 4,4–4,5. *A própria
   planilha usa 4,5 para o médico regulador e 2,2 para o resto* — inconsistência
   que revela o erro. E a **Nota nº 1 do André** alerta: *"lição Taboão: 148 reais
   vs 80 modelados"* → 148/80 = **1,85×**, idêntico à correção do nosso custo
   direto (R$ 1,94 mi → R$ 3,59 mi = 1,85×).
2. **Frota = 12 USB (real = 20 USB).** A entrega de jan/2025 levou Belém a 20 USB.
3. **Margem = 18% (política Samais = 35%).**

## 2. Recálculo corrigido (Fórmula Mestre)

Pisos e custos unitários: do modelo do André (calibrados). Correções: **FC 4,5**
para todo posto 24/7, **20 USB**, **margem 35%**.

### Pessoal em viaturas (postos = viaturas × tripulação × FC 4,5)

| Bloco | Cálculo | Total/mês |
|---|---|---|
| USB (20) — técnico + condutor | 20 × 4,5 × (8.177 + 6.512) | ~R$ 1.322.000 |
| USA (4) — médico + enfermeiro + condutor | 4 × 4,5 × (27.272 + 10.832 + 6.512) | ~R$ 803.000 |
| Motolância (4) — técnico | 4 × 4,5 × 8.177 | ~R$ 147.000 |
| Ambulancha (1) — FC 2,0 (fluvial enxuta) | 2,0 × (8.177 + 7.952) | ~R$ 32.000 |
| **Subtotal pessoal viaturas** | | **~R$ 2.304.000** |

### Central de Regulação (FC 4,5)

| Função | Postos×FC | Total/mês |
|---|---|---|
| Médico Regulador (3 × 4,5) | 13,5 | ~R$ 344.000 |
| TARM (6 × 4,5) | 27 | ~R$ 134.000 |
| Rádio-Operador (3 × 4,5) | 13,5 | ~R$ 72.000 |
| Supervisor CR (1 × 4,5) | 4,5 | ~R$ 42.000 |
| Infra CR (software, telefonia, internet, GPS, rádio, utilidades) | — | ~R$ 53.000 |
| **Subtotal CR** | | **~R$ 643.000** |

### Não-pessoal (custos unitários do André × frota real de 20 USB)

| Bloco | Total/mês |
|---|---|
| Frota (combustível, manutenção, seguro, IPVA) | ~R$ 248.000 |
| Insumos (descartáveis, medicamentos, O₂, almoxarifado, reposição) | ~R$ 174.000 |
| Equipe de suporte (coordenadores, adm, mecânicos, ASG) | ~R$ 158.000 |
| Estrutura geral (sede, TI, treinamento, qualidade, contingência) | ~R$ 66.000 |
| **Subtotal não-pessoal** | **~R$ 646.000** |

### Composição do preço

```
Custo direto = 2.304 + 643 + 646 (mil)                ≈ R$ 3.593 mil
+ indiretos (overhead 7% + operacional 3%)            ≈ R$ 359 mil
= Subtotal (B)                                        ≈ R$ 3.952 mil
Faturamento = B ÷ [1 − (tributos 16,33% + margem 35%)] = ÷ 0,4867
PREÇO SAMAIS                                          ≈ R$ 8,12 mi/mês
```

> Com **margem 18%** (a do modelo do André) em vez de 35%, o mesmo custo dá
> **~R$ 6,0 mi/mês**. A margem é a maior alavanca do número final.

## 3. Veredito

**A R$ 7,9 mi/mês do André faz sentido** — é o que a Fórmula Mestre produz (~R$ 8,1
mi) quando se usa **pessoal honesto (FC 4,5) + margem 35%** sobre os pisos reais.
A planilha dele (R$ 3,25 mi) é que está errada, por subcontar a escala 24/7 e a
frota. **A intuição do CEO estava certa; o modelo preliminar, não.**

## 4. ⚠️ A tensão que precisa de decisão

| Benchmark (contratos reais ganhos) | R$/viatura/mês |
|---|---|
| CIMSAMU 02/2020 (Ponta Grossa) | R$ 94k |
| Ourinhos/SP (Samais) | R$ 159k |
| FAHECE/SC (estado) | R$ 93k |
| **Belém — nosso cálculo (R$ 8,1 mi ÷ 29)** | **~R$ 280k** |

Nosso número honesto fica **~2× o mercado por viatura**. Isso significa:

- Se Belém for **contrato dirigido** (você indicou: *"conversas feitas, licitação
  para vencermos"*), R$ 7,9–8,1 mi é sustentável e seguro — segue.
- Se houver **disputa real**, R$ 280k/viatura não vence; seria preciso flexionar a
  **margem** (de 35% para ~18–22% leva o preço a R$ 6,0–6,5 mi) ou o escopo. A
  margem é o botão; o custo de pessoal honesto (FC 4,5) **não** deve ser cortado —
  cortá-lo é repetir o erro do modelo preliminar.

## 5. Pendências de diligência (fecham o número)

1. **Headcount real do SAMU Belém** (a própria Nota nº 1 do André pede — lição Taboão).
2. **USB: 12 ou 20?** Confirmar a frota tripulada vs. reserva técnica.
3. **Margem: 35% (política) ou 18% (modelo)?** — decide R$ 8,1 mi vs R$ 6,0 mi.
4. **Regime jurídico:** pregão tradicional × Contrato de Gestão (OS, possível imunidade tributária → recalcular tributos).
5. **CCT-PA** confirmada (André usou piso nacional da enfermagem como base).
6. **Frota cedida** (assumido) — se houver locação, +R$ 8–12 mil/viatura/mês.

---

*Status: calibrado com dados reais (pisos, encargos, tributos, custos unitários) e
frota levantada. Falta diligência de headcount, decisão de margem e regime jurídico.*

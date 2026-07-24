# Canoas/RS — SAMU 192 + Rede CAPS (estudo de operação · Camada 1 Samais→OS)

> **CONFIDENCIAL · USO INTERNO SAMAIS.** Contém composição de custo, BDI e
> premissas. HTML cliente-facing: `site/estudos/canoas-rs.html` (não expõe
> BDI/CDO nem a decomposição). Números **PROVISÓRIOS** — ver §5.

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
| Médico | R$ 125/h (âncora Avaré) — tratado CLT c/ encargos | ⚠️ maior sensibilidade |
| Demais pisos (condutor, farmac., admin, CAPS) | estimativa | ⚠️ a validar CCT-RS |
| BDI | Composição do Valor Contratual = CDO × 1,35 | doutrina samais-os |

## 4. Preço PROVISÓRIO (opção 3 — pisos estimados)

### SAMU (custo por horas do termo × custo-hora carregado)

| Bloco | R$/mês | Proc. |
|---|---|---|
| A · Pessoal (~80 CLT) | 718.000 | horas ✅ · pisos ⚠️ (enfermagem ✅) |
| B · Materiais/medicamentos/gases | 80.000 | ⚠️ estimativa |
| C · Frota + apoio (comb 12,7k + manut 13k ✅) | 47.700 | parcial ✅ |
| D · Gestão/TI/CoPilot | 60.000 | ⚠️ estimativa |
| **CDO** | **905.900** | |
| **Preço = CDO × 1,35** | **≈ 1.220.000/mês** | R$ 3,52/hab · R$ 14,7 mi/ano |

Sensibilidade médico: se plantonista puro (R$125/h já cheio), SAMU cai a
~R$ 1,06 mi. **Faixa provisória SAMU: R$ 1,06–1,22 mi/mês.**

### CAPS (grosseiro)

Pessoal ~R$ 1,2 mi + materiais/medicamentos/imóvel CAPSi/transporte → CDO
~R$ 1,37 mi × 1,35 ≈ **R$ 1,8–2,0 mi/mês** (bem mais ⚠️; precisa da passada de
pisos por categoria e do desenho fino de plantão).

### Operação integrada (referência exibida no HTML)

**≈ R$ 3,1 mi/mês** (SAMU ~1,2 + CAPS ~1,9) · **R$ 8,92/hab** · ~263 CLT.

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

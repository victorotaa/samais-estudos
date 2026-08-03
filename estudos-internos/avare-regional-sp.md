# SAMU Regional Vale do Jurumirim / AMVAPA (cenário 3, modelo USA+5,2)

> **Matriz de cenários de Avaré (5):** 1 Solo · 2 Avaré+Arandu · 3 Regional (AMVAPA) · 4 Avaré+Manduri (ponto de apoio) · 5 Avaré+Manduri com base descentralizada.
> Página-mãe: `estudos/avare-cenarios.html`. Os cenários 1, 2, 4 e 5 são **concorrentes** entre si e com o 3.

> **CONFIDENCIAL · USO INTERNO SAMAIS.** Contém margem, bridge custo→preço e
> benchmark — não circular fora da equipe. HTML cliente-facing:
> `estudos/avare-regional-sp.html` (não expõe nada desta seção financeira).

> **Modelo "USA + 5,2" (Métrica de Ouro do CEO, jul/2026).** Preço = camada
> local (USBs + motolância + gestão, precificada a **R$ 5,20/hab/mês**) +
> **linha USA** operada 100% pela Samais. O preço é **teto de mercado**: custos
> novos comem margem, não sobem o preço.

## 1. Escopo

- **17 cidades · 312.109 hab**, geridas pela **AMVAPA** (Consórcio
  Intermunicipal do Alto Vale do Paranapanema, sede Piraju/SP, presidente José
  Ramiro/Itaí).
- **UTI móvel (USA) + frota regional de USB** (sem motolância — retirada do
  escopo por decisão do CEO, jul/2026, preço mantido), servindo as 17
  cidades. **CRU em Avaré** (a central de regulação já existe e é habilitada/
  qualificada regionalmente).
- **Contratante:** consórcio regional (AMVAPA).
- **Equipe:** ~85 CLT, piso CCT-SP.
- **Regra de ativos:** USB e USA são ativos do **ente** (frota do consórcio/
  municípios); a Samais opera, mantém e reativa — sem CAPEX de aquisição.
  Inclusão de viatura nova (locação + equipação) só por aditivo de contrato,
  fora do objeto do estudo-base.

## 2. Parâmetros aplicados

| Parâmetro | Valor |
|---|---|
| Encargos | 68,24% (Grupo C já cobre rescisão/demissão — sem duplicar) |
| Fator de Cobertura (FC) | 4,5 para postos 24/7 (12×36) · 2,25 para postos 12h |
| Médico da USA | Plantonista, ~R$ 125/h × 730,5h ≈ R$ 91.312/posto 24/7 (não CLT integral) |
| Tributos s/ faturamento (Lucro Presumido) | 16,33% (PIS 0,65 + COFINS 3 + IRPJ 4,8 + CSLL 2,88 + ISS 5) |
| Honorários advocatícios | 2% do faturamento (externo/contingência, pedido do CEO) |
| Indiretos | 10% (7% overhead admin + 3% operacional) |

## 3. Preço

**R$ 2.100.000/mês** (R$ 6,73/hab) · **R$ 25.200.000/ano**.

## 4. Linha USA (fixa — idêntica nos 3 cenários)

| Item | R$/mês |
|---|---|
| Médico plantonista (24/7) | 91.312 |
| Enfermeiro | 54.162 |
| Condutor | 34.754 |
| Insumos UTI/O₂/seguro | 21.970 |
| Subtotal | 202.198 |
| ×1,10 indiretos | **222.418** |

Repasse federal da USA (~R$ 159.568,50/mês) **volta ao ente** e funciona como
desconto sobre o preço contratado (rateado entre as 17 cidades).

## 5. Bridge custo → preço

| Componente | R$/mês |
|---|---|
| **Preço** = 5,2 × 312.109 hab (R$ 1.622.967, camada local) + linha USA (~R$ 457.000) | **2.100.000** |
| (−) Custo total = camada local (573.598) + USA (222.418) | 796.016 |
| (−) Tributos 16,33% s/ faturamento | 342.930 |
| (−) Honorários advocatícios 2% s/ faturamento | 42.000 |
| **= Margem** | **≈ 931.200 (44%)** |

**Líquido do repasse federal (USA): ~R$ 1.966.000/mês** (R$ 2.100.000 −
R$ 159.568,50 de repasse que volta ao ente como desconto).

## 6. Nota importante — margem 44% é teto, não é definitiva

A camada local deste cenário está modelada com uma simplificação de **~5 USB**
para as 17 cidades. Na prática, **17 municípios exigem mapear e dimensionar
mais USBs por município** em diligência (norma: 1 USB/100–150 mil hab por
região de saúde, mas a cobertura territorial de 17 cidades pode exigir mais
postos que o mínimo populacional puro sugere).

A folga de margem (44%) existe justamente porque **5,2 × 312.109 hab** comporta
ampliar a frota local mantendo viabilidade financeira — a margem real **cai**
conforme a frota completa das 17 cidades for dimensionada. **Marcar como "a
dimensionar; margem 44% é teto, cairá com a frota completa."**

## 7. Contexto AMVAPA

- **AMVAPA = Consórcio Intermunicipal do Alto Vale do Paranapanema**, CNPJ
  03.753.263/0001-60, sede Piraju/SP (R. Cap. Maximiano dos Santos Guerra,
  552), tel. (14) 3351-1358, contato@amvapa.com.br.
- **19 consorciadas**; a CRU Vale do Jurumirim cobre **17** (região de saúde,
  DRS-VI Bauru) = as 19 menos Angatuba e Riversul ⚠️ a reconfirmar: Águas de
  Santa Bárbara · Arandu · **Avaré (sede da CRU)** · Barão de Antonina ·
  Cerqueira César · Coronel Macedo · Fartura · Iaras · Itaí · Itaporanga ·
  Manduri · Paranapanema · Piraju · Sarutaiá · Taguaí · Taquarituba · Tejupá.
- Bases fora de Avaré já existem (Fartura ✅, Taquarituba ✅ — PT 522/2012);
  mapa completo das demais via CNES ⚠️.
- CRU regional Vale do Jurumirim: sediada em Avaré, imóvel próprio da
  Prefeitura (manutenção predial dela — Regra Operacional), habilitada e
  qualificada 04/2026–04/2029 (PT 10.850). Administrada hoje pela AMVAPA.
- Interlocução: ✅ José Ramiro — prefeito de Itaí, presidente da AMVAPA
  (eleito 30/01/2025). ⚠️ Diretoria a reconfirmar: vice Diego Augusto Berti
  Cinto (Cerqueira César) · tesoureiro Carlos Alberto Camargo Lima (Piraju) ·
  secretário Éder Miano (Taquarituba).

## 8. Validação (benchmark)

Âncora: contrato **real** de Ourinhos (Samais, 2023) = R$ 950k / 106 mil hab =
8,96/hab (~85 colaboradores, escopo USA + 2 USB + moto). Corrigido para 2026
(~+18,5%: IPCA + piso enfermagem Lei 14.434) ≈ **10,6/hab**. Este cenário
regional fecha em **6,73/hab**, bem abaixo da âncora — esperado dado o efeito
de escala do fixo da USA sobre 312 mil hab, mas reforça a nota do §6: a folga
de margem existe para ainda caber o dimensionamento completo da frota das 17
cidades.

## 9. Riscos e pendências

- **A dimensionar em diligência:** frota completa das 17 cidades (§6) — a
  margem projetada de 44% é teto e deve cair.
- **Subfinanciamento federal** típico de consórcios regionais — repasse por
  habilitação a confirmar por cidade.
- **Saída de Avaré para consórcio próprio** (cenários 1, 2 ou 4 do estudo)
  **canibaliza este cenário regional** — são caminhos concorrentes, não
  complementares; decisão estratégica do CEO sobre qual perseguir.
- Governança: decisão colegiada dos 17 prefeitos da AMVAPA (não só Avaré).
- TAC MPT 194.218.001.15/0-34 (a monitorar).
- ISS (cada ente) e enquadramento tributário do consórcio.
- CCT-SP (piso, benefícios) — aplicar sem exceção.

## Registro — retirada da motolância (jul/2026)

Decisão do CEO: **retirar a motolância do escopo mantendo o preço**. Aplicação da
regra de Lean Sizing — o preço é teto de mercado; enxugar escopo melhora a margem,
não baixa o preço.

Custo removido: ~R$ 12.100/mês (1 posto 12h com FC 2,25 ≈ R$ 9.842 de pessoal +
~R$ 1.200 de custeio da moto, ×1,10 de indiretos). A camada local do modelo
"USA + 5,2" continua descrita de forma genérica (USBs + gestão) — a motolância
deixa de compor este escopo específico.

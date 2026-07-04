# Avaré/SP — Estudo de Municipalização do SAMU 192 (v2, Fórmula Mestre)

> **CONFIDENCIAL · USO INTERNO SAMAIS.** Cálculo completo com margem, bridge
> custo→preço e benchmark. O HTML cliente-facing (`site/estudos/avare-sp.html`)
> **não** expõe nada desta seção financeira interna.
>
> **v2 (jul/2026):** recalculado pela Fórmula Mestre atual (FC 4,5 · encargos
> 68,24% · gross-up margem 35% + tributos 16,33%), substituindo a metodologia da
> sessão de mai/2026 (BDI 42%, encargos 66,52%, cenários Mín/Base/Amplo).
> **Decisão do CEO: entregar UMA proposta única.**

## 1. Fontes e procedência

- ✅ **Questionário oficial da SMS Avaré** (21/05/2026, Rodrigo Silvestre — Chefe de
  Planejamento Estratégico e Gestão de Políticas Públicas). Dado primário.
- ✅ Print do sistema (sys4web): TR médio **20:18** · 1.820 atendimentos (22/05/25–22/05/26).
- ✅ IBGE (populações declaradas no questionário).
- ⚠️ Itens sem dado local: unitários §9 de `parametros-base.md` (calibração Belém/André).

## 2. Fatos do questionário (todos ✅)

| Item | Dado |
|---|---|
| População Avaré / região AMVAPA | 96.450 / 312.109 hab (17 municípios) |
| Modelo atual | misto — base municipal + AMVAPA gerencia CRU regional e USA (ambas **sediadas em Avaré**) |
| CRU | regional Vale do Jurumirim, habilitada e **qualificada 04/2026–04/2029** (PT 10.850/GM/MS) |
| Frota | 3 USB: 2012 Boxer **parada** · 2015 Master **parada** · 2024 Master operante → **1 de 3 operante** |
| Equipe da base | 16 pessoas (6 cond., 5 téc. enf., 1 enf. 30h, 2 ASG, 1 téc. RM, 1 coord. cedido) |
| Salários locais | cond. 2.643,79 · téc. enf. 3.314,34 · ASG 2.272,62 · enf. 3.935,10 (30h) · téc. RM 2.643,79 · coord. 3.660,37 |
| Demanda USB | 152 atend./mês (131–168) · ano: 1.385 clín. + 540 trauma + 124 psiq. + 38 obst. |
| TR / qualidade | TR médio 20:18 · máx 2:52:58 · TARM 1:59 · VTR 10:54 |
| Custo declarado | **R$ 491.417,77/mês** (média jan–mar/2026) — *não confirmado se inclui rateio AMVAPA* ⚠️ |
| Repasse federal | **R$ 159.568,50/mês** (PT 1.631/23: 71.662,50 USA · PT 1.816/23: 50.050 USA · PT 10.850/26: 13.786,50 CRU + 12.637,30 USA + 11.432,20 USB) |
| Custos ocultos | manutenção na frota municipal · combustível na garagem da Prefeitura (349,8 L/mês) · imóvel próprio custeado pela PM · coordenador cedido |
| Passivo | **TAC MPT** — procedimento 194.218.001.15/0-34 |
| Dores declaradas | frota insuficiente · USA única p/ 17 municípios · falhas de regulação **com óbito documentado** |
| Intenção política | **municipalizar** — "maior município e maior demanda da região" (resposta 7.5) |

## 3. Decisão de escopo da proposta única

**Municipalizar a EXECUÇÃO; não duplicar a regulação.**

- A CRU regional **já fica em Avaré**, habilitada e qualificada até 2029. Criar CRU
  municipal própria p/ 96 mil hab: (a) foge do desenho regional do normativo e
  arrisca habilitação federal; (b) duplica estrutura existente na própria cidade;
  (c) custaria **+R$ ~600 mil/mês** (cálculo abaixo). A dor de regulação se ataca
  com camada de despacho local + telemetria + dados (CoPilot OS), não com CRU nova.
- **USA própria 24/7**: acima do parâmetro (1/400–450 mil hab), mas justificada pela
  dor documentada (USA única p/ 17 municípios, óbito) e pelas habilitações USA já
  vigentes. É o coração assistencial da proposta.
- **2 USB ativas + 1 reserva técnica**: normativo daria 1 USB (96 mil hab); demanda
  reprimida documentada (USB inoperante em intrajornada, viatura única sem reserva)
  justifica 2 + reserva. Frota é do ente (Regra Operacional: sem CAPEX; Samais
  mantém e reativa as 2 paradas — a de 2015 vira ativa ou reserva após avaliação).

## 4. Cálculo (Fórmula Mestre · FC 4,5 · encargos 68,24%)

Custo/posto = (base + insalub. 40%SM + noturno ~7%) × 1,6824 + R$ 1.170 benefícios.
Pisos: **maior entre questionário local e §9** (projeção conservadora).

### RH (43 pessoas, sendo RT médico rateado 50%)

| Função | Postos 24/7 | Headcount | Custo/pessoa | Total/mês |
|---|---|---|---|---|
| Condutor socorrista | 3 (2 USB + USA) | 14 (3×4,5↑) | 6.951 | 97.311 |
| Técnico de enfermagem | 2 (USB) | 9 | 8.177 | 73.594 |
| Enfermeiro USA | 1 | 5 | 10.832 | 54.162 |
| Médico intervencionista USA (CLT 24h/sem) | 1 | **7** (730,5h ÷ 104,3h) | 27.272 | 190.904 |
| Téc. despacho/interface CRU (12×36 diurno) | — | 2 | 5.929 | 11.859 |
| ASG | — | 2 | 6.015 | 12.030 |
| Coordenador de base | — | 1 | 7.328 | 7.328 |
| Enfermeiro supervisor / RT enf. | — | 1 | 10.928 | 10.928 |
| Auxiliar administrativo | — | 1 | 4.535 | 4.535 |
| RT médico (rateio 50%) | — | 0,5 | 21.359 | 10.680 |
| **Subtotal RH** | | **~43** | | **473.330** |

### Não-pessoal (§9; frota e base do ente)

Combustível 13.800 · manutenção (3 USB+USA, incl. reativação) 15.000 · seguro 3.400 ·
IPVA 1.280 · insumos USB 8.400 · insumos USA 9.500 · O₂ 3.000 · almox./logística
5.000 · tecnologia despacho/telemetria 8.000 · telefonia/conectividade 3.000 ·
uniformes/EPI 3.800 (fardamento questionário 26.676/ano + EPI) = **74.180**

### Bridge custo → preço (INTERNO — nunca no HTML)

| Linha | Valor/mês |
|---|---|
| Custo direto (RH + não-pessoal) | 547.510 |
| Indiretos 10% (7% adm. central + 3% operacional) | 54.751 |
| **Custo total** | **602.261** |
| Gross-up: ÷ [1 − (16,33% tributos + 35% margem)] = ÷ 0,4867 | |
| **Preço** | **1.237.438** → **ofertar R$ 1,24 mi/mês** |
| Preço anual | **R$ 14,9 mi** |
| (−) repasse federal vinculado | −159.569 |
| **Custo líquido municipal** | **~R$ 1,08 mi/mês** |

Margem embutida ≈ 35% do contrato (~R$ 433 k/mês). Tributos 16,33% (Presumido:
PIS 0,65 + COFINS 3 + IRPJ 4,8 + CSLL 2,88 + ISS 5 teto — ISS Avaré a confirmar).

### Referência interna (NÃO ofertar): escopo com CRU municipal própria

+1 posto médico regulador 24/7 (7×25.472) + 2 postos TARM (9×5.929) + 1 posto
rádio-op (5×5.310) + sistema → preço ≈ **R$ 1,84 mi/mês**. Registrado como expansão
futura caso o município insista em regulação própria; não recomendado (§3).

## 5. Confronto metodológico (v1 mai/2026 × v2 Fórmula Mestre)

| Item | v1 (sessão antiga) | v2 (atual) | Efeito |
|---|---|---|---|
| Encargos | 66,52% | **68,24%** calibrado | +1,7 pp |
| Tributos | 8,65% (IRPJ/CSLL "na margem") | **16,33%** Presumido pleno | mais conservador |
| Margem 35% | composta dentro do BDI 42% | **travada via gross-up explícito** | margem líquida real |
| FC 24/7 | não explícito por função | **4,5** (12×36) · **7** médicos/posto (24h/sem) | headcount honesto |
| Cenários | Mín 330k / Base 907k / Amplo 1,15 mi | **UMA proposta: 1,24 mi** | pedido do CEO |
| Central | "central municipal" no Base | regulação permanece regional; despacho local | −600 k/mês e menor risco |

O Base v1 (907 k) com o MESMO escopo v1 (central municipal inclusa) recalculado
honestamente custaria 1,84 mi — o v1 subdimensionava médicos e tributos. O v2 a
1,24 mi entrega mais execução por menos risco regulatório.

## 6. Benchmark (validação §8)

- **R$/viatura ativa (3): ~412 k** — acima do mercado (93–159 k). Esperado e
  documentado (§8 parametros-base): FC honesto + USA própria p/ 96 mil hab + margem
  35%. Viável apenas em **contrato dirigido** (que é o caso: questionário oficial,
  relação construída, intenção declarada de municipalizar). ⚠️ **Nunca expor.**
- **R$/hab/mês: 12,83** (vs CISRU 4,6 — que dilui em 760 mil hab, sem USA dedicada).
- **Peso da folha: 78,6%** — acima da faixa 55–70%, coerente: frota e base são do
  ente (sem CAPEX/aluguel), não-pessoal naturalmente baixo.
- **R$/atendimento potencial**: capacidade ~3× a atual (2 USB + USA vs 1 USB).

## 7. Riscos e pendências (diligência)

1. ⚠️ O custo declarado (491 k) inclui o rateio AMVAPA? Pedir memória de cálculo.
2. ⚠️ Habilitações federais na municipalização: USB/USA migram para gestão municipal
   (processo junto ao MS); CRU permanece regional. Mapear portaria a portaria.
3. ⚠️ ISS de Avaré (usamos teto 5%).
4. ⚠️ CCT-SP da categoria (usamos questionário/§9 — validar dissídio e data-base).
5. ⚠️ TAC MPT 194.218.001.15/0-34 — obter cópia; vira argumento de conformidade CLT.
6. ⚠️ Estado da USB 2015 (reativável como 2ª ativa ou reserva?) e da 2012 (baixa?).
7. ⚠️ Reação política da AMVAPA/16 municípios — saída de Avaré desfinancia a região;
   enquadrar como "fortalecimento da rede" (Avaré libera capacidade regional).

## 8. Interlocução

- ✅ **Rodrigo Silvestre** — Chefe de Planejamento Estratégico e Gestão de Políticas
  Públicas (respondeu o questionário; porta de entrada técnica).
- ⚠️ Secretário(a) Municipal de Saúde — reconfirmar titular por telefone.
- ⚠️ Prefeito de Avaré — decisor final da municipalização.

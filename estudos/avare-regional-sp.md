# Avaré & Vale do Jurumirim — SAMU Regional AMVAPA (cenário 1 — referência)

> **Mantido como cenário alternativo** na página de escolha
> (`site/estudos/avare-cenarios.html`). O cenário em pauta com o CEO é o trio
> (`estudos/avare-sp.md`, v4). HTML deste cenário: `site/estudos/avare-regional-sp.html`.

> **CONFIDENCIAL · USO INTERNO SAMAIS.** Cálculo completo com margem, bridge
> custo→preço e benchmark. O HTML cliente-facing (`site/estudos/avare-sp.html`)
> **não** expõe nada da seção financeira interna.
>
> **v3 (jul/2026) — pivô de escopo definido pelo CEO:** o cliente é a **AMVAPA**
> (consórcio contrata a Samais para operar **toda a área SAMU regional** — CRU +
> USA + base de Avaré reforçada), e não Avaré municipalizando isoladamente.
> Substitui a v2 (execução municipal) e a v1 (mai/2026, BDI 42%, 3 cenários).
> **Uma proposta única.**

## 1. Fontes e procedência

- ✅ Questionário oficial SMS Avaré (21/05/2026, Rodrigo Silvestre) + print sys4web
  (TR médio 20:18 · 1.820 atendimentos regionais em 12 meses).
- ✅ IBGE (populações declaradas). ⚠️ Unitários sem dado local: §9 `parametros-base.md`.
- ✅ Pesquisa pública (jul/2026): **AMVAPA = Consórcio Intermunicipal do Alto Vale do
  Paranapanema**, CNPJ 03.753.263/0001-60, sede **Piraju/SP** (R. Cap. Maximiano dos
  Santos Guerra, 552), tel. (14) 3351-1358, contato@amvapa.com.br. **19 consorciadas**;
  a CRU Vale do Jurumirim cobre **17** (região de saúde, DRS-VI Bauru) = as 19 menos
  Angatuba e Riversul ⚠️ a reconfirmar: Águas de Santa Bárbara · Arandu · **Avaré
  (sede)** · Barão de Antonina · Cerqueira César · Coronel Macedo · Fartura · Iaras ·
  Itaí · Itaporanga · Manduri · Paranapanema · Piraju · Sarutaiá · Taguaí ·
  Taquarituba · Tejupá. Bases fora de Avaré existem (Fartura ✅, Taquarituba ✅ —
  PT 522/2012); mapa completo via CNES ⚠️. Fontes: amvapa.com.br, Econodata,
  prefeitura de Fartura, Conasems. Obs.: DRS-VI cita ~285 mil hab p/ a região ⚠️ vs
  312.109 do questionário (usar o declarado ✅; conciliar em diligência).

## 2. Fatos-chave (questionário — ✅)

Ver detalhamento na v2 (histórico git). Essenciais para o desenho v3:

- CRU regional Vale do Jurumirim: **17 municípios · 312.109 hab**, sediada em Avaré,
  **imóvel próprio da Prefeitura com manutenção predial dela**; habilitada e
  **qualificada 04/2026–04/2029** (PT 10.850). Administrada hoje pela AMVAPA.
- USA regional única (também em Avaré). Base Avaré: 3 USB, **só 1 operante**.
- **Médicos efetivos de Avaré cedidos à CRU e à USA** + consórcio contrata médicos
  complementares (custo oculto de pessoal municipal fora da conta SAMU).
- Insumos via **Almoxarifado Central da saúde** (compartilhado); manutenção junto à
  **frota municipal geral**; combustível na garagem da Prefeitura (**349,8 L/mês** —
  retrato da operação mirrada: ~1 viatura rodando).
- Custo declarado Avaré: R$ 491.417,77/mês (parcial) · repasse federal R$ 159.568,50/mês.
- TAC MPT 194.218.001.15/0-34 (ver §7).

## 3. Escopo da proposta única (contratante: AMVAPA)

**A Samais opera toda a área de atendimento do SAMU regional AMVAPA:**

| Componente | Entrega | Observação |
|---|---|---|
| **CRU regional 24/7** | operação completa (méd. regulador, TARM, rádio-op, supervisão) + CoPilot OS | imóvel e manutenção predial seguem com o ente (Regra Operacional); administração da operação sob Samais |
| **USA regional 24/7** | equipe própria completa | fim da dependência de cedidos + contratações avulsas do consórcio |
| **Base Avaré** | 2 USB ativas 24/7 + 1 reserva + **motolância diurna** | laudo técnico e **reativação das 2 USB paradas** no mês 1 |
| **Frota** | gestão/manutenção dedicada — fila própria, não a fila geral da Prefeitura | frota é do ente; moto a ser adquirida pelo ente (~R$ 60–80k, fora do mensal) |
| **Insumos** | almoxarifado/logística **dedicados ao SAMU** | sai do "balaio" do almoxarifado central |
| **NEP** | treinamentos mensais, cursos e workshops contínuos | linha explícita (compromisso Samais) |
| **Bases dos demais municípios** | a dimensionar em diligência com a AMVAPA | régua interna: +1 USB 24/7 ≈ **R$ 184 mil/mês** (preço) |

## 4. Cálculo v3 (FC 4,5 · encargos 68,24% · pisos = maior entre local e §9)

### RH — R$ 783.140/mês · ~70 CLT + RT rateado

| Função | Dimensionamento | Total/mês |
|---|---|---|
| Médico regulador CRU (posto 24/7; CLT 24h/sem → 7) | 7 × 25.472 | 178.304 |
| TARM (3 postos 24/7 — 312 mil hab, teto da Portaria) | 14 × 5.929 | 83.010 |
| Rádio-operador (1 posto) | 5 × 5.310 | 26.552 |
| Supervisor operacional CRU | 1 × 9.271 | 9.271 |
| Médico intervencionista USA (posto 24/7) | 7 × 27.272 | 190.904 |
| Enfermeiro USA (1 posto) | 5 × 10.832 | 54.162 |
| Téc. enfermagem USB (2 postos) | 9 × 8.177 | 73.594 |
| Téc. enfermagem motolância (diurno 12h) | 3 × 8.177 | 24.531 |
| Condutores (3 postos: 2 USB + USA) | 14 × 6.951 | 97.311 |
| ASG 2 · coord. base · enf. supervisor/RT · aux. adm. | — | 34.821 |
| RT médico (rateio 50%) | — | 10.680 |

### Não-pessoal — R$ 102.250/mês

Combustível 4 viaturas+moto 14.400 (vs 349,8 L ≈ R$ 2,1 mil atuais — retrato da
subutilização) · manutenção 15.800 · seguro/IPVA 5.850 · insumos 18.700 · O₂ 3.500 ·
**almox./logística dedicados 6.000** · **CoPilot OS (infra+IA+licenças) 12.000 ⚠️
estimativa interna a calibrar** · telefonia/conectividade 192 6.000 · **NEP 10.000** ·
**uniformes 10.000** (base real: fardamento 26.676/ano p/ 16 pessoas = R$ 1.667/
pessoa/ano × ~70; kit/ano por operacional: 5 camisetas + 2 conjuntos operacionais
(macacão/calça+jaqueta) + bota + boné; EPIs nos insumos por viatura).

### Bridge custo → preço (INTERNO)

| Linha | R$/mês |
|---|---|
| Direto (RH + não-pessoal) | 885.390 |
| Indiretos 10% (7% adm. + 3% op.) | 88.539 |
| **Custo total** | **973.929** |
| ÷ [1 − (16,33% trib. + 35% margem)] = ÷ 0,4867 | |
| **Preço** | **2.001.086 → ofertar R$ 2,0 mi/mês** (R$ 24 mi/ano) |
| (−) repasse federal vigente | −159.569 |
| **Líquido para rateio AMVAPA** | **~R$ 1,84 mi/mês** |

Rateio ilustrativo por população (a definir pela AMVAPA): Avaré (30,9%) ≈ **R$ 569
mil/mês** — hoje declara R$ 491 mil parciais por 1 USB operante e sem os ocultos.
Municípios pequenos: ~R$ 5,90/hab/mês líquido.

### Implantação (one-off, fora do mensal)

- Laudo + **reativação das 2 USB paradas**: a precificar após laudo (⚠️ provisão de
  referência interna R$ 30–60k). Motolância: aquisição pelo ente.
- Mobilização/uniformização/treinamento inicial: dentro do 1º mês (adm. central).

## 5. Custos ocultos → onde entram na proposta (mapa)

| Oculto hoje (fora da conta do ente) | Na proposta Samais |
|---|---|
| Manutenção na frota municipal geral ("balaio") | linha própria: manutenção dedicada 15.800 |
| Combustível na garagem da Prefeitura | linha própria: 14.400 (frota completa rodando) |
| **Médicos efetivos cedidos à CRU/USA** + contratações avulsas do consórcio | equipe própria CLT: méd. regulador 178.304 + méd. USA 190.904 |
| Insumos no Almoxarifado Central compartilhado | almox. dedicado 6.000 + insumos 18.700 |
| Imóvel (água/luz/IPTU/manutenção predial) | **permanece com o ente** (Regra Operacional — bases/CRU do ente) |
| Coordenador cedido | coordenação própria na folha |
| Fardamento avulso | uniformes dimensionados por colaborador 10.000 |
| TAC/passivo trabalhista | ver §7 — não é rubrica de preço |

**Resposta à pergunta do CEO:** os ocultos **não** estão nos R$ 491 mil declarados
(por isso "parcial"); na proposta, **todos internalizados** com linha própria — é o
argumento "custo aparente × custo real" da tese Samais.

## 6. Benchmark (validação — nunca expor)

- **R$/hab/mês: 6,41** — na faixa saudável dos regionais (CISRU 4,6 · CIAS 5–6).
  O pivô regional CONSERTOU o benchmark da v2 municipal (12,83). ✓
- Peso da folha 80% — acima da faixa 55–70%, coerente: frota/imóveis do ente e
  CRU intensiva em pessoal. Documentado.
- Por viatura não é a régua certa aqui (CRU regional inclusa); usar per capita.

## 7. TAC MPT 194.218.001.15/0-34 — tratamento

- **Não entra como rubrica no preço.** É passivo contingente do ENTE (multas/
  obrigações por descumprimento trabalhista da operação atual). A proposta CLT
  Samais **elimina a causa raiz** (jornadas, vínculos, EPI, escala descoberta) — é
  argumento de conformidade, não custo nosso.
- Entra: (a) no diagnóstico (risco atual não precificado); (b) na diligência
  (obter cópia; mapear obrigações que a operação deve cumprir — ex.: se o TAC
  exige adicional/escala específica, isso JÁ está coberto por encargos 68,24% +
  FC 4,5); (c) em conversa comercial.
- ⚠️ Pesquisa pública (jul/2026): **documento não indexado publicamente** — objeto,
  cláusulas e multas não localizados. Jurisdição compatível: PTM Bauru (PRT-15).
  Obter cópia via busca oficial: mpt.mp.br/MPTransparencia (busca de TACs) e
  consulta de procedimentos da PRT-15. Por analogia (casos públicos: MPMG
  G. Valadares 2010; MPT-PB EPIs; PTM Varginha jornada), TACs de SAMU tipicamente
  exigem regularização de vínculos, dimensionamento de equipe, EPIs e respeito a
  jornada/intervalos — tudo já coberto pela proposta CLT (encargos 68,24% + FC 4,5
  + NEP + uniformes/EPI). **Analogia ≠ documento**: confirmar na diligência.

## 8. Riscos e pendências (diligência)

1. ⚠️ Lista oficial dos 17 municípios + estatuto/contrato de rateio AMVAPA.
2. ⚠️ Bases/USBs existentes nos demais 16 municípios (dimensionar expansão pela régua).
3. ⚠️ O custo declarado de Avaré inclui rateio AMVAPA? Memória de cálculo.
4. ⚠️ Migração/manutenção das habilitações federais na troca de operador.
5. ⚠️ ISS (usamos teto 5%) e CCT-SP da categoria (data-base).
6. ⚠️ Cópia do TAC. 7. ⚠️ Laudo das USB 2012/2015. 8. ⚠️ Custo CoPilot OS calibrado.
9. ⚠️ Governança: decisão colegiada dos prefeitos da AMVAPA (não só Avaré).

## 9. Interlocução

- ✅ **José Ramiro** — prefeito de Itaí, presidente da AMVAPA (eleito 30/01/2025).
- ⚠️ Diretoria a reconfirmar: vice Diego Augusto Berti Cinto (Cerqueira César) ·
  tesoureiro Carlos Alberto Camargo Lima (Piraju) · secretário Éder Miano (Taquarituba).
- ✅ AMVAPA institucional: (14) 3351-1358 · contato@amvapa.com.br · Piraju/SP.
- ✅ Rodrigo Silvestre — Planejamento Estratégico SMS Avaré (respondeu o questionário).
- ⚠️ SMS Avaré (titular) e Prefeito de Avaré — maior cotista e sede da CRU/USA.
- Secretário(a) executivo(a) do consórcio: não localizado publicamente ⚠️.

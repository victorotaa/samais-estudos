# Fórmula Mestre — Estudo de Custo Operacional de SAMU e Composição da Proposta Samais

> Metodologia padrão para (1) levantar o **custo operacional real** que um ente
> (município / estado / consórcio / mantenedora) tem com uma operação de SAMU 192,
> incluindo os gastos invisíveis e diluídos da gestão pública, e (2) compor a
> **Proposta Samais** sobre essa base, com a margem-alvo embutida de forma sólida,
> factível e defensável.
>
> Este documento é o "cérebro" do estudo. A planilha de Maringá (anexada ao
> projeto) é o **catálogo de escopo** — *quais* rubricas existem. Aqui definimos
> *como* cada rubrica vira número, de onde vem o dado e como se fecha o preço.

---

## 0. Por que os estudos vinham saindo errados

Diagnóstico da causa-raiz (o que esta fórmula corrige):

1. **A planilha-modelo é uma lista, não um motor.** Todas as células de
   `R$ UNITÁRIO` e `QUANTIDADE` chegam vazias e a única fórmula é
   `Despesa Mensal = Quantidade × Unitário`. Nada *gera* a quantidade nem o
   unitário — então o erro nasce **antes** de preencher a planilha.
2. **Fator de cobertura de escala 24/7 ignorado.** Um posto 24h não custa
   1 profissional, custa ~5 a 5,5 (folga, férias, 13º, absenteísmo, rotatividade).
   Dimensionar "1 médico + 1 enfermeiro por viatura" sem esse multiplicador
   **subestima a folha em 4–5×**. É o maior gerador de erro.
3. **Encargos sociais mal carregados** (CLT roda ~68–80% sobre o salário-base,
   fora adicionais de insalubridade, noturno e sobreaviso).
4. **Camada financeira da terceirizada ausente** — sem BDI/taxa de administração,
   sem tributos sobre faturamento, sem margem. Custo ≠ preço.
5. **Sem reajuste no horizonte do contrato** (dissídio/convenção + IPCA).
6. **CAPEX e OPEX misturados** (frota e implantação tratados como custeio mensal).
7. **Custo público real subestimado** — os gastos invisíveis (insumos de outras
   pastas, manutenção de frota por outra secretaria, folha inflada com RPPS e
   gratificações) não entram no "custo atual", o que faz a comparação com a
   proposta Samais parecer desfavorável quando não é.

---

## Princípios Reitores (inegociáveis)

Estes princípios valem acima de qualquer parâmetro deste documento. A fórmula
**não carrega valores fixos**: ela é um motor alimentado pelo **contexto
levantado de cada ente** (pesquisa em dados públicos + inputs manuais), porque
cada município / estado / consórcio / mantenedora tem dinâmica e quadro
próprios. A saída é o **estudo** no formato padrão.

1. **Princípio da Realidade — nunca deduzir dado inexistente.**
   Trabalhar **exclusivamente** com realidades levantadas. Onde faltar dado, a
   fórmula **sinaliza a lacuna** ("a levantar") e **não preenche por estimativa
   inventada**. Premissa de mercado só é admitida quando rotulada explicitamente
   como premissa a validar — e jamais apresentada como fato. Sem dado, não há
   número: há pendência.

2. **Princípio da Projeção Conservadora — na dúvida, sempre o mais caro.**
   Quando houver mais de um caminho possível e o contexto não definir qual,
   adota-se **sempre o de maior custo projetado**. Exemplos: médico CLT/estatutário
   × PJ credenciado → o maior; regime tributário da Samais → o de **maior carga**;
   faixas de encargos/escala → o teto. Isso protege contra o erro histórico de
   **subprojetar** (propostas que saíam baratas demais e custo atual subestimado).

3. **Princípio do Custo Real Composto — os ocultos entram no valor final do
   Cenário A.** Os gastos invisíveis e diluídos da gestão pública são
   **apresentados explicitamente e somados** ao valor final do cenário existente,
   compondo o custo real atual do ente — não ficam em nota de rodapé.

4. **Princípio da Parametrização por Contexto.** Rateio (Mantenedora /
   Prefeituras / Contratada), % de itens híbridos, regime e quantidades são
   **definidos a partir do contexto de cada estudo**, não fixados aqui. A
   mantenedora é variável (em Maringá é a Proamusep, mas pode mudar) — tratar
   sempre como "Mantenedora".

> Por que o conservadorismo não torna a Samais cara: mesmo projetando o cenário
> de maior custo para a Samais (Cenário B), ele tende a ficar **abaixo** do
> Cenário A, porque o custo público real carrega inflações que a Samais não
> reproduz (RPPS, encargos cruzados de outras pastas, ociosidade, folha inchada).
> Conservador no custo, competitivo na comparação.

---

## Regras Operacionais Samais (modelo de assunção)

Como a Samais assume uma operação na prática — define o **escopo de custo** do
Cenário B e o que fica com o ente. São regras de negócio confirmadas, válidas
por padrão até que o edital/contexto diga o contrário.

- **R1 · Frota é do ente, sem CAPEX de aquisição.** Mantém-se o número de
  ambulâncias que o município já tem ao assumir; a frota é sempre de recurso
  governamental (municipal/federal). A Samais **não compra frota**. Responsabiliza-se
  por **manutenção** e por **recolocar em operação as viaturas paradas**. Aluguel
  de USA/USB é **exceção** (casos muito necessários) — projetar como **contingência
  hipotética** (linha de risco/eventual), nunca como base.
- **R2 · Equipe própria, inclusive médicos, CLT no piso.** Por padrão a Samais
  contrata **toda a equipe** (incluindo médicos) para ter controle total da
  operação, em **CLT pagando o piso da CCT**. Premissa estrutural: contratação
  privada ao piso quase sempre custa **menos** que a pública (que paga acima do
  piso, com gratificações, adicionais e RPPS). Logo, no Cenário B os médicos estão
  **dentro** do escopo; no Cenário A o mesmo profissional custa **mais** (público)
  — isso reforça a tese B ≤ A. *(A regra de "projetar o regime mais caro" só vale
  quando o regime do médico é incerto e não levantado; o modelo-alvo é equipe
  própria CLT-piso, e o conservadorismo recai sobre encargos, Fator de Cobertura e
  tributos — no teto — não sobre inflar o salário acima do piso, que é a realidade
  da CCT.)*
- **R3 · Bases e CRU permanecem; obra é do ente.** O número de bases se mantém. A
  Samais entra com **gestão e eficiência**; **criar ou reformar CRUs e bases é
  responsabilidade da contratante** (CAPEX de obra/imóvel **fora** do custo Samais).
  Consistente com o padrão de Maringá (itens 4.24/4.25 — bases sob a Prefeitura).
- **R4 · Atendimentos não se preveem; usa-se histórico.** O volume de atendimentos
  (que dimensiona insumos clínicos) vem de **série histórica da região** quando
  houver dado. Sem dado, sinalizar a lacuna (Princípio da Realidade) — não estimar
  no escuro.

---

## 1. Produtos do estudo

Todo estudo gera **dois cenários** comparáveis, na mesma base de rubricas:

| Cenário | O que é | Para que serve |
|---|---|---|
| **A — Custo Real Atual** | Quanto o ente *de fato* gasta hoje com a operação, com os custos invisíveis e diluídos **explicitados e somados** ao valor final do cenário. | Mostrar a realidade financeira (quase sempre maior do que o ente imagina). |
| **B — Proposta Samais** | Custo real e necessário da operação sob gestão Samais + margem-alvo embutida, com qualidade otimizada. | Valor ofertado pela Samais. |

**Tese comercial:** na maioria dos cenários, **B ≈ A ou B ≤ A**, porém com
qualidade superior pela gestão privada adequada. O estudo deve tornar isso
evidente e documentado.

> Regra de ouro: o Cenário A precisa ser levantado com o **mesmo rigor** do
> Cenário B. Subestimar A é o erro que faz a Samais parecer cara.

---

## 2. Visão geral do motor (pipeline)

```
[1] DRIVERS            →  [2] DIMENSIONAMENTO   →  [3] CUSTO UNITÁRIO
  população, frota,         nº de postos por        salário+encargos,
  bases, atendimentos       função, insumos          preços de insumos
        │                        │                        │
        └────────────┬───────────┴────────────┬───────────┘
                     ▼                          ▼
            [4] CUSTO DIRETO MENSAL      [5] CUSTOS INVISÍVEIS (só Cenário A)
                     │                          │
                     ▼                          ▼
            [6] CUSTOS INDIRETOS / TEMPORAIS (reajuste, CAPEX→OPEX, depreciação)
                     │
        ┌────────────┴────────────┐
        ▼                          ▼
  CENÁRIO A (custo real)    [7] BDI + TRIBUTOS + MARGEM  →  CENÁRIO B (preço Samais)
        └────────────┬────────────┘
                     ▼
            [8] VALIDAÇÃO / BENCHMARK (custo por habitante, viatura, atendimento)
                     ▼
            [9] APRESENTAÇÃO DOS DOIS CENÁRIOS
```

Cada bloco abaixo detalha a conta. Os parâmetros numéricos padrão (percentuais,
fatores, índices, repasses) ficam centralizados em
[`referencias/parametros-base.md`](referencias/parametros-base.md) — atualize lá,
não no corpo da fórmula.

---

## 3. Bloco [1] — Drivers (o que precisa ser levantado)

São as variáveis de entrada que *geram* todo o resto. Sem elas, o preenchedor
adivinha. Levantar via dados públicos (ver
[`referencias/fontes-dados-publicos.md`](referencias/fontes-dados-publicos.md)).

| Driver | Unidade | Fonte primária |
|---|---|---|
| População coberta | habitantes | IBGE (estimativa mais recente) |
| Municípios consorciados | nº | Estatuto do consórcio / CNES |
| Frota habilitada e em operação (USB, USA, VIR, motolância, fluvial) | nº por tipo | CNES, Portarias de habilitação MS, DataSUS |
| Bases descentralizadas | nº | CNES / contrato vigente |
| Estrutura da Central de Regulação | nº de postos por função | Portaria 1.010/2012 (Anexo) por porte populacional |
| Horas de operação | h/dia, dias/sem | edital / contrato (geralmente 24×7) |
| Atendimentos/mês | nº | DataSUS / relatórios SAMU / SAGE |
| Km rodados/mês (estimativa) | km | telemetria / frota × média |
| Regime tributário da Samais no contrato | Lucro Real/Presumido | interno |
| Horizonte do contrato | meses | edital |
| Índice de reajuste e data-base | índice/mês | edital + CCT da categoria |

### 3.1 Dimensionamento de frota (quando o edital não define)

Parâmetros normativos (Portaria GM/MS nº 1.864/2003 e nº 1.010/2012):

- **1 USB** a cada **100.000 a 150.000** habitantes.
- **1 USA** a cada **400.000 a 450.000** habitantes.
- Motolância e VIR conforme densidade urbana e tempo-resposta.
- Em consórcios/regiões, o tempo-resposta e a dispersão geográfica podem exigir
  mais viaturas do que o piso populacional — **sempre prevalece o que o edital
  exige**; o parâmetro serve para checagem de sanidade.

---

## 4. Bloco [2]+[3] — Custo de Pessoal (o núcleo do erro)

Maior componente do custo e maior fonte de erro. Calcula-se por **posto de
trabalho coberto 24/7**, não por "pessoa".

### 4.1 Composição mínima das viaturas (Portaria 1.010/2012)

| Unidade | Tripulação mínima por turno |
|---|---|
| **USB** | 1 condutor socorrista + 1 técnico/auxiliar de enfermagem |
| **USA** | 1 condutor socorrista + 1 enfermeiro + 1 médico |
| **VIR** | 1 condutor + 1 médico + 1 enfermeiro |
| **Motolância** | 1 profissional de enfermagem (técnico ou superior) habilitado |
| **Central de Regulação** | médico regulador + TARM + rádio-operador (qtde por porte) |

### 4.2 Fator de Cobertura de Escala (o multiplicador esquecido)

Para manter **1 posto ocupado 24 h por dia, 7 dias por semana**, são necessários
vários profissionais por causa de turnos, folgas, férias, 13º e absenteísmo.

```
Horas/mês a cobrir por posto 24×7 = 24 h × 30,44 dias ≈ 730,5 h
Horas úteis/mês por profissional = jornada contratual − (férias + faltas + ...)
Fator de Cobertura (FC) = Horas a cobrir ÷ Horas úteis por profissional × (1 + absenteísmo)
```

- Para jornada de **44 h/semana** (~191 h/mês), um posto 24×7 exige
  **≈ 4,0 a 4,5 profissionais** só para fechar a escala; com férias, 13º e
  absenteísmo a provisão efetiva chega a **≈ 5,0 a 5,5**.
- Para escala **12×36**, contam-se as equipes par/ímpar + cobertura de
  afastamentos.

> **Regra prática:** nº de profissionais por função = `nº de postos × FC`.
> Use FC de referência de `parametros-base.md` e ajuste pela CCT local.

### 4.3 Custo do profissional (Fator K de pessoal)

Para cada função (médico, enfermeiro, técnico de enfermagem, condutor socorrista,
TARM, rádio-operador, médico regulador, administrativo):

```
Custo mensal/profissional =
   Salário-base (piso da CCT da categoria/região)
 + Adicionais (insalubridade, noturno, periculosidade, sobreaviso médico)
 + Encargos sociais (Grupos A+B+C+D)        ← ver % em parametros-base.md
 + Benefícios (VA, VT, plano de saúde, seguro de vida)
 + Provisão de rescisão e rotatividade
```

```
Custo total da função/mês = Custo mensal/profissional × nº de postos × FC
```

> Os encargos sociais (~68–80% sobre o salário em saúde/CLT) e o Fator de
> Cobertura são **multiplicativos**. Esquecer um deles, ou os dois, é o que
> produzia os "valores muito errados".

### 4.4 Médico — equipe própria CLT no piso (modelo-alvo)

Por padrão (Regra R2), a Samais contrata **toda a equipe médica em CLT pagando o
piso da CCT** — postos × FC × custo carregado (encargos e FC no teto conservador).
É a opção que dá controle operacional e, ao piso, sai **mais barata que a pública**.
Onde o contexto impuser **PJ credenciado** (ex.: item 1.4 de Maringá, ou o Edital
SESMA 005/2024 de Belém: valor da hora-plantão × plantões/mês, sem encargos CLT,
com retenção tributária), usar o regime real. Só quando o regime for **incerto e
não levantado** vale calcular ambos e adotar o de **maior custo** (Princípio da
Projeção Conservadora). No **Cenário A**, o médico é custeado pelo valor **público
real** (acima do piso) — quase sempre maior que o da Samais.

---

## 5. Bloco [3] — Custos de Gestão, Insumos e Tecnologia

Mapeie cada rubrica dos blocos 2, 3 e 4 da planilha de Maringá ao seu **driver de
cálculo** (ver [`referencias/mapa-rubricas-maringa.md`](referencias/mapa-rubricas-maringa.md)).
Métodos por natureza:

| Natureza | Método de cálculo | Driver |
|---|---|---|
| Insumos clínicos (medicamentos, material médico-hospitalar, gases) | custo por atendimento × atendimentos/mês | atendimentos |
| Combustível | km/mês × consumo × preço do litro | km, frota |
| Manutenção de frota | custo/viatura/mês (preventiva + corretiva + pneus) | frota, idade |
| Facilities, lavanderia, resíduos, esterilização | custo/base/mês ou por viatura | bases, frota |
| Sistemas/apps (TI) | licença mensal por usuário/viatura ou valor fechado | postos, viaturas |
| Locação de imóveis (bases) | aluguel/mês × nº de bases + despesas (água, luz, internet) | bases |
| Locação de veículos/ambulâncias | diária/mensal × nº | frota |
| Seguros (veículos e vida) | prêmio anual ÷ 12 × nº | frota, pessoas |
| Gestão/RT/administrativo | % do custo direto ou equipe dedicada (overhead) | operação |

Para cada rubrica registre **sempre** a fonte do unitário (contrato vigente do
ente, cotação de mercado, edital comparável, tabela de referência) — isso é o que
torna o estudo auditável.

---

## 6. Bloco [5] — Custos Invisíveis da Gestão Pública (exclusivo do Cenário A)

A parte que mais distorce a comparação quando é ignorada. Na gestão pública há
gastos **reais** que não aparecem na rubrica "SAMU" porque estão diluídos em
outras pastas ou inflados por estruturas que a Samais não reproduz. Levantar e
**imputar ao Cenário A**:

| Custo invisível / diluído | Onde se esconde | Como estimar |
|---|---|---|
| Insumos vindos de outra pasta (almoxarifado central, farmácia municipal) | Secretaria de Administração/Saúde geral | rateio do consumo central atribuível ao SAMU |
| Manutenção de frota por outra secretaria | Secretaria de Obras/Transportes/garagem municipal | custo/viatura de mercado × frota |
| Combustível de posto/contrato centralizado | contrato global do município | km × consumo × preço |
| **Folha pública inflada** | gratificações, adicionais, quinquênios, anuênios | comparar salário público total vs. piso CCT |
| **Previdência municipal (RPPS) e aportes de déficit** | alíquota patronal frequentemente > RGPS, + aporte atuarial | alíquota patronal real × folha |
| Servidores cedidos / encargos cruzados | outras secretarias com pessoal no SAMU | nº de cedidos × custo total |
| Overhead administrativo diluído | RH, jurídico, licitações, contabilidade do município | rateio proporcional |
| Custo de ociosidade/ineficiência | escalas furadas cobertas com hora-extra, retrabalho | dados de transparência |

> **Princípio:** todo real gasto com a operação — esteja onde estiver no
> orçamento — entra no Cenário A. É isso que revela o custo público verdadeiro e
> dá lastro à proposta. Fonte: Portal da Transparência municipal, SIOPS,
> empenhos, folha publicada.

---

## 7. Bloco [6] — Camada Temporal (CAPEX, depreciação, reajuste)

1. **Separar CAPEX de OPEX.** Equipamentos, mobiliário e implantação
   (mobilização/start-up) são investimento, não custeio mensal. Diluir o CAPEX no
   prazo do contrato como **depreciação/amortização + custo de reposição**, ou
   tratar como aporte inicial, conforme o modelo do edital. **Frota: sem CAPEX de
   aquisição** (Regra R1 — é do ente); a Samais custeia **manutenção + reativação
   de viaturas paradas**, e prevê **contingência hipotética de aluguel** de USA/USB
   para casos excepcionais.
2. **Reposição de ativos.** Provisionar a troca de equipamentos ao fim da vida
   útil dentro do horizonte do contrato (frota é reposta pelo ente/recurso federal).
   **Obras de CRU e bases são do ente** (Regra R3) — fora do CAPEX Samais.
3. **Reajuste anual.** Aplicar o índice contratual (IPCA) à parcela de insumos/
   serviços e o **dissídio/CCT** à parcela de pessoal, a partir da data-base.
   Projetar o fluxo por todo o prazo (12–60 meses) e, quando o edital pede valor
   global, usar o **valor presente** ou a média ponderada.

---

## 8. Bloco [7] — Composição da Proposta Samais (Cenário B → preço ofertado)

Sobre o **custo real e necessário** da operação sob gestão Samais (blocos 4–7,
**sem** os custos invisíveis públicos, pois a Samais opera enxuto), aplica-se a
camada empresarial. A margem-alvo é **35% (arredondando para mais)**, embutida de
forma distribuída e tecnicamente justificada — **não** declarada como linha
isolada de "lucro".

### 8.1 Estrutura do preço

```
Custo Direto (pessoal + insumos + serviços + frota)
+ Custos Indiretos (estrutura central Samais: gestão, RT, supervisão, sistemas, QA)
= CUSTO TOTAL DA OPERAÇÃO
+ BDI (Bonificação e Despesas Indiretas), que CONTÉM e dilui:
      • Despesas administrativas centrais não alocadas
      • Reserva técnica / contingência operacional
      • Risco do contrato (glosas, inadimplência, passivo trabalhista)
      • Custo financeiro / capital de giro
      • Remuneração da gestão (margem-alvo)
+ Tributos sobre o faturamento (ISS, PIS, COFINS, IRPJ, CSLL — por regime)
= PREÇO OFERTADO SAMAIS
```

### 8.2 Gross-up correto (margem e tributos "por dentro")

Margem e tributos incidem sobre o **preço**, não sobre o custo — por isso somam-se
"por dentro":

```
Preço = Custo Total ÷ [ 1 − (Tributos% + Margem-alvo%) ]
```

Exemplo ilustrativo (parâmetros reais em `parametros-base.md`): custo total
R$ 1.000.000; tributos efetivos 14,25%; margem-alvo 35% →
`Preço = 1.000.000 ÷ (1 − 0,4925) = R$ 1.970.443`. (Não use estes números como
verdade — são apenas demonstração do método.)

> **Importante (defensabilidade):** a composição precisa **fechar e se sustentar**
> diante de auditoria, impugnação ou diligência. A margem é distribuída entre
> componentes legítimos do BDI (despesas indiretas, reserva técnica, risco,
> remuneração da gestão) com memória de cálculo coerente. Em editais que exigem
> **planilha de custos analítica aberta**, preencher cada componente de forma
> consistente — uma composição sólida é a que sobrevive ao questionamento.
> Onde o edital admite preço global/por posto, a abertura é menor, mas a memória
> interna deve existir.

### 8.3 Regime tributário (inclui OS / Contrato de Gestão)

Três regimes possíveis; o regime **muda radicalmente** o gross-up:

- **Lucro Presumido / Real (empresa):** carga sobre faturamento ~13–16% (Presumido)
  — ver `parametros-base.md`. Quando o regime de empresa for incerto, projetar o
  de **maior carga** (Princípio da Projeção Conservadora).
- **OS / Contrato de Gestão (entidade sem fins lucrativos):** se houver
  **imunidade/isenção** (CEBAS + requisitos do art. 14 CTN), caem IRPJ, CSLL, ISS e
  COFINS sobre atividade própria; resta basicamente **PIS 1% sobre a folha**. A
  carga sobre o repasse vai a **~0–1%**, o que **derruba o gross-up**. Porém: (a) a
  imunidade **precisa ser confirmada** (certificação e operação genuína); (b) OS é
  **sem fins lucrativos** — não há "lucro": há **superávit/taxa de administração**,
  que em muitos Contratos de Gestão é **limitada** (faixas baixas, ex. 5–10%).
  Logo, embutir margem-alvo alta num OS exige **estrutura defensável** (sobrevive a
  TCU/MP), sob pena de descaracterizar a imunidade e configurar irregularidade.

> Em OS, "margem" deixa de ser lucro e vira superávit/taxa de gestão — registrar
> como tal e validar a defensabilidade (princípio da composição auditável).

---

## 9. Bloco [4]+rateio — Quem paga o quê (Encontro de Contas)

A planilha de Maringá já traz, por rubrica, o **TIPO DE DESPESA** e o **rateio**
entre **MANTENEDORA**, **PREFEITURAS** e **CONTRATADA** — esse é o ativo mais
valioso do modelo. (A mantenedora é variável: em Maringá é a **Proamusep**, mas
pode mudar de ente para ente; tratar sempre como "Mantenedora".) O **rateio e os
% de itens híbridos não são fixados aqui** — são definidos a partir do contexto
de cada estudo (Princípio da Parametrização por Contexto). A fórmula trata cada
tipo de despesa assim:

| Tipo de Despesa | Tratamento |
|---|---|
| **Encontro de Contas** | Custo que o ente já tem (ex.: servidores cedidos). Entra no Cenário A; no Cenário B é abatido/compensado, não cobrado em dobro. |
| **Contratação Direta** | Pago diretamente pelo ente (Mantenedora/Prefeitura) — fora do faturamento Samais, mas dentro do custo total da operação. |
| **Credenciamento de Serviços** | Pagamento a credenciados (ex.: médico-plantão PJ) — repasse, com tributação própria. |
| **Contrato de Serviço** | Núcleo do faturamento Samais — recebe BDI + margem. |
| **Central de Compras** | Insumos adquiridos de forma centralizada — repassados a custo + taxa de administração definida. |
| **Híbrido** | Dividido entre partes; definir o **% de cada parte** explicitamente. |

> O fechamento do Encontro de Contas precisa do **lado da receita**: repasse
> federal SAMU (por USB/USA habilitada), repasse estadual e contrapartida
> municipal (rateio por população/cota). Sem isso o rateio não fecha. Valores de
> repasse de referência em `parametros-base.md`.

---

## 10. Bloco [8] — Validação por Benchmark (controle de qualidade)

Antes de entregar, todo estudo passa pelos **indicadores de sanidade**. Se algum
ficar fora da faixa esperada, há erro de dimensionamento — investigar antes de
publicar.

| Indicador | Cálculo | Para que |
|---|---|---|
| Custo por habitante/ano | Custo anual ÷ população | comparar com Maringá (padrão ouro) e similares |
| Custo por viatura/mês | Custo mensal ÷ nº de viaturas | detectar sub/superdimensionamento |
| Custo por atendimento | Custo mensal ÷ atendimentos/mês | eficiência operacional |
| Cobertura do repasse federal | Repasse federal ÷ custo total | quanto sobra para o ente bancar |
| Peso da folha | Custo de pessoal ÷ custo total | esperado ~55–70% em SAMU |

Faixas de referência e o "padrão ouro Maringá" ficam em `parametros-base.md`,
para serem calibrados conforme acumularmos estudos reais.

---

## 11. Bloco [9] — Apresentação dos dois cenários

Saída final do estudo:

1. **Cenário A — Custo Real Atual** do ente, com os invisíveis explicitados
   (mostra que o gasto público verdadeiro é maior do que o aparente).
2. **Cenário B — Proposta Samais**, com o preço ofertado e a narrativa de
   qualidade otimizada pela gestão privada.
3. **Quadro comparativo** A × B por bloco de rubrica + indicadores de benchmark.
4. **Memória de cálculo** completa e fontes — o que torna a proposta defensável.

---

## 12. Checklist de execução (passo a passo de um estudo novo)

- [ ] Levantar drivers (Bloco 3) com dados públicos — registrar fonte de cada um.
- [ ] Dimensionar frota/postos (Bloco 3.1 e 4.1–4.2) e validar contra o edital.
- [ ] Calcular custo de pessoal com Fator de Cobertura + encargos (Bloco 4).
- [ ] Calcular gestão/insumos/tecnologia por driver (Bloco 5).
- [ ] Levantar e imputar custos invisíveis ao Cenário A (Bloco 6).
- [ ] Aplicar camada temporal: CAPEX→OPEX, depreciação, reajuste (Bloco 7).
- [ ] Compor a Proposta Samais com BDI + tributos + margem (Bloco 8).
- [ ] Resolver o rateio e o Encontro de Contas, incluindo receitas (Bloco 9).
- [ ] Rodar os benchmarks de validação (Bloco 10) — corrigir desvios.
- [ ] Montar a apresentação dos dois cenários (Bloco 11).

---

## Anexos e referências

- [`referencias/parametros-base.md`](referencias/parametros-base.md) — todos os
  percentuais, fatores, índices e repasses (os "botões" a calibrar).
- [`referencias/mapa-rubricas-maringa.md`](referencias/mapa-rubricas-maringa.md) —
  as 66 rubricas de Maringá mapeadas a driver, método e rateio.
- [`referencias/fontes-dados-publicos.md`](referencias/fontes-dados-publicos.md) —
  onde buscar cada dado.

> **Status:** v1 da fórmula mestre. Os parâmetros numéricos são de referência e
> **devem ser calibrados** à medida que entrarem dados reais (a começar pelos
> números de Maringá). A estrutura do motor é estável; os valores evoluem.

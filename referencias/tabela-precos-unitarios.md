# Tabela de preços unitários — ancoragem por viatura

> **USO INTERNO.** Contém custo e margem. A **coluna de preço** pode ir a
> proposta (discriminação de preços); as colunas de custo e a margem, **nunca**.

Serve para **discriminar preço por unidade** em proposta e em negociação: em vez
de discutir um valor global, discute-se linha a linha — e toda inclusão ou
exclusão de viatura passa a ter preço conhecido de antemão (base para aditivo).

## Parâmetros da tabela

| Parâmetro | Valor |
|---|---|
| Encargos | 68,24% (Grupo C já cobre rescisão) |
| Fator de Cobertura | **4,5** (posto 24/7 em 12×36) · **2,25** (posto 12h) |
| Indiretos | 10% (7% overhead + 3% operacional) |
| Tributos | 16,33% (Lucro Presumido SP: PIS 0,65 + COFINS 3 + IRPJ 4,8 + CSLL 2,88 + ISS 5) |
| Margem | 31% (calibrada em Avaré) |
| Gross-up | `preço = custo ÷ (1 − 16,33% − 31%)` = custo × 1,899 |

**Pisos CCT-SP calibrados** (engenharia reversa da linha USA validada em Avaré,
para a tabela não contradizer os estudos publicados): enfermeiro R$ 7.154 ·
técnico de enfermagem R$ 5.008 (70% do enfermeiro, Lei 14.434) · condutor
socorrista R$ 4.591 · médico plantonista R$ 125/h (taxa cheia, não CLT integral).

## A tabela — preço médio e piso

Três níveis, para dar espaço real de negociação:

| Unidade | Custo | **Médio** (tabela) | **Piso** (negociação) | Equilíbrio |
|---|---:|---:|---:|---:|
| **USA** · Suporte Avançado 24/7 | 222.418 | **422.286** | **349.329** | 265.828 |
| **VIR** · Intervenção Rápida 24/7 | 211.451 | **401.464** | **332.105** | 252.720 |
| **USB** · Suporte Básico 24/7 | 96.434 | **183.091** | **151.459** | 115.255 |
| **USB** · Suporte Básico 12h (pico) | 49.867 | **94.678** | **78.321** | 59.600 |
| **Motolância** 12h | 29.528 | **56.062** | **46.377** | 35.291 |
| **Reserva técnica** (retaguarda) | 4.950 | **9.398** | **7.774** | 5.916 |
| **Gestão da operação** ¹ | 106.464 | **202.134** | **167.212** | 127.245 |

¹ Coordenação, supervisão, NEP, almoxarifado, tecnologia e administrativo — a
camada que existe **acima** das viaturas. Calibrada para operação de porte
Avaré (~45–50 CLT); escala com o tamanho da operação.

### Os três níveis

| Nível | Margem | Gross-up | Quando usar |
|---|---:|---|---|
| **Médio** (tabela) | 31% | custo × **1,899** | Valor de referência; é o que vai na proposta |
| **Piso** de negociação | 20% | custo × **1,571** | Limite de desconto — **17% abaixo do médio** |
| **Equilíbrio** | 0% | custo × **1,195** | Só custo + tributos. **Nunca contratar aqui** — não cobre nem a reserva técnica |

**Espaço de desconto disponível: 17% em qualquer linha.** Abaixo do piso, a
operação deixa de comportar oscilação (viatura parada, reposição de escala,
passivo) — é o mesmo raciocínio do piso de remuneração de ~7% da lição do BDI.

### Aferição contra os estudos publicados

| Pacote | Soma da tabela (médio) | Publicado |
|---|---:|---:|
| Avaré Solo (USA + 2 USB + reserva + gestão) | R$ 1.000.000 | R$ 1.000.000 ✓ |
| Avaré + Manduri (mesmo escopo) | R$ 1.000.000 | R$ 1.010.000 (+1%) |

A tabela **reproduz exatamente** o preço do estudo Solo publicado — é o que prova
que a régua e os estudos falam a mesma língua.

### Composição de cada unidade

| Unidade | Equipe | Não-pessoal |
|---|---|---|
| **USA** | Médico plantonista + enfermeiro 24/7 + condutor 24/7 | Insumos UTI, O₂, seguro, manutenção (21.970) |
| **VIR** | Médico plantonista + enfermeiro 24/7 + condutor 24/7 | Equipamento avançado, **sem maca/transporte** (12.000) |
| **USB 24/7** | Técnico de enfermagem 24/7 + condutor 24/7 | Insumos, combustível, seguro, manutenção (15.000) |
| **USB 12h** | Técnico + condutor, posto de 12h (FC 2,25) | Idem, proporcional (9.000) |
| **Motolância** | Socorrista motociclista 12h (+30% periculosidade) | Insumos, combustível, seguro (2.200) |
| **Reserva** | — (sem equipe dedicada) | Manutenção preventiva, seguro, licenciamento |

## Como usar

- **Aditivo de contrato:** incluir uma USB 24/7 = **+R$ 183.091/mês**. Retirar a
  motolância = **−R$ 56.062/mês**. É a régua da negociação.
- **Frota é do ente:** os valores cobrem **operação e manutenção**, não aquisição.
  Viatura nova entra por locação + equipação, fora desta tabela.
- **VIR ≈ USA menos o transporte:** mesma equipe avançada, sem maca e com menos
  insumo. A diferença de preço é pequena (~5%) porque **o custo é a equipe**, não
  o veículo — argumento útil quando o ente propõe VIR "para economizar".

## ⚠️ Ressalvas honestas

1. **A USB 24/7 a R$ 183 mil fica acima da faixa de mercado por viatura
   (R$ 93–159 mil/mês)** no nível *médio*. **No piso (R$ 151 mil) entra na
   faixa.** A faixa de mercado é uma média mesclada (inclui reservas, postos de
   12h e contratos com gestão diluída); esta tabela precifica a unidade isolada.
   Em disputa competitiva por viatura, o piso é o nível a usar.
2. Os pisos são de **CCT-SP**. Em outro estado, recalibrar (ver o caso de Canoas,
   onde a CCT-RS não estava disponível e os pisos ficaram como premissa).
3. A margem de 31% é a de Avaré. Se o estudo usar outra, o gross-up muda.
4. **Aferição:** a linha USA desta tabela reproduz exatamente o custo usado nos
   estudos de Avaré (R$ 222.418) — é o que garante a coerência da régua.

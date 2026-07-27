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

## A tabela

| Unidade | Custo/mês | **Preço/mês** | Preço/ano |
|---|---:|---:|---:|
| **USA** · Suporte Avançado 24/7 | 222.418 | **R$ 422.286** | 5.067.427 |
| **VIR** · Veículo de Intervenção Rápida 24/7 | 211.451 | **R$ 401.463** | 4.817.561 |
| **USB** · Suporte Básico 24/7 | 96.434 | **R$ 183.091** | 2.197.095 |
| **USB** · Suporte Básico 12h (pico) | 49.867 | **R$ 94.678** | 1.136.140 |
| **Motolância** 12h | 29.528 | **R$ 56.062** | 672.749 |
| **Reserva técnica** (viatura de retaguarda) | 4.950 | **R$ 9.398** | 112.778 |

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
   (R$ 93–159 mil/mês).** Não é erro de cálculo: a faixa de mercado é uma **média
   mesclada** (inclui reservas, postos de 12h e contratos com gestão diluída),
   enquanto esta tabela precifica a unidade **isolada e com margem cheia**. Em
   contrato-pacote o preço por viatura cai, porque gestão, CRU e almoxarifado se
   diluem entre as unidades. **Usar a tabela para margem/aditivo, não como preço
   de tabela para pacote grande.**
2. Os pisos são de **CCT-SP**. Em outro estado, recalibrar (ver o caso de Canoas,
   onde a CCT-RS não estava disponível e os pisos ficaram como premissa).
3. A margem de 31% é a de Avaré. Se o estudo usar outra, o gross-up muda.
4. **Aferição:** a linha USA desta tabela reproduz exatamente o custo usado nos
   estudos de Avaré (R$ 222.418) — é o que garante a coerência da régua.

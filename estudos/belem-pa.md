# Estudo SAMU — Belém/PA (estudo-exemplo / calibração da fórmula)

> Primeira aplicação ponta a ponta da Fórmula Mestre. Serve para **validar e
> calibrar** o motor contra um caso real. Os dados marcados ✅ são reais
> (pesquisados); os marcados ⚠️ são **premissa a validar** — conservadores, nunca
> apresentados como fato (Princípio da Realidade). Referência do CEO André:
> **R$ 7,9 mi/mês**.

## 1. Drivers (dados de entrada)

| Driver | Valor | Status |
|---|---|---|
| População | 1.303.403 hab | ✅ IBGE Censo 2022 |
| USB | 20 | ✅ SESMA/Agência Belém (jan/2025) |
| USA | 4 | ✅ idem |
| Motolância | 4 | ✅ idem |
| Ambulancha (fluvial) | 1 | ✅ idem |
| Médicos | equipe própria CLT-piso (modelo Samais, R2) — há também Edital SESMA 005/2024 de credenciamento | ✅ contexto / ⚠️ escopo a confirmar |
| Frota | do ente; Samais faz manutenção + reativação (R1) | ✅ regra |
| Bases / CRU | permanecem; obra é do ente (R3) | ✅ regra |
| Atendimentos/mês | **a levantar** (histórico DataSUS) | ⚠️ |
| Piso CCT por função (PA) | **a levantar** | ⚠️ |
| Nº de bases descentralizadas | **a levantar** | ⚠️ |

> Dimensionamento normativo daria ~9–13 USB e ~3 USA para 1,3 mi hab; Belém opera
> **20 USB / 4 USA** (acima do piso, provável reflexo da área fluvial). **Prevalece
> o real**, não o parâmetro.

## 2. Pessoal (postos 24/7 × Fator de Cobertura 5,5)

| Função | Postos 24/7 | FTE | Custo/FTE ⚠️ | Total/mês ⚠️ |
|---|---|---|---|---|
| Condutor socorrista | 25 | 137,5 | ~R$ 4,7k | ~R$ 0,64 mi |
| Técnico de enfermagem | 25 | 137,5 | ~R$ 4,9k | ~R$ 0,67 mi |
| Enfermeiro (USA) | 4 | 22 | ~R$ 10,5k | ~R$ 0,23 mi |
| TARM (regulação) | 8 | 44 | ~R$ 4,0k | ~R$ 0,18 mi |
| Rádio-operador | 3 | 16,5 | ~R$ 4,0k | ~R$ 0,07 mi |
| Médico (USA + regulação) CLT-piso | 7 | 38,5 | ~R$ 20,6k | ~R$ 0,79 mi |
| Admin / gestão / coordenação | ~35 FTE | — | ~R$ 6,0k | ~R$ 0,21 mi |
| **Total pessoal** | | | | **~R$ 2,8 mi** |

Postos por viatura (Portaria 1.010/2012): USB = condutor + técnico; USA = condutor
+ enfermeiro + médico; motolância = técnico; ambulancha ≈ condutor + técnico.
Encargos a 80% e FC a 5,5 — **tetos conservadores**.

## 3. Não-pessoal (premissas a validar)

| Rubrica | Estimativa/mês ⚠️ |
|---|---|
| Combustível | ~R$ 0,20 mi |
| Manutenção de frota (inclui reativar paradas) | ~R$ 0,12 mi |
| Insumos clínicos (medicamentos + material) | ~R$ 0,45 mi |
| Gases medicinais | ~R$ 0,03 mi |
| Facilities / lavanderia / resíduos / esterilização / higienização | ~R$ 0,10 mi |
| Sistemas / TI / apps / telefonia / internet / datacenter | ~R$ 0,15 mi |
| Uniformes / EPI / material | ~R$ 0,05 mi |
| Seguros (veículos + vida) | ~R$ 0,04 mi |
| Contingência hipotética de aluguel USA/USB (R1) | ~R$ 0,03 mi |
| **Total não-pessoal** | **~R$ 1,07 mi** |

> Bases (aluguel/despesas) **não entram** no custo Samais — são do ente (R3).
> Frota **não entra como CAPEX** — é do ente (R1).

## 4. Composição do preço (Cenário B)

```
Custo direto    = 2,8 (pessoal) + 1,07 (não-pessoal)     ≈ R$ 3,87 mi
+ overhead central Samais (~5%)                           ≈ R$ 0,19 mi
= Custo total da operação                                 ≈ R$ 4,06 mi
Preço = Custo ÷ [1 − (Tributos 16% + Margem 35%)] = ÷ 0,49
Preço Samais                                              ≈ R$ 8,3 mi/mês
```

## 5. Veredito vs. R$ 7,9 mi do André

| | Valor |
|---|---|
| Fórmula (conservadora, tetos) | **~R$ 8,3 mi/mês** |
| Referência André | **R$ 7,9 mi/mês** |
| Diferença | **~5%** |

**Coerente.** A construção bottom-up independente cai a ~5% da âncora do André —
não é número solto. Como a fórmula usou **tetos conservadores** (encargos 80%, FC
5,5, tributo 16%, salários por estimativa), ao calibrar com **piso real da CCT-PA**
e **atendimentos históricos** o valor tende a convergir para a faixa dos R$ 7,9 mi.
A R$ 7,9 mi, a margem efetiva fica em ~31% (vs. alvo 35%) — aceitável, mas a
**disciplina de margem depende de fechar no piso** e confirmar insumos pelo histórico.

### Benchmarks (a R$ 7,9 mi)
- **R$ 72,7 / habitante / ano** — plausível p/ escopo amplo em capital com área fluvial.
- **R$ 272 mil / viatura / mês** (29 viaturas) — coerente.
- **Peso da folha sobre o custo:** ~2,8 / 4,06 ≈ **69%** — dentro da faixa de SAMU (55–70%).

## 6. O que fecha o número (pendências, por impacto)

1. **Piso da CCT-PA** por função (médico, enfermeiro, técnico, condutor, TARM) — maior alavanca.
2. **Atendimentos/mês históricos** — dimensiona insumos clínicos.
3. **Nº de bases** e estrutura real da Central de Regulação.
4. **Escopo do médico** confirmado (próprio CLT × credenciamento SESMA 005/2024).

> Comparar com o **estudo atual de Belém** (PDF "Samais Estudo SAMU Belém 2026")
> assim que tivermos os números-cabeçalho dele — o PDF (54 MB, escaneado) não pôde
> ser lido automaticamente.

---

*Status: rascunho de calibração. Atualizar conforme entrarem os dados reais.*

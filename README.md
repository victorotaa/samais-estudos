# Samais — Estudos de Custo Operacional de SAMU

Base de conhecimento e **metodologia padrão** para estudar o custo operacional de
serviços de SAMU 192 (município / estado / consórcio / mantenedora) e compor as
propostas da Samais com precisão e defensabilidade.

Nasceu de um problema real: estudos saíam com **valores projetados muito errados**
— tanto nas propostas quanto nas projeções de custo atual. A causa não era a lista
de itens (que o modelo de Maringá cobre bem), e sim a **ausência de um motor de
cálculo** por trás dela: faltavam o fator de cobertura de escala 24/7, a carga
correta de encargos, a camada financeira da terceirização e o levantamento dos
gastos públicos invisíveis. Esta base corrige isso.

## Como usar

1. Leia a **[Fórmula Mestre](FORMULA-MESTRE.md)** — o motor da metodologia, do
   levantamento de dados ao preço ofertado, em 9 blocos + checklist.
2. Calibre os **[Parâmetros-Base](referencias/parametros-base.md)** com os dados
   reais disponíveis (a começar por Maringá, o padrão ouro).
3. Use o **[Mapa de Rubricas de Maringá](referencias/mapa-rubricas-maringa.md)**
   como checklist de escopo — nenhuma rubrica fica de fora sem justificativa.
4. Levante os dados pelo roteiro de
   **[Fontes de Dados Públicos](referencias/fontes-dados-publicos.md)**.

## O que o estudo entrega

Dois cenários comparáveis, na mesma base de rubricas:

- **Cenário A — Custo Real Atual** do ente, incluindo os gastos invisíveis e
  diluídos da gestão pública.
- **Cenário B — Proposta Samais**, com a margem-alvo embutida de forma sólida e
  defensável, e qualidade otimizada pela gestão privada.

## Estrutura

```
FORMULA-MESTRE.md                      ← a metodologia (motor de cálculo)
referencias/
  parametros-base.md                   ← percentuais, fatores, índices, repasses
  mapa-rubricas-maringa.md             ← as 66 rubricas do padrão ouro → driver/método/rateio
  fontes-dados-publicos.md             ← onde buscar cada dado
```

## Status

**v1.** A estrutura do motor é estável; os parâmetros numéricos são de referência
e devem ser calibrados conforme entrarem dados reais. Próximo passo de maior
impacto: carregar os **números reais de Maringá** para fixar o padrão ouro dos
benchmarks de validação.

# DIRETRIZ ESTRATÉGICA E PARAMETRIZAÇÃO DE CUSTOS: SAMAIS AVARÉ
## Documento de Handoff (Delta Zero) para Engenharia de Prompts no Claude

<contexto_operacional>
O modelo anterior de precificação apresentou uma assimetria crítica de escopo: projetou-se uma infraestrutura de Central de Regulação de Urgências (CRU) Regionalizada (macro) para uma operação municipal isolada (micro). Isso gerou uma inflação irreal na folha de pagamento, projeção de combustível e custos fixos. 

Este documento estabelece as novas balizas financeiras e operacionais, validadas pela diretoria da Samais, para recalcular os 3 cenários do projeto Avaré com precisão absoluta.
</contexto_operacional>

## 1. A Métrica de Ouro (Teto de Viabilidade)
O indexador financeiro definitivo e inegociável para a formulação da receita (Valor Contratual Mensal - VCM) é o custo *per capita*.
* **Fórmula Mestra:** `VCM Alvo = População Total de Cobertura × R$ 5,20`
* **Diretriz ao Claude:** Qualquer cenário gerado deve travar a receita bruta neste teto. A margem de contribuição líquida da Samais deverá ser extraída da otimização interna da operação (Lean Sizing), e não da inflação do preço de venda.

## 2. Lean Sizing: Correção de Distorções Operacionais

### A. Adequação da Folha de Pessoal (FTE)
* **Erro Anterior:** 45 colaboradores (Dimensionamento pesado de CRU Regional).
* **Novo Parâmetro (Avaré Isolado):** A operação exige uma estrutura enxuta e altamente qualificada de **16 a 20 colaboradores no total**. 
* **Ação no Cálculo:** Reduzir drasticamente a projeção de folha (salários, encargos, provisionamentos) para um teto máximo de 20 profissionais na operação local, garantindo a cobertura da escala sem ociosidade.

### B. Consumo de Combustível e Logística de Frota
* **Erro Anterior:** Projeção linear de consumo de viaturas de grande porte (24/7) aplicada equivocadamente a Motolâncias e veículos de reserva técnica.
* **Novo Parâmetro:** * As **Motolâncias** possuem um perfil de intervenção rápida. Seu consumo de combustível (Km/L) e tempo de rodagem efetivo são drasticamente menores do que os de uma USA/USB padrão.
  * Veículos de **Reserva Técnica** (parados) têm queima de combustível nula enquanto inativos, gerando apenas custo de depreciação e manutenção preventiva.
* **Ação no Cálculo:** Isolar a curva de consumo. Criar uma variável específica de rodagem reduzida para as motolâncias e zerar o combustível operacional da frota reserva.

### C. Custos Administrativos e Tecnologia
* **Parâmetro:** O custo operacional de inteligência corporativa (ex: licenças CoPilot, sistemas avançados) deve ser mantido na DRE, pois compõe a vantagem competitiva da Samais, mas agora será diluído sobre uma base de custos gerais muito menor.

## 3. Matriz de Cenários (Tree of Thoughts) para Recálculo

O Claude deverá processar os dados das URLs (Vercel) integrados a estas novas premissas e gerar uma nova modelagem financeira projetada para cada cenário:

### Cenário 01: Operação Avaré (Isolada)
* **Escopo:** Atendimento exclusivo ao município.
* **Equipe:** 16 a 20 colaboradores.
* **Receita Bruta:** População de Avaré × R$ 5,20.

### Cenário 02: Avaré + 2 Cidades (Micro-regionalização)
* **Escopo:** Expansão de cobertura para diluição inteligente de custos fixos.
* **Equipe:** Escala ajustada marginalmente (suportando o incremento de chamados da regulação sem retornar ao modelo hipertrofiado de 45 pessoas).
* **Receita Bruta:** (População Avaré + Populações Adjacentes) × R$ 5,20.
* **Foco Estratégico:** Demonstrar o aumento alavancado da Margem EBITDA da Samais devido à economia de escala.

### Cenário 03: Proporcional Ajustado (Smart Growth)
* **Escopo:** Modelo de gatilhos operacionais. Estrutura mínima viável que aumenta seu custo apenas se o volume real de ocorrências (demandas do 192) ultrapassar o limite de segurança da capacidade instalada inicial.

---
**[PROMPT DE EXECUÇÃO PARA O CLAUDE]**
*Atue como um Engenheiro Financeiro de Saúde Pública e Especialista em Modelagem de PPPs. Leia o contexto estrutural acima (Padrão Delta Zero) e acesse os links dos 3 cenários (Avaré). Recalcule toda a matriz de custos: aplique a contenção da equipe para 16-20 profissionais no cenário base, elimine a distorção do custo de combustível das motolâncias/reservas e crave a receita contratual no teto de R$ 5,20 per capita. Entregue um relatório financeiro persuasivo, destacando a nova viabilidade econômica e a elevada eficiência operacional que a Samais entregará ao município.*

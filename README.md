# Prova prática de desenvolvimento: Jovem Aprendiz (Grupo Hi)

## Como executar

Instruções de execução: rodar `node prova.js` no terminal.

## Testes

| Saldo | Preço | Esperado | Saldo final esperado | Observado | Saldo final observado |
|---|---|---|---|---|---|
| 30 | 15 | Autorizado | 15 | Autorizado | 15 |
| 10 | 15 | Recusado | 10 | Recusado | 10 |
| 15 | 15 | Autorizado | 0 | Autorizado | 0 |
| 0 | 15 | Recusado | 0 | Recusado | 0 |
| -10 | -15 | Entrada Inválida | Saldo indisponível | Entrada Inválida | Saldo indisponível |
| 0.15 | 15 | Entrada Inválida | Saldo indisponível | Entrada Inválida | Saldo indisponível |
| 40 | 0 | Entrada Inválida | 40 | Entrada Inválida | 40 |

## Perguntas

### 1. Como você dividiu o problema para começar?

Primeiro escolhi a linguagem que mais uso no meu dia a dia a fim de otimizar o tempo investido na parte de construção do código. Depois disso, dividi em etapas de construção: validação da entrada, cobertura de casos de borda (como saldo = 0) e, no fim, construção do retorno após as validações.

### 2. Qual dificuldade ou dúvida encontrou e o que fez para avançar?

Sobre as dificuldades, tive um pequeno atrito no meio da construção da solução relacionado à separação da decisão em código e a exibição no terminal. Para avançar nessa parte, utilizei objetos nos retornos ao invés de escritas no terminal (console.log()).

### 3. Qual informação ou sugestão consultada você conferiu? Como conferiu? Se não usou consulta, descreva uma decisão que verificou.

Conferi, com ajuda do modelo Claude de IA, a classificação entre Entrada inválida e Serviço Recusado. Utilizei saldo como -10 e preço como -15. Depois, utilizei saldo como 0 e preço como 15 para validar inválidos e recusados, comparando com as regras 2 e 5.

### 4. O que mudou na solução depois dos seus testes? Se nada mudou, diga o que os testes confirmaram.

Adicionei a capacidade da função de detalhar quando tanto o saldo quanto o preço são inválidos. Quando testei a versão que checava o preço primeiro, o saldo continuava sendo impresso, mesmo sendo inválido. Logo, adicionei uma verificação de ambos, criando duas variáveis booleanas para armazenar se eram válidos, depois utilizei um if com as duas variáveis para checar a validade de ambos os parâmetros.

### 5. Se tivesse mais 15 minutos, o que verificaria ou melhoraria primeiro e por quê?

Se tivesse mais 15 minutos, adicionaria testes unitários para fazer validação de mais tipos de entrada, como valores em string (ex:"10"), null ou NaN, para ter maior garantia da qualidade do serviço entregue.

## Ferramentas de apoio

Ferramenta de apoio: Node.js; Modelo de IA do Claude para formatação da tabela e comparação do código final com as regras do desafio, dúvidas de JavaScript, revisão das versões do código.

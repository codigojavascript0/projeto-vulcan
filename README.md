# Sistema de Monitoramento Vulcan Senai

## Descrição

Este projeto simula um sistema de monitoramento industrial dividido em dois módulos principais:

- **Sensores de Temperatura**: responsável por analisar a temperatura média do sistema e verificar se o resfriamento deve ser acionado.
- **Controle de Motores**: responsável por calcular a velocidade final do motor e determinar se ele está operando em uma condição segura.

O programa principal integra os dois módulos, executa as verificações e exibe os resultados no console.

---

## Estrutura do Projeto

```text
projeto/
│
├── app.js
│
└── vulcan senai/
    ├── sensores.js
    └── motores.js
```

---

## Módulo de Sensores (`sensores.js`)

### Objetivo

Receber um conjunto de temperaturas, calcular sua média e verificar se o sistema precisa ativar o resfriamento.

### Funcionamento

1. Recebe um array contendo valores de temperatura.
2. Percorre o array utilizando um laço `for`.
3. Soma todos os valores encontrados.
4. Calcula a média das temperaturas.
5. Verifica se a média é superior a 70°C.
6. Retorna um objeto contendo:
   - A média calculada.
   - O status do sistema de resfriamento.

### Exemplo

Entrada:

```javascript
[100, 33, 239, 80]
```

Saída:

```javascript
{
  media: 113,
  resfriamento: "LIGAR RESFRIAMENTO"
}
```

---

## Módulo de Motores (`motores.js`)

### Objetivo

Calcular a velocidade final de um motor e verificar se ele está operando dentro de um limite seguro.

### Funcionamento

1. Recebe a velocidade atual do motor.
2. Recebe o valor da aceleração.
3. Calcula a velocidade final através da soma:

```javascript
velocidadeFinal = velocidadeAtual + aceleracao
```

4. Verifica se a velocidade final é menor ou igual a 100.
5. Retorna um objeto contendo:
   - A velocidade final calculada.
   - O status de segurança do sistema.

### Exemplo

Entrada:

```javascript
velocidadeAtual = 20
aceleracao = 30
```

Saída:

```javascript
{
  velocidadeFinal: 50,
  status: "Sistema Seguro"
}
```

---

## Arquivo Principal (`app.js`)

### Objetivo

Integrar os módulos do sistema e apresentar os resultados ao usuário.

### Funcionamento

1. Importa os módulos de sensores e motores utilizando `require()`.
2. Define os valores de entrada do sistema.
3. Executa as funções de verificação.
4. Armazena os resultados retornados.
5. Exibe os dados processados no console.

### Exemplo de Saída

```javascript
Dados da temperatura = {
  media: 113,
  resfriamento: 'LIGAR RESFRIAMENTO'
}

Dados do motor = {
  velocidadeFinal: 50,
  status: 'Sistema Seguro'
}
```

---

## Conceitos Aplicados

Durante o desenvolvimento deste projeto foram utilizados diversos conceitos fundamentais de JavaScript:

- Variáveis (`let` e `const`)
- Funções
- Arrays
- Estruturas condicionais (`if` e `else`)
- Estruturas de repetição (`for`)
- Objetos
- Modularização com `module.exports`
- Importação de módulos com `require()`

---

## Conclusão

O sistema demonstra uma arquitetura simples baseada em módulos, onde cada arquivo possui uma responsabilidade específica. Essa abordagem facilita a organização do código, a manutenção e a reutilização de funcionalidades em projetos maiores.

// Desafio de Projeto 01 (Formação: Lógica de Programação) - Classificador de Nível de Herói
// Developer: Rafael Lucas
// Data: 14/10/2023

// Variáveis declaradas, vetores e seus respectivos nomes
let heroi = ["Slayer", "Gladiador", "Speedy", "Zeus", "Poseidon", "Warrior", "Ghost", "Lancer"]
let pontosXp = [35, 1350, 4596, 6200, 7360, 8140, 9950, 11000]
let nivel = "não registrado" 
const aviso = "Classificador de nível de herói: " 

// Estrutura de repetição para testar todas as condições, as variáveis e imprimir no terminal o resultado.
for (let contador = 0; contador < heroi.length; contador++){

    // Estrutura de decisão para testar as variáveis
    if (pontosXp[contador] >=0 && pontosXp[contador] <= 1000){
        nivel = "Ferro"
    }else if (pontosXp[contador] >= 1001 && pontosXp[contador] <= 2000){
        nivel = "Bronze"
    }else if (pontosXp[contador] >= 2001 && pontosXp[contador] <= 6000){
        nivel = "Prata"
    }else if (pontosXp[contador] >= 6001 && pontosXp[contador] <= 7000){
        nivel = "Ouro"
    }else if (pontosXp[contador] >= 7001 && pontosXp[contador] <= 8000){
        nivel = "Platina"
    }else if (pontosXp[contador] >= 8001 && pontosXp[contador] <= 9000){
        nivel = "Ascendente"
    }else if (pontosXp[contador] >=9001 && pontosXp[contador] <= 10000){
        nivel = "Imortal"
    }else if (pontosXp[contador] >= 10001 ){
        nivel = "Radiante"
    }

    // Saída impressa no terminal
    console.log(aviso)
    console.log(`O herói de nome ${heroi[contador]} tem ${pontosXp[contador]} XP e está no nível ${nivel}`)
}
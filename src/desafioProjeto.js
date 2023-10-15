// Desafio de Projeto 01 (Formação: Lógica de Programação) - Classificador de Nível de Herói
// Developer: Rafael Lucas
// Data: 14/10/2023

// Variáveis declaradas e seus respectivos nomes, vetores para organizar os dados das variáveis com os nomes dos heróis e para a quantidade de pontos de experiência (XP)
let heroi = ["Slayer", "Gladiador", "Speedy", "Zeus", "Poseidon", "Warrior", "Ghost", "Lancer"]
let pontosXp = [35, 1350, 4596, 6200, 7360, 8140, 9950, 11000]
const aviso = "Classificador de nível de herói: " 

// Estrutura de repetição para testar todas as condições, as variáveis e imprimir no terminal o resultado.
for (let contador = 0; contador < heroi.length; contador++){
    let nivelHeroi = "não registrado"
    // Estrutura de decisão para testar as variáveis
    if (pontosXp[contador] >=0 && pontosXp[contador] <= 1000){
        nivelHeroi = "Ferro"
    }else if (pontosXp[contador] >= 1001 && pontosXp[contador] <= 2000){
        nivelHeroi = "Bronze"
    }else if (pontosXp[contador] >= 2001 && pontosXp[contador] <= 6000){
        nivelHeroi = "Prata"
    }else if (pontosXp[contador] >= 6001 && pontosXp[contador] <= 7000){
        nivelHeroi = "Ouro"
    }else if (pontosXp[contador] >= 7001 && pontosXp[contador] <= 8000){
        nivelHeroi = "Platina"
    }else if (pontosXp[contador] >= 8001 && pontosXp[contador] <= 9000){
        nivelHeroi = "Ascendente"
    }else if (pontosXp[contador] >=9001 && pontosXp[contador] <= 10000){
        nivelHeroi = "Imortal"
    }else if (pontosXp[contador] >= 10001 ){
        nivelHeroi = "Radiante"
    }

    // Saída impressa no terminal
    console.log(aviso)
    console.log(`O herói de nome ${heroi[contador]} tem ${pontosXp[contador]} XP e está no nível ${nivelHeroi}`)
}
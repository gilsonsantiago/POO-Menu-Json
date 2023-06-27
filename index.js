let executando = true

const fs = require('fs')

pessoas = []

verificaArquivo()

while(executando){
 
  console.clear()

  lerArquivo()

  console.log("=========== Menu ===================")
  console.log("1 - Cadastrar                       ")
  console.log("2 - Lista Pessoas                   ")
  console.log("3 - Remover Pessoas                 ")
  console.log("4 - Ordenar Lista - Alfabeticamente ")
  console.log("5 - Sair                            ")
  console.log("===================================+")

  let opcao = Number(prompt("Digite a opção"))

  switch(opcao) {
      
    case 1:
      
      cadastro()
      
      break
    
    case 2:
      
      listar()

      prompt("pressione alguma tecla ....")
      
      break

    case 3:
     
      remover()
      
      break  

    case 3:
      
      this.pessoas = this.pessoas.sort(function(a,b){
           if(a > b) return  1
           if(a < b) retunr -1

           return 0
      })
      
      break    
      
    case 5:
      
      executando = false
      
      break
  }
  
}



//*******************************************
function cadastro(){

      console.log("\nCadastrar Pessoa")
      
      let nome = prompt("Digite o nome da pessoa") 
 
      gravarArquivo(nome)
  
}



//*********************************************
function listar(){
     
      console.log("====================================")
      console.log("\nListagem de Pessoas       ")
      console.log("====================================")
      
      for (let [i, p] of this.pessoas.entries()) {

       if(p != ''){
         
          console.log(i.toString().padStart(2,'0'), p)
         
       }
              
        
      }

      console.log("====================================")
      
}

//****************************************************
function remover(id){

    listar()

    let idPessoa = Number(prompt("Digite o id da pessoa a remover."))  
         
    this.pessoas.splice(idPessoa, 1)
  
    fs.unlinkSync('dados.txt', function (err){
       fs.writeFileSync('dados.txt', "")
    })

    for(let i = 0; i < this.pessoas.length; i++){

       gravarArquivo(this.pessoas[i])
      
    }
  
}

//*******************************************************
function lerArquivo(){

    const input = fs.readFileSync('dados.txt', 'utf8');
  
    const lines = input.split('\n');

    pessoas = []
   
    let linhas = lines.length

    for(let i = 0; i < linhas; i++){

      this.pessoas.push(lines.shift())
       
    }
 
}



//*************************************************
function gravarArquivo(nome){

   if(nome != ''){
    
      fs.appendFileSync('dados.txt', `\n${nome}`)
     
   }
    
}



//*******************************************
function verificaArquivo(){

    if (!fs.existsSync('dados.txt')) {
      
       fs.writeFileSync('dados.txt', '')
      
    }
}
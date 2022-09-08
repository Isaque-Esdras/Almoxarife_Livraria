class Produto{

constructor(){

    this.id = 0
    this.naArray = []
    this.acoes = ''
}

adicionar(){

    var produto = this.lerAdicionar()
    console.log(produto)

    this.seVazio(produto)
    this.adicionarNaArray(produto)
        
    this.naTabela()

    this.remover()

    
}

adicionarNaArray(produto){
    this.naArray.push(produto)
    this.id++
}


lerAdicionar(){

    var produto = {}

    produto.id = this.id
    produto.nomeProduto = document.getElementById('texto').value
    produto.valor = document.getElementById('numero').value
    produto.acoes = this.acoes

    return produto
}

seVazio(produto){

  var mensagem = ''

  if (produto.nomeProduto == 0) {
    mensagem += 'Digite o nome de um Produto \n'
  }
  if (produto.valor == 0) {
    mensagem += 'Digite o valor de um Produto \n'
  }
  if (mensagem != 0) {
    alert(mensagem)
    return false
  }
  return true
}


naTabela(){

    var tbody = document.getElementById('tbody')
    tbody.innerText = ''

    for (let i = 0; i < this.naArray.length; i++) {
         var tr = tbody.insertRow() // insertRow()insere linhas

        var td_id = tr.insertCell()
        var td_nomeProduto = tr.insertCell()
        var td_valor = tr.insertCell()
        var td_acoes = tr.insertCell() // insertCell()insere colunas

        td_id.innerText = this.naArray[i].id // esse método serve para pegar ou identificar a posição posições
        td_nomeProduto.innerText = this.naArray[i].nomeProduto 
        td_valor.innerText = this.naArray[i].valor
        td_acoes.innerText = this.naArray[i].acoes

        var removerComImagem = document.createElement('img')

        removerComImagem.src = './del.png'

        td_acoes.appendChild(removerComImagem)
        
        
        removerComImagem.setAttribute("onclick", "produto.removerComCarrinho("+this.naArray[i].id+")")

        // setAttribute serve para criar atribuição, como o onclick por exemplo e faz com 
        // que a imagem ou etc, que sofreu atribuição, passe a reagiar ao clique.
    }
}

remover(){

    document.getElementById('texto').value = ''
    document.getElementById('numero').value = ''
}

removerComCarrinho(id){
    if (confirm("Deseja mesmo excluir esse ítem ?" + id)) {
        
        var tbody = document.getElementById('tbody')

        for (let i = 0; i < this.naArray.length; i++){
            tbody.deleteRow(i)
            this.naArray.splice(i,1)
        }



    }
}




















}

var produto = new Produto
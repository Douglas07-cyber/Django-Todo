//Função que pergunta ao usuário se ele quer realmente excluir a tarefa.//

document.querySelectorAll(".delete-btn").forEach(
    btn => {
        btn.addEventListener("click", function(e){
            e.preventDefault();

            const delLink = this.getAttribute("href")

            if(delLink && confirm("Quer deletar esta tarefa"))
            {
                window.location.href = delLink;
            }

        });
    }
);

//Função para pesquisar
document.getElementById("search-bt").addEventListener("click",function(){
    document.getElementById("search-form").onsubmit();

});
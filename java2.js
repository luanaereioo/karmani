const btn = document.querySelector("button");
const divMessage = document.querySelector(".alert");

const msg = "✅ Para seguirmos com seu cadastro, são necessários os documentos adicionais abaixo: \n RG ou CNH.\n Não se esqueça de finalizar o cadastro após enviar a documentação 😊";

function ativar(msg)
{
    const message = document.createElement("div");
    message.classList.add("message");
    message.innerText = msg;
    divMessage.appendChild(message);


    setTimeout(()=>{
        message.style.display = "none";
    },10000000);
  
} 

function fechar()
{
    
  divMessage.style.display = "none";
    
}


btn.addEventListener("click",ativar(msg));

function readURL(input)
{
    if (input.files && input.files[0]){
        var reader = new FileReader();

        reader.onload = function(e){
            $('#file_upload')
            .attr('src',e.target.result)
        }; 
        reader.readAsDataURL(input.files[0]);
        
    }
}
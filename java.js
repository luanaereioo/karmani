const btn = document.querySelector("button");
const divMessage = document.querySelector(".alert");
const divlogo1 = document.querySelector(".logo1");



const msg = "️Para realizar seu pedido na Karmani é necessário seguir alguns critérios:\n ✔Pedidos devem ser concluídos através do App Vesti.\n✔Atingir a quantidade mínima de 12 (doze) peças sendo 3 por modelo, entre elas podem variar cores e tamanhos;Obs.Não é possível seguir com pedidos que não atinjam essa quantidade e que não sejam realizados, através da Vesti.\n ✔Após o pedido ser separado e conferido, é possível mantê-lo em reserva até o prazo máximo de 24h (vinte e quatro horas) para a confirmação do pagamento. Não sendo pago até o prazo final determinado, o pedido será cancelado, e os produtos voltarão a ficar disponíveis na área de vendas da loja;\n ✔Realizado o pedido, a loja tem até 24h (vinte e quatro horas) para realizar a separação e conferência das peças;\n Pagamento: \n ✔As formas de pagamento disponíveis são: cartão de crédito, transferência ou depósito bancário ou PIX. Não aceitamos cheques; \n  Envio/Correios: \n ✔O custo do frete de envio deverá ser pago à vista, independente da forma de pagamento escolhida para o restante do pedido;";

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
  divlogo1.style.display ="none;"

    
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


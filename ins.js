var CN = document.getElementById("CNPJ");
var INSC = document.getElementById("Inscrição");
var Email = document.getElementById("Email");
var urll = document.getElementById("urll");
var perfilv = document.getElementById("perfil");
var ref = document.getElementById("ref");
var qr = document.getElementById("QR");
var veri = document.getElementById("Verificado");
var radio1 = document.getElementById("radio1");
let btnTeste = document.getElementById("teste");


const inputC = document.querySelector('#CNPJ');
inputC.addEventListener('keypress', () =>{
    let inputlength = inputC.value.length

    if(inputlength === 2 || inputlength === 6)
    {
        inputC.value += '.'
    }

    if(inputlength === 10)
    {
        inputC.value += '/'

    }

    if(inputlength === 15)
    {
        inputC.value += '-'

    }

})

let tipoL = []

 cnpjj()
{
CN.replace(/^(\d{2})(\d{3})(\d{4})(\d{2})/,"$1.$2.$3/$4-$5");
}

function pegarValores(){
    var tipo = document.querySelectorAll('#radio input')
  
  for(var i = 0; i < tipo.length; i++){
    if(tipo[i].checked){
      tipoL.push(tipo[i].value)
    }
  }

  }




 btnTeste.addEventListener("click",pegarValores)


function ativarI(msgI)
{
    
   alert("Coloque seu usuário do Instagram sem o '@'");
}
function ativarDD(msgDD)
{
    
   alert("⚠️ Após o envio da documentação termine o cadastro !");
}
function prosseguir(msgP)
{
    
   alert(" ⚠️ Não se esqueça de PROSSEGUIR, após envio desse formulário !");
}

function doc(msgD)
{
    
   alert(" ⚠️ Após o envio do documento, preencha sua representação caso tenha !");
}
function parte2()
{
    location.href='PARTE2.HTML'

}

function insta()
{
   var perfilv = document.getElementById("perfil").value;
  
     var url = "https://instagram.com/" + perfilv;
    
     window.open(url, '_blank').focus();
}

function cor()
{
    // document.getElementById("CNPJ").style.color = "red";
}

function whatsapp()
  {
    pegarValores();
         if(CN.value ==""||Email.value ==""||urll.value ==""){
             alert("❗ Preencha os campos obrigatórios!")
         }else{
            var url = "https://wa.me/5511959943705?text="
            
            +"CNPJ :"+CN.value+ "%0a\n %0a\n"
            
             + " " + "INSCRIÇÃO ESTADUAL: "+INSC.value + "%0a\n %0a\n"
                        
             + " "+"EMAIL : "+Email.value+ "%0a\n %0a\n"

            
             + " "+"LOJA : "+tipoL[0]+" "+tipoL[1] +"%0a\n %0a\n"

              + " "+"URL OU NOME DA LOJA FÍSICA : "+urll.value+"%0a\n %0a\n"

             + " "+"PERFIL DO INSTAGRAM :" + " https://www.instagram.com/"+perfilv.value+"%0a\n %0a\n"
             
             + " "+""+veri.value+"%0a\n %0a\n"
           
             + " "+"REPRESENTAÇÃO NO BOM RETIRO : "+qr.value+"%0a\n %0a\n"
            
             + " "+"REFERENCIAS NO BOM RETIRO : "+ref.value+"%0a\n %0a\n"
            
            window.open(url, '_blank').focus();

        }
        
   }
function habi()
    {

    
        var habi = document.getElementById("Verificado");   
        habi.value = "✔️VERIFICADO";

    }




 function verificar()
  {
      if(CN.value ==""|| CANAL.value ==""||Email.value ==""||urll.value ==""||perfil.value ==""){}
  }

 






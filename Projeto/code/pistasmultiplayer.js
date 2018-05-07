const imgFolder = "../resources/images/";
const opacDisabled = 0.3;  //transparência para botões desactivados


(function()
{
	window.addEventListener("load", main);
}());


function main()
{
	var largura = window.innerWidth;
	var altura = window.innerHeight;
	menu(largura,altura);


}

function menu(largura,altura){
	var carro1 = queryString("car");
	var carro2 = queryString("car2");
	var audio = document.getElementById("audio");
	var botaosom = document.getElementById("somimagem");
	var voltar = document.getElementById("voltar");
	var variavel = queryString("audiotime");
	audio.currentTime = variavel;
	audio.volume = 0.2;
	var i=1;
	var img=document.getElementById("photo");
	img.src=imgFolder+"/Pistas/pista"+(i)+".png";
	var nextBtn= document.getElementById("nextBtn");
	var auxaudio=queryString("auxaudio");
	console.log(auxaudio);
	if(auxaudio==0){
		audio.muted = true;
		botaosom.src="../resources/images/SomOff.png";
	}
	else{
		audio.muted = false;
		botaosom.src="../resources/images/SomOn.png";
	}
	var nbeh = function(ev)
	{
		i=nextBtuHandler(ev,i,img);
	}
	nextBtn.addEventListener("click",nbeh);
	var backBtn= document.getElementById("backBtn");
	var bbeh = function(ev)
	{
		i=backBtuHandler(ev,i,img);
	}
	backBtn.addEventListener("click",bbeh);
	var confirmBtn=document.getElementById("confirmBtn");
	var cbeh = function(ev)
	{
		i=confirmBtuHandler(ev,i,img);
		window.location = ("jogomultiplayer.html?auxaudio="+auxaudio+"?car1="+carro1+"?car2="+carro2+"?pista="+i);
	}
	confirmBtn.addEventListener("click",cbeh);
	//var comecar = document.getElementById("comecar");
	var evt = function(ev){
		this.style.backgroundPosition = "right";
		var sombotao = document.getElementById("sombotao");
		if(auxaudio==0)
			sombotao.muted=true;
		else
			sombotao.muted=false;
		sombotao.play();
		sombotao.volume = 0.2;
		sombotao.addEventListener('ended', function(){ window.location = ("carroplayer2.html?audiotime="+audio.currentTime+"?auxaudio="+auxaudio);});
	}
	voltar.addEventListener("click",evt);
	var cliquesom = function(evt){
		if(auxaudio===1){
			audio.muted = true;
			botaosom.src= imgFolder + "SomOff.png";
			auxaudio=0;
		}
		else{
			audio.muted = false;
			auxaudio=1;
			botaosom.src= imgFolder + "SomOn.png";
		}
	}
	botaosom.addEventListener("click",cliquesom);
}

function queryString(parameter) {  
    var loc = location.search.substring(1, location.search.length);   
    var param_value = false;   
	var params = loc.split("?");   
	for (i=0; i<params.length;i++) {   
        param_name = params[i].substring(0,params[i].indexOf('='));   
		if (param_name == parameter) {                                          
			param_value = params[i].substring(params[i].indexOf('=')+1)   
		}   
	}   
	if (param_value) {   
		return param_value;   
	}   
	else {   
		return false;   
	} 

}

function nextBtuHandler(ev,i,img){
	if(i==6){
		i=0;
	}
	i++;
	img.src=imgFolder+"/Pistas/pista"+(i)+".png";
	return i;
}


function backBtuHandler(ev,i,img){
	if(i==1){
		i=7;
	}
	i--;
	img.src=imgFolder+"/Pistas/pista"+(i)+".png";
	return i;
}

function confirmBtuHandler(ev,i,img){
	img.src=imgFolder+"/Pistas/pista"+(i)+".png";
	return i;
}


alert ("Bienvenido a Ticketek")

let numeroVeces = 0;
let password = prompt ("Ingrese su nueva contraseña");

let passwordConfirm = prompt ("Confirme su nueva contraseña");

while(passwordConfirm != password){

	alert ("Las contraseñas no coinciden");

	numeroVeces++;

if(numeroVeces === 3){

	password = passwordConfirm

}
	passwordConfirm = prompt("Confirme su nueva contraseña");


}

if(numeroVeces === 3){
	alert("Usuario bloqueado")
}else{
	alert("Usted a confirmado su contraseña");
}
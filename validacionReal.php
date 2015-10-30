<?php
header('Content-Type: text/javascript; charset=UTF-8'); 
$resultados = array();

$conexion = mysqli_connect("localhost", "root", "", "basehermes");
mysqli_query($conexion, "SET NAMES 'UTF8'");




/* Extrae los valores enviados desde la aplicacion movil */
$usuarioEnviado = $_GET['usuario'];
$passwordEnviado = $_GET['password'];

/* revisar existencia del usuario con la contraseña en la bd */
$sqlCmd = "SELECT nombreUsuario, claveUsuario, idUsuario
FROM usuarios
WHERE nombreUsuario
LIKE '".mysqli_real_escape_string($conexion,$usuarioEnviado)."' 
AND claveUsuario ='".mysqli_real_escape_string($conexion,$passwordEnviado)."'
LIMIT 1";

//aca debugueo la consulta y veo si esta ok
//echo $sqlCmd;

$sqlQry = mysqli_query($conexion,$sqlCmd);

if(mysqli_num_rows($sqlQry)>0){

	$login=1;

   //echo "hola";

	$fila = mysqli_fetch_array($sqlQry); //hago esto para poder extraer el id usuario que peciso.
    
	$idUsuario =  $fila["idUsuario"];
    $nombreUsuario = $fila["nombreUsuario"];

	//nueva consulta para listar proyectos en base al id del usuario que se registro.


    
//	 echo json_encode($fila);
//   echo $resultados[0]["idUsuario"];
//	 echo $nombreUsuario;
	

}else{

	$login=0;


}




$resultados["validacion"] = "neutro";



if( $login==1 ){



$resultados["validacion"] = "ok";


}else{


$resultados["validacion"] = "error";
}


$resultadosJson = json_encode($resultados);

/*muestra el resultado en un formato que no da problemas de seguridad en browsers */
echo $_GET['jsoncallback'] . '(' . $resultadosJson . ');';

?>
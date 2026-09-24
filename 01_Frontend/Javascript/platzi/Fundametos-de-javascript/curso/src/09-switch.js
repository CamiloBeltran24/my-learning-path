//Switch
const dia = "sabado";
switch (dia) {
  case "lunes":
    console.log("es lunes");
    break;
  case "martes":
    console.log("es martes");
    break;
  case "miercoles":
    console.log("es lunes");
    break;
  case "jueves":
    console.log("es martes");
    break;
  case "viernes":
    console.log("es lunes");
    break;
  case "sabado":
  case "domingo":
    console.log("Fin de semana");
    break;
  default:
    console.log("Dia no valido");
}

function diff_hours(dt2, dt1) {
    var diff = new Date(dt2.getTime() - dt1.getTime());
    return Math.abs(diff);
  }
  function separe_minutes(minutes) {
  
    var minutes_to_hour = minutes / 60;
  
    var minutesrest = (minutes_to_hour - Math.floor(minutes_to_hour)) * 60;
 
    return { horas: Math.floor(minutes_to_hour), minutos: Math.round(minutesrest) };
  }
  function calcPreco(tarifa, horas, minutos) {
    var preco = tarifa
    if(minutos > 15 && minutos <= 30){
   preco = tarifa * 2
   }
   else if(minutos> 30 && minutos <= 45){
   preco = tarifa * 3
   }
   else if(minutos > 45 && minutos <= 60){
   preco = tarifa * 4
   }
   preco += tarifa * 4 * horas
  return  parseFloat(preco)
  }
function InitCalc(tarifa,entrada,saida){
  var dateentrada = new Date(entrada); 
  var datesaida = new Date(saida);
  var diff = diff_hours(dateentrada, datesaida) / 1000 / 60;
  var teste = separe_minutes(diff); 
   console.log(teste.horas,teste.minutos)

return calcPreco(
  tarifa,
  teste.horas,
  teste.minutos)
}

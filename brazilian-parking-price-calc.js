function diff_hours(dt2, dt1) 
 {
  var diff = new Date(dt2.getTime() - dt1.getTime()); 
  return Math.abs(diff);
 }
function separe_minutes(minutes){
var minutes_to_hour = minutes / 60
var minutesrest =  (minutes_to_hour - Math.floor(minutes_to_hour))*60
return { horas: Math.floor(minutes_to_hour), minutos: minutesrest }
}
function calcPreco(tarifa,horas,minutos){
var preco = 0.00
if(minutos > 0){
if(minutos < 15){
preco = tarifa 
}else if(minutos < 30){
preco = tarifa * 2
}
else if(minutos < 45 ){
preco = tarifa * 3
}
else if(minutos < 60 ){
preco = tarifa * 4
}
}
preco += (tarifa*4) * horas
return preco
}
function initCalc() {
var dateentrada = new Date('2021-03-10T21:00:00')
var datesaida = new Date('2021-03-10T22:00:00')
var diff = diff_hours(dateentrada,datesaida) / 1000 /60
var teste = separe_minutes(diff)
console.log(teste.horas,teste.minutos)
console.log(calcPreco(3.00,teste.horas,teste.minutos))
}


initCalc()

//---------------- 1

// let a=2,b=5,c=1

// // A)

// console.log(3*a-4*b/a**2)

// //B)

// console.log((((b+c)/2*a+10)*3*b)-6)


//---------------- 2

// let capital,porcentaje=1.2,total=0

// capital=parseInt(prompt('Ingrese cantidad de capital a invertir: '))

// total=capital+((porcentaje/100)*capital)

// console.log(`Capital Inicial:${capital}\nCapital Final de Mes: ${total}`)


// //----------------- 3

// let base,altura,area=0

// base=parseFloat(prompt('Ingrese base del triángulo: '))
// altura=parseFloat(prompt('Ingrese altura del triángulo: '))

// area=base*altura/2

// console.log('El área del triángulo es de',area)


//-------------------- 4

// let salario=980000, comision=170000, valorVenta=5, autosvendidos=0, totalmMonto=0

// autosvendidos=parseInt(prompt('Ingrese cantidad de autos vendidos: '))
// totalmMonto=parseFloat(prompt('Ingrese monto total de ventas: '))

// comision=comision*autosvendidos
// valorVenta=comision+((valorVenta/100)*comision)
// salario=salario+valorVenta

// console.log('El salario mensual es de',salario)

//---------------------- 5

let nota1,nota2,nota3,nota4,prom=0

nota1=parseFloat(prompt('Ingrese Nota 1: '))
nota2=parseFloat(prompt('Ingrese Nota 2: '))
nota3=parseFloat(prompt('Ingrese Nota 3: '))
nota4=parseFloat(prompt('Ingrese Nota 4: '))

prom=(nota1+nota2+nota3+nota4/4)
console.log('El promedio es de',prom)

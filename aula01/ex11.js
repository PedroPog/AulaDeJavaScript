var agora = new Date()
var diaSem = agora.getDay()

switch(diaSem){
    case 0:
        console.log(agora)
        console.log('Domingo')
        break
    case 1:
        console.log(agora)
        console.log('Segunda')
        break
    case 2:
        console.log(agora)
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log(agora)
        console.log('Quinta')
        break
    case 5:
        console.log(agora)
        console.log('Sexta')
        break
    case 6:    
        console.log(agora)
        console.log('Sabado')
        break
}
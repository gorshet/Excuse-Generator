window.onload=()=>{
let who=['The aliens','A dinasour','My mom','The FBI','The cat','A racoon','A priest','The president']
let verb=['ate','destroyed','broke','crushed','pissed','scratched','stole','hid']
let thing=['my car','my wallet','my hat','my phone','my ID','my shirt']
let when=['before the class','right now','during my lunch','while i was praying','yesterday','5 minutes ago']

let whoRand = who[Math.floor(Math.random() * who.length)]
let verbRand = verb[Math.floor(Math.random() * verb.length)]
let thingRand = thing[Math.floor(Math.random() * thing.length)]
let whenRand = when[Math.floor(Math.random() * when.length)]
document.querySelector('#excuse').innerHTML = whoRand + " "+ verbRand + " "+ thingRand + " "+ whenRand
console.log(whoRand + " "+ verbRand + " "+ thingRand + " "+ whenRand)
}

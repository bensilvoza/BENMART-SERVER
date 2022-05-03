
function greet(){
   let greetingA = "Hello"
    let greetingB = "Hi"
    let greetingC = "Awesome"

    let greetingsStorage =  [greetingA, greetingB, greetingC]
    let chooseGreeting = greetingsStorage[Math.floor(Math.random() * 2)]
 console.log(chooseGreeting)
    return chooseGreeting
}

greet()

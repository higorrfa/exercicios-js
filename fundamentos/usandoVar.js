

{
    {
        {
            { 
                var test = 1 
                console.log(test)
                test = 2
            }
        }
    }
}

console.log(test)

// var ignora a definição de escopo e tem o valor global

var b = 2 

{
    var b = 3
    console.log(b)
}

console.log(b)
class hero{
    constructor(name, age, type, attack){
        this.name = name
        this.age = age
        this.type = type
        this.attack = attack

        if(this.type === "mago"){
            this.attack = "magia"
        }else if(this.type === "guerreiro"){
            this.attack = "espada"
        }else if(this.type === "monge"){
            this.attack = "artes marciais"
        }else if(this.type === "ninja"){
            this.attack = "shuriken"
        }else{
            this.attack = "ataque básico"
        }
    }
    print(){
        console.log(`o ${this.type} atacou usando ${this.attack}`)
    }

}

let heroMago = new hero("Gandalf", 65, "mago", this.attack)
let heroGuerreiro = new hero("Arthur", 37, "guerreiro", this.attack)
let heroMonge = new hero("Budda", 105, "monge", this.attack)
let heroNinja = new hero("Naruto", 19, "ninja", this.attack)
let heroBardo = new hero("Louis", 45, "bardo", this.attack)

heroMago.print()
console.log("-")
heroGuerreiro.print()
console.log("-")
heroMonge.print()
console.log("-")
heroNinja.print()
console.log("-")
heroBardo.print()
console.log("-")
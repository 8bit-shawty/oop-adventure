roll(mod = 0){
        const result = Math.floor(Math.random() * 20) + 1 + mod
        console.log(`${this.name} rolled a ${result}.`)
    }
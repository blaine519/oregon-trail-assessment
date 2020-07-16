class Traveler {

    constructor(name, food) {
        this.name = name
        this.food = 1
        this.isHealthy = true
    }

    hunt() {
        this.food += 2
    }

    eat() {
        if (this.food <= 0) {
            return this.isHealthy = false
        } else {
            this.food -= 1
        }
    }

}

class Wagon {

    constructor(capacity) {
        this.passengers = []
        this.capacity = capacity
    }

    getAvailableSeatCount() {
        return this.capacity - this.passengers.length
    }

    join(traveler) {
        if (this.getAvailableSeatCount() > 0) {
            this.passengers.push(traveler)
        }
    }

    shouldQuarantine() {
        for (let index = 0; index < this.passengers.length; index += 1) {
            if (this.passengers[index].isHealthy === false) {
                return true
            }
        }
    }

    totalFood() {
        let totalAmount = 0
        for (let index = 0; index < this.passengers.length; index += 1) {
            totalAmount += this.passengers[index].food
        }
        return totalAmount
    }

}
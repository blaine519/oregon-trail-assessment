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
        return (this.passengers.some(traveler => traveler.isHealthy === false))
    }

    totalFood() {
        let totalAmount = 0
        for (let index = 0; index < this.passengers.length; index += 1) {
            totalAmount += this.passengers[index].food
        }
        return totalAmount
    }

}
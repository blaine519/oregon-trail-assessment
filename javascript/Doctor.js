class Doctor extends Traveler {

    constructor(name, food) {
        super(name, food)
        this.isHealthy = true

    }

    heal(traveler) {
        return traveler.isHealthy = true
    }

}
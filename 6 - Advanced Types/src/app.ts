class Car1 {
    drive() {
        console.log('Car1 is going...');
    }
}

class Car2 {
    drive() {
        console.log('Car2 is going...');
    }

    getPrice(price: number) {
        console.log('该车辆价格为', price);

    }
}

type Vehicle = Car1 | Car2
const v1 = new Car1()
const v2 = new Car2()

function useVehicle(car: Vehicle) {

    car.drive()
    if (car instanceof Car2) {
        car.getPrice(100)
    }
}

useVehicle(v1)
useVehicle(v2)


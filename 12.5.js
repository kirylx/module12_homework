// Parent class
class Tesla {
    constructor(model, acceleration, range) {
        this.manufacturer = "Tesla, Inc.";
        this.model = model;
        this.acceleration = acceleration;
        this.range = range;
    }
}

// Create instsances of parent class

const modelS = new Tesla("ModelS", 2.3, 650);
const model3 = new Tesla("Model3", 3.1, 570);

modelS.topSpeed = 260;
model3.isDualMotor = true;

console.log(" modelS :", modelS);
console.log(" model3 :", model3);

// Child class
class TeslaWithCharger extends Tesla {
    constructor(currentBatteryStatus, model, acceleration, range) {
        super(model, acceleration, range);
        this.currentBatteryStatus = currentBatteryStatus;
    }

    charger = () => {
        let minutesUntilFullyCharged = (100 - this.currentBatteryStatus) * 5; // 1% requires 5 minutes of charging
        let intervalId = setInterval(() => {
            console.log(`${minutesUntilFullyCharged} minutes remaining`);
            minutesUntilFullyCharged -= 30;
            if (minutesUntilFullyCharged <= 0) {
                clearInterval(intervalId);
                this.disconnectFromCharging();
            }
        }, 1000);
        return true;
    };

    disconnectFromCharging() {
        console.log("Charger is unplugged");
    }
}

// Create instances of child class and run charger

const model3withCharger = new TeslaWithCharger(70, "Model3", 3.1, 570);
console.log(" model3withCarger :", model3withCharger);
model3withCharger.charger();

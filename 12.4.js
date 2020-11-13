// TODO : Определить иерархию автомобилей: Tesla -> [Model S, Model 3]

function Tesla(model, acceleration, range) {
    this.manufacturer = "Tesla, Inc.";
    this.model = model;
    this.acceleration = acceleration;
    this.range = range;
}

// TODO : Определить родительскую функцию, которая включает / отключает зарядку;

Tesla.prototype.charge = function (currentStatus) {
    minutesUntilFullyCharged = (100 - currentStatus) * 5; // 1% requires 5 minutes of charging
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

Tesla.prototype.disconnectFromCharging = function () {
    console.log("Charger is unplugged");
};

// TODO : Создать делегирующую связь [[Prototype]] для двух автомобилей;

function UsedTesla(model, previousOwner) {
    this.model = model;
    this.previousOwner = previousOwner;
}
UsedTesla.prototype = new Tesla();

// TODO : Создать экземпляры каждого автомобиля;

const modelS = new Tesla("ModelS", 2.3, 650);
const model3 = new Tesla("Model3", 3.1, 570);
const model3Used = new UsedTesla("model3", "Elon Mask");

modelS.topSpeed = 260;
model3.isDualMotor = true;

// TODO : Вывести в консоль и посмотреть результаты работы, гордиться собой

console.log(" modelS :", modelS);

console.log(" model3 :", model3);

console.log(
    "model3 used :",
    model3Used,
    "manufacturer :",
    model3Used.manufacturer // inherited from Tesla function constructor
);

console.log("Start the charging process : ", modelS.charge(70));

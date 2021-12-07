let lumière = 0
servos.P0.setRange(10, 170)
basic.forever(function () {
    lumière = pins.analogReadPin(AnalogPin.P0)
    servos.P1.setAngle(lumière)
})

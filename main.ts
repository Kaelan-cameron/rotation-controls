input.onButtonPressed(Button.A, function () {
    speed += 1
    basic.showNumber(speed)
})
input.onButtonPressed(Button.AB, function () {
    speed = 0
    basic.showIcon(IconNames.No)
})
input.onButtonPressed(Button.B, function () {
    speed += -1
    basic.showNumber(speed)
})
let speed = 0
radio.setGroup(1)
speed = 1
let Speed_right = 0
let Speed_left = 0
basic.forever(function () {
    if (input.rotation(Rotation.Roll) < -60) {
        Speed_left = -50
        Speed_right = 50
    } else if (input.rotation(Rotation.Roll) > 60) {
        Speed_left = 50
        Speed_right = -50
    } else if (input.rotation(Rotation.Roll) >= -10 && input.rotation(Rotation.Roll) <= 10) {
        Speed_left = 100
        Speed_right = 100
    } else {
    	
    }
    radio.sendValue("left", Speed_left * speed)
    radio.sendValue("right", Speed_right * speed)
})

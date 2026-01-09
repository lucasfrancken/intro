basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.showLeds(`
            . . . . .
            # # # # #
            . . . . .
            # # # # #
            . . . . .
            `)
        basic.pause(200)
        basic.showLeds(`
            # # # # #
            . . . . .
            # # # # #
            . . . . .
            # # # # #
            `)
    } else if (input.buttonIsPressed(Button.B)) {
        basic.showLeds(`
            # . # . #
            # . # . #
            # . # . #
            # . # . #
            # . # . #
            `)
        basic.pause(200)
        basic.showLeds(`
            . # . # .
            . # . # .
            . # . # .
            . # . # .
            . # . # .
            `)
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})

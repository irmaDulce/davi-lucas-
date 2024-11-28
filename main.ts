input.calibrateCompass()
music.changeTempoBy(68)
basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    # . . . #
    # # # # #
    `)
for (let index = 0; index < 1; index++) {
    basic.showIcon(IconNames.LeftTriangle)
    basic.pause(5000)
}

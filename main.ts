for (let index = 0; index < 90000; index++) {
    basic.showLeds(`
        . # # # .
        . # . # .
        . # # # .
        . # . . .
        . . . . .
        `)
    basic.showLeds(`
        . # # # #
        . # . . #
        . # # # #
        . # . . #
        . # . . #
        `)
    basic.showLeds(`
        . # # # .
        . # . . .
        . # # # .
        . . . # .
        . # # # .
        `)
    basic.showLeds(`
        # # # # #
        # . . . .
        # . . . .
        # . . . .
        # # # # #
        `)
    basic.showLeds(`
        . # # # #
        . # . . #
        . # # # #
        . # . . #
        . # . . #
        `)
    basic.showLeds(`
        # . . . .
        # . . . .
        # . . . .
        . . . . .
        # # # # #
        `)
    basic.showIcon(IconNames.Heart)
    music.setVolume(41)
    music.play(music.stringPlayable("E B C5 A B G A F ", 120), music.PlaybackMode.UntilDone)
}
basic.forever(function () {
	
})

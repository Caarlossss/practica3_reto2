input.onButtonPressed(Button.A, function () {
    if (input.lightLevel() > 175) {
        basic.showIcon(IconNames.Sad)
        music.playTone(988, music.beat(BeatFraction.Half))
        basic.clearScreen()
        basic.pause(500)
    }
})

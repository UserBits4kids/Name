input.onButtonPressed(Button.A, function () {
    basic.showString("Hallo " + Namen)
    basic.showString("Lass uns starten!")
    basic.showIcon(IconNames.Happy)
})
let Namen = ""
basic.pause(1000)
basic.showString("Mein Name ist Koala")
basic.pause(1000)
basic.showString("Wie heisst du?")
basic.forever(function () {
    Namen = "Dein Name"
})

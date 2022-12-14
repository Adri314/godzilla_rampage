controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (gameOn) {
        if (posIndex > 0) {
            posIndex += -1
            godzilla.setPosition(20, yPositions[posIndex])
        }
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (gameOn) {
        game.showLongText("Escaped cars:" + escapedCars, DialogLayout.Center)
    } else {
        gameOn = true
        initGame()
    }
})
info.onCountdownEnd(function () {
    game.over(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    if (sprite.x < otherSprite.x) {
        music.knock.play()
        otherSprite.setVelocity(-50, 0)
        animation.runImageAnimation(
        otherSprite,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 4 4 . . . . . . . 
            . . . . . . 4 5 5 4 . . . . . . 
            . . . . . . 2 5 5 2 . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . 4 . . . . . 
            . . . . 2 . . . . 4 4 . . . . . 
            . . . . 2 4 . . 4 5 4 . . . . . 
            . . . . . 2 4 d 5 5 4 . . . . . 
            . . . . . 2 5 5 5 5 4 . . . . . 
            . . . . . . 2 5 5 5 5 4 . . . . 
            . . . . . . 2 5 4 2 4 4 . . . . 
            . . . . . . 4 4 . . 2 4 4 . . . 
            . . . . . 4 4 . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . 3 . . . . . . . . . . . 4 . . 
            . 3 3 . . . . . . . . . 4 4 . . 
            . 3 d 3 . . 4 4 . . 4 4 d 4 . . 
            . . 3 5 3 4 5 5 4 4 d d 4 4 . . 
            . . 3 d 5 d 1 1 d 5 5 d 4 4 . . 
            . . 4 5 5 1 1 1 1 5 1 1 5 4 . . 
            . 4 5 5 5 5 1 1 5 1 1 1 d 4 4 . 
            . 4 d 5 1 1 5 5 5 1 1 1 5 5 4 . 
            . 4 4 5 1 1 5 5 5 5 5 d 5 5 4 . 
            . . 4 3 d 5 5 5 d 5 5 d d d 4 . 
            . 4 5 5 d 5 5 5 d d d 5 5 4 . . 
            . 4 5 5 d 3 5 d d 3 d 5 5 4 . . 
            . 4 4 d d 4 d d d 4 3 d d 4 . . 
            . . 4 5 4 4 4 4 4 4 4 4 4 . . . 
            . 4 5 4 . . 4 4 4 . . . 4 4 . . 
            . 4 4 . . . . . . . . . . 4 4 . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . b b . b b b . . . . . 
            . . . . b 1 1 b 1 1 1 b . . . . 
            . . b b 3 1 1 d d 1 d d b b . . 
            . b 1 1 d d b b b b b 1 1 b . . 
            . b 1 1 1 b . . . . . b d d b . 
            . . 3 d d b . . . . . b d 1 1 b 
            . b 1 d 3 . . . . . . . b 1 1 b 
            . b 1 1 b . . . . . . b b 1 d b 
            . b 1 d b . . . . . . b d 3 d b 
            . b b d d b . . . . b d d d b . 
            . b d d d d b . b b 3 d d 3 b . 
            . . b d d 3 3 b d 3 3 b b b . . 
            . . . b b b d d d d d b . . . . 
            . . . . . . b b b b b . . . . . 
            `],
        100,
        false
        )
        pause(400)
        otherSprite.destroy()
    }
})
function initGame () {
    scroller.scrollBackgroundWithSpeed(-50, 0)
    godzilla = sprites.create(img`
        ........................
        ........................
        ...........cc...........
        ...........cccc.........
        .......cc...ccccccc.....
        .......cccccc555555cc...
        ........ccb5555555555c..
        .....cc..b555555555555c.
        .....cccb555555ff155555c
        .....ccb55555555ff55d55c
        ......b5555555555555555c
        ...c..b555d55555bb13bbc.
        ...cccd55ddddd55bb3335c.
        ....cbdddddddddd55b335c.
        ..cccdddddb55bdddd5555c.
        ..cccdddddb555bbbbcccc..
        ...ccddddddb5555cbcdc...
        ccccbdddddddcb55cbcc....
        cddddddddd55dbccbbc.....
        cbdddddddd555dbbbcc.....
        .ccbdddbbdd555bbcdbcc...
        ...cccbbbbdd55ccdddbc...
        ......cccbdddbccccccc...
        ........cdd555dc........
        `, SpriteKind.Player)
    animation.runImageAnimation(
    godzilla,
    [img`
        ........................
        ........................
        ...........cc...........
        ...........cccc.........
        .......cc...ccccccc.....
        .......cccccc555555cc...
        ........ccb5555555555c..
        .....cc..b555555555555c.
        .....cccb555555ff155555c
        .....ccb55555555ff55d55c
        ......b5555555555555555c
        ...c..b555d55555bb13bbc.
        ...cccd55ddddd55bb3335c.
        ....cbdddddddddd55b335c.
        ..cccdddddb55bdddd5555c.
        ..cccdddddb555bbbbcccc..
        ...ccddddddb5555cbcdc...
        ccccbdddddddcb55cbcc....
        cddddddddd55dbccbbc.....
        cbdddddddd555dbbbcc.....
        .ccbdddbbdd555bbcdbcc...
        ...cccbbbbdd55ccdddbc...
        ......cccbdddbccccccc...
        ........cdd555dc........
        `,img`
        ........................
        ........................
        ...........ccc..........
        ...........cccc.........
        .......ccc..ccccccc.....
        .......cccccc555555cc...
        ........ccb5555555555c..
        .....cc..b555555555555c.
        .....cccb555555ff155555c
        ......cb55555555ff55d55c
        ......b5555555555555555c
        ...cc.b555dd5555bb13bbc.
        ...cccd55ddddd555b3335c.
        .....bdddddddddd55b335c.
        ..cccdddddb55bbddd5555c.
        ..cccdddddb555bbbbcccc..
        ...ccddddddb5555cbcdc...
        ccccbdddddd5cb55cbcc....
        cddddddddd5555ccbbc.....
        .cddddddbdd555bbbcc.....
        ..ccdddbbbdd55cbcdc.....
        ....ccbbcbddddccdddcc...
        ......cccdd555dcccccc...
        ........cccccccc........
        `,img`
        ........................
        ............cc..........
        ............ccc.........
        ........ccc.ccccccc.....
        ........ccccc555555cc...
        ........ccb5555555555c..
        .....ccc.b55555ff15555c.
        .....cccb5555555ff55555c
        ......cb555555555555d55c
        ....c.b555555555bb55555c
        ....ccb555ddd5555b13bbc.
        ....ccd55ddddd555b3335c.
        .....cdd5ddddddd55b335c.
        ...c.bddddb555bbbd555c..
        ...ccdddddbb55555bccc...
        ...ccdddddddcc555bcc....
        ...ccddddddddbcccbcccc..
        .ccbddddddd55dbbbbc55c..
        ccddddddddd555dbbcc5c...
        cddddddbbbdd555bbccc....
        .ccddddbbbbdd55bcc......
        ...cccbbbbbdddbcddcc....
        .....cccccdd555dcccc....
        ..........cccccc........
        `,img`
        ........................
        ............cc..........
        ............ccc.........
        ........ccc.ccccccc.....
        ........ccccc555555cc...
        ........ccb5555555555c..
        .....ccc.b55555ff15555c.
        .....cccb5555555ff55555c
        ......cb555555555555d55c
        ....c.b555555555bb55555c
        ....ccb555ddd5555b13bbc.
        ....ccd55ddddd555b3335c.
        .....cdd5ddddddd55b335c.
        ...c.bddddb555bbbd555c..
        ...ccdddddbb55555bccc...
        ...ccdddddddcc555bcc....
        .ccccdddddddddcccbcccc..
        .cdcdddddddd55dbbbc55c..
        .cdddddddddd555dccc5c...
        .cbddddbbbbdd5d555cc....
        ..cbdddbbbbbdd5555......
        ...cccbbbbbbd5555c......
        .....cccccccc555c.......
        .............ccc........
        `,img`
        ........................
        ............cc..........
        ............ccc.........
        ........ccc.ccccccc.....
        ........ccccc555555cc...
        ........ccb5555555555c..
        .....ccc.b55555ff15555c.
        .....cccb5555555ff55555c
        ......cb555555555555d55c
        ....c.b555555555bb55555c
        ....ccb555ddd5555b13bbc.
        ....ccd55ddddd555b3335c.
        .....cdd5ddddddd55b335c.
        ...c.bddddb555bbbd555c..
        ...ccdddddb555555bccc...
        ..cccddddddcc5555bcc....
        .cdccddddddddbcccbcccc..
        .cddbdddddddddbbbbc55c..
        .cdddddddddd55dbbbc5c...
        .cbddddbbbbd55ddbccc....
        ..cbdddbbbbd555dccc.....
        ...cccbbbbbbddd555c.....
        .....ccccccbd55555c.....
        ...........cc5555c......
        `,img`
        ........................
        ............cc..........
        ............ccc.........
        ........cc..ccccccc.....
        ........ccccc555555cc...
        ........ccb5555555555c..
        .....cc..b555555555555c.
        .....cccb555555ff155555c
        ......cb55555555ff55d55c
        ......b5555555555555555c
        ...cc.b555dd5555bb13bbc.
        ...cccd55ddddd555b3335c.
        ....ccdd5ddddddd55b335c.
        .....bddddb55bdddd5555c.
        ..cccdddddb55bbbbbcccc..
        .ccccddddddb5555cbcccc..
        .cdccdddddddc555cbc55c..
        .cdddddddddddcccbbc5c...
        .cbddddddd55dbbbbccc....
        .ccbdddddd555dbbbcbc....
        ..cccddbbbd555bbccc.....
        ....ccbbbbbd555cc.......
        ......ccccbddddbc.......
        ..........cd5555dc......
        `],
    100,
    true
    )
    yPositions = [
    31,
    56,
    84,
    107
    ]
    posIndex = 1
    godzilla.setPosition(20, yPositions[posIndex])
    carAnim = [[img`
        . . . . . . . 8 8 8 8 8 . . . . 
        . . . . . 8 8 6 6 6 6 6 8 . . . 
        . . . . 8 8 6 6 6 6 6 6 6 8 . . 
        . . . . 8 9 7 6 6 6 6 6 7 b 8 . 
        . . 8 8 9 9 7 7 6 6 6 6 7 9 b 8 
        . 8 6 6 9 9 7 7 7 6 6 6 7 9 9 8 
        8 6 6 6 9 9 6 7 7 7 7 7 6 9 9 8 
        8 6 6 6 9 9 8 8 8 8 8 8 8 9 9 8 
        8 6 6 6 9 b 8 b b b 8 b 8 b 9 8 
        8 6 8 8 8 8 b b b b 8 b b 8 b 8 
        8 8 3 3 8 8 6 6 6 6 8 6 6 8 8 8 
        8 3 3 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 f f f 8 8 8 8 f f f 8 8 
        . 8 8 f b c c f 8 8 f b c c f . 
        . . . . b b f . . . . b b f . . 
        `,img`
        . . . . . . . 8 8 8 8 8 . . . . 
        . . . . . 8 8 6 6 6 6 6 8 . . . 
        . . . . 8 8 6 6 6 6 6 6 6 8 . . 
        . . . . 8 9 7 7 7 6 6 6 7 b 8 . 
        . . 8 8 9 9 7 7 7 7 6 6 7 9 b 8 
        . 8 6 6 9 9 7 7 7 7 7 6 7 9 9 8 
        8 6 6 6 9 9 6 7 7 7 7 7 6 9 9 8 
        8 6 6 6 9 9 8 8 8 8 8 8 8 9 9 8 
        8 6 6 6 9 b 8 b b b 8 b 8 b 9 8 
        8 6 8 8 8 8 b b b b 8 b b 8 b 8 
        8 8 3 3 8 8 6 6 6 6 8 6 6 8 8 8 
        8 3 3 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 f f f 8 8 8 8 f f f 8 8 
        . 8 8 f f f b f 8 8 f f f b f . 
        . . . . c b b . . . . c b b . . 
        `,img`
        . . . . . . . 8 8 8 8 8 . . . . 
        . . . . . 8 8 6 6 6 6 6 8 . . . 
        . . . . 8 8 6 6 6 6 6 6 6 8 . . 
        . . . . 8 9 7 6 6 6 7 7 7 b 8 . 
        . . 8 8 9 9 7 6 6 6 7 7 7 9 b 8 
        . 8 6 6 9 9 7 7 6 6 6 7 7 9 9 8 
        8 6 6 6 9 9 6 7 7 7 7 7 6 9 9 8 
        8 6 6 6 9 9 8 8 8 8 8 8 8 9 9 8 
        8 6 6 6 9 b 8 b b b 8 b 8 b 9 8 
        8 6 8 8 8 8 b b b b 8 b b 8 b 8 
        8 8 3 3 8 8 6 6 6 6 8 6 6 8 8 8 
        8 3 3 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 f f f 8 8 8 8 f f f 8 8 
        . 8 8 f c b b f 8 8 f c b b f . 
        . . . . f f f . . . . f f f . . 
        `,img`
        . . . . . . . 8 8 8 8 8 . . . . 
        . . . . . 8 8 6 6 6 6 6 8 . . . 
        . . . . 8 8 6 6 6 6 6 6 6 8 . . 
        . . . . 8 9 7 6 6 6 6 6 7 b 8 . 
        . . 8 8 9 9 7 6 6 6 6 6 7 9 b 8 
        . 8 6 6 9 9 7 7 6 6 6 6 7 9 9 8 
        8 6 6 6 9 9 6 7 7 7 7 7 6 9 9 8 
        8 6 6 6 9 9 8 8 8 8 8 8 8 9 9 8 
        8 6 6 6 9 b 8 b b b 8 b 8 b 9 8 
        8 6 8 8 8 8 b b b b 8 b b 8 b 8 
        8 8 3 3 8 8 6 6 6 6 8 6 6 8 8 8 
        8 3 3 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 f f f 8 8 8 8 f f f 8 8 
        . 8 8 f b b c f 8 8 f b b c f . 
        . . . . c f f . . . . c f f . . 
        `], [img`
        . . . . . . . e e e e e . . . . 
        . . . . . e e 2 2 2 2 2 e . . . 
        . . . . e e 2 2 2 2 2 2 2 e . . 
        . . . . e 9 4 2 2 2 2 2 4 b e . 
        . . e e 9 9 4 4 2 2 2 2 4 9 b e 
        . e 2 2 9 9 4 4 4 2 2 2 4 9 9 e 
        e 2 2 2 9 9 2 4 4 4 4 4 2 9 9 e 
        e 2 2 2 9 9 e e e e e e e 9 9 e 
        e 2 2 2 9 b e b b b e b e b 9 e 
        e 2 e e e e b b b b e b b e b e 
        e e 3 3 e e 2 2 2 2 e 2 2 e e e 
        e 3 3 e e e e e e e e e e e e e 
        e e e e e e e e e e e e e e e e 
        e e e e f f f e e e e f f f e e 
        . e e f b c c f e e f b c c f . 
        . . . . b b f . . . . b b f . . 
        `,img`
        . . . . . . . e e e e e . . . . 
        . . . . . e e 2 2 2 2 2 e . . . 
        . . . . e e 2 2 2 2 2 2 2 e . . 
        . . . . e 9 4 4 4 2 2 2 4 b e . 
        . . e e 9 9 4 4 4 4 2 2 4 9 b e 
        . e 2 2 9 9 4 4 4 4 4 2 4 9 9 e 
        e 2 2 2 9 9 2 4 4 4 4 4 2 9 9 e 
        e 2 2 2 9 9 e e e e e e e 9 9 e 
        e 2 2 2 9 b e b b b e b e b 9 e 
        e 2 e e e e b b b b e b b e b e 
        e e 3 3 e e 2 2 2 2 e 2 2 e e e 
        e 3 3 e e e e e e e e e e e e e 
        e e e e e e e e e e e e e e e e 
        e e e e f f f e e e e f f f e e 
        . e e f f f b f e e f f f b f . 
        . . . . c b b . . . . c b b . . 
        `,img`
        . . . . . . . e e e e e . . . . 
        . . . . . e e 2 2 2 2 2 e . . . 
        . . . . e e 2 2 2 2 2 2 2 e . . 
        . . . . e 9 4 2 2 2 4 4 4 b e . 
        . . e e 9 9 4 2 2 2 4 4 4 9 b e 
        . e 2 2 9 9 4 4 2 2 2 4 4 9 9 e 
        e 2 2 2 9 9 2 4 4 4 4 4 2 9 9 e 
        e 2 2 2 9 9 e e e e e e e 9 9 e 
        e 2 2 2 9 b e b b b e b e b 9 e 
        e 2 e e e e b b b b e b b e b e 
        e e 3 3 e e 2 2 2 2 e 2 2 e e e 
        e 3 3 e e e e e e e e e e e e e 
        e e e e e e e e e e e e e e e e 
        e e e e f f f e e e e f f f e e 
        . e e f c b b f e e f c b b f . 
        . . . . f f f . . . . f f f . . 
        `,img`
        . . . . . . . e e e e e . . . . 
        . . . . . e e 2 2 2 2 2 e . . . 
        . . . . e e 2 2 2 2 2 2 2 e . . 
        . . . . e 9 4 2 2 2 2 2 4 b e . 
        . . e e 9 9 4 2 2 2 2 2 4 9 b e 
        . e 2 2 9 9 4 4 2 2 2 2 4 9 9 e 
        e 2 2 2 9 9 2 4 4 4 4 4 2 9 9 e 
        e 2 2 2 9 9 e e e e e e e 9 9 e 
        e 2 2 2 9 b e b b b e b e b 9 e 
        e 2 e e e e b b b b e b b e b e 
        e e 3 3 e e 2 2 2 2 e 2 2 e e e 
        e 3 3 e e e e e e e e e e e e e 
        e e e e e e e e e e e e e e e e 
        e e e e f f f e e e e f f f e e 
        . e e f b b c f e e f b b c f . 
        . . . . c f f . . . . c f f . . 
        `]]
    escapedCars = 0
    info.startCountdown(60)
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (gameOn) {
        if (posIndex < yPositions.length - 1) {
            posIndex += 1
            godzilla.setPosition(20, yPositions[posIndex])
        }
    }
})
sprites.onDestroyed(SpriteKind.Projectile, function (sprite) {
    if (sprite.x < 0) {
        escapedCars += 1
        if (escapedCars > 10) {
            game.over(false)
        }
    }
})
let projectile: Sprite = null
let carAnim: Image[][] = []
let escapedCars = 0
let yPositions: number[] = []
let godzilla: Sprite = null
let posIndex = 0
let gameOn = false
gameOn = false
game.setDialogFrame(img`
    999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999
    999911119999119991111999111199999999119999999999
    999111111191111911111191111119911191111991111999
    999111111111111111111111111111111111111911111199
    999111111111111111111111111111111111111111111199
    999111111111111111111111111111111111111111111199
    999911111111111111111111111111111111111111111199
    999991111111111111111111111111111111111111111999
    999111111111111111111111111111111111111111111999
    991111111111111111111111111111111111111111119999
    991111111111111111111111111111111111111111111999
    999111111111111111111111111111111111111111111199
    999911111111111111111111111111111111111111111199
    999111111111111111111111111111111111111111111999
    999111111111111111111111111111111111111111119999
    999111111111111111111111111111111111111111111999
    999911111111111111111111111111111111111111111199
    999911111111111111111111111111111111111111111199
    999111111111111111111111111111111111111111111199
    991111111111111111111111111111111111111111111199
    991111111111111111111111111111111111111111111999
    991111111111111111111111111111111111111111119999
    991111111111111111111111111111111111111111111999
    999111111111111111111111111111111111111111111199
    999911111111111111111111111111111111111111111199
    999111111111111111111111111111111111111111111199
    991111111111111111111111111111111111111111111199
    991111111111111111111111111111111111111111111999
    991111111111111111111111111111111111111111119999
    991111111111111111111111111111111111111111119999
    999111111111111111111111111111111111111111111999
    99d1111111111111111111111111111111111dd111111199
    9ddd111111111111111111111111111111111dd111111199
    9ddd1111111111dd111111111111111111111dd1111dd199
    9d1d111111111ddddd11111111111ddddd111ddd111ddd99
    9ddd111ddd111d111d1111ddddd11d111d11dddd111ddd99
    9d1d11ddddd11ddddd1111ddddd11ddddd11d1dd111ddd99
    9ddd11d1d1d11d111d1dd1d1ddd11d111d11dddddddddd99
    9d1d11ddddd11ddddd1dd1ddd1d11ddddddddd1ddd111ddd
    dddd11d1d1d11d111d1dd1ddddd11d111ddddddddddddddd
    dd1d1ddddddddddddd1dd1d1ddddddddddddd1dddd111ddd
    dddd1dd1d1dddd111dddddddd1dddd111ddddddddddddddd
    dd1d1ddddddddddddddddddddddddddddddddd1ddd111ddd
    ddddddddddddddddddddddd1dddddddddddddddddddddddd
    ddddddddddddddddddddddddd1ddddddddddd1dddd111ddd
    .dddddddddddddddddddddddddddddddddddddddddddddd.
    ..dddddddddddddddddddddddddddddddddddddddddddd..
    `)
scene.setBackgroundImage(img`
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999111111111119999999999999999999999999999999999999991111999999999999999999999999999999999999999999111111111111
    99999999999999999999999999999999999999999999999999991ddddddddd19999999999999999999999999991111199999991dd11999999999999999999999999999999999999999991dddddddddd1
    99999999999999999999999999999911111999999999999999991ddddddddd19999999999999999999999999991ddd199999991ddd1999999999999999999991111999999999999999991dddddddddd1
    9999999999999999999999999999911ddd1199999999999999991d11dddddd19999999999999999999999999111ddd111999911ddd1199999999999999999911dd1199999999999999991dd1d1ddddd1
    999999999999999999999999999911ddddd199999999999999991ddddddd1d199999999111999999111111191ddddddd199991ddddd19999999999999999111dddd199999999999999991dddddd11dd1
    99999911119999999999999999991dddddd199911199999999991ddddddddd1999999911d19999991ddddd191ddddddd199911ddddd119999999999999991dddddd199911119999999991dddddddddd1
    9999991dd19999999999999999991ddd1d119991d199999999991ddddddddd199999991dd19999991ddddd191ddddddd199911ddddd119999999999999991ddd1d119991dd19999999991dddd1ddddd1
    1111111dd19111111991111111111dddddd19111d111999999991ddddddd1d111111111dd19999991ddddd111d11dddd19111ddddddd11111991111111111dddddd19911dd11999999991ddddddd1dd1
    d11dddddd191d1dd1991ddddddddddd1ddd111ddddd1111111111ddddddd1d11d11ddd1dd199999911dd1dd11ddddddd191dddddddddd1dd1991ddddddddddddd1d1111dddd1191111111dddddd11ddd
    dddd1dddd191dddd19911d1dd1ddddddddd111ddddd111dd1dd11ddddddddd11dddd1d1dd11111111dddddd11dd1dddd191ddddddddddddd1991dd1ddd1dddddddd1111dddd1191d11dd1ddddddddddd
    ddddddddd111dd1d1111dddddddddddddddd11dddddd11ddddddddddddddddd1ddddddddd11d11d11ddddddddddddddd191ddddddddddd1d1111dddddddddddddddd11dddddd111ddddddddddddddddd
    d11d1dddd1ddddddd1dd1d1ddddddddddddd11ddddddd1dddd11ddddddddddddd1111ddddddd1ddd11dd1ddddddddddd111ddddddddddddddd1ddd1ddddddddddddd11ddddddd111d11ddddddddddddd
    ddddddddd1ddddddd1dddddddddddddddddddd1dddddd11ddddddddddddddddddddddddddddd1ddd1ddddddddddddddd1d1ddddddddddddddd1dddddddddddddddddddddddddd1dddddddddddddddddd
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    11ccccccccccc11cccccccccccc11ccccccccccc11ccccccccccc11cccccccccccc11ccccccccccc11ccccccccccc11cccccccccccc11ccccccccccc11ccccccccccc11cccccccccccc11ccccccccccc
    11cdddddddddc11cddddddddddc11cdddddddddc11cdddddddddc11cddddddddddc11cdddddddddc11cdddddddddc11cddddddddddc11cdddddddddc11cdddddddddc11cddddddddddc11cdddddddddc
    11cdddddddddc11cddddddddddc11cdddddddddc11cdddddddddc11cddddddddddc11cdddddddddc11cdddddddddc11cddddddddddc11cdddddddddc11cdddddddddc11cddddddddddc11cdddddddddc
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    111d1111d111dd11dd1111111111dddd11111111111d1111d111dd11dd1111111111dddd11111111111d1111d111dd11dd1111111111dddd11111111111d1111d111dd11dd1111111111dddd1111111d
    11ddd111111dddd11dd11111111111d1d111111111ddd111111dddd11dd11111111111d1d111111111ddd111111dddd11dd11111111111d1d111111111ddd111111dddd11dd11111111111d1d1111111
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccbccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbcbddbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    1111111dddd11111ddbbbbbbbbbbbbbbbbbdd1111111111dddd11111ddbbbbbbbbbbbbbbbbbdd1111111111dddd11111ddbbbbbbbbbbbbbbbbbdd1111111111dddd11111ddbbbbbbbbbbbbbbbbbdd111
    111111111d1d11111ddbbbbbbbbbbbbbbbbbdd11111111111d1d11111ddbbbbbbbbbbbbbbbbbdd11111111111d1d11111ddbbbbbbbbbbbbbbbbbdd11111111111d1d11111ddbbbbbbbbbbbbbbbbbdd11
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccbbbccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbcbbcbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbddbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    1111111111dddd11111111111d1111d111dd11dd1111111111dddd11111111111d1111d111dd11dd1111111111dddd11111111111d1111d111dd11dd1111111111dddd1111111d111d1111d111dd11dd
    d11111111111d1d111111111ddd111111dddd11dd11111111111d1d111111111ddd111111dddd11dd11111111111d1d111111111ddd111111dddd11dd11111111111d1d111111111ddd111111dddd11d
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    111d1111d111dd11dd1111111111dddd11111111111d1111d111dd11dd1111111111dddd11111111111d1111d111dd11dd1111111111dddd11111111111d1111d111dd11dd1111111111dddd1111111d
    11ddd111111dddd11dd11111111111d1d111111111ddd111111dddd11dd11111111111d1d111111111ddd111111dddd11dd11111111111d1d111111111ddd111111dddd11dd11111111111d1d1111111
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbccbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    cccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbc
    bccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccc
    ccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbbbb
    bbbbccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbddbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbdd1111111111dddd11111ddbbbbbbbbbbbbbbbbbdd1111111111dddd11111ddbbbbbbbbbbbbbbbbbdd1111111111dddd11111ddbbbbbbbbbbbbbbbbbdd1111111111dddd11111ddb
    bbbbbbbbbbbbbbbbbdd11111111111d1d11111ddbbbbbbbbbbbbbbbbbdd11111111111d1d11111ddbbbbbbbbbbbbbbbbbdd11111111111d1d11111ddbbbbbbbbbbbbbbbbbdd11111111111d1d11111dd
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    ccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcc
    dbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbd
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    `)
let logo = sprites.create(img`
    ........................bbbbbbbbbbbbbbbbbbb..................................
    ......................bbb5555555555555555bbbbb...............................
    .....................bb5555555555555555555555bbb......bbc....................
    ....................bb5555555555555555555555555bbb..cbbcc....................
    ...................bb5555555555555555555555555555bccbbccc....................
    ...................b5555555555555555555555555555555ccccc.....................
    ..................bb555b555555555bd55555555555555555cccc.....................
    ..................b5555b555555555bb555555555555555555ccc.....................
    ..................c555555555555555555555555bccc5555555cc.....ccc.............
    ..................c55555bccccc5555555555555ccc1c5555555ccccccbbc.............
    ..................c5555bccccccccb5555555555dcbbc55555555cccbbbcc.............
    ..................c555bddcccccccccb1555555555555555555555ccbccc..............
    ..................c555bcdcccccccccc11b55555555555555555555ccccc..............
    ...................c55ccbcccccccccc11cc5555555555555555555dcccc..............
    ...................c55ccccccccccccc1bccb1555555bb5555555555dcc...............
    ....................c5cccccccccccccccccb1155555b55555555555dcc...............
    ....................c55ccccccccccccccccc1bccccb555555555555ddc...............
    .....................c55cccccccccccccccccccccc555555555555dddccccbbc.........
    ......................c55ccccccb333cc333bcccc555555555555555ddccbbcc.........
    ......................cc55dccc3333bc333333ccb555555555555555ddcccccc.........
    .......................cc555c33333b3333333cc555555555555555dddccccc..........
    ........................ccb533333b33333333c5555555555555555d55dcccc..........
    .........................cb533333b3333333b55d55555555555555555dcccc..........
    .........................cd533333b33b133b55dd5555555555555555dddccc..........
    .................cccc....c5513333333b11355dd55555555555555ddddddcc...........
    ................c55bcc...c5513333333b1155dd5555555555555555dddddcc...........
    ................c55bbc...c5533333333b555dd55555555555555555ddddddccc.........
    ..............ccc55bddc..cb553133133555dd555555555cccc5555dddddddcccccc......
    .............c55bb5bdddc..c55513313555dd5555555555c55ccccddddddddcccccc......
    .............c55dbbbdddcc..cd5555555dbdd5555555555cb5555ccccdddddccccc.......
    .............c555bddbbb5c..cbbbbbbbbbddd5555555ccccbb55bb5dbcddddbccc........
    ..............bbbbddb555ccccddbbbbbddddd5555555c55ccbbbb5555bcddddcc.........
    .............cdd555b555bdbb5dddddddddddd5555555bb5555db5555555cdddc..........
    ...........ccbbb555bbbb5dbb5ddddddddddd555555555bb55ddbccbb555ccddcc.........
    ...........c555bb5555555bb555dddddddddd5555555555bc5ddddddbb555cdddcc........
    ...........c5555b5555555b5555ddddddddd555555555555c55dddbbbb555cbdddc........
    ............cbbb555555dbb555555dddddd5555555555555cc5ddbb5555555bbbddc.......
    .............cbb55555ddb555555555555555555555555555c55db55555555dbbbdcc......
    ..............cccddddddb555555555555555555555555555cc555bbb555555dddddc......
    ................ccddddb55555555555555555555555555555c55555dd555555ddddc......
    .................cddddb5555555555555555555555555555dcc5555dd5555555dddc......
    ..cc.............ccddbd555555555555555555555555555d5dc555dd55555555dddc......
    ..c5bb............ccdbd5555555555555555555555555555ddcc555555555555dddc......
    ..c55b.............ccbd555555555555555555555555555ddddc555555555555ddcc......
    ..cb5bb.............cbdd5555555555555555555555555d5dddcc5555555555dddcc......
    ..cb55b..............cdd555555555555555555555555d55ddddccc5555555dddcc.......
    ..cb55b..............cddd555555555555555555d555d55dddddddccc555ddddcc........
    ..c555b..............cdd55555dd555555555555555dddddddddddddcccccccccc........
    .cb555bb.............cbdd5555dd5555555555555dddddddddddddddddddddddccc.......
    .cb555bb............ccbddd5d55555555dd55555555dddddddddddddddddddddcccc......
    .c55555b...........cccbbddddddd555555555ddd55dddddddddddddddddddddbccc.......
    cb55555b..........cccbbbbdddd55ddd5555ddddddddddddddddddddddddddddbcc........
    cb55555b........bccbbbd5555dd555dd5555d55ddddddddddddddddd55ddddbbbc.........
    c5555555bb....bbbddbb5555555ddddddddddd55dddddddddddddddd55ddddddbbc.........
    c55555555bbbbbbddddc555555555dddddddddddddddddddddddddddd5dd5555ddbc.........
    cd5555555555ddddddc5555555555ddddddddddddddddddddddddddddd55555555dc.........
    cd5555555555dddddcc5555555555dddddddddddddddddddddddddd55d555555555cc........
    cdd55555555ddddddc55555555555dddddddddddddddddddddddddd5555555555555c........
    cddd555555ddddddcc5555555555ddddddddddddddddddddddddddddd55555555555cc.......
    ccddddddddddddddc55555555555ddddddddddddddddddddddddddddd555555555555c.......
    .cddddddddddddddc555555555555dddddddddddddddddddddddddddd555555555555c.......
    .ccddddddddddddcc555555555555ddddddddddddddddddbddddddddd555555555555cc......
    ..ccdddddddddddcc5555555dd55dddddddddddddddddddbdddddddd5d555555555555c......
    ...ccddddddddddccd5555dddddddddddddbbddddddddddbddddddddd5555555555555c......
    ....cccddddddddcddddddddddddddddddbbddddddddddbbbdddddddddd55555555555c......
    ......cccdddddccdddddddddddddddddccccccccccccbbbbddddddddddd555555555dc......
    ........cccccccdddddddddddddddddccc........ccccbbbdddddddddddd5555555dcc.....
    ............ccc555555dddddddddccc.............cccbddddddddddddd55555ddccc....
    .............c55555555ddddddccc..................ccdddddddddddddddddddccc....
    ...........ccdddccd555dddccccc....................ccdddddddddddd5555555dc....
    ..........ccdddccdddddcddcc........................cccddddddddd55555555dcc...
    ..........ccdddcdddccccddc...........................ccccccdddd555ddddccddcc.
    ..........ccccccddcccccdcc...............................ccddddddccddddccddcc
    ...............cdc.....ccc................................cccccdddccddddcddcc
    ...............cc...........................................ccccdddccccdccccc
    ...............................................................ccccc..ccc....
    `, SpriteKind.Player)
logo.setPosition(80, 80)
game.onUpdateInterval(800, function () {
    if (gameOn) {
        projectile = sprites.createProjectileFromSide(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, randint(-100, -75), 0)
        animation.runImageAnimation(
        projectile,
        carAnim._pickRandom(),
        100,
        true
        )
        projectile.y = yPositions._pickRandom() + 3
    }
})

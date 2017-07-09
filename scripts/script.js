"use strict";

// width, height, renderer, parent-id, ..., functions preload, create and update
var maingame = new Phaser.Game(1024, 768, Phaser.AUTO, 'trump_concept', { preload: preload, create: create, render: render })

// global variables
var ONEFRAME = 1000 / 60

var fullscreenIcon
var background
var trump_cutout, trump_hair, trump_mouth, trump_hand
var eyes_sharingan, eyes_sauron, eyes_terminator
var flagUS 
var tv, flicker
var file_folder, trump_file
var white_background
var black_1, black_2
var head_text_image
var backInTrumpsWorld
var white_background
var greatWallSong, hymn
var nuke_button, nuke_plate

var tempImages = []

var hoverStates = {
    CLOSED: "closed",
    HOVERED: "hovered",
    OPEN: "open"
}
var zoomInOn = {
    xStep: 0,
    yStep: 0,
    timeLeft: 0,
    startingTime: 0,
    zoomStep: 0,
    finalZoom: 1,
    finalX: 0,
    finalY: 0,
    stepsLeft: 0
}
var zoomInBasic = {
    xStep: 0,
    yStep: 0,
    timeLeft: 0,
    startingTime: 0,
    zoomStep: 0,
    finalZoom: 1,
    finalX: 0,
    finalY: 0,
    stepsLeft: 0
}

function preload() {
    maingame.load.image('background', 'img/backgrounds/oval_office_1.jpg')
    maingame.load.image('fullscreen', 'img/fullscreen.png')
    maingame.load.image('flagUS', 'img/backgrounds/background.png')
    maingame.load.image('trump_cutout', 'img/trump/trump_cutout_2.png')
    maingame.load.image('trump_hand', 'img/trump/trump_hand.png')
    maingame.load.image('trump_hair', 'img/trump/trump_hair_2.png')
    maingame.load.image('trump_mouth', 'img/trump/trump_mouth.png')
    maingame.load.image('eyes_sauron', 'img/eyes/sauron_eyes.png')
    maingame.load.image('text_trumps_world', 'img/text/trumps_world.png')
    maingame.load.image('text_back', 'img/text/back_2.png')
    maingame.load.image('medipack', 'img/trumps_world/medipack.png')
    maingame.load.image('moab', 'img/trumps_world/moab_1.png')
    maingame.load.image('trump_nato', 'img/trumps_world/nato.png')
    maingame.load.image('trumps_wall', 'img/trumps_world/wall_around_trump_full.png')
    maingame.load.image('tv', 'img/tv/tv.png')
    maingame.load.image('trump_file', 'img/info/top_secret.png')
    maingame.load.image('text_trumps_commercials', 'img/text/text_trumps_commercials copy.png')
    maingame.load.image('text_on_camera', 'img/text/text_on_camera.png')
    maingame.load.image('black', 'img/black_px.png')
    maingame.load.image('white', 'img/white_px.png')
    maingame.load.image('thumb_game', 'img/tv/thumbnails/game_thumb.png')
    maingame.load.image('thumb_pepsi', 'img/tv/thumbnails/pepsi_thumb.png')
    maingame.load.image('thumb_pizza95', 'img/tv/thumbnails/pizzahut95_thumb.png')
    maingame.load.image('thumb_pizza00', 'img/tv/thumbnails/pizzahut00_thumb.png')
    maingame.load.image('thumb_mcDonalds', 'img/tv/thumbnails/mcd_thumb.png')
    maingame.load.image('thumb_visa', 'img/tv/thumbnails/visa_thumb.png')
    maingame.load.image('thumb_wwe', 'img/eyes/thumbnails/thumb_WWE_McMahon_shave_sub.png')
    maingame.load.image('thumb_loan', 'img/eyes/thumbnails/thumb_Small_Loan_sub.png')
    maingame.load.image('thumb_climate', 'img/eyes/thumbnails/thumb_On_climate_change_sub.png')
    maingame.load.image('thumb_dating', 'img/eyes/thumbnails/thumb_Id_be_dating_her_sub.png')
    maingame.load.image('thumb_grab', 'img/eyes/thumbnails/thumb_Grab_her_by_the_pussy_sub.png')
    maingame.load.image('file_folder', 'img/info/file_folder.png')
    maingame.load.image('head_health_text', 'img/trumps_world/texts/head_health_text.png')
    maingame.load.image('head_moab_text', 'img/trumps_world/texts/head_moab_text.png')
    maingame.load.image('head_nato', 'img/trumps_world/texts/head_nato.png')
    maingame.load.image('head_wall_text', 'img/trumps_world/texts/head_wall_new.png')
    maingame.load.image('trump_cite_1', 'img/trumps_world/trump-repeal-obamacare.jpg')
    maingame.load.image('america_first', 'img/trumps_world/america-first.jpg')
    maingame.load.image('sound_icon', 'img/sound.png')
    maingame.load.image('nuke_plate','img/nuke_plate.png')
    maingame.load.image('nuke_button', 'img/nuke_button.png')
    maingame.load.image('text_tactful_tweets', 'img/text/text_tactful_tweets.png')
    maingame.load.image('intro', 'img/trump_house.jpg')
    maingame.load.image('click', 'img/click.png')
    
    maingame.load.spritesheet('flicker', 'img/tv/flicker_sprite.jpg', 400, 300)
    maingame.load.spritesheet('nuke', 'img/nuke.png', 720, 540, 145)
    maingame.load.spritesheet('natogif', 'img/trumps_world/natogif.png', 512, 288, 201)

    maingame.load.video('com_pepsi', 'video/Commercials/pepsi_88.mp4')
    maingame.load.video('com_pizza95', 'video/Commercials/pizza_95.mp4')
    maingame.load.video('com_pizza00', 'video/Commercials/pizza_00.mp4')
    maingame.load.video('com_visa', 'video/Commercials/visa_04.mp4')
    maingame.load.video('com_mcDonalds', 'video/Commercials/mcDonalds_02.mp4')
    maingame.load.video('com_game', 'video/Commercials/game_89.mp4')
    
    maingame.load.audio('wall_parody', 'sound/I would build a great wall song.mp3')
    maingame.load.audio('hymn', 'sound/hymn_usa.mp3')

    console.log("Preload finished")
}

function create() {

    loadIntro()

    console.log("Create finished")
}

function loadIntro(){
    tempImages.push(maingame.add.sprite(maingame.width/2, maingame.height/2, 'intro'))
    tempImages.push(maingame.add.sprite(maingame.width-5, 5, 'click'))

    let imageScale = maingame.height / tempImages[0].height

    tempImages[0].height *= imageScale
    tempImages[0].width *= imageScale
    tempImages[1].height *= 0.5
    tempImages[1].width *= 0.5
    tempImages[0].anchor.set(0.5, 0.5)
    tempImages[1].anchor.set(1, 0)
    
    greatWallSong = maingame.add.audio('wall_parody')
    hymn = maingame.add.audio('hymn')
    hymn.play()
    hymn.volume = 0.02

    tempImages[0].inputEnabled = true
    tempImages[0].events.onInputDown.add(function(){
        deleteTempImages()

        loadMainContent()

        tempImages.push(maingame.add.sprite(maingame.width/2, maingame.height/2, 'intro'))
        let imageScale = maingame.height / tempImages[0].height

        tempImages[0].height *= imageScale
        tempImages[0].width *= imageScale
        tempImages[0].anchor.set(0.5, 0.5)

        var fadeOut = maingame.add.tween(tempImages[0]).to({alpha: 0}, 2000, Phaser.Easing.Linear.None, true)
        maingame.add.tween(hymn).to({volume: 0}, 2000, Phaser.Easing.Linear.None, true)

        fadeOut.onComplete.add(function(){
            hymn.stop()
            deleteTempImages()
        })
    })
}

function loadMainContent(){
    addSprites()

    preprocessImages()

    setTimeout(addTweenEvents, 500)
}

// the render function is called 60 times per second
function render() {
    if (JSON.stringify(zoomInBasic) != JSON.stringify(zoomInOn)) {
        if (zoomInOn.stepsLeft > 0) {
            zoomInOn.stepsLeft -= 1

            maingame.world.scale.x += zoomInOn.zoomStep
            maingame.world.scale.y += zoomInOn.zoomStep
            maingame.camera.x += zoomInOn.xStep
            maingame.camera.y += zoomInOn.yStep
        } else {
            maingame.world.scale.x = zoomInOn.finalZoom
            maingame.world.scale.y = zoomInOn.finalZoom

            zoomInOn = JSON.parse(JSON.stringify(zoomInBasic))

        }
    }

    if(document.activeElement !== document.body) document.body.focus()
}

function goFull() {
    if (maingame.scale.isFullScreen)
        maingame.scale.stopFullScreen();
    else
        maingame.scale.startFullScreen(false);
}

function addSprites() {
    //  This creates a simple sprite that is using our loaded image and
    //  displays it on-screen and assign it to a variable
    background = maingame.add.sprite(0, 0, 'background')
    black_1 = maingame.add.sprite(480, 410, 'black')
    black_2 = maingame.add.sprite(418, 0, 'black')
    trump_hand = maingame.add.sprite(0, maingame.height, 'trump_hand')
    trump_file = maingame.add.sprite(195, 305, 'trump_file')
    file_folder = maingame.add.sprite(295, 335, 'file_folder')
    trump_cutout = maingame.add.sprite(0, maingame.height, 'trump_cutout')
    flagUS = maingame.add.sprite(340, 240, 'flagUS')
    trump_hair = maingame.add.sprite(418, 289, 'trump_hair')
    trump_mouth = maingame.add.sprite(550, 539, 'trump_mouth')
    eyes_sauron = maingame.add.sprite(491, 318, 'eyes_sauron')
    flicker = maingame.add.sprite(810, 48, 'flicker')
    tv = maingame.add.sprite(803, -20, 'tv')
    fullscreenIcon = maingame.add.sprite(46, maingame.height - 5, 'fullscreen')
    nuke_plate = maingame.add.sprite(maingame.width-100, maingame.height - 80, 'nuke_plate')
    nuke_button = maingame.add.sprite(maingame.width-100, maingame.height - 80, 'nuke_button')

    file_folder.angle = 11
    trump_file.alpha = 0
}

function preprocessImages() {
    setImageScales()

    setImageAlphas()

    setImageAnchors()

    setImageInputs()

    putBackInfoBlock()

    deleteTempImages()
}

function setImageScales() {
    // scale the main image (setting the width and the height actually sets the scale)
    let imageScale = maingame.width / trump_cutout.width

    black_1.height = 200
    black_1.width = 200
    black_2.height = 300
    black_2.width = 500

    let backgroundScale = maingame.height / background.texture.height
    background.width = background.texture.width * backgroundScale
    background.height = background.texture.height * backgroundScale
    fullscreenIcon.width = fullscreenIcon.texture.width * 0.07
    fullscreenIcon.height = fullscreenIcon.texture.height * 0.07
    trump_cutout.width = maingame.width
    trump_cutout.height = trump_cutout.height * imageScale
    trump_hair.width = trump_hair.width * imageScale
    trump_hair.height = trump_hair.height * imageScale
    trump_mouth.width = trump_mouth.width * imageScale
    trump_mouth.height = trump_mouth.height * imageScale
    trump_hand.width = trump_hand.width * imageScale
    trump_hand.height = trump_hand.height * imageScale
    eyes_sauron.width = eyes_sauron.width * imageScale
    eyes_sauron.height = eyes_sauron.height * imageScale

    flagUS.scale.setTo(0.28, 0.28)

    tv.scale.setTo(0.125, 0.125)
    flicker.scale.setTo(0.36, 0.36)
    file_folder.scale.setTo(0.13, 0.10)
    trump_file.scale.setTo(0.08, 0.08)

    nuke_button.scale.setTo(0.25, 0.25)
    nuke_plate.scale.setTo(0.25, 0.25)
}

function setImageAlphas() {
    black_2.alpha = 0

    eyes_sauron.alpha = 0
    flagUS.alpha = 0
}

function setImageAnchors() {
    // moves the image anchor to the lower left corner (x and y position is seen from the anchor)
    fullscreenIcon.anchor.set(1, 1)
    trump_cutout.anchor.set(0, 1)
    trump_hair.anchor.set(0, 1)
    trump_hand.anchor.set(0, 1)
    trump_mouth.anchor.set(0, 1)
    eyes_sauron.anchor.set(0, 1)
    trump_file.anchor.set(0, 1)
    flagUS.anchor.set(0, 1)

    file_folder.anchor.set(0.5, 0.5)
}

function setImageInputs() {
    //  Enables all kind of input actions on this image (click, etc)
    enableInputWithPixelPerfect(fullscreenIcon)
    enableInputWithPixelPerfect(trump_hair)
    enableInputWithPixelPerfect(trump_mouth)
    eyes_sauron.inputEnabled = true
    tv.inputEnabled = true
    enableInputWithPixelPerfect(flicker)
    enableInputWithPixelPerfect(file_folder)

    nuke_button.inputEnabled = true
}

function enableInputWithPixelPerfect(element) {
    element.inputEnabled = true
    element.input.pixelPerfectOver = true
}

function deleteTempImages() {
    destroyObject(white_background)

    destroyObject(backInTrumpsWorld)

    destroyObject(head_text_image)

    hideSyriaTweets()
    hideTactfulTweets()
    greatWallSong.stop()

    tempImages.forEach(destroyObject)
    tempImages = []

    hideNatoTweet()
}

function destroyObject(object) {
    if (object) {
        if (object.actualVideo) {
            object.actualVideo.destroy()
            object.actualVideo = undefined
        }

        try {
            object.destroy()
            object = undefined
        } catch (e) { console.log("Video already deleted") }
    }
}

function putBackInfoBlock() {
    var duration = 500

    maingame.add.tween(trump_file).to({
        x: 195,
        y: 305,
        alpha: 0
    }, duration, Phaser.Easing.Power1, true)

    maingame.add.tween(file_folder).to({
        x: 295,
        y: 335,
        alpha: 1
    }, duration, Phaser.Easing.Power1, true)
}

function addTweenEvents() {
    console.log('tweens added')
    fullscreenIcon.events.onInputDown.add(goFull, this)

    let angle = -5
    let moveX = 1
    let moveY = 9

    // Hover effects
    trump_hair.events.onInputOver.add(function() {
        trump_hair.hairState = hoverStates.HOVERED
        maingame.add.tween(trump_hair).to({ angle: angle }, 750, Phaser.Easing.Bounce.Out, true)
    })
    trump_hair.events.onInputOut.add(function() {
        maingame.add.tween(trump_hair).to({ angle: 0 }, 750, Phaser.Easing.Bounce.Out, true)    
    })
    trump_mouth.events.onInputOver.add(function() {
        trump_mouth.mouthState = hoverStates.HOVERED
        maingame.add.tween(trump_mouth).to({ x: 551, y: 548 }, 500, Phaser.Easing.Bounce.Out, true)
    })
    trump_mouth.events.onInputOut.add(function() {
        trump_mouth.mouthState = hoverStates.CLOSED
        maingame.add.tween(trump_mouth).to({ x: 550, y: 539 }, 500, Phaser.Easing.Bounce.Out, true)
    })

    var inTween = maingame.add.tween(file_folder).to({ angle: 13 }, 200, Phaser.Easing.Quadratic.InOut)
    var backTween = maingame.add.tween(file_folder).to({ angle: 11 }, 100, Phaser.Easing.Quadratic.InOut)
    var outTween = maingame.add.tween(file_folder).to({ angle: 9 }, 200, Phaser.Easing.Quadratic.InOut)

    file_folder.events.onInputOver.add(function() {
        inTween.onComplete.removeAll()
        outTween.onComplete.removeAll()

        inTween.onComplete.add(function() { outTween.start()})
        outTween.onComplete.add(function() { inTween.start()})

        inTween.start()
    })

    file_folder.events.onInputOut.add(function() {
        inTween.onComplete.removeAll()
        outTween.onComplete.removeAll()

        inTween.onComplete.add(function() { backTween.start() })
        outTween.onComplete.add(function() { backTween.start() })
    })

    eyes_sauron.events.onInputOver.add(function() { maingame.add.tween(eyes_sauron).to({ alpha: 1 }, 200, Phaser.Easing.Quartic.In, true) })
    eyes_sauron.events.onInputOut.add(function() { maingame.add.tween(eyes_sauron).to({ alpha: 0 }, 200, Phaser.Easing.Quartic.In, true) })


    flicker.animations.add('flick')

    tv.events.onInputOver.add(function() {
        flicker.animations.play('flick', 15, true)
    })
    tv.events.onInputOut.add(function() {
        flicker.animations.stop('flick')
    })

    nuke_button.events.onInputOver.add(function(){
        maingame.add.tween(nuke_button).to({y: maingame.height - 74}, 200, Phaser.Easing.Back.Out, true)
    })

    nuke_button.events.onInputOut.add(function(){
        maingame.add.tween(nuke_button).to({y: maingame.height - 80}, 200, Phaser.Easing.Sinusoidal.In, true)
    })

    // Click effects
    trump_hair.events.onInputDown.add(moveHair, this)
    trump_mouth.events.onInputDown.add(moveMouth, this)
    eyes_sauron.events.onInputDown.add(clickEyes, this)
    tv.events.onInputDown.add(clickTv, this)
    file_folder.events.onInputDown.add(loadTrumpInfo, this)
    nuke_button.events.onInputDown.add(startNuke, this)
}

function deleteTweenEvents(object = null) {
    console.log('tweens deleted')

    trump_hair.events.onInputOver.removeAll()
    trump_hair.events.onInputOut.removeAll()
    trump_mouth.events.onInputOut.removeAll()
    trump_mouth.events.onInputOver.removeAll()
    eyes_sauron.events.onInputOver.removeAll()
    eyes_sauron.events.onInputOut.removeAll()
    tv.events.onInputOut.removeAll()
    tv.events.onInputOver.removeAll()
    file_folder.events.onInputDown.removeAll()
    file_folder.events.onInputOver.removeAll()
    nuke_button.events.onInputDown.removeAll()
    nuke_button.events.onInputOver.removeAll()

    if (object != trump_mouth) {
        trump_mouth.events.onInputDown.removeAll()
    }
    eyes_sauron.events.onInputDown.removeAll()
    trump_hair.events.onInputDown.removeAll()
    tv.events.onInputDown.removeAll()
    trump_file.events.onInputDown.removeAll()
}

function createZoom(time, zoomAmount, x, y) {
    // set zoomInOn starting variables
    zoomInOn.startingTime = time
    zoomInOn.timeLeft = time
    zoomInOn.finalZoom = zoomAmount
    zoomInOn.finalX = x * zoomAmount
    zoomInOn.finalY = y * zoomAmount

    // calculate Steps, movement and zoom to do
    var currentZoom = maingame.world.scale.x
    var zoomToDo = zoomInOn.finalZoom - currentZoom
    var xToDo = zoomInOn.finalX - maingame.camera.x
    var yToDo = zoomInOn.finalY - maingame.camera.y
    var stepAmount = Math.round(zoomInOn.startingTime / ONEFRAME)

    // calculate step sizes that are done per frame
    var xStep = xToDo / stepAmount
    var yStep = yToDo / stepAmount
    var zoomStep = zoomToDo / stepAmount

    // set zoomInOn
    zoomInOn.xStep = xStep
    zoomInOn.yStep = yStep
    zoomInOn.zoomStep = zoomStep
    zoomInOn.timeLeft = time
    zoomInOn.stepsLeft = stepAmount
}

function loadMainPage(withZoom = true) {
    var timeToZoom = 400
    
    if (withZoom) {
        createZoom(timeToZoom, 1, 0, 0)
    }

    preprocessImages()

    addTweenEvents()

    setTimeout(resetTweens, timeToZoom)

    setTimeout(deleteTempImages, timeToZoom)
}

function resetTweens(){
    // close head, stop flickering tv, close mouth, stop rotating files, normalize eyes if needed
    if(trump_hair.angle != 0){
        trump_hair.hairState = hoverStates.CLOSED
        maingame.add.tween(trump_hair).to({ angle: 0 }, 750, Phaser.Easing.Bounce.Out, true)    
    }

    if(flicker.animations.currentAnim.isPlaying)
        flicker.animations.stop('flick')

    if(trump_mouth.y != 539)
        var closeMouth = maingame.add.tween(trump_mouth).to({ x: 550, y: 539 }, 1250, Phaser.Easing.Bounce.Out, true)

    maingame.tweens._tweens = []
}

function moveHair() {
    // called when clicked on the hair, opens and closes hair and loads the "hair menu"

    let angle = -60
    let tweenTypeIn = Phaser.Easing.Back.Out
    let tweenTypeOut = Phaser.Easing.Bounce.Out

    // depending on the state the hair is in, opens or closes the hair
    switch (trump_hair.hairState) {
        case hoverStates.CLOSED: // open hair
        case hoverStates.HOVERED: // open hair
            // change state
            trump_hair.hairState = hoverStates.OPEN

            // start tween
            var openHead = maingame.add.tween(trump_hair).to({ angle: angle }, 750, tweenTypeIn, true)

            loadHairMenu()

            deleteTweenEvents(trump_hair)
            break
        case hoverStates.OPEN: // close hair
            // change state
            trump_hair.hairState = hoverStates.CLOSED

            // start tween
            var closeHead = maingame.add.tween(trump_hair).to({ angle: 0 }, 1250, tweenTypeOut, true)

            // reactivate the tilt tween when finished closing
            closeHead.onComplete.add(setImageInputs)
            break
    }
}

function loadHairMenu() {
    deleteTempImages()

    var timeToZoom = 450
    var needToZoom = true

    if (maingame.world.scale.x == 1)
        createZoom(timeToZoom, 3.2, 430, 0)
    else
        needToZoom = false

    maingame.add.tween(black_2).to({ alpha: 1 }, timeToZoom, Phaser.Easing.Cubic.In, true)
    maingame.add.tween(flagUS).to({ alpha: 1 }, timeToZoom, Phaser.Easing.Cubic.In, true)

    tempImages.push(maingame.add.sprite(430, 30, 'text_back'))
    tempImages.push(maingame.add.sprite(480, 55, 'text_trumps_world'))
    tempImages.push(maingame.add.sprite(500, 130, 'trumps_wall'))
    tempImages.push(maingame.add.sprite(510, 190, 'medipack'))
    tempImages.push(maingame.add.sprite(625, 192, 'trump_nato'))
    tempImages.push(maingame.add.sprite(623, 105, 'moab'))

    tempImages[0].anchor.set(0, 1)
    tempImages[1].anchor.set(0, 1)
    tempImages[2].anchor.set(0, 1)
    tempImages[3].anchor.set(0, 1)
    tempImages[4].anchor.set(0, 1)
    tempImages[5].anchor.set(0, 1)

    var txtHairScale = 33.0 / tempImages[0].texture.width
    tempImages[0].scale.setTo(txtHairScale, txtHairScale)    
    tempImages[1].scale.setTo(0.04, 0.04)
    tempImages[2].scale.setTo(0.04, 0.04)
    tempImages[3].scale.setTo(0.08, 0.08)
    tempImages[4].scale.setTo(0.14, 0.14)
    tempImages[5].scale.setTo(0.1, 0.1)

    if(needToZoom){
        tempImages[0].alpha = 0
        tempImages[1].alpha = 0
        tempImages[2].alpha = 0
        tempImages[3].alpha = 0
        tempImages[4].alpha = 0
        tempImages[5].alpha = 0
    }

    tempImages[0].inputEnabled = true
    tempImages[2].inputEnabled = true
    tempImages[4].inputEnabled = true
    tempImages[3].inputEnabled = true
    tempImages[5].inputEnabled = true

    tempImages[0].events.onInputDown.add(loadMainPage, this)
    tempImages[2].events.onInputDown.add(loadWallInfo, this)
    tempImages[3].events.onInputDown.add(loadMedipackInfo, this)
    tempImages[4].events.onInputDown.add(loadNatoInfo, this)
    tempImages[5].events.onInputDown.add(loadMoabInfo, this)

    if(needToZoom){
        maingame.add.tween(tempImages[0]).to({ alpha: 1 }, timeToZoom, Phaser.Easing.Cubic.In, true)
        maingame.add.tween(tempImages[1]).to({ alpha: 1 }, timeToZoom, Phaser.Easing.Cubic.In, true)
        maingame.add.tween(tempImages[2]).to({ alpha: 1 }, timeToZoom, Phaser.Easing.Cubic.In, true)
        maingame.add.tween(tempImages[3]).to({ alpha: 1 }, timeToZoom, Phaser.Easing.Cubic.In, true)
        maingame.add.tween(tempImages[4]).to({ alpha: 1 }, timeToZoom, Phaser.Easing.Cubic.In, true)
        maingame.add.tween(tempImages[5]).to({ alpha: 1 }, timeToZoom, Phaser.Easing.Cubic.In, true)
    }
}

function addABackWithInput(){
    tempImages.push(maingame.add.sprite(430, 50, 'text_back'))
    tempImages[tempImages.length-1].inputEnabled = true
    tempImages[tempImages.length-1].events.onInputDown.add(loadMainPage, this)
    tempImages[tempImages.length-1].scale.setTo(0.2, 0.2)    
    tempImages[tempImages.length-1].anchor.set(0, 1)

    return tempImages[tempImages.length-1]
}

function moveMouth() {
    let moveX = 10
    let moveY = 90

    var openMouth = maingame.add.tween(trump_mouth).to({ x: 559, y: 620 }, 750, Phaser.Easing.Back.Out, true)

    loadMouthMenu()

    deleteTweenEvents(trump_mouth)
}

function loadMouthMenu() {
    var timeToZoom = 250

    trump_mouth.inputEnabled = false

    if (maingame.world.scale.x == 1)
        createZoom(timeToZoom, 1.2, 150, 113)
    else
        timeToZoom = 1

    setTimeout(function(){
        addImagesToMouth()

        showTactfulTweets() 
    }, timeToZoom)
}

function addImagesToMouth() {
    tempImages.push(maingame.add.sprite(160, 120, 'white'))

    tempImages[0].width = maingame.width * 0.815
    tempImages[0].height = maingame.height * 0.81

    tempImages.push(maingame.add.sprite(250, 125, 'text_tactful_tweets'))
    tempImages[1].scale.setTo(0.08, 0.08)

    tempImages.push(maingame.add.sprite(900, 125, 'text_back'))
    tempImages[2].scale.setTo(0.7, 0.7)
    enableInputWithPixelPerfect(tempImages[2])
    tempImages[2].events.onInputDown.add(loadMainPage)
}

function clickEyes() {
    deleteTweenEvents(eyes_sauron)

    deleteTempImages()
    loadEyeMenu()

    eyes_sauron.alpha = 1
}

function loadEyeMenu(){
    var timeToZoom = 250

    eyes_sauron.inputEnabled = false

    if (maingame.world.scale.x == 1)
        createZoom(timeToZoom, 1.2, 120, 13)
    else
        timeToZoom = 1

    setTimeout(function(){
        addBackgroundHeadingBack()
        addImagesToEyes()
    }, timeToZoom)
}

function addBackgroundHeadingBack(){
    tempImages.push(maingame.add.sprite(122, 20, 'white'))  
    tempImages.push(maingame.add.sprite(300, 15, 'text_on_camera'))
    tempImages.push(maingame.add.sprite(870, 25, 'text_back'))

    tempImages[0].width = maingame.width * 0.815
    tempImages[0].height = maingame.height * 0.81
    tempImages[1].scale.setTo(0.18, 0.18)
    tempImages[2].scale.setTo(0.7, 0.7)

    enableInputWithPixelPerfect(tempImages[2])
    tempImages[2].events.onInputDown.add(loadMainPage)
}

function addImagesToEyes(){
    tempImages.push(maingame.add.sprite(772, 499, 'thumb_wwe'))
    tempImages.push(maingame.add.sprite(772, 187, 'thumb_loan'))
    tempImages.push(maingame.add.sprite(305, 499, 'thumb_climate'))
    tempImages.push(maingame.add.sprite(305, 187, 'thumb_grab'))
    tempImages.push(maingame.add.sprite(539, 357, 'thumb_dating'))
    
    for (var i = 3; i < tempImages.length; i++) {
        var scale = 170 / tempImages[i].height

        var randRot = Math.random() * 20 - 10
        var randX = Math.random() * 10 - 5
        var randY = Math.random() * 10 - 5

        tempImages[i].angle = randRot
        tempImages[i].scale.setTo(scale, scale)

        tempImages[i].x = tempImages[i].x + randX
        tempImages[i].y = tempImages[i].y + randY

        tempImages[i].anchor.set(0.5, 0.5)

        tempImages[i].inputEnabled = true
        tempImages[i].events.onInputDown.add(addVideoToEyes, this)
    }
}

function addVideoToEyes(sender){

    var endLength = tempImages.length - 5
    for (var i = tempImages.length - 1; i >= endLength; i--) {
        if(tempImages[i].key != sender.key){
            destroyObject(tempImages[i])
            tempImages.splice(i, 1)
        }
    }

    tempImages[2].events.onInputDown.removeAll()
    tempImages[2].events.onInputDown.add(function(){
        clickEyes()
        hideAllVideos()
    }, this)

    var timeToZoom = 400

    var newScale = 450 / sender.height
    var newHeight = sender.height * newScale
    var newWidth = sender.width * newScale

    var sizeTween = maingame.add.tween(sender).to({x: 537, y: 340, angle:0, height: newHeight, width: newWidth}, timeToZoom, Phaser.Easing.Sinusoidal.In, true)

    sizeTween.onComplete.add(function(){
        showAndPlayVideo(sender.key)
    })
}

function clickTv() {
    var timeToZoom = 500
    
    createZoom(timeToZoom, 4.975, 805, 29)

    loadTvImages(timeToZoom)
    
    deleteTweenEvents(tv)

    flicker.animations.stop()

    tv.inputEnabled = false
}

function loadTvImages(timeToZoom = 100){
    tempImages.push(maingame.add.sprite(971, 50, 'text_back'))    
    tempImages.push(maingame.add.sprite(858, 28, 'text_trumps_commercials'))
    tempImages.push(maingame.add.sprite(848, 62, 'thumb_pepsi'))
    tempImages.push(maingame.add.sprite(906, 62, 'thumb_game'))
    tempImages.push(maingame.add.sprite(842, 92, 'thumb_pizza95'))
    tempImages.push(maingame.add.sprite(888, 94, 'thumb_pizza00'))
    tempImages.push(maingame.add.sprite(830, 122, 'thumb_mcDonalds'))
    tempImages.push(maingame.add.sprite(898, 122, 'thumb_visa'))

    enableInputWithPixelPerfect(tempImages[0])
    tempImages[0].events.onInputDown.add(loadMainPage, this)

    tempImages[2].angle = -2
    tempImages[3].angle = 5
    tempImages[4].angle = 8
    tempImages[5].angle = -4
    tempImages[6].angle = 4
    tempImages[7].angle = -2

    var txtTvScale = 28.0 / tempImages[0].texture.width
    tempImages[0].scale.setTo(txtTvScale, txtTvScale)
    tempImages[1].scale.setTo(0.032, 0.032)
    tempImages[2].height = tempImages[3].height = tempImages[4].height = tempImages[5].height = tempImages[6].height = tempImages[7].height = 27
    tempImages[2].width = tempImages[3].width = tempImages[4].width = tempImages[5].width = tempImages[6].width = tempImages[7].width = 36
    
    tempImages[0].alpha = 0
    tempImages[1].alpha = 0
    tempImages[2].alpha = 0
    tempImages[3].alpha = 0
    tempImages[4].alpha = 0
    tempImages[5].alpha = 0
    tempImages[6].alpha = 0
    tempImages[7].alpha = 0

    maingame.add.tween(tempImages[0]).to({ alpha: 1 }, timeToZoom, Phaser.Easing.Cubic.In, true)
    maingame.add.tween(tempImages[1]).to({ alpha: 1 }, timeToZoom, Phaser.Easing.Cubic.In, true)
    maingame.add.tween(tempImages[2]).to({ alpha: 1 }, timeToZoom, Phaser.Easing.Cubic.In, true)
    maingame.add.tween(tempImages[3]).to({ alpha: 1 }, timeToZoom, Phaser.Easing.Cubic.In, true)
    maingame.add.tween(tempImages[4]).to({ alpha: 1 }, timeToZoom, Phaser.Easing.Cubic.In, true)
    maingame.add.tween(tempImages[5]).to({ alpha: 1 }, timeToZoom, Phaser.Easing.Cubic.In, true)
    maingame.add.tween(tempImages[6]).to({ alpha: 1 }, timeToZoom, Phaser.Easing.Cubic.In, true)
    maingame.add.tween(tempImages[7]).to({ alpha: 1 }, timeToZoom, Phaser.Easing.Cubic.In, true)

    enableInputWithPixelPerfect(tempImages[2])
    enableInputWithPixelPerfect(tempImages[3])
    enableInputWithPixelPerfect(tempImages[4])
    enableInputWithPixelPerfect(tempImages[5])
    enableInputWithPixelPerfect(tempImages[6])
    enableInputWithPixelPerfect(tempImages[7])

    tempImages[2].events.onInputDown.add(showVideoInTv)
    tempImages[3].events.onInputDown.add(showVideoInTv)
    tempImages[4].events.onInputDown.add(showVideoInTv)
    tempImages[5].events.onInputDown.add(showVideoInTv)
    tempImages[6].events.onInputDown.add(showVideoInTv)
    tempImages[7].events.onInputDown.add(showVideoInTv)
}

function showVideoInTv(sender){
    deleteTempImages()

    var videoName = sender.key.replace('thumb', 'com')

    var containerNumber = tempImages.length

    tempImages.push(maingame.add.video(videoName))

    var scale3 = 105 / tempImages[containerNumber].texture.height
    tempImages[containerNumber].actualVideo = tempImages[containerNumber].addToWorld(886, 54, 0, 0, scale3, scale3)
    tempImages[containerNumber].actualVideo.anchor.set(0.5, 0)
    tempImages[containerNumber].volume = 0.25
    maingame.world.swap(tv, tempImages[containerNumber].actualVideo)
    tempImages[containerNumber].currentTime = 0
    tempImages[containerNumber].play()

    tempImages[containerNumber].actualVideo.inputEnabled = true
    tempImages[containerNumber].actualVideo.events.onInputDown.add(function() {
        if (tempImages[containerNumber].progress == 1)
            tempImages[containerNumber].play()
        else
            tempImages[containerNumber].paused = (tempImages[containerNumber].paused) ? false : true;
    }, this)

    tempImages.push(maingame.add.sprite(971, 50, 'text_back'))   
    var txtTvScale = 28.0 / tempImages[containerNumber+1].texture.width
    tempImages[containerNumber+1].scale.setTo(txtTvScale, txtTvScale)
    enableInputWithPixelPerfect(tempImages[containerNumber+1])
    tempImages[containerNumber+1].events.onInputDown.add(function(){
        deleteTempImages()
        loadTvImages(1)  
    }, this)
}

function loadTrumpInfo() {
    var timeToZoom = 400

    tempImages.push(maingame.add.sprite(195, 195, 'text_back'))
    tempImages[0].angle = 4
    var txtInfoScale = 20 / tempImages[0].texture.width
    tempImages[0].scale.setTo(txtInfoScale, txtInfoScale)
    tempImages[0].alpha = 0
    enableInputWithPixelPerfect(tempImages[0])
    tempImages[0].inputEnabled = false
    tempImages[0].events.onInputDown.add(loadMainPage, this)

    maingame.add.tween(file_folder).to({ x: 17, y: 140 }, timeToZoom * 5, Phaser.Easing.Cubic.Out, true)
    maingame.add.tween(file_folder).to({ alpha: 0 }, timeToZoom * 1.5, Phaser.Easing.Quintic.InOut, true)

    maingame.add.tween(trump_file).to({ x: 17, y: 180, angle: 0, width: trump_file.texture.width * 0.125, height: trump_file.texture.height * 0.125 }, timeToZoom * 5, Phaser.Easing.Cubic.Out, true)
    maingame.add.tween(trump_file).to({ alpha: 1 }, timeToZoom * 1.5, Phaser.Easing.Quintic.InOut, true)
    
    maingame.add.tween(tempImages[0]).to({ x: 22, y: 16 }, timeToZoom * 5, Phaser.Easing.Cubic.Out, true)
    maingame.add.tween(tempImages[0]).to({ alpha: 1 }, timeToZoom * 5, Phaser.Easing.Cubic.In, true).onComplete.add(function() {
        tempImages[0].inputEnabled = true
    })

    createZoom(timeToZoom, 4.35, 20, 11)

    deleteTweenEvents(trump_file)
}

function prepareBackgroundInTrumpsWorld(duration) {
    deleteTempImages()

    addWhiteToHead()

    addBackInTrumpsWorld(duration)
}

function addBackInTrumpsWorld(duration = 500) {
    backInTrumpsWorld = maingame.add.sprite(705, 30, 'text_back')

    var scale = 33.0 / backInTrumpsWorld.texture.width
    backInTrumpsWorld.scale.setTo(scale, scale)

    enableInputWithPixelPerfect(backInTrumpsWorld)

    backInTrumpsWorld.anchor.set(0, 1)

    backInTrumpsWorld.alpha = 1

    backInTrumpsWorld.events.onInputDown.add(function() {
        hideBuildWall()
        loadHairMenu()
    }, this)
}

function addWhiteToHead() {
    white_background = maingame.add.sprite(427, 5, 'white')

    white_background.width = 309
    white_background.height = 230
}

function loadMedipackInfo(sender) {
    var duration = 500

    prepareBackgroundInTrumpsWorld(duration)

    head_text_image = maingame.add.sprite(423, 8, 'head_health_text')
    head_text_image.scale.set(0.15, 0.15)

    var imageWidth = 130

    tempImages.push(maingame.add.sprite(590, 30, 'medipack'))
    var scale1 = imageWidth / tempImages[0].texture.width
    tempImages[0].scale.set(scale1, scale1)

    tempImages.push(maingame.add.sprite(600, 150, 'trump_cite_1'))
    var scale2 = imageWidth / tempImages[1].texture.width
    tempImages[1].scale.set(scale2, scale2)
}

function loadWallInfo(sender) {
    var duration = 500

    prepareBackgroundInTrumpsWorld(duration)

    head_text_image = maingame.add.sprite(423, 8, 'head_wall_text')
    head_text_image.scale.set(0.15, 0.15)

    tempImages.push(maingame.add.sprite(600, 12, 'trumps_wall'))
    var scale1 = 120 / tempImages[0].texture.width
    tempImages[0].scale.set(scale1, scale1)

    tempImages.push(maingame.add.sprite(620, 175, 'sound_icon'))
    var scale2 = 40 / tempImages[1].texture.width
    tempImages[1].scale.set(scale2, scale2)

    tempImages[1].inputEnabled = true
    tempImages[1].events.onInputDown.add(function(){
        greatWallSong.volume = 0.25

        if(greatWallSong.isPlaying)
            greatWallSong.pause()
        else{
            greatWallSong.play(null, greatWallSong.pausedPosition/1000 + greatWallSong.position)
            if(greatWallSong.position >= 115) greatWallSong.play()
        }
    })

    showBuildWall()
}

function loadMoabInfo(sender) {
    var duration = 500

    prepareBackgroundInTrumpsWorld(duration)

    head_text_image = maingame.add.sprite(423, 8, 'head_moab_text')
    head_text_image.scale.set(0.15, 0.15)

    showSyriaTweets()

    var imageWidth = 130

    tempImages.push(maingame.add.sprite(600, 52, 'moab'))
    var scale1 = imageWidth / tempImages[0].texture.width
    tempImages[0].scale.set(scale1, scale1)

    tempImages.push(maingame.add.sprite(600, 145, 'america_first'))
    var scale2 = imageWidth / tempImages[1].texture.width
    tempImages[1].scale.set(scale2, scale2)
}

function loadNatoInfo(sender) {
    var duration = 500

    prepareBackgroundInTrumpsWorld(duration)

    head_text_image = maingame.add.sprite(423, 8, 'head_nato')
    head_text_image.scale.set(0.15, 0.15)

    tempImages.push(maingame.add.sprite(625,10, 'trump_nato'))
    tempImages[0].scale.setTo(0.14, 0.14)

    tempImages.push(maingame.add.sprite(600, 170, 'natogif'))
    tempImages[1].animations.add('nato')

    var scale = 1500 / tempImages[1].texture.width

    tempImages[1].width = tempImages[1].width * scale
    tempImages[1].height = tempImages[1].height * scale

    tempImages[1].animations.play('nato', 30, true)

    showNatoTweet()

}

function startNuke(){
    var nuke = maingame.add.sprite(0, 0, 'nuke') 

    var scale = maingame.width / nuke.texture.width

    nuke.width = maingame.width
    nuke.height = maingame.height

    nuke.animations.add('go')

    setTimeout(function(){
        nuke.animations.play('go', 15)
        setTimeout(function(){
            window.location.reload()//true)
        }, 9000)
    }, 100)
}

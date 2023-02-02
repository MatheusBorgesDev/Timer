import { buttonPlay, buttonPause, buttonStop, buttonSoundOn, buttonSoundOff, buttonSet } from "./elements.js"

export default function Events({
    controls,
    timer,
    sound
}){
    
    buttonPlay.addEventListener("click", function() {
        controls.play()
        timer.countdown()
        sound.pressButton()
    })
    
    buttonPause.addEventListener("click", function() {
        controls.pause()
        timer.hold()
        sound.pressButton()
    })
    
    buttonStop.addEventListener("click", function(){
        controls.reset()
        timer.reset()
        sound.pressButton()
    })
    
    buttonSoundOn.addEventListener("click", function(){
        buttonSoundOn.classList.add("hide")
        buttonSoundOff.classList.remove("hide")
        sound.bgAudioStop()
    })
    
    buttonSoundOff.addEventListener("click", function(){
        buttonSoundOff.classList.add("hide")
        buttonSoundOn.classList.remove("hide")
        sound.bgAudioStart()
    })
    
    buttonSet.addEventListener("click", function() {
        let newMinutes = controls.getMinutes()
    
        if (!newMinutes) {
            timer.reset()
            return
        }
    
        timer.updateDisplay(newMinutes, 0)
        timer.updateMinutes(newMinutes)
    })
}

    

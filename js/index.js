import Controls from "./controls.js"
import Timer from "./timer.js"
import Events from "./events.js"
import {
    buttonPause,
    buttonPlay,
    buttonSet,
    buttonStop,
    minutesDisplay,
    secondsDisplay
} from "./elements.js"
import Sound from "./sounds.js"

const controls = Controls({
    buttonPlay,
    buttonPause,
    buttonStop,
    buttonSet,
})

const timer = Timer ({
    minutesDisplay,
    secondsDisplay,
    resetControls: controls.reset,
})

const sound = Sound()

Events({controls, timer, sound})

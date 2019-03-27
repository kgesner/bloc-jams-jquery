1. This file declares a class, `Player`, instantiates it, and assigns it to a global `player` variable.
2. The `Player` class contains four methods:
    - `constructor()`
    - `playPause()`
    - `skipTo()`
    - `setVolume()`
3. The `constructor()` method sets initial values for the `currentlyPlaying`, `playState`, `volume`, and `soundObject` properties.
    - `currentlyPlaying` is set to the first item in `album.songs`.
    -  The initial `playState` is `"stopped"`.
    -  The `volume` is set to the number `80`.
    -  The `soundObject` instantiates a new `buzz.sound` object using the `soundFileUrl` property of `this.currentlyPlaying`. The `buzz` variable doesn't appear to be initialized here, so presumably it's a dependency loaded elsewhere.
4. The `playPause()` method accepts one parameter, `song`. It sets it to `this.currentlyPlaying` by default. It checks to see if `this.currentlyPlaying` is different from `song`, and if so, it:
    - Stops the `soundObject` property.
    - Removes the `"playing"` and `"paused"` classes from the `element` property of `this.currentlyPlaying`.
    - Sets `this.currentlyPlaying` to the function's parameter, `song`.
    - Changes the `playState` property to `"stopped"`.
    - Instantiates a new sound object using `this.currentlyPlaying`, which was just updated to `song`.
    - Checks to see if `this.playState` has paused or stopped, and if so it:
      -- Sets `this.soundObject.setVolume` to `this.volume`
      -- Changes `soundObject` to `play`
      -- Changes `this.playState` to `playing`
      -- Removes paused class from `playState` and adds `playing` class
      OR else
      -- Changes soundObject to `pause`
      -- Changes `playState` to `paused`
      -- Removes `playing` class from `currentlyPlaying.element` and adds `paused` class


5. skipTo a certain percentage through the song playing
    - if `playState` isn't playing, leave function
    - If `playState` is `playing`, `this.soundObject.setTime` is set to the percentage of the `soundObject` played multiplied by the total duration of `soundObject`


6. setVolume percentage of total possible Volume
    - this.volume is equal to `setVolume`
    - The volume of `this.soundObject.setVolume` is the percent of `setVolume`

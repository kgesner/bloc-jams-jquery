//class Helper = function() {
//  new helper();
//  this.playPauseAndUpdate(song).player.playPause(song);
//  }

//  update the totalTime


class Helper {
  playPauseAndUpdate(song) {
    player.playPause(song);
    const totalTime = player.getDuration();
    $('#time-control .total-time').text( totalTime );
  };
}

const helper = new Helper();


//Create class Helper and instantiate class as variable
//helper.

//Add method to Helper called playPauseAndUpdate that takes
//parameter song

//method should call player.playPause (passing the song
//parameter)and update total time.

//Replace every call of player.playPause with
//helper.playPauseAndUpdate

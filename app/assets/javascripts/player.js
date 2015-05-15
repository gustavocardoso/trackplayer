(function(window, $) {
  'use strict';
  
  var Player = function(player) {
    this.trackPlayer         = document.querySelector(player);
    this.powerButton         = this.trackPlayer.querySelector('.power');
    this.playButton          = this.trackPlayer.querySelector('.play');
    this.playButtonIcon      = this.playButton.querySelector('.fa');
    this.rewindButton        = this.trackPlayer.querySelector('.rewind');
    this.tracksContainer     = this.trackPlayer.querySelector('.tracks-list');
    this.songTitleDisplay    = this.trackPlayer.querySelector('.song-title-display');
    this.songArtistDisplay   = this.trackPlayer.querySelector('.song-artist-display');
    this.songDurationDisplay = this.trackPlayer.querySelector('.song-duration-display');
    this.songBpmDisplay      = this.trackPlayer.querySelector('.song-bpm-display');
    this.songElapsedDisplay  = this.trackPlayer.querySelector('.song-elapsed-display');
    this.player              = this.trackPlayer.querySelector('#player');
    this.barHolder           = this.trackPlayer.querySelector('.elapsed-time-bar-holder');
    this.bar                 = this.barHolder.querySelector('.elapsed-time-bar');
    this.barElapsedTime      = this.barHolder.querySelector('.elapsed-time');
    this.barTimeLeft         = this.barHolder.querySelector('.time-left');
    this.tracksTable         = this.trackPlayer.querySelectorAll('.tracks-table');
    this.tracks              = this.trackPlayer.querySelectorAll('.track');
    this.playing             = false;
    this.context             = this.bar.getContext('2d');
    this.keys                = {48: 10, 49: 1, 50: 2, 51: 3, 52: 4, 53: 5, 54: 6, 55: 7, 56: 8, 57: 9};
  };

  Player.prototype = {

    start: function() {

      console.log('Start!');
      
      var obj = this;

      obj.powerButton.addEventListener('click', function(event) {obj.power(obj)});

      window.addEventListener('keyup', function(event) {
        if(event.keyCode == 80) {
          obj.power(obj);
        }
      });

    },

    power: function(obj) {
      
      console.log('Power!');

      if(obj.trackPlayer.classList.contains("power-off")) {
        this.powerOn(obj);
      } else if(obj.trackPlayer.classList.contains("power-on")) {
        this.powerOff(obj);
      }

    },

    powerOn: function(obj) {

      console.log('Power on!');

      obj.trackPlayer.classList.remove('power-off');
      obj.trackPlayer.classList.add("power-on");

      $(obj.tracksTable).show();

      for(var i = 0; i < obj.tracks.length; i++) {
        obj.tracks[i].addEventListener('click', function(e) {
          e.preventDefault();
          obj.unsetTrack(obj);
          obj.setTrack(e.target, obj);
        }, false);
      }

      obj.playButton.addEventListener('click', function(e) {
        e.preventDefault();
        obj.trackControl(e, obj);
      }, false);

      obj.rewindButton.addEventListener('click', function(e) {
        e.preventDefault();
        obj.rewindTrack(obj);
      }, false);

      obj.player.addEventListener('loadeddata', function(e) {
        obj.setElapsedTimeBar(obj, '#444', true, 245);
      }, false);

      obj.player.addEventListener('timeupdate', function(e) {
        obj.setElapsedTime(obj);
        obj.setElapsedTimeBar(obj, '#ccc', false);
      }, false);

      document.addEventListener('keyup', function(e) {
        e.preventDefault();
        
        var key = e.keyCode;

        if(key == 32) {
          if(!obj.player.classList.contains('empty')) {
            if(!obj.playing) {
              obj.playTrack(obj);
              obj.playing = true;
            }else {
              obj.stopTrack(obj);
              obj.playing = false;
            }
          }
        }

        if(/^4[89]|5\d$/.test(key)) {
          var trackId = obj.keys[key];
          var track = document.querySelector('a[data-id="'+ trackId +'"]');
          if(track != null) {
            obj.unsetTrack(obj);
            obj.setTrack(track, obj);
          }
        }
      }, false);

    },

    powerOff: function(obj) {

      console.log('Power off!');
      obj.trackPlayer.classList.remove('power-on');
      obj.trackPlayer.classList.add('power-off');
      
      obj.player.pause();
      obj.trackPlayer.classList.remove("power-on");
      obj.unsetBar(obj);
      obj.unsetTrack(obj);

      $(obj.tracksTable).hide();
      
      obj.playButton.classList.remove('playing');
      obj.playButtonIcon.classList.add('fa-play');
      obj.playButtonIcon.classList.remove('fa-stop');

    },

    setTrack: function(track, obj) {

      console.log('Set track!');

      var info = track.dataset;

      obj.player.pause();
      
      obj.songTitleDisplay.innerHTML = info.title;
      obj.songArtistDisplay.innerHTML = info.artist;            
      obj.songBpmDisplay.innerHTML = info.bpm;
      obj.songDurationDisplay.innerHTML = info.duration;
      obj.songElapsedDisplay.innerHTML = "00:00";
      obj.barTimeLeft.innerHTML = "00:00";
      
      obj.playButton.classList.remove('playing');
      obj.playButtonIcon.classList.add('fa-play');
      obj.playButtonIcon.classList.remove('fa-stop');
      obj.playing = false;

      obj.player.src = info.filename;
      obj.player.classList.remove('empty');

    },

    unsetTrack: function(obj) {

      console.log('Unset track!');

      obj.player.src = '';
      obj.player.classList.add('empty');

      obj.songTitleDisplay.innerHTML = '';
      obj.songArtistDisplay.innerHTML = '';
      obj.songDurationDisplay.innerHTML = '00:00';
      obj.songBpmDisplay.innerHTML = '000';
      obj.songElapsedDisplay.innerHTML = '00:00';

    },

    trackControl: function(event, obj) {

      console.log('Track control!');

      if(!obj.player.classList.contains('empty')) {
        if(!obj.playing) {
          obj.playTrack(obj);
        }else {
          obj.stopTrack(obj);
        }
      }

    },

    playTrack: function(obj) {
      
      console.log('Play!'); 
      obj.player.play();
      obj.playButton.classList.add('playing');
      obj.playButtonIcon.classList.remove('fa-play');
      obj.playButtonIcon.classList.add('fa-stop');
      obj.playing = true;

    },

    stopTrack: function(obj) {

      console.log('Stop!');
      obj.player.pause();
      obj.playButton.classList.remove('playing');
      obj.playButtonIcon.classList.add('fa-play');
      obj.playButtonIcon.classList.remove('fa-stop');
      obj.playing = false;

    },

    rewindTrack: function(obj) {
      
        obj.player.pause();

        if(obj.player.currentTime > 0) {
          obj.player.currentTime = 0;
        }

        obj.player.load();

        obj.songElapsedDisplay.innerHTML = '00:00';

        obj.playButton.classList.remove('playing');
        obj.playButtonIcon.classList.add('fa-play');
        obj.playButtonIcon.classList.remove('fa-stop');
        obj.playing = false;
      
    },

    setElapsedTime: function(obj) {
      console.log('Set elapsed time!');

      var songDuration = parseInt(obj.player.duration);
      var songCurrentTime = parseInt(obj.player.currentTime);
      var songTimeLeft = songDuration - songCurrentTime;
      var progressBarWidth = Math.floor((songCurrentTime / songDuration) * 245);
      var songSecondsLeft;
      var songMinutesLeft;
      var songTotalTimeLeft;
      var songCurrentSeconds;
      var songCurrentMinutes;
      
      songSecondsLeft = songTimeLeft % 60;
      songMinutesLeft = Math.floor(songTimeLeft / 60) % 60;
      songTotalTimeLeft = (songMinutesLeft < 10 ? "0" + songMinutesLeft : songMinutesLeft) + ":" + (songSecondsLeft < 10 ? "0" + songSecondsLeft : songSecondsLeft);

      songCurrentMinutes = Math.floor(songCurrentTime / 60);
      songCurrentSeconds = Math.floor(songCurrentTime - songCurrentMinutes * 60);
      
      obj.songElapsedDisplay.innerHTML = "- " + songTotalTimeLeft;
      obj.barElapsedTime.innerHTML = (songCurrentMinutes < 10 ? "0" + songCurrentMinutes : songCurrentMinutes) + ":" + (songCurrentSeconds < 10 ? "0" + songCurrentSeconds : songCurrentSeconds);;
      obj.barTimeLeft.innerHTML = "- " + songTotalTimeLeft;
      obj.setElapsedTimeBar(obj, '#999', false, progressBarWidth);
    },

    setElapsedTimeBar: function(obj, color, load, width) {
      console.log('Set bar!');

      var width = width || 0;

      obj.context.fillStyle = color;

      if(load) {
        obj.context.fillRect(0, 0, width, 15);
      }else {
        obj.context.fillRect(0, 0, width, 15);
      }

    },

    unsetBar: function(obj) {
      obj.context.clearRect(0, 0, 245, 15);
    }
  }

  window.Player = Player;

})(window, $);
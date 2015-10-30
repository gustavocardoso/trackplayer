(function(window) {
  'use strict';
  
  var Player = function(player) {
    this.trackPlayer          = document.querySelector(player);
    this.powerButton          = this.trackPlayer.querySelector('.power');
    this.playButton           = this.trackPlayer.querySelector('.play');
    this.playButtonIcon       = this.playButton.querySelector('.fa');
    this.rewindButton         = this.trackPlayer.querySelector('.rewind');
    this.tracksContainer      = this.trackPlayer.querySelector('.tracks-list');
    this.playerDisplay        = this.trackPlayer.querySelector('.player-display');
    this.songTitleDisplay     = this.trackPlayer.querySelector('.song-title-display');
    this.songArtistDisplay    = this.trackPlayer.querySelector('.song-artist-display');
    this.songDurationDisplay  = this.trackPlayer.querySelector('.song-duration-display');
    this.songBpmDisplay       = this.trackPlayer.querySelector('.song-bpm-display');
    this.songElapsedDisplay   = this.trackPlayer.querySelector('.song-elapsed-display');
    this.player               = this.trackPlayer.querySelector('#player');
    this.barHolder            = this.trackPlayer.querySelector('.elapsed-time-bar-holder');
    this.bar                  = this.barHolder.querySelector('.elapsed-time-bar');
    this.barElapsedTime       = this.barHolder.querySelector('.elapsed-time');
    this.barTimeLeft          = this.barHolder.querySelector('.time-left');
    this.tracksTable          = this.trackPlayer.querySelector('.tracks-table');
    this.tracks               = this.trackPlayer.querySelectorAll('.track');
    this.context              = this.bar.getContext('2d');
    this.volumeSlider         = this.trackPlayer.querySelector('.volume-slider');
    this.tracksVolumeSlideres = this.trackPlayer.querySelectorAll('.track-volume-slider');
    this.defaultVolume        = 50;
    this.keys                 = {48: 10, 49: 1, 50: 2, 51: 3, 52: 4, 53: 5, 54: 6, 55: 7, 56: 8, 57: 9};
  };

  Player.prototype = {

    start: function() {
      
      var obj = this;

      obj.powerButton.addEventListener('click', function(event) {obj.power(obj)});

      window.addEventListener('keyup', function(event) {
        if(event.keyCode == 80) {
          obj.power(obj);
        }
      });

    },

    power: function(obj) {

      if(obj.trackPlayer.classList.contains("power-off")) {
        this.powerOn(obj);
      } else if(obj.trackPlayer.classList.contains("power-on")) {
        this.powerOff(obj);
      }

    },

    powerOn: function(obj) {

      obj.trackPlayer.classList.remove('power-off');
      obj.trackPlayer.classList.add("power-on");

      obj.volumeSlider.value = obj.defaultVolume;
      obj.setVolume(obj, obj.defaultVolume);
      obj.tracksTable.classList.add('show');

      for(var i = 0; i < obj.tracks.length; i++) {
        obj.tracks[i].addEventListener('click', function(e) {
          e.preventDefault();
          obj.unsetTrack(obj);
          obj.setTrack(e.target, obj);
        }, false);
      }

      for(var i = 0; i < obj.tracksVolumeSlideres.length; i++) {
        obj.tracksVolumeSlideres[i].addEventListener('change', function(e) {
          e.preventDefault();
          obj.setTrackVolume(this)
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

      obj.volumeSlider.addEventListener('change', function(e) {
        obj.setVolume(obj, this.value);
      }, false);

      document.addEventListener('keyup', function(e) {
        e.preventDefault();
        
        var key = e.keyCode;

        if(key == 32) {
          if(!obj.player.classList.contains('empty')) {
            if(obj.player.paused) {
              obj.playTrack(obj);
            }else {
              obj.stopTrack(obj);
            }
          }
        }

        if(key == 38) {
          var volume = parseInt(obj.volumeSlider.value);
          obj.volumeSlider.value = volume;
          obj.volumeUp(obj, volume);
        }

        if(key == 40) {
          var volume = parseInt(obj.volumeSlider.value);
          obj.volumeSlider.value = volume;
          obj.volumeDown(obj, volume);
        }

        if(key == 82) {
          obj.rewindTrack(obj);
        }

        if(/^4[89]|5\d$/.test(key)) {
          if(obj.trackPlayer.classList.contains("power-on")) {
            var trackId = obj.keys[key];
            var track = document.querySelector('a[data-id="'+ trackId +'"]') || null;
            
            obj.unsetTrack(obj);

            if(track != null) {
              obj.setTrack(track, obj);
            }
          }
        }
      }, false);

    },

    powerOff: function(obj) {

      obj.trackPlayer.classList.remove('power-on');
      obj.trackPlayer.classList.add('power-off');

      obj.volumeSlider.value = 0;
      
      obj.player.pause();
      obj.trackPlayer.classList.remove("power-on");
      obj.unsetBar(obj);
      obj.unsetTrack(obj);

      obj.tracksTable.classList.remove('show');
      
      obj.playButton.classList.remove('playing');
      obj.playButtonIcon.classList.add('fa-play');
      obj.playButtonIcon.classList.remove('fa-stop');

    },

    setTrack: function(track, obj) {

      var info = track.dataset;
      var trackVolume = parseInt(document.querySelector("[data-trackid='"+ info.referenceid +"']").value);

      obj.player.pause();
      
      obj.songTitleDisplay.innerHTML = info.title;
      obj.playerDisplay.classList.add('animate-blink');
      obj.songArtistDisplay.innerHTML = info.artist;
      obj.songBpmDisplay.innerHTML = info.bpm;
      obj.songDurationDisplay.innerHTML = info.duration;
      obj.songElapsedDisplay.innerHTML = "00:00";
      obj.barTimeLeft.innerHTML = "00:00";
      
      obj.playButton.classList.remove('playing');
      obj.playButtonIcon.classList.add('fa-play');
      obj.playButtonIcon.classList.remove('fa-stop');

      obj.player.src = info.filename;
      obj.player.classList.remove('empty');

      obj.setVolume(obj, trackVolume);
      obj.volumeSlider.value = trackVolume;

    },

    unsetTrack: function(obj) {

      obj.player.src = '';
      obj.player.classList.add('empty');
      obj.songTitleDisplay.innerHTML = '';
      obj.songArtistDisplay.innerHTML = '';
      obj.songDurationDisplay.innerHTML = '00:00';
      obj.songBpmDisplay.innerHTML = '000';
      obj.songElapsedDisplay.innerHTML = '00:00';
      obj.playerDisplay.classList.remove('animate-blink');

    },

    trackControl: function(event, obj) {

      if(!obj.player.classList.contains('empty')) {
        if(obj.player.paused) {
          obj.playTrack(obj);
        }else {
          obj.stopTrack(obj);
        }
      }

    },

    playTrack: function(obj) {
      
      obj.player.play();
      obj.playButton.classList.add('playing');
      obj.playButtonIcon.classList.remove('fa-play');
      obj.playButtonIcon.classList.add('fa-stop');

    },

    stopTrack: function(obj) {

      obj.player.pause();
      obj.playButton.classList.remove('playing');
      obj.playButtonIcon.classList.add('fa-play');
      obj.playButtonIcon.classList.remove('fa-stop');

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
      
    },

    setElapsedTime: function(obj) {

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
      
      obj.songElapsedDisplay.innerHTML = songTotalTimeLeft;
      obj.barElapsedTime.innerHTML = (songCurrentMinutes < 10 ? "0" + songCurrentMinutes : songCurrentMinutes) + ":" + (songCurrentSeconds < 10 ? "0" + songCurrentSeconds : songCurrentSeconds);;
      obj.barTimeLeft.innerHTML = "- " + songTotalTimeLeft;
      obj.setElapsedTimeBar(obj, '#999', false, progressBarWidth);
    },

    setElapsedTimeBar: function(obj, color, load, width) {

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
    },

    setVolume: function(obj, volume) {
      obj.player.volume = volume / 100;
    },

    volumeUp: function(obj) {
      var volume = parseInt(obj.volumeSlider.value);
      
      if(volume < 100) {
        var originalVolume = volume;
        obj.volumeSlider.value = originalVolume + 1;
        obj.setVolume(obj, volume);
      }
    },

    volumeDown: function(obj) {
      var volume = parseInt(obj.volumeSlider.value);

      if(volume > 0) {
        var originalVolume = volume;
        obj.volumeSlider.value = originalVolume - 1;
        obj.setVolume(obj, volume);
      }
    },

    setTrackVolume: function(track) {
      var trackId = track.dataset.trackid;
      var trackVolume = parseInt(track.value);
      var xcsrfToken = document.querySelector("meta[name='csrf-token']").getAttribute("content");
      var httpRequest;
      
      if(window.XMLHttpRequest) {
        httpRequest = new XMLHttpRequest();
      } else if(window.ActiveXObject) {
        httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
      }

      httpRequest.open("PUT", "/tracks/" + trackId, true);
      httpRequest.setRequestHeader("X-CSRF-Token", xcsrfToken);
      httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      httpRequest.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
      httpRequest.send("_method=patch&track[volume]=" + trackVolume + "&authenticity_token="+ xcsrfToken);

      httpRequest.onreadystatechange = function() {
        try {
          if(httpRequest.readyState === XMLHttpRequest.DONE) {
            if (httpRequest.status === 200) {
              console.log('Volume saved!');
            }
          }
        }
        catch(e) {
          alert('Caught Exception: ' + e.description);
        }
      }
    }
  }

  window.Player = Player;

})(window);
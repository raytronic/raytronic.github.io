

    // variables
    music_name = "Swing.mp3"
    let playBtn = document.querySelector("#btn");
    let rangebtn = document.querySelector("#rng");
    let musicName = document.querySelector("#mname");
    let isPlaying = false;
    let duration = 0;
    let currentTime = 0;

    // audio object

    let Song = new Audio();
    window.onload = playsong

    function playsong(){
        Song.src = music_name;   
       
        musicName.textContent = music_name;

        playBtn.addEventListener('click', function(){
            if (!isPlaying){
                Song.play();
                isPlaying = true;
                duration = Song.duration;
                rangebtn.max = duration;

            }else{
                Song.pause();
                isPlaying = false;
            }

            rangebtn.addEventListener('change', function(){
                Song.currentTime = rangebtn.value;
                
            })

            Song.addEventListener('timeupdate', function(){
                rangebtn.value = Song.currentTime;
            })

            Song.addEventListener('ended', function(){
                Song.currentTime = 0;
                Song.pause();
                isPlaying = false;
                rangebtn.value = 0;

            })

        })
    }


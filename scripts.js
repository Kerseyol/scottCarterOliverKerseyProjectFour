
const moodApp = {};

const finalSelection = {
    primaryMood: '',
    secondaryMood: ''
}
let clicks = 0;

moodApp.checkboxValue = function (){
    $('input[type=checkbox]').on('click', function(){
        
        if (clicks === 0){
            if(this.checked) {
                // audTag[1].currentTime = 0;
                // audTag[1].play();
                finalSelection.primaryMood = this.value;             
            } else if (!this.checked) {
                // audTag[1].currentTime = 0
                // audTag[1].play();
                delete finalSelection.primaryMood;
            }
        } else {
            if(this.checked) {
                // audTag[1].currentTime = 0;
                // audTag[1].play();
                finalSelection.secondaryMood = this.value;             
            } else if (!this.checked) {
                // audTag[1].currentTime = 0
                // audTag[1].play();
                delete finalSelection.secondaryMood;
            }
        }
        clicks++;
    })
}

moodApp.activate = function (){
    $('.button').on('click', function(){
        $('.gifContainer').empty();
        $.ajax({
            url:'https://api.giphy.com/v1/gifs/random',
            method: 'GET',
            dataType: 'json',
            data: {
                api_key: 'uOoh1YcEJMW5RZkHeRFcIl5PkkMudbnv',
                tag: `${finalSelection.primaryMood} ${finalSelection.secondaryMood}`
            }
        }).then(function(e){
                const embedUrl = e.data.embed_url;
                $('.gifContainer').append(`<div style="width:400px;height:400px;padding-bottom:0%;position:relative;"><iframe src="${embedUrl}" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed"></iframe></div>`)
        })
        // audTag[2].play();
        
        setTimeout(moodApp.switchReturn, 8000);
        })
        
    }

moodApp.switchReturn = function(){
    $('.gifContainer').empty(),
    ($('.gifContainer').append(`<div style="width:400px;height:400px;padding-bottom:0%;position:relative;"><iframe src="https://giphy.com/embed/1qpQwleotpxXG" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed"></iframe></div>`));
    
    const audTag = document.getElementsByTagName("audio");
    // audTag[0].play(); 
}

moodApp.reset = function(){
    $('.resetButton').on('click', function(){
        // audTag[3].play();
        $('input[type=checkbox]').each(function() { 
        this.checked = false; 
        finalSelection.primaryMood = '';
        }); 
    })
}   



moodApp.init = () => {
    moodApp.checkboxValue();
    moodApp.activate();
    moodApp.switchReturn();
    moodApp.reset();
}

$(function(){
    moodApp.init();
})
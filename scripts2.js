$(function(){


    
    $('input[type=checkbox]').one('click', function(){
        console.log(this.value);
        if(this.checked) {
            audTag[1].currentTime = 0;
            audTag[1].play();
            finalSelection.primaryMood = this.value;             
        } else if (!this.checked) {
            audTag[1].currentTime = 0
            audTag[1].play();
            delete finalSelection.primaryMood;
        }
    });
    
    $('.button').on('click'), function () {
        $('.gifContainer').empty(),
        $.ajax({
            url:'https://api.giphy.com/v1/gifs/random',
            method: 'GET',
            dataType: 'json',
            data: {
                api_key: 'uOoh1YcEJMW5RZkHeRFcIl5PkkMudbnv',
                tag: `${finalSelection.primaryMood} ${finalSelection.secondaryMood}`
            }
        }).then(function(e) {
            const embedUrl = e.data.embed_url;
            const url = e.data.url;
            $('.gifContainer').append(`<div style="width:400px;height:400px;padding-bottom:0%;position:relative;"><iframe src="${embedUrl}" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed"></iframe></div>`)
        })
        audTag[2].play();
        
        setTimeout(switchReturn, 8000);
    }
    switchReturn = function(){
        $('.gifContainer').empty(),
        ($('.gifContainer').append(`<div style="width:400px;height:400px;padding-bottom:0%;position:relative;"><iframe src="https://giphy.com/embed/1qpQwleotpxXG" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed"></iframe></div>`));
        const audTag = document.getElementsByTagName("audio");
        audTag[0].play();                          
            };
    
    reset = function(){
        audTag[3].play();
        $('input[type=checkbox]').each(function() { 
        this.checked = false; 
        }); 
    }   
})
const moodApp = {};

const finalSelection = {
    primaryMood: '',
    secondaryMood: ''
}
let clicks = 0;

const audTag = document.getElementsByTagName("audio");

moodApp.checkboxValue = function (){
    $('input[type=checkbox]').on('click', function(e){
        if (e.target.className === 'happy') {
            $('.happyMoods').toggleClass('hidden');
        } else if (e.target.className === 'sad'){
            $('.sadMoods').toggleClass('hidden');
            
        }

        if ($('.happyMoods').css('display') == 'none' && $('.sadMoods').css('display') == 'none'){
            $('.sad').attr("disabled", false);
            $('.happy').attr("disabled", false);
        }   else if ($('.happyMoods').css('display') == 'none') {
            $('.happy').attr("disabled", true);
            $('.sad').attr("disabled", false);
        } else if ($('.sadMoods').css('display') == 'none'){
            $('.happy').attr("disabled", false);
            $('.sad').attr("disabled", true);
        }


        if (clicks === 1){
            if(this.checked) {
                audTag[1].currentTime = 0;
                audTag[1].play();
                finalSelection.primaryMood = this.value;             
            } else if (!this.checked) {
                audTag[1].currentTime = 0
                audTag[1].play();
                delete finalSelection.primaryMood;
            }
        } else if (clicks > 1) {
            if(this.checked) {
                audTag[1].currentTime = 0;
                audTag[1].play();
                finalSelection.secondaryMood = this.value;             
            } else if (!this.checked) {
                audTag[1].currentTime = 0
                audTag[1].play();
                delete finalSelection.secondaryMood;
            }
        }   else {
            audTag[1].currentTime = 0;
            audTag[1].play();
        }
        clicks++;
    })
}

moodApp.activate = function (){
    $('.organKey').on('click', function(){
        $('.gifContainer').empty();
        $('.organKey').attr("disabled", true);
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
                $('.gifContainer').append(`<div style="width:300px;height:400px;padding-bottom:0%;position:relative;"><iframe src="${embedUrl}" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed"></iframe></div>`)
        })
        audTag[2].play();
        
        setTimeout(moodApp.switchReturn, 5000);
        setTimeout( function(){$('.organKey').attr("disabled", false);}, 5000);
        })
        
    }

    




moodApp.switchReturn = function(){
    $('.gifContainer').empty(),

    ($('.gifContainer').append(`<div style="width:300px;height:400px;padding-bottom:0%;position:relative;"><iframe src="https://giphy.com/embed/1qpQwleotpxXG" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed"></iframe></div>`));

    $('.happyMoods').addClass('hidden');
    $('.sadMoods').addClass('hidden');
    $('.happy').removeAttr("disabled");
    $('.sad').removeAttr("disabled");
    $('input[type=checkbox]').each(function() { 
        this.checked = false; 
        finalSelection.primaryMood = '';
        finalSelection.secondaryMood = '';
    }); 
    
   
    audTag[0].play(); 
}

moodApp.reset = function(){
    $('.happyMoods').addClass('hidden');
    $('.sadMoods').addClass('hidden');
    $('.happy').removeAttr("disabled");
    $('.sad').removeAttr("disabled");
    $('input[type=checkbox]').each(function() { 
        this.checked = false; 
        finalSelection.primaryMood = '';
        finalSelection.secondaryMood = '';
    }); 
}

moodApp.resetButton = function(){
    $('.resetButton').on('click', function(){
        audTag[3].play();
        moodApp.reset();
    })
}   

moodApp.init = () => {
    moodApp.checkboxValue();
    moodApp.activate();
    moodApp.switchReturn();
    moodApp.resetButton();
}

$(function(){
    moodApp.init();
})

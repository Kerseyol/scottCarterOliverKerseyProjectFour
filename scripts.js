$(function(){

    //button on click function event

    const button = {};

    // $('button').one('click', function(event){
    //     button.first = event.target.innerText
    // })

    // const generate = function(query){
    $('checkbox').one('click', function(event){

        button.first = event.target.innerText
                        // second: event.target.innerText
        })

        const button2 = {};
        console.log(button);

        $('.gifContainer').empty();
        // event.target.innerText;
        

        $.ajax({
            url:'https://api.giphy.com/v1/gifs/random',
            method: 'GET',
            dataType: 'json',
            data: {
                api_key: 'uOoh1YcEJMW5RZkHeRFcIl5PkkMudbnv',
                tag: button.first
            }
            }).then(function(e) {
            const embedUrl = e.data.embed_url;
            // const url = e.data.url;


//Append may still be used, but we have to clear the gifs  COMPLETED

//We need to fit the gif to container, remove black bars, additional PARTIALLY COMPLETE

//possibly put div on top of bars to remove visibility

//default image of eyeball as default monitor image COMPLETED

//look up embed stylings COMPLETED

//stretch goal: get rid of hover feature if possible

//add combination tags - keep the buttons

            $('.gifContainer').append(`<div style="width:400px;height:400px;padding-bottom:0%;position:relative;"><iframe src="${embedUrl}" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed"></iframe></div>`);
        });
        // <p><a href="${url}">via GIPHY</a></p>
        // allowFullScreen
    })    
// }-
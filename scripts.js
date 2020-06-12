

            //button on click function event

            // const button = {};
            const finalSelection = {};
            const audTag = document.getElementsByTagName("audio")

            // $('.happy').one('click', function(event){
            //     if ($(".happy").is(":checked"),
            //     console.log("Hey"))
            //     button.first = event.target.innerText
            
            $("input[name='happy']").change(function() {
                if(this.checked) {
                    finalSelection.primaryMood = 'happy';              
                } else if (!this.checked) {
                    delete finalSelection.primaryMood;
                    }                    
                console.log(finalSelection);
                }
            )
 
            $("input[name='cheerful']").change(function() {
                if(this.checked) {
                    finalSelection.secondaryMood = 'cheerful';              
                } else if (!this.checked) {
                    delete finalSelection.secondaryMood;
                    }                    
                console.log(finalSelection);
                }
            )

            $("input[name='sad']").change(function() {
                if(this.checked) {
                    finalSelection.primaryMood = 'sad';              
                } else if (!this.checked) {
                    delete finalSelection.primaryMood;
                    }                    
                console.log(finalSelection);
                }
            )
            
            $("input[name='humorous']").change(function() {
                if(this.checked) {
                    finalSelection.secondaryMood = 'humorous';              
                } else if (!this.checked) {
                    delete finalSelection.secondaryMood;
                    }                    
                console.log(finalSelection);
                }
            )
            //needs to take values from finalSelection object and search the API with them

            
            function activate() {
                $('.gifContainer').empty(),
                console.log("this is a bad repeat thing");
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
                audTag[0].play();
                
                setTimeout(switchReturn, 8000);
            }
            
            
            const switchReturn = function(){
                $('.gifContainer').empty(),
                ($('.gifContainer').append(`<div style="width:400px;height:400px;padding-bottom:0%;position:relative;"><iframe src="https://giphy.com/embed/1qpQwleotpxXG" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed"></iframe></div>`));
                const audTag = document.getElementsByTagName("audio");
                audTag[0].play();                          
                    };
                        


            // const audTag = document.getElementsByTagName("audio");
            //     $(activate).on("click", function (event) {
            //     event.preventDefault();
            //     audTag[0].play();
            //     }) 
            
            



                // const generate = function(query){
                //     $('.happy').one('click', function(event){
                //         button.first = event.target.innerText
                //         // second: event.target.innerText
                //     },
                    
                    
                    // )}


                // event.target.innerText;
                

                // const url = e.data.url;
//Append may still be used, but we have to clear the gifs  COMPLETED

//We need to fit the gif to container, remove black bars, additional PARTIALLY COMPLETE

//possibly put div on top of bars to remove visibility

//default image of eyeball as default monitor image COMPLETED

//look up embed stylings COMPLETED

//stretch goal: get rid of hover feature if possible

//add combination tags - keep the buttons

                
                // <p><a href="${url}">via GIPHY</a></p>
                // allowFullScreen
        
        
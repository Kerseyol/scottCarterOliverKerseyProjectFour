

            //button on click function event
            
            const finalSelection = {};
            const audTag = document.getElementsByTagName("audio");
            
            
            
            // const inputName = label.checkbox[value];
            
            
            // $('.happy').one('click', function(event){
                //     if ($(".happy").is(":checked"),
                //     console.log("Hey"))
                
                function activate() {
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
                
                $(document).ready(function(){
                    
                    $(".checkbox").change(function(){

                    });
                
                });
                
                function grabText() {
                    const finalSelection = document.getElementById("letsTryIt").innerText;
                    finalSelection.primaryMood = document.getElementById("checkbox").innerHTML;
                    console.log(finalSelection);  
                  }

                //   $("label.checkbox").change(function() {
                //       if(this.checked) {
                //         audTag[1].currentTime = 0;
                //         audTag[1].play();
                //         grabText();
                //         console.log(finalSelection);              
                //             } else if (!this.checked) {
                //             audTag[1].currentTime = 0
                //             audTag[1].play();
                //             delete finalSelection.primaryMood;
                //             console.log(finalSelection);
                //       }
                //   })

                $("input[name='happy']").change(function() {
                    grabText();
                    if(this.checked) {
                        audTag[1].currentTime = 0;
                        audTag[1].play();
                        finalSelection.primaryMood = 'happy';              
                    } else if (!this.checked) {
                    audTag[1].currentTime = 0
                    audTag[1].play();
                    delete finalSelection.primaryMood;
                }                    
                console.log(finalSelection);
            }),
            
            
            $("input[name='sad']").change(function() {
                if(this.checked) {
                    audTag[1].currentTime = 0;
                    audTag[1].play();
                    finalSelection.primaryMood = 'sad';              
                } else if (!this.checked) {
                    audTag[1].currentTime = 0;
                    audTag[1].play();
                    delete finalSelection.primaryMood;
                }                    
                console.log(finalSelection);
            }
            ),
        
            
            
            
            
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
        
        
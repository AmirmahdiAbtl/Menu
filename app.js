const filter = $(".container").children();
const button =  $(".button").children();
button.each(()=>{
    $(this).click((e)=>{
        switch (e.target.value){
            case "all":
                // console.log("all");
                // filter.each(()=>{
                //     $(this).css("display","none")
                // })
                for (let i = 0 ; i<10 ;i++){
                    filter[i].style.display = "flex"
                }
                break;
            case "breakfast":
                // console.log("breakfast");
                for (let i = 0 ; i<10 ;i++){
                    filter[i].style.display = "flex"
                   if( filter[i].classList[1] !== "breakfast"){
                       filter[i].style.display = "none"
                   }
                }
                break;
            case "lunch":
                // console.log("lunch");
                for (let i = 0 ; i<10 ;i++){
                    filter[i].style.display = "flex";
                    if( filter[i].classList[1] !== "lunch"){
                        filter[i].style.display = "none"
                    }
                }
                break;
            case "snakes":
                // console.log("snakes");
                for (let i = 0 ; i<10 ;i++){
                    filter[i].style.display = "flex"
                    if( filter[i].classList[1] !== "snakes"){
                        filter[i].style.display = "none"
                    }
                }
                break;
            case "dinner":
                // console.log("dinner");
                for (let i = 0 ; i<10 ;i++){
                    filter[i].style.display = "flex"
                    if( filter[i].classList[1] !== "dinner"){
                        filter[i].style.display = "none"
                    }
                }
                break;
        }
    })
})
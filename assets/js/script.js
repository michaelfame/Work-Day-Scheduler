$(document).ready(function(){

    // the save button click to listen

    $(".saveButton").on("click", function(){
        console.log("Event Saved");

        let timeID = $(this).parent().attr("id")
        let value = $(this).siblings(".description").val();

        console.log(timeID);
        console.log($(value));

        localStorage.setItem(timeID, value);

        // function to set notification for events 
        $(".notification").addClass("show");

        // function to remove notification for events 
        setTimeout(function() {
        $(".notification").removeClass("show");
        
        },5000)

    })
 // function to create the time block hourly update

 
    function hourUpdate(){
        let currentHour = moment().hours();
      
        for(let i = 0; i < $(".time-block").length; i++){            
            let hour = parseInt($(".time-block")[i].getAttribute("id").split("-")[1])
            console.log(hour);
            console.log(currentHour);

            if (hour < currentHour) {
                $(".time-block")[i].classList.add("past")
            } else if(hour === currentHour){
                $(".time-block")[i].classList.add("past")
                $(".time-block")[i].classList.remove("present")
            } else {
                $(".time-block")[i].classList.remove("past")
                $(".time-block")[i].classList.remove("present")                
                $(".time-block")[i].classList.add("future")
            }
            }
        } 
            

 
            hourUpdate();

            let interval = setInterval(hourUpdate, 15000);
            
            $("#hour-0 .description").val(localStorage.getItem("#hour-0"))
            $("#hour-1 .description").val(localStorage.getItem("#hour-1"))
            $("#hour-2 .description").val(localStorage.getItem("#hour-2"))
            $("#hour-3 .description").val(localStorage.getItem("#hour-3"))
            $("#hour-4 .description").val(localStorage.getItem("#hour-4"))
            $("#hour-5 .description").val(localStorage.getItem("#hour-5"))
            $("#hour-6 .description").val(localStorage.getItem("#hour-6"))
            $("#hour-7 .description").val(localStorage.getItem("#hour-7"))
            $("#hour-8 .description").val(localStorage.getItem("#hour-8"))
            $("#hour-9 .description").val(localStorage.getItem("#hour-9"))
            $("#hour-10 .description").val(localStorage.getItem("#hour-10"))
            $("#hour-11 .description").val(localStorage.getItem("#hour-11"))
            $("#hour-9 .description").val(localStorage.getItem("#hour-12"))
            $("#hour-9 .description").val(localStorage.getItem("#hour-13"))
            $("#hour-9 .description").val(localStorage.getItem("#hour-14"))
            $("#hour-9 .description").val(localStorage.getItem("#hour-15"))
            $("#hour-9 .description").val(localStorage.getItem("#hour-16"))
            $("#hour-9 .description").val(localStorage.getItem("#hour-17"))
            
            $("#currentDay").text(moment().format("dddd, MMMM, Do"))

        })



        
        
        
        
        
        

         

    











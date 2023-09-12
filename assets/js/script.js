$(document).ready(function(){

    // the save button click to listen

    $(".saveButton").on("click", function(){
        console.log("testing the saved listener");

        let timeID = $(this).parent(). attr("id")
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










})
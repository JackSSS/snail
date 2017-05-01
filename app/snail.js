$(document).ready(function() {
    $('.logout').hide();
    $( '.login' ).click(function() {
       $('.logout').css('display','block');
     });
    $( '.logout' ).click(function() {
       $('.logout').css('display','none');
     });
    


    // calculate snail success of fail

    $("#snailClimb").click(function(){
    var h = $("#h").val();
    var u = $("#u").val();
    var d = $("#d").val();
    var f = $("#f").val();
    var result = 0;
    var dayTravel;
    var container = [];
    var initialDay = u - d;
    container.push(initialDay);
    var travel = u;
    var totalDistance;
    totalDistance = container.reduce((prev, curr) => prev + curr );
    while ( totalDistance <= h && totalDistance > 0) {
        
        dayTravel = travel - (travel * (f/100));
        if (dayTravel !== 0){
        container.push(dayTravel);
        }
        travel = dayTravel;
        container.push(-d);
        result++;
        totalDistance = container.reduce((prev, curr) => prev + curr );
        
    }

    if (result === 0) {
        result = 1;
    }

    console.log(totalDistance);
    console.log(result);

    if (totalDistance > 0 ) {
        var success = "success on day " + result;
    } else {
        var failure = "failure on day " + result;
    }


    // Form Validation

    var error = document.getElementById("error");

    if(h == ""){
        $("#error").show();
        error.innerHTML = "Required: Enter a number for height";
        form.height.focus();
        return false;

    }

    if(u == ""){
        $("#error").show();
        error.innerHTML = "Required: Enter a number for climb";
        form.daydistance.focus();
        return false;

    }
    if(d == ""){
        $("#error").show();
        error.innerHTML = "Required: Enter a number for slide";
        form.nightslide.focus();
        return false;

    }
    if(f == ""){
        $("#error").show();
        error.innerHTML = "Required: Enter a number for fatigue";
        form.fatigue.focus();
        return false;

    } 
    if(h !== "" && u !== "" && d !== "" && f !== "") {
        $("#error").hide();
    }
    
    // Append results to table

    if (totalDistance > 0 ) {

        $("#log").append("<tr><td>" + h + "</td><td>" + u + "</td><td>" + d + "</td><td>" 
        + f + "</td><td>" + success + "</td></tr>");
    } else { 
        
        $("#log").append("<tr><td>" + h + "</td><td>" + u + "</td><td>" + d + "</td><td>" 
        + f + "</td><td>" + failure + "</td></tr>"); 
    }

    });
});
	
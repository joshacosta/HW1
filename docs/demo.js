var queue = []
var strQueue = "";
var currentFloor = 1;
var direction = "up";

$( document ).ready(function() {
   $(".indicatorNum").text(currentFloor);
   $(".material-icons").text("remove");
});

function select(floor){
    $(".indicatorNum").text(floor);
    $(".material-icons").text("arrow_upward");
    if(!queue.includes(floor) && currentFloor!=floor){ //if not in queue already
        $(".queue").text("");

        queue.push(floor);
        queue.sort();
        queue.reverse();
        $(".feedback").show();
        $(".feedback").text("Floor " + floor +" in queue");
        
        strQueue = '';
        for(var i = 0; i<queue.length ; i++){
            strQueue += queue[i] + "<br>" 
        }

        $(".queue").append(strQueue);

        var msg = new SpeechSynthesisUtterance("Floor " + floor +" in queue");
        window.speechSynthesis.speak(msg);

        setTimeout(function(){
            $(".feedback").hide();
        }, 3000)
    }
 }

 function startElevator(){
    $(".material-icons").text("arrow_upward");
    seconds= 0;
     console.log(queue);
     queue.reverse();
    //alert("starting");
    for( var floor in queue){
        setInterval(function(){
            seconds +=1
            $(".indicatorNum").text(seconds);
            if(seconds>=queue[queue.length-1]){
                break;
            }
        },1000)
      

    }
 }


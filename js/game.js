$(document).ready(function(){
                
    var memory = {};
    memory.cards = 0;
    memory.timer = 0;
    memory.seconds = 0;
    memory.minutes = 0;
    memory.hours = 0;
    memory.attempts = 0;
                
    fillBoard();
                
    function fillBoard(){
        $.getJSON('server/index.php', function(myCards){
            $.each(myCards, function (index,value){
                $('#cards').append('<div class="card">'     
                    +'<div class="face front"></div>'
                    +'<div class="face back" data-id="' + value.replace('.jpg','') + '" style="background-image:url(img/card/' + value + ')"></div>'
                    +'</div>');
            });
                        
            $('#cards').one('click', function (){
                startTimer();
            });
                        
            $('#cards').children().each(function (index){
                $(this).click(function(){

                    if ($(this).attr('class') === 'card flipped'){
                        return false;
                    }
                                
                    if ($('.flipped').length > 1){
                        return false; 
                    } else {
                        $(this).addClass('flipped');
                        $('#attempts').html('Tentativi ' + ++memory.attempts);  
                    }
                      
                    if ($('.flipped').length === 2){
                        setTimeout(checkCards,700);
                    }                    
                });
            });
        });
    }
                
    function resetBoard(){
        $('#cards').empty(); 
        $('#minutes').html('0 Minuti');
        $('#seconds').html('0 Secondi');
        $('#attempts').html('Tentativi: 0');
        stopTimer();
    }
                                
    function checkCards(){
                    
        memory.cards = $('.card').length - $('.opacity').length;
                   
        var flipped = $('.flipped .back').map(function(){
            return $(this).attr('data-id');
        });
                    
        var firstId = flipped[0];
        var secondId = flipped[1];
                    
        if (firstId === secondId){
            $('.flipped').addClass('opacity')
            .removeClass('flipped')
            .unbind('click');
                        
            memory.cards = memory.cards - 2;
                                             
                    
            if (memory.cards === 0){
                $('#finalAttempts').html(memory.attempts);
                $('#finalMinutes').html(memory.minutes);
                $('#finalSeconds').html(memory.seconds);
                resetBoard();
                $('#message').fadeIn().delay(5000).fadeOut();
                setTimeout(fillBoard(),10000);
            }
                        
        } else {
            $('.flipped').removeClass('flipped');
        }
    }   
                
    function startTimer(){
                       
        memory.timer = setInterval(setSeconds,1000);
                    
        function setSeconds(){
            if (memory.seconds === 60){
                memory.seconds = 0;
                setMinutes();
            }
            memory.seconds++;
            $('#seconds').html(memory.seconds + ' Secondi');
        }
                    
        function setMinutes(){
            if (memory.minutes === 60){
                memory.minutes = 0;
                setHour();
            }
            memory.minutes++;
            $('#minutes').html(memory.minutes + ' Minuti ');
        }
                    
        function setHours(){
            memory.hours++;
        }
    }
                
    function stopTimer(){
        memory.hours=0;
        memory.minutes=0;
        memory.seconds=0;
        memory.attempts=0;
        clearInterval(memory.timer);
    }               
});
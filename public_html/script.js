/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$("document").ready(function() {
    $('.whatup').css('background-color', 'yellow');

    // $ ('.2').css ({ 'visibility': 'hidden', 'position' : 'absolute'});

    // $ ('div:last p:nth-child (3)').css('background-color', 'pink');

    // $ ("h1").bind ('mouseover, mouseOverMe).bind ('mouseout', mouseOutMe);

    // $ ('h1').bind ('click', mouseClick);



    $('#replaceWText').bind('click', replaceWtext);

    $('#randPara').bind('click', addAPara);

    $('#removePara').bind('click', removeAPara);
$ ('#superHumans').accordion({header: "h3"});

});





function removeAPara() {
    $(' #randPara p:last').remove();
}

function addAPara() {
    $('#randPara').append('<p>ADDED</p>');
}

function replaceWtext() {
    $('#replaceWText').text('Replaced!');
    
}




//    $('div:last p:nth-child(3)').css ('background-color', 'pink');
//    
//    $ ("h1").bind('mouseover', mouseOverMe).bind('mouseout', mouseOutMe);
//    
//    //$ ('div').bind('mouseover', mouseOverMe());
//    
//    $ ('h1').bind ('click', mouseClick);
//    })

function mouseOverMe() {
    $("h1").html("This is easy");
}

function mouseOutMe() {
    $('h1').html('Tayah firee');
}

function mouseClick() {

    $('p').html('swag');
}
    
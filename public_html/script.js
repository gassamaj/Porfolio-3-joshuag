/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$("document").ready(function(){
    $('yeah').css('background-color', 'yellow');
    
    // $ ('.2').css ({ 'visibility': 'hidden', 'position' : 'absolute'});
    
    // $ ('div:last p:nth-child (3)').css('background-color', 'pink');
    
    // $ ("h1").bind ('mouseover, mouseOverMe).bind ('mouseout', mouseOutMe);
    
    // $ ('h1').bind ('click', mouseClick);
    
    $ ('#replaceWText').bind ('click', replaceWtext);
    
    $ ('#randPara').bind('click', addAPara);
    
    $ ('#removePara').bind ('click', removeAPara);
    });
    
    function removeAPara (){
        $ (' #randPara p:last').remove ();
    }
    
    function removeAPara () {
        $ ('#randpara').append ('<p>ADDED</p>');
    }
   
    function replaceWTest () {
        $ ('#replaceWText').text ('Replaced!');
    }
        
    
    
    
//    $('div:last p:nth-child(3)').css ('background-color', 'pink');
//    
//    $ ("h1").bind('mouseover', mouseOverMe).bind('mouseout', mouseOutMe);
//    
//    //$ ('div').bind('mouseover', mouseOverMe());
//    
//    $ ('h1').bind ('click', mouseClick);
//    })
    
    function mouseOverMe () {
        $ ("p").html("This is easy");
    }    
    
    function mouseOutMe () {
        $ ('h1').html ('Tayah fire');
    }    
    
    function mouseClick(){
          
    $ ('p').html ('taaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaayah');
    }
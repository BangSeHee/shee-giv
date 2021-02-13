$(document).ready(function(){
    sectionClick();
    aboutOver();        
    //aboutSlide();
    });



function sectionClick(){
    
    $(".section_wrap").on("click", onOver);
        
        function onOver(){
            
            $(".section_wrap").removeClass("on");
            $(this).addClass("on");
        }
}

function aboutOver(){
    
    var $aboutItem;
    var $aboutList;
    
    init();
    inEvent();
    
    function init(){
        
        $aboutItem = $(".aboutTop_inner").children();//ul
        $aboutList = $(".aboutBottom_inner").find("li");

    }
    function inEvent(){
        $aboutList.on("click", onOver); 
        
    }
    function onOver(){
        
        var clickNum = $aboutList.index($(this));
       // alert(clickNum);
        
        $aboutItem.hide();
        $aboutItem.eq(clickNum).show();
    }
}


function aboutSlide(){
    
    
    //var $aboutList;
    var $listWrap;
    
    init();
    inEvent();
    
    function init(){
       // $aboutList =$(".aboutBottom_inner").find("li");
        $listWrap = $(".aboutBottom_inner").children();
        
    }
    
    function inEvent(){
        var x,down, left
        
        $listWrap.mousedown(function(e){
            e.preventDefault();
            down = true;
            x = e.pageX;
            left = $(this).scrollLeft();
            
        })
        $("body").mousemove(function(e){
            if(down){
                var newX = e.pageX;
                $listWrap.scrollLeft(left-newX+x)
            }
        })
    }
     
    
}
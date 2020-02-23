(function()
{
    var menuButtons = document.querySelectorAll(".mainNav__item"),
        targetClasses =[".about", ".prices", ".reservation", ".gallery", ".statute", ".contact"],
        targetPointers = [];   
    
    for (var i=0; i<targetClasses.length; i++)
        {
            targetPointers.push(document.querySelector(targetClasses[i]));
        } 

    
    function animateScrollDown(targetPosition, moveStep)
    {        
        if (window.scrollY < targetPosition)
            {
                window.scrollBy(0, moveStep);
                setTimeout(function(){animateScrollDown(targetPosition, moveStep);}, 5);
            }
    } 
    
    function animateScrollUp(targetPosition, moveStep)
    {    
        if (window.scrollY > targetPosition)
            {
                window.scrollBy(0, moveStep);
                setTimeout(function(){animateScrollUp(targetPosition, moveStep);}, 5);
            }
    }
    
    function startScroll(target)
    {
        var startPosition = window.scrollY,
            targetPosition = target.getBoundingClientRect().top,
            positionSum = targetPosition + startPosition,
            moveStep = 10;
        

        if (targetPosition < 0)
            {
                moveStep *= (-1);
                animateScrollUp(positionSum, moveStep);
            }
        else
            {
                if (positionSum > (document.body.scrollHeight - window.innerHeight))
                    {
                        positionSum = document.body.scrollHeight - window.innerHeight;
                    }
                animateScrollDown(positionSum, moveStep);
            }
    }

    menuButtons[0].addEventListener("click", function(e){e.preventDefault();e.stopPropagation();startScroll(targetPointers[0])}, false);
    menuButtons[1].addEventListener("click", function(e){e.preventDefault();e.stopPropagation();startScroll(targetPointers[1])}, false);
    menuButtons[2].addEventListener("click", function(e){e.preventDefault();e.stopPropagation();startScroll(targetPointers[2])}, false);
    menuButtons[3].addEventListener("click", function(e){e.preventDefault();e.stopPropagation();startScroll(targetPointers[3])}, false);
    menuButtons[4].addEventListener("click", function(e){e.preventDefault();e.stopPropagation();startScroll(targetPointers[4])}, false);
    menuButtons[5].addEventListener("click", function(e){e.preventDefault();e.stopPropagation();startScroll(targetPointers[5])}, false);

}());
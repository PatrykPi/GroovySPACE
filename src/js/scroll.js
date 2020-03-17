(function(){
    const menuButtons = document.querySelectorAll(".mainNav__item"),
          targetClasses = document.querySelectorAll("section[data-section-navigation]");   
    
    function animateScrollDown(targetPosition, moveStep){
        if (window.scrollY < targetPosition){
            window.scrollBy(0, moveStep);
            setTimeout(() => animateScrollDown(targetPosition, moveStep), 5);
        }
    } 
    
    function animateScrollUp(targetPosition, moveStep){
        if (window.scrollY > targetPosition){
            window.scrollBy(0, moveStep);
            setTimeout(() => animateScrollUp(targetPosition, moveStep), 5);
            }
    }
    
    function startScroll(target){
        let startPosition = window.scrollY,
            targetPosition = target.getBoundingClientRect().top,
            positionSum = targetPosition + startPosition,
            moveStep = 10;

        if (targetPosition < 0){
            moveStep *= (-1);
            animateScrollUp(positionSum, moveStep);
        }
        else{
            if (positionSum > (document.body.scrollHeight - window.innerHeight)){
                positionSum = document.body.scrollHeight - window.innerHeight;
            }
            animateScrollDown(positionSum, moveStep);
        }
    }
    
   
    for(let i = 0; i < menuButtons.length; i++){
        menuButtons[i].addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();
            startScroll(targetClasses[i])}, false); 
    }
    
    //change active li in menu
    
    function changeActiveMenuClass(){   
        const length = targetClasses.length-1;
        for(let i = 0; i < length; i++) {
            if (targetClasses[i].getBoundingClientRect().top - window.innerHeight <= 0 && targetClasses[i+1].getBoundingClientRect().top - window.innerHeight > 0) {
                menuButtons[i].classList.add("mainNav__item--active");
            }
            else {
                menuButtons[i].classList.remove("mainNav__item--active");
            }
        }
        if (targetClasses[length].getBoundingClientRect().top - window.innerHeight <= 0) {
            menuButtons[length].classList.add("mainNav__item--active");
        }
        else {
            menuButtons[length].classList.remove("mainNav__item--active");
        }
    }

    window.addEventListener("scroll", () => changeActiveMenuClass(), false);

}());
(function(){
    const galleryPhotos = document.querySelectorAll(".gallery__photo"),
          box = document.querySelector(".gallery__zoom"),
          boxPhoto = document.querySelector(".gallery__zoom-photo"),
          crossButton = document.querySelector(".gallery__cross"),
          nextButton = document.querySelector(".gallery__next"),
          previousButton = document.querySelector(".gallery__previous");
    let currentPhotoNumber;
    
  
     function displayNextButton(currentPhoto) {
        if (currentPhoto === galleryPhotos.length){
            nextButton.classList.add("gallery__next--undisplayed");
        }
        if (currentPhoto !== galleryPhotos.length){
            nextButton.classList.remove("gallery__next--undisplayed");
        }
    }    
        
    function displayPreviousButton(currentPhoto) {
        if (currentPhoto === 1){
            previousButton.classList.add("gallery__previous--undisplayed");
        }
        if (currentPhoto !== 1){
            previousButton.classList.remove("gallery__previous--undisplayed");
        }
    }   
    
    function openGallery(e) {
        e.stopPropagation();
        boxPhoto.src = e.target.src;
        box.classList.remove("gallery__zoom--undisplayed");
        
        currentPhotoNumber = parseInt(e.target.dataset.photoNumber, 10);
        
        displayNextButton(currentPhotoNumber);
        displayPreviousButton(currentPhotoNumber);
    }
    
    function closeGallery(e) {
        e.stopPropagation();
        box.classList.add("gallery__zoom--undisplayed");
    } 
        
    function moveToNextPhoto(e) {
        e.stopPropagation();
        
        currentPhotoNumber++;
        
        displayNextButton(currentPhotoNumber);
        displayPreviousButton(currentPhotoNumber);
        
        boxPhoto.src = galleryPhotos[currentPhotoNumber - 1].src;
    }
    
    function moveToPreviousPhoto(e) {
        e.stopPropagation();
        
        currentPhotoNumber--;
        
        displayNextButton(currentPhotoNumber);
        displayPreviousButton(currentPhotoNumber);
        
        boxPhoto.src = galleryPhotos[currentPhotoNumber - 1].src;
    }

    
    galleryPhotos.forEach(function (photo) {
        photo.addEventListener("click", (e) => openGallery(e), false);
    });
    
    crossButton.addEventListener("click", (e) => closeGallery(e), false);
    nextButton.addEventListener("click", (e) => moveToNextPhoto(e), false);
    previousButton.addEventListener("click", (e) => moveToPreviousPhoto(e), false);
    window.addEventListener('click', (e) => {
        if (e.target !== boxPhoto){
           closeGallery(e);
        }
    }, false);
    
}());
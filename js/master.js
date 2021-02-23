
// Check if there's local Strorage color options
let mainColors = localStorage.getItem("color_option");

if (mainColors !== null) {

document.documentElement.style.setProperty('--main--color', mainColors);

	//Check for Active Class From All Children



   // Remove Active Class From All color list Items
    document.querySelectorAll(".colors-list li").forEach(element => {

    element.classList.remove("active");

    // Add Active Class on Elements 
    if (element.dataset.color === mainColors) {

    	// Add Active Class 
    	element.classList.add("active");

	    }

    });

}
	//Random Background Option
	let  BackgroundOption = true;


	// Function To Control The background iNTERVAL 
	let BackgroundInterval;

    let backgroundLocationItem = localStorage.getItem("background_option");


    // Check if it Random with local storage

    if (backgroundLocationItem !== null ) {

        if(backgroundLocationItem === 'true'){
            BackgroundOption =true;

        } else {

            BackgroundOption = 'false';
        }
        document.querySelectorAll(".random-backgrounds span").forEach(element =>{

            element.classList.remove("Active");
        });


        if(backgroundLocationItem === 'true'){

    document.querySelector(".random-backgrounds .yes").classList.add("active");


        } else {

     document.querySelector(".random-backgrounds .no").classList.add("active");

        }
       
    }
 


    // Switch Background Random Background Option
    const randomBackE1 = document.querySelectorAll(".random-backgrounds span");

     //loops On All span
    randomBackE1.forEach(span => {
        // Click on Every span
            span.addEventListener("click" , (e) => { 


            handleActive(e);


            if(e.target.dataset.background ==='yes') {
                
                    BackgroundOption =true;
                    
                    randoizeImages();

                    localStorage.setItem("background_option", true);
            }else {
                    BackgroundOption =false;

                    clearInterval(BackgroundInterval);

                     localStorage.setItem("background_option", false);
            }

        });
    });
    // -----------------------------------------------------------------


	// Click  on Toggle setting gear page elements
	document.querySelector(".toggle-settings .fa-gear").onclick = function() {
		
	// Togger spin class fa-spin For Rotation on self

	this.classList.toggle("fa-spin");
 
	// Togger spin class fa-spin For Main settings Box

	document.querySelector(".settings-box").classList.toggle("open");


	};

    // -----------------------------------------


    // Switch Colors
    const colorsLi = document.querySelectorAll(".colors-list li");

     //loops On All List Items
    colorsLi.forEach(li => {
    	// Click on Every color items
    	li.addEventListener("click" , (e) =>{ 


    	//Set Color On Root
    	document.documentElement.style.setProperty('--main--color', e.target.dataset.color);


    		// Set Color On Local Storage
    		localStorage.setItem("color_option" ,  e.target.dataset.color);


    	handleActive(e);

    	});
    });



    // -----------------------------------------

	// Select land page elements

	let landingPage = document.querySelector(".landing-page");

//Get arrays of imagess
	let imgsArray = ["web1.jpg","web2.jpg","web3.jpg","web4.png"];


	//Function to Randmize Imgs
	function randoizeImages () {
		if(BackgroundOption === true){

				BackgroundInterval = setInterval(() => {

			// Get random number 
			let randomNumber = Math.floor(Math.random() * imgsArray.length);

			// Change Background image Url 
			landingPage.style.backgroundImage = 'url("images/'+ imgsArray[randomNumber] +'")';

			}, 1000);

		}
	}

randoizeImages();


// Select skills Selector

let ourSkills = document.querySelector(".skills");

window.onscroll = function() {

    // Skills Offset Top
    let skillsOffsetTop = ourSkills.offsetTop;

    // Skills Outer Height
    let skillsOuterHeight = ourSkills.offsetHeight ;

    //Windows Height
    let windowHeight = this.innerHeight;


    // WindowScrollTop 
    let WindowScrollTop = this.pageYOffset;

    if (WindowScrollTop < (skillsOffsetTop + skillsOuterHeight - windowHeight)) {

    let allSkills = document.querySelectorAll(".skill-box .skill-progress span");
       
    allSkills.forEach(skill => {

    skill.style.width = skill.dataset.progress;

       });
    }

};


 // Create Backup  With The Image

 let ourGallery = document.querySelectorAll(".gallery img");

 ourGallery.forEach(img => {

        //Create overlay Elements
        img.addEventListener('click',(e) => {
            let overlay = document.createElement("div");


            // Add Class To overlay
            overlay.className = 'popup-overlay';

            // Append overlay To Body
            document.body.appendChild(overlay);


            // Create Pop up same
            let popupBox = document.createElement("div");

            // Add Class To The Popup Box
            popupBox.className = 'popup-box';


              // append The Popup Box To Body
            if (img.alt !== null) {

                // create Heading 
                let imgHeading = document.createElement("h3");

                //  create text for heading
                let  imgText = document.createTextNode(img.alt);

                // Append The text to the heading 
                imgHeading.appendChild(imgText);

                // append the heading to the popup Box
                popupBox.appendChild(imgHeading);
            }


            // Create the images 
            let popupImages = document.createElement("img");

            // Set Image Source 
            popupImages.src = img.src;

            // Add Image To Popup Box
            popupBox.appendChild(popupImages);

            // Append The Popup Box To body
            document.body.appendChild(popupBox);

            // Create The Close span
            let closeButton = document.createElement("span");

            // Create The Close Button Text 
            let closeButtonText = document.createTextNode("X");

            // Append Text To Close Button 
            closeButton.appendChild(closeButtonText);


            // Add class to colse Button 
            closeButton.className = 'close-button';

            // Add colse Button To popup Box
            popupBox.appendChild(closeButton);

        });
 });


// close popup
document.addEventListener("click", function(e){

    if(e.target.className == 'close-button') {

        // Remove The current popup
        e.target.parentNode.remove(); 

        // Remove Overlay
        document.querySelector(".popup-overlay").remove();

    }
});


//  Select All Bullets 

const allBullets = document.querySelectorAll(".nav-bullets .bullets");


//  Select All links
const allLinks = document.querySelectorAll(".links a");


function scrollToSomeWhere(elements) {

elements.forEach(ele => {

    ele.addEventListener("click", (e) => {

        e.preventDefault();


    document.querySelector(e.target.dataset.section).scrollIntoView({
        behavior: 'smooth'
    
     });


  });

});


}

scrollToSomeWhere(allBullets);
scrollToSomeWhere(allLinks);


//handle active state


function handleActive(ev){


    // Removee Active Class From All Childrens
        ev.target.parentElement.querySelectorAll(".active").forEach(element => {

             element.classList.remove("active");

            });

            //Add Active Class On Self
            ev.target.classList.add("active");
}



let bulletsSpan =document.querySelectorAll(".bullets-option span");

let bulletsContainer = document.querySelector(".nav-bullets");

let bulletLocalItems = localStorage.getItem("bullets_option");

if(bulletLocalItems !== null ){

     bulletsSpan.forEach(span => {

        span.classList.remove("active");

     });

if (bulletLocalItems === 'block'){
   
    bulletsContainer.style.display = 'block';

    document.querySelector(".bullets-option .yes").classList.add("active");

}else{

    bulletsContainer.style.display = 'none';

    document.querySelector(".bullets-option .no").classList.add("active");
}

} 



bulletsSpan.forEach(span =>{

    span.addEventListener("click" , (e) => {

        if(span.dataset.display === 'show') { 

            bulletsContainer.style.display = 'block';

            localStorage.setItem("bullets_option" , 'block');

        }else {
            bulletsContainer.style.display = 'none';

            localStorage.setItem("bullets_option" , 'none');

        }

        handleActive(e);

    });

});


// Reset Button
document.querySelector(".reset-options").onclick = function () {

    localStorage.clear();
    localStorage.removeItem("bullets_option");
    localStorage.removeItem("background_option");
    localStorage.removeItem("color_option");

    window.location.reload();

};




//  Toggle Menu 

let toggleBtn = document.querySelector(".toggle_menu");

let tLinks = document.querySelector(".links");

toggleBtn.onclick = function(e) {



    // Stop propagation
    e.stopPropagation ();

    // Toggle class menu-active on button
this.classList.toggle("menu-active");

    // Toggle class open on links
tLinks.classList.toggle("open");

};


// click anywhere to  outside menu 

document.addEventListener("click" , (e) => {

    if(e.target !== toggleBtn && e.target !== tLinks){

        //check if menu is open or not
        if(tLinks.classList.contains("open")){

                // Toggle class menu-active on button
            toggleBtn.classList.toggle("menu-active");

                // Toggle class open on links
            tLinks.classList.toggle("open");

        }
    }
});


// stop propagtion in the  menu

tLinks.onclick = function (e) {

    e.stopPropagation();
}








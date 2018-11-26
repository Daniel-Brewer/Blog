//  Use JavaScript to obtain a reference to the first section with the class of article_header and change its text with the textContent property to "Welcome to the {insert your name here} blog"
// Use JavaScript to obtain a reference to all article__header elements and change their classList property value to article__header important.
// Obtain a reference the element with a class of dashed and remove it.
// Obtain a reference the element with a class of article_footer and add the class of goldenrod it. 


const sectionEl= document.querySelector(".article__header").textContent= "Welcome to the Dan Brewer blog";


const sectionElTwo= document.querySelectorAll(".article__header");
for (let i = 0; i < sectionElTwo.length; i++) {
   sectionElTwo[i].classList.add("important")   
}

const element= document.querySelector(".dashed");
element.classList.remove("dashed");


const anotherElement= document.querySelector(".article__footer");
anotherElement.classList.add("goldenrod");



document.addEventListener('DOMContentLoaded', () => {
    retrieveData()
})
function retrieveData(){
    fetch('http://localhost:3000/ramens')
    .then(response => response.json())
    .then(data => {
            // console.log(data)

//wishlist of functions a la Sam :) 
        //render the nav bar items
        data.forEach((singleRamen)=> renderNavBarItems(singleRamen))
        //render detail section
        renderDetailSection(data[0])
        // add form function
        addNewRamen()
    })
};

// this is my function to render the nav bar items
function renderNavBarItems(singleRamen){
    let navBar = document.querySelector("#ramen-menu")
// creating the images for each one

    let image = document.createElement("img")
// updating image src

    image.src = singleRamen.image

// image event listener and adding it back aka appending it to the image bar 

    image.addEventListener("click", ()=>{renderDetailSection(singleRamen)})
    navBar.append(image)
}

// this is my function to render the detail section 
function renderDetailSection(data){

// delcaring where in the HTML I am tagerting comment, name, restaurant, image, & rating  
    
    let comment = document.querySelector("#comment-display")
    let name = document.querySelector(".name")
    let restaurant = document.querySelector(".restaurant")
    let image = document.querySelector(".detail-image")
    let rating= document.querySelector("#rating-display")

// updating target area with image, comment, restaurant, and rating coming from my host server  
    
    image.src = data.image
    comment.textContent = data.comment
    name.textContent = data.name
    restaurant.textContent = data.restaurant
    rating.textContent = data.rating
}

// this is my function for adding new ramen 

function addNewRamen(){
    
// this is targeting the new ramen menu where we can enter data 

    let form = document.querySelector("#new-ramen")
    
 // creating submit function for our form, the "create" button and preventing default 

    form.addEventListener("submit", (e)=>{
        e.preventDefault()
        
// setting up variables for new Ramen so it can accept name, restaurant, rating, image, and comment for a submitter 

        let newRamen = {
            "name": document.getElementById("new-name").value,
            "restaurant": document.getElementById("new-restaurant").value,
            "rating": document.getElementById("new-rating").value,
            "image": document.getElementById("new-image").value,
            "comment": document.getElementById("new-comment").value
        }
//  this renders the new rament aka adds it to the nav bar above 
        
        renderNavBarItems(newRamen)
    });
}
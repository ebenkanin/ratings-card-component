//getting variables for component from html

const ratings = document.querySelectorAll('.rating') // rating selected

const mainBtn = document.querySelector('.btn-main') // main submit button

const feedbackContainer = document.querySelector('.feedback-container') // main feedback card

const btnFeedback = document.querySelector('.btn-feedback') // disabled feedback button showwing selection

const mainContainer = document.querySelector('.main-container') // main ratings card

let selectedRating = null;


// looping through ratings buttons array to fetch selected rating

for( let i =0; i< ratings.length; i++){

   

    ratings[i].addEventListener('click', function customerRating(){

        //remove default background from button and add color indicating button has been selected

        this.classList.remove('bg-white/10')
        this.classList.add('bg-orange-500')
        this.innerText = ('bg-black')
        

        // check if any other buttons already have the color indicating they've been selected, applied. if there is, remove.
        for(let j=0; j<ratings.length; j++){
            if (ratings[j] != this){
                ratings[j].classList.remove('bg-orange-500')
                ratings[j].classList.add('bg-white/10')
            }
        }

        // grab value of selected rating

       selectedRating = this.getAttribute('data-value')

       console.log(selectedRating)

    })

}


mainBtn.addEventListener('click', function submitRating(){

    if (selectedRating == null){

        alert('Please select a rating')
         
    } else{
        console.log('go')

        mainContainer.classList.toggle('hidden')

        feedbackContainer.classList.toggle('hidden')
        

        btnFeedback.innerText = `You selected ${selectedRating} out of ${ratings.length}`

        
    }

    
})


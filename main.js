// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const errorMessage = document.querySelector('#modal')
const modalMessage = document.querySelector('#modal-message')
const like = document.querySelectorAll('.like-glyph')

function hideError() {
  errorMessage.className = 'hidden'
}
function showError() {
  errorMessage.classList.remove('hidden')
}
function fullHeart(like) {
  like.textContent = FULL_HEART
  like.className = 'activated-heart'
}

hideError()

like.forEach(item => {
  item.addEventListener('click', () => {
    if (item.className === `activated-heart`) {
      item.className = 'like-glyph'
    }  else {fullHeart}
    mimicServerCall()
    .then(fullHeart(item))
    .catch( (error)=>{
      showError()
      modalMessage.textContent = error.message
      setTimeout(hideError, 5000)
    })
  })
})




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}

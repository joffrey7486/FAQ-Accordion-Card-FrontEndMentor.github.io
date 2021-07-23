const accordion = document.getElementsByClassName('content-box');

/*for(i = 0; i < accordion.length; i++){
  accordion[i].addEventListener('click', function(){
    this.classList.toggle('active');
  })
}*/

const questions = document.querySelectorAll('.question')

questions.forEach((question) => question.addEventListener('click', () =>{

    if(question.parentNode.classList.contains('active')){
        question.parentNode.classList.toggle('active')
    } else {
        questions.forEach(question => question.parentNode.classList.remove('active'))
        question.parentNode.classList.add('active')
    }
}))
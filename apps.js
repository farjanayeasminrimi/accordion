let theBtn = document.querySelectorAll(".btn");
let main_div = document.querySelector(".box-headline");

// for (let i = 0; i < theBtn.length; i++) {
//     theBtn[i].addEventListener('click', function(){
//         this.classList.toggle('addHo');
//     })
    
// }
theBtn.forEach((allBtn )=> {
    let varry = allBtn.closest('.member').querySelector('.explaination');
    let btnDown = allBtn.querySelector('i');

    // allBtn.addEventListener('click', function(){
    //     btnDown.classList.toggle('fa-caret-down')
    //      btnDown.classList. toggle( 'fa-caret-up' );
    // })
    allBtn.addEventListener("click" , function() {
            
            if(varry.classList.contains("addKoro")&& btnDown.classList.contains('fa-caret-up' )){
            varry.classList.remove('addKoro');
            // btnDown.classList.remove('fa-caret-up' );
            // btnDown.classList.add('fa-caret-down' );
            btnDown.style.transform = 'rotate(0deg)';


       }
       else{
           theBtn.forEach((btn) => {
           btn.closest('.member').querySelector('.explaination').classList.remove('addKoro');
        //    btn.querySelector('.btn i').classList.remove('fa-caret-up');
        //    btn.querySelector('.btn i').classList.add('fa-caret-down');
        btn.querySelector('.btn i').style.transform = 'rotate(0deg)';

           })
            varry.classList.add('addKoro');
            // btnDown.classList.add('fa-caret-up' );
            btnDown.style.transform = 'rotate(180deg)';

       };

    //    if(btnDown.classList.contains('fa-caret-down')){
    //       btnDown.classList.remove('fa-caret-down');
    //    }
    //    else{
    //       allBtn.querySelector('i').classList.replace('fa-caret-down');
    //       btnDown.classList.toggle('fa-caret-down');
    //  }
 });  
});
//  function allExplain() {
//     // let varry = theBtn.closest('.member').querySelector('.explaination')
//     let element = document.querySelector(".explaination");
//     element.classList.remove("addKoro");
//     element.classList.toggle('addKoro');
//  }

// function allExplain() {
//     let theBtn = document.querySelectorAll(".btn");
//     let mainDiv = document.querySelectorAll(".explaination");
//      if(theBtn=null){
//        mainDiv.classList.remove('addKoro');

//  }
//  else{
//     mainDiv.classList.toggle('addKoro');
//  }
// }

// let accordions = document.querySelectorAll('.addKoro');
// let varry = allBtn.closest('.member').querySelector('.explaination')
// for (let i = 0; i < accordions.length; i++) {
//   accordions[i].classList.remove('addKoro');
// }

// // Toggle our content
// varry.classList.toggle('addKoro');
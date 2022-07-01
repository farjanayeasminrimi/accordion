let theBtn = document.querySelectorAll(".btn");
let main_div = document.querySelector(".box-headline");

theBtn.forEach((allBtn )=> {
    let varry = allBtn.closest('.member').querySelector('.explaination');
    let btnDown = allBtn.querySelector('i');

    allBtn.addEventListener("click" , function() {
            
            if(varry.classList.contains("addKoro")&& btnDown.classList.contains('fa-caret-up' )){
            varry.classList.remove('addKoro');
            btnDown.style.transform = 'rotate(0deg)';


       }
       else{
           theBtn.forEach((btn) => {
           btn.closest('.member').querySelector('.explaination').classList.remove('addKoro');

        btn.querySelector('.btn i').style.transform = 'rotate(0deg)';

           })
            varry.classList.add('addKoro');
            btnDown.style.transform = 'rotate(180deg)';

       };


 });  
});

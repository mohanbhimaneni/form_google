const form=document.getElementsByClassName('form')[0];
const submitButton=document.querySelector('.submit');
console.log(form.classList,submitButton.classList);
const scriptURL='https://script.google.com/macros/s/AKfycbw83W98mLRgilM-Cyf_5GrlEyYlVteTsyteqDExn9MztqtfEGyVbVoiQPdGgA--o6Tf_w/exec';
form.addEventListener('submit',e=>{
    submitButton.disabled=true;
    e.preventDefault()
    let requestBody=new FormData(form);
    fetch(scriptURL,{method:'POST',body:requestBody,mode:"no-cors"})
        .then(response=>{
            alert('Success!',response);
            submitButton.disabled=false;
        })
        .catch(error=>{
            alert('Error!',error.message);
            submitButton.disabled=false;
        })
    form.reset();
})

function closeForm(){
    document.getElementById("floating_window").classList.toggle("display_none");
}

function openForm() {
    document.getElementsByClassName("div_to_toggle")[0].classList.toggle("display_none");
}
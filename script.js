document.addEventListener('DOMContentLoaded',function()
{
    const form=document.getElementById('contactForm');
    const formSuccess=document.getElementById('formSuccess');
    form.addEventListener('submit',function(e){
        e.preventDefault();
        let valid=true;
        const name=document.getElementById('name');
        if(!name.value.trim()){
            name.classList.add('is-invalid');
            valid=false;
        }
        else{
            name.classList.remove('is-invalid');
        }
        const email=document.getElementById('email');
        const emailPattern=/^[^@]+@[^@]+\.[^@]+$/;
        if(!email.value.trim() ||!emailPattern.test(email.value.trim())){
            email.classList.add('is-invalid');
            valid=false;
        }
        else{
            email.classList.remove('is-invalid');
        }
        const message=document.getElementById('message');
        if(!message.value.trim()){
            message.classList.add('is-invalid');
            valid=false;
        }
        else{
            name.classList.remove('is-invalid');
        }
        if(valid)
        {
            form.classList.add('d-none');
            formSuccess.classList.remove('d-none');
            form.reset();
        }
    });
    ['name','email','message'].forEach(element => {
        document.getElementById(id).addEventListener('input',function(){
            this.classList.remove('is-invalid');
        });
    });
});
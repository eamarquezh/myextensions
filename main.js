const b = document.createElement('button');
document.body.appendChild(b);
b.textContent='Inicia';
b.className='button';

b.addEventListener('click',()=>{
    alert('Hey extensions');
});

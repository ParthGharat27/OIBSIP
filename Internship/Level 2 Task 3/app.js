const input = document.getElementById('inputt');
const bttn = document.getElementById('btnn');
const rem = document.getElementById('remm');
const comp = document.getElementById('compp');

bttn.addEventListener('click', addList);

function addList(e){
  

   const li = document.createElement('li');

   const check = document.createElement('button');
   check.innerHTML = '<i class="fas fa-check"></i>';

   const del = document.createElement('button');
   del.innerHTML='<i class="fa-solid fa-trash"></i>';

   if(input.value == ''){
    window.confirm('Please Enter Some Text');
   }
      else
    {
    li.textContent = input.value;
    input.value = '';
    rem.appendChild(li);
    li.appendChild(check);
    li.appendChild(del);
  }

  check.addEventListener('click', function(){
    const par = this.parentNode;
    par.remove();
    comp.appendChild(par);
    check.style.display = 'none';
  });

  del.addEventListener('click', function(){
    const par = this.parentNode;
    par.remove();
   
  });

}
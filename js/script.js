let btn0 = document.getElementsByTagName('li')[0].children[0];
let btn1 = document.getElementsByTagName('li')[1].children[0];
let btn2 = document.getElementsByTagName('li')[2].children[0];
let btn3 = document.getElementsByTagName('li')[3].children[0];
let btn4 = document.getElementsByTagName('li')[4].children[0];
let firstDoc = document.getElementsByClassName('first')[0];
let secondDoc = document.getElementsByClassName('second')[0];
let btn = [btn1,btn2,btn3,btn4];
let selected = 0;
let data;
btn0.addEventListener('click',()=>{
    selected = Number.parseInt(btn0.innerHTML);
    btn0.classList.add('selected');
    btn0.classList.remove('hover');
    btn1.classList.remove('selected');
    btn2.classList.remove('selected');
    btn3.classList.remove('selected');
    btn4.classList.remove('selected');
    afterSubmit(selected);
    console.log('selected',selected);
});
btn1.addEventListener('click',()=>{
    selected = Number.parseInt(btn1.innerHTML);
    btn1.classList.add('selected');
    btn1.classList.remove('hover');
    btn0.classList.remove('selected');
    btn2.classList.remove('selected');
    btn3.classList.remove('selected');
    btn4.classList.remove('selected');
    afterSubmit(selected);
    console.log('selected',selected);
});
btn2.addEventListener('click',()=>{
    selected = Number.parseInt(btn2.innerHTML);
    btn2.classList.add('selected');
    btn2.classList.remove('hover');
    btn0.classList.remove('selected');
    btn1.classList.remove('selected');
    btn3.classList.remove('selected');
    btn4.classList.remove('selected');
    afterSubmit(selected);
    console.log('selected',selected);
});
btn3.addEventListener('click',()=>{ afterSubmit(selected);
    selected = Number.parseInt(btn3.innerHTML);
    btn3.classList.add('selected');
    btn3.classList.remove('hover');
    btn1.classList.remove('selected');
    btn2.classList.remove('selected');
    btn0.classList.remove('selected');
    btn4.classList.remove('selected');
    afterSubmit(selected);
    console.log('selected',selected);
});

btn4.addEventListener('click',()=>{
    selected = Number.parseInt(btn4.innerHTML);
    btn4.classList.add('selected');
    btn4.classList.remove('hover');
    btn1.classList.remove('selected');
    btn2.classList.remove('selected');
    btn3.classList.remove('selected');
    btn0.classList.remove('selected');
    afterSubmit(selected);
    console.log('selected',selected);
});
const afterSubmit=(selected)=>{
    document.getElementsByClassName('chosen')[0].children[0].innerText = selected;
}
// submit btn
let submitBtn = document.getElementById('submit');
submitBtn.addEventListener('click',()=>{
   firstDoc.style.display= 'none'; 
   secondDoc.style.display = 'unset';
});
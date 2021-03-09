'use strict';

function StudentInfo(email,phone,tuition){
    this.email=email;
    this.phone=phone;
    this.tuition=tuition;

    arrOfprop.push(this);
}


let arrOfprop=[]




let container =document.getElementById('tablecontainer')
let tableEl =document.createElement('table');
container.appendChild(tableEl)
let form = document.getElementById('form')
let totalcontainer=document.getElementById('total');
let headEl = document.createElement('h3');
totalcontainer.appendChild(headEl);
let idcount =1;


let trEl =document.createElement('tr');
tableEl.appendChild(trEl); 
let thEl_id=document.createElement('th');
let thEl_name=document.createElement('th');
let thEl_email=document.createElement('th');
let thEl_mobile=document.createElement('th');
let thEl_age=document.createElement('th');
let thEl_tution=document.createElement('th');
trEl.append(thEl_id,thEl_name,thEl_email,thEl_mobile,thEl_age,thEl_tution)
thEl_id.textContent='id';
thEl_name.textContent='name';
thEl_email.textContent='Email';
thEl_mobile.textContent='moblile';
thEl_age.textContent='Age';
thEl_tution.textContent='Tuition';



function showInfo(event){
    event.preventDefault();

    let studentEmail=event.target.email.value;
    let phoneNum=event.target.mobile.value;
    let studentTuition=event.target.tuition.value;
  let  nameOfstd = studentEmail.split("@")[0];

let total;
 let totalArr = [];
 totalArr.push(studentTuition);
 for(let j=0 ;j<totalArr.length ;j++){
    total= totalArr[0]+totalArr[j];
 }

    render(studentEmail,phoneNum,studentTuition,nameOfstd,total);

    saveData(studentEmail,phoneNum,studentTuition,nameOfstd,total);

}

form.addEventListener('submit',showInfo);



function render(a,b,c,d,e){





let trEl1 =document.createElement('tr');
tableEl.appendChild(trEl1);
let tdEl_id=document.createElement('td');
trEl1.appendChild(tdEl_id);
let tdEl_name=document.createElement('td');
trEl1.appendChild(tdEl_name);
let tdEl_email=document.createElement('td');
trEl1.appendChild(tdEl_email);
let tdEl_mobile=document.createElement('td');
trEl1.appendChild(tdEl_mobile);
let tdEl_age=document.createElement('td');
trEl1.appendChild(tdEl_age);
let tdEl_tution=document.createElement('td');
trEl1.appendChild(tdEl_tution);
// trEl1.append(tdEl_id,tdEl_name,tdEl_email,tdEl_mobile,tdEl_age,tdEl_tution)

let age = Math.floor(Math.random() * (24 - 18 + 1) ) + 18;

tdEl_id.textContent=idcount++;
tdEl_name.textContent=d;
tdEl_email.textContent=a;
tdEl_mobile.textContent=b;
tdEl_tution.textContent=c;
tdEl_age.textContent=age;

headEl.textContent=`Total : ${e}`;

}


function saveData(a,b,c){

    let newStudent = new StudentInfo(a,b,c)
    let infoStore =localStorage.setItem('information',JSON.stringify(arrOfprop));
  
}
function getInfo(){

let datax =JSON.parse(localStorage.getItem('information'));

for(let i=0 ; i<datax.length;i++){
render(datax[i].email,datax[i].phone,datax[i].tuition,)
}
}

getInfo();
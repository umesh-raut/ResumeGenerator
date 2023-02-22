function addXpField(params) {
    // console.log('test')
    let newNode=document.createElement('textarea');
newNode.classList.add('form-control');
newNode.classList.add('xpField');
newNode.setAttribute('rows','3');
newNode.setAttribute('placeholder',`Company Name and Location
Job Title|Start-End Date
Enter details about what you did in your previous job including your achievements`);


let xpOb=document.getElementById('xp');
let xpAddButtonOb=document.getElementById('xpAddButton');
xpOb.insertBefore(newNode, xpAddButtonOb);
}

function addEduField(){
    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('eduField');
    newNode.setAttribute('rows', 3);
    newNode.setAttribute('placeholder', `School|college Name
    Field of Study|Compeletion Date
    Include all your academic achievement`);

    let eduOb=document.getElementById('Edu');
    let addEduButtonOb=document.getElementById('addEduButton');
    eduOb.insertBefore(newNode, addEduButtonOb);
    
}
function generateCv(params) {
    // console.log('test');
    //name
    let nameField=document.getElementById('nameField').value;
    let nameT=document.getElementById('nameT');
    nameT.innerHTML=nameField;
    document.getElementById('nameT2').innerHTML=nameField;
    //phone number
    document.getElementById('phoneT').innerHTML=document.getElementById('contactField').value;
    document.getElementById('phoneT2').innerHTML=document.getElementById('contactField').value;
    //address
    document.getElementById('addressT').innerHTML=document.getElementById('addressField').value;
    //email
    document.getElementById('emailT').innerHTML=document.getElementById('emailField').value;
    //objective
    document.getElementById('objectiveT').innerHTML=document.getElementById('summaryField').value;
    //eduation
    let eduObj=document.getElementsByClassName('eduField');
    let str='';
    for(let e of eduObj){
        str +=`<li> ${e.value} </li>`;
    }
    document.getElementById('eduT').innerHTML=str;
    // //work experiene
    let xpObj= document.getElementsByClassName('xpField');
    let str1='';
    for(let e of xpObj){
        str1 += `<li> ${e.value} </li>`
    }
    document.getElementById('xpT').innerHTML= str1;

    document.getElementById('resume').style.display='none';
    document.getElementById('resume-template').style.display='block';


}
function printCv(params) {
    window.print();
}
const cl = console.log;

const submtform = document.getElementById('submtform');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const contact = document.getElementById('contact');
const table = document.getElementById('table');

table.style.fontSize = '18px';


let stdArray = [];

const templating = (arr) => {
    let result = '';
    arr.forEach((std,i) => {
    result += `
            <tr>
                <td>${i + 1}</td>
                <td>${std.fname}</td>
                <td>${std.lname}</td>
                <td>${std.email}</td>
                <td>${std.contact}</td>
            </tr>
        `
        table.innerHTML = result;
    })
    
}


const onSubmit = eve => {
    eve.preventDefault();
    cl('login successfull!!!')
    let stdObj = {
        fname : fname.value,
        lname : lname.value,
        email : email.value,
        contact : contact.value,
    }
    stdArray.push(stdObj);
    cl(stdArray)
    submtform.reset();
    templating(stdArray);
}

submtform.addEventListener('submit', onSubmit);




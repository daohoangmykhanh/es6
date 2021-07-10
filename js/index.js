document.querySelector(' .signup-form .actions ul li:last-child a').onclick = function (){

    let arrInput = document.querySelectorAll('form input, form select');
    content = '';
    for (let i =0; i <arrInput.length; i++){
        let input = arrInput[i];
        let {id,value} = input;
        content += id + ' : ' + value + '<br />' ;
    }

    document.querySelector('.donate-us').innerHTML =  content;

}


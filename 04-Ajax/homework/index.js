let loading = $('#loading');
loading.hide();
$('#boton').click(function() {
    loading.show();
    $.get('http://localhost:5000/amigos', function(data){
        let list = document.querySelector('#lista');
        list.innerHTML = '';
        let element;
        for (let i = 0; i < data.length; i++) {
            element = document.createElement('li');
            element.innerText = `${i+1} ${data[i].name} X`;
            list.appendChild(element);
        }
        loading.hide();    
    });
});

$('#search').click(function(){
    loading.show();
    $.get(`http://localhost:5000/amigos/${document.querySelector('#input').value}`, function(data){
        let span = document.querySelector('#amigo');
        span.innerText = data.name;
        loading.hide();    
    });
});

let inputDelete = document.querySelector('#inputDelete');
let spanD = document.querySelector('#sucess');

$('#delete').click(function(){
    loading.show();
    $.ajax(`http://localhost:5000/amigos/${inputDelete.value}`,{method: 'DELETE'}).done(function(result){
        spanD.innerText = `tu amigo fue borrado con exito`;
        loading.hide();    
    });
});
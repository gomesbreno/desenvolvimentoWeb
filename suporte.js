function main(){
    criarArray();
}main();

function criaArray(){
    var ids = [];
    for(var i = 0; i<6;i++){
        ids.push(document.getElementById(`tela${i}`));        
    }
    return ids;
}
function myfunction(){
    var list = document.getElementsByClassName('criteria');
    console.log(list);
    var listArray=[];
    for (var i=0;i<list.length;i++){
        listArray.push(list[i].value);
        console.log(listArray[i]);
    }
}

var criteriaLiHtml = " <li class='list-group-item d-flex justify-content-between align-items-center'><input type='text' class='form-control col-sm-9 criteria' id='Criteria' placeholder='Criteria name' value='' required=''><button type='button' class='btn btn-danger col-sm-2' onclick='removeLi(this)'>Remove</button></li>"

function addCriteria(){
    if(document.getElementsByClassName('criteria').length<=9){
        document.getElementById('criteria-list').insertAdjacentHTML("beforeend", criteriaLiHtml);
    }else{
        alert("Too many criterias\nMaximum number is 10")
    }
}

function removeLi(elem){
    var li = elem.parentNode;
    li.parentNode.removeChild(li);
}


var alternativesLiHtml = " <li class='list-group-item d-flex justify-content-between align-items-center'><input type='text' class='form-control col-sm-9 alternative' id='alternative' placeholder='Alternative name' value='' required=''><button type='button' class='btn btn-danger col-sm-2' onclick='removeLi(this)'>Remove</button></li>";
function addAlternative(){
    if(document.getElementsByClassName('alternative').length<=9){
        document.getElementById('alternative-list').insertAdjacentHTML("beforeend", alternativesLiHtml);
    }else{
        alert("Too many alternatives\nMaximum number is 10")
    }
}


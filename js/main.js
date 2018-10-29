// TYPES
const Type = ['Text','Number','Yes/No'];
// sub
const Text = ['Equals'];
const Number = ['Equals','Less than','Greater than'];
const Radio = ['Equals'];
const RadioValue = ['Yes','No'];
var first = document.getElementById('main');
const index="item";
const sub="sub";
var indexS = 0;
var indexN = 0;

function addInput() { 

    var item = document.createElement("div");
    var indexItem = index+'-'+indexN.toString();

    item.id=indexItem;
    item.className='item';

    var basic = document.createElement("div");
    basic.className = 'basic';

    var question = document.createElement("div");
    var questionText = document.createTextNode("Question");
    question.appendChild(questionText);
    question.className = "col-xs-4";

    var qInputDiv = document.createElement("div");
    qInputDiv.className = "col-xs-8";
    var qInput = document.createElement("input");
    qInput.type="text";
    qInputDiv.appendChild(qInput);

    var typeText = document.createTextNode("Type");
    var typeTextDiv = document.createElement("div");
    typeTextDiv.appendChild(typeText);
    typeTextDiv.className = "col-xs-4";

    var typeDiv = document.createElement("div");
    typeDiv.className = "col-xs-8";
    var Tselect = document.createElement('select');
    for(var i=0;i<Type.length;i++) { 
        var option=document.createElement("option");
        option.value=Type[i];
        option.text=Type[i];
        Tselect.appendChild(option);
    }
    typeDiv.appendChild(Tselect);

    var tInputDiv = document.createElement("div");
    tInputDiv.className = "col-xs-8";
    var tInput = document.createElement("input");
    tInput.type="text";
    tInputDiv.appendChild(tInput);

    var empty = document.createElement("div");
    empty.className = 'col-xs-5';

    var buttonDiv = document.createElement("div");
    buttonDiv.className = "col-xs-4";
    var addSub = document.createElement("button");
    addSub.className = "btn btn-primary";
    var addSubText = document.createTextNode("Add Sub-Input");
    addSub.appendChild(addSubText);
    
    buttonDiv.appendChild(addSub);

    var deleteDiv = document.createElement("div");
    deleteDiv.className = "col-xs-3";
    var deleteSub = document.createElement("button");
    deleteSub.className = "btn btn-primary";
    var deleteSubText = document.createTextNode("Delete");
    deleteSub.appendChild(deleteSubText);
    
    deleteDiv.appendChild(deleteSub);
    
    first.appendChild(item);
    item.appendChild(basic);
    basic.appendChild(question);
    basic.appendChild(qInputDiv);
    
    basic.appendChild(typeTextDiv);
    basic.appendChild(typeDiv);
    basic.appendChild(empty);
    basic.appendChild(buttonDiv);
    basic.appendChild(deleteDiv);

    // next container

    addSub.onclick = function(elem) {
        var nextDiv = document.createElement('div');
        nextDiv.className='newContainer'; 
    
        item.appendChild(nextDiv);

        var topDiv = document.createElement('div');
        topDiv.className='topDiv';

        var conditionText = document.createTextNode("Condition");
        var conditionTextDiv = document.createElement("div");
        conditionTextDiv.appendChild(conditionText);
        conditionTextDiv.className = "col-xs-4";
        topDiv.appendChild(conditionTextDiv);

        var CselectDiv = document.createElement('div');
        CselectDiv.className = "col-xs-4";
        var conditionSelect = '';

        var CselectDiv2 = document.createElement('div');
        CselectDiv2.className = "col-xs-4";
        var conditionSelect2 = '';
       
        switch(Tselect.value) {
            case Type[0]:
                conditionSelect = Text;
                var conditionSelect2 = document.createElement('input');
                conditionSelect2.type="text";
                break;
            case Type[1]:
                conditionSelect = Number;
                var conditionSelect2 = document.createElement('input');
                conditionSelect2.type="number";
                break;
            case Type[2]:
                conditionSelect = Radio;
                var conditionSelect2 = document.createElement('select');
                for(var i=0;i<RadioValue.length;i++) { 
                    var option=document.createElement("option");
                    option.value=RadioValue[i];
                    option.text=RadioValue[i];
                    console.log(RadioValue[i]);
                    // option.text=Radio[i];
                    conditionSelect2.appendChild(option);
                }
                break;
            default:
                console.log("error");
            }
        var Cselect = document.createElement('select');
        for(var i=0;i<conditionSelect.length;i++) { 
            var option=document.createElement("option");
            option.value=conditionSelect[i];
            option.text=conditionSelect[i];
            Cselect.appendChild(option);
        }
        CselectDiv.appendChild(Cselect);
        topDiv.appendChild(CselectDiv);

        CselectDiv2.appendChild(conditionSelect2);
        
        topDiv.appendChild(CselectDiv2);
        
        nextDiv.appendChild(topDiv);

        first=nextDiv;
        addInput(); 
    };

    deleteSub.onclick = function() {
        // newContainer.remove(); 
        
        if(deleteSub.parentNode.parentNode.parentNode.parentNode.className=='newContainer') {
            deleteSub.parentNode.parentNode.parentNode.parentNode.remove();
        } 
        else {
            deleteSub.parentNode.parentNode.parentNode.remove();
        }
    };

    indexN++;
}
// 비겼을 때 

var wrapper = document.querySelector('#ticTacToe');
var table = document.createElement('table');

var rowArray = [];  // 줄들 
var dataArray = []; // 칸들 

var lineBoolean = false;

var turn = 'X'; // 초기 시작 값 X 
var count = 1;

function dataBoxChecked() {

    var allTd = document.querySelectorAll('td');
    
    console.log(allTd);

    for(var i = 0; i < allTd.length; i++) {
        if(allTd[i].hasAttribute('box-clicked')) {
            console.log(allTd[i].hasAttribute('box-clicked'));
        }
    }

    

    // dataArray.forEach(function(row) {
    //     row.forEach(function(data) {

    //         var allTd = data.hasAttribute('box-clicked');
            
    //         // if(data.hasAttribute('box-clicked') === true > data.length) {
    //         //     console.log('게임이 비겼습니다.');
    //         // } else {

    //         // }

    //     })
    // });

    
}

function result(turn) {
    alert(`${turn} 님이 승리!`);
    lineBoolean = false;
}

function dataClick(event) {
    var row  = rowArray.indexOf(event.target.parentNode);   //몇줄 
    var data = dataArray[row].indexOf(event.target);        //몇칸
    console.log(`몇줄: ${row}, 몇칸: ${data}`);

    // 클릭 했을 때 값이 비어 있으면, 값을 넣음 
    if(dataArray[row][data].textContent === '') {
        dataArray[row][data].textContent = turn;
        dataArray[row][data].setAttribute('box-clicked', 'Y');

        if(dataArray[row][0].textContent === turn && dataArray[row][1].textContent === turn && dataArray[row][2].textContent === turn) {
            // 가로 
            lineBoolean = true;
        } else if(dataArray[0][data].textContent === turn && dataArray[1][data].textContent === turn && dataArray[2][data].textContent === turn) {
            // 세로 
            lineBoolean = true;
        } else if(dataArray[0][0].textContent === turn && dataArray[1][1].textContent === turn && dataArray[2][2].textContent === turn) {
            // 대각선 
            lineBoolean = true;
        } else if(dataArray[0][2].textContent === turn && dataArray[1][1].textContent === turn && dataArray[2][0].textContent === turn) {
            // 대각선 
            lineBoolean = true;
        };

        dataBoxChecked();

        if(lineBoolean) {
            setTimeout(function() {
                result(turn);
                dataArray.forEach(function(row) {
                    row.forEach(function(data) {
                        data.textContent = '';
                    })
                });
            }, 200);
        } else {
            if(turn === 'X') {
                turn = 'O';
            } else {
                turn = 'X';
            };
        }

    } else {
        alert('이미 클릭 했습니다.');
    }
    
}

function init() {
    for(var i = 0; i < 3; i++) {
        var tr = document.createElement('tr');
        rowArray.push(tr);
        dataArray.push([]);
        for(var j = 0; j < 3; j++) {
            var td = document.createElement('td');
            dataArray[i].push(td);;
            td.addEventListener('click', dataClick);
            tr.appendChild(td);
        }
        table.appendChild(tr);
    };
    wrapper.appendChild(table);
}

init();
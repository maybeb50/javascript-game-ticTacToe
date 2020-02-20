var wrapper = document.querySelector('#ticTacToe');
var table = document.createElement('table');
var outline = 3;

var row_array = [];       
var data_array = [];

var count = 0;
var td_length = 9;

var turn = 'X';  // 초기 시작 값 X
var lineSuccess = false;

function reset() {
    lineSuccess = false;
    count = 0;
    data_array.forEach(function(data) {
        data.forEach(function(td) {
            td.textContent = '';
        })
    })
}

function draw() {
    setTimeout(function() {
        alert('무승부입니다');
        reset();
    }, 200);
}

function winner(turn) {
    lineSuccess = true;
    setTimeout(function() {
        alert(`${turn}님이 승리!`);
        reset();
    }, 200);
}

function dataClick(event) {
    var row = row_array.indexOf(event.target.parentNode);   // tr : 0, 1, 2
    var data = data_array[row].indexOf(event.target); // td : 0, 1, 2
    console.log(`TR : ${row} , TD : ${data}`);

    // 클릭 했을 때 값이 비어 있으면 값을 넣음 
    if(data_array[row][data].textContent === '') {
        data_array[row][data].textContent = turn;
        count++;

        if(data_array[row][0].textContent === turn && data_array[row][1].textContent === turn && data_array[row][2].textContent === turn) {
            // 가로 
            winner(turn);
        } else if(data_array[0][data].textContent === turn && data_array[1][data].textContent === turn && data_array[2][data].textContent === turn) {
            // 세로 
            winner(turn);
        } else if(data_array[0][0].textContent === turn && data_array[1][1].textContent === turn && data_array[2][2].textContent === turn) {
            // 대각선 
            winner(turn);
        } else if(data_array[0][2].textContent === turn && data_array[1][1].textContent === turn && data_array[2][0].textContent === turn) {
            // 대각선 
            winner(turn);
        } else if(count === td_length) {
            draw();
        };

        if(turn === 'X') {
            turn = 'O';
        } else {
            turn = 'X';
        };
        
    } else {
        console.log('이미 선택되었습니다.');
    };
}

function init() {
    for(var i = 0; i < outline; i++) {
        var tr = document.createElement('tr');
        row_array.push(tr);
        data_array.push([]);
        for(var j = 0; j < outline; j++) {
            var td = document.createElement('td');
            data_array[i].push(td);
            td.addEventListener('click', dataClick);
            tr.appendChild(td);
        }
        table.appendChild(tr);
    };
    wrapper.appendChild(table);
}

init();
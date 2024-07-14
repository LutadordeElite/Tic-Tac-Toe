let fields = [
    null, 
    null,  
    null,
    null,
    null,
    null,
    null,
    null,
    null,
];


function init(){
    render(); 
}


function render() {
    let html = '<table>';
    for (let i = 0; i < 3; i++) {
        html += '<tr>';
        for (let j = 0; j < 3; j++) {
            const index = i * 3 + j;
            let content = '';
            if (fields[index] === 'circle') {
                content = 'O';
            } else if (fields[index] === 'cross') {
                content = 'X';
            }
            html += `<td onclick="makeMove(${index})">${content}</td>`;
        }
        html += '</tr>';
    }
    html += '</table>';
    document.getElementById('tic-tac-div').innerHTML = html;
}

function makeMove(index) {
    if (!fields[index]) {
        fields[index] = 'cross';  // Example move, should alternate between players
        render();
    }
}

window.onload = render;
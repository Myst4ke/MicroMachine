let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
ctx.imageSmoothingEnabled = false;
let updateFrequency = 30;
//

function changeGameState() {
    switch (gameState) {
        case 'menu':
            drawMenu();
            break;
        case 'solo':
            draw();
            countDown();
            break;
        case 'duo':
            draw();
            countDown();
            break;
    }
}

function initDuoGame() {
    pos1 = new vec2(300, 300);
    player1 = new player(pos1, '1');
    player1.draw();

    pos2 = new vec2(420, 300);
    player2 = new player(pos2, '2');
    player2.draw();
}
function initSoloGame() {
    pos1 = new vec2(350, 300);
    player1 = new player(pos1, '1');
    player1.draw();
}

//Gestion des clicks sur les boutons du menu.
document.onmousedown = checkClick;
function checkClick(event) {
    if(gameState == 'menu'){
        //click sur mode solo
        if(buttons[0].isClicked(event.clientX, event.clientY)){
            gameState = 'solo';
            initSoloGame();
            startingTime = Date.now()+100;
            console.log(gameState);
        //click sur mode duo
        }else if(buttons[1].isClicked(event.clientX, event.clientY)){
            gameState = 'duo';
            startingTime = Date.now()+100;
            initDuoGame();
            console.log(gameState);
        }
    }
}
function draw() {
    ctx.clearRect(0, 0, cnv.width, cnv.height);
    ctx.drawImage(map.img, camera.pos_x, camera.pos_y, map.img.naturalWidth * camera.zoom, map.img.naturalHeight * camera.zoom);
    draw_collision();
    if(gameState === 'duo'){
        player2.draw();
        player1.draw();
    }else if(gameState === 'solo'){
        player1.draw();
    }
    
}

function update () {
    changeGameState();
    //draw();
    //drawMenu();
    //countDown();
}
setInterval(update, updateFrequency);
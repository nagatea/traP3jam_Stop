class Title{
    
    step(){
        if (keyManager.isJustPressed('enter')) scene = SCENE.Ready;
        if (grid.x > 0 && grid.x < 600 && grid.y > 0 && grid.y < 400 && mouseManager.isJustPressed('left')) scene = SCENE.Ready;
    }

    draw(){
        drawImage("title", 0, 0, 600, 400);
    }
}
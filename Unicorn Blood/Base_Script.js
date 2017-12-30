document.title = "Rainbow Pukicorn";
var canvas = document.createElement("canvas");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

var context = canvas.getContext("2d");

var background = new Background();

var p1 = new Player((canvas.width/2) - (120 / 2),
    (canvas.height / 2) - (219 / 2), 120, 219, "Unicorn.png", null, "image");

var p2 = new Player((canvas.width/2) - (120 / 2),
    (canvas.height / 2) - (219 / 2), 120, 219, "Unicorn.png", null, "image");

function Player(x, y, width, height, imageSrc, color, type){
    if (type == "image"){
        var image = document.createElement("IMG");
        image.src = imageSrc;
        image.width = width;
        image.height = height;
        image.alt = imageSrc;
    }
    this.box = new Box(x, y, width, height color);

    this.upupdate = function() {
        for (var button in buttonsDown){
            if (button == "ArrowLeft" || " button == "leftButton) {
                this.box.move(-4, 0);
            }
            else if (button == "ArrowUp" || button == "upButton") {
                this.box.move(0, -4);
            }
            else if (button == "ArrowRight" || button == "rightButton") {
                this.box.move(4, 0);
            }
            else if (button == "ArrowDown" || button == "downButton") {
                this.box.move(0, 4);
            }
            else {
                this.box.move(0, 0);
            }
        }
    }
    this.render = function() {
        if (type == "image") {
            context.shadowBlur = 5;
            context.shadowColor = "hotpink";
            context.drawImge(image, this.box.x, this.box.y);
        }
        else {
            this.box.render();
        }
    }
}

function Box(x, y, width, height, color) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    this.x_speed = 0;
    this.y_speed = 0;

    this.move = function(x, y){
        this.x += x;
        this.y += y;
        this.x_speed = x;
        this.y_speed = y;
        if (this.x < 0) { // hitting the left side
            this.x = 0;
            this.x_speed = 0;
        }
        else if (this.x + this.width > canvas.width) { // Hitting the right side
            this.x = canvas.width - this.width;
            this.x_speed = 0;
        }
        if (this.y < 0) {
            this.y = 0;
            this.y_speed = 0;
        }
        else if (this.y + this.height > canvas.height) {
            this.y = canvas.height - this.height;
            this.y_speed = 0;
        }
    }
    this.render = function() {
        context.fillstyle = color;
        context.fillRect(this.x, this.y, this.width, this.height)
    }
}


function Background() {
    this.groundTick = 0;
    var width = canvas.width;
    var height = canvas.height;
    var middleX = canvas.width / 2;
    var middleY = canvas.height / 2;
    var quarterY = canvas.height / 4;
    var quarterX = canvas.width / 4;

    var sunRdius = (canvas.height / 4) * 0.8;
    var twoPi = 2 * Math.PI;

    var sunGradient = context.createLinearGradient(0, 0, 0, middleY);
    sunGradient.addColorStop(0, "gold");
    sunGradient.addColorStop(0.3, "yello");
    sunGradient.addColorStop(0.7, "red");
    sunGradient.addColorStop(1, "black");

    this.renderSun = function() {


    }
}
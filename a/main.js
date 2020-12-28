canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
c1_width = 120;
c1_height = 75;
c1_x = 10;
c1_y = 10;
c1_img = "CAR 1.png";

car2_width = 115;
car2_height = 135;
c2_x = 10;
c2_y = 60;
c2_img = "CAR 2.png";

bg_img = "https://i.pinimg.com/originals/94/16/17/941617d8a9dafd798981e08354d6eb31.jpg";

function add() {
    bg_imgTag = new Image();
    bg_imgTag.onload = uploadBg;
    bg_imgTag.src = bg_img;

    c1_imgTag = new Image();
    c1_imgTag.onload = uploadc1;
    c1_imgTag.src = c1_img;

    c2_imgTag = new Image();
    c2_imgTag.onload = uploadc2;
    c2_imgTag.src = c2_img;
}

function uploadBg(){
    ctx.drawImage(bg_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadc1(){
    ctx.drawImage(c1_imgTag, c1_x, c1_y, c1_width, c1_height);
}

function uploadc2(){
    ctx.drawImage(c2_imgTag, c2_x, c2_y, car2_width, car2_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    keypressed = e.keyCode;
    console.log(keypressed);
    if(keypressed == "38"){
        c1_up();
        console.log("up key car 1");
    }
    if(keypressed == "40"){
        c1_down();
        console.log("down key car 1");
    }
    if(keypressed == "39"){
        c1_right();
        console.log("right key car 1");
    }
    if(keypressed == "37"){
        c1_left();
        console.log("left key car 1");
    }
    if(keypressed == "87"){
        c2_up();
        console.log("key W");
    }
    if(keypressed == "83"){
        c2_down();
        console.log("key S");
    }
    if(keypressed == "68"){
        c2_right();
        console.log("key D");
    }
    if(keypressed == "65"){
        c2_left();
        console.log("key A");
    }
    if(c1_x > 700){
        console.log("Car 1 Won!");
        document.getElementById("game_status").innerHTML = "Car 1 Won!";
    }
    if(car2_x > 700){
        console.log("Car 2 Won!");
        document.getElementById("game_status").innerHTML = "Car 2 Won!";
    }
}
function c1_up(){
    if (c1_y >= 0){
        c1_y = c1_y - 10;
        console.log("When Up Arrow is pressed  Car1 X=" + c1_x + "Y=" + c1_y);
        uploadBg();
        uploadc1();
        uploadc2();
    }
}
function c1_down(){
    if (c1_y <= 500){
        c1_y = c1_y + 10;
        console.log("When Down Arrow is pressed  Car1 X=" + c1_x + "Y=" + c1_y);
        uploadBg();
        uploadc1();
        uploadc2();
    }
}
function c1_right(){
    if (c1_x <= 700){
        c1_x = c1_x + 10;
        console.log("When Right Arrow is pressed  Car1 X=" + c1_x + "Y=" + c1_y);
        uploadBg();
        uploadc1();
        uploadc2();
    }
}
function c1_left(){
    if (c1_x >= 0){
        c1_x = c1_x - 10;
        console.log("When Left Arrow is pressed  Car1 X=" + c1_x + "Y=" + c1_y);
        uploadBg();
        uploadc1();
        uploadc2();
    }
}
function c2_up(){
    if (c2_y >= 0){
        c2_y = c2_y - 10;
        console.log("When W is pressed  Car2 X=" + c2_x + "Y=" + c2_y);
        uploadBg();
        uploadc1();
        uploadc2();
    }
}
function c2_down(){
    if (c2_y <= 500){
        c2_y = c2_y + 10;
        console.log("When S is pressed  Car2 X=" + c2_x + "Y=" + c2_y);
        uploadBg();
        uploadc1();
        uploadc2();
    }
}
function c2_right(){
    if (c2_x <= 700){
        c2_x = c2_x + 10;
        console.log("When D is pressed  Car2 X=" + c2_x + "Y=" + c2_y);
        uploadBg();
        uploadc1();
        uploadc2();
    }
}
function c2_left(){
    if (c2_x >= 0){
        c2_x = c2_x - 10;
        console.log("When A is pressed  Car2 X=" + c2_x + "Y=" + c2_y);
        uploadBg();
        uploadc1();
        uploadc2();
    }
}

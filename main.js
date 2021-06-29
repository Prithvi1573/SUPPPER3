var canvas= new fabric.Canvas('myCanvas');
var width=30;
var height=30;
player_object="";
block_image_object="";
player_x=100;
player_y=100;
block_image_width=30;
block_image_height=30;
function player_update()
{
    fabric.Image.fromURL("player.png",function(Img)
    {
player_object=Img;
player_object.scaleToWidth(150);
player_object.scaleToHeight(140);
player_object.set(
    {
    top:player_y,
    left:player_x
    });
canvas.add(player_object)
    }
    );
}

function new_image(get_image)
{
    fabric.Image.fromURL(get_image,function(Img)
    {
    block_image_object=Img;
    block_image_object.scaleToWidth(width);
    block_image_object.scaleToHeight(height);
    block_image_object.set(
        {
    top:player_y,
    left:player_x 
        }
    );
    canvas.add(block_image_object);
    }
    );

}
window.addEventListener("keydown",my_keydown);

function my_keydown(e)
{
    keypressed=e.keyCode;
    console.log(keypressed);
    if (e.shiftKey==true && keypressed=='80')
    {
        console.log("p and shift pressed together");
        width=width+10;
        document.getElementById("current_width").innerHTML=width;
        height=height+10;
        document.getElementById("current_height").innerHTML=height;
    }
    if (e.shiftKey==true && keypressed=='77')
    {
        console.log("m and shift pressed together");
        width=width-10;
        document.getElementById("current_width").innerHTML=width;
        height=height-10;
        document.getElementById("current_height").innerHTML=height;
    }
    if(keypressed == '70')
    {
     new_image('spiderman_face.png');
     console.log("f");
    }
    if(keypressed == '66')
    {
     new_image('hulkd_body.png');
     console.log("b");
    }
    if(keypressed == '76')
    {

     new_image('ironman_legs.png');
     console.log("l");
    }
    if(keypressed == '82')
    {

     new_image('thor_right_hand.png');
     console.log("r");
    }
    if(keypressed == '82')
    {

     new_image('ironman_left_hand.png');
     console.log("h");
    }
    if(keypressed == '38')
    {

     up();
     console.log("up");
}
if(keypressed == '40')
{

 down();
 console.log("down");
}
if(keypressed == '37')
{

 left();
 console.log("left");
}
if(keypressed == '39')
{

 right();
 console.log("right");
}
}
function up()
{
if(player_y>=0)
{
    player_y=player_y-height;
    console.log("block image height ="+ height);
    console.log("when up arrow key is pressed, x= "+player_x+",y ="+player_y);
    canvas.remove(player_object);
    player_update();
}
}
function down()
{
if(player_y<=500)
{
    player_y=player_y+height;
    console.log("block image height ="+height);
    console.log("when down arrow key is pressed, x= "+player_x+",y ="+player_y);
    canvas.remove(player_object);
    player_update();    
}
}
function left()
{
    if(player_x>=0)
    {
        player_x=player_x-width;
        console.log("block image width ="+ width);
        console.log("when left arrow key is pressed, x= "+player_x+",y ="+player_y);
        canvas.remove(player_object);
        player_update();  
    }
}
function right()
{
    if(player_x<=850)
    {
        player_x=player_x+width;
        console.log("block image width ="+ width);
        console.log("when right arrow key is pressed, x= "+player_x+",y ="+player_y);
        canvas.remove(player_object);
        player_update();  
    }
}
function clear()
{
 myCanvas.clearRect(0,0,myCanvas.width,myCanvas.height);
}
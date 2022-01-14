var last_position_of_x;
var last_position_of_y;
var mouseEvent = ""
canvas= document.getElementById("myCanvas");
ctx= canvas.getContext("2d");
color="red";
width_of_line=1;
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e)
{
    mouseEvent= "mousedown";
    radius = document.getElementById("radius").value;
}
 
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e)
{
    mouseEvent= "mouseup";
}

canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e)
{
    mouseEvent= "mouseleave";
}

canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e)
{
    current_position_of_mouse_x= e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y= e.clientY - canvas.offsetTop;

    if(mouseEvent == "mousedown")
    {
        console.log("Current position of x and y coordinates = ");
    console.log("x = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
    console.log("Last position of x and y coordinates = ");
    console.log("x = " + last_position_of_x + "y = " + last_position_of_y);

    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_line;
    
    ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, radius,  0, 2 * Math.PI);
    ctx.stroke();
    
    }
    
    }
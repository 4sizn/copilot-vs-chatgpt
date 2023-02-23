const canvas = document.getElementById("chatGptCanvas");
const ctx = canvas.getContext("2d");

// Draw the circle
ctx.beginPath();
ctx.arc(100, 100, 50, 0, Math.PI * 2);
ctx.fillStyle = "yellow";
ctx.fill();

// Draw the eyes
ctx.beginPath();
ctx.arc(80, 80, 10, 0, Math.PI * 2);
ctx.fillStyle = "black";
ctx.fill();
ctx.beginPath();
ctx.arc(120, 80, 10, 0, Math.PI * 2);
ctx.fill();

// Draw the mouth
ctx.beginPath();
ctx.arc(100, 120, 30, 0, Math.PI);
ctx.stroke();

/*
draw smile image using HTMLCanvasElement
Sure! Here is an example of how to draw a smiley face image using the HTML canvas element:

html
Copy code
<canvas id="smileyCanvas" width="200" height="200"></canvas>
In this code snippet, we define a canvas element with an id of smileyCanvas and a width and height of 200 pixels.

Now let's write the JavaScript code to draw the smiley face:

javascript
Copy code
const canvas = document.getElementById('smileyCanvas');
const ctx = canvas.getContext('2d');

// Draw the circle
ctx.beginPath();
ctx.arc(100, 100, 50, 0, Math.PI * 2);
ctx.fillStyle = 'yellow';
ctx.fill();

// Draw the eyes
ctx.beginPath();
ctx.arc(80, 80, 10, 0, Math.PI * 2);
ctx.fillStyle = 'black';
ctx.fill();
ctx.beginPath();
ctx.arc(120, 80, 10, 0, Math.PI * 2);
ctx.fill();

// Draw the mouth
ctx.beginPath();
ctx.arc(100, 120, 30, 0, Math.PI);
ctx.stroke();
In this code snippet, we first get a reference to the canvas element and the 2D context of the canvas using canvas.getContext('2d').

Next, we draw a yellow circle in the center of the canvas using the arc() method of the 2D context, with a center at (100, 100), a radius of 50, and a start angle of 0 and end angle of Math.PI * 2 to draw a complete circle. We set the fillStyle of the context to yellow and call the fill() method to fill the circle.

We then draw two black circles for the eyes using the arc() method with centers at (80, 80) and (120, 80), both with a radius of 10, and fill them in with the fill() method.

Finally, we draw a curved line for the mouth using the arc() method with a center at (100, 120), a radius of 30, and a start angle of 0 and an end angle of Math.PI to draw half a circle. We set the stroke() method to stroke the line.

When you load the HTML page, you should see a smiley face drawn on the canvas element with a yellow circle for the face, black circles for the eyes, and a curved line for the mouth.
*/

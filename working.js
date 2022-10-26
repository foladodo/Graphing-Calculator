let xAxis_yPosition_slider = document.getElementById("x_axis_y_position_slider")
let yAxis_xPosition_slider = document.getElementById("y_axis_x_position_slider")
let gridNumber_slider = document.getElementById("grid_size_slider")
let gridNumber = gridNumber_slider.value
let xAxis_yPosition = xAxis_yPosition_slider.value //bottom
console.log(xAxis_yPosition);
xAxis_yPosition = gridNumber - xAxis_yPosition
console.log(xAxis_yPosition);
let yAxis_xPosition = yAxis_xPosition_slider.value  //left

function setup() {
  createCanvas(600, 600);
  w = width / gridNumber
  h = height / gridNumber
  new_yAxis_xPosition = yAxis_xPosition * w
  new_xAxis_yPosition = xAxis_yPosition * w
}

function placePoint(x,y) {
  circle(new_yAxis_xPosition + x * w, new_xAxis_yPosition +  -y * w, 100/gridNumber + 300/(gridNumber))
}

function fillTile(x,y) {
  strokeWeight(0)
  fill(0,0,0)
  rect(new_yAxis_xPosition + x * w, new_xAxis_yPosition +  -y * w, 100/gridNumber + 500/(gridNumber))
} 

function draw() {
  // Continuosly update w with the changing grid size
  w = width / gridNumber
  h = height / gridNumber
  // new_yAxis_xPosition is like a substitute so the actual y_axis_position stated at the top stays constant
  new_yAxis_xPosition = yAxis_xPosition * w
  new_xAxis_yPosition = xAxis_yPosition * w
  gridNumber = gridNumber_slider.value
  // Minusing from gridNumber to convert it from top to bottom e.g
  // [Canvas width = 600 btw], 100 turns to 500, 200 turns to 400
  xAxis_yPosition = gridNumber - xAxis_yPosition_slider.value
  yAxis_xPosition = yAxis_xPosition_slider.value
  background(220);
  strokeWeight(5)
  // y-axis line
  line(new_yAxis_xPosition , 0 , new_yAxis_xPosition , width)
  // x-axis-line
  line(0 , new_xAxis_yPosition , gridNumber * w , new_xAxis_yPosition)
  strokeWeight(30/gridNumber) 
  // For loop that iterates through the gridNumber and creates a grid LINE for each iteration
  // btw h * gridNumber and width are the same thing
  for (let i = 1; i < gridNumber; i++) {
    line(w * i , 0 , w * i , h * gridNumber)
    line(0 , w * i , w * gridNumber , w * i)
  } 
  for (let i = 1; i < gridNumber; i++) {

    fillTile((i-1) * 4    ,i)
  }
  placePoint(1,1)
}

setInterval( () => {
  // Use for logging stuff while not crashing computer
}, 1200)
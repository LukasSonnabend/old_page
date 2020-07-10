function draw_grid(ctx, minor, major, stroke, fill) {
    //ctx = canvas context
    //take values from functions and pass to calcs in function or give standard values
    minor = minor || 10;
    major = major || minor * 5;
    stroke = stroke || "#00FF00";
    fill = fill || "#0D4A6F";
    //this saves original canvas settings such as lineWidth,strokeStyle, fillStyle
    ctx.save();

    ctx.strokeStyle = stroke;
    ctx.fillStyle = fill;

    let width = ctx.canvas.width, height = ctx.canvas.height

    for(var x = 0 ; x <= width; x += 10){
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height); //if true : if false
        ctx.lineWidth = (x % major == 0) ? 0.75 : 0.5;
        ctx.stroke();
        if(x % major == 0 && x > 0){ctx.fillText(x, x, 10);}
    }
        
    for(var y = 0; y <= height; y += 10){
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.lineWidth = (y % major == 0) ? 0.75 : 0.5;
        ctx.stroke();
        if(y % major == 0 && y > 0){ctx.fillText(y, 0, y + 10);}
    }
    //this restores to parameters that were saved with ctx.save();
    ctx.restore();
}

function draw_pacman(ctx, x, y, radius, mouthStart, fillColor, stroke) {

    var angle = 0.2 * Math.PI * mouthStart;
    
    ctx.save;
    ctx.beginPath();
     // middle point , 150 = radius, start point, end point with kreisformel 
    ctx.arc(x, y, radius, angle, -angle)
    ctx.lineTo(x, y);
    ctx.closePath();
    ctx.lineWidth = 4
    ctx.strokeStyle = stroke;
    ctx.fillStyle = fillColor;
    ctx.stroke();
    ctx.fill();
    ctx.restore();


}

function draw_asteroid(ctx, radius, shape, options) {
    options = options || {};
    ctx.strokeStyle = options.stroke || "white";
    ctx.fillStyle = options.fill || "black";
    ctx.save();
    ctx.beginPath();
    for(let i = 0; i < shape.length; i++) {
      ctx.rotate(2 * Math.PI / shape.length);
      ctx.lineTo(radius + radius * options.noise * shape[i], 0);
    }
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    if(options.guide) {
      ctx.lineWidth = 0.5;
      ctx.beginPath();
      ctx.arc(0, 0, radius, 0, 2 * Math.PI);
      ctx.stroke();
      ctx.beginPath();
      ctx.lineWidth = 0.2;
      ctx.arc(0, 0, radius + radius * options.noise, 0, 2 *Math.PI);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(0, 0, radius - radius * options.noise, 0, 2 *
        Math.PI);
            ctx.stroke();
          }
          ctx.restore();
        }
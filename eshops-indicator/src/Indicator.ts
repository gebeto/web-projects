import { getColorFromRange } from './addons';

class Indicator {
    private canvas: any;
    private config: any;
    private ctx: any;
    private current: any;
    private endGradientAngle: any;
    private endGreenAngle: any;
    private endRedAngle: any;
    private gradientLength: any;
    private indicatorLineWidth: any;
    private indicatorRadius: any;
    private indicatorTitle: any;
    private max: any;
    private maxPosY: any;
    private min: any;
    private minPosY: any;
    private previous: any;
    private size: any;
    private startGradientAngle: any;
    private startGreenAngle: any;
    private startRedAngle: any;

    constructor(canvas, config) {
        this.config = {
            previous: canvas.dataset.previous || config.previous,
            current: canvas.dataset.current || config.current,
            title: canvas.dataset.title || config.title,
        };

        //  this.startGradientAngle = Math.PI - (Math.PI / 4);
        this.startGradientAngle = Math.PI + Math.PI / 8;
        this.endGradientAngle = Math.PI + Math.PI / 2 + Math.PI / 20;
        // this.endGradientAngle = Math.PI + Math.PI / 2 + Math.PI / 16;

        this.startRedAngle = Math.PI - (Math.PI / 4);
        this.endRedAngle = this.startGradientAngle;

        this.startGreenAngle = this.endGradientAngle;
        this.endGreenAngle = 2 * Math.PI + (Math.PI / 4);

        this.gradientLength = Math.abs((this.startGradientAngle - this.endGradientAngle) * 100);

        this.canvas = canvas;
        this.size = this.canvas.width;
        this.canvas.width = this.size;
        this.canvas.height = this.size;

        this.ctx = canvas.getContext('2d');
        this.indicatorRadius = this.size / 3;
        this.indicatorLineWidth = this.indicatorRadius / 2;
        this.ctx.translate(this.size / 2, this.size / 2);
        this.min = 0;
        this.previous = parseFloat(this.config.previous);
        this.max = this.previous * 2;
        this.current = parseFloat(this.config.current);
        this.indicatorTitle = this.config.title.split(' ');

        this.minPosY = Math.sin(this.startRedAngle) * (this.indicatorRadius) - this.size / 15.8;

        this.maxPosY = Math.sin(this.endGreenAngle) * (this.indicatorRadius) - this.size / 15.8;
    }

    getPercentDifference() {
        var result: any = {};
        var up = (this.previous - this.current) < 0 ? true : false;
        var difference = Math.abs(this.previous - this.current);
        var percents = Math.round(difference / (this.previous / 100) * 10) / 10;

        if (up) {
          // 'up';
          result.text = '⬆ ' + percents + '%';
          result.color = '#008800';
        } else {
          // 'down';
          result.text = '⬇ ' + percents + '%'
          result.color = '#ff0000';
        }

        return result;
    }


    draw() {
        // this.ctx.clearRect(0, 0, this.size, this.size);
        this.ctx.fillStyle = '#ffffff';
        this.ctx.fillRect(-this.size, -this.size, this.size * 2, this.size * 2);
        this.drawBackground();
        this.drawArrow();
        this.drawMiddleText();
        this.drawRangeText();
        this.drawPercentArrows();
    }

    drawBackground() {
    	// Draw stroke on red color
        this.ctx.lineWidth = this.indicatorLineWidth + 4;
        this.ctx.beginPath();
        this.ctx.arc(0, 0, this.indicatorRadius, this.startRedAngle - this.size / 75000, this.endRedAngle);
        this.ctx.strokeStyle = '#333';
        this.ctx.stroke();

        //Draw red color
        this.ctx.lineWidth = this.indicatorLineWidth;
        this.ctx.beginPath();
        this.ctx.arc(0, 0, this.indicatorRadius, this.startRedAngle, this.endRedAngle);
        this.ctx.strokeStyle = getColorFromRange(0);
        this.ctx.stroke();

        // Draw gradient
        for (var i = this.startGradientAngle, j = 0; i < this.endGradientAngle; j+= 0.5, i += (this.endGradientAngle / 1000)) {    
          this.ctx.lineWidth = this.indicatorLineWidth + 4;
          this.ctx.beginPath();
          this.ctx.arc(0, 0, this.indicatorRadius, i, this.endGradientAngle);
          this.ctx.strokeStyle = '#fff';
          // this.ctx.strokeStyle = '#333';
          this.ctx.stroke();
          this.ctx.closePath();

          this.ctx.lineWidth = this.indicatorLineWidth;
          this.ctx.beginPath();
          this.ctx.arc(0, 0, this.indicatorRadius, i - 0.01, this.endGradientAngle);
          // this.ctx.strokeStyle = GetPercentageColor(j / this.gradientLength)
          this.ctx.strokeStyle = getColorFromRange(Math.round(j / this.gradientLength * 100));
          this.ctx.stroke();
          this.ctx.closePath();
        }

        // Draw stroke on gradient
        this.ctx.lineWidth = 2;
        this.ctx.beginPath();
        this.ctx.arc(0, 0, this.indicatorRadius + this.indicatorLineWidth / 2 + 1, this.startGradientAngle, this.endGradientAngle);
        this.ctx.strokeStyle = '#333';
        this.ctx.stroke();
        this.ctx.lineWidth = 2;
        this.ctx.beginPath();
        this.ctx.arc(0, 0, this.indicatorRadius - this.indicatorLineWidth / 2 - 1, this.startGradientAngle, this.endGradientAngle);
        this.ctx.strokeStyle = '#333';
        this.ctx.stroke();

        // Draw stroke on green color
        this.ctx.lineWidth = this.indicatorLineWidth + 4;
        this.ctx.beginPath();
        this.ctx.arc(0, 0, this.indicatorRadius, this.startGreenAngle, this.endGreenAngle + this.size / 75000);
        this.ctx.strokeStyle = '#333';
        this.ctx.stroke();

        // Draw green color
        this.ctx.lineWidth = this.indicatorLineWidth;
        this.ctx.beginPath();
        this.ctx.arc(0, 0, this.indicatorRadius, this.startGreenAngle - 0.03, this.endGreenAngle);
        this.ctx.strokeStyle = getColorFromRange(100);
        this.ctx.stroke();

    }

    getArrowAngle() {
        if (this.current > this.max) return -0.25;
        else if (this.current < 0) return -1.75;
        var max = this.max - this.min;
        var curr = this.current - this.min;
        if (curr === 0) return -1.75;
        var perc =    (curr * (1.5 / max));
        return -1.75 + perc;
    }

    drawArrow() {
        var angle = this.getArrowAngle();
        this.ctx.save();
        this.ctx.rotate(Math.PI * angle); //[-1.75, -0.25] 
        
        this.ctx.fillStyle = '#333';
        this.ctx.beginPath();
        this.ctx.moveTo(0, this.size / 2 - this.indicatorLineWidth / 2);
        this.ctx.lineTo(this.indicatorLineWidth / 9, this.size / 2 - this.size / 4 - this.size / 100);
        this.ctx.lineTo(this.indicatorLineWidth / 9 * -1, this.size / 2 - this.size / 4 - this.size / 100);
        this.ctx.closePath();
        this.ctx.fill();
        this.ctx.lineWidth = 1;
        this.ctx.strokeStyle = '#000';
        this.ctx.stroke();
        
        this.ctx.restore();
    }

    drawMiddleText() {
        this.ctx.restore();
        
        this.ctx.textAlign = 'center';
        var currentFontSize = this.size / 7.5;
        this.ctx.font = currentFontSize + 'px Arial';
        this.ctx.fillStyle = '#333';
        this.ctx.fillText(this.current, 0, currentFontSize / 4);
        
        this.ctx.textAlign = 'center';
        var fontSize = this.size / 15;
        this.ctx.font = fontSize + 'px Arial';
        for (var i = 0; i < this.indicatorTitle.length; i++) {
          this.ctx.fillText(this.indicatorTitle[i], 0 , this.size / 5.7 + fontSize * i + currentFontSize / 4);
        }
    }

    drawRangeText() {
        this.ctx.textAlign = 'right';
        this.ctx.font = this.size / 25 + 'px Arial Black';
        this.ctx.fillText(this.min, this.size / 2.9 * -1, this.minPosY + this.indicatorLineWidth / 1.5);
        
        this.ctx.textAlign = 'left';
        this.ctx.font = this.size / 25 + 'px Arial Black';
        this.ctx.fillText(this.max, this.size / 2.9, this.maxPosY + this.indicatorLineWidth / 1.5);
        
        this.ctx.textAlign = 'center';
        this.ctx.font = this.size / 25 + 'px Arial Black';
        var mid = (this.max - this.min) / 2;
        this.ctx.fillText(mid + this.min, 0, this.size / 2.22 * -1);
    }

    drawPercentArrows() {
        // '↑ ↓ ⬆ ⬇';
        this.ctx.textAlign = 'center';
        this.ctx.font = this.size / 16 + 'px Arial Black';
        this.ctx.strokeStyle = '#333';
        this.ctx.lineWidth = this.size / 400;
        if (this.max / 2 > this.current) {
          var percentage = this.getPercentDifference();
          this.ctx.fillStyle = percentage.color;
          this.ctx.fillText(percentage.text, 0, 0 - this.size / 10);
          // this.ctx.strokeText(percentage.text, 0, 0 - this.size / 10);
        } else {
          var percentage = this.getPercentDifference();
          this.ctx.fillStyle = percentage.color;
          this.ctx.fillText(percentage.text, 0, 0 - this.size / 10);
          // this.ctx.strokeText(percentage.text, 0, 0 - this.size / 10);    
        }

    }
}


export default Indicator;
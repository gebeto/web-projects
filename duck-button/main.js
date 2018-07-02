'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LiquidButton = function () {
  function LiquidButton(optionsParam) {
    _classCallCheck(this, LiquidButton);

    var options = optionsParam || {};
    this.tension = options.tension || 0.4;
    this.width = options.width || 200;
    this.height = options.width || 50;
    this.margin = options.margin || 50;
    this.padding = options.padding || 17;
    this.hoverFactor = options.hoverFactor || -0.1;
    this.gap = options.gap || 5;
    this.debug = options.debug || false;
    this.forceFactor = options.forceFactor || 0.2;
    this.color1 = options.color1 || '#36DFE7';
    this.color2 = options.color2 || '#8F17E1';
    this.color3 = options.color3 || '#E509E6';
    this.textColor = options.textColor || '#FFFFFF';
    this.layers = [{
      points: [],
      viscosity: 0.5,
      mouseForce: 100,
      forceLimit: 2
    }, {
      points: [],
      viscosity: 0.8,
      mouseForce: 150,
      forceLimit: 3
    }];
    this.text = options.text || 'Follow me';
    this.canvas = options.canvas || document.createElement('canvas');
    this.context = this.canvas.getContext('2d');
    this.wrapperElement = options.wrapperElement || document.body;
    if (!this.canvas.parentElement) {
      this.wrapperElement.append(this.canvas);
    }
    this.touches = [];
    this.noise = options.noise || 0;
    this.canvas.addEventListener('mousemove', this.mousemove);
    this.canvas.addEventListener('mouseout', this.mouseout);
    this.initOrigins();
    this.animate();
  }

  LiquidButton.prototype.distance = function distance(p1, p2) {
    return Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
  };

  LiquidButton.prototype.update = function update() {
    for (var layerIndex = 0; layerIndex < this.layers.length; layerIndex++) {
      var layer = this.layers[layerIndex];
      var points = layer.points;
      for (var pointIndex = 0; pointIndex < points.length; pointIndex++) {
        var point = points[pointIndex];
        var dx = point.ox - point.x + (Math.random() - 0.5) * this.noise;
        var dy = point.oy - point.y + (Math.random() - 0.5) * this.noise;
        var d = Math.sqrt(dx * dx + dy * dy);
        var f = d * this.forceFactor;
        point.vx += f * (dx / d || 0);
        point.vy += f * (dy / d || 0);
        for (var touchIndex = 0; touchIndex < this.touches.length; touchIndex++) {
          var touch = this.touches[touchIndex];
          var mouseForce = layer.mouseForce;
          if (touch.x > this.margin && touch.x < this.margin + this.width && touch.y > this.margin && touch.y < this.margin + this.height) {
            mouseForce *= -this.hoverFactor;
          }
          var mx = point.x - touch.x;
          var my = point.y - touch.y;
          var md = Math.sqrt(mx * mx + my * my);
          var mf = Math.max(-layer.forceLimit, Math.min(layer.forceLimit, mouseForce * touch.force / md));
          point.vx += mf * (mx / md || 0);
          point.vy += mf * (my / md || 0);
        }
        point.vx *= layer.viscosity;
        point.vy *= layer.viscosity;
        point.x += point.vx;
        point.y += point.vy;
      }
      for (var pointIndex = 0; pointIndex < points.length; pointIndex++) {
        var prev = points[(pointIndex + points.length - 1) % points.length];
        var point = points[pointIndex];
        var next = points[(pointIndex + points.length + 1) % points.length];
        var dPrev = this.distance(point, prev);
        var dNext = this.distance(point, next);

        var line = {
          x: next.x - prev.x,
          y: next.y - prev.y
        };
        var dLine = Math.sqrt(line.x * line.x + line.y * line.y);

        point.cPrev = {
          x: point.x - line.x / dLine * dPrev * this.tension,
          y: point.y - line.y / dLine * dPrev * this.tension
        };
        point.cNext = {
          x: point.x + line.x / dLine * dNext * this.tension,
          y: point.y + line.y / dLine * dNext * this.tension
        };
      }
    }
  };

  LiquidButton.prototype.animate = function animate() {
    var _this = this;

    this.raf(function () {
      _this.update();
      _this.draw();
      _this.animate();
    });
  };

  LiquidButton.prototype.draw = function draw() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    for (var layerIndex = 0; layerIndex < this.layers.length; layerIndex++) {
      var layer = this.layers[layerIndex];
      if (layerIndex === 1) {
        if (this.touches.length > 0) {
          var gx = this.touches[0].x;
          var gy = this.touches[0].y;
          layer.color = this.context.createRadialGradient(gx, gy, this.height * 2, gx, gy, 0);
          layer.color.addColorStop(0, this.color2);
          layer.color.addColorStop(1, this.color3);
        } else {
          layer.color = this.color2;
        }
      } else {
        layer.color = this.color1;
      }
      var points = layer.points;
      this.context.fillStyle = layer.color;

      this.context.beginPath();
      this.context.moveTo(points[0].x, points[0].y);
      for (var pointIndex = 1; pointIndex < points.length; pointIndex += 1) {
        this.context.bezierCurveTo(points[(pointIndex + 0) % points.length].cNext.x, points[(pointIndex + 0) % points.length].cNext.y, points[(pointIndex + 1) % points.length].cPrev.x, points[(pointIndex + 1) % points.length].cPrev.y, points[(pointIndex + 1) % points.length].x, points[(pointIndex + 1) % points.length].y);
      }
      this.context.fill();
    }
    this.context.fillStyle = this.textColor;
    this.context.font = '100 ' + (this.height - this.padding * 2) + 'px sans-serif';
    this.context.textAlign = 'center';
    this.context.textBaseline = 'middle';
    this.context.fillText(this.text, this.canvas.width / 2, this.canvas.height / 2, this.width - this.padding * 2);
    if (this.debug) {
      this.drawDebug();
    }
  };

  LiquidButton.prototype.drawDebug = function drawDebug() {
    this.context.fillStyle = 'rgba(255, 255, 255, 0.8)';
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
    for (var layerIndex = 0; layerIndex < this.layers.length; layerIndex++) {
      var layer = this.layers[layerIndex];
      var points = layer.points;
      for (var pointIndex = 0; pointIndex < points.length; pointIndex++) {
        if (layerIndex === 0) {
          this.context.fillStyle = this.color1;
        } else {
          this.context.fillStyle = this.color2;
        }
        var point = points[pointIndex];
        this.context.fillRect(point.x, point.y, 1, 1);
        this.context.fillStyle = '#000';
        this.context.fillRect(point.cPrev.x, point.cPrev.y, 1, 1);
        this.context.fillRect(point.cNext.x, point.cNext.y, 1, 1);
        this.context.strokeStyle = 'rgba(0, 0, 0, 0.33)';
        this.context.strokeWidth = 0.5;
        this.context.beginPath();
        this.context.moveTo(point.cPrev.x, point.cPrev.y);
        this.context.lineTo(point.cNext.x, point.cNext.y);
        this.context.stroke();
      }
    }
  };

  LiquidButton.prototype.createPoint = function createPoint(x, y) {
    return {
      x: x,
      y: y,
      ox: x,
      oy: y,
      vx: 0,
      vy: 0
    };
  };

  LiquidButton.prototype.initOrigins = function initOrigins() {
    this.canvas.width = this.width + this.margin * 2;
    this.canvas.height = this.height + this.margin * 2;
    for (var layerIndex = 0; layerIndex < this.layers.length; layerIndex++) {
      var layer = this.layers[layerIndex];
      var points = [];
      for (var x = ~ ~(this.height / 2); x < this.width - ~ ~(this.height / 2); x += this.gap) {
        points.push(this.createPoint(x + this.margin, this.margin));
      }
      for (var alpha = ~ ~(this.height * 1.25); alpha >= 0; alpha -= this.gap) {
        var angle = Math.PI / ~ ~(this.height * 1.25) * alpha;
        points.push(this.createPoint(Math.sin(angle) * this.height / 2 + this.margin + this.width - this.height / 2, Math.cos(angle) * this.height / 2 + this.margin + this.height / 2));
      }
      for (var x = this.width - ~ ~(this.height / 2) - 1; x >= ~ ~(this.height / 2); x -= this.gap) {
        points.push(this.createPoint(x + this.margin, this.margin + this.height));
      }
      for (var alpha = 0; alpha <= ~ ~(this.height * 1.25); alpha += this.gap) {
        var angle = Math.PI / ~ ~(this.height * 1.25) * alpha;
        points.push(this.createPoint(this.height - Math.sin(angle) * this.height / 2 + this.margin - this.height / 2, Math.cos(angle) * this.height / 2 + this.margin + this.height / 2));
      }
      layer.points = points;
    }
  };

  _createClass(LiquidButton, [{
    key: 'mousemove',
    get: function get() {
      var _this2 = this;

      return function (e) {
        _this2.touches = [{
          x: e.offsetX,
          y: e.offsetY,
          z: 0,
          force: 1
        }];
      };
    }
  }, {
    key: 'mouseout',
    get: function get() {
      var _this3 = this;

      return function (e) {
        _this3.touches = [];
      };
    }
  }, {
    key: 'raf',
    get: function get() {
      return this.__raf || (this.__raf = (window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (callback) {
        setTimeout(callback, 10);
      }).bind(window));
    }
  }]);

  return LiquidButton;
}();

var redraw = function redraw() {
  button.initOrigins();
};

var button = new LiquidButton();
import { Color } from './Color';

export function Interpolate(start, end, steps, count) {
      var s = start,
            e = end,
            final = s + (((e - s) / steps) * count);
      return Math.floor(final);
}


export function getColorFromRange(val) {
	var red = new Color(255, 0, 0),
	    middle = new Color(255, 255, 0),
	    green = new Color(0, 128, 0),
	    start = red,
	    end = middle;

	if (val > 50) {
	    start = middle,
	        end = green;
	    val = val % 51;
	}
	var startColors = start.getColors(),
	    endColors = end.getColors();
	var r = Interpolate(startColors.r, endColors.r, 50, val);
	var g = Interpolate(startColors.g, endColors.g, 50, val);
	var b = Interpolate(startColors.b, endColors.b, 50, val);
	return "rgb(" + r + "," + g + "," + b + ")";
}
varying vec2 vUv;

uniform sampler2D texture;

void main() {
	vec4 rgba = texture2D(texture, vUv);
	// gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);

	// rgba.x = 0.0;
	// rgba.y = 0.8;
	// rgba.z = 0.0;
	rgba.a = 1.0;

	gl_FragColor = rgba;
}
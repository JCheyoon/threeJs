varying vec2 vUv;

void main()
{
    float bwGradient = vUv.x;
    float bwGradient2 = vUv.y;
    float bwGradient3 = 1.0 -vUv.y;
    float bwGradient4 = vUv.y*10.0;
    float bwGradient5 = mod(vUv.y*10.0,1.0);
    float bwGradient6 = mod(vUv.y*10.0,1.0);
    bwGradient6 =step(0.9,bwGradient6);
    float bwGradient7 = mod(vUv.x*10.0,1.0);
    bwGradient7 =step(0.8,bwGradient7);

    float bwGradient8 = step(0.8, mod(vUv.x * 10.0, 1.0));
    bwGradient8 += step(0.8, mod(vUv.y * 10.0, 1.0));

    float bwGradient9 = step(0.8,mod(vUv.x*10.0,1.0));
    bwGradient9 *= step(0.8, mod(vUv.y * 10.0, 1.0));

    float barA = step(0.4,mod(vUv.x*10.0,1.0));
    barA *= step(0.8, mod(vUv.y * 10.0, 1.0));
    float barB = step(0.4,mod(vUv.y*10.0,1.0));
    barB *= step(0.8, mod(vUv.x * 10.0, 1.0));
    float bwGradient10 =  barA+barB;

    float bar2A = step(0.4,mod(vUv.x*10.0-0.2,1.0));
    bar2A *= step(0.8, mod(vUv.y * 10.0, 1.0));
    float bar2B = step(0.4,mod(vUv.y*10.0-0.2,1.0));
    bar2B *= step(0.8, mod(vUv.x * 10.0, 1.0));
    float bwGradient11 =  bar2A+bar2B;

    float bwGradient12 =abs(vUv.x-0.5);

    gl_FragColor = vec4(bwGradient12,bwGradient12,bwGradient12,1.0);
}
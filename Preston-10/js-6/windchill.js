wind_chill = windChill(69,9)
function windChill(t, s) {
    f = 35.74 + (0.6215 * t) - (35.75 * Math.pow(s, 0.16)) + (0.4275 * t * Math.pow(s, 0.16));
    return f;

}
document.getElementById("chill").innerHTML = wind_chill.toFixed(0);
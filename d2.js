function check_heatindex() {
    let degree_value = Number(document.getElementById('degree_value').value);
    let percentage_value = Number(document.getElementById('percentage_value').value);
    let HeatIndex = degree_value + (0.33 * percentage_value) - 4;

    switch (HeatIndex) {
        case (HeatIndex < 27):
            document.getElementById('display1').innerHTML = HeatIndex + ':' + ' Comfortable/Cool'; break;
        case (HeatIndex > 27):
            document.getElementById('display1').innerHTML = HeatIndex + ':' + ' Warm'; break;
        case (HeatIndex > 32):
            document.getElementById('display1').innerHTML = HeatIndex + ':' + ' Hot'; break;
        case (HeatIndex > 37):
            document.getElementById('display1').innerHTML = HeatIndex + ':' + ' Very Hot/Caution'; break;
        case (HeatIndex > 42):
            document.getElementById('display1').innerHTML = HeatIndex + ':' + ' Extreme Heat/Danger.'; break;
        case (HeatIndex < 0):
            document.getElementById('display1').innerHTML = 'Calculation not working. Invalid output/number.'; break;
    }

}
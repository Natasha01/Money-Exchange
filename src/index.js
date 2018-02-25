// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    var result = new Object();
    if (currency > 10000){
        result.error = "You are rich, my friend! We don't have so much coins for exchange";
    } else {
        var int_part = Math.floor(currency / 50);
        var fract_part = currency % 50;
        if (int_part > 0) {
            result.H = int_part;
        }
        int_part = Math.floor(fract_part / 25);
        fract_part = fract_part % 25;
        if (int_part > 0){
            result.Q = int_part;
        }
        int_part = Math.floor(fract_part / 10);
        fract_part = fract_part % 10;
        if (int_part > 0){
            result.D = int_part;
        }
        int_part = Math.floor(fract_part / 5);
        fract_part = fract_part % 5;
        if (int_part > 0){
            result.N = int_part;
        }
        int_part = fract_part;
        if (int_part > 0){
            result.P = int_part;
        }       
    }
    return result;
}

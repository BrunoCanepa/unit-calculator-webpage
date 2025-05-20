
export const conversor = {

    "Distancia": {
        "cm": 0.01,
        "m": 1,
        "km": 1000
    },
    "Velocidad": {
        "km/h": 1,
        "m/s": 3.6,
        "km/s": 3600
    },

};

export function calToUnit(value, fromUnit, factor) {
    console.log(`valor: ${value}, fromUnit: ${factor[fromUnit]}, factor: ${factor}`)
    return value * factor[fromUnit];
}

export function calFromUnit(value, toUnit, factor) {
    return value / factor[toUnit];
}

export const calcKelvToFahTemp = (data) => {
    return ((data - 273.15) * 9 / 5 + 32).toFixed(2);
}
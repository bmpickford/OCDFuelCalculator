import prices from './fuel.json';

export const FindLitresForFuelPrice = (fuelPrice) => {
    return prices.find(p => parseFloat(p.price).toFixed(2) === parseFloat(fuelPrice).toFixed(2));
}
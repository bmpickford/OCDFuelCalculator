import prices from './fuel.json';

export const FindLitresForFuelPrice = (fuelPrice) => {
    return prices.find(p => p.price == fuelPrice);
}
package main

import (
	"encoding/json"
	"io/ioutil"
	"math"
)

type FuelAmount struct {
	Price  float64   `json:"price"`
	Litres []float64 `json:"litres"`
}

func main() {
	var fuelPrices []FuelAmount

	for i := 0.800; i < 2.000; i = i + 0.001 {
		calculatedLitres := FuelAmount{
			Price:  math.Round(i*1000) / 1000,
			Litres: calculate(i),
		}
		fuelPrices = append(fuelPrices, calculatedLitres)
	}

	file, err := json.MarshalIndent(fuelPrices, "", "\t")
	if err != nil {
		panic(err)
	}

	err = ioutil.WriteFile("../src/data/fuel.json", file, 0644)
	if err != nil {
		panic(err)
	}

}

func calculate(price float64) []float64 {
	litres := make([]float64, 0)
	var totalPrice float64
	if price <= 0 {
		return litres
	}

	for amount := 5.00; amount < 120.00; amount++ {
		amount = math.Round(amount*100) / 100

		totalPrice = amount * price
		totalPrice = math.Round(totalPrice*100) / 100

		if math.Mod(totalPrice, 1) == 0 {
			litres = append(litres, amount)
		}
	}
	return litres
}

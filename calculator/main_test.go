package main

import (
	"reflect"
	"testing"
)

func Test_calculate(t *testing.T) {
	type args struct {
		fuelPrice float64
	}
	tests := []struct {
		name string
		args args
		want []float64
	}{
		{
			name: "Test $0.98",
			args: args{
				fuelPrice: 0.98,
			},
			want: []float64{50, 100},
		},
		{
			name: "Test $0",
			args: args{
				fuelPrice: 0,
			},
			want: []float64{},
		},
		{
			name: "Test $-1",
			args: args{
				fuelPrice: -1,
			},
			want: []float64{},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if got := calculate(tt.args.fuelPrice); !reflect.DeepEqual(got, tt.want) {
				t.Errorf("%s: calculate() = %v, want %v", tt.name, got, tt.want)
			}
		})
	}
}

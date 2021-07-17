package primeNumber

import (
	"fmt"
	"testing"
)

func TestPrime(t *testing.T) {
	if isPrimeNumber(20) == true {
		t.Error("expected 20 to be not prime")
	}
	if isPrimeNumber(17) != true {
		t.Error("expected 17 to be prime")
	}
}

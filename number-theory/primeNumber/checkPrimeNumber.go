package primeNumber

func isPrimeNumber(n int) bool {
	if n == 1 {
		return false // 1 is not prime
	}
	if n == 2 {
		return true // only even prime
	}
	if n%2 == 0 { // other evens are not prime
		return false
	}
	for i := 3; i*i < n; i += 2 { // check only for odd numbers
		if n%i == 0 {
			return false
		}
	}
	return true
}

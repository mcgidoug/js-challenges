function isCyclops(n) {
    let binary = n.toString(2);
    // if odd
    if (binary.length % 2 === 1) {
        // finds mid digit of binary num
        let middle = Math.floor(binary.length / 2);
        // if mid dig is 0
        if (binary[middle] === "0") {
            // loop through left side digits
            for (let i = 0; i < middle; i++) {
                // if digits before 0 are NOT 1s
                if (binary[i] !== "1") {
                    return false;
                }
            }
            // digits before ARE 1s - starts loop after 0
            for (let i = middle + 1; i < binary.length; i++) {
                // if digits after 0 are NOT 1s
                if (binary[i] !== "1") {
                    return false;
                }
            }
            // mid digit 0 and all prior and subsequent digits are 1s
            return true;
        }
    }
    // if binary number even
    return false;
}

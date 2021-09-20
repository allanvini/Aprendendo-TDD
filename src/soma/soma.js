module.exports = {
    getSoma: (...numbers) => {
        let acm = 0;
        numbers.forEach(number => {
            acm += number;
        })
        return acm;
    }
}
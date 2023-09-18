function formatMoney(amount) {
    if(amount) {
        return amount.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
            minimumFractionDigits: 0
        });
    }
}

export default formatMoney

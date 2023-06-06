const formatCurrency = (number, country,currency) => {
    //ex param country: "pt-BR","en-US",...
    //ex param currency: "BRL", "USD",...
    return number.toLocaleString(country, {
        style: "currency",
        currency:currency
    })
}

export default formatCurrency
# Top Movies

It's a library of movies pulled by the API. Here the user will be able to view the most popular movies, see the details and search for titles.

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [How to run the code](#How-to-run-the-code)
- [Author](#author)

## Overview

### Screenshot
![search-desktop](https://github.com/alexandreSouza31/Top_Movies/assets/112407769/c5f6c4bd-b0e2-4743-98d6-039e3093a474)

![details-surface](https://github.com/alexandreSouza31/Top_Movies/assets/112407769/01274afd-966d-47b7-8250-f7c8d2ed8065)

![home-iphone12pro](https://github.com/alexandreSouza31/Top_Movies/assets/112407769/2ee8bb16-4c03-4ee2-9687-ea51bd47960d)



## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- mobile first
- JSX
- ReactJS
- API
- React icons
- React routes
- React hooks


### What I learned

```jsx

//hook to place coin dynamically
const formatCurrency = (number, country,currency) => {
    //ex param country: "pt-BR","en-US",...
    //ex param currency: "BRL", "USD",...
    return number.toLocaleString(country, {
        style: "currency",
        currency:currency
    })
}

export default formatCurrency


```

### Continued development

```
Mobile first, clean code, refactoring, ReactJS, API.
```

### Useful resources

- [Professor-Matheus-Battisti](https://www.youtube.com/watch?v=XqxUHVVO7-U&list=PL5M4_UB58l_g9hm0veEzVWaJv2cBcHWKg&index=2&t=765s) - It was where I started my knowledge in ReactJS, and I was inspired.

- [TMDB-API](https://www.themoviedb.org/) - It's the API I consumed to bring the movies

### How to run the code? 


you can download it to your machine, open the code editor terminal, go into the root folder of the project and type npm run dev. Wait for the terminal to complete and as soon as an address like 'localhost:5500/' or equivalent is shown, copy and paste that address into your browser.


 :)

## Author

- LinkdIn - Alexandre Mariano(https://www.linkedin.com/in/alexandresouza31/)

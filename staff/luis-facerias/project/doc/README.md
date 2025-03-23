# F-Optimus!

## Intro

**F-Optimus** es una aplicación web fácil de usar que ayuda a los usuarios a gestionar su cartera de inversiones de forma eficiente. Utiliza la **frontera eficiente de Markowitz** para calcular la mejor asignación de activos, maximizando el rendimiento con un riesgo controlado. Los usuarios pueden diversificar su portafolio, ajustar sus inversiones y ver el rendimiento a lo largo del tiempo.

La frontera eficiente o f óptima permite asignar capital de una cartera a un activo basándose en los rendimientos anteriores, que disminuye con las pérdidas y aumenta con las ganancias.  De manera que prima la conservación del capital inicial, reduciendo el riesgo.

**F-Optimus** is an easy-to-use web application that helps users efficiently manage their investment portfolios. It uses the **Markowitz efficient frontier** to calculate the best asset allocation, maximizing returns with controlled risk. Users can diversify their portfolio, adjust their investments, and track performance over time.

The efficient frontier, or optimal f, allows capital to be allocated to an asset based on past returns, which decreases with losses and increases with gains. This prioritizes the preservation of initial capital, reducing risk.

![alt text](image-1.png)


## Funcional

### Use Cases
- Crear cartera
- Editar cartera
- Eliminar cartera
- Añadir activos
- Eliminar activos
- Asignar capital a activos
- ...

### UI Design
 [F-optimus in Figma](https://www.figma.com/proto/Cndp5pDRVy1GRpmrI3bC73/F-Optimus?node-id=1-10&p=f&t=jpdODg6tVTTTNIY2-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1)

## Technical

### Blocks

- App (UI)
- API (Core)
- DB (Data)


### Packages
- app (front-end)
- api (back-end)
- com (validation, errors)
- doc (documentation)

### Packages
- HTML/CSS/JS
- React
- Tailwind
- ExpressJS
- NodeJS
- MongoDB

### Data Model
User:
 - username (string, required)
 - email (string, required)
 - password (string, required)
 - registerDate (date, required)
 - portfolios: Array (objects, required)

Portfolios:
 - userId (ObjectId, required)
 - portfolioName  (string, required)
 - funds (double, required)
 - assets: Array (objects, required)
    - assetCapitalAllocation (double, required)
    - securities: Array (objects, required) (percentage stocks, cryptos, Real State, bonds, etc.)

Assets:
- portfolioId (ObjectId, required)
- assetsTypeId (string, required)
- shareName (string, required)(ej: "AAPL", "BTC", "Treasury notes 5y", )
- buyDate (date, required)
- sellDate (date, required)
- purchasePrice (double, required)
- salePrice (double, required)
- stocksNumber (number, required)
- profit (double, required)
- assestStatus (string required) (Bought o Sold)

Prices:
- ticker (string, required)
- priceDate (date, required)
- price (double, required)

Returns:
- ticker (string, required)
- returnsDate (date, required)
- return (double, required)
- range (string, required)

Volatility:
- ticker (string, required)
- volatilityDate (date, required)
- volatility (double, required)

Covariance:
- ticker1 (string, required)
- ticker2 (string, required)
- volatilityDate (date, required)
- covariance (double, required)

Expected_returns:
- ticker  (string, required)
- expected_return (double, required)
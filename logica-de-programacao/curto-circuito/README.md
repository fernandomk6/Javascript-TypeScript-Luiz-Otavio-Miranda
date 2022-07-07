# Curto-circuito (short-circuit)

- && todas precisam ser truthy para que true seja retornado
- || todas precisam ser falsy para que false seja retornado

## &&

Apartir do momento que eu encontrar um **falsy** o codigo é parado e seu valor é retornado

## ||

Apartir do momento que um **truthy** é encontrado, o codigo é parado e seu valor é retornado

## Exemplos de curto circuito

```javascript
console.log('Fernando' && 0 && 1);

// 0 será retornado pois é um falsy. Como vimos o operador && retornará o valor
// do primeiro falsy encontrado e não executará o restante do codigo
```

```javascript
console.log('Fernando' || 0 || 1);

// 'Fernando' será retornado pois é um truthy. Como vimos o operador || retornará
// o valor do primeiro truthy que encontrar e não executará o restante do codigo
```

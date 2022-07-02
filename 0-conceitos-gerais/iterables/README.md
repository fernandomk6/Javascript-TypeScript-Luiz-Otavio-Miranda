# Iterables

Iterables Built-in (Iteráveis Embutidos)

String, Array, TypedArray, Map e Set são iteráveis embutidos, pois 
o protótipo dos objetos de todos eles têm o método Symbol.iterator.

Algumas declarações e expressões esperam por iteradores, por exemplo 
o for-of loops, spread operator (en-US), yield*, e destructuring assignment.
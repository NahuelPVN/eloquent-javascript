# Cap. 2 - Program structure

Un fragmento de código que produce un valor se llama *expression*. Un conjunto de *expressions* es un *statement*. A veces al final del *statement* se debe colocar una semicolon (`;`), aunque a veces JS permite omitirla.

# Bindings / Variables

Para atrapar valores y guardarlos, se utilizan *bindings* o variables.

```jsx
let sum = 2 + 3;
console.log(sum);
// -> 5
```

`let` indica que se va a definir un *binding*, sigue el name del *binding* y el valor que se le asigna.

Esta definición no es permanente, se puede cambiar el valor de una variable existente en cualquier momento.

```jsx
let time = "day";
console.log(time);
// -> day
time = "night";
console.log(time);
// -> night
```

El programa puede solo acceder a variables que fueron previamente definidas.

Con un mismo `let` se pueden definir varias variables, siendo separadas por comas.

```jsx
let a = 10, b = 20;
console.log(a + b);
// -> 30
```

Además de `let`, se pueden utilizar `const` y `var`. `const` define una variable cuyo valor no puede reasignarse. `var` es la forma antigua de declarar variables y tiene reglas distintas a `let` .

El nombre de las variables puede ser cualquier palabra, puede contener números pero no iniciar con ellos. Puede además incluir signos de moneda (`$`) y *underscores* (`_`). Hay una lista de palabras reservadas que no pueden ser utilizadas como variables, como:
`break case catch class const continue debugger default delete do else enum export extends false finally for function if implements import interface in instanceof let new package private protected public return static super switch this throw true try typeof var void while with yield`

Al conjunto de variables y sus valores que existen en cierto momento se lo llama *environment*.
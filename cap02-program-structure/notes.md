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

Al conjunto de variables y sus valores que existen en cierto momento se lo llama *environment*. Al iniciar un programa el *environment* no está vacío, se inicia con ciertas variables que son parte de JS.

# Funciones

Muchos de los valores iniciales del *environment* son del tipo *function.* Una función es un fragmento de programa dentro de un valor. 

Al ejecutar una función se le llama invocarla o llamarla. Los valores entre paréntesis son los argumentos con los que la función trabaja.

Cuando una función devuelve un valor se dice que da ese *return.*

### Prompt

Muestra una caja de diálogo para pedir al usuario un input. No es muy usada, no se tiene control sobre cómo se va a ver la caja de diálogo. ej: `prompt("What's your name?");` 

### Console.log

Escribe sus argumentos a algún tipo de output de texto, en caso del navegador a la consola de JavaScript (F12).

### Number

Convierte un valor a un número. `let theNumber = Number(prompt("Pick a number"))` . Hay que utilizarlo al usar `prompt` ya que este devuelve un string.

### Number.isNaN

Devuelve `true` si el argumento es NaN (not a number) y `false` de no serlo.

# Flujo de control

Cuando un programa contiene más de un *statement*, estos se ejecutan de arriba a abajo.

```jsx
let theNumber = Number(prompt("Pick a number"));
console.log("Your number times two is " + theNumber * 2);
```

## Ejecución condicional

El flujo deja de ser lineal y se desprenden *branches.* Dependiendo de ciertas condiciones se ejecuta una *branch* (fragmento de código) u otra. Se crea usando `if` .

Por ejemplo, para confirmar que el valor con el que se trabaja es un número:

```jsx
let theNumber = Number(prompt("Pick a number"));
if (!Number.isNaN(theNumber)) {
	console.log("Your number times two is " + theNumber * 2);
}
```

El `if` ejecuta o saltea una porción de código. 

Además, `else` define una porción de código que se ejecute cuando no se cumple la condición.

```jsx
let theNumber = Number(prompt("Pick a number"));
if (!Number.isNaN(theNumber)) {
	console.log("Your number times two is " + theNumber * 2);
} else {
	console.log("The input is not a number")
}
```

Si se debe tener en cuenta más de un caso, se pueden conectar muchos `if` con `else if` 

```jsx
let num = Number(prompt("Pick a number"));
if (num < 10) {
	console.log(num + " is a small number");
} else if (num < 100) {
	console.log(num + " is a medium number");
} else {
	console.log(num + " is a big number");
}
```

### Loops *while* y *do*

Sirven para ejecutar un fragmento de código mientras cierta condición se cumpla.

```jsx
let number = 0;
while (number <= 20) {
  console.log(number);
  number = number + 1;
}
```
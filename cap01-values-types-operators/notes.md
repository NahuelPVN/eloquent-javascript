# Cap. 1

# Tipos de valores

### Números

- Pueden ser `integer` (números enteros) o `float` (números con coma flotante).
- Para números muy grandes se puede poner una `e` (exp.): `2.998e8`  = 2.998 × 10^8.
- Las operaciones aritméticas siguen el orden de prioridad de los operadores, de haber dos operaciones con el mismo orden de prioridad se realiza de izquierda a derecha.
- Existe el operador `%` (*remainder* o módulo), es el “resto”, 26 % 5 = 1.

Hay ciertos valores especiales que no tienen comportamiento normal:

- `Infinity` y `-Infinity` representan los infinitos.
- `NaN` (not a number) es un valor numérico, resultado por ejemplo de $0/0$.

### Strings

- Representan texto. Se abren y cierran con ‘ … ’,  “ … ” ó ` … `. Deben abrir y cerrar con el mismo.
- Hay ciertos símbolos más difíciles, como los saltos de linea (*newlines*), funcionan de por sí solo si el string está entre ´´.
- Para introducir símbolos más avanzados, se utiliza una barra invertida (`\`). Para insertar un *newline* se utiliza junto a la letra n ( `\n` ), o para un tab se utiliza con la letra t (`\t` ).
- Para escribir una barra invertida y no quiero que sea interpretada, se utilizan dos barras invertidas seguidas: `"Esto es una barra: \\"` → Esto es una barra: \
- Con ellas no se pueden usar los operadores de división, multiplicación o resta, pero sí la suma. Las strings sumadas no se suman, sino que se concatenan. `"hola " + "mundo"` → “Hola mundo”
- Las strings escritas con corchetes o dobles corchetes se comportan de manera similar. Las que son escritas con *back-tick* (` … `) se comportan distinto, podemos hacer cómputo dentro de ellas, por ejemplo: ``La suma de 14 + 10 es ${14 + 10}`` → `La suma de 14 + 10 es 24`.

### Booleans

- Puede tener únicamente dos valores: `true` ó `false` .

### Valores vacíos

- Hay dos valores especiales que representan la ausencia de valor → `null` y `undefined` . Se llaman valores pero no tienen información.
- Son resultado de operaciones que no producen un resultado con sentido.

### Conversiones automáticas.

- Hay ciertas reglas especiales en JavaScript respecto a como trata datos. Por ejemplo:
    - `console.log(8 * null)` → 0
    - `console.log("5" - 1)` → 4
    - `console.log("5" + 1)` → 51
    - `console.log("five" * 2)` → NaN
    - `console.log(false == 0)` → true
    - `console.log(null == undefined)` → true
    - `console.log(null == 0)` → false
    
    JavaScript intenta convertir los tipos de valores al usar un operador con un tipo de valor incorrecto.
    

### Valores *truthy* o *falsy*

En JavaScript, *falsy* son los valores que se comportan como `false` en una condición. Son:

- `false`
- `0`
- `""` (string vacío)
- `null`
- `undefined`
- `NaN`

Todo lo demás es truthy, como `"0"` o `[]` o `{}`.

# Operadores

- No todos los operadores son símbolos. El operador `typeof` devuelve un string con el tipo de valor que se le da. `console.log(typeof 9.2)` → number
- A los operadores que utilizan dos valores (suma, multiplicación, etc.) se los llama *binary*, a los que utilizan solo uno (`typeof`, etc.) se les llama *unary*. El operador ‘menos’ ($-$) puede ser tanto un operador *binary* (`5 - 2` → 3) como *unary* (`- (10)` → -10).

### De comparación

- `console.log(3 > 2)` → true ó `console.log(3 < 2)` → false. Son *binary* y devuelven valores booleanos. También existen `>=` (mayor o igual) y `<=` (menor o igual).
- Las strings también pueden ser comparadas con estos signos, las letras mayúsculas son “menos” que las minúsculas, etc…
- Operadores similares son los de igualdad (`==`) o desigualdad (`!=`).
- Hay un valor que no es igual a sí mismo → not a number: `console.log(NaN == NaN)` → false
- Existen dos operadores adicionales: `===` y `!==` . Son similares, pero se fijan específicamente en el tipo de valor de las entradas, no intentan la conversión automática.

### Operadores lógicos

- Pueden ser aplicados a valores booleanos. Son: *and*, *or* y *not*.
- El operador `&&` representa el *and* lógico. Devuelve true sólo si ambos valores dados son true.
- El operador `||` representa el *or* lógico. Devuelve true si alguno de los valores dados es true.
- El operador `!` representa el *not*. Es un operador *unary*. `!true` → false.
- Al realizar operaciones con operadores lógicos y operadores aritméticos se sigue un orden de prioridad para no tener que usar muchos paréntesis:
    1. Operadores aritméticos
    2. Operadores de comparación
    3. `&&`
    4. `||`
- Hay un operador lógico que no es ni *binary* ni *unary*, sino *ternary* (opera en 3 valores). Se llama operador condicional (o *ternary*). Si el primer valor es true, “elige” el valor del medio, si es false, “elige” el de la derecha.
`console.log(true ? 1 : 2)` → 1
`console.log(false ? 1 : 2)` → 2

### Cortocircuito de operadores lógicos

`||` devuelve el primer valor que sea "truthy", o el último si ninguno lo es.
`&&` devuelve el primer valor "falsy", o el último si todos son truthy.

- `null || "usuario"` → devuelve `"usuario"` porque null es falsy
- `"admin" || "usuario"` → devuelve `"admin"` porque ya es truthy, ni mira el segundo
- `0 && "hola"` → devuelve `0` porque 0 es falsy, para ahí

La utilidad práctica es que se puede usar esto para valores por defecto:
`const nombre = entradaUsuario || "Anónimo"`

Si `entradaUsuario` es vacío o null, usa "Anónimo". Si tiene valor, usa ese y ni mira "Anónimo".
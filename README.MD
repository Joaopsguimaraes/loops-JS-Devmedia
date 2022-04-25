## Loops Javascript - Devmedia

### for
A instrução for cria um loop que consiste em três expressões opcionais, dentro de parênteses e separadas por ponto e vírgula, seguidas por uma declaração ou uma sequência de declarações executadas em sequência.
```
for ([inicialização]; [condição]; [expressão final]){
   declaração
}
```

### continue
A palavra chave continue termina a atual iteração do laço em que ele se encontra ou de um laço rotulado, e continua a execução deste laço com a próxima iteração.
```
var i = 0;
var n = 0;

while (i < 5) {
  i++;

  if (i === 3) {
    continue;
  }

  n += i;
}
```

### for...in
O laço for...in  interage sobre propriedades enumeradas de um objeto, na ordem original de inserção.  O laço pode ser executado para cada propriedade distinta do objeto.
```
for (variavel in objeto) {
    declaração
}
```

### while
A declaração while cria um laço que executa uma rotina especifica enquanto a condição de teste for avaliada como verdadeira. A condição é avaliada antes da execução da rotina
```
var n = 0;
var x = 0;

while (n < 3) {
  n++;
  x += n;
}
``` 

### while break
Quando usado em laço de repetição, causa uma interrupção imediata do mesmo, continuando a execução do programa na próxima linha após o laço. Isso ocorre caso a condição imposta seja atendida.
```
function testaBreak(x) {
   var i = 0;

   while (i < 6) {
      if (i == 3) {
         break;
      }
      i += 1;
   }
   return i * x;
}
```
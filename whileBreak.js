let funcionarios = [
  { id: 1, nome: "César", habilitado: false },
  { id: 2, nome: "Jéssica", habilitado: false },
  { id: 3, nome: "Renan", habilitado: false },
  { id: 4, nome: "Marlon", habilitado: false },
  { id: 5, nome: "Ana", habilitado: false },
  { id: 6, nome: "Joao", habilitado: true },
];

funcionarios.push({id:7, nome: "Gabriel", habilitado: false})

let contador = 0;
let encontrouHabilitado = false;

while (contador < funcionarios.length) {
  let funcionario = funcionarios[contador];

  if (funcionario.habilitado == true) {
    console.log("Funcionário habilitado encontrado: " + funcionario.nome);
    encontrouHabilitado = true;
    break;//o loop é interropido de vez, saindo do bloco do while
  }

  contador++;
}

if (!encontrouHabilitado) {
  console.log("Nenhum funcionário habilitado encontrado");
}

let error = true

let create_alunos = [
  db.alunos.createIndex({ RA: 1 }, { unique: true }),
  db.alunos.createIndex({ Nome: 1 }),
  db.alunos.createIndex({ Sobrenome: 1 }),
  db.alunos.insert({ RA: '265974164', Nome: 'Gabriel', Sobrenome:'Sousa' }),
  db.alunos.insert({ RA: '22896419', Nome: 'João Vitor', Sobrenome:'Ferreira dos Santos' }),
  db.alunos.insert({ RA: '165465644', Nome: 'Luís', Sobrenome:'Costa' }),
  db.alunos.insert({ RA: '564564654', Nome: 'João', Sobrenome:'Vasconcelos' }),
  db.alunos.insert({ RA: '22013635', Nome: 'Luis', Sobrenome:'Guilherme' })
]

printjson(create_alunos);

let create_professores = [
  db.professores.createIndex({ RP : 1 }, { unique: true }),
  db.professores.createIndex({ Nome : 1 }),
  db.professores.createIndex({ Sobrenome : 1 }),
  db.professores.insert({ RP: '22222222', Nome: 'Jair', Sobrenome:'Bolsonaro' }),
  db.professores.insert({ RP: '13131313', Nome: 'Lula', Sobrenome:'da Silva' }),
  db.professores.insert({ RP: '12121212', Nome: 'Ciro', Sobrenome:'Gomes' })
]


printjson(create_professores);

let create_materias = [
  db.materias.createIndex({ ID : 1 }, { unique: true }),
  db.materias.createIndex({ Nome : 1 }),
  db.materias.createIndex({ Créditos : 1 }),
  db.materias.insert({ ID: '78945625', Nome: 'Organização de Sistemas de Computadores', Créditos:'06' }),
  db.materias.insert({ ID: '69893826', Nome: 'PI: Desenvolvimento de Sistemas Web', Créditos:'06' })
]


printjson(create_materias);

if (error) {
  print('Error, exiting')
  quit(1)
}

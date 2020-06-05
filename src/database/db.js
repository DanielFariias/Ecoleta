//import a dependencia do sqlite3
const sqlite3 = require("sqlite3").verbose()

//iniciar o objeto() que ira fazer configurações no banco de dados
const db = new sqlite3.Database("./src/database/database.db")

//utilizar o objeto() banco de dados, para nossas operaçoes

module.exports = db


db.serialize(() => {
  //   //com comandos SQL:

  //   //1-criar uma tabela
  // db.run(`
  //     CREATE TABLE IF NOT EXISTS places (
  //       id INTEGER PRIMARY KEY AUTOINCREMENT,
  //       image TEXT,
  //       name TEXT,
  //       address TEXT,
  //       address2 TEXT,
  //       state TEXT,
  //       city TEXT,
  //       items TEXT
  //     );
  // `)

  //   //2-inserir dados da tabela
  // const query = `
  //     INSERT INTO places (
  //       image, name, address, address2, state, city, items
  //       ) VALUES (?,?,?,?,?,?,?);
  //   `
  // const values = [
  //   'aaaaaaaaaaa',
  //   'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExMVFRUXFxUXFxUVFxUVFRUVFRUXFhcVFxcYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGi0fHyUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSstLS0tLS0tLS0tLS0tLf/AABEIAKsBJwMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAADBAIFAAEGBwj/xAA6EAABAwIDBQYEBAUFAQAAAAABAAIRAyEEMUEFElFhcQYTIoGRobHB0fAyQlLhBxQjgvEVYnKisjP/xAAZAQADAQEBAAAAAAAAAAAAAAABAgMABAX/xAAkEQEBAAICAgEFAQEBAAAAAAAAAQIRAxIhMUEEEyJRYXEyFP/aAAwDAQACEQMRAD8A8xDVIUityp769Z5jRWgtqW4ttmNCKFNoahvcAhsNJAlbQhUK0+ogOjACyYQ6IcU1Swu9ebcfoltHSFMypuapOpAGAPNSYWjNDY6AIUN9Mu6SgmhrCzBbyzfKL3PJbNDkswIKk16mGcFosW02zDa4Iv5lFqACDpwSXdorKloN/oluJuxg3iVM5xlOuiE0tcRGQ48029kATfJJTQq+Zh3FbcVt5lodrlZGZTmNJWZPZ1J13HXJFxT4CZDWsbAIsqqvULil9018IkSjYNhDp5fYTDKENjit93bMBbYaCxp8OdyqOvKuMSxsDMuSP8tvGQfJPhdBkryhEp7EUx05JJ6rKQMlRctkrRTxkStKe6sDU4bRWlIrSIDgKe6sARQ2ynaCNMDVFLBpZaZTuiPhLaxVxWNapZorGLWmCFNM0cGTeE1h8O0iSUxYQBfqkuQ6KsoaafeSNVfpF+Sc/l7cOOlkOrTafwjLXil3ttEwyUQUtYsjU8S1siCTGfPgl6+Ic62Q4DLz4p5jaW5SIPrRYQUMvJ19EXDYRzzDR',
  //   'aaaaaaaaaaaaaa',
  //   'aaaaaaaaaaaaaa',
  //   '31',
  //   'Minas Gerais',
  //   'Alfredo Vasconcelos',
  //   'Resíduos Eletrônicos,Papéis e Papelão,Óleo de Cozinha'

  // ]

  // function afterInsertData(err) {
  //   if (err) {
  //     return console.log(err)
  //   }

  //   console.log("Cadastrado com sucesso")
  //   console.log(this)
  // }

  //db.run(query, values, afterInsertData)

  //   //3-consultar dados da tabela

  // db.all(`SELECT * FROM places`, function (err, rows) {
  //   if (err) {
  //     return console.log(err)
  //   }
  //   console.log("Aqui estão seus registros: ")
  //   console.log(rows)
  // })



  //4-deletar um dado da tabela


  //   db.run(`DELETE FROM places WHERE id = ?`, [5], function (err) {
  //     if (err) {
  //       return console.log(err)
  //     }
  //     console.log("Deletado com sucesso")

  //   })

})


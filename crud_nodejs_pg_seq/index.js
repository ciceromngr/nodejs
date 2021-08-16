// index.js
(async() => {
    const database = require('./db')
    const Produto = require('./produto')
    await database.sync()

    // POST
    // await produto.create({
    //     nome: 'Teclado Gamer',
    //     preco: 452.35,
    //     descricao: 'Que telcado bom'
    // })

    // GET
    const todosProdutos = await Produto.findAll()
    for(let i = 0; i < todosProdutos.length; i++) {
        console.log('Produtos', i)
        console.table(todosProdutos[i].dataValues)
    }

    //GET id
    const produto = await Produto.findAll({
        where: {
            id: 2
        }
    })
    console.log(produto[0].dataValues.id)
    
    // PUT
    await Produto.update(
        {preco: 1200.50},
        {returning: true, where: {id: produto[0].dataValues.id} }
    )
    

    // E o basico do basico DELETE
    await Produto.destroy({
        where : { id: 1 }
    })

        
})();
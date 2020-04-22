const orm = require("typeorm")

const connect = async () => {
    try {
        return orm.getConnection();
    } catch {
        return orm.createConnection({
            type: 'postgres',
            username: 'user',
            host: 'localhost',
            database: 'Pizza',
            password: 'password',
            port: '5432',
            synchronize: true,
            entities: [
                "./entity/*.js"
            ]
        })
    }
}


const getMenuPositions = async (request, response) => {
    const connection = await connect();
    return connection.getRepository("menu_position").find({
        relations: ["custom_ingredients", "discounts"]
    });
}

const addMenuPosition = async () => {
    const connection = await connect();
    const newIngr = await connection.getRepository("custom_ingredient").save({
        name: "onion",
    })
    await connection.getRepository("menu_position").save({
        name: "Amerykańska",
        size: 40,
        custom_ingredients: [{id: newIngr.id}]
    })
}


module.exports = {
    getMenuPositions,
    addMenuPosition
}
const orm = require('typeorm')

const EntitySchema = orm.EntitySchema

const client = new EntitySchema({
    name: "client",
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true,
        },
        name: {type: "varchar"},
        surname: {type: "varchar"},
        city: {type: "varchar"},
        street: {type: "varchar"},
        home_no: {type: "varchar"},
    },
    relations: {
        orders: {
            target: "order",
            type: "one-to-many",
            inverseSide: "client",
            onDelete: "CASCADE",
        }
    }
})

module.exports = {
    client
}
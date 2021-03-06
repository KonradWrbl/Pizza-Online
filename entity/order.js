const orm = require('typeorm')

const EntitySchema = orm.EntitySchema

const order = new EntitySchema({
    name: "order",
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true,
        },
        date: {type: "date"},
    },
    relations: {
        client: {
            target: "client",
            type: "many-to-one",
            inverseSide: "orders",
        },
        menu_positions: {
            target: "menu_position",
            type: "one-to-many",
            inverseSide: "order",
            cascade: true,
        },

    }
})

module.exports = {
    order
}
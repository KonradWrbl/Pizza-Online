const orm = require('typeorm')

const EntitySchema = orm.EntitySchema

const discount = new EntitySchema({
    name: "discount",
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true,
        },
        name: {type: "varchar"},
        description: {type: "varchar"},
        date_from: {type: "date"},
        date_to: {type: "date"},
    },
    relations: {
        menu_position: {
            target: "menu_position",
            type: "many-to-one",
            inverseSide: "discounts",
        },
    }
})

module.exports = {
    discount
}
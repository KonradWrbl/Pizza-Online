const orm = require('typeorm')

const EntitySchema = orm.EntitySchema

const menuPosition = new EntitySchema({
    name: "menu_position",
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true,
        },
        name: {type: "varchar"},
        size: {type: "int"}
    },
    relations: {
        custom_ingredients: {
            target: "custom_ingredient",
            type: "one-to-many",
            inverseSide: "menu_position",
            cascade: true,
        },
        discounts: {
            target: "discount",
            type: "one-to-many",
            inverseSide: "menu_position",
            cascade: true,
        }

    }
})

module.exports = {
    menuPosition
}
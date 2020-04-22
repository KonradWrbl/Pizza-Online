const orm = require('typeorm')

const EntitySchema = orm.EntitySchema

const customIngredient = new EntitySchema({
    name: "custom_ingredient",
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true,
        },
        name: {type: "varchar"},
    },
    relations: {
        menu_position: {
            target: "menu_position",
            type: "many-to-one",
            inverseSide: "custom_ingredients",
        },
    }
})

module.exports = {
    customIngredient
}
// This is for the data of the products to display.
import tiramisu from "../src/assets/tiramisu.jpg"
import croissant from "../src/assets/croissant.jpg"
import macaron from "../src/assets/macaron.jpg"
import baguette from "../src/assets/baguette.jpg"
import pastelDeNata from "../src/assets/pastel_de_nata.jpg"

export default [
    {
        id: 1,
        name: "Tiramisu",
        description:
            "This is a tiramisu",
        price: 7,
        quantity: 1,
        image: tiramisu,
    },
    {
        id: 2,
        name: "Croissant",
        description:
            "This a french croissant",
        price: 3,
        quantity: 1,
        image: croissant,
    },
    {
        id: 3,
        name: "Macaron",
        description:
            "This a macaron, the flavor is a surprise",
        price: 1,
        quantity: 1,
        image: macaron,
    },
    {
        id: 4,
        name: "Baguette",
        description:
            "This a baguette, from my Expedition 33",
        price: 1,
        quantity: 1,
        image: baguette,
    },
    {
        id: 5,
        name: "Pastel de Nata",
        description:
            "This is a Pastel De Nata, only 1!",
        price: 1,
        quantity: 1,
        image: pastelDeNata,
    }
]
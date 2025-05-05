import "../styles/Shop.css"

export default function Shop() {
     
    const arrayShop = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    return  (
        <div className="container-shop">
            {arrayShop.map((item) => {
                return (
                    <div key={item} className="container-card">
                        Product {item}
                    </div>
                )
            })}
        </div>
    )
}
import backgroundImage from "../assets/background.jpg"
import '../styles/Home.css'

export default function Home() {
    return  (
        <div 
            className="container-home"
            style={{ backgroundImage: `url(${backgroundImage})`}}    
        >
            <h1 className="title-home">Welcome to EatALot</h1>

        </div>
    )
}
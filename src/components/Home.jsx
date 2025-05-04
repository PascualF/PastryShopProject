import backgroundImage from "../assets/background.jpg"
import '../styles/Home.css'

export default function Home() {
    return  (
        <div 
            className="container-home"
            style={{ backgroundImage: `url(${backgroundImage})`}}    
        >

        </div>
    )
}
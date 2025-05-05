export default function Footer() {

    const currentYear = new Date().getFullYear()

    return (
            <footer style={{ padding: "1rem", background: "#eee", color: "black", textAlign: "center", height: "25px" }}>
                <p>&copy; {currentYear} Eatalot</p>
            </footer>
    )
}
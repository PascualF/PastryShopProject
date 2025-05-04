export default function Footer() {

    const currentYear = new Date().getFullYear()

    return (
            <footer style={{ padding: "1rem", background: "#eee", color: "black", textAlign: "center" }}>
                <p>&copy; {currentYear} Eatalot</p>
            </footer>
    )
}
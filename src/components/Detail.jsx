import { useParams } from "react-router"


export default function Detail() {

    const { id } = useParams()

    console.log(id - 1)

    return  (
        <>
            <h1>This is a detailled</h1>
        </>
    )
}
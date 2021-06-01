import "./ErrorModal.css"
import Card from "./Card"

const ErrorModal = (props) => {
    return (
        <div>
        <div className="backdrop" />
        <Card className="modal">
            <header className="error__title">
                <h2>{props.title}</h2>
            </header>
            <div className="error__content">
                <p>{props.message}</p>
            </div>
            <footer className="error__actions">
                <button type="button" onClick={props.onDismiss}>Ok</button>
            </footer>
        </Card>
        </div>
    )
}

export default ErrorModal
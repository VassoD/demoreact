import "./ErrorModal.css"
import Card from "./Card"
import Modal from "./Modal"

const ErrorModal = (props) => {
    return (
        // fragment in order to save divs (or empty tag)
        <Modal>
            <Card className="error">
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
        </Modal>
    )
}

export default ErrorModal
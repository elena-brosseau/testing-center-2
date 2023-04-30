import { render, screen } from "@testing-library/react"
import App from "./App"
import { Provider } from "react-redux"
import { store } from "./store/store"
import { BrowserRouter } from "react-router-dom"

const MockApp = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Provider>
    )
}


test('should show active appointment in viewport', () => {
    render(
        <MockApp/>
    );
})
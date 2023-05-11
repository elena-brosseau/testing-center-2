import { cleanup, fireEvent, render, screen } from "@testing-library/react"
import '@testing-library/jest-dom'
import { Provider } from "react-redux"
import { store } from "../../../store/store"
import { Viewport } from "../Viewport"
import { BrowserRouter } from "react-router-dom"

const MockViewport = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Viewport/>
            </BrowserRouter>
        </Provider>
    )
}

afterEach(cleanup)

describe('Viewport', () => {

    test('should switch tab when clicked', () => {
        render(
            <MockViewport/>
        );
        const studentsTab = screen.getByTestId('students-tab')
        fireEvent.click(studentsTab)
        const studentSearch = screen.getByPlaceholderText('Student Search')
        expect(studentSearch).toBeInTheDocument()
    })

})
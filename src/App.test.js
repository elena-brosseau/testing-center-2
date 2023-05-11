import { cleanup, fireEvent, render, screen } from "@testing-library/react"
import {within} from '@testing-library/dom'
import '@testing-library/jest-dom'
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

afterEach(cleanup)

test('should show active appointment in viewport', () => {
    render(
        <MockApp/>
    );
    const calendarAppts = screen.getAllByTestId('calendar-appt')
    const calendarApptName = within(calendarAppts[0]).getByTestId('calendar-appt-name')
    fireEvent.click(calendarAppts[0])
    const activeName = screen.getByTestId('active-name')

    expect(activeName.innerHTML).toBe(calendarApptName.innerHTML)

})
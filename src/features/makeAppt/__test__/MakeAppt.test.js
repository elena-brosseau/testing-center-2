import { cleanup, fireEvent, render, screen } from "@testing-library/react"
import '@testing-library/jest-dom'
import { MakeAppt } from "../MakeAppt"
import { Provider } from "react-redux"
import { store } from "../../../store/store"

const MockMakeAppt = () => {
    return (
        <Provider store={store}>
            <MakeAppt setActiveTab={() => {}}/>
        </Provider>
    )
}

afterEach(cleanup)

describe('MakeAppt Form', () => {


    test('should render student input', () => {
        render(
            <MockMakeAppt/>
        );
        const studentInputElement = screen.getByPlaceholderText('Student Search');
        expect(studentInputElement).toBeInTheDocument();
    })
    
    test('should be able to type in student input', () => {
        render(
            <MockMakeAppt/>
        );
        const studentInputElement = screen.getByPlaceholderText('Student Search');
        fireEvent.change(studentInputElement, { target: { value: 'Bob' } })
        expect(studentInputElement.value).toBe('Bob');
    })
    
    test('should render classes when there is a student match', () => {
        render(
            <MockMakeAppt/>
        );
        const studentInputElement = screen.getByPlaceholderText('Student Search');
        fireEvent.change(studentInputElement, { target: { value: 'Bob Smith' } })
        const sectionElements = screen.getAllByTestId('section')
        sectionElements.forEach((e, i) => {
            expect(sectionElements[i]).toBeInTheDocument();
        })
    })

    test('should prompt when trying to submit without selecting class', () => {
        render(
            <MockMakeAppt/>
        );
        const studentInputElement = screen.getByPlaceholderText('Student Search');
        const submitBtn = screen.getByText('Confirm')
        fireEvent.change(studentInputElement, { target: { value: 'Bob Smith' } })
        fireEvent.click(submitBtn)
        const errorMsg = screen.getByText(/Please select a class/i)
        expect(errorMsg).toBeInTheDocument();
    })
})

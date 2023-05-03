import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "./AddCategory"

describe('Pruebas en <AddCategory />', () => { 

    test('debe de cambiar el valor de la caja de texto', () => { 

        render(<AddCategory onSetCategories={() => {}} />);
        const input = screen.getByRole('textbox');

        fireEvent.input(input, {target: {value: 'Ahsoka'}});

        expect(input.value).toBe('Ahsoka');

     });

 });
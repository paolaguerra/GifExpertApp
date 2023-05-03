import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "./AddCategory"

describe('Pruebas en <AddCategory />', () => { 

    test('debe de cambiar el valor de la caja de texto', () => { 

        render(<AddCategory onSetCategories={() => {}} />);
        const input = screen.getByRole('textbox');

        fireEvent.input(input, {target: {value: 'Ahsoka'}});

        expect(input.value).toBe('Ahsoka');

     });

     test('debe de llamar onNewCategory si el input tiene un valor', () => { 

        const inputValue = 'Ahsoka';
        const onSetCategories = jest.fn();

        render(<AddCategory onSetCategories={onSetCategories} />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, {target: {value: inputValue}});
        fireEvent.submit(form);
        // screen.debug();
        expect(input.value).toBe('');

        expect(onSetCategories).toHaveBeenCalled();
        expect(onSetCategories).toHaveBeenCalledTimes(1);
        expect(onSetCategories).toHaveBeenCalledWith(inputValue);

      });

      test('no debe de llamar el onSetCategories si el input esta vacio', () => { 
        
        const onSetCategories = jest.fn();
        render(<AddCategory onSetCategories={onSetCategories} />);

        const form = screen.getByRole('form');
        fireEvent.submit(form);

        expect(onSetCategories).not.toHaveBeenCalled();

       });

 });
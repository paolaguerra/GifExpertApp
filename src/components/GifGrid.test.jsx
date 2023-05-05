import { render, screen } from "@testing-library/react";
import { GifGrid } from "./GifGrid";
import { useFetchGifs } from "../Hooks/useFetchGifs";

jest.mock('../Hooks/useFetchGifs');

describe('Pruebas en <GifGrid />', () => { 

    const category = 'Grogu';

    test('debe mostrar el loading inicialmente', () => { 

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });

        render(<GifGrid category={category} />);
        expect(screen.getByText('loading'));
        expect(screen.getByText(category));

     });

    test('debe de mostrar items cuando se cargan las imagenes useFetchGifs', () => { 

        const gifs = [
            {
                id: 'ABC',
                title: 'Ahsoka',
                url: 'https://localhost/ahsoka.jpg'
            },
            {
                id: 'DEF',
                title: 'Syndula',
                url: 'https://localhost/syndula.jpg'
            }
        ]

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });

        render(<GifGrid category={category} />);
        expect(screen.getAllByRole('img').length).toBe(2);

     });

 });
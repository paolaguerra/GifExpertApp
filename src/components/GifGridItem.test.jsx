import { render, screen } from "@testing-library/react"
import { GifGridItem } from "./GifGridItem"

describe('Prueba en <GifGridItem />', () => { 

    const title = 'Ahsoka';
    const url = 'https://star-wars.com/ahsoka.jpg';

    test('debe de hacer match con el snapchot', () => { 

        const {container} = render(<GifGridItem title={title} url={url} />);
        expect(container).toMatchSnapshot();

     });

     test('debe de mostrar la imagen con el URL y el ALT indicado', () => { 

        render(<GifGridItem title={title} url={url} />);
        // screen.debug();
        // expect(screen.getByRole('img').src).toBe(url);
        const {src, alt} = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(alt);

     });

     test('debe de mostrar el titulo en el componente', () => { 

        render(<GifGridItem title={title} url={url} />);
        expect(screen.getByText(title)).toBeTruthy();

      });

 });
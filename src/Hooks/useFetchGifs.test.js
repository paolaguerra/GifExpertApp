import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "./useFetchGifs"

describe('Pruebas en el hook useFetchGifs', () => { 

    test('debe de regresar el estado inicial', () => { 

        const { result } = renderHook( () => useFetchGifs('grogu') );
        const {data, loading} = result.current;

        expect(data.length).toBe(0);
        expect(loading).toBeTruthy();

     });

     test('debe de retornar un arreglo de imagenes y el loading en false', async() => { 

        const { result } = renderHook( () => useFetchGifs('grogu') );
        
        await waitFor(
            () => expect(result.current.data.length).toBeGreaterThan(0)
        );
       
        const {data, loading} = result.current;

        expect(data.length).toBeGreaterThan(0);
        expect(loading).toBeFalsy();

     });
 });
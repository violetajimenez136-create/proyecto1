import { Productos} from "../paginas/productos/productos";

export interface Producto{
    id: number;
    nombre: string;
    descripcion: string;
    precio: number;
    stock: number;
    disponibilidad: boolean;
    imagen: string;
    cantidad : number;
}
import { DonasyBombas } from "./DonasyBombas";
import { Roscas } from "./Roscas";
import { Encargos } from "./Encargos";

export const Categories = {DonasyBombas, Roscas, Encargos};

export const allProducts = DonasyBombas.products.concat(Encargos.products).concat(Roscas.products);
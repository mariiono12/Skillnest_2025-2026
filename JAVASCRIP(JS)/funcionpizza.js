function pizzaMario(tipocorteza, tiposalsa, quesos, salsas){
    let pizza = {
        corteza: tipocorteza,
        salsa: tiposalsa,
        queso: quesos,
        salsaAdicional: salsas
    };
    return pizza
}

let pizza1 = pizzaMario("estilo chicago", "tradicional" ["mozzarella"], ["pepperoni , salchicha"]);
console.log(pizza1);

let pizza2 = pizzaMario("lanzada a mano", "marinara" ["mozzarella, feta"], ["champiñones , aceitunas, cebollas"]);
console.log(pizza1);

let pizza3 = pizzaMario("estilo Pesto", "Pesto verde" ["mozzarella"], ["pollo , champiñones, tomates cherry, cebolla morada"]);
console.log(pizza1);

let pizza4 = pizzaMario("Pizza higos", "higo y jamón serrano" ["mozzarella"], ["Higos, jamón serrano, rúcula fresca"]);
console.log(pizza1);
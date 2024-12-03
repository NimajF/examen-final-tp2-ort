exports.validateGame = (game) => {
  if (!game.nombre || typeof game.nombre !== "string")
    return {
      isValid: false,
      errorMsg: "El nombre es obligatorio y debe ser una cadena.",
    };

  if (!["estrategia", "rol", "cartas", "familiar"].includes(game.categoria))
    return { isValid: false, errorMsg: "La categoría no es válida." };

  if (typeof game.precio !== "number" || game.precio <= 0)
    return {
      isValid: false,
      errorMsg: "El precio debe ser un número mayor a 0.",
    };

  if (typeof game.stock !== "number" || game.stock < 0)
    return {
      isValid: false,
      errorMsg: "El stock debe ser un número mayor o igual a 0.",
    };

  return {
    isValid: true,
    message: `El juego ${game.name} fue ingresado con éxito!!`,
  };
};

exports.validateSale = (sale, game) => {
  if (!game) return { isValid: false, errorMsg: "Juego no encontrado" };
  if (game.stock < sale.cantidad)
    return {
      isValid: false,
      errorMsg: "La cantidad comprada no puede ser mayor al stock",
    };

  if (typeof sale.idJuego !== "number" || sale.idJuego <= 0)
    return {
      isValid: false,
      errorMsg: "El id del juego debe ser un número mayor a 0.",
    };

  if (typeof sale.cantidad !== "number" || sale.cantidad <= 0)
    return {
      isValid: false,
      errorMsg: "La cantidad vendida no puede ser menor o igual a 0.",
    };

  return {
    isValid: true,
    message: `La venta de ${sale.cantidad} unidades del juego ${sale.idJuego} fue realizada con éxito!!`,
  };
};

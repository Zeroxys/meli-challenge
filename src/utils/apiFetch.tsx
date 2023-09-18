export const apiFetch = async (query) => {
  try {
    const response = await fetch(
      `https://api.mercadolibre.com/sites/MLA/search?q=${query}&&limit=4`
    );
    if (!response.ok) {
      throw new Error("Error al buscar elementos");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const apiFetchDetails = async (id) => {
  try {
    const response = await fetch(
      `https://api.mercadolibre.com/items/${id}`
    );
    const responseDescription = await fetch(
      `https://api.mercadolibre.com/items/${id}/description`
    );
    if (!response.ok && !responseDescription.ok) {
      throw new Error("Error al buscar elementos");
    }
    const data = await response.json();
    const dataDescription = await responseDescription.json()

    const formattedData = {
      author: {
        name: "Tu nombre", 
        lastname: "Tu apellido", 
      },
      item: {
        id: data.id,
        title: data.title,
        price: {
          currency: data.currency_id,
          amount: data.price,
          decimals: 2,
        },
        picture: data.pictures[0].url,
        condition: data.condition,
        free_shipping: data.shipping.free_shipping,
        sold_quantity: data.sold_quantity,
        description: dataDescription.plain_text
      },
    };

    return formattedData;
  } catch (error) {
    throw error;
  }
};

const axios = require('axios');

const searchItems = async (req, res) => {
  const { q } = req.query;

  if (!q) return res.status(404).json({ msg: 'Ingresá un criterio de búsqueda' });

  try {
    const response = await axios(`https://api.mercadolibre.com/sites/MLA/search?q=${q}&limit=4`);
    
    res.send(response.data);
  } catch (err) {
    res.status(400).json({ msg: 'Algo salió mal. Intentalo de nuevo!' });
  }
}

const searchItemById = async (req, res) => {
  const { id } = req.params;

  if (!id) return res.status(404).json({ msg: 'Ingresá un id' });

  try {
    const response = await axios(`https://api.mercadolibre.com/items/${id}`);
    
    res.send(response.data);
  } catch (err) {
    res.status(400).json({ msg: 'Algo salió mal. Intentalo de nuevo!' });
  }
}

module.exports = {
  searchItems,
  searchItemById
}
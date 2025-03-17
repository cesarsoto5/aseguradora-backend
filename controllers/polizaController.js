const Poliza = require('../models/poliza');

// Crear una póliza
const crearPoliza = async (req, res) => {
  try {
    const nuevaPoliza = new Poliza(req.body);
    await nuevaPoliza.save();
    res.status(201).json({
      message: 'Póliza creada exitosamente',
      poliza: nuevaPoliza });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Obtener todas las pólizas
const obtenerPolizas = async (req, res) => {
  try {
    const polizas = await Poliza.find();
    res.json(polizas);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtener una póliza por ID
const obtenerPolizaPorId = async (req, res) => {
  try {
    const poliza = await Poliza.findById(req.params.id);
    if (!poliza) return res.status(404).json({ message: 'Póliza no encontrada' });
    res.json(poliza);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Actualizar una póliza por ID
const actualizarPoliza = async (req, res) => {
  try {
    const polizaActualizada = await Poliza.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!polizaActualizada) return res.status(404).json({ message: 'Póliza no encontrada' });
    res.json(polizaActualizada);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Eliminar una póliza por ID
const eliminarPoliza = async (req, res) => {
  try {
    const polizaEliminada = await Poliza.findByIdAndDelete(req.params.id);
    if (!polizaEliminada) return res.status(404).json({ message: 'Póliza no encontrada' });
    res.json({ message: 'Póliza eliminada' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  crearPoliza,
  obtenerPolizas,
  obtenerPolizaPorId,
  actualizarPoliza,
  eliminarPoliza
};
const express = require('express');
const router = express.Router();
const polizaController = require('../controllers/polizaController');

router.post('/', polizaController.crearPoliza);
router.get('/', polizaController.obtenerPolizas);
router.get('/:id', polizaController.obtenerPolizaPorId);
router.put('/:id', polizaController.actualizarPoliza);
router.delete('/:id', polizaController.eliminarPoliza);

module.exports = router;
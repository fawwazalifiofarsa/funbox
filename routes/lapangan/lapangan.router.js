const {
    controllerAdd,
    controllerGet,
    controllerGetId,
    controllerUpdate,
    controllerDelete
} = require('./lapangan.controller');
const router = require('express').Router();
const {checkUser} = require('../../auth/token_user')
const {checkAdmin} = require('../../auth/token_admin')

router.post('/', checkAdmin, controllerAdd);
router.get('/', controllerGet);
router.get('/:id', controllerGetId);
router.put('/:id', checkAdmin, controllerUpdate);
router.delete('/:id', checkAdmin, controllerDelete);

module.exports = router;

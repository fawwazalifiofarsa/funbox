const {
    controllerAdd,
    controllerGet,
    controllerGetId,
    controllerUpdate,
    controllerDelete,
    controllerLogin
} = require('./admin.controller');
const router = require('express').Router();
const {checkAdmin} = require('../../auth/token_admin')

router.post('/', controllerAdd);
router.get('/', checkAdmin, controllerGet);
router.get('/:id', checkAdmin, controllerGetId);
router.put('/:id', checkAdmin, controllerUpdate);
router.delete('/:id', checkAdmin, controllerDelete);
router.post('/login', controllerLogin);

module.exports = router;

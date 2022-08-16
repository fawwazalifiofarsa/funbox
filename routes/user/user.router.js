const {
    controllerAdd,
    controllerGet,
    controllerGetId,
    controllerUpdate,
    controllerDelete,
    controllerLogin
} = require('./user.controller');
const router = require('express').Router();
const {checkUser} = require('../../auth/token_user')
const {checkAdmin} = require('../../auth/token_admin')

router.post('/', controllerAdd);
router.get('/', checkAdmin, controllerGet);
router.get('/:id', checkAdmin, controllerGetId);
router.put('/:id', checkUser, controllerUpdate);
router.delete('/:id', checkUser, controllerDelete);
router.post('/login', controllerLogin);

module.exports = router;

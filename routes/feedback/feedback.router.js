const {
    controllerAdd,
    controllerGet,
    controllerGetId,
    controllerUpdate,
    controllerDelete
} = require('./feedback.controller');
const router = require('express').Router();
const {checkUser} = require('../../auth/token_user')

router.post('/', checkUser, controllerAdd);
router.get('/', controllerGet);
router.get('/:id', controllerGetId);
router.put('/:id', checkUser, controllerUpdate);
router.delete('/:id', checkUser, controllerDelete);

module.exports = router;

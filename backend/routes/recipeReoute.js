const { Router } = require( "express" );

const router = Router()

router.get( "/get", getRecipes);

module.exports = router;
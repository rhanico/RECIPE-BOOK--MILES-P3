const { Router } = require( "express" );
const { 
        getRecipes, 
        saveRecipes,
        updateRecipes, 
        deleteRecipes 
        
    } = require( "../controllers/recipeControllers" );


const router = Router()

router.get( "/get", getRecipes );

router.post( "/save", saveRecipes );

router.put( "/update/:id", updateRecipes );

router.delete( "/delete/id:", deleteRecipes);

module.exports = router;
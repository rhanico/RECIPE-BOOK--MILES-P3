const RecipeModel = require( "../models/recipeModel" );

module.exports.getRecipes = async (req, res) => {
    const recipe = await RecipeModel.find()
    res.send( recipes )
}

module.exports.saveRecipes = (req, res) => {

    const { recipe } = req.body

    RecipeModel.create( { recipe } )
    .then ( (data) => {
        console.log( " Added to the Book!"),
        res.status(201).send(data)
    })
    .cacth((err) => {
        console.log(err);
        res.send({ error: err, msg: "Oppsy, Something Went Wrong!"});
    });
};

module.exports.updateRecipes = (req, res) => {

    const { id } = req.params
    const { recipe } = req.body

    RecipeModel.findByIdAndUpdate( id, { recipe })
    .then(() => res.send( "Updated the Recipe!" ))
    .cacth((err) => {
        console.log(err);
        res.send({ error: err, msg: "Oppsy, Something Went Wrong!"});
    });
};

module.exports.deleteRecipes = (req, res) => {

    const { id } = req.params

    RecipeModel.findByIdAndDelete( id, { recipe })
    .then(() => res.send( "Removed Recipe Successfully!" ))
    .cacth((err) => {
        console.log(err);
        res.send({ error: err, msg: "Oppsy, Something Went Wrong!"});
    });
};
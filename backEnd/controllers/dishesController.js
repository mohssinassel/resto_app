const Dishes = require("../models/ordersModel");

module.export.getAllDishes = async (req, res, next) => {
    try {
        const dishes = await Dishes.find({}).populate("waiter").populate("chef").populate("cashier");
        if(dishes === null) return res.json({msg: "No dishes found"});
        return res.json(dishes);
    } catch (err) {
        next(err);
    }
}

module.export.getDish = async (req, res, next) => {
    try {
        const id = req.body.id;
        const dish_by_id = await Dishes.findById({_id : id});
        if(dish_by_id === null) res.json({msg:`The dish ${id} doesn't exist`})
        return res.json(dish_by_id)
    } catch (err) {
        next(err)
    }
}

module.exports.addDish = async (req, res, next) => {
    try {
        const dish = await Dishes.create(req.body);
        return res.json({msg:"Dish was added successfully"});
    } catch (err) {
        next(err);
    }
}

module.exports.updateDish = async (req, res, next) => {
    try{
        const id = req.body.id;
        const Dish_to_update = await User.findByIdAndUpdate(
            id,
            {
                dishename: req.body.dishename,
                picture_of_plat : req.body.picture_of_plat,
                price: req.body.price,
            },
            { new: true }
          );
        return res.json({msg:`Dish N : ${id} was updated successfully`});
    } catch(err){
        next(err);
    }
}

module.exports.deleteDish = async (req, res, next) => {
    try {
        const id = req.body.id;
        const Dish_to_delete = await Orders.findOneAndDelete({_id:id});
        return res.json({msg:"Dish was deleted successfully"});
    } catch (err) {
        next(err)
    }
}

module.export.getDishByName = async (req, res, next) => {
    try {
        const dishename = req.body.dishename;
        const dish_by_name = await Dishes.findById({dishename : dishename});
        if(dish_by_name === null) res.json({msg:`${dishename} Not Found`})
        return res.json(dish_by_name)
    } catch (err) {
        next(err)
    }
}
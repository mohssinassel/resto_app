const Orders = require("../models/ordersModel");

module.exports.getAllOrders = async (req, res, next) => {
    try {
        const orders = await Orders.find({}).populate("waiter").populate("chef").populate("cashier");
        if(orders === null) return res.json({msg: "No orders found"});
        return res.json(orders);
    } catch (err) {
        next(err);
    }
}

module.exports.addOrder = async (req, res, next) => {
    try {
        const order = await Orders.create(req.body);
        return res.json({msg:"Order was added successfully"});
    } catch (err) {
        next(err);
    }
}

module.exports.updateOrder = async (req, res, next) => {
    try{
        const id = req.body.id;
        const order_to_update = await User.findByIdAndUpdate(
            id,
            {
                date_of_reservation: req.body.date_of_reservation,
                waiter : req.body.waiter,
                chef: req.body.chef,
                cashier: req.body.cashier,
                table : req.body.table,
                dishes : req.body.dishes,
            },
            { new: true }
          );
        return res.json({msg:"Order was updated successfully"});
    } catch(err){
        next(err);
    }
}

module.exports.deleteOrder = async (req, res, next) => {
    try {
        const id = req.body.id;
        const order_to_delete = await Orders.findOneAndDelete({_id:id});
        return res.json({msg:"Order was deleted successfully"});
    } catch (err) {
        next(err)
    }
}

module.exports.getOrdersByWaiter = async (req, res, next) => {
    try {
        const waiter = req.body.waiter;
        const orders = await Orders.find({waiter:waiter});
        if(orders === null) return res.json({msg: "No orders found"});
        return res.json(orders);
    } catch (err) {
        next(err);
    }
}

module.exports.getOrderById = async (req, res, next) => {
    try {
        const id = req.body.id;
        const order_by_id = await Orders.findById(id);
        if(order_by_id === null) res.json({msg:`The order ${id} doesn't exist`})
        return res.json(order_by_id)
    } catch (err) {
        next(err)
    }
}
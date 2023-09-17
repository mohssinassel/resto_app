import MenuAdmin from "../components/MenuAdmin";
import Inventory from "../components/Inventory";
import Orders from "../components/orders";
import Customers from "../components/Customers";

const Admin = ( ) =>{
    return(
        <>
            <MenuAdmin/>
            <Inventory/>
            <Orders/>
            <Customers/>
        </>
    )
}
export default Admin;
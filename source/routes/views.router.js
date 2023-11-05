import { Router } from "express";
import { products } from "../ProductManager.js";
const router = Router();


router.get('/home', async(req,res)=> {
    try {
        const prod = await products.getProducts(req.query);
        res.render('home', {prod});
        //console.log(prods)
    } catch (err) {
        res.status(500).json({message:err.message});
    }
    
});

router.get('/addProd' , (req,res) => {
    res.render('addProd')
});

router.get('/home/:idUser', async (req, res) => {

    const {idUser} = req.params;
    try {
        const product = await products.getProductById(+idUser);
        res.render('productAdded', {product})
    } catch (err) {
        
    }

});

router.get('/realTimeProducts', (req, res) => {
    res.render("realTimeProducts");
});


export default router;




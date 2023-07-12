const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");


//////////////////////
const Product = require("../models/productModel");
const multer = require("multer");

// for image uploading!
const storage = multer.diskStorage({
    destination : function (req,file,cb){
        return cb(null,"./public/images")
    },
    filename : function (req,file,cb){
        return cb(null,`${Date.now()}-${file.originalname}`)
    }
})


const upload = multer({storage});

router.post("/createProduct",upload.array("images",4),async(req,res)=>{
    const files = req.files;
    const imagesArray = [];
    {
        for(let i=0;i<files.length;i++){
            imagesArray.push(files[i].filename);
        }
    }
      const product = {
        ...req.body,
        images:imagesArray
    }

    const result = await Product.create({...product});
    res.status(200).json(result);
});
////////////////////////////////


router.get("/getAllProducts",productController.getAllProducts);
// router.post("/createProduct",productController.create);
router.put("/updateProduct/:id",productController.updateProduct);
router.delete("/deleteProduct/:id",productController.deleteProduct);
router.get("/getProductDetails/:id",productController.getProductDetails);

module.exports=router;
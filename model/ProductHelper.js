const Product =  require('../model_schema/Product_Schema');
const Category = require('../model_schema/Category_Schema');



const createNewProduct = async function(data){
    const newProd = new Product(data);
    const res = await newProd.save();
    if(res){
        return 'ok';
    }
}

const uploadProductImage = async function(prod_id,image_link){
    
    const update = await Product.updateOne({prod_id : prod_id}, {$set : {image_link: image_link}});
    if(update){
        return 'ok';
    }
}

const uploadProductImagevariation1 = async function(prod_id,image_link){
    
    const update = await Product.updateOne({prod_id : prod_id}, {$set : {image_variation1: image_link}});
    if(update){
        return 'ok';
    }
}

const uploadProductImagevariation2 = async function(prod_id,image_link){
    
    const update = await Product.updateOne({prod_id : prod_id}, {$set : {image_variation2: image_link}});
    if(update){
        return 'ok';
    }
}

const deleteProduct = async function(data){
    const deleteOne = await Product.deleteOne(data);
    if(deleteOne){
        return 'ok';
    }
}

const editProduct = async(prod_id,prod_name,price,old_price,cat_name,description,display_home, weight,stock,price_usd,old_price_usd)=>{
    const update = await Product.updateOne({prod_id : prod_id}, {$set : {prod_name:prod_name, price : price,old_price : old_price,cat_name : cat_name,description : description, display_home : display_home,
    weight:weight, stock:stock,price_usd:price_usd,old_price_usd:old_price_usd}});
    if(update){
        return 'ok';
    }
}


const homeProducts = async function(){
    const products = await Product.find({display_home: 'Home'});
    return products;
}

const shopProducts = async function(){
    const products = await Product.find({display_home: 'Shop'});
    return products;
}

const allProducts = async function(){
    const products = await Product.find();
    return products;
}

const createCategory = async function(data){
    const newCat = new Category(data);
    const res = await newCat.save();
    if(res){
        return 'ok';
    }
}

const allCategories = async function(){
    const cat = await Category.find();
    return cat;
}
const prodInfo = async function(data){
    const prodinfo = await Product.findOne(data);
    return prodinfo;
}

const searchName = async function(prod_name){
    const search = await Product.find({prod_name : prod_name});
    return search;
}

const updateStock = async function(prod_id,stock){
    const update = await Product.updateOne({prod_id : prod_id}, {$set : {stock: stock}});
    if(update){
        return 'ok';
    }
}

const deleteCategory = async(data)=>{
   
    const deleteOne = await Category.deleteOne(data);
    if(deleteOne){
        return 'ok';
    }else{
        return 'not okay';
    }
 
}





// const updatePassword = async function(accountNumber,pass){
    
//     const update = await UserSchema.updateOne({account_number : accountNumber}, {$set : {uniquekey: pass}});
// }

// const loadTrans = async function(number,minDate,maxDate){
    
//     const loadlog = await TransactionSchema.find({trans_date : {$gte: minDate, $lte: maxDate}, $and : [{account_number : number}]}).sort({'trans_date': -1});

//     return loadlog;
// }


// const checkAvailAccount = async function(data){
//     const available = await UserSchema.findOne(data);
//     return available;
// }

// const getMarkData = async function(data){
//     const marketer = await MarketersSchema.findOne(data);
//     return marketer;
// }

// const otherUpdates = async(ref,status,newMarkBalance)=>{
//     const update = await TransactionSchema.updateOne({ref : ref}, {$set : {status:status, mark_bal : newMarkBalance}});
// }

// const rejectUpdates = async(accountNumber,status)=>{
//     const update = await UserSchema.updateOne({account_number : accountNumber}, {$set : {status:status}});
// }

// const newNotification = async function(data){
//     const notice = new NotificationSchema(data);
//     const res = await notice.save();
//     if(res){
//         return 'true';
//     }else{
//         return 'false';
//     }
// }

// const last5Trans = async function(data){
//     const trans = await TransactionSchema.find(data).sort({"trans_date": -1}).limit(5);
//     return trans;
// }



// const updateMarkBal = async function(mark_id,bal){
    
//     const update = await MarketersSchema.updateOne({mark_id : mark_id}, {$set : {balance: bal}});

//     if(update){
//         return 'true';
//     }else{
//         return 'false';
//     }
// }

// const loadTransDailySpool = async function(minDate,maxDate,initiator){
    
//     const loadlog = await TransactionSchema.find({trans_date : {$gte: minDate, $lte: maxDate}, $and : [{initiator : initiator}]}).sort({'trans_date': -1});

//     return loadlog;
// }





module.exports.createNewProduct = createNewProduct;
module.exports.uploadProductImage = uploadProductImage;
module.exports.deleteProduct = deleteProduct;
module.exports.editProduct = editProduct;
module.exports.homeProducts = homeProducts;
module.exports.allProducts = allProducts;
module.exports.createCategory = createCategory;
module.exports.allCategories = allCategories;
module.exports.prodInfo =prodInfo;
module.exports.shopProducts = shopProducts;
module.exports.searchName = searchName;
module.exports.updateStock = updateStock;
module.exports.deleteCategory = deleteCategory;
module.exports.uploadProductImagevariation1 = uploadProductImagevariation1;
module.exports.uploadProductImagevariation2 = uploadProductImagevariation2





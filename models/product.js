const { fileLoader } = require('ejs');
const fs = require('fs');
const path = require('path');
const p = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'products.json'
    ); 
const getProductsFromFile = (cb) =>{
    fs.readFile(p,(err,fileContent)=>{
        if(err){
            //return [];
            return cb([]);
        } else {
            cb(JSON.parse(fileContent));
        }
        //return JSON.parse(fileContent);
        //cb(JSON.parse(fileContent));
    });
}

module.exports = class Product {
    constructor(title){
        this.title = title;
    }

    save() {
        //products.push(this);
        //fs.writeFile('products.txt',`${this.title}`,{flag:'a'},err=>console.log(err));
        // const p = path.join(
        // path.dirname(process.mainModule.filename),
        // 'data',
        // 'products.json'
        // );
        getProductsFromFile(products =>{
            products.push(this);
            fs.writeFile(p,JSON.stringify(products),(err)=>{
                console.log(err);
            });
        });
        //fs.readFile(p,(err,fileContent)=>{
            // let products = [];
            // if(!err){
            //     products = JSON.parse(fileContent);
            // }
            // products.push(this);
            // fs.writeFile(p,JSON.stringify(products),(err)=>{
            //     console.log(err);
            // });
        //});
    }

    static fetchAll(cb) {
        // fs.readFile('products.txt',(err,data)=>{
        //     if(err){
        //         console.log(err);
        //     }
        //     const products = `${data}`;
        //     return products;
        // });
        // const p = path.join(
        //     path.dirname(process.mainModule.filename),
        //     'data',
        //     'products.json'
        //     );
        // fs.readFile(p,(err,fileContent)=>{
        //     if(err){
        //         //return [];
        //         cb([]);
        //     }
        //     //return JSON.parse(fileContent);
        //     cb(JSON.parse(fileContent));
        // });
        //return products;
        getProductsFromFile(cb);
    }
}
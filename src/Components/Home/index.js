import { Component } from "react";
import Header from "../Header";
import CategoryCard from "../CategoryCard";

const categoryList=[
  { "categoryName": "Fruits & Vegetables", "categoryImage": "https://www.escoffieronline.com/wp-content/uploads/2014/08/1590226111.jpg" },
  { "categoryName": "Eggs, Meat & Fish", "categoryImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4TXDswydjTxN0gYccXk8w9VGuidoEWp2ELE2OYO8JHyGjfZV73A7FREI2xYxgzJPNhPI&usqp=CAU" },
  { "categoryName": "Foodgrains, Oil & Masala", "categoryImage": "https://www.saravanaonline.in/c/19-category_feature/foodgrains-oil-masala.jpg" },
  { "categoryName": "Cleaning & Household", "categoryImage": "https://odo-cdn.imgix.net/catalog/product/163/396/1633963194.3144.jpeg" },
  { "categoryName": "Beverages", "categoryImage": "https://thumbs.dreamstime.com/b/cans-beverages-19492376.jpg" },
  { "categoryName": "Bakery, Cakes & Dairy", "categoryImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGbrITeabOB1i7YhmeWv4nhrdCeBAsRP-YzQ&usqp=CAU" },
  { "categoryName": "Snacks & Branded Foods", "categoryImage": "https://www.bengalbasket.in/wp-content/uploads/2021/06/Breakfast_Cereals-brandedfoods2.jpg" },
  { "categoryName": "Beauty & Hygiene", "categoryImage": "https://cccapi.cococa.in/public/uploads/subcategory/2021-12-21T09-32-19.014Z-WhatsApp%20Image%202021-12-21%20at%203.00.09%20PM.jpeg" },
  { "categoryName": "Gourmet & World Food", "categoryImage": "https://cdn11.bigcommerce.com/s-6yfyhv23lh/images/stencil/original/uploaded_images/taste-of-italy-gift-box-70520.jpg?t=1700341931" },
  { "categoryName": "Kitchen, Garden & Pets", "categoryImage": "https://s3.ap-southeast-1.amazonaws.com/dha.0d0.co/category/main/e01b0d40-b4c4-40d1-97db-1c2c4bd7cce0" },
  { "categoryName": "Baby Care", "categoryImage": "https://kamrach.com/images/detailed/14/babycare.png" }
]

class Home extends Component {
    render(){
      return(
        <div className="w-screen">
          <div className="font-[Poppins] w-full max-w-full ">
            <Header />
            <div className="w-full max-w-full p-4 px-20">
              <h1 className="text-lg font-semibold">Shop by Category</h1>
              <div className="max-w-full mt-2 flex flex-row flex-wrap ">
                {categoryList.map(eachItem=>(
                  <CategoryCard catDetails={eachItem} key={eachItem.categoryName}/>
                ))}
              </div>
            </div>
          </div>
        </div>
      )
    }
}
  
  export default Home;
  
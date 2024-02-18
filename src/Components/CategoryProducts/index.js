import {Component} from 'react'
import Header from '../Header'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

class CategoryProducts extends Component{
    state={productsList:[],productCount:"",cat:"",subCategories:[]}
    
    componentDidMount() {
        this.getCategoryProducts()
        this.getSubCategories()
    }

    filterObjectsWithSpecialChars=(objects)=> {
          // Filter out objects where subcategory contains / or "
          const filteredObjects = objects.filter((obj) => {
            const subcategoryValue = obj.subCategory || ''; // Handle cases where subCategory is undefined
            return !subcategoryValue.includes('\"'); // Check for backslash '\'
          });
        
          return filteredObjects;
      }
      

    getCategoryProducts = async () => {
        const {match} = this.props
        const {params} = match
        const {category} = params
        this.setState({cat:category})
        const subCat="Cucumber & Capsicum,Root Vegetables"
        try {
            const response = await fetch(`http://localhost:3001/ec/products/${category}/${subCat}`, {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
            });
          
            if (response.ok) {
              const productsData = await response.json();
              console.log("Products:", productsData);
              this.setState({ productsList:productsData ,productCount:productsData.length });
              
              // Handle the user address data as needed
            } else {
              const errorData = await response.json();
              console.error("Error fetching products:", errorData.error);
          
              // Handle the error
            }
          } catch (error) {
            console.error("Error during products fetch:", error.message);
          
            // Handle other errors
          }
      }

      getSubCategories = async () => {
        const {match} = this.props
        const {params} = match
        const {category} = params
        this.setState({cat:category})
        const subCat="Cucumber & Capsicum,Root Vegetables"
        try {
            const response = await fetch(`http://localhost:3001/ec/subcategories/${category}`, {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
            });
          
            if (response.ok) {
              const subcategories = await response.json();
              const finalSubCategories=this.filterObjectsWithSpecialChars(subcategories)
              console.log("Sub-Categories:", finalSubCategories);
              this.setState({subCategories:finalSubCategories})
            } else {
              const errorData = await response.json();
              console.error("Error fetching products:", errorData.error);
          
            }
          } catch (error) {
            console.error("Error during products fetch:", error.message);
          
          }
      }


    render(){
        const {productCount,cat,subCategories}=this.state
        return(
            <div className="flex flex-col h-screen font-[Poppins]">
                <Header />
                <div className="px-8 pt-4 flex flex-row text-slate-700 text-sm">
                    <Link to={`/`} className="font-bold underline underline-offset-4">Home</Link>
                    <p className="mx-2 text-bas">/</p>
                    <p className="underline underline-offset-4">{cat}</p>
                </div>
                <div className="px-8 py-3">
                    <h1 className="font-bold text-2xl">{`${cat} (${productCount})`}</h1>
                </div>
                <div className="flex-1 flex overflow-hidden">
                    <div className="w-3/12 overflow-auto p-4">
                        {/* Content for the left div */}
                        <div className="px-4 mt-2">
                            <p className="font-medium">Shop By Sub-Category</p>
                            <ul className="list-none mt-4">
                                {subCategories.map(eachItem=>(
                                    <li
                                    className="flex mb-2"
                                    key={eachItem.subCategory}
                                  >
                                    <input
                                      type="checkbox"
                                      className=" m0p0"
                                      value={eachItem.subCategory}
                                      onChange={this.onChange1}
                                    />
                                    <p className="text-slate-600 ml-3 text-sm">{eachItem.subCategory}</p>
                                  </li>
                                ))}
                            </ul>
                        </div>
                        {/* Add more content as needed */}
                    </div>
                    <div className="w-9/12 overflow-auto p-4">
                        {/* Content for the right div */}
                        <div className="mt-2">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent
                            libero. Sed cursus ante dapibus diam. Sed nisi.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent
                            libero. Sed cursus ante dapibus diam. Sed nisi.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent
                            libero. Sed cursus ante dapibus diam. Sed nisi.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent
                            libero. Sed cursus ante dapibus diam. Sed nisi.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent
                            libero. Sed cursus ante dapibus diam. Sed nisi.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent
                            libero. Sed cursus ante dapibus diam. Sed nisi.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent
                            libero. Sed cursus ante dapibus diam. Sed nisi.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent
                            libero. Sed cursus ante dapibus diam. Sed nisi.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent
                            libero. Sed cursus ante dapibus diam. Sed nisi.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent
                            libero. Sed cursus ante dapibus diam. Sed nisi.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent
                            libero. Sed cursus ante dapibus diam. Sed nisi.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent
                            libero. Sed cursus ante dapibus diam. Sed nisi.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent
                            libero. Sed cursus ante dapibus diam. Sed nisi.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent
                            libero. Sed cursus ante dapibus diam. Sed nisi.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent
                            libero. Sed cursus ante dapibus diam. Sed nisi.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent
                            libero. Sed cursus ante dapibus diam. Sed nisi.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent
                            libero. Sed cursus ante dapibus diam. Sed nisi.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent
                            libero. Sed cursus ante dapibus diam. Sed nisi.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent
                            libero. Sed cursus ante dapibus diam. Sed nisi.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent
                            libero. Sed cursus ante dapibus diam. Sed nisi.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent
                            libero. Sed cursus ante dapibus diam. Sed nisi.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent
                            libero. Sed cursus ante dapibus diam. Sed nisi.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent
                            libero. Sed cursus ante dapibus diam. Sed nisi.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent
                            libero. Sed cursus ante dapibus diam. Sed nisi.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent
                            libero. Sed cursus ante dapibus diam. Sed nisi.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent
                            libero. Sed cursus ante dapibus diam. Sed nisi.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent
                            libero. Sed cursus ante dapibus diam. Sed nisi.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent
                            libero. Sed cursus ante dapibus diam. Sed nisi.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent
                            libero. Sed cursus ante dapibus diam. Sed nisi.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent
                            libero. Sed cursus ante dapibus diam. Sed nisi.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent
                            libero. Sed cursus ante dapibus diam. Sed nisi.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent
                            libero. Sed cursus ante dapibus diam. Sed nisi.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent
                            libero. Sed cursus ante dapibus diam. Sed nisi.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent
                            libero. Sed cursus ante dapibus diam. Sed nisi.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent
                            libero. Sed cursus ante dapibus diam. Sed nisi.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent
                            libero. Sed cursus ante dapibus diam. Sed nisi.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent
                            libero. Sed cursus ante dapibus diam. Sed nisi.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent
                            libero. Sed cursus ante dapibus diam. Sed nisi.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent
                            libero. Sed cursus ante dapibus diam. Sed nisi.
                        </p><p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent
                            libero. Sed cursus ante dapibus diam. Sed nisi.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent
                            libero. Sed cursus ante dapibus diam. Sed nisi.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent
                            libero. Sed cursus ante dapibus diam. Sed nisi.
                        </p>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CategoryProducts
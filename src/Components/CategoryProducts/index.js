import {Component} from 'react'
import Header from '../Header'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

class CategoryProducts extends Component{
    state={productsList:[],productCount:"",cat:"",subCategories:[]}
    
    componentDidMount() {
        this.getCategoryProducts()
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


    render(){
        const {productCount,cat}=this.state
        return(
            <div className="flex flex-col h-screen font-[Poppins]">
                <Header />
                <div className="p-3 flex flex-row">
                    <Link to={`/`} className="font-semibold text-base">Home</Link>
                    <p className="mx-2 text-base">/</p>
                    <p className="text-base">{cat}</p>
                </div>
                <div className="flex-1 flex overflow-hidden">
                    <div className="w-2/12 overflow-auto p-4">
                        {/* Content for the left div */}
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent
                            libero. Sed cursus ante dapibus diam. Sed nisi.
                        </p>
                        {/* Add more content as needed */}
                    </div>
                    <div className="w-10/12 overflow-auto p-4">
                        {/* Content for the right div */}
                        <div>
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
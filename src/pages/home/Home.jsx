import HomeSlider from "../../components/ui/HomeSlider";
import ProductCard from "../../components/ui/ProductCard/ProductCard";

export default function Home() {
    return (
        <>
            <div>
                {/* <h1>HomePage</h1> */}
                <HomeSlider />
            </div>

            <div className="shocase-cards flex justify-evenly">
                <ProductCard />
                <ProductCard />
            </div>
        </>
        
    )
}
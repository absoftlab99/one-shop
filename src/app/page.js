import HomeMian from "@/components/Home/HomeMian";
import ProductsMain from "@/components/Shop/ProductsMain";


export default function Home() {
  // const props = { name: 'button', btnText: 'Button', style: { round: 'rounded-full', bgColor: 'btn btn-primary', } };
  return (
    <div>
      <HomeMian></HomeMian>
      <ProductsMain></ProductsMain>
    </div>
  );
}

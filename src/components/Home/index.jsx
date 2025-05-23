import ipharm from "../../data/ipharmProducts.json";
import SectionStyleFour from "../Helpers/SectionStyleFour";
import SectionStyleThree from "../Helpers/SectionStyleThree";
import SectionStyleTwo from "../Helpers/SectionStyleTwo";
import ViewMoreTitle from "../Helpers/ViewMoreTitle";
import Banner from "./Banner";
import BrandSection from "./BrandSection";
import ProductsAds from "./ProductsAds";
import LayoutHomeThree from "../Partials/LayoutHomeThree";
import SectionStyleOneHmThree from "../Helpers/SectionStyleOneHmThree";

export default function HomeThree() {
  const {ipharmProducts } = ipharm
  const products = ipharmProducts
  const brands = [];
  products.forEach((product) => {
    brands.push(product.brand);
  });
  return (
    <>
      <LayoutHomeThree type={3} childrenClasses="pt-0">
        <Banner className="banner-wrapper mb-10" />
        <BrandSection
          type={3}
          sectionTitle="Shop by Brand"
          className="brand-section-wrapper mb-[60px]"
        />
        <SectionStyleThree
          type={3}
          products={ipharmProducts}
          sectionTitle="New Arrivals"
          seeMoreUrl="/all-products"
          className="new-products mb-[60px]"
        />
        <ProductsAds
          ads={[`${import.meta.env.VITE_PUBLIC_URL}/assets/ipharm/home/banner1.png`]}
          className="products-ads-section mb-[60px]"
        />

        <SectionStyleOneHmThree
          type={3}
          products={products}
          brands={brands}
          categoryTitle="Mobile & Tablet"
          sectionTitle="Trusted Essentials"
          seeMoreUrl="/all-products"
          className="category-products mb-[60px]"
        />

        <ViewMoreTitle
          className="top-selling-product mb-[60px]"
          seeMoreUrl="/all-products"
          categoryTitle="Top Selling Products"
        >
          <SectionStyleTwo
            type={3}
            products={products.slice(3, products.length)}
          />
        </ViewMoreTitle>
x-
        <ProductsAds
          ads={[
            `${
            import.meta.env.VITE_PUBLIC_URL
          }/assets/ipharm/home/banner2.png`,
          ]}
          sectionHeight="sm:h-[295px] h-full"
          className="products-ads-section mb-[60px]"
        />
        <SectionStyleOneHmThree
          type={3}
          categoryBackground={`${
            import.meta.env.VITE_PUBLIC_URL
          }/assets/images/section-category-2.jpg`}
          products={products.slice(4, products.length)}
          brands={brands}
          categoryTitle="Electronics"
          sectionTitle="Popular Sales"
          seeMoreUrl="/all-products"
          className="category-products mb-[60px]"
        />
          <ProductsAds
          ads={[
            `${
            import.meta.env.VITE_PUBLIC_URL
          }/assets/ipharm/home/banner3.png`,
          `${
            import.meta.env.VITE_PUBLIC_URL
          }/assets/ipharm/home/banner4.png`,
          ]}
          sectionHeight="sm:h-[295px] h-full"
          className="products-ads-section mb-[60px]"
        />
        {/* <CampaignCountDown
          className="mb-[60px]"
          lastDate="2023-10-04 4:00:00"
        /> */}
        <SectionStyleFour
          products={products}
          sectionTitle="Popular Sales"
          seeMoreUrl="/all-products"
          className="category-products mb-[60px]"
        />
      </LayoutHomeThree>
    </>
  );
}

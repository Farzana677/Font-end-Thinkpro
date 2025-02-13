import React from "react";
import img from "../assets/Component 4.jpg";
import Title from "../components/title";

interface Product {
  _id: string;
  img: string;
  productName: string;
  description?: string;
  price?: string;
  color?: string;
}

interface ProductProps {
  img: string;
  productName: string;
  description?: string;
}

const products: Product[] = [
  {
    _id: "100001",
    img: img,
    productName: "Residential Construction",
    description:
      "A sleek and modern design, combining elegance with practicality. This clock is a perfect addition to any contemporary living or office space.",
  },
  {
    _id: "100002",
    img: img,
    productName: "Commercial Spaces",
    description:
      "A sleek and modern design, combining elegance with practicality. This clock is a perfect addition to any contemporary living or office space.",
  },
  {
    _id: "100003",
    img: img,
    productName: "Round Table Clock",
    description:
      "A sleek and modern design, combining elegance with practicality. This clock is a perfect addition to any contemporary living or office space.",
  },
];

const Product: React.FC<ProductProps> = ({ img, productName, description }) => {
  return (
    <div className="bg-white overflow-hidden">
      <img src={img} alt={productName} className="w-full h-64 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-[#393939]">{productName}</h3>
        {description && (
          <p className="text-lg font-normal text-[#393939]">{description}</p>
        )}
        <a
          href=""
          className="text-[#64AF37] text-lg font-semibold tracking-wide underline"
        >
          {" "}
          Learn More
        </a>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="text-center p-10 font-semibold text-3xl">
        <Title text="Services" />
      </div>
      <div className="grid md:grid-cols-2 sm:grid-cols-1  lg:grid-cols-3 gap-6  justify-items-center">
        {products.map((product) => (
          <Product
            key={product._id}
            img={product.img}
            productName={product.productName}
            description={product.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;

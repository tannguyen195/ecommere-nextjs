import { FC } from "react";

const ProductSlider: FC = ({ children }) => {
  return <div className="h-full transition-opacity">{children}</div>;
};

export default ProductSlider;

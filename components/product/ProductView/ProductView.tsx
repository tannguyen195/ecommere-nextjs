import cn from "classnames";
import { FC, useState } from "react";
import styles from "./ProductView.module.css";
import { Container } from "@components/ui";
import Image from "next/image";
import { Product } from "@common/types/product";
import { useUI } from "@components/ui/context";
import { ProductSlider } from "@components/product";
interface Props {
  product: Product;
}

const ProductView: FC<Props> = ({ product }) => {
  return (
    <Container>
      <div className={cn(styles.root, "fit", "mb-5")}>
        <div className={cn(styles.productDisplay, "fit")}>
          <div className={styles.nameBox}>
            <h1 className={styles.name}>{product.name}</h1>
            <div className={styles.price}>
              {product.price.value}
              {` `}
              {product.price.currencyCode}
            </div>
          </div>
          <ProductSlider>
            {product.images.map((image) => (
              <div key={image.url} className={styles.imageContainer}>
                <Image
                  className={styles.img}
                  src={image.url}
                  alt={image.alt}
                  width={1050}
                  height={1050}
                  quality="85"
                />
              </div>
            ))}
          </ProductSlider>
        </div>
        <div className={styles.sidebar}>
          <section>
            {product.options.map((option) => (
              <div key={option.id} className="pb-4">
                <h2 className="uppercase font-medium">{option.displayName}</h2>
                <div className="flex flex-row py-4"></div>
              </div>
            ))}
            <div className="pb-14 break-words w-full max-w-xl text-lg">
              {product.description}
            </div>
          </section>
          <div>
            <button className={styles.button}>Add to Cart</button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProductView;

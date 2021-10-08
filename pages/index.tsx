import type { InferGetStaticPropsType } from "next";
import { getAllProducts } from "@framework/product";
import { getConfig } from "@framework/api/config";
import { Layout } from "@components/common";
import { ProductCard } from "@components/product";
import { Grid } from "@components/ui";
import { Hero } from "@components/ui";
import { Marquee } from "@components/ui";

export async function getStaticProps() {
  const config = getConfig();
  const products = await getAllProducts(config);

  return {
    props: {
      products,
    },
    revalidate: 4 * 60 * 60,
  };
}

export default function Home({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Grid layout="A">
        {products.slice(0, 3).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Grid>
      <Hero
        headline="Cookies, ice cream and nuffin"
        description="Sweet muffin marzipan tootsie roll brownie pie lollipop biscuit candy canes. Tootsie roll sugar plum apple pie tiramisu sweet muffin. Fruitcake gummi bears muffin cupcake cupcake. Apple pie tootsie roll dessert marshmallow bonbon chocolate cake gummi bears cheesecake. Lollipop ice cream caramels tiramisu sugar plum tart gummi bears lollipop. Gummi bears wafer tiramisu chocolate bar bear claw powder carrot cake dragée caramels. Chocolate cake candy canes powder croissant cotton candy soufflé apple pie marzipan macaroon. Fruitcake sesame snaps sesame snaps chupa chups cookie sweet liquorice sweet tiramisu. Candy ice cream bonbon sesame snaps cake gummies croissant halvah."
      />
      <Marquee variant="primary">
        {products.slice(0, 3).map((product) => (
          <ProductCard key={product.id} product={product} variant="slim" />
        ))}
      </Marquee>
      <Grid layout="B">
        {products.slice(0, 3).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Grid>
      <Marquee variant="secondary">
        {products.slice(0, 3).map((product) => (
          <ProductCard key={product.id} product={product} variant="slim" />
        ))}
      </Marquee>
    </>
  );
}

Home.Layout = Layout;

import { NextRequest, NextResponse } from 'next/server';

interface Rating {
  rate: number;
  count: number;
}

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}

export async function GET(
  req: NextRequest,
  { params }: { params: { category: string } }
) {
  const { category } = params;
  const { searchParams } = new URL(req.url);

  const limit = Number(searchParams.get('limit'));

  try {
    const response = await fetch(
      `https://fakestoreapi.com/products/category/${category}`
    );
    if (!response.ok) {
      throw new Error(`Failed to fetch products for category ${category}`);
    }

    const products: Product[] = await response.json();

    if (limit) {
      const relatedProducts = products
        .sort(() => 0.5 - Math.random())
        .slice(0, limit);

      return NextResponse.json(
        relatedProducts.map((product) => ({
          id: product.id,
          name: product.title,
          image: product.image,
          discount: Math.floor(Math.random() * 50) + 10,
          price: product.price,
          originalPrice: (product.price * (1 + Math.random() * 0.5)).toFixed(2),
          category: product.category,
          rating: product.rating.rate,
          ratingCount: product.rating.count,
          description: product.description,
        }))
      );
    }

    const transformedProducts = products.map((product) => ({
      id: product.id,
      name: product.title,
      image: product.image,
      discount: Math.floor(Math.random() * 50) + 10,
      price: product.price,
      originalPrice: (product.price * (1 + Math.random() * 0.5)).toFixed(2),
      category: product.category,
      rating: product.rating.rate,
      ratingCount: product.rating.count,
      description: product.description,
    }));

    return NextResponse.json(transformedProducts);
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    } else {
      return NextResponse.json(
        { error: 'An unknown error occurred' },
        { status: 500 }
      );
    }
  }
}

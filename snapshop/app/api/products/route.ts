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

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  const limit = searchParams.get('limit');
  const minRating = searchParams.get('minRating') || 0;
  const randomize = searchParams.get('randomize') === 'true';
  const count = searchParams.get('count');

  try {
    const response = await fetch(
      `https://fakestoreapi.com/products${limit ? `?limit=${limit}` : ''}`
    );

    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }

    const allProducts = await response.json();

    const minRatingValue = minRating ? parseFloat(minRating) : 0;

    let filteredProducts = allProducts.filter(
      (product: Product) => product.rating.rate >= minRatingValue
    );

    if (randomize && count) {
      const randomProducts: Product[] = [];
      while (
        randomProducts.length < parseInt(count) &&
        filteredProducts.length > 0
      ) {
        const randomIndex = Math.floor(Math.random() * filteredProducts.length);
        randomProducts.push(filteredProducts.splice(randomIndex, 1)[0]);
      }
      filteredProducts = randomProducts;
    }

    const transformedProducts = filteredProducts.map((product: Product) => ({
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

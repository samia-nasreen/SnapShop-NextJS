import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  req: NextRequest,
  { params }: { params: { userId: string } }
) {
  const { userId } = params;
  console.log('userId: ', userId);

  try {
    const response = await fetch(`https://fakestoreapi.com/users/${userId}`);

    if (!response.ok) {
      throw new Error(`Error fetching user with userId ${userId}`);
    }

    const data = await response.json();
    console.log('data: ', data);

    return NextResponse.json(data, { status: 200 });
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

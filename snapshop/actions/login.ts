'use server';

import { cookies } from 'next/headers';

interface LoginFormState {
  errors?: {
    _form?: string[];
  };
  token?: string;
}

export async function login(formData: FormData): Promise<LoginFormState> {
  const username = formData.get('username') as string;
  const password = formData.get('password') as string;
  const cookieStore = cookies();

  try {
    const response = await fetch('https://fakestoreapi.com/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      return {
        errors: {
          _form: [errorData.message || 'Login failed'],
        },
      };
    }

    const data = await response.json();
    cookieStore.set({
      name: 'authToken',
      value: data.token,
      httpOnly: true,
      path: '/',
    });
    return { token: data.token };
  } catch (error: unknown) {
    if (error instanceof Error) {
      return {
        errors: {
          _form: [error.message],
        },
      };
    } else {
      return {
        errors: {
          _form: ['An unexpected error occurred'],
        },
      };
    }
  }
}

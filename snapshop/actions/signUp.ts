'use server';

interface SignUpFormState {
  errors?: {
    _form?: string[];
  };
}

export async function signUp(formData: FormData): Promise<SignUpFormState> {
  const email = formData.get('email') as string;
  const username = formData.get('username') as string;
  const password = formData.get('password') as string;
  const name = formData.get('name') as string;
  const address = formData.get('address') as string;
  const phone = formData.get('phone') as string;

  try {
    console.log('Sign Up Form Data:', {
      email,
      username,
      password,
      name,
      address,
      phone,
    });

    return {};
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

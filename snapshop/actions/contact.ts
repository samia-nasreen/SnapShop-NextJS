'use server';

interface ContactFormState {
  errors?: {
    _form?: string[];
  };
}

export async function sendContactMessage(
  formData: FormData
): Promise<ContactFormState> {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const phone = formData.get('phone') as string;
  const message = formData.get('message') as string;

  try {
    console.log('Contact Form Data:', {
      name,
      email,
      phone,
      message,
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

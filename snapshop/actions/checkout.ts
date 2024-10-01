'use server';

interface CheckoutFormState {
  errors?: {
    _form?: string[];
  };
}

export async function confirmOrder(
  formData: FormData
): Promise<CheckoutFormState> {
  const firstName = formData.get('firstName') as string;
  const companyName = formData.get('companyName') as string;
  const streetAddress = formData.get('streetAddress') as string;
  const apartment = formData.get('apartment') as string;
  const city = formData.get('city') as string;
  const phoneNumber = formData.get('phoneNumber') as string;
  const email = formData.get('email') as string;

  try {
    console.log('Checkout Form Data:', {
      firstName,
      companyName,
      streetAddress,
      apartment,
      city,
      phoneNumber,
      email,
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

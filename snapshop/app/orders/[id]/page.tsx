import React from 'react';

const page = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  return <div>Order details page for order ID: {id}</div>;
};

export default page;

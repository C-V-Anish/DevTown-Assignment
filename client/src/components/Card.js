import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const CardContainer = styled.div`
  ${tw`bg-white rounded-lg overflow-hidden shadow-lg max-w-md transition duration-300 hover:bg-gray-300`}
`;

const CardImage = styled.img`
  ${tw`w-full h-40 object-cover`}
`;

const CardContent = styled.div`
  ${tw`p-4`}
`;

const CardTitle = styled.h2`
  ${tw`text-xl font-semibold mb-2`}
`;

const CardDescription = styled.p`
  ${tw`text-gray-700`}
`;

const CardButton = styled.button`
  ${tw`mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none`}
`;

const Card = ({ title, description, onClick }) => {
  return (
    <CardContainer>
      <CardImage src='client/src/components/image.avif' alt="Card Image" />
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <CardButton onClick={onClick}>Specifications</CardButton>
      </CardContent>
    </CardContainer>
  );
};

export default Card;

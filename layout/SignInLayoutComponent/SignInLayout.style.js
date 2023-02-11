import styled from 'styled-components';

export const div = styled.div`
   width: 100%;
   height: 100vh;
`;

export const mainDiv = styled.div`
   width: 900px;
   height: 600px;
   border-radius: 5px;
`;

export const prevStyleImageDiv = styled.div`
   width: 50%;
   height: 100%;
   position: relative;
   border-radius: 5px 0 0 5px;
   overflow: hidden;

   img {
      object-fit: cover;
   }
`;

export const FormGroupDiv = styled.div`
   width: 50%;
`;

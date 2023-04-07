import { render, screen } from '@testing-library/react';
import Header from '../Header';

it('should render same text passed into title prop', async () => {
    render(<Header title="My Header"/>);
    const headingElement = screen.getByRole("header");
    expect(headingElement).toBeInTheDocument();
}) ;



 

//  FINDBY

 //it('should render same text passed into title prop', async () => {
     //render(
   //      <Header 
       //    title="todo"
         ///>
     //);
     //const h1Element = await screen.findByText(/todo/i);
     //expect(h1Element).toBeInTheDocument();
 //});

// // WITH QUERYBY

// it('should render same text passed into title prop', () => {
//     render(
//         <Header 
//           title="todo"
//         />
//     );
//     const h1Element = screen.queryByText(/dogs/i);
//     expect(h1Element).not.toBeInTheDocument (opp. than to be in )
// });

// // WITH GETALLBY

// it('should render same text passed into title prop', () => {
//     render(
//         <Header 
//           title="todo"
//         />
//     );
//     const h1Elements = screen.getAllByText(/todo/i);
//     expect(h1Elements.length).toBe(1);
// });
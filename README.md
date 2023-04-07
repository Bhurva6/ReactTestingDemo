# ReactTestingDemo

##Types of Testing

Unit Test- separate components
Integration Test - components working together
End to End test - simulates what the user will do (Cypress)

###Using the react testing library here and only carrying out unit and integration tests

##Unit Test

![image](https://user-images.githubusercontent.com/75015574/230585658-1179d3b6-b42a-46e2-9805-272f790ba6b5.png)

test block = test ("", () => {}); or it("", () => {});
render = finding the component to test

##Methods and Query
![image](https://user-images.githubusercontent.com/75015574/230590667-3a24c6bd-7a9a-47cd-89f7-7e9ae4c69ebd.png)
![image](https://user-images.githubusercontent.com/75015574/230591065-d9ee0808-61e9-4a5a-b456-0cb71ca625ff.png)

###Priority
Always mimic user behaviour
![image](https://user-images.githubusercontent.com/75015574/230592374-3131b401-2676-4cc5-8f1c-fcf2af7591b9.png)
- If something needs to be async then it is better to use find by rather than get by

###Get By Query and it's different methods

- By role

it('should render same text passed into title prop', async () => {
    render(<Header title="My Header"/>);
    const headingElement = screen.getByRole("heading");
    expect(headingElement).toBeInTheDocument();
}) 

- By Title

 it('should render same text passed into title prop', () => {
     render(
         <Header 
           title="todo"
         />
     );
     const h1Element = screen.getByTitle("Header");
     expect(h1Element).toBeInTheDocument();
 });
 
 - By Test ID 
 
 it('should render same text passed into title prop', () => {
     render(
         <Header 
           title="todo"
         />
     );
     const h2Element = screen.getByTestId("header-2");
     expect(h2Element).toBeInTheDocument();
 });
 
 For this to work, we must write the tags like this - <h3 data-testid="header-2" className="header">Hello</h3>
 
 ###Find By(All the other methods work the same as get by)
 
 it('should render same text passed into title prop', async () => {
     render(
         <Header 
           title="todo"
         />
     );
     const h1Element = await screen.findByText(/todo/i);
     expect(h1Element).toBeInTheDocument();
 });
 
 ### Query by 
 
 it('should render same text passed into title prop', () => {
     render(
         <Header 
           title="todo"
         />
     );
     const h1Element = screen.queryByText(/dogs/i);
     expect(h1Element).not.toBeInTheDocument ------ (opp. than to be in )
 });
 
 ### getall by 
 
  it('should render same text passed into title prop', () => {
     render(
         <Header 
           title="todo"
         />
     );
     const h1Elements = screen.getAllByText(/todo/i);
     expect(h1Elements.length).toBe(1); ------- (needs to be only one in quantity like written only once in the document)
 });
 
 ##Describe Block 
 Group common tests 
 
 syntax - 
 
 describe("TodoFooter", () => {
  it('', () => {
    render( );
    const pElement = screen.getByText(/5 tasks left/i);
    expect(pElement).toBeInTheDocument();
  });
  it('', () => {
    render( );
    const pElement = screen.getByText(/5 tasks left/i);
    expect(pElement).toBeInTheDocument();
  });
 
 ![image](https://user-images.githubusercontent.com/75015574/230601226-d600920b-47ef-41c0-bd53-670e5ecb8b35.png)
![image](https://user-images.githubusercontent.com/75015574/230601340-7b94a6a3-fc93-4f45-ab70-5b075f99eb86.png)

 
##Fire event Function 
This basically just tests any dynamic input or anything that requires some action from the user to occur

syntax - 

fireEvent.(func)(inputElement, {target: {value: " "} });




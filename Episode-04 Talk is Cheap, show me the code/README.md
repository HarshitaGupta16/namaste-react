# Create UI Mock

# Low Level Planning

- Header

  - Logo
  - Nav Items

- Body

  - Search
  - Restaurant Container
  - Restaurant Card
    - Img
    - Name of Res, Star Rating, cuisine, delivery time

- Footer
  - Copyright
  - Link
  - Address
  - Contact

# Props

Passing a prop to a component is same as passing an argument to a function (normal js function)

# Config Driven UI

Our website's UI is driven by data (data or config is coming from backend that is from api)
Offers will be different in Delhi than in bengaluru. So this is all data driven.

Data Layer and UI Layer forms a frontend application

# Keys in map() function

When we have components at same level, that is the components which we looped in then
these components need to have unique ids, they need to be uniquely represented.

Suppose a new restaurant came in under res-container and it came in at the first place, then DOM will have to insert at first place but
if there are no ids then React will re-render all these restaurant cards bcz react doesn't know which res-card is new and which place it has to come. It will treat all the cards as same.

If we provide id then React knows the already existing ids so it will only render the new res-card with new id.
This is a huge **OPTIMIZATION** while writing code.

With map we should always use a unique key.

It gives a bug performance hit if we do not write keys

## Never use index as keys in React if the order of items may change

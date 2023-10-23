1.  Create a .env file in root directory

2.  Add the below environment variable in that file

         REACT_APP_BACKEND_URL="http://localhost:4000/api"

3.  run npm start

Note - Please process the csv first in the backend to get the data in frontend. else it would be blank

We have 2 Pages, Home Page that would show the CSV Data and Orders page that will show new added order.

Scope Coverage in frontend -

1. Docket Information available in frontend on homepage in react-table (First process the csv, in backend then proceed further)
2. Add Orders Popup with unique supplier drop down
3. The Description is mapped in Purchase Order Dropdown, which is mapped to the PONumber
4. New Orders saved in order page

Technologies Used -

1. React
2. Axios
3. Boostrap
4. React-Table

Concepts Covered -

1. Reusing Same component for same purpose
2. Splitting Components based on necessity
3. UI/UX using Bootstrap

Improvements -

1. Can use typescript for making code more error free
2. Writing unit test cases, for keeping the business logic intact and what user event does what things
3. More better UI/UX

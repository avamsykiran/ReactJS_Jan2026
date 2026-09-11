
Arth.tsx
    (a) accept a couple of numbers
    (b) and display their arthemtic results (sum., dif, prd, qut and reminder)Arth.tsx

SimpleInterest.tsx
    (a) accept principle, timePeriod and rateOfInterest
    (b) and display the simpleInterest

Emi.tsx
    (a) accept principle, timePeriod and rateOfInterest
    (b) and display the EMI

Create an app with router and bootstrap integrated.
    having  Home, AboutUs, Arth, SimpleInterest, and Emi components navigatable using a NavBar

Add Inventory Component to app05 (Retailer app)
    1. model called Item    (itmeCode,itemName,Rate,Units,stock)
    2. Inventory component shall display list of items and for each
        item we need
            (a) addStock    button  to increment the stock by 1 unit
            (b) removeStock button  to decrement the stock by 1 unit

Add ItemForm Component to app05 (Retailer app) with
    appropriate validation using YUP and 'useForm' hook.
    
Create a Billing Feature for the Retailer app
    1. Add a link "New Bill" to NavBar
    2. And a link "Bills" to NavBar
    3. "New Bill"   
            ------> Billing Component
                        (a) accept the consumer mobile number and display the consuemr detials
                        (b) in a table , we must be able to
                            select a item by item name, feed in the quantity ad add the item to the bill.
                        (c) after all the required items, the bill must be saved.
    4. "Bills"
            ------> BillsList Component
                (a) a table mus tbe displayed with BillNumber, Date, Consumer Id, BillingAmount as columns
                (b) each billing record must have 'details' button whihc when clicked shall navigate to
                    BillDetails Component
    5. BillDetals Component
        shall display the consumer detials and the list of items added to that bill.

    
React Softuni App is an application that has been developed for the exam at the end of the React course.

# OfferHub

The application represents a SPA application where users could see/post/edit/delete/buy offers.
For the purpose of Front-End development it was used React.js.
For the purpose of storing information and authentication/authorization it was used Firestore.

# Roles

Non-authenticated users can visit the application and are authorized to see:

    * Register - allows the user to Register and perform authenticated operations afterwards
    * Login - allows the user to Login with an existing account and perform authenticated operations afterwards
    * Offers - allows the user to see all open offers that have not been bought yet
    * Offer details - allows the user to see more details of an offer such as its category, price and details

Authenticated users (non-owners) can visit the application and are authorized to see and use:

    * Profile - allows the user to see who is logged in currently as well as the offers that have been bought by the current user
    * Offers - allows the user to see all open offers that have not been bought yet
    * Offers details - allows the user to see more details of an offer such as its category, price and detail as well as to buy it
    * Offer details buy - functionality that allows the user to buy a specific item. Once bought, the offer is no longer displayed in the "Offers" and could be found under the buyer's profile
    * Bought offer delete - funcionaliy that allows the buyer to delete the offer from their bought list.

Authenticated users (owners) can visit the application and are authorized to see and use:

    * Profile - allows the user to see who is logged in currently as well as the offers that have been bought by the current user
    * Offers - allows the user to see all open offers that have not been bought yet
    * Offers details - allows the user to see more details of an offer such as its category, price and detail as well as to edit or delete it
    * Offer details edit - functionality that allows the user to change the details of an offer that is under their ownership;
    * Offer details delete - functionality that allows the user to delete an offer that is under their ownership;
    * Bought offer delete - funcionaliy that allows the buyer to delete the offer from their bought list.
    
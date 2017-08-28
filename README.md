## Simple car listing application

### Requirements

To develop a basic React application that consumes an API and lists cars with pagination.  
Each car record should be able to be modified  through  an edit form. No need to implement adding and deleting records. 

Only React should be used. No state management, component or large project scaffolding generators.

UI/UX aspect is minimal.
  
### Stack

* React
* Bootstrap (just to make it a little better looking)

The development stack (dev deps) includes create-react-app, jest, enzyme.

### Scripts

`npm start`  
`npm run build`  
`npm test`  

### Configuration

Use src/config.js for changing API endpoints.

### API

A JSON response to a GET request for '/api/v1/car/?format=json' looks like this:

```
{"meta": {"limit": 20, "next": "/api/v1/car/?offset=20&limit=20&format=json", "offset": 0, "previous": null, "total_count": 406}, "objects": [{"acceleration": 1.0, "cylinders": 2.0, "displacement": 3.0, "horsepower": 40.0, "id": 1, "mpg": 41.0, "name": "chevelle", "resource_uri": "/api/v1/car/1/", "weight": 500.0, "year": 99.0}, {"acceleration": 11.3, "cylinders": 8.0, "displacement": 350.0, "horsepower": 164.0, "id": 2, "mpg": 15.0, "name": "buick skylark 320", "resource_uri": "/api/v1/car/2/", "weight": 3693.0, "year": 69.0}, {"acceleration": 11.0, "cylinders": 8.0, "displacement": 318.0, "horsepower": 150.0, "id": 3, "mpg": 18.0, "name": "plymouth satellite", "resource_uri": "/api/v1/car/3/", "weight": 3436.0, "year": 70.0}, {"acceleration": 12.0, "cylinders": 8.0, "displacement": 304.0, "horsepower": 150.0, "id": 4, "mpg": 16.0, "name": "amc rebel sst", "resource_uri": "/api/v1/car/4/", "weight": 3433.0, "year": 70.0}, {"acceleration": 99.1, "cylinders": 8.0, "displacement": 302.0, "horsepower": 144.0, "id": 5, "mpg": 17.0, "name": "ford torino", "resource_uri": "/api/v1/car/5/", "weight": 3449.0, "year": 74.0}, {"acceleration": 10.0, "cylinders": 8.0, "displacement": 429.0, "horsepower": 198.0, "id": 6, "mpg": 15.0, "name": "ford galaxie 500", "resource_uri": "/api/v1/car/6/", "weight": 4341.0, "year": 70.0}, {"acceleration": 9.0, "cylinders": 8.0, "displacement": 454.0, "horsepower": 220.0, "id": 7, "mpg": 14.0, "name": "chevrolet impala", "resource_uri": "/api/v1/car/7/", "weight": 4354.0, "year": 70.0}, {"acceleration": 8.5, "cylinders": 8.0, "displacement": 440.0, "horsepower": 215.0, "id": 8, "mpg": 14.0, "name": "plymouth fury iii", "resource_uri": "/api/v1/car/8/", "weight": 4312.0, "year": 70.0}, {"acceleration": 10.0, "cylinders": 8.0, "displacement": 455.0, "horsepower": 225.0, "id": 9, "mpg": 14.0, "name": "pontiac catalina", "resource_uri": "/api/v1/car/9/", "weight": 4425.0, "year": 70.0}, {"acceleration": 9.0, "cylinders": 8.0, "displacement": 390.0, "horsepower": 190.0, "id": 10, "mpg": 15.0, "name": "amc ambassador dpl", "resource_uri": "/api/v1/car/10/", "weight": 3850.0, "year": 70.0}, {"acceleration": 18.0, "cylinders": 4.0, "displacement": 133.0, "horsepower": 115.0, "id": 11, "mpg": 0.0, "name": "citroen ds-21 pallas", "resource_uri": "/api/v1/car/11/", "weight": 3090.0, "year": 70.0}, {"acceleration": 11.5, "cylinders": 8.0, "displacement": 350.0, "horsepower": 165.0, "id": 12, "mpg": 0.0, "name": "chevrolet chevelle concours (sw)", "resource_uri": "/api/v1/car/12/", "weight": 4142.0, "year": 70.0}, {"acceleration": 12.0, "cylinders": 8.0, "displacement": 351.0, "horsepower": 153.0, "id": 13, "mpg": 0.0, "name": "ford torino (sw)", "resource_uri": "/api/v1/car/13/", "weight": 4034.0, "year": 70.0}, {"acceleration": 12.0, "cylinders": 8.0, "displacement": 383.0, "horsepower": 175.0, "id": 14, "mpg": 0.0, "name": "plymouth satellite (sw)", "resource_uri": "/api/v1/car/14/", "weight": 4166.0, "year": 70.0}, {"acceleration": 11.0, "cylinders": 8.0, "displacement": 360.0, "horsepower": 175.0, "id": 15, "mpg": 0.0, "name": "amc rebel sst (sw)", "resource_uri": "/api/v1/car/15/", "weight": 3850.0, "year": 70.0}, {"acceleration": 10.0, "cylinders": 8.0, "displacement": 383.0, "horsepower": 170.0, "id": 16, "mpg": 15.0, "name": "dodge challenger se", "resource_uri": "/api/v1/car/16/", "weight": 3563.0, "year": 70.0}, {"acceleration": 8.0, "cylinders": 8.0, "displacement": 340.0, "horsepower": 160.0, "id": 17, "mpg": 14.0, "name": "plymouth 'cuda 340", "resource_uri": "/api/v1/car/17/", "weight": 3609.0, "year": 70.0}, {"acceleration": 7.0, "cylinders": 8.0, "displacement": 302.0, "horsepower": 140.0, "id": 18, "mpg": 0.0, "name": "ford mustang boss 302", "resource_uri": "/api/v1/car/18/", "weight": 3353.0, "year": 70.0}, {"acceleration": 9.4, "cylinders": 8.0, "displacement": 400.0, "horsepower": 150.0, "id": 19, "mpg": 15.0, "name": "chevrolet monte carlo", "resource_uri": "/api/v1/car/19/", "weight": 3761.0, "year": 70.0}, {"acceleration": 10.0, "cylinders": 8.0, "displacement": 455.0, "horsepower": 225.0, "id": 20, "mpg": 14.0, "name": "buick estate wagon (sw)", "resource_uri": "/api/v1/car/20/", "weight": 3086.0, "year": 70.0}]}
```

The `meta` field can be used to infer the available operations.

### Components

#### CarTable

This is a top-level 'smart' component where state is kept.
It handles all the API interaction and state updates based on server responses.

#### CarTablePage

Functional component tasked with rendering CarRows, no state.
If a car is in edit mode, a CarFormRow is displayed right under the associated CarRow for that car.  

It renders using HTML table, tr, td, th tags to have a semantic structure.

Cell headers are dynamically generated based on the car fields defined in model.js (the model with the fields is passed as prop).

#### CarRow

Presentational component, no state.
Cells are dynamically generated based on the car fields defined in model.js.

#### CarForm

This is split into 2 components.

CarFormPresentation is the presentational (dumb) component tasked only with rendering fields (dynamically generated based on the car model).

CarForm is a stateful component, because a form needs to keep the state of the record (car) being edited.

One noteworthy feature of the CarForm is that it can validate fields and display error for each field, based on some constraints defined in model.js (like min/max for numeric fields).

### Testing

Each component has its own tests colocated with the JS.  
Both JEST snaphot testing and regular assertions are employed.  
Enzyme shallow rendering is used to test each component as a unit, to avoid asserting on the behavior of child components.


### Styling

Since styling is minimal, no fancy CSS preprocessor was used, it's just css, each component has it's own stylesheet.
Bootstrap helps make things nicer with minimal intervention and without bloating.

### TBD

* server error handling

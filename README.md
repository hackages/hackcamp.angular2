# Getting started with Angular 2

The goal of this first session will  be to learn the basic of the Framework
- Module
- Components
- Property Binding
- NgModel
- Bootstrap
- A bit of TypeScript
    - Define a class/Type
    - Define a typed array

You can find the [repo on Github](https://github.com/hackages/hackcamp.angular2.git)

Clone it: `git clone https://github.com/hackages/hackcamp.angular2.git`

Bootstrap your application: `npm start`

!oops

This application doesn't work :(

### Where do we start?
Inside the [Angular cheat sheet](https://angular.io/docs/ts/latest/guide/cheatsheet.html) you'll find two sections that will help you fix the issues:
- Template syntax
- Build-in directives

## TODO: Features to implement in your app
 - Fix all the bugs before trying to implement any other features

 - Display all sections on the main area
    - Learn about property bindings
    - Learn about structural directives (ngFor and ngIf)
 - Architecture: split the app into small components
    - Header component alias `bs-header` 
        - Should receive the `title` from his parent
    - Menubar component alias `bs-menubar`
        - Should transclude other components (once you reach that level, ask for more information)
    - Section component alias `bs-section`
        - Should receive the list of sections via input
    - Dashboard component alias `bs-dashboard` is the parent component
        - Should be able to get the sections and pass that to the `section component`
        - Should contain a property `title` and pass that to the `header component`
 - Add Service: 
   - The `AppService` should contain a method `getSections` that return the list of sections
 - Introducting lifecycle hooks
    - ngOnInit: Initialise your data inside that method instead of the constructor
 - Add navigation (Beginning of the second part)


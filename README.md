# Routing and Observable

 ## TODO: Features to implement in your app
 - Fix all the bugs before trying to implement any other features
 - Routing and navigation
    - On the `AppModule`, inject the `RouterModule`
    - You can find more information about Routing in Angular 2 [here](https://angular.io/docs/ts/latest/guide/router.html)
    - Define your first route:
     `
      const routes: Route[] = [
        {
            path: '', component: DashboardComponent
        }
      ];
     `
    - Add these `routes` into `RouterModule.forRoot(routes)`
    - Huh, your app should not work anymore! Okay, calm down and let's fix it
    - *Add a new component `ShellComponent`*
    - The ShellComponent template should look like this:
    `
      <!--Header component-->
        <bs-header [appTitle]="title"></bs-header>


        <main class="main-content">
            <!--Menu filters-->
            <bs-menubar></bs-menubar>

            <!--List of sections-->
            <bs-section [dataSource]="sections | async"></bs-section>
        </main>
     `
     - Now you will have to fix your DashboardComponent and remove the unecessary part!! 
     - Let add another path to route to our bookstore
       `{
            path: 'bookstore', component: BookStoreComponent
        }
       `
     - Now you will have to fix your BookStoreComponent and remove the unecessary part!! :-)
     - Your BookStoreComponent isn't working anymore:
       - The filters for the categories need to be fixed. They all redirect to the DashboardComponent
       - Same issue with the filter button.
     - Another obvious issue is your page goes through a hard-reload at every navigation (routerLink might help)
     - Move our routes definition into its own module
       - create a `app/routing.module.ts`file and move the route definition in it (Ask for more information when you reach this level) 
     - Let's add a backbutton: `Location service` will definitely help
      - inject this template ()
     - Let's change our filters into real urls 
       - books/web, 
       - books/mobile,
       - books/iot, 
       - books/data-engineering
   


 

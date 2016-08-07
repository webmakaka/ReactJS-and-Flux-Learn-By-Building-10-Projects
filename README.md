### [Eduonix] ReactJS and Flux: Learn By Building 10 Projects [ENG, 2016]

https://www.youtube.com/watch?v=S8ArGSiYYBw

___

<br/>

### 01 Bootstrap React Components


**002 Setup React Bootstrap**

    https://facebook.github.io/react/
    http://getbootstrap.com/
    https://cdnjs.com/libraries/babel-core
    http://getbootstrap.com/examples/jumbotron/
    http://getbootstrap.com/components/#navbar



**003 Creating React Components**



**004 Component Props**



**005 Working With State**


<br/>

### 02 Github Profile Viewer

Technologies: jquery, bootstrap, webpack


**002 Files Webpack Setup**

GithHub --> Settings --> OAuth applications --> Developer applications --> Register a new OAuth application


    Application name: myApp
    Homepage URL: http://localhost:8080
    Authorization callback URL: http://localhost:8080/_eauth/github

<br/>

    # npm install -g webpack --no-optional
    # npm install -g webpack-dev-server --no-optional

<br/>

    # npm init
    # npm install

<br/>

    # webpack-dev-server --port 8080 --hot --host 0.0.0.0

<br/>

    $ curl -I http://localhost:8080
    HTTP/1.1 200 OK
    X-Powered-By: Express
    Content-Type: text/html; charset=utf-8
    Content-Length: 7730
    Date: Sat, 25 Jun 2016 13:12:31 GMT
    Connection: keep-alive

<br/>

    $ links http://localhost:8080/app

<br/>

browser --> localhost:8080/app/



<br/>

**003 Main App Component**

http://getbootstrap.com/examples/starter-template/



<br/>

**004 Profile Component**


<br/>

**005 RepoList Repo Components**


<br/>

**006 Search Component**

<br/>

![project_2_pic_1](img/project_2_pic_1.png)


<br/>

![project_2_pic_2](img/project_2_pic_2.png)

<br/>

Update next valuers to run app:

    clientId: 'myClientId',
    clientSecret: 'myClientSecret'



<br/>

### 03 Quick Quiz Application


Technologies: bootstrap, webpack

<br/>

002 App Component Setup


    $ npm init
    $ npm install

    $ webpack-dev-server --port 8080 --hot --host 0.0.0.0



browser --> localhost:8080/app/


<br/>

003 QuestionList Question Component


<br/>

004 Quiz Logic


<br/>

![project_3_pic_1](img/project_3_pic_1.png)


<br/>

![project_3_pic_2](img/project_3_pic_2.png)

<br/>

![project_3_pic_3](img/project_3_pic_3.png)



<br/>

### 04 MovieFind

Technologies: bootstrap, jquery, gulp, flux

<br/>


002 Flux Structure Gulp Part

http://facebook.github.io/flux/docs/overview.html

http://omdbapi.com/

    $ npm init
    $ npm install

<br/>

    $ gulp


<br/>

004 Flux Setup Preperation


<br/>

006 SearchForm Component


<br/>

007 Working With The API


<br/>

008 Displaying Results


<br/>

![project_4_pic_1](img/project_4_pic_1.png)


<br/>

![project_4_pic_2](img/project_4_pic_2.png)


    $ npm list -g --depth=0
    /usr/local/lib
    ├── gulp@3.9.1
    ├── npm@3.9.5
    ├── webpack@1.13.1
    └── webpack-dev-server@1.14.1

<br/>

    $ npm list --depth=0
    04_moviefind@1.0.0 /projects/04 MovieFind
    ├── browserify@13.0.1
    ├── flux@2.1.1
    ├── gulp@3.9.1
    ├── object-assign@2.1.1
    ├── react@0.14.8
    ├── react-dom@0.14.8
    ├── reactify@1.1.1
    └── vinyl-source-stream@1.1.0


<br/>

### 05 Firebase ContactList

Technologies: Firebase

firebase.com


<br/>

002 Flux Boilerplate Setup

Create New App:

App Name: ContactList  
App URL: contactlist9  


    $ npm install
    $ gulp


<br/>

003 Adding Contacts To Store


<br/>

004 Persisting Data To Firebase

    $ npm install --save firebase@2.*.*


<br/>

005 Listing Deleting Contacts


<br/>

007 Edit Update Contacts



<br/>

![project_5_pic_1](img/project_5_pic_1.png)


<br/>

![project_5_pic_2](img/project_5_pic_2.png)

<br/>

    # npm list --depth=0
    05_Firebase_ContactList@1.0.0 /projects/05 Firebase ContactList
    ├── browserify@13.1.0
    ├── firebase@2.4.2
    ├── flux@2.1.1
    ├── gulp@3.9.1
    ├── object-assign@2.1.1
    ├── react@0.14.8
    ├── react-dom@0.14.8
    ├── reactify@1.1.1
    └── vinyl-source-stream@1.1.0


<br/>

### 06 Stickypad Notes

Technologies: Flux, Mongolab


<br/>

002 Stickypad Boilerplate Setup

mongolab.com

    Create New ->
    Cloud Provider --> Amazon
    Plan -->Single-node --> Sandbox

    Database name: stickypad1

    Add Database User: marley

<br/>

    $ npm install
    $ gulp


<br/>

003 AddNoteForm Component


<br/>

004 Add Fetch Notes From MongoLab

mongolab.com --> UserProfile --> Api Key

AppAPI.js add your API KEY.


<br/>

005 Display Sticky Notes

<br/>

006 Delete Sticky Notes


<br/>

![project_6_pic_1](img/project_6_pic_1.png)

Remove Note by DoubleClick


    # npm list --depth=0
    06_Stickypad_Notes@1.0.0 /projects/06 Stickypad Notes
    ├── browserify@13.1.0
    ├── flux@2.1.1
    ├── gulp@3.9.1
    ├── object-assign@2.1.1
    ├── react@0.14.8
    ├── react-dom@0.14.8
    ├── reactify@1.1.1
    └── vinyl-source-stream@1.1.0



<br/>

### 07 InfoFinder Search Engine

Technologies: DuckDuckGO API

<br/>

002 InfoFinder Fluxboiler Setup

https://duckduckgo.com/api


    $ npm install
    $ gulp



<br/>

003 Search Form

no run

<br/>

004 Fetch Data From DuckDuckGo API


<br/>

005 Display Results


![project_7_pic_1.png](img/project_7_pic_1.png)

![project_7_pic_1.png](img/project_7_pic_2.png)

    # npm list --depth=0
    07_InfoFinder_Search_Engine@1.0.0 /projects/07 InfoFinder Search Engine
    ├── browserify@13.1.0
    ├── flux@2.1.1
    ├── gulp@3.9.1
    ├── object-assign@2.1.1
    ├── react@0.14.8
    ├── react-dom@0.14.8
    ├── reactify@1.1.1
    └── vinyl-source-stream@1.1.0



<br/>

### 08 Youtube Gallery

Technologies: Zimit, Firebase

http://firezenk.github.io/zimit/

<br/>

002 Boiler Add Video Form

<br/>

003 Persist Data To Firebase

    $ npm install --save firebase@2.*.*


Create new database:

    App Name: ytgallery1
    App Url: ytgallery1

<br/>

    gulp

<br/>

    Video Title: Enjoykin
    Video ID: id: n-AdoTkXwbc
    Video Description: Some Description


<br/>

004 Displaying Videos

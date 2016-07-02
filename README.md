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

    $ npm list -g --depth=0
    /usr/local/lib
    ├── gulp@3.9.1
    ├── npm@3.9.5
    ├── webpack@1.13.1
    └── webpack-dev-server@1.14.1

<br/>

    $ npm list --depth=0
    04_moviefind@1.0.0 /projects/04 MovieFind
    ├── browserify@13.0.1 extraneous
    ├── gulp@3.9.1 extraneous
    ├── react@0.14.8
    ├── react-dom@0.14.8
    ├── reactify@1.1.1 extraneous
    └── vinyl-source-stream@1.1.0 extraneous

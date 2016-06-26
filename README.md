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


<br/>

**003 Creating React Components**


<br/>

**004 Component Props**


<br/>

**005 Working With State**


<br/><br/>

### 02 Github Profile Viewer

jquery, bootstrap, webpack


**002 Files Webpack Setup**

GithHub --> Settings --> OAuth applications --> Developer applications --> Register a new OAuth application

<br/>

    Application name: myApp
    Homepage URL: http://localhost:8080
    Authorization callback URL: http://localhost:8080/_eauth/github

<br/>

    # npm install -g webpack --no-optional
    # npm install -g webpack-dev-server --no-optional
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


![project_2_pic_2](img/project_2_pic_2.png)

<br/>

Update next valuers to run app:

    clientId: 'myClientId',
    clientSecret: 'myClientSecret'

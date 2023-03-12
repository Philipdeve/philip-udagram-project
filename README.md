# philip-udagram-project

philip-udagram-project is a simple Image Filter Service built with Typescript, Node.js and deployed to aws elastic beanstalk service.

## Installation

Clone the GitHub repository and use NPM to install the project dependencies.

```
$ git clone https://github.com/Philipdeve/philip-udagram-project.git
$ cd philip-udagram-project
$ npm i
```

## Project EndPoint URL

```
$ http://philip-udagram-project.us-east-2.elasticbeanstalk.com/filteredimage?image_url=https://images.unsplash.com/photo-1602359337719-a8bcbd1f7b51?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YW1hem9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60

```
philip-udagram-project works by providing a link to a valid image url. Copy a valid image link and paste. E.g:http://philip-udagram-project.us-east-2.elasticbeanstalk.com/filteredimage?image_url={YOUR_VALID_IMAGE_LINK}

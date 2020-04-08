const moment = require('moment');
const mongoose = require('mongoose');
const User = require('../models/user');
const Product = require('../models/product');
const Category = require('../models/category');

const user1Id = mongoose.Types.ObjectId();
const user2Id = mongoose.Types.ObjectId();


const product1Id = mongoose.Types.ObjectId();
const product2Id = mongoose.Types.ObjectId();

const category1Id = mongoose.Types.ObjectId();
const category2Id = mongoose.Types.ObjectId();
const category3Id = mongoose.Types.ObjectId();
const category4Id = mongoose.Types.ObjectId();

module.exports = {
  "users": {
    model: User,
    items: [
      {
      "_id": user1Id,
      "avatar": "https://afportfolio.herokuapp.com/profile.jpg",
      "email": "alfredo@gmail.com",
      "name": "Alfredo Fernandez",
      "info": "Bla bla bla bla",
      "createdAt": moment().toISOString(),
      "updatedAt": moment().toISOString(),
      "username": "alfreddier",
      "password": "testtest",
      "role": 'admin',
      "products": [product1Id]
    },
    {
      "_id": user2Id,
      "avatar": "https://www.clipartmax.com/png/middle/195-1956720_%5B-img%5D-avatar.png",
      "email": "peter@gmail.com",
      "name": "Peter Green",
      "info": "Bla bla bla bla",
      "createdAt": moment().toISOString(),
      "updatedAt": moment().toISOString(),
      "username": "Petergreen",
      "password": "testtest"
    }]
  },
  categories: {
    model: Category,
    items: [
      {
        "_id": category1Id,
        "name": "Web Development"
      },{
        "_id": category2Id,
        "name": "Mobile Development"
      },{
        "_id": category3Id,
        "name": "Cloud Servers"
      },{
        "_id": category4Id,
        "name": "Rest API"
      }
    ]
  },
  products: {
    model: Product,
    items: [
      {
        "_id": product1Id,
        "slug": 'meetup-app-en-vue-y-nodejs',
        "title": "Meetup app en vue y nodejs",
        "subtitle": "Este proyecto cubre las funcionalidades base de cualquier aplicación",
        "image": "https://scontent.fvvi1-2.fna.fbcdn.net/v/t1.15752-9/92632244_506530853584955_8086607700999274496_n.png?_nc_cat=106&_nc_sid=b96e70&_nc_oc=AQms8JulLkjLjoypsS-q3oH486fK8IFL9Shm1Dd3HeAKgagKmrxMP6t0j180pAABE11BZMxqhUd3hhNOpackgHWc&_nc_ht=scontent.fvvi1-2.fna&oh=db75a7134d0972427bc3db41ebdc5a38&oe=5EB39E43",
        "description": "<p>El proyecto este construido con vue en el frontend y node en backend y socket.io para la parte de tiempo real si requiere funcionalidades extra puede solicitar, a mi correo alfredofernandezcarlos@gmail.com</p>",
        "wsl": [
          {
            "value": "Esta aplicacion esta enfocado para reuniones"
          },
          {
            "value": "Los discuciones son en tiempo real cuando se crea un evento"
          },
          {
            "value": "Las busqueda de eventos es con respecto a la ubicacion del usuario"
          }
        ],
        "requirements": [
          {
            "value": "Si quiere la aplicación puede escribirme a alfredofernandez@gmail.com"
          },
          {
            "value": "Al proyecto se le puede añadir funcionalidades extra si haci lo desea"
          }
        ],
        "promoVideoLink": "https://meetupsapp.herokuapp.com",
        "productLink": "https://meetupsapp.herokuapp.com",
        "price": 179.99,
        "discountedPrice": 49.99,
        "status": "published",
        "createdAt": moment().toISOString(),
        "updatedAt": moment().toISOString(),
        "category": category4Id,
        "author": user1Id
      },
      {
        "_id": product2Id,
        "slug": 'node_con_vue_y_nuxt',
        "title": "Node con vue y nuxt",
        "subtitle": "Build real mobile Application for Android and iOS. Learn Dart Framework and discover amazing features of Flutter.",
        "image": "https://miro.medium.com/max/5000/1*YXEh1oiMFzlrrNqhNHWdxQ.png",
        "description": "Any system or device connected to a network is also called a node. For example, if a network connects a file server, five computers, and two printers, there are eight nodes on the network. Each device on the network has a network address, such as a MAC address, which uniquely identifies each device. This helps keep track of where data is being transferred to and from on the network. A node can also refer to a leaf, which is a folder or file on your hard disk. In physics, a node, or nodal point, is a point of minimum displacement or where multiple waves converge, creating a net amplitude of zero.",
        "wsl": [
          {
            "value": "Learn and master Node Programming Language"
          },
          {
            "value": "Completely understand the processes and concepts of Node Framework"
          },
          {
            "value": "Use gained knowledge to create your own web Applications"
          },
          {
            "value": "Become fluent in concepts and tools like BLoC's, State Management, Services, Widgets and More!"
          }
        ],
        "requirements": [
          {
            "value": "No Node and nuxt previous knowledge is required!"
          },
          {
            "value": "Able to run Android Studio or Xcode Simulator"
          }
        ],
        "promoVideoLink": "https://a2.udemycdn.com/2019-06-16_01-03-38-b4b3369ea5ef3ab87a5c44952d66fbda/WebHD_720p.mp4?nva=20190620043055&token=0d53de33a501d22e72d76",
        "productLink": "https://www.udemy.com/dart-and-flutter-from-zero-to-hero-practical-dev-bootcamp",
        "price": 169.99,
        "discountedPrice": 9.99,
        "status": "published",
        "createdAt": moment().toISOString(),
        "updatedAt": moment().toISOString(),
        "category": category2Id,
        "author": user1Id
      }
    ]
  }
};

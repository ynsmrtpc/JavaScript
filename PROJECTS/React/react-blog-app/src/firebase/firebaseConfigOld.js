/* Firevase genel yapı

import firebase from 'firebase/app'
import { initializeApp } from 'firebase/app'
import 'firebase/database'

const firebaseConfig = {
  apiKey: 'AIzaSyAGKLoPxTVTN8PKVFZ3mBnAMGCceKI3Dp4',
  authDomain: 'reactblog-355e9.firebaseapp.com',
  databaseURL:
    'https://reactblog-355e9-default-rtdb.europe-west1.firebasedatabase.app/',
  projectId: 'reactblog-355e9',
  storageBucket: 'reactblog-355e9.appspot.com',
  messagingSenderId: '296486217189',
  appId: '1:296486217189:web:a920f53eb49a13c1753b0c',
}

const app = () => initializeApp(firebaseConfig)
app()
const db = firebase.database()
*/

/* Ekleme
 
db.ref().set({
  title: 'blog title 2',
  description: 'blog desc 1',
  authors: {
    name: 'Yunus Emre',
    surname: 'Topçu',
  },
})
  .then(() => {
    console.log('kayit eklendi')
    db.ref('tags')
      .set(['angular', 'react'])
      .then(() => console.log('etiketler eklendi'))
      .catch((e) => console.log('hata', e))
  })
  .catch((e) => console.log('error', e))
*/

/* Silme

db.ref('tags')
  .remove()
  .then(() => console.log('silindi'))
  .catch((e) => console.log('hata', e))
console.log('uygulama calisti')
*/

/* Güncelleme

db.ref('authors').update({
  name: 'Ada',
  surname: 'Lovelance',
})
*/

/* Arama

db.ref()
  .once('value')
  .then((snapshot) => {
    const blog = snapshot.val()
    console.log(blog)
  })
  .catch((e) => console.log('hata', e))

*/
/* Belli bir özelliğe göre arama

db.ref().on('value', (snapshot) => {
  const blog = snapshot.val()
  console.log(blog)
})

setTimeout(() => {
  db.ref('title').set('updated blog title')
}, 3000)

setTimeout(() => {
  db.ref().off() // burada bağlantıyı kopardık alttaki 9 saniyelik kısım çalışmayacak!
}, 6000)

setTimeout(() => {
  db.ref('title').set('updated3 blog title')
}, 9000)

*/

/* ON METODUYLA YAPILAN DEĞİŞİKLİK ANINDA GEÇER
 * ONCE METODU SAYFA YENİLENDİKTEN VE SORGU YENİDEN ÇAĞIRILDIKTAN SONRA ÇALIŞIR! */

/*
 db.ref('title').set('blog title') // sadece title bilgisini günceller
 db.ref('authors/name').set('Emre') // obje içindeki tek bir bilgiyi güncelleme
 db.ref('tags').set(['react', 'javascript', 'angular']) // yeni kayıt oluşturur
*/

/* dizi şeklinde eleman ekleme

const blogs = {
  101: {
    id: '1',
    title: 'blog title 1',
  },
  102: {
    id: '2',
    title: 'blog title 2',
  },
}

const users = {
  ynsmrtpc: {
    name: 'Yunus',
    surname: 'Topcu',
  },
  sdnztpc: {
    name: 'Sude',
    surname: 'Topcu',
  },
}

db.ref().set({
  blogs: blogs,
  users: users,
})

*/

/* Eklenen dizi elemanlarını konsola yazırma

db.ref('blogs/101')
  .once('value')
  .then((snapshot) => {
    console.log(snapshot.val())
  })

db.ref('users')
  .once('value')
  .then((snapshot) => {
    console.log(snapshot.val())
  })

*/

/* Var olan diziye eleman ekleme (push())

db.ref('blogs').push({
  id: '3',
  title: 'blog title 3',
})
db.ref('blogs').push({
  id: '3',
  title: 'blog title 3',
})
*/

/* Değiştirme

db.ref('blogs/-N8iUxLG4i4Xy-rDEPvm').set({
  title: 'blog title 4',
  id: '4',
})
*/

/* Db'de olmayan bir elemanı ekleme

db.ref('products').push({
    name: 'Samsung S5',
    price: 3000,
  isApproved: false,
})
db.ref('products').push({
  name: 'Samsung S6',
  price: 4000,
  isApproved: true,
})
db.ref('products').push({
  name: 'Samsung S7',
  price: 5000,
  isApproved: true,
})
*/

/* Db'deki bilgiyi uygulama tarafına alma 

* Once ile sadece bir kez uygulama tarafına çekme
db.ref('products')
  .once('value')
  .then((snapshot) => {
    const products = []
    snapshot.forEach((product) => {
      products.push({
        id: product.key,
        ...product.val(),
      })
    })
    console.log(products)
  })

 * On ile eventlistener aracılığıyla çekme - bu şekilde db'de bir değişiklik olduğunda anında uygulamaya yansıyacaktır
db.ref('products').on('value', (snapshot) => {
  const products = []
  snapshot.forEach((product) => {
    products.push({
      id: product.key,
      ...product.val(),
    })
  })
  console.log(products)
})

*/

/* Diğer on Eventleri (child_added,child_changed,child_moved,child_removed,value)

db.ref('products').on('child_removed', (snapshot) => {
  console.log(snapshot.key, snapshot.val())
})

db.ref('products').on('child_changed', (snapshot) => {
  console.log(snapshot.key, snapshot.val())
})

db.ref('products').on('child_added', (snapshot) => {
  console.log(snapshot.key, snapshot.val())
})

*/

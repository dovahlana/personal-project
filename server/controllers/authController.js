const bcrypt = require('bcryptjs');

//get
async function getUser(req, res) {
  if (req.session.user) {
      res.status(200).json(req.session.user)
  } else {
      res.sendStatus(404),json('User does not exist')
  }
}
//////login
async function login(req, res) {
  const { username, password } = req.body;
  const db = req.app.get('db');

  // if (foundUser = 0) return res.status(411).json('Fields can not be empty.')
  
  const foundUser = await db.getUser(username);
  // const user = foundUser[0];
  if (foundUser.length === 0) {
  return res.status(409).json('User not found. Please register as a new user before logging in.');
  
  } else {
    const user = await bcrypt.compareSync(password, foundUser[0].password);
      req.session.user = { user_id: user.user_id, username: user.username, zodiac_id: user.zodiac_id, email: user.email };
      res.status(200).json(req.session.user);
  }
}

/////register
async function register(req, res) {
    const { username, password, zodiac_id, email } = req.body;
    const db = req.app.get('db');
  
    if (foundUser = 0) return res.status(411).json('Fields can not be empty.')
    

    const result = await db.getUser(username);
    if (result.length !== 0) return res.status(409).json('Username taken');
  
    const hash = await bcrypt.hashSync(password, 10)
    console.log(hash)
    const registeredUser = await db.registerUser([username, hash, zodiac_id, email]);
    const user = registeredUser[0];
    req.session.user = { user_id: user.user_id, username: user.username, zodiac_id: zodiac_id, email: user.email }
    res.status(201).json(req.session.user);
    
  }


module.exports = {
    register,
    login,
    getUser
}
// console.log(isAuthenticated)
// console.log('password: ' + password)
// console.log('typed password: ' + user.password)
// console.log(req.session)



// const register = (req, res) => {
//     const db = req.app.get('db');
//     const {username, password, zodiac_id} = req.body;
//     console.log(req.body)
//     bcrypt.hash(password, 10).then((hash) => {
//             db.registerUser([username, hash, zodiac_id])
//             .then(user => {
//                 req.session.user = {
//                     id: user[0].id,
//                     username: user[0].username,
//                     user_zodiac_id: user[0].zodiac_id
//                 };
//                 res.status(200).json(req.session.user)
//             });
//         })
//         .catch(err => {
//             console.log(err)
//             res.status(500).json('error')
//         })
//         .catch(err => {
//             console.log(err)
//             res.status(500).json('error')
//         })
// }

// const login = (req, res) => {
//     const db = req.app.get('db')
//     const {username, password} = req.body;
//     db.getUser(username).then(user => {
//         if(user.length === 0) {
//             res.status(400).json('user does not exist')
//         } else {
//             bcrypt.compare(password, user[0].password).then(areEqual => {
//                 if(areEqual) {
//                     const {id, username, zodiac_id} = user[0]
//                     req.session.user = {
//                        user_id: id,
//                        user_username: username,
//                        user_zodiac_id: zodiac_id
//                     }
//                     res.status(200).json(req.session.user)
//                 } else {
//                     res.status(403).json('incorrect username or password')
//                 }
//             })
//         }
//     })
// }
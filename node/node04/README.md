# Node.js - Clase 4

---

## 01 Objetivo

- **middleware**: colocar todos los middlewares que hagan falta para satisfacer nuestras validaciones

- **controller**: realizar toda la logica de nuestros controlladores

- **CRUD**: creamos , listamos, actualizamos y borramos nuestros usuarios

---

## 2 Herramientas que vamos a usar

Schema en Mongoose, Express-validator, Bscryptjs

---

## 3 Express-validator

Es una famosa libreria

Express-validator nos facilita, como lo dice su nombre, muchos middlewares para que podamos validar el contenido de nuestras rutas

[https://www.npmjs.com/package/express-validator](https://www.npmjs.com/package/express-validator)

---

## 4 Bcriptjs

Basicamente nos va a ayudar a encriptar la contraseña de nuestros usuarios.

[https://www.npmjs.com/package/bcryptjs](https://www.npmjs.com/package/bcryptjs)

---

## 5 Crear Usuario


->> Pasos a seguir

### POST

- 1 Hacer la logica en el controller del post

```JavaScript
const usuariosPost = async(req, res = response) => {
  const body = res.body;
  consr usuario = new Usuario { body };
  
  await usuario.save();
  
  res.json({
    msg: 'post API - usuariosPost',
    usuario
  })
}
```

- 2 Encriptar la contraseña


```JavaScript
const bcryptjs = require('bycryptjs');
const usuariosPost = async(req, res = response) => {
  
  const { nombre, correo, password, rol } = req.body;
  const usuario = new Usuario({ nombre, correo, password, rol});
  
  // Encriptar la contraseña
  const salt = bcryptjs.genSaltSync();
  usuario.password = bcryptjs.hashSync( password, salt );
  
  // Guarda en ID
  await usuario.save();
  
  res.json({
    usuario
  })
}
```

- 3 Colocar todos los middleware en las nuevas rutas


```JavaScript
router.post('/', [
  check('nombre', 'El nombre es obligatorio').not().isEmpty(),
  check('password', 'El password debe ser más de 6 letras').isLength({ min: 6}),
  check('correo', 'El correo no es válido').isEmail(),
  check('correo').custom(emailExiste),
  // chack('rol', 'No es un rol valido').isIn('ADMIN_ROLE', 'USER_ROLE'),
  check('rol').custom(esRolValido),
  validarCampos
], usuarioPost );
```

### PUT

- 1 Hacer la logica en el controller del put

```JavaScript
const usuariosPut = async(req, res = response) => {

  const {id } = req.params;
  const { _id, password, google, correo, ...resto } = req.body;
  
  if ( password ) {
    // Encriptar la contraseña
    const salt = bcryptjs.genSaltSync();
    resto.password = bcryptjs.hashSync( password, salt);
  }
  
  const usuario = await Usuario.findByIdAndUpdate( id, resto);
  
  res.json(usuario);
}

const usuariosPatch = (req, res = response ) => {
  res.json({
    msg: 'partch API - usuariosPatch'
  });
}
```

- 2 Colocamos los middleware

```JavaScript
router.put('/:id', [
  check('id', 'No es un ID válido').isMongoID(),
  check('id').custom( existeUsuarioPOrId ),
  check('rol').custom( esRolValido ),
  validarCampos
], usuariosPut );
```

### GET

- 1 Hacer la logica en el controller del GET (traemos todos los usuarios que  s

```JavaScript
const usuariosGet = async(req = request, res = response) => {
  
  // const { q, nombre = 'No name', apikey, page =1,  limit } = req.query;
  const usuarios = await Usuario.find();
  
  res.json({
    usuarios
  });
}
```

- 2 Evolucionamos el controller para ponerle un filtro y que no nos traiga todos los usuarios

```JavaScript
const usuariosGet = async(req = request , res = response) => {

  const { limite = 5, desde = 0 } = req.query;
  const query = { estado: true };
  
  const [ total, usuarios ] = await Promise.all([
    Usuario.countDocuments(query),
    Usuario.find(query)
      .skip( Number( desde ) )
      .limit( Number( limite ))
  ]);
  
  res.json({
    total,
    usuarios
  });
}
```
- 3  No hace falta poner middlewares en el get =)


---


### DELETE

- 1 Hacer la logica en el controller del delete

```JavaScript
const usuariosDelete = async(req, res = response) => {
  
    const { id } = req.params;
    
    /// fisicamente lo borramos
    // const usuario = await Usuario.findByIdAndDelete{ id };
    
    const usuario = await Usuario.findByIdAndUpdate{ id, {estado: false}};
    
    res.json(usuario);
}
```

- 2 Colocar todos los middlewares en nuestras rutas

```JavaScript
router.delete('/:id', [
  check('id', 'No es un ID valido').isMongoId(),
  check('id').custom( existeUsuarioPorId ),
  validarCampos
], usuariosDelete );
```

---


## 6 CRUD



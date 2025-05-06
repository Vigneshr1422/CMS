/*
Warning: PowerShell detected that you might be using a screen reader and has disabled PSReadLine for compatibility purposes. If you want to re-enable it, run 'Import-Module PSReadLine'.

PS D:\pro_x> cd D:\pro_x
PS D:\pro_x> mkdir backend

    Directory: D:\pro_x

Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
d----          22-04-2025    14:08                backend

PS D:\pro_x> cd backend
PS D:\pro_x\backend> mkdir config controllers middleware models routes utils
mkdir: A positional parameter cannot be found that accepts argument 'controllers'.
PS D:\pro_x\backend> touch config/db.js config/config.js controllers/authController.js controllers/userController.js middleware/authMiddleware.js middleware/roleMiddleware.js models/userModel.js models/roleModel.js routes/authRoutes.js routes/userRoutes.js utils/jwtUtils.js .env server.js
touch: The term 'touch' is not recognized as a name of a cmdlet, function, script file, or executable program.
Check the spelling of the name, or if a path was included, verify that the path is correct and try again.
PS D:\pro_x\backend> mkdir config, controllers, middleware, models, routes, utils

    Directory: D:\pro_x\backend

Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
d----          22-04-2025    14:09                config
d----          22-04-2025    14:09                controllers    
d----          22-04-2025    14:09                middleware
d----          22-04-2025    14:09                models
d----          22-04-2025    14:09                routes
d----          22-04-2025    14:09                utils

PS D:\pro_x\backend> New-Item config\db.js

    Directory: D:\pro_x\backend\config

Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a---          22-04-2025    14:09              0 db.js

PS D:\pro_x\backend> New-Item config\config.js

    Directory: D:\pro_x\backend\config

Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a---          22-04-2025    14:09              0 config.js      

PS D:\pro_x\backend> New-Item controllers\authController.js

    Directory: D:\pro_x\backend\controllers

Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a---          22-04-2025    14:09              0 authController 
                                                  .js

PS D:\pro_x\backend> New-Item controllers\userController.js

    Directory: D:\pro_x\backend\controllers

Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a---          22-04-2025    14:09              0 userController 
                                                  .js

PS D:\pro_x\backend> New-Item middleware\authMiddleware.js

    Directory: D:\pro_x\backend\middleware

Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a---          22-04-2025    14:09              0 authMiddleware 
                                                  .js

PS D:\pro_x\backend> New-Item middleware\roleMiddleware.js

    Directory: D:\pro_x\backend\middleware

Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a---          22-04-2025    14:09              0 roleMiddleware
                                                  .js

PS D:\pro_x\backend> New-Item models\userModel.js

    Directory: D:\pro_x\backend\models

Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a---          22-04-2025    14:09              0 userModel.js   

PS D:\pro_x\backend> New-Item models\roleModel.js

    Directory: D:\pro_x\backend\models

Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a---          22-04-2025    14:09              0 roleModel.js   

PS D:\pro_x\backend> New-Item routes\authRoutes.js

    Directory: D:\pro_x\backend\routes

Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a---          22-04-2025    14:09              0 authRoutes.js  

PS D:\pro_x\backend> New-Item routes\userRoutes.js

    Directory: D:\pro_x\backend\routes

Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a---          22-04-2025    14:09              0 userRoutes.js  

PS D:\pro_x\backend> New-Item utils\jwtUtils.js

    Directory: D:\pro_x\backend\utils

Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a---          22-04-2025    14:09              0 jwtUtils.js    

PS D:\pro_x\backend> New-Item .env

    Directory: D:\pro_x\backend

Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a---          22-04-2025    14:09              0 .env

PS D:\pro_x\backend> New-Item server.js

    Directory: D:\pro_x\backend

Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a---          22-04-2025    14:09              0 server.js      

PS D:\pro_x\backend> npm init -y
Wrote to D:\pro_x\backend\package.json:

{
  "name": "backend",
  "version": "1.0.0",
  "description": "",
  "main": "server.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",       
    "start": "node server.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "type": "commonjs"
}



PS D:\pro_x\backend> npm install express mongoose bcryptjs jsonwebtoken dotenv

added 98 packages, and audited 99 packages in 31s

16 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
PS D:\pro_x\backend> npm install --save-dev nodemon

added 27 packages, and audited 126 packages in 7s

20 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
PS D:\pro_x\backend> node server.js
Server running on port 5000 🚀
MongoDB connected ✅
PS D:\pro_x\backend> npm install cors

added 2 packages, and audited 128 packages in 7s

20 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
PS D:\pro_x\backend> nodemon server.js
[nodemon] 3.1.7
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,cjs,json
[nodemon] starting `node server.js`
Server running on port 5000 🚀
MongoDB connected ✅
┌───────────────────────────────────┐
│ New version of nodemon available! │
│ Current Version: 3.1.7            │
│ Latest Version: 3.1.9             │
└───────────────────────────────────┘
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
Server running on port 5000 🚀
MongoDB connected ✅
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
Server running on port 5000 🚀
MongoDB connected ✅
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
Server running on port 5000 🚀
MongoDB connected ✅
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
Server running on port 5000 🚀
MongoDB connected ✅
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
node:internal/modules/cjs/loader:1252
  throw err;
  ^

Error: Cannot find module '../models/Student'
Require stack:
- D:\pro_x\backend\routes\authRoutes.js
- D:\pro_x\backend\server.js
    at Function._resolveFilename (node:internal/modules/cjs/loader:1249:15)
    at Function._load (node:internal/modules/cjs/loader:1075:27) 
    at TracingChannel.traceSync (node:diagnostics_channel:315:14)
    at wrapModuleLoad (node:internal/modules/cjs/loader:218:24)  
    at Module.require (node:internal/modules/cjs/loader:1340:12) 
    at require (node:internal/modules/helpers:141:16)
    at Object.<anonymous> (D:\pro_x\backend\routes\authRoutes.js:7:17)
    at Module._compile (node:internal/modules/cjs/loader:1546:14)
    at Object..js (node:internal/modules/cjs/loader:1689:10)     
    at Module.load (node:internal/modules/cjs/loader:1318:32) {  
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    'D:\\pro_x\\backend\\routes\\authRoutes.js',
    'D:\\pro_x\\backend\\server.js'
  ]
}

Node.js v22.11.0
[nodemon] app crashed - waiting for file changes before starting...
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
node:internal/modules/cjs/loader:1252
  throw err;
  ^

Error: Cannot find module '../models/Student'
Require stack:
- D:\pro_x\backend\routes\authRoutes.js
- D:\pro_x\backend\server.js
    at Function._resolveFilename (node:internal/modules/cjs/loader:1249:15)
    at Function._load (node:internal/modules/cjs/loader:1075:27) 
    at TracingChannel.traceSync (node:diagnostics_channel:315:14)
    at wrapModuleLoad (node:internal/modules/cjs/loader:218:24)  
    at Module.require (node:internal/modules/cjs/loader:1340:12) 
    at require (node:internal/modules/helpers:141:16)
    at Object.<anonymous> (D:\pro_x\backend\routes\authRoutes.js:7:17)
    at Module._compile (node:internal/modules/cjs/loader:1546:14)
    at Object..js (node:internal/modules/cjs/loader:1689:10)     
    at Module.load (node:internal/modules/cjs/loader:1318:32) {  
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    'D:\\pro_x\\backend\\routes\\authRoutes.js',
    'D:\\pro_x\\backend\\server.js'
  ]
}

Node.js v22.11.0
[nodemon] app crashed - waiting for file changes before starting...
PS D:\pro_x\backend> nodemon server.js
[nodemon] 3.1.7
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,cjs,json
[nodemon] starting `node server.js`
node:internal/modules/cjs/loader:1252
  throw err;
  ^

Error: Cannot find module '../models/Student'
Require stack:
- D:\pro_x\backend\routes\authRoutes.js
- D:\pro_x\backend\server.js
    at Function._resolveFilename (node:internal/modules/cjs/loader:1249:15)
    at Function._load (node:internal/modules/cjs/loader:1075:27) 
    at TracingChannel.traceSync (node:diagnostics_channel:315:14)
    at wrapModuleLoad (node:internal/modules/cjs/loader:218:24)  
    at Module.require (node:internal/modules/cjs/loader:1340:12) 
    at require (node:internal/modules/helpers:141:16)
    at Object.<anonymous> (D:\pro_x\backend\routes\authRoutes.js:7:17)
    at Module._compile (node:internal/modules/cjs/loader:1546:14)
    at Object..js (node:internal/modules/cjs/loader:1689:10)     
    at Module.load (node:internal/modules/cjs/loader:1318:32) {  
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    'D:\\pro_x\\backend\\routes\\authRoutes.js',
    'D:\\pro_x\\backend\\server.js'
  ]
}

Node.js v22.11.0
[nodemon] app crashed - waiting for file changes before starting...
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
node:internal/modules/cjs/loader:1252
  throw err;
  ^

Error: Cannot find module '../models/Student'
Require stack:
- D:\pro_x\backend\routes\authRoutes.js
- D:\pro_x\backend\server.js
    at Function._resolveFilename (node:internal/modules/cjs/loader:1249:15)
    at Function._load (node:internal/modules/cjs/loader:1075:27) 
    at TracingChannel.traceSync (node:diagnostics_channel:315:14)
    at wrapModuleLoad (node:internal/modules/cjs/loader:218:24)  
    at Module.require (node:internal/modules/cjs/loader:1340:12) 
    at require (node:internal/modules/helpers:141:16)
    at Object.<anonymous> (D:\pro_x\backend\routes\authRoutes.js:7:17)
    at Module._compile (node:internal/modules/cjs/loader:1546:14)
    at Object..js (node:internal/modules/cjs/loader:1689:10)     
    at Module.load (node:internal/modules/cjs/loader:1318:32) {  
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    'D:\\pro_x\\backend\\routes\\authRoutes.js',
    'D:\\pro_x\\backend\\server.js'
  ]
}

Node.js v22.11.0
[nodemon] app crashed - waiting for file changes before starting...
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
node:internal/modules/cjs/loader:1252
  throw err;
  ^

Error: Cannot find module '../models/Student'
Require stack:
- D:\pro_x\backend\routes\authRoutes.js
- D:\pro_x\backend\server.js
    at Function._resolveFilename (node:internal/modules/cjs/loader:1249:15)
    at Function._load (node:internal/modules/cjs/loader:1075:27) 
    at TracingChannel.traceSync (node:diagnostics_channel:315:14)
    at wrapModuleLoad (node:internal/modules/cjs/loader:218:24)  
    at Module.require (node:internal/modules/cjs/loader:1340:12) 
    at require (node:internal/modules/helpers:141:16)
    at Object.<anonymous> (D:\pro_x\backend\routes\authRoutes.js:7:17)
    at Module._compile (node:internal/modules/cjs/loader:1546:14)
    at Object..js (node:internal/modules/cjs/loader:1689:10)     
    at Module.load (node:internal/modules/cjs/loader:1318:32) {  
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    'D:\\pro_x\\backend\\routes\\authRoutes.js',
    'D:\\pro_x\\backend\\server.js'
  ]
}

Node.js v22.11.0
[nodemon] app crashed - waiting for file changes before starting...
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
node:internal/modules/cjs/loader:1252
  throw err;
  ^

Error: Cannot find module '../models/Student'
Require stack:
- D:\pro_x\backend\routes\authRoutes.js
- D:\pro_x\backend\server.js
    at Function._resolveFilename (node:internal/modules/cjs/loader:1249:15)
    at Function._load (node:internal/modules/cjs/loader:1075:27) 
    at TracingChannel.traceSync (node:diagnostics_channel:315:14)
    at wrapModuleLoad (node:internal/modules/cjs/loader:218:24)  
    at Module.require (node:internal/modules/cjs/loader:1340:12) 
    at require (node:internal/modules/helpers:141:16)
    at Object.<anonymous> (D:\pro_x\backend\routes\authRoutes.js:7:17)
    at Module._compile (node:internal/modules/cjs/loader:1546:14)
    at Object..js (node:internal/modules/cjs/loader:1689:10)     
    at Module.load (node:internal/modules/cjs/loader:1318:32) {  
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    'D:\\pro_x\\backend\\routes\\authRoutes.js',
    'D:\\pro_x\\backend\\server.js'
  ]
}

Node.js v22.11.0
[nodemon] app crashed - waiting for file changes before starting...
PS D:\pro_x\backend> nodemon server.js
[nodemon] 3.1.7
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,cjs,json
[nodemon] starting `node server.js`
node:internal/modules/cjs/loader:1252
  throw err;
  ^

Error: Cannot find module '../models/Student'
Require stack:
- D:\pro_x\backend\routes\authRoutes.js
- D:\pro_x\backend\server.js
    at Function._resolveFilename (node:internal/modules/cjs/loader:1249:15)
    at Function._load (node:internal/modules/cjs/loader:1075:27) 
    at TracingChannel.traceSync (node:diagnostics_channel:315:14)
    at wrapModuleLoad (node:internal/modules/cjs/loader:218:24)  
    at Module.require (node:internal/modules/cjs/loader:1340:12) 
    at require (node:internal/modules/helpers:141:16)
    at Object.<anonymous> (D:\pro_x\backend\routes\authRoutes.js:7:17)
    at Module._compile (node:internal/modules/cjs/loader:1546:14)
    at Object..js (node:internal/modules/cjs/loader:1689:10)     
    at Module.load (node:internal/modules/cjs/loader:1318:32) {  
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    'D:\\pro_x\\backend\\routes\\authRoutes.js',
    'D:\\pro_x\\backend\\server.js'
  ]
}

Node.js v22.11.0
[nodemon] app crashed - waiting for file changes before starting...
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
node:internal/modules/cjs/loader:1252
  throw err;
  ^

Error: Cannot find module '../models/Student'
Require stack:
- D:\pro_x\backend\routes\authRoutes.js
- D:\pro_x\backend\server.js
    at Function._resolveFilename (node:internal/modules/cjs/loader:1249:15)
    at Function._load (node:internal/modules/cjs/loader:1075:27) 
    at TracingChannel.traceSync (node:diagnostics_channel:315:14)
    at wrapModuleLoad (node:internal/modules/cjs/loader:218:24)  
    at Module.require (node:internal/modules/cjs/loader:1340:12) 
    at require (node:internal/modules/helpers:141:16)
    at Object.<anonymous> (D:\pro_x\backend\routes\authRoutes.js:7:17)
    at Module._compile (node:internal/modules/cjs/loader:1546:14)
    at Object..js (node:internal/modules/cjs/loader:1689:10)     
    at Module.load (node:internal/modules/cjs/loader:1318:32) {  
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    'D:\\pro_x\\backend\\routes\\authRoutes.js',
    'D:\\pro_x\\backend\\server.js'
  ]
}

Node.js v22.11.0
[nodemon] app crashed - waiting for file changes before starting...
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
node:internal/modules/cjs/loader:1252
  throw err;
  ^

Error: Cannot find module '../models/Student'
Require stack:
- D:\pro_x\backend\routes\authRoutes.js
- D:\pro_x\backend\server.js
    at Function._resolveFilename (node:internal/modules/cjs/loader:1249:15)
    at Function._load (node:internal/modules/cjs/loader:1075:27) 
    at TracingChannel.traceSync (node:diagnostics_channel:315:14)
    at wrapModuleLoad (node:internal/modules/cjs/loader:218:24)  
    at Module.require (node:internal/modules/cjs/loader:1340:12) 
    at require (node:internal/modules/helpers:141:16)
    at Object.<anonymous> (D:\pro_x\backend\routes\authRoutes.js:7:17)
    at Module._compile (node:internal/modules/cjs/loader:1546:14)
    at Object..js (node:internal/modules/cjs/loader:1689:10)     
    at Module.load (node:internal/modules/cjs/loader:1318:32) {  
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    'D:\\pro_x\\backend\\routes\\authRoutes.js',
    'D:\\pro_x\\backend\\server.js'
  ]
}

Node.js v22.11.0
[nodemon] app crashed - waiting for file changes before starting...
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
node:internal/modules/cjs/loader:1252
  throw err;
  ^

Error: Cannot find module '../models/Student'
Require stack:
- D:\pro_x\backend\routes\authRoutes.js
- D:\pro_x\backend\server.js
    at Function._resolveFilename (node:internal/modules/cjs/loader:1249:15)
    at Function._load (node:internal/modules/cjs/loader:1075:27) 
    at TracingChannel.traceSync (node:diagnostics_channel:315:14)
    at wrapModuleLoad (node:internal/modules/cjs/loader:218:24)  
    at Module.require (node:internal/modules/cjs/loader:1340:12) 
    at require (node:internal/modules/helpers:141:16)
    at Object.<anonymous> (D:\pro_x\backend\routes\authRoutes.js:7:17)
    at Module._compile (node:internal/modules/cjs/loader:1546:14)
    at Object..js (node:internal/modules/cjs/loader:1689:10)     
    at Module.load (node:internal/modules/cjs/loader:1318:32) {  
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    'D:\\pro_x\\backend\\routes\\authRoutes.js',
    'D:\\pro_x\\backend\\server.js'
  ]
}

Node.js v22.11.0
[nodemon] app crashed - waiting for file changes before starting...
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
Server running on port 5000 🚀
MongoDB connected ✅
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
Server running on port 5000 🚀
MongoDB connected ✅
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
Server running on port 5000 🚀
MongoDB connected ✅
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
Server running on port 5000 🚀
MongoDB connected ✅
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
(node:22872) [MONGODB DRIVER] Warning: useNewUrlParser is a deprecated option: useNewUrlParser has no effect since Node.js Driver version 4.0.0 and will be removed in the next major version      
(Use `node --trace-warnings ...` to show where the warning was created)
(node:22872) [MONGODB DRIVER] Warning: useUnifiedTopology is a deprecated option: useUnifiedTopology has no effect since Node.js Driver version 4.0.0 and will be removed in the next major version
Server running on port 5000 🚀
MongoDB connected successfully
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
Server running on port 5000 🚀
MongoDB connected ✅
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
D:\pro_x\backend\server.js:8
connectDB();
^

TypeError: connectDB is not a function
    at Object.<anonymous> (D:\pro_x\backend\server.js:8:1)       
    at Module._compile (node:internal/modules/cjs/loader:1546:14)
    at Object..js (node:internal/modules/cjs/loader:1689:10)     
    at Module.load (node:internal/modules/cjs/loader:1318:32)    
    at Function._load (node:internal/modules/cjs/loader:1128:12) 
    at TracingChannel.traceSync (node:diagnostics_channel:315:14)
    at wrapModuleLoad (node:internal/modules/cjs/loader:218:24)  
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:170:5)
    at node:internal/main/run_main_module:36:49

Node.js v22.11.0
[nodemon] app crashed - waiting for file changes before starting...
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
(node:9172) [MONGODB DRIVER] Warning: useNewUrlParser is a deprecated option: useNewUrlParser has no effect since Node.js Driver version 4.0.0 and will be removed in the next major version       
(Use `node --trace-warnings ...` to show where the warning was created)
(node:9172) [MONGODB DRIVER] Warning: useUnifiedTopology is a deprecated option: useUnifiedTopology has no effect since Node.js Driver version 4.0.0 and will be removed in the next major version 
Server running on port 5000 🚀
MongoDB connected successfully
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
(node:12120) [MONGODB DRIVER] Warning: useNewUrlParser is a deprecated option: useNewUrlParser has no effect since Node.js Driver version 4.0.0 and will be removed in the next major version      
(Use `node --trace-warnings ...` to show where the warning was created)
(node:12120) [MONGODB DRIVER] Warning: useUnifiedTopology is a deprecated option: useUnifiedTopology has no effect since Node.js Driver version 4.0.0 and will be removed in the next major version
Server running on port 5000 🚀
MongoDB connected successfully
[nodemon] restarting due to changes...
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
(node:23092) [MONGODB DRIVER] Warning: useNewUrlParser is a deprecated option: useNewUrlParser has no effect since Node.js Driver version 4.0.0 and will be removed in the next major version      
(Use `node --trace-warnings ...` to show where the warning was created)
(node:23092) [MONGODB DRIVER] Warning: useUnifiedTopology is a deprecated option: useUnifiedTopology has no effect since Node.js Driver version 4.0.0 and will be removed in the next major version
Server running on port 5000 🚀
MongoDB connected successfully
Error: secretOrPrivateKey must have a value
    at module.exports [as sign] (D:\pro_x\backend\node_modules\jsonwebtoken\sign.js:111:20)
    at D:\pro_x\backend\routes\authRoutes.js:86:23
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
(node:3204) [MONGODB DRIVER] Warning: useNewUrlParser is a deprecated option: useNewUrlParser has no effect since Node.js Driver version 4.0.0 and will be removed in the next major version       
(Use `node --trace-warnings ...` to show where the warning was created)
(node:3204) [MONGODB DRIVER] Warning: useUnifiedTopology is a deprecated option: useUnifiedTopology has no effect since Node.js Driver version 4.0.0 and will be removed in the next major version 
Server running on port 5000 🚀
MongoDB connected successfully
Error during login: Error: secretOrPrivateKey must have a value
    at module.exports [as sign] (D:\pro_x\backend\node_modules\jsonwebtoken\sign.js:111:20)
    at D:\pro_x\backend\routes\authRoutes.js:85:25
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
(node:13812) [MONGODB DRIVER] Warning: useNewUrlParser is a deprecated option: useNewUrlParser has no effect since Node.js Driver version 4.0.0 and will be removed in the next major version      
(Use `node --trace-warnings ...` to show where the warning was created)
(node:13812) [MONGODB DRIVER] Warning: useUnifiedTopology is a deprecated option: useUnifiedTopology has no effect since Node.js Driver version 4.0.0 and will be removed in the next major version
Server running on port 5000 🚀
MongoDB connected successfully
Password mismatch
Password mismatch
Password mismatch
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
(node:16072) [MONGODB DRIVER] Warning: useNewUrlParser is a deprecated option: useNewUrlParser has no effect since Node.js Driver version 4.0.0 and will be removed in the next major version
(Use `node --trace-warnings ...` to show where the warning was created)
(node:16072) [MONGODB DRIVER] Warning: useUnifiedTopology is a deprecated option: useUnifiedTopology has no effect since Node.js Driver version 4.0.0 and will be removed in the next major version
Server running on port 5000 🚀
MongoDB connected successfully
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
(node:7352) [MONGODB DRIVER] Warning: useNewUrlParser is a deprecated option: useNewUrlParser has no effect since Node.js Driver version 4.0.0 and will be removed in the next major version       
(Use `node --trace-warnings ...` to show where the warning was created)
(node:7352) [MONGODB DRIVER] Warning: useUnifiedTopology is a deprecated option: useUnifiedTopology has no effect since Node.js Driver version 4.0.0 and will be removed in the next major version 
Server running on port 5000 🚀
MongoDB connected successfully


*/


/*
Warning: PowerShell detected that you might be using a screen reader and has disabled PSReadLine for compatibility purposes. If you want to re-enable it, run 'Import-Module PSReadLine'.

PS D:\pro_x> cd frontend
PS D:\pro_x\frontend> npm install react-router-dom@6

added 25 packages, and audited 268 packages in 16s

58 packages are looking for funding
  run `npm fund` for details

2 vulnerabilities (1 moderate, 1 high)

To address all issues, run:
  npm audit fix

Run `npm audit` for details.
PS D:\pro_x\frontend> npm install react-toastify

added 2 packages, and audited 270 packages in 8s

58 packages are looking for funding
  run `npm fund` for details

2 vulnerabilities (1 moderate, 1 high)

To address all issues, run:
  npm audit fix

Run `npm audit` for details
*/


/*
Warning: PowerShell detected that you might be using a screen reader and has disabled PSReadLine for compatibility purposes. If you want to re-enable it, run 'Import-Module PSReadLine'.

PS D:\pro_x> cd D:\pro_x
PS D:\pro_x> mkdir frontend

    Directory: D:\pro_x

Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
d----          22-04-2025    13:46                frontend

PS D:\pro_x> cd frontend
PS D:\pro_x\frontend> npm create vite@4.4.9
npm error code ETARGET
npm error notarget No matching version found for create-vite@4.4.9.
npm error notarget a package version that doesn't exist.
npm error A complete log of this run can be found in: C:\Users\91755\AppData\Local\npm-cache\_logs\2025-04-22T08_16_48_032Z-debug-0.log
PS D:\pro_x\frontend> cd D:\pro_x
PS D:\pro_x> mkdir frontend
New-Item: An item with the specified name D:\pro_x\frontend already exists.
PS D:\pro_x> cd frontend
PS D:\pro_x\frontend> npm create vite@latest
Need to install the following packages:
create-vite@6.4.1
Ok to proceed? (y) y


> npx
> create-vite

│
◇  Project name:
│  leo
│
◇  Select a framework:
│  React
│
◇  Select a variant:
│  JavaScript
│
◇  Scaffolding project in D:\pro_x\frontend\leo...
│
└  Done. Now run:

  cd leo
  npm install
  npm run dev

PS D:\pro_x\frontend> npm install
npm error code ENOENT
npm error syscall open
npm error path D:\pro_x\frontend\package.json
e or directory, open 'D:\pro_x\frontend\package.json'
npm error enoent This is related to npm not being able to find a file.
npm error enoent
npm error A complete log of this run can be found in: C:\Users\91755\AppData\Local\npm-cache\_logs\2025-04-22T08_18_49_863Z-debug-0.log
PS D:\pro_x\frontend> cd leo
PS D:\pro_x\frontend\leo>   npm install
⠧
PS D:\pro_x\frontend\leo> cd D:\pro_x\frontend
PS D:\pro_x\frontend> move leo\* .     # Move all contents up one level 
PS D:\pro_x\frontend> rmdir leo /s /q  # Delete the empty leo folder    
Remove-Item: A positional parameter cannot be found that accepts argument '/s'.
PS D:\pro_x\frontend> Move-Item -Path .\leo\* -Destination .\
ath .\leo -Recurse -Force
PS D:\pro_x\frontend>   npm install
ll

added 196 packages, and audited 197 packages in 52s

32 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
PS D:\pro_x\frontend> npm install vite@4.4.9

removed 26 packages, changed 25 packages, and audited 171 packages in 26s

30 packages are looking for funding
  run `npm fund` for details

2 vulnerabilities (1 moderate, 1 high)

To address all issues, run:
  npm audit fix --force

Run `npm audit` for details.
PS D:\pro_x\frontend> npm install -D tailwindcss@3.3.5 postcss autoprefixer

added 94 packages, and audited 265 packages in 36s

58 packages are looking for funding
  run `npm fund` for details

2 vulnerabilities (1 moderate, 1 high)

To address all issues, run:
  npm audit fix

Run `npm audit` for details.
PS D:\pro_x\frontend> npx tailwindcss init -p

Created Tailwind CSS config file: tailwind.config.js
Created PostCSS config file: postcss.config.js
PS D:\pro_x\frontend> rm src/App.css   # for PowerShell use:
PS D:\pro_x\frontend> Remove-Item .\src\App.css
Remove-Item: Cannot find path 'D:\pro_x\frontend\src\App.css' because it does not exist.
PS D:\pro_x\frontend> npm run dev

> leo@0.0.0 dev
> vite


  VITE v4.4.9  ready in 613 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h to show help

warn - No utility classes were detected in your source files. If this is unexpected, double-check the `content` option in your Tailwind CSS configuration.
warn - https://tailwindcss.com/docs/content-configuration
1:57:23 pm [vite] hmr update /src/App.jsx, /src/index.css        
1:59:14 pm [vite] hmr update /src/App.jsx, /src/index.css (x2)   
2:03:01 pm [vite] hmr update /src/components/Header.jsx, /src/index.css
2:03:02 pm [vite] ✨ new dependencies optimized: react-router-dom
2:03:02 pm [vite] ✨ optimized dependencies changed. reloading
PS D:\pro_x\frontend>   npm run dev

> leo@0.0.0 dev
> vite


  VITE v4.4.9  ready in 417 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h to show help
2:04:46 pm [vite] hmr update /src/App.jsx, /src/index.css        
2:05:47 pm [vite] page reload src/main.jsx
2:06:05 pm [vite] hmr update /src/App.jsx, /src/index.css        
2:12:58 pm [vite] hmr update /src/pages/Login.jsx, /src/index.css
2:13:04 pm [vite] hmr update /src/pages/Register.jsx, /src/index.css
2:13:05 pm [vite] Internal server error: D:\pro_x\frontend\src\pages\Register.jsx: Unterminated JSX contents. (79:14)

  77 |             placeholder="Enter your password"
  78 |           />
> 79 |         </div>
     |               ^
  80 |
  Plugin: vite:react-babel
  File: D:/pro_x/frontend/src/pages/Register.jsx:79:14
      at constructor (D:\pro_x\frontend\node_modules\@babel\parser\lib\index.js:360:19)
      at JSXParserMixin.raise (D:\pro_x\frontend\node_modules\@babel\parser\lib\index.js:3338:19)
      at JSXParserMixin.jsxReadToken (D:\pro_x\frontend\node_modules\@babel\parser\lib\index.js:6634:20)
      at JSXParserMixin.getTokenFromCode (D:\pro_x\frontend\node_modules\@babel\parser\lib\index.js:6960:12)
      at JSXParserMixin.nextToken (D:\pro_x\frontend\node_modules\@babel\parser\lib\index.js:2521:10)
      at JSXParserMixin.next (D:\pro_x\frontend\node_modules\@babel\parser\lib\index.js:2434:10)
      at JSXParserMixin.eat (D:\pro_x\frontend\node_modules\@babel\parser\lib\index.js:2438:12)
      at JSXParserMixin.expect (D:\pro_x\frontend\node_modules\@babel\parser\lib\index.js:3667:15)
      at JSXParserMixin.jsxParseClosingElementAt (D:\pro_x\frontend\node_modules\@babel\parser\lib\index.js:6866:10)
      at JSXParserMixin.jsxParseElementAt (D:\pro_x\frontend\node_modules\@babel\parser\lib\index.js:6881:37)
      at JSXParserMixin.jsxParseElementAt (D:\pro_x\frontend\node_modules\@babel\parser\lib\index.js:6884:32)
      at JSXParserMixin.jsxParseElementAt (D:\pro_x\frontend\node_modules\@babel\parser\lib\index.js:6884:32)
      at JSXParserMixin.jsxParseElement (D:\pro_x\frontend\node_modules\@babel\parser\lib\index.js:6935:17)
      at JSXParserMixin.parseExprAtom (D:\pro_x\frontend\node_modules\@babel\parser\lib\index.js:6945:19)
      at JSXParserMixin.parseExprSubscripts (D:\pro_x\frontend\node_modules\@babel\parser\lib\index.js:10785:23)
      at JSXParserMixin.parseUpdate (D:\pro_x\frontend\node_modules\@babel\parser\lib\index.js:10770:21)
      at JSXParserMixin.parseMaybeUnary (D:\pro_x\frontend\node_modules\@babel\parser\lib\index.js:10750:23)
      at JSXParserMixin.parseMaybeUnaryOrPrivate (D:\pro_x\frontend\node_modules\@babel\parser\lib\index.js:10603:61)
      at JSXParserMixin.parseExprOps (D:\pro_x\frontend\node_modules\@babel\parser\lib\index.js:10608:23)
      at JSXParserMixin.parseMaybeConditional (D:\pro_x\frontend\node_modules\@babel\parser\lib\index.js:10585:23)
      at JSXParserMixin.parseMaybeAssign (D:\pro_x\frontend\node_modules\@babel\parser\lib\index.js:10538:21)
      at D:\pro_x\frontend\node_modules\@babel\parser\lib\index.js:10507:39
      at JSXParserMixin.allowInAnd (D:\pro_x\frontend\node_modules\@babel\parser\lib\index.js:12126:12)
      at JSXParserMixin.parseMaybeAssignAllowIn (D:\pro_x\frontend\node_modules\@babel\parser\lib\index.js:10507:17)
      at JSXParserMixin.parseParenAndDistinguishExpression (D:\pro_x\frontend\node_modules\@babel\parser\lib\index.js:11386:28)   
      at JSXParserMixin.parseExprAtom (D:\pro_x\frontend\node_modules\@babel\parser\lib\index.js:11033:23)
      at JSXParserMixin.parseExprAtom (D:\pro_x\frontend\node_modules\@babel\parser\lib\index.js:6950:20)
      at JSXParserMixin.parseExprSubscripts (D:\pro_x\frontend\node_modules\@babel\parser\lib\index.js:10785:23)
      at JSXParserMixin.parseUpdate (D:\pro_x\frontend\node_modules\@babel\parser\lib\index.js:10770:21)
      at JSXParserMixin.parseMaybeUnary (D:\pro_x\frontend\node_modules\@babel\parser\lib\index.js:10750:23)
      at JSXParserMixin.parseMaybeUnaryOrPrivate (D:\pro_x\frontend\node_modules\@babel\parser\lib\index.js:10603:61)
      at JSXParserMixin.parseExprOps (D:\pro_x\frontend\node_modules\@babel\parser\lib\index.js:10608:23)
      at JSXParserMixin.parseMaybeConditional (D:\pro_x\frontend\node_modules\@babel\parser\lib\index.js:10585:23)
      at JSXParserMixin.parseMaybeAssign (D:\pro_x\frontend\node_modules\@babel\parser\lib\index.js:10538:21)
      at JSXParserMixin.parseExpressionBase (D:\pro_x\frontend\node_modules\@babel\parser\lib\index.js:10491:23)
      at D:\pro_x\frontend\node_modules\@babel\parser\lib\index.js:10487:39
      at JSXParserMixin.allowInAnd (D:\pro_x\frontend\node_modules\@babel\parser\lib\index.js:12121:16)
      at JSXParserMixin.parseExpression (D:\pro_x\frontend\node_modules\@babel\parser\lib\index.js:10487:17)
      at JSXParserMixin.parseReturnStatement (D:\pro_x\frontend\node_modules\@babel\parser\lib\index.js:12806:28)
      at JSXParserMixin.parseStatementContent (D:\pro_x\frontend\node_modules\@babel\parser\lib\index.js:12463:21)
      at JSXParserMixin.parseStatementLike (D:\pro_x\frontend\node_modules\@babel\parser\lib\index.js:12432:17)
      at JSXParserMixin.parseStatementListItem (D:\pro_x\frontend\node_modules\@babel\parser\lib\index.js:12412:17)
      at JSXParserMixin.parseBlockOrModuleBlockBody (D:\pro_x\frontend\node_modules\@babel\parser\lib\index.js:12980:61)
      at JSXParserMixin.parseBlockBody (D:\pro_x\frontend\node_modules\@babel\parser\lib\index.js:12973:10)
      at JSXParserMixin.parseBlock (D:\pro_x\frontend\node_modules\@babel\parser\lib\index.js:12961:10)
      at JSXParserMixin.parseFunctionBody (D:\pro_x\frontend\node_modules\@babel\parser\lib\index.js:11810:24)
      at JSXParserMixin.parseArrowExpression (D:\pro_x\frontend\node_modules\@babel\parser\lib\index.js:11785:10)
      at JSXParserMixin.parseParenAndDistinguishExpression (D:\pro_x\frontend\node_modules\@babel\parser\lib\index.js:11398:12)   
      at JSXParserMixin.parseExprAtom (D:\pro_x\frontend\node_modules\@babel\parser\lib\index.js:11033:23)
      at JSXParserMixin.parseExprAtom (D:\pro_x\frontend\node_modules\@babel\parser\lib\index.js:6950:20)
2:13:11 pm [vite] hmr update /src/pages/Register.jsx, /src/index.css
2:14:33 pm [vite] hmr update /src/pages/Register.jsx, /src/index.css (x2)
2:20:53 pm [vite] hmr update /src/pages/Login.jsx, /src/index.css
2:21:06 pm [vite] hmr update /src/pages/Register.jsx, /src/index.css
2:42:40 pm [vite] hmr update /src/pages/Register.jsx, /src/index.css (x2)
2:42:40 pm [vite] hmr update /src/pages/Register.jsx, /src/index.css (x3)
2:51:03 pm [vite] hmr update /src/pages/Register.jsx, /src/index.css (x4)
2:51:09 pm [vite] hmr update /src/pages/Register.jsx, /src/index.css (x5)
2:51:18 pm [vite] hmr update /src/pages/Register.jsx, /src/index.css (x6)
2:56:43 pm [vite] hmr update /src/pages/Register.jsx, /src/index.css (x7)
2:56:54 pm [vite] hmr update /src/pages/Register.jsx, /src/index.css (x8)
2:56:58 pm [vite] hmr update /src/pages/Register.jsx, /src/index.css (x9)
2:57:01 pm [vite] hmr update /src/pages/Register.jsx, /src/index.css (x10)
2:57:08 pm [vite] hmr update /src/pages/Register.jsx, /src/index.css (x11)
4:01:41 pm [vite] hmr update /src/pages/Register.jsx, /src/index.4:01:41 pm [vite] hmr update /src/pages/Register.jsx, /src/index.css (x12)
4:11:23 pm [vite] hmr update /src/App.jsx, /src/index.css
4:11:43 pm [vite] page reload src/pages/AdminDashboard.jsx       
4:11:51 pm [vite] page reload src/pages/StaffDashboard.jsx       
4:11:56 pm [vite] page reload src/pages/StudentDashboard.jsx     
4:12:43 pm [vite] hmr update /src/App.jsx, /src/index.css        
4:15:10 pm [vite] hmr update /src/App.jsx, /src/index.css (x2)   
4:15:12 pm [vite] hmr update /src/App.jsx, /src/index.css (x3)   
4:15:14 pm [vite] hmr update /src/App.jsx, /src/index.css (x4)   
4:15:17 pm [vite] hmr update /src/App.jsx, /src/index.css (x5)   
4:15:20 pm [vite] hmr update /src/App.jsx, /src/index.css (x6)   
4:15:20 pm [vite] hmr update /src/App.jsx, /src/index.css (x7)   
4:16:49 pm [vite] hmr update /src/pages/Login.jsx, /src/index.css
4:17:23 pm [vite] hmr update /src/pages/Login.jsx, /src/index.css (x2)
4:18:20 pm [vite] hmr update /src/pages/Login.jsx, /src/index.css (x3)
4:20:58 pm [vite] hmr update /src/pages/Login.jsx, /src/index.css (x4)
4:49:10 pm [vite] hmr update /src/pages/Login.jsx, /src/index.css (x5)
4:49:10 pm [vite] hmr update /src/pages/Login.jsx, /src/index.css (x6)
4:50:57 pm [vite] hmr update /src/pages/Login.jsx, /src/index.css (x7)
4:55:59 pm [vite] hmr update /src/pages/Login.jsx, /src/index.css (x8)
4:59:19 pm [vite] hmr update /src/pages/StudentDashboard.jsx, /src/index.css
5:00:00 pm [vite] hmr update /src/App.jsx, /src/index.css        
5:00:13 pm [vite] hmr update /src/App.jsx, /src/index.css (x2)   
5:00:16 pm [vite] hmr update /src/App.jsx, /src/index.css (x3)   
5:09:52 pm [vite] hmr update /src/pages/Login.jsx, /src/index.css
5:11:51 pm [vite] hmr update /src/pages/Login.jsx, /src/index.css (x2)
5:15:46 pm [vite] hmr update /src/pages/Login.jsx, /src/index.css (x3)
5:24:45 pm [vite] hmr update /src/pages/AdminDashboard.jsx, /src/index.css
5:24:45 pm [vite] hmr update /src/pages/AdminDashboard.jsx, /src/index.css (x2)
5:28:07 pm [vite] hmr update /src/pages/AdminDashboard.jsx, /src/index.css (x3)
5:29:30 pm [vite] hmr update /src/pages/Login.jsx, /src/index.css
5:29:32 pm [vite] hmr update /src/pages/Login.jsx, /src/index.css (x2)
5:31:28 pm [vite] hmr update /src/pages/Login.jsx, /src/index.css (x3)
5:31:30 pm [vite] hmr update /src/pages/Login.jsx, /src/index.css (x4)
5:32:34 pm [vite] hmr update /src/pages/StaffDashboard.jsx, /src/index.css
5:34:41 pm [vite] hmr update /src/pages/StudentDashboard.jsx, /src/index.css
5:35:52 pm [vite] hmr update /src/pages/StudentDashboard.jsx, /src/index.css (x2)
5:37:25 pm [vite] hmr update /src/pages/StudentDashboard.jsx, /src/index.css (x3)
5:39:16 pm [vite] hmr update /src/pages/StudentDashboard.jsx, /src/index.css (x4)
5:39:33 pm [vite] hmr update /src/pages/StudentDashboard.jsx, /src/index.css (x5)
5:39:35 pm [vite] hmr update /src/pages/StudentDashboard.jsx, /src/index.css (x6)
5:39:37 pm [vite] hmr update /src/pages/StudentDashboard.jsx, /src/index.css (x7)
5:39:46 pm [vite] hmr update /src/pages/StudentDashboard.jsx, /src/index.css (x8)
5:39:52 pm [vite] hmr update /src/pages/StudentDashboard.jsx, /src/index.css (x9)
5:39:53 pm [vite] hmr update /src/pages/StudentDashboard.jsx, /src/index.css (x10)
5:40:00 pm [vite] hmr update /src/pages/StudentDashboard.jsx, /src/index.css (x11)
5:40:03 pm [vite] hmr update /src/pages/StudentDashboard.jsx, /src/index.css (x12)
5:40:05 pm [vite] hmr update /src/pages/StudentDashboard.jsx, /src/index.css (x13)
5:40:09 pm [vite] hmr update /src/pages/StudentDashboard.jsx, /src/index.css (x14)
5:40:11 pm [vite] hmr update /src/pages/StudentDashboard.jsx, /src/index.css (x15)
5:40:12 pm [vite] hmr update /src/pages/StudentDashboard.jsx, /src/index.css (x16)
5:42:16 pm [vite] hmr update /src/pages/Register.jsx, /src/index.css
5:42:16 pm [vite] ✨ new dependencies optimized: react-toastify
5:42:16 pm [vite] ✨ optimized dependencies changed. reloading
5:44:01 pm [vite] hmr update /src/pages/Register.jsx, /src/index.css
6:09:16 pm [vite] hmr update /src/pages/Login.jsx, /src/index.css
6:09:16 pm [vite] hmr update /src/pages/Login.jsx, /src/index.css (x2)
7:44:07 pm [vite] hmr update /src/pages/AdminDashboard.jsx, /src/index.css
7:44:26 pm [vite] hmr update /src/App.jsx, /src/index.css
7:44:46 pm [vite] hmr update /src/App.jsx, /src/index.css (x2)
7:45:07 pm [vite] hmr update /src/pages/AdminDashboard.jsx, /src/index.css
7:45:13 pm [vite] hmr update /src/pages/StaffDashboard.jsx, /src/index.css
7:45:13 pm [vite] Internal server error: D:\pro_x\frontend\src\pages\StaffDashboard.jsx: Adjacent JSX elements must be wrapped in an enclosing tag. Did you want a JSX fragment <>...</>? (2:0)

  1 | <Route path="/add-student" element={<AddStudent />} />
> 2 | <Route path="/show-students" element={<ShowStudents />} />
    | ^
  3 | <Route path="/requests" element={<Requests />} />
  4 | <Route path="/history" element={<History />} />
  Plugin: vite:react-babel
  File: D:/pro_x/frontend/src/pages/StaffDashboard.jsx:2:0
  1  |  <Route path="/add-student" element={<AddStudent />} />
  2  |  <Route path="/show-students" element={<ShowStudents />} />
     |   ^
  3  |  <Route path="/requests" element={<Requests />} />
  4  |  <Route path="/history" element={<History />} />
      at constructor (D:\pro_x\frontend\node_modules\@babel\parser\lib\index.js:360:19)
      at JSXParserMixin.raise (D:\pro_x\frontend\node_modules\@babel\parser\lib\index.js:3338:19)
      at JSXParserMixin.jsxParseElementAt (D:\pro_x\frontend\node_modules\@babel\parser\lib\index.js:6928:18)
      at JSXParserMixin.jsxParseElement (D:\pro_x\frontend\node_modules\@babel\parser\lib\index.js:6935:17)
      at JSXParserMixin.parseExprAtom (D:\pro_x\frontend\node_modules\@babel\parser\lib\index.js:6945:19)
      at JSXParserMixin.parseExprSubscripts (D:\pro_x\frontend\node_modules\@babel\parser\lib\index.js:10785:23)
      at JSXParserMixin.parseUpdate (D:\pro_x\frontend\node_modules\@babel\parser\lib\index.js:10770:21)
      at JSXParserMixin.parseMaybeUnary (D:\pro_x\frontend\node_modules\@babel\parser\lib\index.js:10750:23)
      at JSXParserMixin.parseMaybeUnaryOrPrivate (D:\pro_x\frontend\node_modules\@babel\parser\lib\index.js:10603:61)
      at JSXParserMixin.parseExprOps (D:\pro_x\frontend\node_modules\@babel\parser\lib\index.js:10608:23)
      at JSXParserMixin.parseMaybeConditional (D:\pro_x\frontend\node_modules\@babel\parser\lib\index.js:10585:23)
      at JSXParserMixin.parseMaybeAssign (D:\pro_x\frontend\node_modules\@babel\parser\lib\index.js:10538:21)
      at JSXParserMixin.parseExpressionBase (D:\pro_x\frontend\node_modules\@babel\parser\lib\index.js:10491:23)
      at D:\pro_x\frontend\node_modules\@babel\parser\lib\index.js:10487:39
      at JSXParserMixin.allowInAnd (D:\pro_x\frontend\node_modules\@babel\parser\lib\index.js:12121:16)
      at JSXParserMixin.parseExpression (D:\pro_x\frontend\node_modules\@babel\parser\lib\index.js:10487:17)
      at JSXParserMixin.parseStatementContent (D:\pro_x\frontend\node_modules\@babel\parser\lib\index.js:12559:23)
      at JSXParserMixin.parseStatementLike (D:\pro_x\frontend\node_modules\@babel\parser\lib\index.js:12432:17)
      at JSXParserMixin.parseModuleItem (D:\pro_x\frontend\node_modules\@babel\parser\lib\index.js:12409:17)
      at JSXParserMixin.parseBlockOrModuleBlockBody (D:\pro_x\frontend\node_modules\@babel\parser\lib\index.js:12980:36)
      at JSXParserMixin.parseBlockBody (D:\pro_x\frontend\node_modules\@babel\parser\lib\index.js:12973:10)
      at JSXParserMixin.parseProgram (D:\pro_x\frontend\node_modules\@babel\parser\lib\index.js:12306:10)
      at JSXParserMixin.parseTopLevel (D:\pro_x\frontend\node_modules\@babel\parser\lib\index.js:12296:25)
      at JSXParserMixin.parse (D:\pro_x\frontend\node_modules\@babel\parser\lib\index.js:14152:10)
      at parse (D:\pro_x\frontend\node_modules\@babel\parser\lib\index.js:14186:38)
      at parser (D:\pro_x\frontend\node_modules\@babel\core\lib\parser\index.js:41:34)
      at parser.next (<anonymous>)
      at normalizeFile (D:\pro_x\frontend\node_modules\@babel\core\lib\transformation\normalize-file.js:64:37)
      at normalizeFile.next (<anonymous>)
      at run (D:\pro_x\frontend\node_modules\@babel\core\lib\transformation\index.js:22:50)
      at run.next (<anonymous>)
      at transform (D:\pro_x\frontend\node_modules\@babel\core\lib\transform.js:22:33)
      at transform.next (<anonymous>)
      at step (D:\pro_x\frontend\node_modules\gensync\index.js:261:32)
      at D:\pro_x\frontend\node_modules\gensync\index.js:273:13
      at async.call.result.err.err (D:\pro_x\frontend\node_modules\gensync\index.js:223:11)
      at D:\pro_x\frontend\node_modules\gensync\index.js:189:28
      at D:\pro_x\frontend\node_modules\@babel\core\lib\gensync-utils\async.js:67:7
      at D:\pro_x\frontend\node_modules\gensync\index.js:113:33
      at step (D:\pro_x\frontend\node_modules\gensync\index.js:287:14)
      at D:\pro_x\frontend\node_modules\gensync\index.js:273:13
      at async.call.result.err.err (D:\pro_x\frontend\node_modules\gensync\index.js:223:11)
7:45:14 pm [vite] hmr update /src/pages/StaffDashboard.jsx, /src/index.css
7:45:14 pm [vite] Internal server error: D:\pro_x\frontend\src\pages\StaffDashboard.jsx: Adjacent JSX elements must be wrapped in an enclosing tag. Did you want a JSX fragment <>...</>? (2:8)

  1 |  <Route path="/add-student" element={<AddStudent />} />
> 2 |         <Route path="/show-students" element={<ShowStudents />} />
    |         ^
  3 |         <Route path="/requests" element={<Requests />} />
  4 |         <Route path="/history" element={<History />} />
  Plugin: vite:react-babel
  File: D:/pro_x/frontend/src/pages/StaffDashboard.jsx:2:8
  1  |   <Route path="/add-student" element={<AddStudent />} />
  2  |          <Route path="/show-students" element={<ShowStudents />} />
     |           ^
  3  |          <Route path="/requests" element={<Requests />} />
  4  |          <Route path="/history" element={<History />} />
      at constructor (D:\pro_x\frontend\node_modules\@babel\parser\lib\index.js:360:19)
      at JSXParserMixin.raise (D:\pro_x\frontend\node_modules\@babel\parser\lib\index.js:3338:19)
      at JSXParserMixin.jsxParseElementAt (D:\pro_x\frontend\node_modules\@babel\parser\lib\index.js:6928:18)
      at JSXParserMixin.jsxParseElement (D:\pro_x\frontend\node_modules\@babel\parser\lib\index.js:6935:17)
      at JSXParserMixin.parseExprAtom (D:\pro_x\frontend\node_modules\@babel\parser\lib\index.js:6945:19)
      at JSXParserMixin.parseExprSubscripts (D:\pro_x\frontend\node_modules\@babel\parser\lib\index.js:10785:23)
      at JSXParserMixin.parseUpdate (D:\pro_x\frontend\node_modules\@babel\parser\lib\index.js:10770:21)
      at JSXParserMixin.parseMaybeUnary (D:\pro_x\frontend\node_modules\@babel\parser\lib\index.js:10750:23)
      at JSXParserMixin.parseMaybeUnaryOrPrivate (D:\pro_x\frontend\node_modules\@babel\parser\lib\index.js:10603:61)
      at JSXParserMixin.parseExprOps (D:\pro_x\frontend\node_modules\@babel\parser\lib\index.js:10608:23)
      at JSXParserMixin.parseMaybeConditional (D:\pro_x\frontend\node_modules\@babel\parser\lib\index.js:10585:23)
      at JSXParserMixin.parseMaybeAssign (D:\pro_x\frontend\node_modules\@babel\parser\lib\index.js:10538:21)
      at JSXParserMixin.parseExpressionBase (D:\pro_x\frontend\node_modules\@babel\parser\lib\index.js:10491:23)
      at D:\pro_x\frontend\node_modules\@babel\parser\lib\index.js:10487:39
      at JSXParserMixin.allowInAnd (D:\pro_x\frontend\node_modules\@babel\parser\lib\index.js:12121:16)
      at JSXParserMixin.parseExpression (D:\pro_x\frontend\node_modules\@babel\parser\lib\index.js:10487:17)
      at JSXParserMixin.parseStatementContent (D:\pro_x\frontend\node_modules\@babel\parser\lib\index.js:12559:23)
      at JSXParserMixin.parseStatementLike (D:\pro_x\frontend\node_modules\@babel\parser\lib\index.js:12432:17)
      at JSXParserMixin.parseModuleItem (D:\pro_x\frontend\node_modules\@babel\parser\lib\index.js:12409:17)
      at JSXParserMixin.parseBlockOrModuleBlockBody (D:\pro_x\frontend\node_modules\@babel\parser\lib\index.js:12980:36)
      at JSXParserMixin.parseBlockBody (D:\pro_x\frontend\node_modules\@babel\parser\lib\index.js:12973:10)
      at JSXParserMixin.parseProgram (D:\pro_x\frontend\node_modules\@babel\parser\lib\index.js:12306:10)
      at JSXParserMixin.parseTopLevel (D:\pro_x\frontend\node_modules\@babel\parser\lib\index.js:12296:25)
      at JSXParserMixin.parse (D:\pro_x\frontend\node_modules\@babel\parser\lib\index.js:14152:10)
      at parse (D:\pro_x\frontend\node_modules\@babel\parser\lib\index.js:14186:38)
      at parser (D:\pro_x\frontend\node_modules\@babel\core\lib\parser\index.js:41:34)
      at parser.next (<anonymous>)
      at normalizeFile (D:\pro_x\frontend\node_modules\@babel\core\lib\transformation\normalize-file.js:64:37)
      at normalizeFile.next (<anonymous>)
      at run (D:\pro_x\frontend\node_modules\@babel\core\lib\transformation\index.js:22:50)
      at run.next (<anonymous>)
      at transform (D:\pro_x\frontend\node_modules\@babel\core\lib\transform.js:22:33)
      at transform.next (<anonymous>)
      at step (D:\pro_x\frontend\node_modules\gensync\index.js:261:32)
      at D:\pro_x\frontend\node_modules\gensync\index.js:273:13
      at async.call.result.err.err (D:\pro_x\frontend\node_modules\gensync\index.js:223:11)
      at D:\pro_x\frontend\node_modules\gensync\index.js:189:28
      at D:\pro_x\frontend\node_modules\@babel\core\lib\gensync-utils\async.js:67:7
      at D:\pro_x\frontend\node_modules\gensync\index.js:113:33
      at step (D:\pro_x\frontend\node_modules\gensync\index.js:287:14)
      at D:\pro_x\frontend\node_modules\gensync\index.js:273:13
      at async.call.result.err.err (D:\pro_x\frontend\node_modules\gensync\index.js:223:11)
7:45:15 pm [vite] hmr update /src/pages/StaffDashboard.jsx, /src/index.css
7:46:06 pm [vite] hmr update /src/pages/StaffDashboard.jsx, /src/index.css (x2)
7:46:34 pm [vite] hmr update /src/App.jsx, /src/index.css
7:46:40 pm [vite] hmr update /src/App.jsx, /src/index.css (x2)
7:47:19 pm [vite] hmr update /src/App.jsx, /src/index.css (x3)
7:47:27 pm [vite] hmr update /src/App.jsx, /src/index.css (x4)
7:48:10 pm [vite] hmr update /src/App.jsx, /src/index.css (x5)
7:48:19 pm [vite] hmr update /src/App.jsx, /src/index.css (x6)
7:48:21 pm [vite] hmr update /src/App.jsx, /src/index.css (x7)
7:48:25 pm [vite] hmr update /src/App.jsx, /src/index.css (x8)
7:48:30 pm [vite] hmr update /src/App.jsx, /src/index.css (x9)
7:48:30 pm [vite] Internal server error: Failed to resolve import "./pages/Addtudent" from "src\App.jsx". Does the file exist?
  Plugin: vite:import-analysis
  File: D:/pro_x/frontend/src/App.jsx:9:23
  22 |  import StaffDashboard from "./pages/StaffDashboard";
  23 |  import StudentDashboard from "./pages/StudentDashboard";
  24 |  import AddStudent from "./pages/Addtudent";
     |                          ^
  25 |  import ShowStudents from "./pages/ShowStudents";
  26 |  import Requests from "./pages/Requests";
      at formatError (file:///D:/pro_x/frontend/node_modules/vite/dist/node/chunks/dep-df561101.js:43993:46)
      at TransformContext.error (file:///D:/pro_x/frontend/node_modules/vite/dist/node/chunks/dep-df561101.js:43989:19)
      at normalizeUrl (file:///D:/pro_x/frontend/node_modules/vite/dist/node/chunks/dep-df561101.js:41801:33)
      at process.processTicksAndRejections (node:internal/process/task_queues:105:5)
      at async file:///D:/pro_x/frontend/node_modules/vite/dist/node/chunks/dep-df561101.js:41945:47
      at async Promise.all (index 10)
      at async TransformContext.transform (file:///D:/pro_x/frontend/node_modules/vite/dist/node/chunks/dep-df561101.js:41870:13)
      at async Object.transform (file:///D:/pro_x/frontend/node_modules/vite/dist/node/chunks/dep-df561101.js:44283:30)
      at async loadAndTransform (file:///D:/pro_x/frontend/node_modules/vite/dist/node/chunks/dep-df561101.js:54950:29)
      at async viteTransformMiddleware (file:///D:/pro_x/frontend/node_modules/vite/dist/node/chunks/dep-df561101.js:64345:32)
7:48:35 pm [vite] page reload src/App.jsx
7:50:35 pm [vite] hmr update /src/App.jsx, /src/index.css        





Adminmodel

const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  department: { type: String, required: true },
  section: { type: String, required: true },
  role: { type: String, default: 'Admin' },  // Default role for admin
  password: { type: String, required: true },
});

module.exports = mongoose.model('Admin', adminSchema);

// // models/staffModel.js
// const mongoose = require('mongoose');

// const staffSchema = new mongoose.Schema({
//   name: String,
//   email: { type: String, unique: true },
//   department: String,
//   section: String,
//   role: { type: String, default: 'Staff' },
//   password: String,
// });

// module.exports = mongoose.model('Staff', staffSchema);


const mongoose = require('mongoose');

const staffSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  department: { type: String, required: true },
  section: { type: String, required: true },
  role: { type: String, default: 'Staff' },  // Default role for staff
  password: { type: String, required: true },
});

module.exports = mongoose.model('Staff', staffSchema);

const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  rollNumber: { type: String, required: true },
  name: { type: String, required: true },
  dob: { type: Date },
  phoneNumber: { type: String },
  email: { type: String, required: true, unique: true },
  staff: { type: mongoose.Schema.Types.ObjectId, ref: 'Staff' },
  department: { type: String, required: true },
  section: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, default: 'Student' }, // Add default role as Student
});

module.exports = mongoose.model('Student', studentSchema);

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  department: { type: String, required: true },
  section: { type: String, required: true },
  role: { type: String, required: true },
  password: { type: String, required: true },
});

module.exports = mongoose.model('User', userSchema);



*/
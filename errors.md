## [ Server ] Error: Event handlers cannot be passed to Client Component props.
  <button onClick={function onClick}>
                  ^^^^^^^^^^^^^^^^^^
If you need interactivity, consider converting part of this to a Client Component.

"use client"

## // const bcrypt = require('bcrypt');
import bcrypt from 'bcrypt';

## laready 10 instances oof prism cleint
import {prisma} from '../../client'
make client.ts and export client iff no ppclient is  made in dev mode only 

## Uncaught (in promise) Error: 
Invalid `__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].user.findUnique()` invocation in
/Users/akashmalik/Desktop/NextJS/.next/server/chunks/ssr/[root of the server]__cb3e59._.js:85:148

  82 ;
  83 ;
  84 async function /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ signin(username, password) {
→ 85     const res = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].user.findUnique(
Can't reach database server at `ep-steep-rain-a8tl1qqe-pooler.eastus2.azure.neon.tech:5432`

Please make sure your database server is running at `ep-steep-rain-a8tl1qqe-pooler.eastus2.azure.neon.tech:5432`.
    at async signin (signin.ts:5:18)
    at resolveErrorDev (react-server-dom-turbopack-client.browser.development.js:1785:63)
    at processFullStringRow (react-server-dom-turbopack-client.browser.development.js:2064:17)
    at processFullBinaryRow (react-server-dom-turbopack-client.browser.development.js:2052:7)
    at progress (react-server-dom-turbopack-client.browser.development.js:2255:17)


    --- 
    modify nectjs.config.ts
    /** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;

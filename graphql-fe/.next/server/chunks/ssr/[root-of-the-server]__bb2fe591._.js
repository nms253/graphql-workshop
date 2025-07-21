module.exports = {

"[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("react/jsx-dev-runtime", () => require("react/jsx-dev-runtime"));

module.exports = mod;
}}),
"[externals]/@apollo/client [external] (@apollo/client, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("@apollo/client", () => require("@apollo/client"));

module.exports = mod;
}}),
"[project]/src/lib/apollo-client.ts [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

// lib/apollo-client.ts
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$externals$5d2f40$apollo$2f$client__$5b$external$5d$__$2840$apollo$2f$client$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@apollo/client [external] (@apollo/client, cjs)");
;
const client = new __TURBOPACK__imported__module__$5b$externals$5d2f40$apollo$2f$client__$5b$external$5d$__$2840$apollo$2f$client$2c$__cjs$29$__["ApolloClient"]({
    uri: 'http://localhost:4000/graphql',
    cache: new __TURBOPACK__imported__module__$5b$externals$5d2f40$apollo$2f$client__$5b$external$5d$__$2840$apollo$2f$client$2c$__cjs$29$__["InMemoryCache"]()
});
const __TURBOPACK__default__export__ = client;
}),
"[project]/src/pages/create.tsx [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>CreateUserPage
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$apollo$2f$client__$5b$external$5d$__$2840$apollo$2f$client$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@apollo/client [external] (@apollo/client, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apollo$2d$client$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/apollo-client.ts [ssr] (ecmascript)");
;
;
;
;
const CREATE_USER = __TURBOPACK__imported__module__$5b$externals$5d2f40$apollo$2f$client__$5b$external$5d$__$2840$apollo$2f$client$2c$__cjs$29$__["gql"]`
  mutation CreateUser($input: CreateUserInput!) {
    createUser(input: $input) {
      id
      name
      email
    }
  }
`;
function CreateUserPage() {
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])('');
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])('');
    const [createUser, { data, loading, error }] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$apollo$2f$client__$5b$external$5d$__$2840$apollo$2f$client$2c$__cjs$29$__["useMutation"])(CREATE_USER, {
        client: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apollo$2d$client$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["default"]
    });
    const handleSubmit = async (e)=>{
        e.preventDefault();
        await createUser({
            variables: {
                input: {
                    name,
                    email
                }
            }
        });
        setName('');
        setEmail('');
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("form", {
        onSubmit: handleSubmit,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                children: "Create User"
            }, void 0, false, {
                fileName: "[project]/src/pages/create.tsx",
                lineNumber: 29,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                placeholder: "Name",
                value: name,
                onChange: (e)=>setName(e.target.value)
            }, void 0, false, {
                fileName: "[project]/src/pages/create.tsx",
                lineNumber: 30,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                placeholder: "Email",
                value: email,
                onChange: (e)=>setEmail(e.target.value)
            }, void 0, false, {
                fileName: "[project]/src/pages/create.tsx",
                lineNumber: 31,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                type: "submit",
                disabled: loading,
                children: "Create"
            }, void 0, false, {
                fileName: "[project]/src/pages/create.tsx",
                lineNumber: 32,
                columnNumber: 13
            }, this),
            data && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                children: [
                    "User created: ",
                    data.createUser.name
                ]
            }, void 0, true, {
                fileName: "[project]/src/pages/create.tsx",
                lineNumber: 33,
                columnNumber: 22
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                children: [
                    "Error: ",
                    error.message
                ]
            }, void 0, true, {
                fileName: "[project]/src/pages/create.tsx",
                lineNumber: 34,
                columnNumber: 23
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/pages/create.tsx",
        lineNumber: 28,
        columnNumber: 9
    }, this);
}
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__bb2fe591._.js.map
"use strict";(self.webpackChunkjavascript_parser_in_rust=self.webpackChunkjavascript_parser_in_rust||[]).push([[348],{980:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var s=r(1527),t=r(7660);const a={id:"parser",title:"Parser"},i=void 0,o={id:"parser",title:"Parser",description:"The parser we are going to construct is called a recursive descent parser,",source:"@site/docs/parser.md",sourceDirName:".",slug:"/parser",permalink:"/javascript-parser-in-rust/docs/parser",draft:!1,unlisted:!1,editUrl:"https://github.com/oxc-project/javascript-parser-in-rust/tree/main/docs/parser.md",tags:[],version:"current",frontMatter:{id:"parser",title:"Parser"},sidebar:"tutorialSidebar",previous:{title:"Abstract Syntax Tree",permalink:"/javascript-parser-in-rust/docs/ast"},next:{title:"Dealing with Errors",permalink:"/javascript-parser-in-rust/docs/errors"}},c={},l=[{value:"Helper functions",id:"helper-functions",level:2},{value:"Parse Functions",id:"parse-functions",level:2},{value:"Parsing Expressions",id:"parsing-expressions",level:2},{value:"Lists",id:"lists",level:2},{value:"Cover Grammar",id:"cover-grammar",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["The parser we are going to construct is called a ",(0,s.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Recursive_descent_parser",children:"recursive descent parser"}),",\nit is the manual process of going down the grammar and building up the AST."]}),"\n",(0,s.jsx)(n.p,{children:"The parser starts simple, it holds the source code, the lexer, and the current token consumed from the lexer."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:"pub struct Parser<'a> {\n    /// Source Code\n    source: &'a str,\n\n    lexer: Lexer<'a>,\n\n    /// Current Token consumed from the lexer\n    cur_token: Token,\n\n    /// The end range of the previous token\n    prev_token_end: usize,\n}\n\nimpl<'a> Parser<'a> {\n    pub fn new(source: &'a str) -> Self {\n        Self {\n            source,\n            lexer: Lexer::new(source),\n            cur_token: Token::default(),\n        }\n    }\n\n    pub fn parse(&mut self) -> Program<'a> {\n        Ok(Program {\n            node: Node {\n                start: 0,\n                end: self.source.len(),\n            }\n            body: vec![]\n        })\n    }\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"helper-functions",children:"Helper functions"}),"\n",(0,s.jsxs)(n.p,{children:["The current token ",(0,s.jsx)(n.code,{children:"cur_token: Token"})," holds the current token returned from the lexer.\nWe'll make the parser code cleaner by adding some helper functions for navigating and inspecting this token."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:"impl<'a> Parser<'a> {\n    fn start_node(&self) -> Node {\n        let token = self.cur_token();\n        Node::new(token.start, 0)\n    }\n\n    fn finish_node(&self, node: Node) -> Node {\n        Node::new(node.start, self.prev_token_end)\n    }\n\n    fn cur_token(&self) -> &Token {\n        &self.cur_token\n    }\n\n    fn cur_kind(&self) -> Kind {\n        self.cur_token.kind\n    }\n\n    /// Checks if the current index has token `Kind`\n    fn at(&self, kind: Kind) -> bool {\n        self.cur_kind() == kind\n    }\n\n    /// Advance if we are at `Kind`\n    fn bump(&mut self, kind: Kind) {\n        if self.at(kind) {\n            self.advance();\n        }\n    }\n\n    /// Advance any token\n    fn bump_any(&mut self) {\n        self.advance();\n    }\n\n    /// Advance and return true if we are at `Kind`, return false otherwise\n    fn eat(&mut self, kind: Kind) -> bool {\n        if self.at(kind) {\n            self.advance();\n            return true;\n        }\n        false\n    }\n\n    /// Move to the next token\n    fn advance(&mut self) {\n        let token = self.lexer.next_token();\n        self.prev_token_end = self.cur_token.end;\n        self.cur_token = token;\n    }\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"parse-functions",children:"Parse Functions"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"DebuggerStatement"})," is the most simple statement to parse, so let's try and parse it and return a valid program"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:"impl<'a> Parser<'a> {\n    pub fn parse(&mut self) -> Program {\n        let stmt = self.parse_debugger_statement();\n        let body = vec![stmt];\n        Program {\n            node: Node {\n                start: 0,\n                end: self.source.len(),\n            }\n            body,\n        }\n    }\n\n    fn parse_debugger_statement(&mut self) -> Statement {\n        let node = self.start_node();\n        // NOTE: the token returned from the lexer is `Kind::Debugger`, we'll fix this later.\n        self.bump_any();\n        Statement::DebuggerStatement {\n            node: self.finish_node(node),\n        }\n    }\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["All the other parse functions build on these primitive helper functions,\nfor example parsing the ",(0,s.jsx)(n.code,{children:"while"})," statement in swc:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",metastring:"reference",children:"https://github.com/swc-project/swc/blob/554b459e26b24202f66c3c58a110b3f26bbd13cd/crates/swc_ecma_parser/src/parser/stmt.rs#L952-L970\n"})}),"\n",(0,s.jsx)(n.h2,{id:"parsing-expressions",children:"Parsing Expressions"}),"\n",(0,s.jsxs)(n.p,{children:["The grammar for expressions is deeply nested and recursive,\nwhich may cause stack overflow on long expressions (for example in ",(0,s.jsx)(n.a,{href:"https://github.com/microsoft/TypeScript/blob/main/tests/cases/compiler/binderBinaryExpressionStressJs.ts",children:"this TypeScript test"}),"),"]}),"\n",(0,s.jsxs)(n.p,{children:['To avoid recursion, we can use a technique called "Pratt Parsing". A more in-depth tutorial can be found ',(0,s.jsx)(n.a,{href:"https://matklad.github.io/2020/04/13/simple-but-powerful-pratt-parsing.html",children:"here"}),", written by the author of Rust-Analyzer.\nAnd a Rust version here in ",(0,s.jsx)(n.a,{href:"https://github.com/rome/tools/blob/5a059c0413baf1d54436ac0c149a829f0dfd1f4d/crates/rome_js_parser/src/syntax/expr.rs#L442",children:"Rome"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"lists",children:"Lists"}),"\n",(0,s.jsxs)(n.p,{children:["There are lots of places where we need to parse a list separated by a punctuation, for example ",(0,s.jsx)(n.code,{children:"[a, b, c]"})," or ",(0,s.jsx)(n.code,{children:"{a, b, c}"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["The code for parsing lists are all similar, we can use the ",(0,s.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Template_method_pattern",children:"template method pattern"}),"\nto avoid duplication by using traits."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",metastring:"reference",children:"https://github.com/rome/tools/blob/85ddb4b2c622cac9638d5230dcefb6cf571677f8/crates/rome_js_parser/src/parser/parse_lists.rs#L131-L157\n"})}),"\n",(0,s.jsxs)(n.p,{children:["This pattern can also prevent us from infinite loops, specifically ",(0,s.jsx)(n.code,{children:"progress.assert_progressing(p);"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Implementation details can then be provided for different lists, for example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",metastring:"reference",children:"https://github.com/rome/tools/blob/85ddb4b2c622cac9638d5230dcefb6cf571677f8/crates/rome_js_parser/src/syntax/expr.rs#L1543-L1580\n"})}),"\n",(0,s.jsx)(n.h2,{id:"cover-grammar",children:"Cover Grammar"}),"\n",(0,s.jsxs)(n.p,{children:["Detailed in ",(0,s.jsx)(n.a,{href:"/blog/grammar#cover-grammar",children:"cover grammar"}),", there are times when we need to convert an ",(0,s.jsx)(n.code,{children:"Expression"})," to a ",(0,s.jsx)(n.code,{children:"BindingIdentifier"}),". Dynamic languages such as JavaScript can simply rewrite the node type:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",metastring:"reference",children:"https://github.com/acornjs/acorn/blob/11735729c4ebe590e406f952059813f250a4cbd1/acorn/src/lval.js#L11-L26\n"})}),"\n",(0,s.jsx)(n.p,{children:"But in Rust, we need to do a struct to struct transformation. A nice and clean way to do this is to use an trait."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:"pub trait CoverGrammar<'a, T>: Sized {\n    fn cover(value: T, p: &mut Parser<'a>) -> Result<Self>;\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The trait accepts ",(0,s.jsx)(n.code,{children:"T"})," as the input type, and ",(0,s.jsx)(n.code,{children:"Self"})," and the output type, so we can define the following:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:"impl<'a> CoverGrammar<'a, Expression<'a>> for BindingPattern<'a> {\n    fn cover(expr: Expression<'a>, p: &mut Parser<'a>) -> Result<Self> {\n        match expr {\n            Expression::Identifier(ident) => Self::cover(ident.unbox(), p),\n            Expression::ObjectExpression(expr) => Self::cover(expr.unbox(), p),\n            Expression::ArrayExpression(expr) => Self::cover(expr.unbox(), p),\n            _ => Err(()),\n        }\n    }\n}\n\nimpl<'a> CoverGrammar<'a, ObjectExpression<'a>> for BindingPattern<'a> {\n    fn cover(obj_expr: ObjectExpression<'a>, p: &mut Parser<'a>) -> Result<Self> {\n        ...\n        BindingIdentifier::ObjectPattern(ObjectPattern { .. })\n    }\n}\n\nimpl<'a> CoverGrammar<'a, ArrayExpression<'a>> for BindingPattern<'a> {\n    fn cover(expr: ArrayExpression<'a>, p: &mut Parser<'a>) -> Result<Self> {\n        ...\n        BindingIdentifier::ArrayPattern(ArrayPattern { .. })\n    }\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Then for anywhere we need to convert an ",(0,s.jsx)(n.code,{children:"Expression"})," to ",(0,s.jsx)(n.code,{children:"BindingPattern"}),",\ncall ",(0,s.jsx)(n.code,{children:"BindingPattern::cover(expression)"}),"."]})]})}function p(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},7660:(e,n,r)=>{r.d(n,{Z:()=>o,a:()=>i});var s=r(959);const t={},a=s.createContext(t);function i(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);
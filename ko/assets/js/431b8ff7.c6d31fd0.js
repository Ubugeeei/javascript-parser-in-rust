"use strict";(self.webpackChunkjavascript_parser_in_rust=self.webpackChunkjavascript_parser_in_rust||[]).push([[137],{7490:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var s=r(1527),t=r(7660);const a={id:"parser",title:"Parser"},i=void 0,c={id:"parser",title:"Parser",description:"\uc6b0\ub9ac\uac00 \ub9cc\ub4e4 \ud30c\uc11c\ub97c recursive descent parser\ub77c\uace0 \ud569\ub2c8\ub2e4,",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/parser.md",sourceDirName:".",slug:"/parser",permalink:"/javascript-parser-in-rust/ko/docs/parser",draft:!1,unlisted:!1,editUrl:"https://github.com/oxc-project/javascript-parser-in-rust/tree/main/docs/parser.md",tags:[],version:"current",frontMatter:{id:"parser",title:"Parser"},sidebar:"tutorialSidebar",previous:{title:"Abstract Syntax Tree",permalink:"/javascript-parser-in-rust/ko/docs/ast"},next:{title:"Dealing with Errors",permalink:"/javascript-parser-in-rust/ko/docs/errors"}},o={},l=[{value:"Helper functions",id:"helper-functions",level:2},{value:"Parse Functions",id:"parse-functions",level:2},{value:"Parsing Expressions",id:"parsing-expressions",level:2},{value:"Lists",id:"lists",level:2},{value:"Cover Grammar",id:"cover-grammar",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["\uc6b0\ub9ac\uac00 \ub9cc\ub4e4 \ud30c\uc11c\ub97c ",(0,s.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Recursive_descent_parser",children:"recursive descent parser"}),"\ub77c\uace0 \ud569\ub2c8\ub2e4,\n\uc774\ub294 \ubb38\ubc95\uc744 \ub530\ub77c AST\ub97c \uad6c\ucd95\ud558\ub294 \uc218\ub3d9 \ud504\ub85c\uc138\uc2a4\uc785\ub2c8\ub2e4."]}),"\n",(0,s.jsx)(n.p,{children:"\ud30c\uc11c\ub294 \ub2e8\uc21c\ud558\uac8c \uc2dc\uc791\ud558\uba70, \uc18c\uc2a4\ucf54\ub4dc, lexer, lexer\uc5d0\uc11c \uc18c\ube44\ub420 \ud1a0\ud070\uc744 \uac16\uc2b5\ub2c8\ub2e4."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:"pub struct Parser<'a> {\n    /// Source Code\n    source: &'a str,\n\n    lexer: Lexer<'a>,\n\n    /// Current Token consumed from the lexer\n    cur_token: Token,\n\n    /// The end range of the previous token\n    prev_token_end: usize,\n}\n\nimpl<'a> Parser<'a> {\n    pub fn new(source: &'a str) -> Self {\n        Self {\n            source,\n            lexer: Lexer::new(source),\n            cur_token: Token::default(),\n        }\n    }\n\n    pub fn parse(&mut self) -> Program<'a> {\n        Ok(Program {\n            node: Node {\n                start: 0,\n                end: self.source.len(),\n            }\n            body: vec![]\n        })\n    }\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"helper-functions",children:"Helper functions"}),"\n",(0,s.jsxs)(n.p,{children:["\ud604\uc7ac \ud1a0\ud070 ",(0,s.jsx)(n.code,{children:"cur_token: Token"}),"\uc740 lexer\uc5d0\uc11c \ubc18\ud658\ub41c \ud604\uc7ac \ud1a0\ud070\uc744 \ubcf4\uc720\ud569\ub2c8\ub2e4.\n\uc774 \ud1a0\ud070\uc744 \ud0d0\uc0c9\ud558\uace0 \uac80\uc0ac\ud558\uae30 \uc704\ud55c \uba87 \uac00\uc9c0 \ud5ec\ud37c \ud568\uc218\ub97c \ucd94\uac00\ud558\uc5ec \uad6c\ubb38 \ubd84\uc11d\uae30 \ucf54\ub4dc\ub97c \ub354 \uae54\ub054\ud558\uac8c \ub9cc\ub4e4\uaca0\uc2b5\ub2c8\ub2e4."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:"impl<'a> Parser<'a> {\n    fn start_node(&self) -> Node {\n        let token = self.cur_token();\n        Node::new(token.start, 0)\n    }\n\n    fn finish_node(&self, node: Node) -> Node {\n        Node::new(node.start, self.prev_token_end)\n    }\n\n    fn cur_token(&self) -> &Token {\n        &self.cur_token\n    }\n\n    fn cur_kind(&self) -> Kind {\n        self.cur_token.kind\n    }\n\n    /// Checks if the current index has token `Kind`\n    fn at(&self, kind: Kind) -> bool {\n        self.cur_kind() == kind\n    }\n\n    /// Advance if we are at `Kind`\n    fn bump(&mut self, kind: Kind) {\n        if self.at(kind) {\n            self.advance();\n        }\n    }\n\n    /// Advance any token\n    fn bump_any(&mut self) {\n        self.advance();\n    }\n\n    /// Advance and return true if we are at `Kind`, return false otherwise\n    fn eat(&mut self, kind: Kind) -> bool {\n        if self.at(kind) {\n            self.advance();\n            return true;\n        }\n        false\n    }\n\n    /// Move to the next token\n    fn advance(&mut self) {\n        let token = self.lexer.next_token();\n        self.prev_token_end = self.cur_token.end;\n        self.cur_token = token;\n    }\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"parse-functions",children:"Parse Functions"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"DebuggerStatement"}),"\ub294 \ud30c\uc2f1\ud558\uae30 \uc704\ud55c \uac00\uc7a5 \ub2e8\uc21c\ud55c statement\uc774\ubbc0\ub85c, \uc774\ub97c \ud30c\uc2f1\ud574\uc11c \uc720\ud6a8\ud55c \ud504\ub85c\uadf8\ub7a8\uc744 \ubc18\ud658\ud574\ubd05\uc2dc\ub2e4."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:"impl<'a> Parser<'a> {\n    pub fn parse(&mut self) -> Program {\n        let stmt = self.parse_debugger_statement();\n        let body = vec![stmt];\n        Program {\n            node: Node {\n                start: 0,\n                end: self.source.len(),\n            }\n            body,\n        }\n    }\n\n    fn parse_debugger_statement(&mut self) -> Statement {\n        let node = self.start_node();\n        // NOTE: the token returned from the lexer is `Kind::Debugger`, we'll fix this later.\n        self.bump_any();\n        Statement::DebuggerStatement {\n            node: self.finish_node(node),\n        }\n    }\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\ub2e4\ub978 \ubaa8\ub4e0 \ud30c\uc2f1 \ud568\uc218\ub294 \uc774\ub7ec\ud55c \uae30\ubcf8 \ud5ec\ud37c \ud568\uc218\ub97c \uae30\ubc18\uc73c\ub85c \ud569\ub2c8\ub2e4,\n\uc608\ub97c \ub4e4\uc5b4 swc\uc5d0\uc11c ",(0,s.jsx)(n.code,{children:"while"})," \ubb38\uc744 \ud30c\uc2f1\ud569\ub2c8\ub2e4:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",metastring:"reference",children:"https://github.com/swc-project/swc/blob/554b459e26b24202f66c3c58a110b3f26bbd13cd/crates/swc_ecma_parser/src/parser/stmt.rs#L952-L970\n"})}),"\n",(0,s.jsx)(n.h2,{id:"parsing-expressions",children:"Parsing Expressions"}),"\n",(0,s.jsxs)(n.p,{children:["\ud45c\ud604\uc2dd \ubb38\ubc95\uc740 \uae4a\uac8c \uc911\ucca9\ub418\uace0 \uc7ac\uadc0\uc801\uc785\ub2c8\ub2e4,\n\ub530\ub77c\uc11c \uae34 \ud45c\ud604\uc2dd\uc5d0\uc11c\ub294 \uc2a4\ud0dd \uc624\ubc84\ud50c\ub85c\uac00 \ubc1c\uc0dd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4(\uc608: ",(0,s.jsx)(n.a,{href:"https://github.com/microsoft/TypeScript/blob/main/tests/cases/compiler/binderBinaryExpressionStressJs.ts",children:"\ud0c0\uc785\uc2a4\ud06c\ub9bd\ud2b8 \ud14c\uc2a4\ud2b8"}),"),"]}),"\n",(0,s.jsxs)(n.p,{children:['\uc7ac\uadc0\ub97c \ud53c\ud558\uae30 \uc704\ud574 "Pratt Parsing"\uc774\ub77c\ub294 \uae30\uc220\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub354 \uc790\uc138\ud55c \ud29c\ud1a0\ub9ac\uc5bc\uc740 ',(0,s.jsx)(n.a,{href:"https://matklad.github.io/2020/04/13/simple-but-powerful-pratt-parsing.html",children:"\uc5ec\uae30"}),"\uc5d0\uc11c Rust-Analyzer \uc791\uc131\uc790\uac00 \uc791\uc131\ud55c \ud29c\ud1a0\ub9ac\uc5bc\uc744 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n\uadf8\ub9ac\uace0 \uc5ec\uae30 ",(0,s.jsx)(n.a,{href:"https://github.com/rome/tools/blob/5a059c0413baf1d54436ac0c149a829f0dfd1f4d/crates/rome_js_parser/src/syntax/expr.rs#L442",children:"Rome"}),"\uc758 Rust \ubc84\uc804\ub3c4 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,s.jsx)(n.h2,{id:"lists",children:"Lists"}),"\n",(0,s.jsxs)(n.p,{children:["\ubb38\uc7a5 \ubd80\ud638\ub85c \uad6c\ubd84\ub41c \ubaa9\ub85d\uc744 \ud30c\uc2f1\ud574\uc57c \ud558\ub294 \uacbd\uc6b0\uac00 \ub9ce\uc774 \uc788\uc2b5\ub2c8\ub2e4(\uc608: ",(0,s.jsx)(n.code,{children:"[a, b, c]"})," \ub610\ub294 ",(0,s.jsx)(n.code,{children:"{a, b, c}"}),")."]}),"\n",(0,s.jsxs)(n.p,{children:["\ubaa9\ub85d\uc744 \ud30c\uc2f1\ud558\ub294 \ucf54\ub4dc\ub294 \ubaa8\ub450 \ube44\uc2b7\ud558\ubbc0\ub85c ",(0,s.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Template_method_pattern",children:"template method pattern"}),"\uc744 \uc0ac\uc6a9\ud558\uc5ec \uc911\ubcf5\uc744 \ud53c\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",metastring:"reference",children:"https://github.com/rome/tools/blob/85ddb4b2c622cac9638d5230dcefb6cf571677f8/crates/rome_js_parser/src/parser/parse_lists.rs#L131-L157\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\uc774 \ud328\ud134\uc740 \ubb34\ud55c \ub8e8\ud504, \ud2b9\ud788 ",(0,s.jsx)(n.code,{children:"progress.assert_progressing(p);"}),"\ub97c \ubc29\uc9c0\ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,s.jsx)(n.p,{children:"\uadf8\ub7f0 \ub2e4\uc74c \ub2e4\ub978 \ubaa9\ub85d\uc5d0 \ub300\ud574 \uad6c\ud604 \uc138\ubd80 \uc815\ubcf4\ub97c \uc81c\uacf5\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",metastring:"reference",children:"https://github.com/rome/tools/blob/85ddb4b2c622cac9638d5230dcefb6cf571677f8/crates/rome_js_parser/src/syntax/expr.rs#L1543-L1580\n"})}),"\n",(0,s.jsx)(n.h2,{id:"cover-grammar",children:"Cover Grammar"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/blog/grammar#cover-grammar",children:"cover grammar"}),"\uc5d0 \uc790\uc138\ud788 \uc124\uba85\ub418\uc5b4 \uc788\uc9c0\ub9cc, ",(0,s.jsx)(n.code,{children:"Expression"}),"\uc744 `BindingIdentifier``\ub85c \ubcc0\ud658\ud574\uc57c \ud560 \ub54c\uac00 \uc788\uc2b5\ub2c8\ub2e4. JavaScript\uc640 \uac19\uc740 \ub3d9\uc801 \uc5b8\uc5b4\ub294 \ub178\ub4dc \ud0c0\uc785\uc744 \uac04\ub2e8\ud788 \ub2e4\uc2dc \uc791\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",metastring:"reference",children:"https://github.com/acornjs/acorn/blob/11735729c4ebe590e406f952059813f250a4cbd1/acorn/src/lval.js#L11-L26\n"})}),"\n",(0,s.jsx)(n.p,{children:"\ud558\uc9c0\ub9cc Rust\uc5d0\uc11c\ub294 \uad6c\uc870\uccb4\uc5d0\uc11c \uad6c\uc870\uccb4\ub85c \ubcc0\ud658\uc744 \uc218\ud589\ud574\uc57c \ud569\ub2c8\ub2e4. \uc774\ub97c \uc704\ud55c \uae54\ub054\ud558\uace0 \uc88b\uc740 \ubc29\ubc95\uc740 trait\uc744 \uc0ac\uc6a9\ud558\ub294 \uac83\uc785\ub2c8\ub2e4."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:"pub trait CoverGrammar<'a, T>: Sized {\n    fn cover(value: T, p: &mut Parser<'a>) -> Result<Self>;\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\uc774 \ud2b9\uc131\uc740 \uc785\ub825 \ud0c0\uc785\uc73c\ub85c ",(0,s.jsx)(n.code,{children:"T"}),"\uc640 \ucd9c\ub825 \ud0c0\uc785\uc73c\ub85c ",(0,s.jsx)(n.code,{children:"Self"}),"\ub97c \ud5c8\uc6a9\ud558\ubbc0\ub85c \ub2e4\uc74c\uacfc \uac19\uc774 \uc815\uc758\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:"impl<'a> CoverGrammar<'a, Expression<'a>> for BindingPattern<'a> {\n    fn cover(expr: Expression<'a>, p: &mut Parser<'a>) -> Result<Self> {\n        match expr {\n            Expression::Identifier(ident) => Self::cover(ident.unbox(), p),\n            Expression::ObjectExpression(expr) => Self::cover(expr.unbox(), p),\n            Expression::ArrayExpression(expr) => Self::cover(expr.unbox(), p),\n            _ => Err(()),\n        }\n    }\n}\n\nimpl<'a> CoverGrammar<'a, ObjectExpression<'a>> for BindingPattern<'a> {\n    fn cover(obj_expr: ObjectExpression<'a>, p: &mut Parser<'a>) -> Result<Self> {\n        ...\n        BindingIdentifier::ObjectPattern(ObjectPattern { .. })\n    }\n}\n\nimpl<'a> CoverGrammar<'a, ArrayExpression<'a>> for BindingPattern<'a> {\n    fn cover(expr: ArrayExpression<'a>, p: &mut Parser<'a>) -> Result<Self> {\n        ...\n        BindingIdentifier::ArrayPattern(ArrayPattern { .. })\n    }\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\uadf8\ub7f0 \ub2e4\uc74c \uc5b4\ub514\uc5d0\uc11c\ub098 ",(0,s.jsx)(n.code,{children:"Expression"}),"\uc744 ",(0,s.jsx)(n.code,{children:"BindingPattern"}),"\uc73c\ub85c \ubcc0\ud658\ud574\uc57c \ud569\ub2c8\ub2e4,\n",(0,s.jsx)(n.code,{children:"BindingPattern::cover(expression)"}),"\ub97c \ud638\ucd9c\ud574\uc11c\uc694."]})]})}function p(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},7660:(e,n,r)=>{r.d(n,{Z:()=>c,a:()=>i});var s=r(959);const t={},a=s.createContext(t);function i(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);
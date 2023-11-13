"use strict";(self.webpackChunkjavascript_parser_in_rust=self.webpackChunkjavascript_parser_in_rust||[]).push([[858],{1954:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>t,default:()=>h,frontMatter:()=>c,metadata:()=>d,toc:()=>a});var s=r(1527),i=r(7660);const c={id:"lexer",title:"Lexer"},t=void 0,d={id:"lexer",title:"Lexer",description:"\ud1a0\ud070",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/lexer.md",sourceDirName:".",slug:"/lexer",permalink:"/javascript-parser-in-rust/ko/docs/lexer",draft:!1,unlisted:!1,editUrl:"https://github.com/oxc-project/javascript-parser-in-rust/tree/main/docs/lexer.md",tags:[],version:"current",frontMatter:{id:"lexer",title:"Lexer"},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/javascript-parser-in-rust/ko/docs/overview"},next:{title:"Abstract Syntax Tree",permalink:"/javascript-parser-in-rust/ko/docs/ast"}},l={},a=[{value:"\ud1a0\ud070",id:"\ud1a0\ud070",level:2},{value:"peek",id:"peek",level:2},{value:"JavaScript",id:"javascript",level:2},{value:"Comments",id:"comments",level:3},{value:"Identifiers and Unicode",id:"identifiers-and-unicode",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Token Value",id:"token-value",level:3},{value:"Rust Optimizations",id:"rust-optimizations",level:2},{value:"Smaller Tokens",id:"smaller-tokens",level:3},{value:"String Interning",id:"string-interning",level:3}];function o(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"\ud1a0\ud070",children:"\ud1a0\ud070"}),"\n",(0,s.jsx)(n.p,{children:"\ud1a0\ud070\ub77c\uc774\uc800\ub098 \uc2a4\uce90\ub108\ub85c \uc54c\ub824\uc9c4 Lexer\ub294 \uc18c\uc2a4\ud14d\uc2a4\ud2b8\ub97c \ud1a0\ud070 \ubcc0\ud658\ud558\ub294 \uc5ed\ud560\uc744 \uac16\uace0 \uc788\uc2b5\ub2c8\ub2e4.\n\ud1a0\ud070\uc740 \ub098\uc911\uc5d0 \ud30c\uc11c\uc5d0 \uc774\uc6a9\ub418\ubbc0\ub85c, \uc6d0\ub798 \ud14d\uc2a4\ud2b8\uc5d0\uc11c \uacf5\ubc31\uc774\ub098 \uc8fc\uc11d\uc744 \uc2e0\uacbd\uc4f8 \ud544\uc694\uac00 \uc5c6\uc2b5\ub2c8\ub2e4."}),"\n",(0,s.jsxs)(n.p,{children:["\uba3c\uc800 \uac04\ub2e8\ud55c \uac83\ubd80\ud130 \uc2dc\uc791\ud574\ubcf4\uace0\uc790, ",(0,s.jsx)(n.code,{children:"+"})," \ud558\ub098 \ud1a0\ud070\uc744 \ubcc0\ud658\ud574\ubd05\uc2dc\ub2e4."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:"#[derive(Debug, Clone, Copy, PartialEq)]\npub struct Token {\n    /// Token Type\n    pub kind: Kind,\n\n    /// Start offset in source\n    pub start: usize,\n\n    /// End offset in source\n    pub end: usize,\n}\n\n#[derive(Debug, Clone, Copy, PartialEq)]\npub enum Kind {\n    Eof, // end of file\n    Plus,\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"+"})," \ud558\ub098\ub294 \uc774\ud558\uc640 \uac19\uc2b5\ub2c8\ub2e4."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"[\n    Token { kind: Kind::Plus, start: 0, end: 1 },\n    Token { kind: Kind::Eof,  start: 1, end: 1 }\n]\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\ubb38\uc790\uc5f4\uc744 \ubc18\ubcf5\ubb38 \ucc98\ub9ac\ud558\ub824\uba74 \uc778\ub371\uc2a4\ub97c \uae30\ub85d\ud558\uc5ec C \uc5b8\uc5b4\ub85c \ucf54\ub4dc\ub97c \uc791\uc131\ud560 \uc218\ub3c4 \uc788\uace0, ",(0,s.jsx)(n.a,{href:"https://doc.rust-lang.org/std/primitive.str.html",children:"string \ubb38\uc11c"}),"\ub97c \ubcf4\uba74 \uc54c \uc218 \uc788\ub4ef\uc774 ",(0,s.jsx)(n.a,{href:"https://doc.rust-lang.org/std/str/struct.Chars.html",children:(0,s.jsx)(n.code,{children:"Chars"})}),"\uc758 \uc774\ud130\ub808\uc774\ud130\ub85c \uc791\uc131\ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,s.jsxs)(n.admonition,{type:"info",children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Chars"})," \uc774\ud130\ub808\uc774\ud130\ub294 \uc778\ub371\uc2a4\ub97c \ud2b8\ub798\ud0b9\ud574\uc11c \ubc94\uc704\ub97c \ud655\uc778\ud558\ub294 \ucd94\uc0c1\uc801 \ubc29\ubc95\uc73c\ub85c \uc548\uc804\ud558\ub2e4 \ub290\ub084 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"chars.next()"}),"\ub97c \uc2e4\ud589\ud558\uba74 ",(0,s.jsx)(n.code,{children:"Option<char>"}),"\uac00 \ubc18\ud658\ub41c\ub2e4.\n\ub2e8, ",(0,s.jsx)(n.code,{children:"char"}),"\ub294 0\uc5d0\uc11c 255\uae4c\uc9c0\uc758 ASCII \uac12\uc774 \uc544\ub2c8\ub77c\ub294 \uc810\uc5d0 \uc720\uc758\ud574\uc57c \ud55c\ub2e4.\n\uc774\ub294 0\uc5d0\uc11c 0x10FFFF\uae4c\uc9c0\ub97c \ubc94\uc704\ub85c \ud558\ub294 utf8\uc758 \uc720\ub2c8\ucf54\ub4dc \ud3ec\uc778\ud2b8\uc785\ub2c8\ub2e4."]})]}),"\n",(0,s.jsx)(n.p,{children:"\uccab \ubc88\uc9f8 Lexer\uc758 \ucd94\uc0c1\ud654\ub97c \uc815\uc758\ud574 \ubd05\uc2dc\ub2e4."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:"use std::str::Chars;\n\nstruct Lexer<'a> {\n    /// Source Text\n    source: &'a str,\n\n    /// The remaining characters\n    chars: Chars<'a>\n}\n\nimpl<'a> Lexer<'a> {\n    pub fn new(source: &'a str) -> Self {\n        Self {\n            source,\n            chars: source.chars()\n        }\n    }\n}\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["\uc5ec\uae30\uc11c ",(0,s.jsx)(n.code,{children:"'a"}),"\uc758 lifetime\uc740 \uc774\ud130\ub808\uc774\ud130\uac00 \uc5b4\ub518\uac00\ub97c \ucc38\uc870\ud558\uace0 \uc788\uc74c\uc744 \ub098\ud0c0\ub0b4\uba70, \uc774 \uacbd\uc6b0 ",(0,s.jsx)(n.code,{children:"&'a str"}),"\uc744 \ucc38\uc870\ud569\ub2e4."]})}),"\n",(0,s.jsxs)(n.p,{children:["\uc18c\uc2a4 \ud14d\uc2a4\ud2b8\ub97c \ud1a0\ud070\uc73c\ub85c \ubcc0\ud658\ud558\ub824\uba74 ",(0,s.jsx)(n.code,{children:"chars.next()"}),"\ub97c \uacc4\uc18d \ud638\ucd9c\ud558\uc5ec \ubc18\ud658\ub418\ub294 ",(0,s.jsx)(n.code,{children:"char"}),"\uc640 \uc77c\uce58\uc2dc\ud0a4\uba74 \ub41c\ub2e4. \ub9c8\uc9c0\ub9c9 \ud1a0\ud070\uc740 \ubc18\ub4dc\uc2dc ",(0,s.jsx)(n.code,{children:"Kind::Eof"}),"\uac00 \ub41c\ub2e4."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:"impl<'a> Lexer<'a> {\n    fn read_next_kind(&mut self) -> Kind {\n        while let Some(c) = self.chars.next() {\n            match c {\n              '+' => return Kind::Plus,\n              _ => {}\n            }\n        }\n        Kind::Eof\n    }\n\n    fn read_next_token(&mut self) -> Token {\n        let start = self.offset();\n        let kind = self.read_next_kind();\n        let end = self.offset();\n        Token { kind, start, end }\n    }\n\n    /// Get the length offset from the source text, in UTF-8 bytes\n    fn offset(&self) -> usize {\n        self.source.len() - self.chars.as_str().len()\n    }\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"fn offset"})," \ub0b4\ubd80\uc5d0\uc11c \ud638\ucd9c\ub418\ub294 ",(0,s.jsx)(n.code,{children:".len()"}),"\uacfc ",(0,s.jsx)(n.code,{children:".as_str().len()"})," \uba54\uc11c\ub4dc\ub294 O(n)\ucc98\ub7fc \ub290\uaef4\uc9c0\ubbc0\ub85c \uc880 \ub354 \uc790\uc138\ud788 \uc0b4\ud3b4\ubd05\uc2dc\ub2e4."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://doc.rust-lang.org/src/core/str/iter.rs.html#112",children:(0,s.jsx)(n.code,{children:".as_str()"})}),"\uc740 \ubb38\uc790\uc5f4 \uc2ac\ub77c\uc774\uc2a4\uc5d0 \ub300\ud55c \ud3ec\uc778\ud130\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",metastring:"reference",children:"https://github.com/rust-lang/rust/blob/b998821e4c51c44a9ebee395c91323c374236bbb/library/core/src/str/iter.rs#L112-L115\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://doc.rust-lang.org/std/slice/index.html",children:"slice"}),"\ub294 \ud3ec\uc778\ud130\uc640 \uae38\uc774\ub85c \ud45c\ud604\ub418\ub294 \uba54\ubaa8\ub9ac \ube14\ub85d \ub0b4\uc758 \ubdf0\uc785\ub2c8\ub2e4.\n",(0,s.jsx)(n.code,{children:".len()"})," \uba54\uc11c\ub4dc\ub294 \uc2ac\ub77c\uc774\uc2a4 \ub0b4\ubd80\uc5d0 \ubcf4\uad00\ub41c \uba54\ud0c0\ub370\uc774\ud130\ub97c \ubc18\ud658\ud55c\ub2e4."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",metastring:"reference",children:"https://github.com/rust-lang/rust/blob/b998821e4c51c44a9ebee395c91323c374236bbb/library/core/src/str/mod.rs#L157-L159\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",metastring:"reference",children:"https://github.com/rust-lang/rust/blob/b998821e4c51c44a9ebee395c91323c374236bbb/library/core/src/str/mod.rs#L323-L325\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",metastring:"reference",children:"https://github.com/rust-lang/rust/blob/b998821e4c51c44a9ebee395c91323c374236bbb/library/core/src/slice/mod.rs#L129-L138\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\uc704\uc758 \ubaa8\ub4e0 \ucf54\ub4dc\uac00 \ub2e8\uc77c \ub370\uc774\ud130 \uc561\uc138\uc2a4\ub85c \ucef4\ud30c\uc77c\ub418\ubbc0\ub85c ",(0,s.jsx)(n.code,{children:".as_str().len()"}),"\uc740 \uc2e4\uc81c\ub85c O(1)\uc774\ub2e4."]}),"\n",(0,s.jsx)(n.h2,{id:"peek",children:"peek"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"++"}),"\ub098 ",(0,s.jsx)(n.code,{children:"+="}),"\uc640 \uac19\uc740 \uc5ec\ub7ec \ubb38\uc790 \uc5f0\uc0b0\uc790\ub97c \ud1a0\ud070\ud654\ud558\ub824\uba74 \ud5ec\ud37c \ud568\uc218 ",(0,s.jsx)(n.code,{children:"peek"}),"\uac00 \ud544\uc694\ud569\ub2c8\ub2e4."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:"fn peek(&self) -> Option<char> {\n    self.chars.clone().next()\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\uc6d0\ubcf8 ",(0,s.jsx)(n.code,{children:"chars"}),"\uc758 \uc774\ud130\ub808\uc774\ud130\ub97c \uc9c4\ud589\ud558\uace0 \uc2f6\uc9c0 \uc54a\uc73c\ubbc0\ub85c, \uc774\ud130\ub808\uc774\ud130\ub97c \ubcf5\uc81c\ud558\uc5ec \uadf8 \uc778\ub371\uc2a4\ub97c \uc9c4\ud589\ud569\ub2c8\ub2e4."]}),"\n",(0,s.jsxs)(n.admonition,{type:"info",children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"clone"}),"\uc740 ",(0,s.jsx)(n.a,{href:"https://doc.rust-lang.org/src/core/slice/iter.rs.html#148-152",children:"\uc18c\uc2a4 \ucf54\ub4dc"}),"\ub97c \uc790\uc138\ud788 \uc0b4\ud3b4\ubcf4\uba74, \ud2b8\ub798\ud0b9\uacfc \ubc94\uc704 \uc778\ub371\uc2a4\ub97c \ubcf5\uc0ac\ud558\ub294 \uac83\ub9cc\uc73c\ub85c \ube44\uc6a9\uc774 \ub0ae\uc544\uc9d1\ub2c8\ub2e4."]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",metastring:"reference",children:"https://github.com/rust-lang/rust/blob/b998821e4c51c44a9ebee395c91323c374236bbb/library/core/src/slice/iter.rs#L148-L152\n"})})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"peek"}),"\uc640 ",(0,s.jsx)(n.code,{children:"chars.next()"}),"\uc758 \ucc28\uc774\uc810\uc740 ",(0,s.jsx)(n.code,{children:"peek"}),"\ub294 \ud56d\uc0c1 \uac19\uc740 \ub2e4\uc74c ",(0,s.jsx)(n.code,{children:"char"}),"\ub97c \ubc18\ud658\ud558\ub294 \ubc18\uba74, ",(0,s.jsx)(n.code,{children:"chars.next()"}),"\ub294 \uc9c4\ud589\ub418\ub2e4\uac00 \ub2e4\ub978 ",(0,s.jsx)(n.code,{children:"char"}),"\ub97c \ubc18\ud658\ud55c\ub2e4\ub294 \uc810\uc785\ub2c8\ub2e4."]}),"\n",(0,s.jsxs)(n.p,{children:["\uc774\ub97c \ubcf4\uc5ec\uc8fc\uae30 \uc704\ud574 ",(0,s.jsx)(n.code,{children:"abc"}),"\ub77c\ub294 \ubb38\uc790\uc5f4\ub85c \uc0dd\uac01\ud574 \ubd05\uc2dc\ub2e4."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\ubc18\ubcf5\uc801\uc73c\ub85c ",(0,s.jsx)(n.code,{children:"peek()"}),"\ub97c \ud638\ucd9c\ud558\uba74 ",(0,s.jsx)(n.code,{children:"Some(a)"}),", ",(0,s.jsx)(n.code,{children:"Some(a)"}),", ",(0,s.jsx)(n.code,{children:"Some(a)"}),", ... \uc640 \uac19\uc774 \ubc18\ud658\ub429\ub2c8\ub2e4."]}),"\n",(0,s.jsxs)(n.li,{children:["\ubc18\ubcf5\uc801\uc73c\ub85c ",(0,s.jsx)(n.code,{children:"chars.next()"}),"\ub97c \ud638\ucd9c\ud558\uba74 ",(0,s.jsx)(n.code,{children:"Some('a')"}),", ",(0,s.jsx)(n.code,{children:"Some('b')"}),", ",(0,s.jsx)(n.code,{children:"Some('c')"}),", ",(0,s.jsx)(n.code,{children:"None"}),"\uacfc \uac19\uc774 \ubc18\ud658\ub429\ub2c8\ub2e4."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"peek"}),"\ub97c \ud1b5\ud574 \ud1a0\ud070\ud654\ud558\ub294 ",(0,s.jsx)(n.code,{children:"++"}),"\uc640 ",(0,s.jsx)(n.code,{children:"+="}),"\ub294 \ub2e8\uc21c\ud55c \uc911\ucca9\ub41c if \ubb38\uc785\ub2c8\ub2e4."]}),"\n",(0,s.jsxs)(n.p,{children:["\ub2e4\uc74c\uc740 ",(0,s.jsx)(n.a,{href:"https://github.com/mozilla-spidermonkey/jsparagus",children:"jsparagus"}),"\uc758 \uc2e4\uc81c \uad6c\ud604\uc785\ub2c8\ub2e4."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",metastring:"reference",children:"https://github.com/mozilla-spidermonkey/jsparagus/blob/master/crates/parser/src/lexer.rs#L1769-L1791\n"})}),"\n",(0,s.jsx)(n.p,{children:"\uc704\uc758 \ub85c\uc9c1\uc740 \ubaa8\ub4e0 \uc5f0\uc0b0\uc790\uc5d0 \uc801\uc6a9\ub418\ubbc0\ub85c, \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 \ud30c\uc2f1\uc5d0 \ub300\ud55c \uc9c0\uc2dd\uc744 \ub113\ud600\ubd05\uc2dc\ub2e4."}),"\n",(0,s.jsx)(n.h2,{id:"javascript",children:"JavaScript"}),"\n",(0,s.jsxs)(n.p,{children:["Rust\ub85c \uc791\uc131\ub41c lexer\ub294 \uc9c0\ub8e8\ud558\uace0, \uae34 \uc5f0\uc1c4 if \ubb38\uacfc \uac01 ",(0,s.jsx)(n.code,{children:"char"}),"\ub97c \uccb4\ud06c\ud558\uc5ec \uac01\uac01\uc758 \ud1a0\ud070\uc744 \ubc18\ud658\ud558\ub294 C \ucf54\ub4dc\ub97c \uc791\uc131\ud558\ub294 \uac83\ucc98\ub7fc \ubcf4\uc785\ub2c8\ub2e4."]}),"\n",(0,s.jsx)(n.p,{children:"\uc9c4\uc9dc \uc7ac\ubbf8\ub294 \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 \ud30c\uc2f1\uc744 \uc2dc\uc791\ud558\ub294 \uacf3\ubd80\ud130 \uc2dc\uc791\ub429\ub2c8\ub2e4."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://tc39.es/ecma262/",children:"ECMAScript \uc0ac\uc591"})," \uc5f4\uc5b4\ubcf4\uace0 JavaScript \ub2e4\uc2dc \ubc30\uc6cc\ubd05\uc2dc\ub2e4."]}),"\n",(0,s.jsx)(n.admonition,{type:"caution",children:(0,s.jsxs)(n.p,{children:["\uc800\ub294 \ucc98\uc74c \uc0ac\uc591\uc11c\ub97c \uc5f4\uc5b4\ubcf4\uace0 \uc804\ubb38\uc6a9\uc5b4\ub85c \uac00\ub4dd \ucc2c \uc678\uad6d\uc5b4\ub97c \uc77d\ub294 \uac83 \uac19\uc740 \ub290\ub08c\uc5d0 \uc5c9\uc5c9 \uc6b8\uc5c8\ub358 \uae30\uc5b5\uc774 \uc544\uc9c1\ub3c4 \uc0dd\uc0dd\ud569\ub2c8\ub2e4.\n\uadf8\ub798\uc11c \uc774\ud574\uac00 \uc548 \ub418\ub294 \ubd80\ubd84\uc774 \uc788\uc73c\uba74 \uc81c ",(0,s.jsx)(n.a,{href:"/blog/ecma-spec",children:"\uc0ac\uc591 \uc77d\ub294 \ubc95 \uac00\uc774\ub4dc"}),"\ub97c \ucc38\uace0\ud558\uc138\uc694."]})}),"\n",(0,s.jsx)(n.h3,{id:"comments",children:"Comments"}),"\n",(0,s.jsx)(n.p,{children:"\uc8fc\uc11d\uc740 \uc2dc\ub9e8\ud2f1\ud55c \uc758\ubbf8\ub97c \uac16\uc9c0 \uc54a\uace0 \ub7f0\ud0c0\uc784\uc5d0\ub294 \uc124\uba85\uc774 \uc0dd\ub7b5\ub418\uc9c0\ub9cc, linter\ub098 bundler\ub97c \uc791\uc131\ud558\ub294 \uacbd\uc6b0 \uc774\ub97c \uace0\ub824\ud574\uc57c \ud55c\ub2e4."}),"\n",(0,s.jsx)(n.h3,{id:"identifiers-and-unicode",children:"Identifiers and Unicode"}),"\n",(0,s.jsxs)(n.p,{children:["\uc6b0\ub9ac\ub294 \ub300\ubd80\ubd84 ASCII\ub85c \ucf54\ub4dc\ub97c \uc791\uc131\ud558\uc9c0\ub9cc, ",(0,s.jsx)(n.a,{href:"https://tc39.es/ecma262/#sec-ecmascript-language-source-code",children:"Chapter 11 ECMAScript Language: Source Text"}),"\uc5d0\uc11c\ub294 \uc18c\uc2a4 \ud14d\uc2a4\ud2b8\uac00 \uc720\ub2c8\ucf54\ub4dc\uc5ec\uc57c \ud55c\ub2e4\uace0 \ub098\uc640 \uc788\uc2b5\ub2c8\ub2e4.\n\ub610\ud55c, ",(0,s.jsx)(n.a,{href:"https://tc39.es/ecma262/#sec-names-and-keywords",children:"Chapter 12.6 Names and Keywords"}),"\uc5d0\uc11c\ub294 \uc2dd\ubcc4\uc790\uac00 Unicode Standard Annex #31\uc758 Default Identifier Syntax\uc5d0 \ub530\ub77c \ud574\uc11d\ub41c\ub2e4\uace0 \uba85\uc2dc\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4.\n\uc790\uc138\ud55c \ub0b4\uc6a9\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-markup",children:"IdentifierStartChar ::\n    UnicodeIDStart\n\nIdentifierPartChar ::\n    UnicodeIDContinue\n\nUnicodeIDStart ::\n    any Unicode code point with the Unicode property \u201cID_Start\u201d\n\nUnicodeIDContinue ::\n    any Unicode code point with the Unicode property \u201cID_Continue\u201d\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\uc989, ",(0,s.jsx)(n.code,{children:"var \u0ca0_\u0ca0"}),"\ub77c\uace0 \uc4f8 \uc218\ub294 \uc788\uc9c0\ub9cc ",(0,s.jsx)(n.code,{children:"var \ud83e\udd80"}),"\ub77c\uace0 \uc4f8 \uc218\ub294 \uc5c6\uc73c\uba70, ",(0,s.jsx)(n.code,{children:"\u0ca0"}),'\ub294 \uc720\ub2c8\ucf54\ub4dc\uc758 "ID_Start" \uc18d\uc131\uc744 \uac00\uc9c0\uace0 \uc788\ub294 \ubc18\uba74 ',(0,s.jsx)(n.code,{children:"\ud83e\udd80"}),"\ub294 \uadf8\ub807\uc9c0 \uc54a\ub2e4\ub294 \uac83\uc785\ub2c8\ub2e4."]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["\uc800\ub294 \uc774 \ubaa9\uc801\uc744 \uc704\ud574 ",(0,s.jsx)(n.a,{href:"https://crates.io/crates/unicode-id-start",children:"unicode-id-start"}),"\ub77c\ub294 crate\ub97c \uacf5\uac1c\ud588\uc2b5\ub2c8\ub2e4.\n",(0,s.jsx)(n.code,{children:"unicode_id_start::is_id_start(char)"}),"\uc640 ",(0,s.jsx)(n.code,{children:"unicode_id_start::is_id_continue(char)"}),"\ub97c \ud638\ucd9c\ud558\uc5ec \uc720\ub2c8\ucf54\ub4dc \uac80\uc0ac\ub97c \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]})}),"\n",(0,s.jsx)(n.h3,{id:"keywords",children:"Keywords"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"if"}),"\ub098 ",(0,s.jsx)(n.code,{children:"while"}),", ",(0,s.jsx)(n.code,{children:"for"}),"\uc640 \uac19\uc740 ",(0,s.jsx)(n.a,{href:"https://tc39.es/ecma262/#sec-keywords-and-reserved-words",children:"Keywords"}),"\ub294 \ud1a0\ud070\ud654\ud558\uc5ec \uc804\uccb4\uc801\uc73c\ub85c \ud574\uc11d\ud574\uc57c \ud569\ub2c8\ub2e4.\n\ud30c\uc11c\uc5d0\uc11c \ubb38\uc790\uc5f4 \ube44\uad50\ub97c \ud544\uc694\ub85c \ud558\uc9c0 \uc54a\ub3c4\ub85d \ud1a0\ud070\uc758 \uc885\ub958 \uc5f4\uac70\ud615\uc5d0 \ucd94\uac00\ud574\uc57c \ud558\uace0\uc694."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:"pub enum Kind {\n    Identifier,\n    If,\n    While,\n    For\n}\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"caution",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"undefined"}),"\ub294 \ud0a4\uc6cc\ub4dc\uac00 \uc544\ub2c8\ubbc0\ub85c \uc5ec\uae30\uc5d0 \ucd94\uac00\ud560 \ud544\uc694\uac00 \uc5c6\uc2b5\ub2c8\ub2e4."]})}),"\n",(0,s.jsx)(n.p,{children:"\ud0a4\uc6cc\ub4dc\uc758 \ud1a0\ud070\ud654\ub294 \uc704\uc5d0\uc11c \uc124\uba85\ud55c \uc2dd\ubcc4\uc790\uc640 \uc77c\uce58\ud558\ub294 \uac83\ub9cc\uc73c\ub85c \uac00\ub2a5\ud569\ub2c8\ub2e4."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:'fn match_keyword(&self, ident: &str) -> Kind {\n    // all keywords are 1 <= length <= 10\n    if ident.len() == 1 || ident.len() > 10 {\n        return Kind::Identifier;\n    }\n    match ident {\n        "if" => Kind::If,\n        "while" => Kind::While,\n        "for" => Kind::For,\n        _ => Kind::Identifier\n    }\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"token-value",children:"Token Value"}),"\n",(0,s.jsx)(n.p,{children:"\uc608\ub97c \ub4e4\uc5b4, linter\uc5d0\uc11c \uc2dd\ubcc4\uc790\uc5d0 \ub300\ud55c \ud14c\uc2a4\ud2b8\uc640 \uac19\uc774 \ucef4\ud30c\uc77c\ub7ec\uc758 \ud6c4\ubc18 \ub2e8\uacc4\uc5d0\uc11c \uc2dd\ubcc4\uc790, \uc22b\uc790, \ubb38\uc790\uc5f4\uc744 \ube44\uad50\ud574\uc57c \ud558\ub294 \uacbd\uc6b0\uac00 \uc885\uc885 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,s.jsx)(n.p,{children:"\uc774 \uac12\ub4e4\uc740 \ud604\uc7ac \uc77c\ubc18 \uc18c\uc2a4 \ud14d\uc2a4\ud2b8\uc774\ubbc0\ub85c, \ub2e4\ub8e8\uae30 \uc27d\ub3c4\ub85d Rust \ud0c0\uc785\uc73c\ub85c \ubcc0\ud658\ud574 \ubd05\uc2dc\ub2e4."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:"pub enum Kind {\n    Eof, // end of file\n    Plus,\n    // highlight-start\n    Identifier,\n    Number,\n    String,\n    // highlight-end\n}\n\n#[derive(Debug, Clone, Copy, PartialEq)]\npub struct Token {\n    /// Token Type\n    pub kind: Kind,\n\n    /// Start offset in source\n    pub start: usize,\n\n    /// End offset in source\n    pub end: usize,\n\n    // highlight-next-line\n    pub value: TokenValue,\n}\n\n#[derive(Debug, Clone, PartialEq)]\npub enum TokenValue {\n    None,\n    Number(f64),\n    String(String),\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\uc2dd\ubcc4\uc790 ",(0,s.jsx)(n.code,{children:"foo"}),"\ub098 \ubb38\uc790\uc5f4 ",(0,s.jsx)(n.code,{children:'"bar"'}),"\uac00 \ud1a0\ud070\ud654\ub418\uba74 \ub2e4\uc74c\uacfc \uac19\uc774 \ubc18\ud658\ub429\ub2c8\ub2e4."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-markup",children:'Token { kind: Kind::Identifier, start: 0, end: 2, value: TokenValue::String("foo") }\nToken { kind: Kind::String, start: 0, end: 4, value: TokenValue::String("bar") }\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\uc774\ub97c Rust\uc758 \ubb38\uc790\uc5f4\ub85c \ubcc0\ud658\ud558\ub824\uba74 ",(0,s.jsx)(n.code,{children:"let s = self.source[token.start..token.end].to_string()"}),"\uc744 \ud638\ucd9c\ud558\uc5ec ",(0,s.jsx)(n.code,{children:"token.value = TokenValue::String(s)"}),"\ub85c \uc800\uc7a5\ud569\ub2c8\ub2e4."]}),"\n",(0,s.jsxs)(n.p,{children:["\uc22b\uc790 ",(0,s.jsx)(n.code,{children:"1.23"}),"\uc744 \ud1a0\ud070\ud654\ud558\uba74 ",(0,s.jsx)(n.code,{children:"Token { start: 0, end: 3 }"}),"\uc774 \ud1a0\ud070\uc73c\ub85c \ubc18\ud658\ub429\ub2c8\ub2e4.\n\uc774\ub97c Rust\uc758 ",(0,s.jsx)(n.code,{children:"f64"}),"\ub85c \ubcc0\ud658\ud558\ub824\uba74 ",(0,s.jsx)(n.code,{children:"self.source[token.start..token.end].parse::<f64>()"}),"\ub97c \ud638\ucd9c\ud558\uc5ec \ubb38\uc790\uc5f4\uc758 [",(0,s.jsx)(n.code,{children:"parse"}),"](",(0,s.jsx)(n.a,{href:"https://doc.rust-lang.org/std/",children:"https://doc.rust-lang.org/std/"})," primitive.str.html#method.parse) \uba54\uc11c\ub4dc\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc73c\uba70, ",(0,s.jsx)(n.code,{children:"token.value"}),"\uc5d0 \uac12\uc744 \uc800\uc7a5\ud569\ub2c8\ub2e4.\n2\uc9c4\uc218, 8\uc9c4\uc218, \uc815\uc218\uc5d0 \ub300\ud574\uc11c\ub294 ",(0,s.jsx)(n.a,{href:"https://github.com/mozilla-spidermonkey/jsparagus/blob/master/crates/parser/src/numeric_value.rs",children:"jsparagus"}),"\uc5d0\uc11c \ubd84\uc11d\ud558\ub294 \uae30\ubc95\uc758 \uc608\ub97c \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,s.jsx)(n.h2,{id:"rust-optimizations",children:"Rust Optimizations"}),"\n",(0,s.jsx)(n.h3,{id:"smaller-tokens",children:"Smaller Tokens"}),"\n",(0,s.jsxs)(n.p,{children:["\ud1a0\ud070\uc758 \uac12\uc744 ",(0,s.jsx)(n.code,{children:"Kind"})," \uc5f4\uac70\ud615 \uc548\uc5d0 \ub123\uc5b4 \ubcf4\ub2e4 \uac04\ub2e8\ud558\uace0 \uc548\uc804\ud55c \ucf54\ub4dc\ub97c \uc9c0\ud5a5\ud558\uace0 \uc2f6\uc744 \uac83 \uc785\ub2c8\ub2e4."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:"pub enum Kind {\n    Number(f64),\n    String(String),\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"\ud558\uc9c0\ub9cc Rust\uc758 \uc5f4\uac70\ud615\uc758 \ubc14\uc774\ud2b8 \ud06c\uae30\ub294 \ubaa8\ub4e0 \ubcc0\ud615\uc744 \ud569\ud55c \uac83\uc73c\ub85c \uc54c\ub824\uc838 \uc788\uc2b5\ub2c8\ub2e4.\n\uc774 \uc5f4\uac70\ud615\uc740 \uc6d0\ub798 1\ubc14\uc774\ud2b8\uc778 \uc5f4\uac70\ud615\uc5d0 \ube44\ud574 \ub9ce\uc740 \ubc14\uc774\ud2b8\uac00 \ub4e4\uc5b4\uac00\uba70,\n\ud30c\uc11c\uc5d0\uc11c \uc774 \uc885\ub958\uc758 \uc5f4\uac70\ud615\uc744 \ub9ce\uc774 \uc0ac\uc6a9\ud558\ub294 \uacbd\uc6b0, \uba40\ud2f0\ubc14\uc774\ud2b8 \uc5f4\uac70\ud615\ubcf4\ub2e4 1\ubc14\uc774\ud2b8 \uc5f4\uac70\ud615\uc744 \ucc98\ub9ac\ud558\ub294 \uac83\uc774 \ubd84\uba85\ud788 \ub354 \ube60\ub985\ub2c8\ub2e4."}),"\n",(0,s.jsx)(n.h3,{id:"string-interning",children:"String Interning"}),"\n",(0,s.jsxs)(n.p,{children:["\uc8fc\ub85c \uc774\ud558\uc758 \uc774\uc720\ub85c \ucef4\ud30c\uc77c\ub7ec\uc5d0\uc11c\uc758 ",(0,s.jsx)(n.code,{children:"String"})," \uc131\ub2a5\uc740 \uc88b\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"String"}),"\uc740 \ud799\uc5d0 \ud560\ub2f9\ub41c \uac1d\uccb4"]}),"\n",(0,s.jsx)(n.li,{children:"\ubb38\uc790\uc5f4 \ube44\uad50\ub294 O(n)\uc758 \uc5f0\uc0b0"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/String_interning",children:"String Interning"}),"\uc740 \uac01 \ubb38\uc790\uc5f4\uc758 \uac12\uc758 \ubcf5\uc0ac\ubcf8\uc744 \uace0\uc720\ud55c \uc2dd\ubcc4\uc790\ub97c \uac00\uc9c0\uace0 \ud558\ub098\ub9cc \uce90\uc2dc\uc5d0 \ubcf4\uc720\ud568\uc73c\ub85c\uc368 \uc774\ub7ec\ud55c \ubb38\uc81c\ub97c \ud574\uacb0\ud569\ub2c8\ub2e4.\n\uace0\uc720\ud55c \uc2dd\ubcc4\uc790 \ub610\ub294 \ubb38\uc790\uc5f4\ub9c8\ub2e4 \ud55c \ubc88\ub9cc \ud799\uc744 \ud560\ub2f9\ud558\uac8c \ub418\uba70, \ubb38\uc790\uc5f4 \ube44\uad50\ub294 O(1)\uc774 \ub418\uace0\uc694."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://crates.io/search?q=string%20interning",children:"crates.io"}),"\uc5d0\ub294 \uc7a5\ub2e8\uc810\uc774 \ub2e4\ub978 String Interning \ub77c\uc774\ube0c\ub7ec\ub9ac\uac00 \ub9ce\uc774 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,s.jsxs)(n.p,{children:["\uc2dc\uc791\ud558\uae30\uc5d0 \ucda9\ubd84\ud55c \uac83\uc73c\ub85c\ub294 ",(0,s.jsx)(n.a,{href:"https://crates.io/crates/string_cache",children:(0,s.jsx)(n.code,{children:"string-cache"})}),"\uac00 \uc788\ub294\ub370, \uc774\ub294 ",(0,s.jsx)(n.code,{children:"Atom"})," \ud0c0\uc785\uacfc \ucef4\ud30c\uc77c \uc2dc ",(0,s.jsx)(n.code,{children:'atom!("string")'}),"\uc758 \uc778\ud130\ud398\uc774\uc2a4\ub97c \uac00\uc9d1\ub2c8\ub2e4."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"string-cache"}),"\uc5d0\uc11c ",(0,s.jsx)(n.code,{children:"TokenValue"}),"\ub294 \uc774\ub807\uac8c \ub429\ub2c8\ub2e4,"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:"#[derive(Debug, Clone, PartialEq)]\npub enum TokenValue {\n    None,\n    Number(f64),\n    // highlight-next-line\n    String(Atom),\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\ubb38\uc790\uc5f4 \ube44\uad50\ub294 ",(0,s.jsx)(n.code,{children:'matches!(value, TokenValue::String(atom!("string")))'}),"\ub85c \ud569\ub2c8\ub2e4."]})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},7660:(e,n,r)=>{r.d(n,{Z:()=>d,a:()=>t});var s=r(959);const i={},c=s.createContext(i);function t(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);
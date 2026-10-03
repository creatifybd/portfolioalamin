import "./BlogPostPage.css";
import { a as e } from "./rolldown-runtime.js";
import { a as t, f as n, l as r, t as i } from "./vendor.js";
import { C as a, S as o, T as s, w as c, x as l } from "./firebase.js";
import { w as u } from "./main.js";
import { t as d } from "./useReveal.js";
import { t as ee } from "./SEO.js";
var te = e(n(), 1);
(a(), s());
var f;
function p() {
  return {
    async: !1,
    breaks: !1,
    extensions: null,
    gfm: !0,
    hooks: null,
    pedantic: !1,
    renderer: null,
    silent: !1,
    tokenizer: null,
    walkTokens: null,
  };
}
var m = p();
function ne(e) {
  m = e;
}
var h = { exec: () => null };
function g(e) {
  let t = [];
  return (n) => {
    let r = Math.max(0, Math.min(3, n - 1)),
      i = t[r];
    return (i || ((i = e(r)), (t[r] = i)), i);
  };
}
function _(e, t = ``) {
  let n = typeof e == `string` ? e : e.source,
    r = {
      replace: (e, t) => {
        let i = typeof t == `string` ? t : t.source;
        return ((i = i.replace(y.caret, `$1`)), (n = n.replace(e, i)), r);
      },
      getRegex: () => new RegExp(n, t),
    };
  return r;
}
var v = ((e = ``) => {
    try {
      return !!RegExp(`(?<=1)(?<!1)` + e);
    } catch (e) {
      return !1;
    }
  })(),
  y = {
    codeRemoveIndent: /^(?: {1,4}| {0,3}\t)/gm,
    outputLinkReplace: /\\([\[\]])/g,
    indentCodeCompensation: /^(\s+)(?:```)/,
    beginningSpace: /^\s+/,
    endingHash: /#$/,
    startingSpaceChar: /^ /,
    endingSpaceChar: / $/,
    nonSpaceChar: /[^ ]/,
    newLineCharGlobal: /\n/g,
    tabCharGlobal: /\t/g,
    multipleSpaceGlobal: /\s+/g,
    blankLine: /^[ \t]*$/,
    doubleBlankLine: /\n[ \t]*\n[ \t]*$/,
    blockquoteStart: /^ {0,3}>/,
    blockquoteSetextReplace: /\n {0,3}((?:=+|-+) *)(?=\n|$)/g,
    blockquoteSetextReplace2: /^ {0,3}>[ \t]?/gm,
    listReplaceNesting: /^ {1,4}(?=( {4})*[^ ])/g,
    listIsTask: /^\[[ xX]\] +\S/,
    listReplaceTask: /^\[[ xX]\] +/,
    listTaskCheckbox: /\[[ xX]\]/,
    anyLine: /\n.*\n/,
    hrefBrackets: /^<(.*)>$/,
    tableDelimiter: /[:|]/,
    tableAlignChars: /^\||\| *$/g,
    tableRowBlankLine: /\n[ \t]*$/,
    tableAlignRight: /^ *-+: *$/,
    tableAlignCenter: /^ *:-+: *$/,
    tableAlignLeft: /^ *:-+ *$/,
    startATag: /^<a /i,
    endATag: /^<\/a>/i,
    startPreScriptTag: /^<(pre|code|kbd|script)(\s|>)/i,
    endPreScriptTag: /^<\/(pre|code|kbd|script)(\s|>)/i,
    startAngleBracket: /^</,
    endAngleBracket: />$/,
    pedanticHrefTitle: /^([^'"]*[^\s])\s+(['"])(.*)\2/,
    unicodeAlphaNumeric: RegExp(`[\\p{L}\\p{N}]`, `u`),
    escapeTest: /[&<>"']/,
    escapeReplace: /[&<>"']/g,
    escapeTestNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,
    escapeReplaceNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,
    caret: /(^|[^\[])\^/g,
    percentDecode: /%25/g,
    findPipe: /\|/g,
    splitPipe: / \|/,
    slashPipe: /\\\|/g,
    carriageReturn: /\r\n|\r/g,
    spaceLine: /^ +$/gm,
    notSpaceStart: /^\S*/,
    endingNewline: /\n$/,
    listItemRegex: (e) => RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`),
    nextBulletRegex: g((e) =>
      RegExp(`^ {0,${e}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),
    ),
    hrRegex: g((e) =>
      RegExp(`^ {0,${e}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),
    ),
    fencesBeginRegex: g((e) => RegExp(`^ {0,${e}}(?:\`\`\`|~~~)`)),
    headingBeginRegex: g((e) => RegExp(`^ {0,${e}}#`)),
    htmlBeginRegex: g((e) => RegExp(`^ {0,${e}}<(?:[a-z].*>|!--)`, `i`)),
    blockquoteBeginRegex: g((e) => RegExp(`^ {0,${e}}>`)),
  },
  re = /^(?:[ \t]*(?:\n|$))+/,
  ie = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,
  ae =
    /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,
  oe = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,
  se = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
  ce = / {0,3}(?:[*+-]|\d{1,9}[.)])/,
  le =
    /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
  ue = _(le)
    .replace(/bull/g, ce)
    .replace(/blockCode/g, /(?: {4}| {0,3}\t)/)
    .replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/)
    .replace(/blockquote/g, / {0,3}>/)
    .replace(/heading/g, / {0,3}#{1,6}/)
    .replace(/html/g, / {0,3}<[^\n>]+>\n/)
    .replace(/\|table/g, ``)
    .getRegex(),
  de = _(le)
    .replace(/bull/g, ce)
    .replace(/blockCode/g, /(?: {4}| {0,3}\t)/)
    .replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/)
    .replace(/blockquote/g, / {0,3}>/)
    .replace(/heading/g, / {0,3}#{1,6}/)
    .replace(/html/g, / {0,3}<[^\n>]+>\n/)
    .replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/)
    .getRegex(),
  fe =
    /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,
  pe = /^[^\n]+/,
  me = /(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,
  he = _(
    /^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/,
  )
    .replace(`label`, me)
    .replace(
      `title`,
      /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/,
    )
    .getRegex(),
  b = _(/^(bull)([ \t][^\n]*?)?(?:\n|$)/)
    .replace(/bull/g, ce)
    .getRegex(),
  ge = `address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul`,
  _e = /<!--(?:-?>|[\s\S]*?(?:-->|$))/,
  ve = _(
    `^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))`,
    `i`,
  )
    .replace(`comment`, _e)
    .replace(`tag`, ge)
    .replace(
      `attribute`,
      / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/,
    )
    .getRegex(),
  ye = _(fe)
    .replace(`hr`, oe)
    .replace(`heading`, ` {0,3}#{1,6}(?:\\s|$)`)
    .replace(`|lheading`, ``)
    .replace(`|table`, ``)
    .replace(`blockquote`, ` {0,3}>`)
    .replace(`fences`, " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n")
    .replace(`list`, ` {0,3}(?:[*+-]|1[.)])[ \\t]+[^ \\t\\n]`)
    .replace(
      `html`,
      `</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)`,
    )
    .replace(`tag`, ge)
    .getRegex(),
  be = {
    blockquote: _(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/)
      .replace(`paragraph`, ye)
      .getRegex(),
    code: ie,
    def: he,
    fences: ae,
    heading: se,
    hr: oe,
    html: ve,
    lheading: ue,
    list: b,
    newline: re,
    paragraph: ye,
    table: h,
    text: pe,
  },
  xe = _(
    `^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)`,
  )
    .replace(`hr`, oe)
    .replace(`heading`, ` {0,3}#{1,6}(?:\\s|$)`)
    .replace(`blockquote`, ` {0,3}>`)
    .replace(`code`, `(?: {4}| {0,3}	)[^\\n]`)
    .replace(`fences`, " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n")
    .replace(`list`, ` {0,3}(?:[*+-]|1[.)])[ \\t]`)
    .replace(
      `html`,
      `</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)`,
    )
    .replace(`tag`, ge)
    .getRegex(),
  Se = o(
    o({}, be),
    {},
    {
      lheading: de,
      table: xe,
      paragraph: _(fe)
        .replace(`hr`, oe)
        .replace(`heading`, ` {0,3}#{1,6}(?:\\s|$)`)
        .replace(`|lheading`, ``)
        .replace(`table`, xe)
        .replace(`blockquote`, ` {0,3}>`)
        .replace(`fences`, " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n")
        .replace(`list`, ` {0,3}(?:[*+-]|1[.)])[ \\t]+[^ \\t\\n]`)
        .replace(
          `html`,
          `</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)`,
        )
        .replace(`tag`, ge)
        .getRegex(),
    },
  ),
  Ce = o(
    o({}, be),
    {},
    {
      html: _(
        `^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`,
      )
        .replace(`comment`, _e)
        .replace(
          /tag/g,
          `(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b`,
        )
        .getRegex(),
      def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
      heading: /^(#{1,6})(.*)(?:\n+|$)/,
      fences: h,
      lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
      paragraph: _(fe)
        .replace(`hr`, oe)
        .replace(
          `heading`,
          ` *#{1,6} *[^
]`,
        )
        .replace(`lheading`, ue)
        .replace(`|table`, ``)
        .replace(`blockquote`, ` {0,3}>`)
        .replace(`|fences`, ``)
        .replace(`|list`, ``)
        .replace(`|html`, ``)
        .replace(`|tag`, ``)
        .getRegex(),
    },
  ),
  we = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
  x = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
  Te = /^( {2,}|\\)\n(?!\s*$)/,
  S =
    /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
  Ee = RegExp(`[\\p{P}\\p{S}]`, `u`),
  C = RegExp(`[\\s\\p{P}\\p{S}]`, `u`),
  w = RegExp(`[^\\s\\p{P}\\p{S}]`, `u`),
  De = _(/^((?![*_])punctSpace)/, `u`)
    .replace(/punctSpace/g, C)
    .getRegex(),
  T = RegExp(`(?!~)[\\p{P}\\p{S}]`, `u`),
  Oe = RegExp(`(?!~)[\\s\\p{P}\\p{S}]`, `u`),
  ke = RegExp(`(?:[^\\s\\p{P}\\p{S}]|~)`, `u`),
  Ae = _(/link|precode-code|html/, `g`)
    .replace(
      `link`,
      RegExp(
        "\\[(?:[^\\[\\]`]|(?<a>`+)[^`]+\\k<a>(?!`))*?\\]\\((?:\\\\[\\s\\S]|[^\\\\\\(\\)]|\\((?:\\\\[\\s\\S]|[^\\\\\\(\\)])*\\))*\\)",
        ``,
      ),
    )
    .replace(`precode-`, v ? "(?<!`)()" : "(^^|[^`])")
    .replace(`code`, RegExp("(?<b>`+)[^`]+\\k<b>(?!`)", ``))
    .replace(`html`, /<(?! )[^<>]*?>/)
    .getRegex(),
  je = /^(?:\*+(?:((?!\*)punct)|([^\s*]))?)|^_+(?:((?!_)punct)|([^\s_]))?/,
  E = _(je, `u`).replace(/punct/g, Ee).getRegex(),
  Me = _(je, `u`).replace(/punct/g, T).getRegex(),
  D = `^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)`,
  Ne = _(D, `gu`)
    .replace(/notPunctSpace/g, w)
    .replace(/punctSpace/g, C)
    .replace(/punct/g, Ee)
    .getRegex(),
  Pe = _(D, `gu`)
    .replace(/notPunctSpace/g, ke)
    .replace(/punctSpace/g, Oe)
    .replace(/punct/g, T)
    .getRegex(),
  Fe = _(
    `^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)`,
    `gu`,
  )
    .replace(/notPunctSpace/g, w)
    .replace(/punctSpace/g, C)
    .replace(/punct/g, Ee)
    .getRegex(),
  Ie = _(/^~~?(?:((?!~)punct)|[^\s~])/, `u`)
    .replace(/punct/g, Ee)
    .getRegex(),
  Le = _(
    `^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)`,
    `gu`,
  )
    .replace(/notPunctSpace/g, w)
    .replace(/punctSpace/g, C)
    .replace(/punct/g, Ee)
    .getRegex(),
  Re = _(/\\(punct)/, `gu`)
    .replace(/punct/g, Ee)
    .getRegex(),
  ze = _(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/)
    .replace(`scheme`, /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/)
    .replace(
      `email`,
      /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,
    )
    .getRegex(),
  Be = _(_e).replace(`(?:-->|$)`, `-->`).getRegex(),
  Ve = _(
    `^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>`,
  )
    .replace(`comment`, Be)
    .replace(
      `attribute`,
      /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/,
    )
    .getRegex(),
  He =
    /(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\])|[^\[\]\\`])*?/,
  Ue = _(
    /^!?\[(label)\]\(\s*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?\s*\)/,
  )
    .replace(`label`, He)
    .replace(`href`, /<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/)
    .replace(
      `title`,
      /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/,
    )
    .getRegex(),
  We = _(/^!?\[(label)\]\[(ref)\]/)
    .replace(`label`, He)
    .replace(`ref`, me)
    .getRegex(),
  O = _(/^!?\[(ref)\](?:\[\])?/)
    .replace(`ref`, me)
    .getRegex(),
  k = _(`reflink|nolink(?!\\()`, `g`)
    .replace(`reflink`, We)
    .replace(`nolink`, O)
    .getRegex(),
  Ge = /[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,
  Ke = {
    _backpedal: h,
    anyPunctuation: Re,
    autolink: ze,
    blockSkip: Ae,
    br: Te,
    code: x,
    del: h,
    delLDelim: h,
    delRDelim: h,
    emStrongLDelim: E,
    emStrongRDelimAst: Ne,
    emStrongRDelimUnd: Fe,
    escape: we,
    link: Ue,
    nolink: O,
    punctuation: De,
    reflink: We,
    reflinkSearch: k,
    tag: Ve,
    text: S,
    url: h,
  },
  qe = o(
    o({}, Ke),
    {},
    {
      link: _(/^!?\[(label)\]\((.*?)\)/)
        .replace(`label`, He)
        .getRegex(),
      reflink: _(/^!?\[(label)\]\s*\[([^\]]*)\]/)
        .replace(`label`, He)
        .getRegex(),
    },
  ),
  Je = o(
    o({}, Ke),
    {},
    {
      emStrongRDelimAst: Pe,
      emStrongLDelim: Me,
      delLDelim: Ie,
      delRDelim: Le,
      url: _(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/)
        .replace(`protocol`, Ge)
        .replace(
          `email`,
          /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
        )
        .getRegex(),
      _backpedal:
        /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
      del: /^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,
      text: _(
        /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/,
      )
        .replace(`protocol`, Ge)
        .getRegex(),
    },
  ),
  Ye = o(
    o({}, Je),
    {},
    {
      br: _(Te).replace(`{2,}`, `*`).getRegex(),
      text: _(Je.text)
        .replace(`\\b_`, `\\b_| {2,}\\n`)
        .replace(/\{2,\}/g, `*`)
        .getRegex(),
    },
  ),
  Xe = { normal: be, gfm: Se, pedantic: Ce },
  A = { normal: Ke, gfm: Je, breaks: Ye, pedantic: qe },
  j = { "&": `&amp;`, "<": `&lt;`, ">": `&gt;`, '"': `&quot;`, "'": `&#39;` },
  Ze = (e) => j[e];
function M(e, t) {
  if (t) {
    if (y.escapeTest.test(e)) return e.replace(y.escapeReplace, Ze);
  } else if (y.escapeTestNoEncode.test(e))
    return e.replace(y.escapeReplaceNoEncode, Ze);
  return e;
}
function Qe(e) {
  try {
    e = encodeURI(e).replace(y.percentDecode, `%`);
  } catch (e) {
    return null;
  }
  return e;
}
function $e(e, t) {
  var n;
  let r = e
      .replace(y.findPipe, (e, t, n) => {
        let r = !1,
          i = t;
        for (; --i >= 0 && n[i] === `\\`;) r = !r;
        return r ? `|` : ` |`;
      })
      .split(y.splitPipe),
    i = 0;
  if (
    (r[0].trim() || r.shift(),
    r.length > 0 && !((n = r.at(-1)) != null && n.trim()) && r.pop(),
    t)
  )
    if (r.length > t) r.splice(t);
    else for (; r.length < t;) r.push(``);
  for (; i < r.length; i++) r[i] = r[i].trim().replace(y.slashPipe, `|`);
  return r;
}
function N(e, t, n) {
  let r = e.length;
  if (r === 0) return ``;
  let i = 0;
  for (; i < r;) {
    let a = e.charAt(r - i - 1);
    if (a === t && !n) i++;
    else if (a !== t && n) i++;
    else break;
  }
  return e.slice(0, r - i);
}
function et(e) {
  let t = e.split(`
`),
    n = t.length - 1;
  for (; n >= 0 && y.blankLine.test(t[n]);) n--;
  return t.length - n <= 2
    ? e
    : t.slice(0, n + 1).join(`
`);
}
function tt(e, t) {
  if (e.indexOf(t[1]) === -1) return -1;
  let n = 0;
  for (let r = 0; r < e.length; r++)
    if (e[r] === `\\`) r++;
    else if (e[r] === t[0]) n++;
    else if (e[r] === t[1] && (n--, n < 0)) return r;
  return n > 0 ? -2 : -1;
}
function nt(e, t = 0) {
  let n = t,
    r = ``;
  for (let t of e)
    if (t === `	`) {
      let e = 4 - (n % 4);
      ((r += ` `.repeat(e)), (n += e));
    } else ((r += t), n++);
  return r;
}
function rt(e, t, n, r, i) {
  let a = t.href,
    o = t.title || null,
    s = e[1].replace(i.other.outputLinkReplace, `$1`);
  r.state.inLink = !0;
  let c = {
    type: e[0].charAt(0) === `!` ? `image` : `link`,
    raw: n,
    href: a,
    title: o,
    text: s,
    tokens: r.inlineTokens(s),
  };
  return ((r.state.inLink = !1), c);
}
function it(e, t, n) {
  let r = e.match(n.other.indentCodeCompensation);
  if (r === null) return t;
  let i = r[1];
  return t
    .split(
      `
`,
    )
    .map((e) => {
      let t = e.match(n.other.beginningSpace);
      if (t === null) return e;
      let [r] = t;
      return r.length >= i.length ? e.slice(i.length) : e;
    }).join(`
`);
}
var at = class {
    constructor(e) {
      (c(this, `options`, void 0),
        c(this, `rules`, void 0),
        c(this, `lexer`, void 0),
        (this.options = e || m));
    }
    space(e) {
      let t = this.rules.block.newline.exec(e);
      if (t && t[0].length > 0) return { type: `space`, raw: t[0] };
    }
    code(e) {
      let t = this.rules.block.code.exec(e);
      if (t) {
        let e = this.options.pedantic ? t[0] : et(t[0]);
        return {
          type: `code`,
          raw: e,
          codeBlockStyle: `indented`,
          text: e.replace(this.rules.other.codeRemoveIndent, ``),
        };
      }
    }
    fences(e) {
      let t = this.rules.block.fences.exec(e);
      if (t) {
        let e = t[0],
          n = it(e, t[3] || ``, this.rules);
        return {
          type: `code`,
          raw: e,
          lang: t[2]
            ? t[2].trim().replace(this.rules.inline.anyPunctuation, `$1`)
            : t[2],
          text: n,
        };
      }
    }
    heading(e) {
      let t = this.rules.block.heading.exec(e);
      if (t) {
        let e = t[2].trim();
        if (this.rules.other.endingHash.test(e)) {
          let t = N(e, `#`);
          (this.options.pedantic ||
            !t ||
            this.rules.other.endingSpaceChar.test(t)) &&
            (e = t.trim());
        }
        return {
          type: `heading`,
          raw: N(
            t[0],
            `
`,
          ),
          depth: t[1].length,
          text: e,
          tokens: this.lexer.inline(e),
        };
      }
    }
    hr(e) {
      let t = this.rules.block.hr.exec(e);
      if (t)
        return {
          type: `hr`,
          raw: N(
            t[0],
            `
`,
          ),
        };
    }
    blockquote(e) {
      let t = this.rules.block.blockquote.exec(e);
      if (t) {
        let e = N(
            t[0],
            `
`,
          ).split(`
`),
          n = ``,
          r = ``,
          i = [];
        for (; e.length > 0;) {
          let t = !1,
            a = [],
            o;
          for (o = 0; o < e.length; o++)
            if (this.rules.other.blockquoteStart.test(e[o]))
              (a.push(e[o]), (t = !0));
            else if (!t) a.push(e[o]);
            else break;
          e = e.slice(o);
          let s = a.join(`
`),
            c = s
              .replace(
                this.rules.other.blockquoteSetextReplace,
                `
    $1`,
              )
              .replace(this.rules.other.blockquoteSetextReplace2, ``);
          ((n = n
            ? `${n}
${s}`
            : s),
            (r = r
              ? `${r}
${c}`
              : c));
          let l = this.lexer.state.top;
          if (
            ((this.lexer.state.top = !0),
            this.lexer.blockTokens(c, i, !0),
            (this.lexer.state.top = l),
            e.length === 0)
          )
            break;
          let u = i.at(-1);
          if ((u == null ? void 0 : u.type) === `code`) break;
          if ((u == null ? void 0 : u.type) === `blockquote`) {
            let t = u,
              a =
                t.raw +
                `
` +
                e.join(`
`),
              o = this.blockquote(a);
            ((i[i.length - 1] = o),
              (n = n.substring(0, n.length - t.raw.length) + o.raw),
              (r = r.substring(0, r.length - t.text.length) + o.text));
            break;
          } else if ((u == null ? void 0 : u.type) === `list`) {
            let t = u,
              a =
                t.raw +
                `
` +
                e.join(`
`),
              o = this.list(a);
            ((i[i.length - 1] = o),
              (n = n.substring(0, n.length - u.raw.length) + o.raw),
              (r = r.substring(0, r.length - t.raw.length) + o.raw),
              (e = a.substring(i.at(-1).raw.length).split(`
`)));
            continue;
          }
        }
        return { type: `blockquote`, raw: n, tokens: i, text: r };
      }
    }
    list(e) {
      let t = this.rules.block.list.exec(e);
      if (t) {
        let n = t[1].trim(),
          r = n.length > 1,
          i = {
            type: `list`,
            raw: ``,
            ordered: r,
            start: r ? +n.slice(0, -1) : ``,
            loose: !1,
            items: [],
          };
        ((n = r ? `\\d{1,9}\\${n.slice(-1)}` : `\\${n}`),
          this.options.pedantic && (n = r ? n : `[*+-]`));
        let a = this.rules.other.listItemRegex(n),
          o = !1;
        for (; e;) {
          let n = !1,
            r = ``,
            s = ``;
          if (!(t = a.exec(e)) || this.rules.block.hr.test(e)) break;
          ((r = t[0]), (e = e.substring(r.length)));
          let c = nt(
              t[2].split(
                `
`,
                1,
              )[0],
              t[1].length,
            ),
            l = e.split(
              `
`,
              1,
            )[0],
            u = !c.trim(),
            d = 0;
          if (
            (this.options.pedantic
              ? ((d = 2), (s = c.trimStart()))
              : u
                ? (d = t[1].length + 1)
                : ((d = c.search(this.rules.other.nonSpaceChar)),
                  (d = d > 4 ? 1 : d),
                  (s = c.slice(d)),
                  (d += t[1].length)),
            u &&
              this.rules.other.blankLine.test(l) &&
              ((r +=
                l +
                `
`),
              (e = e.substring(l.length + 1)),
              (n = !0)),
            !n)
          ) {
            let t = this.rules.other.nextBulletRegex(d),
              n = this.rules.other.hrRegex(d),
              i = this.rules.other.fencesBeginRegex(d),
              a = this.rules.other.headingBeginRegex(d),
              o = this.rules.other.htmlBeginRegex(d),
              ee = this.rules.other.blockquoteBeginRegex(d);
            for (; e;) {
              let te = e.split(
                  `
`,
                  1,
                )[0],
                f;
              if (
                ((l = te),
                this.options.pedantic
                  ? ((l = l.replace(this.rules.other.listReplaceNesting, `  `)),
                    (f = l))
                  : (f = l.replace(this.rules.other.tabCharGlobal, `    `)),
                i.test(l) ||
                  a.test(l) ||
                  o.test(l) ||
                  ee.test(l) ||
                  t.test(l) ||
                  n.test(l))
              )
                break;
              if (f.search(this.rules.other.nonSpaceChar) >= d || !l.trim())
                s +=
                  `
` + f.slice(d);
              else {
                if (
                  u ||
                  c
                    .replace(this.rules.other.tabCharGlobal, `    `)
                    .search(this.rules.other.nonSpaceChar) >= 4 ||
                  i.test(c) ||
                  a.test(c) ||
                  n.test(c)
                )
                  break;
                s +=
                  `
` + l;
              }
              ((u = !l.trim()),
                (r +=
                  te +
                  `
`),
                (e = e.substring(te.length + 1)),
                (c = f.slice(d)));
            }
          }
          (i.loose ||
            (o
              ? (i.loose = !0)
              : this.rules.other.doubleBlankLine.test(r) && (o = !0)),
            i.items.push({
              type: `list_item`,
              raw: r,
              task: !!this.options.gfm && this.rules.other.listIsTask.test(s),
              loose: !1,
              text: s,
              tokens: [],
            }),
            (i.raw += r));
        }
        let s = i.items.at(-1);
        if (s) ((s.raw = s.raw.trimEnd()), (s.text = s.text.trimEnd()));
        else return;
        i.raw = i.raw.trimEnd();
        for (let e of i.items) {
          ((this.lexer.state.top = !1),
            (e.tokens = this.lexer.blockTokens(e.text, [])));
          let t = e.tokens[0];
          if (
            e.task &&
            ((t == null ? void 0 : t.type) === `text` ||
              (t == null ? void 0 : t.type) === `paragraph`)
          ) {
            ((e.text = e.text.replace(this.rules.other.listReplaceTask, ``)),
              (t.raw = t.raw.replace(this.rules.other.listReplaceTask, ``)),
              (t.text = t.text.replace(this.rules.other.listReplaceTask, ``)));
            for (let e = this.lexer.inlineQueue.length - 1; e >= 0; e--)
              if (
                this.rules.other.listIsTask.test(this.lexer.inlineQueue[e].src)
              ) {
                this.lexer.inlineQueue[e].src = this.lexer.inlineQueue[
                  e
                ].src.replace(this.rules.other.listReplaceTask, ``);
                break;
              }
            let n = this.rules.other.listTaskCheckbox.exec(e.raw);
            if (n) {
              let t = {
                type: `checkbox`,
                raw: n[0] + ` `,
                checked: n[0] !== `[ ]`,
              };
              ((e.checked = t.checked),
                i.loose
                  ? e.tokens[0] &&
                    [`paragraph`, `text`].includes(e.tokens[0].type) &&
                    `tokens` in e.tokens[0] &&
                    e.tokens[0].tokens
                    ? ((e.tokens[0].raw = t.raw + e.tokens[0].raw),
                      (e.tokens[0].text = t.raw + e.tokens[0].text),
                      e.tokens[0].tokens.unshift(t))
                    : e.tokens.unshift({
                        type: `paragraph`,
                        raw: t.raw,
                        text: t.raw,
                        tokens: [t],
                      })
                  : e.tokens.unshift(t));
            }
          } else e.task && (e.task = !1);
          if (!i.loose) {
            let t = e.tokens.filter((e) => e.type === `space`);
            i.loose =
              t.length > 0 &&
              t.some((e) => this.rules.other.anyLine.test(e.raw));
          }
        }
        if (i.loose)
          for (let e of i.items) {
            e.loose = !0;
            for (let t of e.tokens) t.type === `text` && (t.type = `paragraph`);
          }
        return i;
      }
    }
    html(e) {
      let t = this.rules.block.html.exec(e);
      if (t) {
        let e = et(t[0]);
        return {
          type: `html`,
          block: !0,
          raw: e,
          pre: t[1] === `pre` || t[1] === `script` || t[1] === `style`,
          text: e,
        };
      }
    }
    def(e) {
      let t = this.rules.block.def.exec(e);
      if (t) {
        let e = t[1]
            .toLowerCase()
            .replace(this.rules.other.multipleSpaceGlobal, ` `),
          n = t[2]
            ? t[2]
                .replace(this.rules.other.hrefBrackets, `$1`)
                .replace(this.rules.inline.anyPunctuation, `$1`)
            : ``,
          r = t[3]
            ? t[3]
                .substring(1, t[3].length - 1)
                .replace(this.rules.inline.anyPunctuation, `$1`)
            : t[3];
        return {
          type: `def`,
          tag: e,
          raw: N(
            t[0],
            `
`,
          ),
          href: n,
          title: r,
        };
      }
    }
    table(e) {
      var t;
      let n = this.rules.block.table.exec(e);
      if (!n || !this.rules.other.tableDelimiter.test(n[2])) return;
      let r = $e(n[1]),
        i = n[2].replace(this.rules.other.tableAlignChars, ``).split(`|`),
        a =
          (t = n[3]) != null && t.trim()
            ? n[3].replace(this.rules.other.tableRowBlankLine, ``).split(`
`)
            : [],
        o = {
          type: `table`,
          raw: N(
            n[0],
            `
`,
          ),
          header: [],
          align: [],
          rows: [],
        };
      if (r.length === i.length) {
        for (let e of i)
          this.rules.other.tableAlignRight.test(e)
            ? o.align.push(`right`)
            : this.rules.other.tableAlignCenter.test(e)
              ? o.align.push(`center`)
              : this.rules.other.tableAlignLeft.test(e)
                ? o.align.push(`left`)
                : o.align.push(null);
        for (let e = 0; e < r.length; e++)
          o.header.push({
            text: r[e],
            tokens: this.lexer.inline(r[e]),
            header: !0,
            align: o.align[e],
          });
        for (let e of a)
          o.rows.push(
            $e(e, o.header.length).map((e, t) => ({
              text: e,
              tokens: this.lexer.inline(e),
              header: !1,
              align: o.align[t],
            })),
          );
        return o;
      }
    }
    lheading(e) {
      let t = this.rules.block.lheading.exec(e);
      if (t) {
        let e = t[1].trim();
        return {
          type: `heading`,
          raw: N(
            t[0],
            `
`,
          ),
          depth: t[2].charAt(0) === `=` ? 1 : 2,
          text: e,
          tokens: this.lexer.inline(e),
        };
      }
    }
    paragraph(e) {
      let t = this.rules.block.paragraph.exec(e);
      if (t) {
        let e =
          t[1].charAt(t[1].length - 1) ===
          `
`
            ? t[1].slice(0, -1)
            : t[1];
        return {
          type: `paragraph`,
          raw: t[0],
          text: e,
          tokens: this.lexer.inline(e),
        };
      }
    }
    text(e) {
      let t = this.rules.block.text.exec(e);
      if (t)
        return {
          type: `text`,
          raw: t[0],
          text: t[0],
          tokens: this.lexer.inline(t[0]),
        };
    }
    escape(e) {
      let t = this.rules.inline.escape.exec(e);
      if (t) return { type: `escape`, raw: t[0], text: t[1] };
    }
    tag(e) {
      let t = this.rules.inline.tag.exec(e);
      if (t)
        return (
          !this.lexer.state.inLink && this.rules.other.startATag.test(t[0])
            ? (this.lexer.state.inLink = !0)
            : this.lexer.state.inLink &&
              this.rules.other.endATag.test(t[0]) &&
              (this.lexer.state.inLink = !1),
          !this.lexer.state.inRawBlock &&
          this.rules.other.startPreScriptTag.test(t[0])
            ? (this.lexer.state.inRawBlock = !0)
            : this.lexer.state.inRawBlock &&
              this.rules.other.endPreScriptTag.test(t[0]) &&
              (this.lexer.state.inRawBlock = !1),
          {
            type: `html`,
            raw: t[0],
            inLink: this.lexer.state.inLink,
            inRawBlock: this.lexer.state.inRawBlock,
            block: !1,
            text: t[0],
          }
        );
    }
    link(e) {
      let t = this.rules.inline.link.exec(e);
      if (t) {
        let e = t[2].trim();
        if (
          !this.options.pedantic &&
          this.rules.other.startAngleBracket.test(e)
        ) {
          if (!this.rules.other.endAngleBracket.test(e)) return;
          let t = N(e.slice(0, -1), `\\`);
          if ((e.length - t.length) % 2 == 0) return;
        } else {
          let e = tt(t[2], `()`);
          if (e === -2) return;
          if (e > -1) {
            let n = (t[0].indexOf(`!`) === 0 ? 5 : 4) + t[1].length + e;
            ((t[2] = t[2].substring(0, e)),
              (t[0] = t[0].substring(0, n).trim()),
              (t[3] = ``));
          }
        }
        let n = t[2],
          r = ``;
        if (this.options.pedantic) {
          let e = this.rules.other.pedanticHrefTitle.exec(n);
          e && ((n = e[1]), (r = e[3]));
        } else r = t[3] ? t[3].slice(1, -1) : ``;
        return (
          (n = n.trim()),
          this.rules.other.startAngleBracket.test(n) &&
            (n =
              this.options.pedantic && !this.rules.other.endAngleBracket.test(e)
                ? n.slice(1)
                : n.slice(1, -1)),
          rt(
            t,
            {
              href: n && n.replace(this.rules.inline.anyPunctuation, `$1`),
              title: r && r.replace(this.rules.inline.anyPunctuation, `$1`),
            },
            t[0],
            this.lexer,
            this.rules,
          )
        );
      }
    }
    reflink(e, t) {
      let n;
      if (
        (n = this.rules.inline.reflink.exec(e)) ||
        (n = this.rules.inline.nolink.exec(e))
      ) {
        let e =
          t[
            (n[2] || n[1])
              .replace(this.rules.other.multipleSpaceGlobal, ` `)
              .toLowerCase()
          ];
        if (!e) {
          let e = n[0].charAt(0);
          return { type: `text`, raw: e, text: e };
        }
        return rt(n, e, n[0], this.lexer, this.rules);
      }
    }
    emStrong(e, t, n = ``) {
      let r = this.rules.inline.emStrongLDelim.exec(e);
      if (
        !(
          !r ||
          (!r[1] && !r[2] && !r[3] && !r[4]) ||
          (r[4] && n.match(this.rules.other.unicodeAlphaNumeric))
        ) &&
        (!(r[1] || r[3]) || !n || this.rules.inline.punctuation.exec(n))
      ) {
        let n = [...r[0]].length - 1,
          i,
          a,
          o = n,
          s = 0,
          c =
            r[0][0] === `*`
              ? this.rules.inline.emStrongRDelimAst
              : this.rules.inline.emStrongRDelimUnd;
        for (
          c.lastIndex = 0, t = t.slice(-1 * e.length + n);
          (r = c.exec(t)) !== null;
        ) {
          if (((i = r[1] || r[2] || r[3] || r[4] || r[5] || r[6]), !i))
            continue;
          if (((a = [...i].length), r[3] || r[4])) {
            o += a;
            continue;
          } else if ((r[5] || r[6]) && n % 3 && !((n + a) % 3)) {
            s += a;
            continue;
          }
          if (((o -= a), o > 0)) continue;
          a = Math.min(a, a + o + s);
          let t = [...r[0]][0].length,
            c = e.slice(0, n + r.index + t + a);
          if (Math.min(n, a) % 2) {
            let e = c.slice(1, -1);
            return {
              type: `em`,
              raw: c,
              text: e,
              tokens: this.lexer.inlineTokens(e),
            };
          }
          let l = c.slice(2, -2);
          return {
            type: `strong`,
            raw: c,
            text: l,
            tokens: this.lexer.inlineTokens(l),
          };
        }
      }
    }
    codespan(e) {
      let t = this.rules.inline.code.exec(e);
      if (t) {
        let e = t[2].replace(this.rules.other.newLineCharGlobal, ` `),
          n = this.rules.other.nonSpaceChar.test(e),
          r =
            this.rules.other.startingSpaceChar.test(e) &&
            this.rules.other.endingSpaceChar.test(e);
        return (
          n && r && (e = e.substring(1, e.length - 1)),
          { type: `codespan`, raw: t[0], text: e }
        );
      }
    }
    br(e) {
      let t = this.rules.inline.br.exec(e);
      if (t) return { type: `br`, raw: t[0] };
    }
    del(e, t, n = ``) {
      let r = this.rules.inline.delLDelim.exec(e);
      if (r && (!r[1] || !n || this.rules.inline.punctuation.exec(n))) {
        let n = [...r[0]].length - 1,
          i,
          a,
          o = n,
          s = this.rules.inline.delRDelim;
        for (
          s.lastIndex = 0, t = t.slice(-1 * e.length + n);
          (r = s.exec(t)) !== null;
        ) {
          if (
            ((i = r[1] || r[2] || r[3] || r[4] || r[5] || r[6]),
            !i || ((a = [...i].length), a !== n))
          )
            continue;
          if (r[3] || r[4]) {
            o += a;
            continue;
          }
          if (((o -= a), o > 0)) continue;
          a = Math.min(a, a + o);
          let t = [...r[0]][0].length,
            s = e.slice(0, n + r.index + t + a),
            c = s.slice(n, -n);
          return {
            type: `del`,
            raw: s,
            text: c,
            tokens: this.lexer.inlineTokens(c),
          };
        }
      }
    }
    autolink(e) {
      let t = this.rules.inline.autolink.exec(e);
      if (t) {
        let e, n;
        return (
          t[2] === `@`
            ? ((e = t[1]), (n = `mailto:` + e))
            : ((e = t[1]), (n = e)),
          {
            type: `link`,
            raw: t[0],
            text: e,
            href: n,
            tokens: [{ type: `text`, raw: e, text: e }],
          }
        );
      }
    }
    url(e) {
      let t;
      if ((t = this.rules.inline.url.exec(e))) {
        let e, i;
        if (t[2] === `@`) ((e = t[0]), (i = `mailto:` + e));
        else {
          var n, r;
          let a;
          do
            ((a = t[0]),
              (t[0] =
                (n =
                  (r = this.rules.inline._backpedal.exec(t[0])) == null
                    ? void 0
                    : r[0]) == null
                  ? ``
                  : n));
          while (a !== t[0]);
          ((e = t[0]), (i = t[1] === `www.` ? `http://` + t[0] : t[0]));
        }
        return {
          type: `link`,
          raw: t[0],
          text: e,
          href: i,
          tokens: [{ type: `text`, raw: e, text: e }],
        };
      }
    }
    inlineText(e) {
      let t = this.rules.inline.text.exec(e);
      if (t) {
        let e = this.lexer.state.inRawBlock;
        return { type: `text`, raw: t[0], text: t[0], escaped: e };
      }
    }
  },
  P = class e {
    constructor(e) {
      (c(this, `tokens`, void 0),
        c(this, `options`, void 0),
        c(this, `state`, void 0),
        c(this, `inlineQueue`, void 0),
        c(this, `tokenizer`, void 0),
        (this.tokens = []),
        (this.tokens.links = Object.create(null)),
        (this.options = e || m),
        (this.options.tokenizer = this.options.tokenizer || new at()),
        (this.tokenizer = this.options.tokenizer),
        (this.tokenizer.options = this.options),
        (this.tokenizer.lexer = this),
        (this.inlineQueue = []),
        (this.state = { inLink: !1, inRawBlock: !1, top: !0 }));
      let t = { other: y, block: Xe.normal, inline: A.normal };
      (this.options.pedantic
        ? ((t.block = Xe.pedantic), (t.inline = A.pedantic))
        : this.options.gfm &&
          ((t.block = Xe.gfm),
          this.options.breaks ? (t.inline = A.breaks) : (t.inline = A.gfm)),
        (this.tokenizer.rules = t));
    }
    static get rules() {
      return { block: Xe, inline: A };
    }
    static lex(t, n) {
      return new e(n).lex(t);
    }
    static lexInline(t, n) {
      return new e(n).inlineTokens(t);
    }
    lex(e) {
      ((e = e.replace(
        y.carriageReturn,
        `
`,
      )),
        this.blockTokens(e, this.tokens));
      for (let e = 0; e < this.inlineQueue.length; e++) {
        let t = this.inlineQueue[e];
        this.inlineTokens(t.src, t.tokens);
      }
      return ((this.inlineQueue = []), this.tokens);
    }
    blockTokens(e, t = [], n = !1) {
      ((this.tokenizer.lexer = this),
        this.options.pedantic &&
          (e = e.replace(y.tabCharGlobal, `    `).replace(y.spaceLine, ``)));
      let r = 1 / 0;
      for (; e;) {
        var i, a;
        if (e.length < r) r = e.length;
        else {
          this.infiniteLoopError(e.charCodeAt(0));
          break;
        }
        let o;
        if (
          !((i = this.options.extensions) == null || (i = i.block) == null) &&
          i.some((n) =>
            (o = n.call({ lexer: this }, e, t))
              ? ((e = e.substring(o.raw.length)), t.push(o), !0)
              : !1,
          )
        )
          continue;
        if ((o = this.tokenizer.space(e))) {
          e = e.substring(o.raw.length);
          let n = t.at(-1);
          o.raw.length === 1 && n !== void 0
            ? (n.raw += `
`)
            : t.push(o);
          continue;
        }
        if ((o = this.tokenizer.code(e))) {
          e = e.substring(o.raw.length);
          let n = t.at(-1);
          (n == null ? void 0 : n.type) === `paragraph` ||
          (n == null ? void 0 : n.type) === `text`
            ? ((n.raw +=
                (n.raw.endsWith(`
`)
                  ? ``
                  : `
`) + o.raw),
              (n.text +=
                `
` + o.text),
              (this.inlineQueue.at(-1).src = n.text))
            : t.push(o);
          continue;
        }
        if ((o = this.tokenizer.fences(e))) {
          ((e = e.substring(o.raw.length)), t.push(o));
          continue;
        }
        if ((o = this.tokenizer.heading(e))) {
          ((e = e.substring(o.raw.length)), t.push(o));
          continue;
        }
        if ((o = this.tokenizer.hr(e))) {
          ((e = e.substring(o.raw.length)), t.push(o));
          continue;
        }
        if ((o = this.tokenizer.blockquote(e))) {
          ((e = e.substring(o.raw.length)), t.push(o));
          continue;
        }
        if ((o = this.tokenizer.list(e))) {
          ((e = e.substring(o.raw.length)), t.push(o));
          continue;
        }
        if ((o = this.tokenizer.html(e))) {
          ((e = e.substring(o.raw.length)), t.push(o));
          continue;
        }
        if ((o = this.tokenizer.def(e))) {
          e = e.substring(o.raw.length);
          let n = t.at(-1);
          (n == null ? void 0 : n.type) === `paragraph` ||
          (n == null ? void 0 : n.type) === `text`
            ? ((n.raw +=
                (n.raw.endsWith(`
`)
                  ? ``
                  : `
`) + o.raw),
              (n.text +=
                `
` + o.raw),
              (this.inlineQueue.at(-1).src = n.text))
            : this.tokens.links[o.tag] ||
              ((this.tokens.links[o.tag] = { href: o.href, title: o.title }),
              t.push(o));
          continue;
        }
        if ((o = this.tokenizer.table(e))) {
          ((e = e.substring(o.raw.length)), t.push(o));
          continue;
        }
        if ((o = this.tokenizer.lheading(e))) {
          ((e = e.substring(o.raw.length)), t.push(o));
          continue;
        }
        let s = e;
        if ((a = this.options.extensions) != null && a.startBlock) {
          let t = 1 / 0,
            n = e.slice(1),
            r;
          (this.options.extensions.startBlock.forEach((e) => {
            ((r = e.call({ lexer: this }, n)),
              typeof r == `number` && r >= 0 && (t = Math.min(t, r)));
          }),
            t < 1 / 0 && t >= 0 && (s = e.substring(0, t + 1)));
        }
        if (this.state.top && (o = this.tokenizer.paragraph(s))) {
          let r = t.at(-1);
          (n && (r == null ? void 0 : r.type) === `paragraph`
            ? ((r.raw +=
                (r.raw.endsWith(`
`)
                  ? ``
                  : `
`) + o.raw),
              (r.text +=
                `
` + o.text),
              this.inlineQueue.pop(),
              (this.inlineQueue.at(-1).src = r.text))
            : t.push(o),
            (n = s.length !== e.length),
            (e = e.substring(o.raw.length)));
          continue;
        }
        if ((o = this.tokenizer.text(e))) {
          e = e.substring(o.raw.length);
          let n = t.at(-1);
          (n == null ? void 0 : n.type) === `text`
            ? ((n.raw +=
                (n.raw.endsWith(`
`)
                  ? ``
                  : `
`) + o.raw),
              (n.text +=
                `
` + o.text),
              this.inlineQueue.pop(),
              (this.inlineQueue.at(-1).src = n.text))
            : t.push(o);
          continue;
        }
        if (e) {
          this.infiniteLoopError(e.charCodeAt(0));
          break;
        }
      }
      return ((this.state.top = !0), t);
    }
    inline(e, t = []) {
      return (this.inlineQueue.push({ src: e, tokens: t }), t);
    }
    inlineTokens(e, t = []) {
      var n, r;
      this.tokenizer.lexer = this;
      let i = e,
        a = null;
      if (this.tokens.links) {
        let e = Object.keys(this.tokens.links);
        if (e.length > 0)
          for (
            ;
            (a = this.tokenizer.rules.inline.reflinkSearch.exec(i)) !== null;
          )
            e.includes(a[0].slice(a[0].lastIndexOf(`[`) + 1, -1)) &&
              (i =
                i.slice(0, a.index) +
                `[` +
                `a`.repeat(a[0].length - 2) +
                `]` +
                i.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
      }
      for (; (a = this.tokenizer.rules.inline.anyPunctuation.exec(i)) !== null;)
        i =
          i.slice(0, a.index) +
          `++` +
          i.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
      let o;
      for (; (a = this.tokenizer.rules.inline.blockSkip.exec(i)) !== null;)
        ((o = a[2] ? a[2].length : 0),
          (i =
            i.slice(0, a.index + o) +
            `[` +
            `a`.repeat(a[0].length - o - 2) +
            `]` +
            i.slice(this.tokenizer.rules.inline.blockSkip.lastIndex)));
      i =
        (n =
          (r = this.options.hooks) == null || (r = r.emStrongMask) == null
            ? void 0
            : r.call({ lexer: this }, i)) == null
          ? i
          : n;
      let s = !1,
        c = ``,
        l = 1 / 0;
      for (; e;) {
        var u, d;
        if (e.length < l) l = e.length;
        else {
          this.infiniteLoopError(e.charCodeAt(0));
          break;
        }
        (s || (c = ``), (s = !1));
        let n;
        if (
          !((u = this.options.extensions) == null || (u = u.inline) == null) &&
          u.some((r) =>
            (n = r.call({ lexer: this }, e, t))
              ? ((e = e.substring(n.raw.length)), t.push(n), !0)
              : !1,
          )
        )
          continue;
        if ((n = this.tokenizer.escape(e))) {
          ((e = e.substring(n.raw.length)), t.push(n));
          continue;
        }
        if ((n = this.tokenizer.tag(e))) {
          ((e = e.substring(n.raw.length)), t.push(n));
          continue;
        }
        if ((n = this.tokenizer.link(e))) {
          ((e = e.substring(n.raw.length)), t.push(n));
          continue;
        }
        if ((n = this.tokenizer.reflink(e, this.tokens.links))) {
          e = e.substring(n.raw.length);
          let r = t.at(-1);
          n.type === `text` && (r == null ? void 0 : r.type) === `text`
            ? ((r.raw += n.raw), (r.text += n.text))
            : t.push(n);
          continue;
        }
        if ((n = this.tokenizer.emStrong(e, i, c))) {
          ((e = e.substring(n.raw.length)), t.push(n));
          continue;
        }
        if ((n = this.tokenizer.codespan(e))) {
          ((e = e.substring(n.raw.length)), t.push(n));
          continue;
        }
        if ((n = this.tokenizer.br(e))) {
          ((e = e.substring(n.raw.length)), t.push(n));
          continue;
        }
        if ((n = this.tokenizer.del(e, i, c))) {
          ((e = e.substring(n.raw.length)), t.push(n));
          continue;
        }
        if ((n = this.tokenizer.autolink(e))) {
          ((e = e.substring(n.raw.length)), t.push(n));
          continue;
        }
        if (!this.state.inLink && (n = this.tokenizer.url(e))) {
          ((e = e.substring(n.raw.length)), t.push(n));
          continue;
        }
        let r = e;
        if ((d = this.options.extensions) != null && d.startInline) {
          let t = 1 / 0,
            n = e.slice(1),
            i;
          (this.options.extensions.startInline.forEach((e) => {
            ((i = e.call({ lexer: this }, n)),
              typeof i == `number` && i >= 0 && (t = Math.min(t, i)));
          }),
            t < 1 / 0 && t >= 0 && (r = e.substring(0, t + 1)));
        }
        if ((n = this.tokenizer.inlineText(r))) {
          ((e = e.substring(n.raw.length)),
            n.raw.slice(-1) !== `_` && (c = n.raw.slice(-1)),
            (s = !0));
          let r = t.at(-1);
          (r == null ? void 0 : r.type) === `text`
            ? ((r.raw += n.raw), (r.text += n.text))
            : t.push(n);
          continue;
        }
        if (e) {
          this.infiniteLoopError(e.charCodeAt(0));
          break;
        }
      }
      return t;
    }
    infiniteLoopError(e) {
      let t = `Infinite loop on byte: ` + e;
      if (this.options.silent) console.error(t);
      else throw Error(t);
    }
  },
  F = class {
    constructor(e) {
      (c(this, `options`, void 0),
        c(this, `parser`, void 0),
        (this.options = e || m));
    }
    space(e) {
      return ``;
    }
    code({ text: e, lang: t, escaped: n }) {
      var r;
      let i = (r = (t || ``).match(y.notSpaceStart)) == null ? void 0 : r[0],
        a =
          e.replace(y.endingNewline, ``) +
          `
`;
      return i
        ? `<pre><code class="language-` +
            M(i) +
            `">` +
            (n ? a : M(a, !0)) +
            `</code></pre>
`
        : `<pre><code>` +
            (n ? a : M(a, !0)) +
            `</code></pre>
`;
    }
    blockquote({ tokens: e }) {
      return `<blockquote>
${this.parser.parse(e)}</blockquote>
`;
    }
    html({ text: e }) {
      return e;
    }
    def(e) {
      return ``;
    }
    heading({ tokens: e, depth: t }) {
      return `<h${t}>${this.parser.parseInline(e)}</h${t}>
`;
    }
    hr(e) {
      return `<hr>
`;
    }
    list(e) {
      let t = e.ordered,
        n = e.start,
        r = ``;
      for (let t = 0; t < e.items.length; t++) {
        let n = e.items[t];
        r += this.listitem(n);
      }
      let i = t ? `ol` : `ul`,
        a = t && n !== 1 ? ` start="` + n + `"` : ``;
      return (
        `<` +
        i +
        a +
        `>
` +
        r +
        `</` +
        i +
        `>
`
      );
    }
    listitem(e) {
      return `<li>${this.parser.parse(e.tokens)}</li>
`;
    }
    checkbox({ checked: e }) {
      return (
        `<input ` + (e ? `checked="" ` : ``) + `disabled="" type="checkbox"> `
      );
    }
    paragraph({ tokens: e }) {
      return `<p>${this.parser.parseInline(e)}</p>
`;
    }
    table(e) {
      let t = ``,
        n = ``;
      for (let t = 0; t < e.header.length; t++)
        n += this.tablecell(e.header[t]);
      t += this.tablerow({ text: n });
      let r = ``;
      for (let t = 0; t < e.rows.length; t++) {
        let i = e.rows[t];
        n = ``;
        for (let e = 0; e < i.length; e++) n += this.tablecell(i[e]);
        r += this.tablerow({ text: n });
      }
      return (
        r && (r = `<tbody>${r}</tbody>`),
        `<table>
<thead>
` +
          t +
          `</thead>
` +
          r +
          `</table>
`
      );
    }
    tablerow({ text: e }) {
      return `<tr>
${e}</tr>
`;
    }
    tablecell(e) {
      let t = this.parser.parseInline(e.tokens),
        n = e.header ? `th` : `td`;
      return (
        (e.align ? `<${n} align="${e.align}">` : `<${n}>`) +
        t +
        `</${n}>
`
      );
    }
    strong({ tokens: e }) {
      return `<strong>${this.parser.parseInline(e)}</strong>`;
    }
    em({ tokens: e }) {
      return `<em>${this.parser.parseInline(e)}</em>`;
    }
    codespan({ text: e }) {
      return `<code>${M(e, !0)}</code>`;
    }
    br(e) {
      return `<br>`;
    }
    del({ tokens: e }) {
      return `<del>${this.parser.parseInline(e)}</del>`;
    }
    link({ href: e, title: t, tokens: n }) {
      let r = this.parser.parseInline(n),
        i = Qe(e);
      if (i === null) return r;
      e = i;
      let a = `<a href="` + e + `"`;
      return (t && (a += ` title="` + M(t) + `"`), (a += `>` + r + `</a>`), a);
    }
    image({ href: e, title: t, text: n, tokens: r }) {
      r && (n = this.parser.parseInline(r, this.parser.textRenderer));
      let i = Qe(e);
      if (i === null) return M(n);
      e = i;
      let a = `<img src="${e}" alt="${M(n)}"`;
      return (t && (a += ` title="${M(t)}"`), (a += `>`), a);
    }
    text(e) {
      return `tokens` in e && e.tokens
        ? this.parser.parseInline(e.tokens)
        : `escaped` in e && e.escaped
          ? e.text
          : M(e.text);
    }
  },
  ot = class {
    strong({ text: e }) {
      return e;
    }
    em({ text: e }) {
      return e;
    }
    codespan({ text: e }) {
      return e;
    }
    del({ text: e }) {
      return e;
    }
    html({ text: e }) {
      return e;
    }
    text({ text: e }) {
      return e;
    }
    link({ text: e }) {
      return `` + e;
    }
    image({ text: e }) {
      return `` + e;
    }
    br() {
      return ``;
    }
    checkbox({ raw: e }) {
      return e;
    }
  },
  I = class e {
    constructor(e) {
      (c(this, `options`, void 0),
        c(this, `renderer`, void 0),
        c(this, `textRenderer`, void 0),
        (this.options = e || m),
        (this.options.renderer = this.options.renderer || new F()),
        (this.renderer = this.options.renderer),
        (this.renderer.options = this.options),
        (this.renderer.parser = this),
        (this.textRenderer = new ot()));
    }
    static parse(t, n) {
      return new e(n).parse(t);
    }
    static parseInline(t, n) {
      return new e(n).parseInline(t);
    }
    parse(e) {
      this.renderer.parser = this;
      let t = ``;
      for (let r = 0; r < e.length; r++) {
        var n;
        let i = e[r];
        if (
          !(
            (n = this.options.extensions) == null || (n = n.renderers) == null
          ) &&
          n[i.type]
        ) {
          let e = i,
            n = this.options.extensions.renderers[e.type].call(
              { parser: this },
              e,
            );
          if (
            n !== !1 ||
            ![
              `space`,
              `hr`,
              `heading`,
              `code`,
              `table`,
              `blockquote`,
              `list`,
              `html`,
              `def`,
              `paragraph`,
              `text`,
            ].includes(e.type)
          ) {
            t += n || ``;
            continue;
          }
        }
        let a = i;
        switch (a.type) {
          case `space`:
            t += this.renderer.space(a);
            break;
          case `hr`:
            t += this.renderer.hr(a);
            break;
          case `heading`:
            t += this.renderer.heading(a);
            break;
          case `code`:
            t += this.renderer.code(a);
            break;
          case `table`:
            t += this.renderer.table(a);
            break;
          case `blockquote`:
            t += this.renderer.blockquote(a);
            break;
          case `list`:
            t += this.renderer.list(a);
            break;
          case `checkbox`:
            t += this.renderer.checkbox(a);
            break;
          case `html`:
            t += this.renderer.html(a);
            break;
          case `def`:
            t += this.renderer.def(a);
            break;
          case `paragraph`:
            t += this.renderer.paragraph(a);
            break;
          case `text`:
            t += this.renderer.text(a);
            break;
          default: {
            let e = `Token with "` + a.type + `" type was not found.`;
            if (this.options.silent) return (console.error(e), ``);
            throw Error(e);
          }
        }
      }
      return t;
    }
    parseInline(e, t = this.renderer) {
      this.renderer.parser = this;
      let n = ``;
      for (let i = 0; i < e.length; i++) {
        var r;
        let a = e[i];
        if (
          !(
            (r = this.options.extensions) == null || (r = r.renderers) == null
          ) &&
          r[a.type]
        ) {
          let e = this.options.extensions.renderers[a.type].call(
            { parser: this },
            a,
          );
          if (
            e !== !1 ||
            ![
              `escape`,
              `html`,
              `link`,
              `image`,
              `strong`,
              `em`,
              `codespan`,
              `br`,
              `del`,
              `text`,
            ].includes(a.type)
          ) {
            n += e || ``;
            continue;
          }
        }
        let o = a;
        switch (o.type) {
          case `escape`:
            n += t.text(o);
            break;
          case `html`:
            n += t.html(o);
            break;
          case `link`:
            n += t.link(o);
            break;
          case `image`:
            n += t.image(o);
            break;
          case `checkbox`:
            n += t.checkbox(o);
            break;
          case `strong`:
            n += t.strong(o);
            break;
          case `em`:
            n += t.em(o);
            break;
          case `codespan`:
            n += t.codespan(o);
            break;
          case `br`:
            n += t.br(o);
            break;
          case `del`:
            n += t.del(o);
            break;
          case `text`:
            n += t.text(o);
            break;
          default: {
            let e = `Token with "` + o.type + `" type was not found.`;
            if (this.options.silent) return (console.error(e), ``);
            throw Error(e);
          }
        }
      }
      return n;
    }
  },
  st =
    ((f = class {
      constructor(e) {
        (c(this, `options`, void 0),
          c(this, `block`, void 0),
          (this.options = e || m));
      }
      preprocess(e) {
        return e;
      }
      postprocess(e) {
        return e;
      }
      processAllTokens(e) {
        return e;
      }
      emStrongMask(e) {
        return e;
      }
      provideLexer(e = this.block) {
        return e ? P.lex : P.lexInline;
      }
      provideParser(e = this.block) {
        return e ? I.parse : I.parseInline;
      }
    }),
    c(
      f,
      `passThroughHooks`,
      new Set([
        `preprocess`,
        `postprocess`,
        `processAllTokens`,
        `emStrongMask`,
      ]),
    ),
    c(
      f,
      `passThroughHooksRespectAsync`,
      new Set([`preprocess`, `postprocess`, `processAllTokens`]),
    ),
    f),
  L = new (class {
    constructor(...e) {
      (c(this, `defaults`, p()),
        c(this, `options`, this.setOptions),
        c(this, `parse`, this.parseMarkdown(!0)),
        c(this, `parseInline`, this.parseMarkdown(!1)),
        c(this, `Parser`, I),
        c(this, `Renderer`, F),
        c(this, `TextRenderer`, ot),
        c(this, `Lexer`, P),
        c(this, `Tokenizer`, at),
        c(this, `Hooks`, st),
        this.use(...e));
    }
    walkTokens(e, t) {
      let n = [];
      for (let i of e)
        switch (((n = n.concat(t.call(this, i))), i.type)) {
          case `table`: {
            let e = i;
            for (let r of e.header) n = n.concat(this.walkTokens(r.tokens, t));
            for (let r of e.rows)
              for (let e of r) n = n.concat(this.walkTokens(e.tokens, t));
            break;
          }
          case `list`: {
            let e = i;
            n = n.concat(this.walkTokens(e.items, t));
            break;
          }
          default: {
            var r;
            let e = i;
            !(
              (r = this.defaults.extensions) == null ||
              (r = r.childTokens) == null
            ) && r[e.type]
              ? this.defaults.extensions.childTokens[e.type].forEach((r) => {
                  let i = e[r].flat(1 / 0);
                  n = n.concat(this.walkTokens(i, t));
                })
              : e.tokens && (n = n.concat(this.walkTokens(e.tokens, t)));
          }
        }
      return n;
    }
    use(...e) {
      let t = this.defaults.extensions || { renderers: {}, childTokens: {} };
      return (
        e.forEach((e) => {
          let n = o({}, e);
          if (
            ((n.async = this.defaults.async || n.async || !1),
            e.extensions &&
              (e.extensions.forEach((e) => {
                if (!e.name) throw Error(`extension name required`);
                if (`renderer` in e) {
                  let n = t.renderers[e.name];
                  n
                    ? (t.renderers[e.name] = function (...t) {
                        let r = e.renderer.apply(this, t);
                        return (r === !1 && (r = n.apply(this, t)), r);
                      })
                    : (t.renderers[e.name] = e.renderer);
                }
                if (`tokenizer` in e) {
                  if (!e.level || (e.level !== `block` && e.level !== `inline`))
                    throw Error(`extension level must be 'block' or 'inline'`);
                  let n = t[e.level];
                  (n ? n.unshift(e.tokenizer) : (t[e.level] = [e.tokenizer]),
                    e.start &&
                      (e.level === `block`
                        ? t.startBlock
                          ? t.startBlock.push(e.start)
                          : (t.startBlock = [e.start])
                        : e.level === `inline` &&
                          (t.startInline
                            ? t.startInline.push(e.start)
                            : (t.startInline = [e.start]))));
                }
                `childTokens` in e &&
                  e.childTokens &&
                  (t.childTokens[e.name] = e.childTokens);
              }),
              (n.extensions = t)),
            e.renderer)
          ) {
            let t = this.defaults.renderer || new F(this.defaults);
            for (let n in e.renderer) {
              if (!(n in t)) throw Error(`renderer '${n}' does not exist`);
              if ([`options`, `parser`].includes(n)) continue;
              let r = n,
                i = e.renderer[r],
                a = t[r];
              t[r] = (...e) => {
                let n = i.apply(t, e);
                return (n === !1 && (n = a.apply(t, e)), n || ``);
              };
            }
            n.renderer = t;
          }
          if (e.tokenizer) {
            let t = this.defaults.tokenizer || new at(this.defaults);
            for (let n in e.tokenizer) {
              if (!(n in t)) throw Error(`tokenizer '${n}' does not exist`);
              if ([`options`, `rules`, `lexer`].includes(n)) continue;
              let r = n,
                i = e.tokenizer[r],
                a = t[r];
              t[r] = (...e) => {
                let n = i.apply(t, e);
                return (n === !1 && (n = a.apply(t, e)), n);
              };
            }
            n.tokenizer = t;
          }
          if (e.hooks) {
            let t = this.defaults.hooks || new st();
            for (let n in e.hooks) {
              if (!(n in t)) throw Error(`hook '${n}' does not exist`);
              if ([`options`, `block`].includes(n)) continue;
              let r = n,
                i = e.hooks[r],
                a = t[r];
              st.passThroughHooks.has(n)
                ? (t[r] = (e) => {
                    if (
                      this.defaults.async &&
                      st.passThroughHooksRespectAsync.has(n)
                    )
                      return l(function* () {
                        let n = yield i.call(t, e);
                        return a.call(t, n);
                      })();
                    let r = i.call(t, e);
                    return a.call(t, r);
                  })
                : (t[r] = (...e) => {
                    if (this.defaults.async)
                      return l(function* () {
                        let n = yield i.apply(t, e);
                        return (n === !1 && (n = yield a.apply(t, e)), n);
                      })();
                    let n = i.apply(t, e);
                    return (n === !1 && (n = a.apply(t, e)), n);
                  });
            }
            n.hooks = t;
          }
          if (e.walkTokens) {
            let t = this.defaults.walkTokens,
              r = e.walkTokens;
            n.walkTokens = function (e) {
              let n = [];
              return (
                n.push(r.call(this, e)),
                t && (n = n.concat(t.call(this, e))),
                n
              );
            };
          }
          this.defaults = o(o({}, this.defaults), n);
        }),
        this
      );
    }
    setOptions(e) {
      return ((this.defaults = o(o({}, this.defaults), e)), this);
    }
    lexer(e, t) {
      return P.lex(e, t == null ? this.defaults : t);
    }
    parser(e, t) {
      return I.parse(e, t == null ? this.defaults : t);
    }
    parseMarkdown(e) {
      var t = this;
      return (n, r) => {
        let i = o({}, r),
          a = o(o({}, this.defaults), i),
          s = this.onError(!!a.silent, !!a.async);
        if (this.defaults.async === !0 && i.async === !1)
          return s(
            Error(
              `marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise.`,
            ),
          );
        if (typeof n > `u` || n === null)
          return s(Error(`marked(): input parameter is undefined or null`));
        if (typeof n != `string`)
          return s(
            Error(
              `marked(): input parameter is of type ` +
                Object.prototype.toString.call(n) +
                `, string expected`,
            ),
          );
        if ((a.hooks && ((a.hooks.options = a), (a.hooks.block = e)), a.async))
          return l(function* () {
            let r = a.hooks ? yield a.hooks.preprocess(n) : n,
              i = yield (
                a.hooks
                  ? yield a.hooks.provideLexer(e)
                  : e
                    ? P.lex
                    : P.lexInline
              )(r, a),
              o = a.hooks ? yield a.hooks.processAllTokens(i) : i;
            a.walkTokens && (yield Promise.all(t.walkTokens(o, a.walkTokens)));
            let s = yield (
              a.hooks
                ? yield a.hooks.provideParser(e)
                : e
                  ? I.parse
                  : I.parseInline
            )(o, a);
            return a.hooks ? yield a.hooks.postprocess(s) : s;
          })().catch(s);
        try {
          a.hooks && (n = a.hooks.preprocess(n));
          let t = (a.hooks ? a.hooks.provideLexer(e) : e ? P.lex : P.lexInline)(
            n,
            a,
          );
          (a.hooks && (t = a.hooks.processAllTokens(t)),
            a.walkTokens && this.walkTokens(t, a.walkTokens));
          let r = (
            a.hooks ? a.hooks.provideParser(e) : e ? I.parse : I.parseInline
          )(t, a);
          return (a.hooks && (r = a.hooks.postprocess(r)), r);
        } catch (e) {
          return s(e);
        }
      };
    }
    onError(e, t) {
      return (n) => {
        if (
          ((n.message += `
Please report this to https://github.com/markedjs/marked.`),
          e)
        ) {
          let e =
            `<p>An error occurred:</p><pre>` + M(n.message + ``, !0) + `</pre>`;
          return t ? Promise.resolve(e) : e;
        }
        if (t) return Promise.reject(n);
        throw n;
      };
    }
  })();
function R(e, t) {
  return L.parse(e, t);
}
((R.options = R.setOptions =
  function (e) {
    return (L.setOptions(e), (R.defaults = L.defaults), ne(R.defaults), R);
  }),
  (R.getDefaults = p),
  (R.defaults = m),
  (R.use = function (...e) {
    return (L.use(...e), (R.defaults = L.defaults), ne(R.defaults), R);
  }),
  (R.walkTokens = function (e, t) {
    return L.walkTokens(e, t);
  }),
  (R.parseInline = L.parseInline),
  (R.Parser = I),
  (R.parser = I.parse),
  (R.Renderer = F),
  (R.TextRenderer = ot),
  (R.Lexer = P),
  (R.lexer = P.lex),
  (R.Tokenizer = at),
  (R.Hooks = st),
  (R.parse = R),
  R.options,
  R.setOptions,
  R.use,
  R.walkTokens,
  R.parseInline,
  I.parse,
  P.lex);
function ct(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function lt(e) {
  if (Array.isArray(e)) return e;
}
function ut(e, t) {
  var n =
    e == null
      ? null
      : (typeof Symbol < `u` && e[Symbol.iterator]) || e[`@@iterator`];
  if (n != null) {
    var r,
      i,
      a,
      o,
      s = [],
      c = !0,
      l = !1;
    try {
      if (((a = (n = n.call(e)).next), t !== 0))
        for (
          ;
          !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== t);
          c = !0
        );
    } catch (e) {
      ((l = !0), (i = e));
    } finally {
      try {
        if (!c && n.return != null && ((o = n.return()), Object(o) !== o))
          return;
      } finally {
        if (l) throw i;
      }
    }
    return s;
  }
}
function dt() {
  throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ft(e, t) {
  return lt(e) || ut(e, t) || pt(e, t) || dt();
}
function pt(e, t) {
  if (e) {
    if (typeof e == `string`) return ct(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return (
      n === `Object` && e.constructor && (n = e.constructor.name),
      n === `Map` || n === `Set`
        ? Array.from(e)
        : n === `Arguments` ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          ? ct(e, t)
          : void 0
    );
  }
}
var mt = Object.entries,
  z = Object.setPrototypeOf,
  ht = Object.isFrozen,
  gt = Object.getPrototypeOf,
  _t = Object.getOwnPropertyDescriptor,
  B = Object.freeze,
  V = Object.seal,
  vt = Object.create,
  yt = typeof Reflect < `u` && Reflect,
  bt = yt.apply,
  xt = yt.construct;
(B ||
  (B = function (e) {
    return e;
  }),
  V ||
    (V = function (e) {
      return e;
    }),
  bt ||
    (bt = function (e, t) {
      var n = [...arguments].slice(2);
      return e.apply(t, n);
    }),
  xt ||
    (xt = function (e) {
      return new e(...[...arguments].slice(1));
    }));
var St = G(Array.prototype.forEach),
  Ct = G(Array.prototype.lastIndexOf),
  wt = G(Array.prototype.pop),
  Tt = G(Array.prototype.push),
  Et = G(Array.prototype.splice),
  Dt = Array.isArray,
  Ot = G(String.prototype.toLowerCase),
  kt = G(String.prototype.toString),
  At = G(String.prototype.match),
  jt = G(String.prototype.replace),
  Mt = G(String.prototype.indexOf),
  Nt = G(String.prototype.trim),
  Pt = G(Number.prototype.toString),
  Ft = G(Boolean.prototype.toString),
  It = typeof BigInt > `u` ? null : G(BigInt.prototype.toString),
  H = typeof Symbol > `u` ? null : G(Symbol.prototype.toString),
  U = G(Object.prototype.hasOwnProperty),
  Lt = G(Object.prototype.toString),
  W = G(RegExp.prototype.test),
  Rt = zt(TypeError);
function G(e) {
  return function (t) {
    t instanceof RegExp && (t.lastIndex = 0);
    var n = [...arguments].slice(1);
    return bt(e, t, n);
  };
}
function zt(e) {
  return function () {
    return xt(e, [...arguments]);
  };
}
function K(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Ot;
  if ((z && z(e, null), !Dt(t))) return e;
  let r = t.length;
  for (; r--;) {
    let i = t[r];
    if (typeof i == `string`) {
      let e = n(i);
      e !== i && (ht(t) || (t[r] = e), (i = e));
    }
    e[i] = !0;
  }
  return e;
}
function Bt(e) {
  for (let t = 0; t < e.length; t++) U(e, t) || (e[t] = null);
  return e;
}
function q(e) {
  let t = vt(null);
  for (let r of mt(e)) {
    var n = ft(r, 2);
    let i = n[0],
      a = n[1];
    U(e, i) &&
      (Dt(a)
        ? (t[i] = Bt(a))
        : a && typeof a == `object` && a.constructor === Object
          ? (t[i] = q(a))
          : (t[i] = a));
  }
  return t;
}
function Vt(e) {
  switch (typeof e) {
    case `string`:
      return e;
    case `number`:
      return Pt(e);
    case `boolean`:
      return Ft(e);
    case `bigint`:
      return It ? It(e) : `0`;
    case `symbol`:
      return H ? H(e) : `Symbol()`;
    case `undefined`:
      return Lt(e);
    case `function`:
    case `object`: {
      if (e === null) return Lt(e);
      let t = e,
        n = J(t, `toString`);
      if (typeof n == `function`) {
        let e = n(t);
        return typeof e == `string` ? e : Lt(e);
      }
      return Lt(e);
    }
    default:
      return Lt(e);
  }
}
function J(e, t) {
  for (; e !== null;) {
    let n = _t(e, t);
    if (n) {
      if (n.get) return G(n.get);
      if (typeof n.value == `function`) return G(n.value);
    }
    e = gt(e);
  }
  function n() {
    return null;
  }
  return n;
}
function Ht(e) {
  try {
    return (W(e, ``), !0);
  } catch (e) {
    return !1;
  }
}
var Ut = B(
    `a.abbr.acronym.address.area.article.aside.audio.b.bdi.bdo.big.blink.blockquote.body.br.button.canvas.caption.center.cite.code.col.colgroup.content.data.datalist.dd.decorator.del.details.dfn.dialog.dir.div.dl.dt.element.em.fieldset.figcaption.figure.font.footer.form.h1.h2.h3.h4.h5.h6.head.header.hgroup.hr.html.i.img.input.ins.kbd.label.legend.li.main.map.mark.marquee.menu.menuitem.meter.nav.nobr.ol.optgroup.option.output.p.picture.pre.progress.q.rp.rt.ruby.s.samp.search.section.select.shadow.slot.small.source.spacer.span.strike.strong.style.sub.summary.sup.table.tbody.td.template.textarea.tfoot.th.thead.time.tr.track.tt.u.ul.var.video.wbr`.split(
      `.`,
    ),
  ),
  Wt = B(
    `svg.a.altglyph.altglyphdef.altglyphitem.animatecolor.animatemotion.animatetransform.circle.clippath.defs.desc.ellipse.enterkeyhint.exportparts.filter.font.g.glyph.glyphref.hkern.image.inputmode.line.lineargradient.marker.mask.metadata.mpath.part.path.pattern.polygon.polyline.radialgradient.rect.stop.style.switch.symbol.text.textpath.title.tref.tspan.view.vkern`.split(
      `.`,
    ),
  ),
  Gt = B([
    `feBlend`,
    `feColorMatrix`,
    `feComponentTransfer`,
    `feComposite`,
    `feConvolveMatrix`,
    `feDiffuseLighting`,
    `feDisplacementMap`,
    `feDistantLight`,
    `feDropShadow`,
    `feFlood`,
    `feFuncA`,
    `feFuncB`,
    `feFuncG`,
    `feFuncR`,
    `feGaussianBlur`,
    `feImage`,
    `feMerge`,
    `feMergeNode`,
    `feMorphology`,
    `feOffset`,
    `fePointLight`,
    `feSpecularLighting`,
    `feSpotLight`,
    `feTile`,
    `feTurbulence`,
  ]),
  Kt = B([
    `animate`,
    `color-profile`,
    `cursor`,
    `discard`,
    `font-face`,
    `font-face-format`,
    `font-face-name`,
    `font-face-src`,
    `font-face-uri`,
    `foreignobject`,
    `hatch`,
    `hatchpath`,
    `mesh`,
    `meshgradient`,
    `meshpatch`,
    `meshrow`,
    `missing-glyph`,
    `script`,
    `set`,
    `solidcolor`,
    `unknown`,
    `use`,
  ]),
  qt = B(
    `math.menclose.merror.mfenced.mfrac.mglyph.mi.mlabeledtr.mmultiscripts.mn.mo.mover.mpadded.mphantom.mroot.mrow.ms.mspace.msqrt.mstyle.msub.msup.msubsup.mtable.mtd.mtext.mtr.munder.munderover.mprescripts`.split(
      `.`,
    ),
  ),
  Jt = B([
    `maction`,
    `maligngroup`,
    `malignmark`,
    `mlongdiv`,
    `mscarries`,
    `mscarry`,
    `msgroup`,
    `mstack`,
    `msline`,
    `msrow`,
    `semantics`,
    `annotation`,
    `annotation-xml`,
    `mprescripts`,
    `none`,
  ]),
  Yt = B([`#text`]),
  Xt = B(
    `accept.action.align.alt.autocapitalize.autocomplete.autopictureinpicture.autoplay.background.bgcolor.border.capture.cellpadding.cellspacing.checked.cite.class.clear.color.cols.colspan.command.commandfor.controls.controlslist.coords.crossorigin.datetime.decoding.default.dir.disabled.disablepictureinpicture.disableremoteplayback.download.draggable.enctype.enterkeyhint.exportparts.face.for.headers.height.hidden.high.href.hreflang.id.inert.inputmode.integrity.ismap.kind.label.lang.list.loading.loop.low.max.maxlength.media.method.min.minlength.multiple.muted.name.nonce.noshade.novalidate.nowrap.open.optimum.part.pattern.placeholder.playsinline.popover.popovertarget.popovertargetaction.poster.preload.pubdate.radiogroup.readonly.rel.required.rev.reversed.role.rows.rowspan.spellcheck.scope.selected.shape.size.sizes.slot.span.srclang.start.src.srcset.step.style.summary.tabindex.title.translate.type.usemap.valign.value.width.wrap.xmlns`.split(
      `.`,
    ),
  ),
  Zt = B(
    `accent-height.accumulate.additive.alignment-baseline.amplitude.ascent.attributename.attributetype.azimuth.basefrequency.baseline-shift.begin.bias.by.class.clip.clippathunits.clip-path.clip-rule.color.color-interpolation.color-interpolation-filters.color-profile.color-rendering.cx.cy.d.dx.dy.diffuseconstant.direction.display.divisor.dur.edgemode.elevation.end.exponent.fill.fill-opacity.fill-rule.filter.filterunits.flood-color.flood-opacity.font-family.font-size.font-size-adjust.font-stretch.font-style.font-variant.font-weight.fx.fy.g1.g2.glyph-name.glyphref.gradientunits.gradienttransform.height.href.id.image-rendering.in.in2.intercept.k.k1.k2.k3.k4.kerning.keypoints.keysplines.keytimes.lang.lengthadjust.letter-spacing.kernelmatrix.kernelunitlength.lighting-color.local.marker-end.marker-mid.marker-start.markerheight.markerunits.markerwidth.maskcontentunits.maskunits.max.mask.mask-type.media.method.mode.min.name.numoctaves.offset.operator.opacity.order.orient.orientation.origin.overflow.paint-order.path.pathlength.patterncontentunits.patterntransform.patternunits.points.preservealpha.preserveaspectratio.primitiveunits.r.rx.ry.radius.refx.refy.repeatcount.repeatdur.restart.result.rotate.scale.seed.shape-rendering.slope.specularconstant.specularexponent.spreadmethod.startoffset.stddeviation.stitchtiles.stop-color.stop-opacity.stroke-dasharray.stroke-dashoffset.stroke-linecap.stroke-linejoin.stroke-miterlimit.stroke-opacity.stroke.stroke-width.style.surfacescale.systemlanguage.tabindex.tablevalues.targetx.targety.transform.transform-origin.text-anchor.text-decoration.text-rendering.textlength.type.u1.u2.unicode.values.viewbox.visibility.version.vert-adv-y.vert-origin-x.vert-origin-y.width.word-spacing.wrap.writing-mode.xchannelselector.ychannelselector.x.x1.x2.xmlns.y.y1.y2.z.zoomandpan`.split(
      `.`,
    ),
  ),
  Qt = B(
    `accent.accentunder.align.bevelled.close.columnalign.columnlines.columnspacing.columnspan.denomalign.depth.dir.display.displaystyle.encoding.fence.frame.height.href.id.largeop.length.linethickness.lquote.lspace.mathbackground.mathcolor.mathsize.mathvariant.maxsize.minsize.movablelimits.notation.numalign.open.rowalign.rowlines.rowspacing.rowspan.rspace.rquote.scriptlevel.scriptminsize.scriptsizemultiplier.selection.separator.separators.stretchy.subscriptshift.supscriptshift.symmetric.voffset.width.xmlns`.split(
      `.`,
    ),
  ),
  $t = B([`xlink:href`, `xml:id`, `xlink:title`, `xml:space`, `xmlns:xlink`]),
  en = V(/{{[\w\W]*|^[\w\W]*}}/g),
  tn = V(/<%[\w\W]*|^[\w\W]*%>/g),
  nn = V(/\${[\w\W]*/g),
  rn = V(/^data-[\-\w.\u00B7-\uFFFF]+$/),
  an = V(/^aria-[\-\w]+$/),
  on = V(
    /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i,
  ),
  sn = V(/^(?:\w+script|data):/i),
  cn = V(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),
  ln = V(/^html$/i),
  un = V(/^[a-z][.\w]*(-[.\w]+)+$/i),
  dn = V(/<[/\w!]/g),
  fn = V(/<[/\w]/g),
  pn = V(/<\/no(script|embed|frames)/i),
  mn = V(/\/>/i),
  Y = {
    element: 1,
    attribute: 2,
    text: 3,
    cdataSection: 4,
    entityReference: 5,
    entityNode: 6,
    processingInstruction: 7,
    comment: 8,
    document: 9,
    documentType: 10,
    documentFragment: 11,
    notation: 12,
  },
  hn = function () {
    return typeof window > `u` ? null : window;
  },
  gn = function (e, t) {
    if (typeof e != `object` || typeof e.createPolicy != `function`)
      return null;
    let n = null,
      r = `data-tt-policy-suffix`;
    t && t.hasAttribute(r) && (n = t.getAttribute(r));
    let i = `dompurify` + (n ? `#` + n : ``);
    try {
      return e.createPolicy(i, {
        createHTML(e) {
          return e;
        },
        createScriptURL(e) {
          return e;
        },
      });
    } catch (e) {
      return (
        console.warn(`TrustedTypes policy ` + i + ` could not be created.`),
        null
      );
    }
  },
  _n = function () {
    return {
      afterSanitizeAttributes: [],
      afterSanitizeElements: [],
      afterSanitizeShadowDOM: [],
      beforeSanitizeAttributes: [],
      beforeSanitizeElements: [],
      beforeSanitizeShadowDOM: [],
      uponSanitizeAttribute: [],
      uponSanitizeElement: [],
      uponSanitizeShadowNode: [],
    };
  },
  vn = function (e, t, n, r) {
    return U(e, t) && Dt(e[t])
      ? K(r.base ? q(r.base) : {}, e[t], r.transform)
      : n;
  };
function yn() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : hn(),
    t = (e) => yn(e);
  if (
    ((t.version = `3.4.11`),
    (t.removed = []),
    !e || !e.document || e.document.nodeType !== Y.document || !e.Element)
  )
    return ((t.isSupported = !1), t);
  let n = e.document,
    r = n,
    i = r.currentScript;
  e.DocumentFragment;
  let a = e.HTMLTemplateElement,
    o = e.Node,
    s = e.Element,
    c = e.NodeFilter;
  (e.NamedNodeMap === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap),
    e.HTMLFormElement);
  let l = e.DOMParser,
    u = e.trustedTypes,
    d = s.prototype,
    ee = J(d, `cloneNode`),
    te = J(d, `remove`),
    f = J(d, `nextSibling`),
    p = J(d, `childNodes`),
    m = J(d, `parentNode`),
    ne = J(d, `shadowRoot`),
    h = J(d, `attributes`),
    g = o && o.prototype ? J(o.prototype, `nodeType`) : null,
    _ = o && o.prototype ? J(o.prototype, `nodeName`) : null;
  if (typeof a == `function`) {
    let e = n.createElement(`template`);
    e.content && e.content.ownerDocument && (n = e.content.ownerDocument);
  }
  let v,
    y = ``,
    re,
    ie = !1,
    ae = 0,
    oe = function () {
      if (ae > 0)
        throw Rt(
          `A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.`,
        );
    },
    se = function (e) {
      (oe(), ae++);
      try {
        return v.createHTML(e);
      } finally {
        ae--;
      }
    },
    ce = function (e) {
      (oe(), ae++);
      try {
        return v.createScriptURL(e);
      } finally {
        ae--;
      }
    },
    le = function () {
      return (ie || ((re = gn(u, i)), (ie = !0)), re);
    },
    ue = n,
    de = ue.implementation,
    fe = ue.createNodeIterator,
    pe = ue.createDocumentFragment,
    me = ue.getElementsByTagName,
    he = r.importNode,
    b = _n();
  t.isSupported =
    typeof mt == `function` &&
    typeof m == `function` &&
    de &&
    de.createHTMLDocument !== void 0;
  let ge = en,
    _e = tn,
    ve = nn,
    ye = rn,
    be = an,
    xe = sn,
    Se = cn,
    Ce = un,
    we = on,
    x = null,
    Te = K({}, [...Ut, ...Wt, ...Gt, ...qt, ...Yt]),
    S = null,
    Ee = K({}, [...Xt, ...Zt, ...Qt, ...$t]),
    C = Object.seal(
      vt(null, {
        tagNameCheck: {
          writable: !0,
          configurable: !1,
          enumerable: !0,
          value: null,
        },
        attributeNameCheck: {
          writable: !0,
          configurable: !1,
          enumerable: !0,
          value: null,
        },
        allowCustomizedBuiltInElements: {
          writable: !0,
          configurable: !1,
          enumerable: !0,
          value: !1,
        },
      }),
    ),
    w = null,
    De = null,
    T = Object.seal(
      vt(null, {
        tagCheck: {
          writable: !0,
          configurable: !1,
          enumerable: !0,
          value: null,
        },
        attributeCheck: {
          writable: !0,
          configurable: !1,
          enumerable: !0,
          value: null,
        },
      }),
    ),
    Oe = !0,
    ke = !0,
    Ae = !1,
    je = !0,
    E = !1,
    Me = !0,
    D = !1,
    Ne = !1,
    Pe = null,
    Fe = null,
    Ie = !1,
    Le = !1,
    Re = !1,
    ze = !1,
    Be = !0,
    Ve = !1,
    He = `user-content-`,
    Ue = !0,
    We = !1,
    O = {},
    k = null,
    Ge = K(
      {},
      `annotation-xml.audio.colgroup.desc.foreignobject.head.iframe.math.mi.mn.mo.ms.mtext.noembed.noframes.noscript.plaintext.script.selectedcontent.style.svg.template.thead.title.video.xmp`.split(
        `.`,
      ),
    ),
    Ke = null,
    qe = K({}, [`audio`, `video`, `img`, `source`, `image`, `track`]),
    Je = null,
    Ye = K({}, [
      `alt`,
      `class`,
      `for`,
      `id`,
      `label`,
      `name`,
      `pattern`,
      `placeholder`,
      `role`,
      `summary`,
      `title`,
      `value`,
      `style`,
      `xmlns`,
    ]),
    Xe = `http://www.w3.org/1998/Math/MathML`,
    A = `http://www.w3.org/2000/svg`,
    j = `http://www.w3.org/1999/xhtml`,
    Ze = j,
    M = !1,
    Qe = null,
    $e = K({}, [Xe, A, j], kt),
    N = B([`mi`, `mo`, `mn`, `ms`, `mtext`]),
    et = K({}, N),
    tt = B([`annotation-xml`]),
    nt = K({}, tt),
    rt = K({}, [`title`, `style`, `font`, `a`, `script`]),
    it = null,
    at = [`application/xhtml+xml`, `text/html`],
    P = null,
    F = null,
    ot = n.createElement(`form`),
    I = function (e) {
      return e instanceof RegExp || e instanceof Function;
    },
    st = function () {
      let e =
        arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      if (F && F === e) return;
      ((!e || typeof e != `object`) && (e = {}),
        (e = q(e)),
        (it =
          at.indexOf(e.PARSER_MEDIA_TYPE) === -1
            ? `text/html`
            : e.PARSER_MEDIA_TYPE),
        (P = it === `application/xhtml+xml` ? kt : Ot),
        (x = vn(e, `ALLOWED_TAGS`, Te, { transform: P })),
        (S = vn(e, `ALLOWED_ATTR`, Ee, { transform: P })),
        (Qe = vn(e, `ALLOWED_NAMESPACES`, $e, { transform: kt })),
        (Je = vn(e, `ADD_URI_SAFE_ATTR`, Ye, { transform: P, base: Ye })),
        (Ke = vn(e, `ADD_DATA_URI_TAGS`, qe, { transform: P, base: qe })),
        (k = vn(e, `FORBID_CONTENTS`, Ge, { transform: P })),
        (w = vn(e, `FORBID_TAGS`, q({}), { transform: P })),
        (De = vn(e, `FORBID_ATTR`, q({}), { transform: P })),
        (O = U(e, `USE_PROFILES`)
          ? e.USE_PROFILES && typeof e.USE_PROFILES == `object`
            ? q(e.USE_PROFILES)
            : e.USE_PROFILES
          : !1),
        (Oe = e.ALLOW_ARIA_ATTR !== !1),
        (ke = e.ALLOW_DATA_ATTR !== !1),
        (Ae = e.ALLOW_UNKNOWN_PROTOCOLS || !1),
        (je = e.ALLOW_SELF_CLOSE_IN_ATTR !== !1),
        (E = e.SAFE_FOR_TEMPLATES || !1),
        (Me = e.SAFE_FOR_XML !== !1),
        (D = e.WHOLE_DOCUMENT || !1),
        (Le = e.RETURN_DOM || !1),
        (Re = e.RETURN_DOM_FRAGMENT || !1),
        (ze = e.RETURN_TRUSTED_TYPE || !1),
        (Ie = e.FORCE_BODY || !1),
        (Be = e.SANITIZE_DOM !== !1),
        (Ve = e.SANITIZE_NAMED_PROPS || !1),
        (Ue = e.KEEP_CONTENT !== !1),
        (We = e.IN_PLACE || !1),
        (we = Ht(e.ALLOWED_URI_REGEXP) ? e.ALLOWED_URI_REGEXP : on),
        (Ze = typeof e.NAMESPACE == `string` ? e.NAMESPACE : j),
        (et =
          U(e, `MATHML_TEXT_INTEGRATION_POINTS`) &&
          e.MATHML_TEXT_INTEGRATION_POINTS &&
          typeof e.MATHML_TEXT_INTEGRATION_POINTS == `object`
            ? q(e.MATHML_TEXT_INTEGRATION_POINTS)
            : K({}, N)),
        (nt =
          U(e, `HTML_INTEGRATION_POINTS`) &&
          e.HTML_INTEGRATION_POINTS &&
          typeof e.HTML_INTEGRATION_POINTS == `object`
            ? q(e.HTML_INTEGRATION_POINTS)
            : K({}, tt)));
      let t =
        U(e, `CUSTOM_ELEMENT_HANDLING`) &&
        e.CUSTOM_ELEMENT_HANDLING &&
        typeof e.CUSTOM_ELEMENT_HANDLING == `object`
          ? q(e.CUSTOM_ELEMENT_HANDLING)
          : vt(null);
      if (
        ((C = vt(null)),
        U(t, `tagNameCheck`) &&
          I(t.tagNameCheck) &&
          (C.tagNameCheck = t.tagNameCheck),
        U(t, `attributeNameCheck`) &&
          I(t.attributeNameCheck) &&
          (C.attributeNameCheck = t.attributeNameCheck),
        U(t, `allowCustomizedBuiltInElements`) &&
          typeof t.allowCustomizedBuiltInElements == `boolean` &&
          (C.allowCustomizedBuiltInElements = t.allowCustomizedBuiltInElements),
        V(C),
        E && (ke = !1),
        Re && (Le = !0),
        O &&
          ((x = K({}, Yt)),
          (S = vt(null)),
          O.html === !0 && (K(x, Ut), K(S, Xt)),
          O.svg === !0 && (K(x, Wt), K(S, Zt), K(S, $t)),
          O.svgFilters === !0 && (K(x, Gt), K(S, Zt), K(S, $t)),
          O.mathMl === !0 && (K(x, qt), K(S, Qt), K(S, $t))),
        (T.tagCheck = null),
        (T.attributeCheck = null),
        U(e, `ADD_TAGS`) &&
          (typeof e.ADD_TAGS == `function`
            ? (T.tagCheck = e.ADD_TAGS)
            : Dt(e.ADD_TAGS) && (x === Te && (x = q(x)), K(x, e.ADD_TAGS, P))),
        U(e, `ADD_ATTR`) &&
          (typeof e.ADD_ATTR == `function`
            ? (T.attributeCheck = e.ADD_ATTR)
            : Dt(e.ADD_ATTR) && (S === Ee && (S = q(S)), K(S, e.ADD_ATTR, P))),
        U(e, `ADD_URI_SAFE_ATTR`) &&
          Dt(e.ADD_URI_SAFE_ATTR) &&
          K(Je, e.ADD_URI_SAFE_ATTR, P),
        U(e, `FORBID_CONTENTS`) &&
          Dt(e.FORBID_CONTENTS) &&
          (k === Ge && (k = q(k)), K(k, e.FORBID_CONTENTS, P)),
        U(e, `ADD_FORBID_CONTENTS`) &&
          Dt(e.ADD_FORBID_CONTENTS) &&
          (k === Ge && (k = q(k)), K(k, e.ADD_FORBID_CONTENTS, P)),
        Ue && (x[`#text`] = !0),
        D && K(x, [`html`, `head`, `body`]),
        x.table && (K(x, [`tbody`]), delete w.tbody),
        e.TRUSTED_TYPES_POLICY)
      ) {
        if (typeof e.TRUSTED_TYPES_POLICY.createHTML != `function`)
          throw Rt(
            `TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.`,
          );
        if (typeof e.TRUSTED_TYPES_POLICY.createScriptURL != `function`)
          throw Rt(
            `TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.`,
          );
        let t = v;
        v = e.TRUSTED_TYPES_POLICY;
        try {
          y = se(``);
        } catch (e) {
          throw ((v = t), e);
        }
      } else
        e.TRUSTED_TYPES_POLICY === null
          ? ((v = void 0), (y = ``))
          : (v === void 0 && (v = le()),
            v && typeof y == `string` && (y = se(``)));
      (B && B(e), (F = e));
    },
    L = K({}, [...Wt, ...Gt, ...Kt]),
    R = K({}, [...qt, ...Jt]),
    ct = function (e, t, n) {
      return t.namespaceURI === j
        ? e === `svg`
        : t.namespaceURI === Xe
          ? e === `svg` && (n === `annotation-xml` || et[n])
          : !!L[e];
    },
    lt = function (e, t, n) {
      return t.namespaceURI === j
        ? e === `math`
        : t.namespaceURI === A
          ? e === `math` && nt[n]
          : !!R[e];
    },
    ut = function (e, t, n) {
      return (t.namespaceURI === A && !nt[n]) ||
        (t.namespaceURI === Xe && !et[n])
        ? !1
        : !R[e] && (rt[e] || !L[e]);
    },
    dt = function (e) {
      let t = m(e);
      (!t || !t.tagName) && (t = { namespaceURI: Ze, tagName: `template` });
      let n = Ot(e.tagName),
        r = Ot(t.tagName);
      return Qe[e.namespaceURI]
        ? e.namespaceURI === A
          ? ct(n, t, r)
          : e.namespaceURI === Xe
            ? lt(n, t, r)
            : e.namespaceURI === j
              ? ut(n, t, r)
              : !!(it === `application/xhtml+xml` && Qe[e.namespaceURI])
        : !1;
    },
    ft = function (e) {
      Tt(t.removed, { element: e });
      try {
        m(e).removeChild(e);
      } catch (t) {
        if ((te(e), !m(e)))
          throw Rt(
            `a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place`,
          );
      }
    },
    pt = function (e) {
      let t = p(e);
      if (t) {
        let e = [];
        (St(t, (t) => {
          Tt(e, t);
        }),
          St(e, (e) => {
            try {
              te(e);
            } catch (e) {}
          }));
      }
      let n = h(e);
      if (n)
        for (let t = n.length - 1; t >= 0; --t) {
          let r = n[t],
            i = r && r.name;
          if (typeof i == `string`)
            try {
              e.removeAttribute(i);
            } catch (e) {}
        }
    },
    z = function (e, n) {
      try {
        Tt(t.removed, { attribute: n.getAttributeNode(e), from: n });
      } catch (e) {
        Tt(t.removed, { attribute: null, from: n });
      }
      if ((n.removeAttribute(e), e === `is`))
        if (Le || Re)
          try {
            ft(n);
          } catch (e) {}
        else
          try {
            n.setAttribute(e, ``);
          } catch (e) {}
    },
    ht = function (e) {
      let t = h(e);
      if (t)
        for (let n = t.length - 1; n >= 0; --n) {
          let r = t[n],
            i = r && r.name;
          if (!(typeof i != `string` || S[P(i)]))
            try {
              e.removeAttribute(i);
            } catch (e) {}
        }
    },
    gt = function (e) {
      let t = [e];
      for (; t.length > 0;) {
        let e = t.pop();
        (g ? g(e) : e.nodeType) === Y.element && ht(e);
        let n = p(e);
        if (n) for (let e = n.length - 1; e >= 0; --e) t.push(n[e]);
      }
    },
    _t = function (e) {
      let t = null,
        r = null;
      if (Ie) e = `<remove></remove>` + e;
      else {
        let t = At(e, /^[\r\n\t ]+/);
        r = t && t[0];
      }
      it === `application/xhtml+xml` &&
        Ze === j &&
        (e =
          `<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>` +
          e +
          `</body></html>`);
      let i = v ? se(e) : e;
      if (Ze === j)
        try {
          t = new l().parseFromString(i, it);
        } catch (e) {}
      if (!t || !t.documentElement) {
        t = de.createDocument(Ze, `template`, null);
        try {
          t.documentElement.innerHTML = M ? y : i;
        } catch (e) {}
      }
      let a = t.body || t.documentElement;
      return (
        e && r && a.insertBefore(n.createTextNode(r), a.childNodes[0] || null),
        Ze === j
          ? me.call(t, D ? `html` : `body`)[0]
          : D
            ? t.documentElement
            : a
      );
    },
    yt = function (e) {
      return fe.call(
        e.ownerDocument || e,
        e,
        c.SHOW_ELEMENT |
          c.SHOW_COMMENT |
          c.SHOW_TEXT |
          c.SHOW_PROCESSING_INSTRUCTION |
          c.SHOW_CDATA_SECTION,
        null,
      );
    },
    bt = function (e) {
      return (
        (e = jt(e, ge, ` `)),
        (e = jt(e, _e, ` `)),
        (e = jt(e, ve, ` `)),
        e
      );
    },
    xt = function (e) {
      var t;
      e.normalize();
      let n = fe.call(
          e.ownerDocument || e,
          e,
          c.SHOW_TEXT |
            c.SHOW_COMMENT |
            c.SHOW_CDATA_SECTION |
            c.SHOW_PROCESSING_INSTRUCTION,
          null,
        ),
        r = n.nextNode();
      for (; r;) ((r.data = bt(r.data)), (r = n.nextNode()));
      let i = (t = e.querySelectorAll) == null ? void 0 : t.call(e, `template`);
      i &&
        St(i, (e) => {
          Ft(e.content) && xt(e.content);
        });
    },
    Pt = function (e) {
      let t = _ ? _(e) : null;
      return typeof t != `string` || P(t) !== `form`
        ? !1
        : typeof e.nodeName != `string` ||
            typeof e.textContent != `string` ||
            typeof e.removeChild != `function` ||
            e.attributes !== h(e) ||
            typeof e.removeAttribute != `function` ||
            typeof e.setAttribute != `function` ||
            typeof e.namespaceURI != `string` ||
            typeof e.insertBefore != `function` ||
            typeof e.hasChildNodes != `function` ||
            e.nodeType !== g(e) ||
            e.childNodes !== p(e);
    },
    Ft = function (e) {
      if (!g || typeof e != `object` || !e) return !1;
      try {
        return g(e) === Y.documentFragment;
      } catch (e) {
        return !1;
      }
    },
    It = function (e) {
      if (!g || typeof e != `object` || !e) return !1;
      try {
        return typeof g(e) == `number`;
      } catch (e) {
        return !1;
      }
    };
  function H(e, n, r) {
    e.length !== 0 &&
      St(e, (e) => {
        e.call(t, n, r, F);
      });
  }
  let Lt = function (e, t) {
      return !!(
        (Me &&
          e.hasChildNodes() &&
          !It(e.firstElementChild) &&
          W(dn, e.textContent) &&
          W(dn, e.innerHTML)) ||
        (Me &&
          e.namespaceURI === j &&
          t === `style` &&
          It(e.firstElementChild)) ||
        e.nodeType === Y.processingInstruction ||
        (Me && e.nodeType === Y.comment && W(fn, e.data))
      );
    },
    G = function (e, t) {
      if (
        !w[t] &&
        X(t) &&
        ((C.tagNameCheck instanceof RegExp && W(C.tagNameCheck, t)) ||
          (C.tagNameCheck instanceof Function && C.tagNameCheck(t)))
      )
        return !1;
      if (Ue && !k[t]) {
        let t = m(e),
          n = p(e);
        if (n && t) {
          let r = n.length;
          for (let i = r - 1; i >= 0; --i) {
            let r = We ? n[i] : ee(n[i], !0);
            t.insertBefore(r, f(e));
          }
        }
      }
      return (ft(e), !0);
    },
    zt = function (e) {
      if ((H(b.beforeSanitizeElements, e, null), Pt(e))) return (ft(e), !0);
      let n = P(_ ? _(e) : e.nodeName);
      if (
        (H(b.uponSanitizeElement, e, { tagName: n, allowedTags: x }), Lt(e, n))
      )
        return (ft(e), !0);
      if (w[n] || (!(T.tagCheck instanceof Function && T.tagCheck(n)) && !x[n]))
        return G(e, n);
      if (
        ((g ? g(e) : e.nodeType) === Y.element && !dt(e)) ||
        ((n === `noscript` || n === `noembed` || n === `noframes`) &&
          W(pn, e.innerHTML))
      )
        return (ft(e), !0);
      if (E && e.nodeType === Y.text) {
        let n = bt(e.textContent);
        e.textContent !== n &&
          (Tt(t.removed, { element: e.cloneNode() }), (e.textContent = n));
      }
      return (H(b.afterSanitizeElements, e, null), !1);
    },
    Bt = function (e, t, r) {
      if (De[t] || (Be && (t === `id` || t === `name`) && (r in n || r in ot)))
        return !1;
      let i =
        S[t] ||
        (T.attributeCheck instanceof Function && T.attributeCheck(t, e));
      if (!(ke && W(ye, t)) && !(Oe && W(be, t))) {
        if (!i) {
          if (!(
            (X(e) &&
              ((C.tagNameCheck instanceof RegExp && W(C.tagNameCheck, e)) ||
                (C.tagNameCheck instanceof Function && C.tagNameCheck(e))) &&
              ((C.attributeNameCheck instanceof RegExp &&
                W(C.attributeNameCheck, t)) ||
                (C.attributeNameCheck instanceof Function &&
                  C.attributeNameCheck(t, e)))) ||
            (t === `is` &&
              C.allowCustomizedBuiltInElements &&
              ((C.tagNameCheck instanceof RegExp && W(C.tagNameCheck, r)) ||
                (C.tagNameCheck instanceof Function && C.tagNameCheck(r))))
          ))
            return !1;
        } else if (
          !Je[t] &&
          !W(we, jt(r, Se, ``)) &&
          !(
            (t === `src` || t === `xlink:href` || t === `href`) &&
            e !== `script` &&
            Mt(r, `data:`) === 0 &&
            Ke[e]
          ) &&
          !(Ae && !W(xe, jt(r, Se, ``))) &&
          r
        )
          return !1;
      }
      return !0;
    },
    bn = K({}, [
      `annotation-xml`,
      `color-profile`,
      `font-face`,
      `font-face-format`,
      `font-face-name`,
      `font-face-src`,
      `font-face-uri`,
      `missing-glyph`,
    ]),
    X = function (e) {
      return !bn[Ot(e)] && W(Ce, e);
    },
    Z = function (e, t, n, r) {
      if (
        v &&
        typeof u == `object` &&
        typeof u.getAttributeType == `function` &&
        !n
      )
        switch (u.getAttributeType(e, t)) {
          case `TrustedHTML`:
            return se(r);
          case `TrustedScriptURL`:
            return ce(r);
        }
      return r;
    },
    xn = function (e, n, r, i) {
      try {
        (r ? e.setAttributeNS(r, n, i) : e.setAttribute(n, i),
          Pt(e) ? ft(e) : wt(t.removed));
      } catch (t) {
        z(n, e);
      }
    },
    Q = function (e) {
      H(b.beforeSanitizeAttributes, e, null);
      let t = e.attributes;
      if (!t || Pt(e)) return;
      let n = {
          attrName: ``,
          attrValue: ``,
          keepAttr: !0,
          allowedAttributes: S,
          forceKeepAttr: void 0,
        },
        r = t.length,
        i = P(e.nodeName);
      for (; r--;) {
        let a = t[r],
          o = a.name,
          s = a.namespaceURI,
          c = a.value,
          l = P(o),
          u = c,
          d = o === `value` ? u : Nt(u);
        if (
          ((n.attrName = l),
          (n.attrValue = d),
          (n.keepAttr = !0),
          (n.forceKeepAttr = void 0),
          H(b.uponSanitizeAttribute, e, n),
          (d = n.attrValue),
          Ve &&
            (l === `id` || l === `name`) &&
            Mt(d, He) !== 0 &&
            (z(o, e), (d = He + d)),
          Me &&
            W(
              /((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i,
              d,
            ))
        ) {
          z(o, e);
          continue;
        }
        if (l === `attributename` && At(d, `href`)) {
          z(o, e);
          continue;
        }
        if (!n.forceKeepAttr) {
          if (!n.keepAttr) {
            z(o, e);
            continue;
          }
          if (!je && W(mn, d)) {
            z(o, e);
            continue;
          }
          if ((E && (d = bt(d)), !Bt(i, l, d))) {
            z(o, e);
            continue;
          }
          ((d = Z(i, l, s, d)), d !== u && xn(e, o, s, d));
        }
      }
      H(b.afterSanitizeAttributes, e, null);
    },
    Sn = function (e) {
      let t = null,
        n = yt(e);
      for (H(b.beforeSanitizeShadowDOM, e, null); (t = n.nextNode());)
        if (
          (H(b.uponSanitizeShadowNode, t, null),
          zt(t),
          Q(t),
          Ft(t.content) && Sn(t.content),
          (g ? g(t) : t.nodeType) === Y.element)
        ) {
          let e = ne(t);
          Ft(e) && ($(e), Sn(e));
        }
      H(b.afterSanitizeShadowDOM, e, null);
    },
    $ = function (e) {
      let t = [{ node: e, shadow: null }];
      for (; t.length > 0;) {
        let e = t.pop();
        if (e.shadow) {
          Sn(e.shadow);
          continue;
        }
        let n = e.node,
          r = (g ? g(n) : n.nodeType) === Y.element,
          i = p(n);
        if (i)
          for (let e = i.length - 1; e >= 0; --e)
            t.push({ node: i[e], shadow: null });
        if (r) {
          let e = _ ? _(n) : null;
          if (typeof e == `string` && P(e) === `template`) {
            let e = n.content;
            Ft(e) && t.push({ node: e, shadow: null });
          }
        }
        if (r) {
          let e = ne(n);
          Ft(e) && t.push({ node: null, shadow: e }, { node: e, shadow: null });
        }
      }
    };
  return (
    (t.sanitize = function (e) {
      let n =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
        i = null,
        a = null,
        o = null,
        s = null;
      if (
        ((M = !e),
        M && (e = `<!-->`),
        typeof e != `string` && !It(e) && ((e = Vt(e)), typeof e != `string`))
      )
        throw Rt(`dirty is not a string, aborting`);
      if (!t.isSupported) return e;
      (Ne ? ((x = Pe), (S = Fe)) : st(n),
        (b.uponSanitizeElement.length > 0 ||
          b.uponSanitizeAttribute.length > 0) &&
          (x = q(x)),
        b.uponSanitizeAttribute.length > 0 && (S = q(S)),
        (t.removed = []));
      let c = We && typeof e != `string` && It(e);
      if (c) {
        let t = _ ? _(e) : e.nodeName;
        if (typeof t == `string`) {
          let e = P(t);
          if (!x[e] || w[e])
            throw Rt(`root node is forbidden and cannot be sanitized in-place`);
        }
        if (Pt(e))
          throw Rt(`root node is clobbered and cannot be sanitized in-place`);
        try {
          $(e);
        } catch (t) {
          throw (pt(e), t);
        }
      } else if (It(e))
        ((i = _t(`<!---->`)),
          (a = i.ownerDocument.importNode(e, !0)),
          (a.nodeType === Y.element && a.nodeName === `BODY`) ||
          a.nodeName === `HTML`
            ? (i = a)
            : i.appendChild(a),
          $(a));
      else {
        if (!Le && !E && !D && e.indexOf(`<`) === -1)
          return v && ze ? se(e) : e;
        if (((i = _t(e)), !i)) return Le ? null : ze ? y : ``;
      }
      i && Ie && ft(i.firstChild);
      let l = yt(c ? e : i);
      try {
        for (; (o = l.nextNode());)
          (zt(o), Q(o), Ft(o.content) && Sn(o.content));
      } catch (t) {
        throw (c && pt(e), t);
      }
      if (c)
        return (
          St(t.removed, (e) => {
            e.element && gt(e.element);
          }),
          E && xt(e),
          e
        );
      if (Le) {
        if ((E && xt(i), Re))
          for (s = pe.call(i.ownerDocument); i.firstChild;)
            s.appendChild(i.firstChild);
        else s = i;
        return (
          (S.shadowroot || S.shadowrootmode) && (s = he.call(r, s, !0)),
          s
        );
      }
      let u = D ? i.outerHTML : i.innerHTML;
      return (
        D &&
          x[`!doctype`] &&
          i.ownerDocument &&
          i.ownerDocument.doctype &&
          i.ownerDocument.doctype.name &&
          W(ln, i.ownerDocument.doctype.name) &&
          (u =
            `<!DOCTYPE ` +
            i.ownerDocument.doctype.name +
            `>
` +
            u),
        E && (u = bt(u)),
        v && ze ? se(u) : u
      );
    }),
    (t.setConfig = function () {
      (st(arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}),
        (Ne = !0),
        (Pe = x),
        (Fe = S));
    }),
    (t.clearConfig = function () {
      ((F = null), (Ne = !1), (Pe = null), (Fe = null), (v = re), (y = ``));
    }),
    (t.isValidAttribute = function (e, t, n) {
      return (F || st({}), Bt(P(e), P(t), n));
    }),
    (t.addHook = function (e, t) {
      typeof t == `function` && U(b, e) && Tt(b[e], t);
    }),
    (t.removeHook = function (e, t) {
      if (U(b, e)) {
        if (t !== void 0) {
          let n = Ct(b[e], t);
          return n === -1 ? void 0 : Et(b[e], n, 1)[0];
        }
        return wt(b[e]);
      }
    }),
    (t.removeHooks = function (e) {
      U(b, e) && (b[e] = []);
    }),
    (t.removeAllHooks = function () {
      b = _n();
    }),
    t
  );
}
var bn = yn(),
  X = {
    wrap: `_wrap_1ynd0_1`,
    label: `_label_1ynd0_2`,
    btns: `_btns_1ynd0_3`,
    btn: `_btn_1ynd0_3`,
    btnText: `_btnText_1ynd0_20`,
    copyBtn: `_copyBtn_1ynd0_23`,
  },
  Z = i();
function xn({ title: e, url: t }) {
  let [n, r] = (0, te.useState)(!1),
    i = `https://portfolio-alamin.pages.dev`,
    a = t === `/` ? `${i}/share` : `${i}${t}`,
    o = encodeURIComponent(a),
    s = encodeURIComponent(e),
    c = [
      {
        label: `Facebook`,
        icon: `fab fa-facebook-f`,
        color: `#1877f2`,
        href: `https://www.facebook.com/sharer/sharer.php?u=${o}`,
      },
      {
        label: `LinkedIn`,
        icon: `fab fa-linkedin-in`,
        color: `#0a66c2`,
        href: `https://www.linkedin.com/sharing/share-offsite/?url=${o}`,
      },
      {
        label: `WhatsApp`,
        icon: `fab fa-whatsapp`,
        color: `#25d366`,
        href: `https://wa.me/?text=${s}%20${o}`,
      },
      {
        label: `Twitter/X`,
        icon: `fab fa-x-twitter`,
        color: `#1d9bf0`,
        href: `https://twitter.com/intent/tweet?text=${s}&url=${o}`,
      },
    ];
  function l() {
    navigator.clipboard.writeText(a).then(() => {
      (r(!0), setTimeout(() => r(!1), 2e3));
    });
  }
  return (0, Z.jsxs)(`div`, {
    className: X.wrap,
    children: [
      (0, Z.jsxs)(`span`, {
        className: X.label,
        children: [
          (0, Z.jsx)(`i`, { className: `fas fa-share-alt` }),
          ` Share this post:`,
        ],
      }),
      (0, Z.jsxs)(`div`, {
        className: X.btns,
        children: [
          c.map((e) =>
            (0, Z.jsxs)(
              `a`,
              {
                href: e.href,
                target: `_blank`,
                rel: `noreferrer`,
                className: X.btn,
                style: { "--sc": e.color },
                "aria-label": `Share on ${e.label}`,
                title: `Share on ${e.label}`,
                children: [
                  (0, Z.jsx)(`i`, { className: e.icon }),
                  (0, Z.jsx)(`span`, {
                    className: X.btnText,
                    children: e.label,
                  }),
                ],
              },
              e.label,
            ),
          ),
          (0, Z.jsxs)(`button`, {
            className: `${X.btn} ${X.copyBtn}`,
            onClick: l,
            "aria-label": `Copy link`,
            title: `Copy link`,
            children: [
              (0, Z.jsx)(`i`, {
                className: n ? `fas fa-check` : `fas fa-link`,
              }),
              (0, Z.jsx)(`span`, {
                className: X.btnText,
                children: n ? `Copied!` : `Copy Link`,
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
var Q = {
  section: `_section_1ibcc_1`,
  header: `_header_1ibcc_2`,
  title: `_title_1ibcc_3`,
  grid: `_grid_1ibcc_5`,
  card: `_card_1ibcc_7`,
  imgWrap: `_imgWrap_1ibcc_9`,
  img: `_img_1ibcc_9`,
  info: `_info_1ibcc_12`,
  topic: `_topic_1ibcc_13`,
  cardTitle: `_cardTitle_1ibcc_14`,
  meta: `_meta_1ibcc_15`,
};
function Sn({ currentId: e, currentTopic: t }) {
  let { data: n } = u(),
    r = (n.blog || []).filter((t) => !t.hidden && t.id !== e),
    i = [
      ...r.filter((e) => e.topic === t),
      ...r.filter((e) => e.topic !== t),
    ].slice(0, 3);
  return i.length
    ? (0, Z.jsxs)(`section`, {
        className: Q.section,
        children: [
          (0, Z.jsxs)(`div`, {
            className: Q.header,
            children: [
              (0, Z.jsx)(`div`, {
                className: `section-label`,
                children: `আরো পড়ুন`,
              }),
              (0, Z.jsxs)(`h3`, {
                className: Q.title,
                children: [
                  `Related `,
                  (0, Z.jsx)(`span`, { children: `Posts` }),
                ],
              }),
            ],
          }),
          (0, Z.jsx)(`div`, {
            className: Q.grid,
            children: i.map((e) =>
              (0, Z.jsxs)(
                `a`,
                {
                  href: `/blog/${e.id}`,
                  className: Q.card,
                  children: [
                    e.coverUrl &&
                      (0, Z.jsx)(`div`, {
                        className: Q.imgWrap,
                        children: (0, Z.jsx)(`img`, {
                          src: e.coverUrl,
                          alt: e.title,
                          loading: `lazy`,
                          className: Q.img,
                        }),
                      }),
                    (0, Z.jsxs)(`div`, {
                      className: Q.info,
                      children: [
                        (0, Z.jsx)(`span`, {
                          className: Q.topic,
                          children: e.topic,
                        }),
                        (0, Z.jsx)(`h4`, {
                          className: Q.cardTitle,
                          children: e.title,
                        }),
                        (0, Z.jsxs)(`span`, {
                          className: Q.meta,
                          children: [
                            (0, Z.jsx)(`i`, { className: `fas fa-clock` }),
                            e.readTime,
                            ` min read`,
                          ],
                        }),
                      ],
                    }),
                  ],
                },
                e.id,
              ),
            ),
          }),
        ],
      })
    : null;
}
var $ = {
  page: `_page_1yqz4_1`,
  notFound: `_notFound_1yqz4_2`,
  backBtn: `_backBtn_1yqz4_5`,
  article: `_article_1yqz4_7`,
  inner: `_inner_1yqz4_8`,
  back: `_back_1yqz4_5`,
  meta: `_meta_1yqz4_11`,
  topic: `_topic_1yqz4_12`,
  date: `_date_1yqz4_13`,
  readTime: `_readTime_1yqz4_13`,
  title: `_title_1yqz4_14`,
  cover: `_cover_1yqz4_15`,
  content: `_content_1yqz4_17`,
  tags: `_tags_1yqz4_235`,
  tag: `_tag_1yqz4_235`,
  authorBox: `_authorBox_1yqz4_237`,
  authorInfo: `_authorInfo_1yqz4_238`,
  authorCta: `_authorCta_1yqz4_241`,
};
R.setOptions({ breaks: !0, gfm: !0 });
function Cn() {
  let [e, t] = (0, te.useState)(0);
  return (
    (0, te.useEffect)(() => {
      let e = () => {
        let e = document.documentElement,
          n = e.scrollTop,
          r = e.scrollHeight - e.clientHeight;
        t(r > 0 ? (n / r) * 100 : 0);
      };
      return (
        window.addEventListener(`scroll`, e),
        () => window.removeEventListener(`scroll`, e)
      );
    }, []),
    (0, Z.jsx)(`div`, {
      style: {
        position: `fixed`,
        top: 70,
        left: 0,
        right: 0,
        height: `3px`,
        background: `var(--border)`,
        zIndex: 999,
      },
      children: (0, Z.jsx)(`div`, {
        style: {
          height: `100%`,
          background: `var(--green)`,
          width: `${e}%`,
          transition: `width 0.1s`,
          boxShadow: `0 0 8px var(--green)`,
        },
      }),
    })
  );
}
function wn() {
  var e, n, i;
  let { id: a } = r(),
    { data: o } = u(),
    s = d(),
    c = (o.blog || []).find((e) => e.id === a);
  return c
    ? (0, Z.jsxs)(`main`, {
        className: $.page,
        id: `main-content`,
        role: `main`,
        children: [
          (0, Z.jsx)(ee, {
            title: c.title,
            description:
              c.excerpt || ((e = c.content) == null ? void 0 : e.slice(0, 155)),
            url: `/blog/${c.id}`,
            image: c.coverUrl,
            type: `article`,
            keywords: (n = c.tags) == null ? void 0 : n.join(`, `),
            schema: {
              "@type": `BlogPosting`,
              "@id": `https://portfolio-alamin.pages.dev/blog/` + c.id,
              headline: c.title,
              description:
                c.excerpt ||
                ((i = c.content) == null ? void 0 : i.slice(0, 155)),
              image: {
                "@type": `ImageObject`,
                url:
                  c.coverUrl ||
                  `https://i.ibb.co/5Xcnf9mm/592997003-2565949163762644-8587364915638335487-n.jpg`,
                width: 1200,
                height: 630,
              },
              author: {
                "@type": `Person`,
                name: `Al-Amin Bin Ashad Ali`,
                url: `https://portfolio-alamin.pages.dev/about`,
                jobTitle: `Graphic Designer & AI Expert`,
                sameAs: [
                  `https://portfolio-alamin.pages.dev`,
                  `https://www.facebook.com/alaminbinashadali`,
                ],
              },
              publisher: {
                "@type": `Organization`,
                name: `Al-Amin Bin Ashad Ali`,
                logo: {
                  "@type": `ImageObject`,
                  url: `https://i.ibb.co/5Xcnf9mm/592997003-2565949163762644-8587364915638335487-n.jpg`,
                  width: 400,
                  height: 400,
                },
              },
              datePublished: c.publishedAt,
              dateModified: c.publishedAt,
              inLanguage: `bn-BD`,
              keywords: Array.isArray(c.tags) ? c.tags.join(`, `) : ``,
              articleSection: c.topic,
              wordCount: c.content ? c.content.split(` `).length : 500,
              timeRequired: `PT` + (c.readTime || 5) + `M`,
              mainEntityOfPage: {
                "@type": `WebPage`,
                "@id": `https://portfolio-alamin.pages.dev/blog/` + c.id,
              },
              isPartOf: {
                "@type": `Blog`,
                "@id": `https://portfolio-alamin.pages.dev/blog`,
                name: `Al-Amin Design Blog - Graphic Design and AI Tips`,
                url: `https://portfolio-alamin.pages.dev/blog`,
              },
              about: { "@type": `Thing`, name: c.topic },
            },
            article: {
              publishedTime: c.publishedAt,
              modifiedTime: c.publishedAt,
              tags: c.tags,
              section: c.topic,
            },
          }),
          (0, Z.jsx)(Cn, {}),
          (0, Z.jsx)(`article`, {
            className: $.article,
            children: (0, Z.jsxs)(`div`, {
              className: $.inner,
              children: [
                (0, Z.jsxs)(t, {
                  to: `/blog`,
                  className: $.back,
                  children: [
                    (0, Z.jsx)(`i`, { className: `fas fa-arrow-left` }),
                    ` All Articles`,
                  ],
                }),
                (0, Z.jsxs)(`div`, {
                  className: $.meta,
                  children: [
                    c.topic &&
                      (0, Z.jsx)(`span`, {
                        className: $.topic,
                        children: c.topic,
                      }),
                    c.publishedAt &&
                      (0, Z.jsx)(`span`, {
                        className: $.date,
                        children: new Date(c.publishedAt).toLocaleDateString(
                          `en-US`,
                          { month: `long`, day: `numeric`, year: `numeric` },
                        ),
                      }),
                    c.readTime &&
                      (0, Z.jsxs)(`span`, {
                        className: $.readTime,
                        children: [
                          (0, Z.jsx)(`i`, { className: `fas fa-clock` }),
                          ` `,
                          c.readTime,
                          ` min read`,
                        ],
                      }),
                  ],
                }),
                (0, Z.jsx)(`h1`, {
                  ref: s,
                  className: `reveal ${$.title}`,
                  children: c.title,
                }),
                c.coverUrl &&
                  (0, Z.jsx)(`img`, {
                    loading: `lazy`,
                    src: c.coverUrl,
                    alt: c.title,
                    className: $.cover,
                  }),
                (0, Z.jsx)(`div`, {
                  className: $.content,
                  dangerouslySetInnerHTML: {
                    __html: bn.sanitize(R.parse(c.content || ``)),
                  },
                }),
                Array.isArray(c.tags) &&
                  c.tags.length > 0 &&
                  (0, Z.jsx)(`div`, {
                    className: $.tags,
                    children: c.tags.map((e, t) =>
                      (0, Z.jsx)(`span`, { className: $.tag, children: e }, t),
                    ),
                  }),
                (0, Z.jsx)(xn, { title: c.title, url: `/blog/${c.id}` }),
                (0, Z.jsx)(Sn, { currentId: c.id, currentTopic: c.topic }),
                (0, Z.jsxs)(`div`, {
                  className: $.authorBox,
                  children: [
                    (0, Z.jsxs)(`div`, {
                      className: $.authorInfo,
                      children: [
                        (0, Z.jsx)(`strong`, {
                          children: `Al-Amin Bin Ashad Ali`,
                        }),
                        (0, Z.jsx)(`span`, {
                          children: `Graphic Designer & AI Expert | Bangladesh`,
                        }),
                      ],
                    }),
                    (0, Z.jsxs)(`a`, {
                      href: `https://wa.me/8801731186929`,
                      target: `_blank`,
                      rel: `noreferrer`,
                      className: $.authorCta,
                      children: [
                        (0, Z.jsx)(`i`, { className: `fab fa-whatsapp` }),
                        ` Work with me`,
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
        ],
      })
    : (0, Z.jsx)(`main`, {
        className: $.page,
        id: `main-content`,
        role: `main`,
        children: (0, Z.jsxs)(`div`, {
          className: $.notFound,
          children: [
            (0, Z.jsx)(`i`, { className: `fas fa-file-alt` }),
            (0, Z.jsx)(`h2`, { children: `Article not found` }),
            (0, Z.jsxs)(t, {
              to: `/blog`,
              className: $.backBtn,
              children: [
                (0, Z.jsx)(`i`, { className: `fas fa-arrow-left` }),
                ` Back to Blog`,
              ],
            }),
          ],
        }),
      });
}
export { wn as default };

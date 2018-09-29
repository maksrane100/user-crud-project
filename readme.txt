########################################################################################################################
#
# CRUD example using React. Working example with screenshots and readme attached.
#
########################################################################################################################


In one of the previous articles, we have created REST API with CRUD operations for users.
In this article we will discuss how to consume the API for perform CRUD operations on users.
We will also use Reactable in React. Reactable is flexible, simple datatabe in React,
that supports sorting, filtering, pagination of data.

Users data will be displayed using Reactable.

Assumptions:
1) Node JS is installed
2) React JS is installed

First create react app semantic-ui-react-demo using "create-react-app". "create-react-app" sets up development environment 
so that you can use the latest JavaScript features.



c:\articles>npx create-react-app user-crud-project

Creating a new React app in c:\articles\user-crud-project.

Installing packages. This might take a couple of minutes.
Installing react, react-dom, and react-scripts...

yarn add v1.7.0
info No lockfile found.
[1/4] Resolving packages...
⠁ (node:2416) [DEP0005] DeprecationWarning: Buffer() is deprecated due to security and usability issues. Please use the Buffer.alloc(), Buffer.allocUnsafe(), or Buffer.from() methods instead.
warning react-scripts > autoprefixer > browserslist@2.11.3: Browserslist 2 could fail on reading Browserslist >3.0 config used in other tools.
warning react-scripts > css-loader > cssnano > autoprefixer > browserslist@1.7.7: Browserslist 2 could fail on reading Browserslist >3.0 config used in other tools.
warning react-scripts > babel-preset-react-app > babel-preset-env > browserslist@2.11.3: Browserslist 2 could fail on reading Browserslist >3.0 config used in other tools.
warning react-scripts > css-loader > cssnano > postcss-merge-rules > browserslist@1.7.7: Browserslist 2 could fail on reading Browserslist >3.0 config used in other tools.
warning react-scripts > css-loader > cssnano > postcss-merge-rules > caniuse-api > browserslist@1.7.7: Browserslist 2 could fail on reading Browserslist >3.0 config used in other tools.
[2/4] Fetching packages...
info fsevents@1.2.4: The platform "win32" is incompatible with this module.
info "fsevents@1.2.4" is an optional dependency and failed compatibility check. Excluding it from installation.
[3/4] Linking dependencies...
[4/4] Building fresh packages...
success Saved lockfile.
success Saved 727 new dependencies.
info Direct dependencies
├─ react-dom@16.5.2
├─ react-scripts@1.1.5
└─ react@16.5.2
info All dependencies
├─ abab@1.0.4
├─ accepts@1.3.5
├─ acorn-dynamic-import@2.0.2
├─ acorn-globals@3.1.0
├─ acorn-jsx@3.0.1
├─ address@1.0.3
├─ ajv-keywords@2.1.1
├─ ajv@5.5.2
├─ align-text@0.1.4
├─ ansi-align@2.0.0
├─ ansi-escapes@1.4.0
├─ ansi-html@0.0.7
├─ ansi-regex@2.1.1
├─ ansi-styles@3.2.1
├─ anymatch@2.0.0
├─ append-transform@0.4.0
├─ aria-query@0.7.1
├─ arr-flatten@1.1.0
├─ array-equal@1.0.0
├─ array-filter@0.0.1
├─ array-find-index@1.0.2
├─ array-flatten@1.1.1
├─ array-map@0.0.0
├─ array-reduce@0.0.0
├─ array-uniq@1.0.3
├─ arrify@1.0.1
├─ asap@2.0.6
├─ asn1.js@4.10.1
├─ asn1@0.2.4
├─ assert@1.4.1
├─ assign-symbols@1.0.0
├─ async-each@1.0.1
├─ async@2.6.1
├─ asynckit@0.4.0
├─ atob@2.1.2
├─ autoprefixer@7.1.6
├─ aws-sign2@0.7.0
├─ aws4@1.8.0
├─ axobject-query@0.1.0
├─ babel-eslint@7.2.3
├─ babel-generator@6.26.1
├─ babel-helper-builder-binary-assignment-operator-visitor@6.24.1
├─ babel-helper-builder-react-jsx@6.26.0
├─ babel-helper-call-delegate@6.24.1
├─ babel-helper-define-map@6.26.0
├─ babel-helper-explode-assignable-expression@6.24.1
├─ babel-helper-remap-async-to-generator@6.24.1
├─ babel-jest@20.0.3
├─ babel-plugin-check-es2015-constants@6.22.0
├─ babel-plugin-dynamic-import-node@1.1.0
├─ babel-plugin-jest-hoist@20.0.3
├─ babel-plugin-syntax-async-functions@6.13.0
├─ babel-plugin-syntax-class-properties@6.13.0
├─ babel-plugin-syntax-dynamic-import@6.18.0
├─ babel-plugin-syntax-exponentiation-operator@6.13.0
├─ babel-plugin-syntax-flow@6.18.0
├─ babel-plugin-syntax-jsx@6.18.0
├─ babel-plugin-syntax-object-rest-spread@6.13.0
├─ babel-plugin-syntax-trailing-function-commas@6.22.0
├─ babel-plugin-transform-async-to-generator@6.24.1
├─ babel-plugin-transform-class-properties@6.24.1
├─ babel-plugin-transform-es2015-arrow-functions@6.22.0
├─ babel-plugin-transform-es2015-block-scoped-functions@6.22.0
├─ babel-plugin-transform-es2015-block-scoping@6.26.0
├─ babel-plugin-transform-es2015-classes@6.24.1
├─ babel-plugin-transform-es2015-computed-properties@6.24.1
├─ babel-plugin-transform-es2015-destructuring@6.23.0
├─ babel-plugin-transform-es2015-duplicate-keys@6.24.1
├─ babel-plugin-transform-es2015-for-of@6.23.0
├─ babel-plugin-transform-es2015-function-name@6.24.1
├─ babel-plugin-transform-es2015-literals@6.22.0
├─ babel-plugin-transform-es2015-modules-amd@6.24.1
├─ babel-plugin-transform-es2015-modules-commonjs@6.26.2
├─ babel-plugin-transform-es2015-modules-systemjs@6.24.1
├─ babel-plugin-transform-es2015-modules-umd@6.24.1
├─ babel-plugin-transform-es2015-object-super@6.24.1
├─ babel-plugin-transform-es2015-parameters@6.24.1
├─ babel-plugin-transform-es2015-shorthand-properties@6.24.1
├─ babel-plugin-transform-es2015-spread@6.22.0
├─ babel-plugin-transform-es2015-sticky-regex@6.24.1
├─ babel-plugin-transform-es2015-template-literals@6.22.0
├─ babel-plugin-transform-es2015-typeof-symbol@6.23.0
├─ babel-plugin-transform-es2015-unicode-regex@6.24.1
├─ babel-plugin-transform-exponentiation-operator@6.24.1
├─ babel-plugin-transform-flow-strip-types@6.22.0
├─ babel-plugin-transform-object-rest-spread@6.26.0
├─ babel-plugin-transform-react-constant-elements@6.23.0
├─ babel-plugin-transform-react-display-name@6.25.0
├─ babel-plugin-transform-react-jsx-self@6.22.0
├─ babel-plugin-transform-react-jsx-source@6.22.0
├─ babel-plugin-transform-react-jsx@6.24.1
├─ babel-plugin-transform-regenerator@6.26.0
├─ babel-plugin-transform-runtime@6.23.0
├─ babel-plugin-transform-strict-mode@6.24.1
├─ babel-preset-env@1.6.1
├─ babel-preset-flow@6.23.0
├─ babel-preset-jest@20.0.3
├─ babel-preset-react-app@3.1.2
├─ babel-preset-react@6.24.1
├─ base@0.11.2
├─ base64-js@1.3.0
├─ batch@0.6.1
├─ bcrypt-pbkdf@1.0.2
├─ binary-extensions@1.12.0
├─ bluebird@3.5.2
├─ body-parser@1.18.2
├─ bonjour@3.5.0
├─ boxen@1.3.0
├─ brace-expansion@1.1.11
├─ braces@2.3.2
├─ browser-resolve@1.11.3
├─ browserify-aes@1.2.0
├─ browserify-cipher@1.0.1
├─ browserify-des@1.0.2
├─ browserify-sign@4.0.4
├─ browserify-zlib@0.2.0
├─ browserslist@1.7.7
├─ bser@2.0.0
├─ buffer-from@1.1.1
├─ buffer-indexof@1.1.1
├─ buffer-xor@1.0.3
├─ buffer@4.9.1
├─ builtin-modules@1.1.1
├─ builtin-status-codes@3.0.0
├─ cache-base@1.0.1
├─ caller-path@0.1.0
├─ callsites@2.0.0
├─ camel-case@3.0.0
├─ camelcase-keys@2.1.0
├─ caniuse-api@1.6.1
├─ caniuse-db@1.0.30000888
├─ caniuse-lite@1.0.30000888
├─ capture-stack-trace@1.0.1
├─ case-sensitive-paths-webpack-plugin@2.1.1
├─ caseless@0.12.0
├─ center-align@0.1.3
├─ chardet@0.4.2
├─ chokidar@2.0.4
├─ ci-info@1.6.0
├─ circular-json@0.3.3
├─ clap@1.2.3
├─ class-utils@0.3.6
├─ clean-css@4.2.1
├─ cli-boxes@1.0.0
├─ cli-cursor@2.1.0
├─ cli-width@2.2.0
├─ clone@1.0.4
├─ co@4.6.0
├─ coa@1.0.4
├─ code-point-at@1.1.0
├─ collection-visit@1.0.0
├─ color-convert@1.9.3
├─ color-name@1.1.3
├─ color-string@0.3.0
├─ color@0.11.4
├─ colormin@1.1.2
├─ colors@1.1.2
├─ combined-stream@1.0.7
├─ commander@2.17.1
├─ compressible@2.0.15
├─ compression@1.7.3
├─ concat-map@0.0.1
├─ concat-stream@1.6.2
├─ configstore@3.1.2
├─ connect-history-api-fallback@1.5.0
├─ console-browserify@1.1.0
├─ constants-browserify@1.0.0
├─ contains-path@0.1.0
├─ content-disposition@0.5.2
├─ content-type-parser@1.0.2
├─ convert-source-map@1.6.0
├─ cookie-signature@1.0.6
├─ cookie@0.3.1
├─ copy-descriptor@0.1.1
├─ core-js@2.5.7
├─ core-util-is@1.0.2
├─ create-ecdh@4.0.3
├─ create-error-class@3.0.2
├─ create-hmac@1.1.7
├─ cross-spawn@5.1.0
├─ crypto-browserify@3.12.0
├─ crypto-random-string@1.0.0
├─ css-color-names@0.0.4
├─ css-loader@0.28.7
├─ css-select@1.2.0
├─ css-what@2.1.0
├─ cssesc@0.1.0
├─ cssnano@3.10.0
├─ csso@2.3.2
├─ cssom@0.3.4
├─ cssstyle@0.2.37
├─ currently-unhandled@0.4.1
├─ damerau-levenshtein@1.0.4
├─ dashdash@1.14.1
├─ date-now@0.1.4
├─ decode-uri-component@0.2.0
├─ deep-equal@1.0.1
├─ deep-extend@0.6.0
├─ deep-is@0.1.3
├─ default-require-extensions@1.0.0
├─ define-properties@1.1.3
├─ defined@1.0.0
├─ del@2.2.2
├─ des.js@1.0.0
├─ destroy@1.0.4
├─ detect-indent@4.0.0
├─ detect-node@2.0.4
├─ detect-port-alt@1.1.6
├─ diff@3.5.0
├─ diffie-hellman@5.0.3
├─ dns-equal@1.0.0
├─ dns-packet@1.3.1
├─ dns-txt@2.0.2
├─ dom-converter@0.1.4
├─ dom-serializer@0.1.0
├─ dom-urls@1.1.0
├─ domain-browser@1.2.0
├─ domhandler@2.1.0
├─ domutils@1.1.6
├─ dot-prop@4.2.0
├─ dotenv-expand@4.2.0
├─ dotenv@4.0.0
├─ duplexer@0.1.1
├─ duplexer3@0.1.4
├─ ecc-jsbn@0.1.2
├─ ee-first@1.1.1
├─ electron-to-chromium@1.3.72
├─ emoji-regex@6.5.1
├─ enhanced-resolve@3.4.1
├─ entities@1.1.1
├─ errno@0.1.7
├─ error-ex@1.3.2
├─ es-abstract@1.12.0
├─ es-to-primitive@1.2.0
├─ es6-map@0.1.5
├─ es6-promise@4.2.5
├─ es6-set@0.1.5
├─ es6-weak-map@2.0.2
├─ escodegen@1.11.0
├─ escope@3.6.0
├─ eslint-config-react-app@2.1.0
├─ eslint-import-resolver-node@0.3.2
├─ eslint-loader@1.9.0
├─ eslint-module-utils@2.2.0
├─ eslint-plugin-flowtype@2.39.1
├─ eslint-plugin-import@2.8.0
├─ eslint-plugin-jsx-a11y@5.1.1
├─ eslint-plugin-react@7.4.0
├─ eslint-scope@3.7.3
├─ eslint@4.10.0
├─ espree@3.5.4
├─ esprima@4.0.1
├─ esquery@1.0.1
├─ eventemitter3@3.1.0
├─ events@1.1.1
├─ eventsource@0.1.6
├─ exec-sh@0.2.2
├─ expand-brackets@0.1.5
├─ expand-range@1.8.2
├─ expand-tilde@2.0.2
├─ express@4.16.3
├─ extend@3.0.2
├─ external-editor@2.2.0
├─ extglob@0.3.2
├─ extract-text-webpack-plugin@3.0.2
├─ extsprintf@1.3.0
├─ fast-deep-equal@1.1.0
├─ fast-levenshtein@2.0.6
├─ fastparse@1.1.1
├─ faye-websocket@0.10.0
├─ fb-watchman@2.0.0
├─ figures@2.0.0
├─ file-entry-cache@2.0.0
├─ file-loader@1.1.5
├─ filename-regex@2.0.1
├─ fileset@2.0.3
├─ filesize@3.5.11
├─ fill-range@4.0.0
├─ finalhandler@1.1.1
├─ find-cache-dir@1.0.0
├─ flat-cache@1.3.0
├─ flatten@1.0.2
├─ follow-redirects@1.5.8
├─ for-in@1.0.2
├─ for-own@0.1.5
├─ forever-agent@0.6.1
├─ form-data@2.3.2
├─ forwarded@0.1.2
├─ fs-extra@3.0.1
├─ fs.realpath@1.0.0
├─ functional-red-black-tree@1.0.1
├─ get-stdin@4.0.1
├─ get-value@2.0.6
├─ getpass@0.1.7
├─ glob-base@0.3.0
├─ glob-parent@2.0.0
├─ global-dirs@0.1.1
├─ global-modules@1.0.0
├─ global-prefix@1.0.2
├─ globals@9.18.0
├─ globby@5.0.0
├─ got@6.7.1
├─ growly@1.3.0
├─ gzip-size@3.0.0
├─ handle-thing@1.2.5
├─ handlebars@4.0.12
├─ har-schema@2.0.0
├─ har-validator@5.1.0
├─ has-ansi@2.0.0
├─ has-flag@3.0.0
├─ has-symbols@1.0.0
├─ has-value@1.0.0
├─ has-values@1.0.0
├─ hash.js@1.1.5
├─ he@1.1.1
├─ hmac-drbg@1.0.1
├─ home-or-tmp@2.0.0
├─ hosted-git-info@2.7.1
├─ hpack.js@2.1.6
├─ html-comment-regex@1.1.1
├─ html-encoding-sniffer@1.0.2
├─ html-entities@1.2.1
├─ html-minifier@3.5.20
├─ html-webpack-plugin@2.29.0
├─ htmlparser2@3.3.0
├─ http-deceiver@1.2.7
├─ http-parser-js@0.4.13
├─ http-proxy-middleware@0.17.4
├─ http-proxy@1.17.0
├─ http-signature@1.2.0
├─ https-browserify@1.0.0
├─ icss-replace-symbols@1.1.0
├─ icss-utils@2.1.0
├─ ieee754@1.1.12
├─ ignore@3.3.10
├─ import-lazy@2.1.0
├─ import-local@1.0.0
├─ indent-string@2.1.0
├─ indexes-of@1.0.1
├─ indexof@0.0.1
├─ inflight@1.0.6
├─ inquirer@3.3.0
├─ internal-ip@1.2.0
├─ interpret@1.1.0
├─ invert-kv@1.0.0
├─ ip@1.1.5
├─ ipaddr.js@1.8.0
├─ is-absolute-url@2.1.0
├─ is-accessor-descriptor@1.0.0
├─ is-arrayish@0.2.1
├─ is-binary-path@1.0.1
├─ is-callable@1.1.4
├─ is-data-descriptor@1.0.0
├─ is-date-object@1.0.1
├─ is-descriptor@1.0.2
├─ is-directory@0.3.1
├─ is-dotfile@1.0.3
├─ is-equal-shallow@0.1.3
├─ is-finite@1.0.2
├─ is-installed-globally@0.1.0
├─ is-npm@1.0.0
├─ is-obj@1.0.1
├─ is-plain-obj@1.1.0
├─ is-plain-object@2.0.4
├─ is-posix-bracket@0.1.1
├─ is-primitive@2.0.0
├─ is-promise@2.1.0
├─ is-redirect@1.0.0
├─ is-regex@1.0.4
├─ is-resolvable@1.1.0
├─ is-retry-allowed@1.1.0
├─ is-root@1.0.0
├─ is-stream@1.1.0
├─ is-svg@2.1.0
├─ is-symbol@1.0.2
├─ is-typedarray@1.0.0
├─ is-utf8@0.2.1
├─ is-windows@1.0.2
├─ isarray@1.0.0
├─ isexe@2.0.0
├─ isstream@0.1.2
├─ istanbul-api@1.3.7
├─ istanbul-lib-hook@1.2.2
├─ istanbul-lib-instrument@1.10.2
├─ istanbul-lib-report@1.1.5
├─ istanbul-lib-source-maps@1.2.6
├─ istanbul-reports@1.5.1
├─ jest-changed-files@20.0.3
├─ jest-cli@20.0.4
├─ jest-environment-node@20.0.3
├─ jest-matchers@20.0.3
├─ jest-resolve-dependencies@20.0.3
├─ jest-runtime@20.0.4
├─ jest@20.0.4
├─ js-base64@2.4.9
├─ js-tokens@4.0.0
├─ js-yaml@3.12.0
├─ jsdom@9.12.0
├─ jsesc@1.3.0
├─ json-loader@0.5.7
├─ json-schema-traverse@0.3.1
├─ json-schema@0.2.3
├─ json-stringify-safe@5.0.1
├─ json3@3.3.2
├─ jsonfile@3.0.1
├─ jsprim@1.4.1
├─ jsx-ast-utils@1.4.1
├─ killable@1.0.1
├─ kind-of@3.2.2
├─ klaw@1.3.1
├─ latest-version@3.1.0
├─ lazy-cache@1.0.4
├─ levn@0.3.0
├─ load-json-file@1.1.0
├─ loader-fs-cache@1.0.1
├─ loader-runner@2.3.1
├─ locate-path@2.0.0
├─ lodash.camelcase@4.3.0
├─ lodash.cond@4.5.2
├─ lodash.debounce@4.0.8
├─ lodash.defaults@4.2.0
├─ lodash.memoize@4.1.2
├─ lodash.template@4.4.0
├─ lodash.templatesettings@4.1.0
├─ lodash.uniq@4.5.0
├─ loglevel@1.6.1
├─ longest@1.0.1
├─ loose-envify@1.4.0
├─ loud-rejection@1.6.0
├─ lower-case@1.1.4
├─ lowercase-keys@1.0.1
├─ lru-cache@4.1.3
├─ makeerror@1.0.11
├─ map-obj@1.0.1
├─ map-visit@1.0.0
├─ math-expression-evaluator@1.2.17
├─ math-random@1.0.1
├─ media-typer@0.3.0
├─ mem@1.1.0
├─ meow@3.7.0
├─ merge-descriptors@1.0.1
├─ merge@1.2.0
├─ methods@1.1.2
├─ micromatch@2.3.11
├─ miller-rabin@4.0.1
├─ mime-db@1.36.0
├─ mime-types@2.1.20
├─ mime@1.6.0
├─ minimalistic-crypto-utils@1.0.1
├─ minimatch@3.0.4
├─ minimist@1.2.0
├─ mixin-deep@1.3.1
├─ multicast-dns-service-types@1.1.0
├─ multicast-dns@6.2.3
├─ mute-stream@0.0.7
├─ nanomatch@1.2.13
├─ negotiator@0.6.1
├─ neo-async@2.5.2
├─ next-tick@1.0.0
├─ node-forge@0.7.5
├─ node-libs-browser@2.1.0
├─ node-notifier@5.2.1
├─ normalize-package-data@2.4.0
├─ normalize-path@2.1.1
├─ normalize-url@1.9.1
├─ npm-run-path@2.0.2
├─ nth-check@1.0.1
├─ nwmatcher@1.4.4
├─ oauth-sign@0.9.0
├─ object-copy@0.1.0
├─ object-hash@1.3.0
├─ object-keys@1.0.12
├─ object.omit@2.0.1
├─ obuf@1.1.2
├─ on-headers@1.0.1
├─ onetime@2.0.1
├─ opn@5.2.0
├─ optimist@0.6.1
├─ optionator@0.8.2
├─ original@1.0.2
├─ os-browserify@0.3.0
├─ os-homedir@1.0.2
├─ os-tmpdir@1.0.2
├─ p-finally@1.0.0
├─ p-limit@1.3.0
├─ p-locate@2.0.0
├─ p-try@1.0.0
├─ package-json@4.0.1
├─ pako@1.0.6
├─ param-case@2.1.1
├─ parse-glob@3.0.4
├─ parse-passwd@1.0.0
├─ parse5@1.5.1
├─ pascalcase@0.1.1
├─ path-browserify@0.0.0
├─ path-dirname@1.0.2
├─ path-exists@2.1.0
├─ path-is-inside@1.0.2
├─ path-key@2.0.1
├─ path-to-regexp@0.1.7
├─ path-type@1.1.0
├─ pinkie@2.0.4
├─ pluralize@7.0.0
├─ portfinder@1.0.17
├─ posix-character-classes@0.1.1
├─ postcss-calc@5.3.1
├─ postcss-colormin@2.2.2
├─ postcss-convert-values@2.6.1
├─ postcss-discard-comments@2.0.4
├─ postcss-discard-duplicates@2.1.0
├─ postcss-discard-empty@2.1.0
├─ postcss-discard-overridden@0.1.1
├─ postcss-discard-unused@2.2.3
├─ postcss-filter-plugins@2.0.3
├─ postcss-flexbugs-fixes@3.2.0
├─ postcss-load-config@1.2.0
├─ postcss-load-options@1.2.0
├─ postcss-load-plugins@2.3.0
├─ postcss-loader@2.0.8
├─ postcss-merge-idents@2.1.7
├─ postcss-merge-longhand@2.0.2
├─ postcss-merge-rules@2.1.2
├─ postcss-message-helpers@2.0.0
├─ postcss-minify-font-values@1.0.5
├─ postcss-minify-gradients@1.0.5
├─ postcss-minify-params@1.2.2
├─ postcss-minify-selectors@2.1.1
├─ postcss-modules-extract-imports@1.1.0
├─ postcss-modules-local-by-default@1.2.0
├─ postcss-modules-scope@1.1.0
├─ postcss-modules-values@1.3.0
├─ postcss-normalize-charset@1.1.1
├─ postcss-normalize-url@3.0.8
├─ postcss-ordered-values@2.2.3
├─ postcss-reduce-idents@2.4.0
├─ postcss-reduce-initial@1.0.1
├─ postcss-reduce-transforms@1.0.4
├─ postcss-selector-parser@2.2.3
├─ postcss-svgo@2.1.6
├─ postcss-unique-selectors@2.0.2
├─ postcss-zindex@2.2.0
├─ prepend-http@1.0.4
├─ preserve@0.2.0
├─ pretty-bytes@4.0.2
├─ pretty-error@2.1.1
├─ private@0.1.8
├─ process-nextick-args@2.0.0
├─ process@0.11.10
├─ progress@2.0.0
├─ promise@8.0.1
├─ prop-types@15.6.2
├─ proxy-addr@2.0.4
├─ prr@1.0.1
├─ pseudomap@1.0.2
├─ psl@1.1.29
├─ public-encrypt@4.0.2
├─ punycode@1.4.1
├─ q@1.5.1
├─ query-string@4.3.4
├─ querystring-es3@0.2.1
├─ querystring@0.2.0
├─ querystringify@2.0.0
├─ raf@3.4.0
├─ randomatic@3.1.0
├─ randomfill@1.0.4
├─ raw-body@2.3.2
├─ rc@1.2.8
├─ react-dev-utils@5.0.2
├─ react-dom@16.5.2
├─ react-error-overlay@4.0.1
├─ react-scripts@1.1.5
├─ react@16.5.2
├─ read-pkg@1.1.0
├─ readdirp@2.2.1
├─ recursive-readdir@2.2.1
├─ redent@1.0.0
├─ reduce-css-calc@1.3.0
├─ reduce-function-call@1.0.2
├─ regenerator-runtime@0.11.1
├─ regenerator-transform@0.10.1
├─ regex-cache@0.4.4
├─ regexpu-core@1.0.0
├─ registry-auth-token@3.3.2
├─ registry-url@3.1.0
├─ relateurl@0.2.7
├─ remove-trailing-separator@1.1.0
├─ renderkid@2.0.1
├─ request@2.88.0
├─ require-from-string@1.2.1
├─ require-uncached@1.0.3
├─ resolve-cwd@2.0.0
├─ resolve-dir@1.0.1
├─ resolve-from@1.0.1
├─ resolve-url@0.2.1
├─ resolve@1.8.1
├─ restore-cursor@2.0.0
├─ ret@0.1.15
├─ right-align@0.1.3
├─ run-async@2.3.0
├─ rx-lite-aggregates@4.0.8
├─ rx-lite@4.0.8
├─ safer-buffer@2.1.2
├─ sane@1.6.0
├─ sax@1.2.4
├─ select-hose@2.0.0
├─ selfsigned@1.10.3
├─ semver-diff@2.1.0
├─ semver@5.5.1
├─ serve-index@1.9.1
├─ serve-static@1.13.2
├─ serviceworker-cache-polyfill@4.0.0
├─ set-blocking@2.0.0
├─ set-value@2.0.0
├─ setimmediate@1.0.5
├─ shebang-command@1.2.0
├─ shebang-regex@1.0.0
├─ shell-quote@1.6.1
├─ shellwords@0.1.1
├─ slice-ansi@1.0.0
├─ snapdragon-node@2.1.1
├─ snapdragon-util@3.0.1
├─ sockjs@0.3.19
├─ sort-keys@1.1.2
├─ source-map-resolve@0.5.2
├─ source-map-support@0.4.18
├─ source-map-url@0.4.0
├─ spdx-correct@3.0.1
├─ spdx-exceptions@2.1.0
├─ spdy-transport@2.1.0
├─ spdy@3.4.7
├─ split-string@3.1.0
├─ sprintf-js@1.0.3
├─ sshpk@1.14.2
├─ static-extend@0.1.2
├─ stream-browserify@2.0.1
├─ stream-http@2.8.3
├─ strict-uri-encode@1.1.0
├─ string_decoder@1.1.1
├─ string-length@1.0.1
├─ string-width@2.1.1
├─ strip-eof@1.0.0
├─ strip-indent@1.0.1
├─ strip-json-comments@2.0.1
├─ style-loader@0.19.0
├─ supports-color@5.5.0
├─ svgo@0.7.2
├─ sw-precache-webpack-plugin@0.11.4
├─ sw-precache@5.2.1
├─ sw-toolbox@3.6.0
├─ symbol-tree@3.2.2
├─ table@4.0.3
├─ term-size@1.2.0
├─ test-exclude@4.2.3
├─ text-table@0.2.0
├─ throat@3.2.0
├─ through@2.3.8
├─ thunky@1.0.2
├─ time-stamp@2.1.0
├─ timed-out@4.0.1
├─ timers-browserify@2.0.10
├─ tmp@0.0.33
├─ tmpl@1.0.4
├─ to-arraybuffer@1.0.1
├─ to-fast-properties@1.0.3
├─ to-regex-range@2.1.1
├─ toposort@1.0.7
├─ tough-cookie@2.4.3
├─ tr46@0.0.3
├─ trim-newlines@1.0.0
├─ trim-right@1.0.1
├─ tty-browserify@0.0.0
├─ tunnel-agent@0.6.0
├─ tweetnacl@0.14.5
├─ type-is@1.6.16
├─ typedarray@0.0.6
├─ uglify-js@3.4.9
├─ uglify-to-browserify@1.0.2
├─ uglifyjs-webpack-plugin@0.4.6
├─ union-value@1.0.0
├─ uniq@1.0.1
├─ unique-string@1.0.0
├─ universalify@0.1.2
├─ unpipe@1.0.0
├─ unset-value@1.0.0
├─ unzip-response@2.0.1
├─ upath@1.1.0
├─ update-notifier@2.5.0
├─ upper-case@1.1.3
├─ uri-js@4.2.2
├─ urijs@1.19.1
├─ urix@0.1.0
├─ url-loader@0.6.2
├─ url-parse-lax@1.0.0
├─ url-parse@1.4.3
├─ url@0.11.0
├─ use@3.1.1
├─ util-deprecate@1.0.2
├─ util@0.10.4
├─ utils-merge@1.0.1
├─ uuid@3.3.2
├─ validate-npm-package-license@3.0.4
├─ vendors@1.0.2
├─ verror@1.10.0
├─ vm-browserify@0.0.4
├─ walker@1.0.7
├─ watch@0.10.0
├─ watchpack@1.6.0
├─ wbuf@1.7.3
├─ webidl-conversions@4.0.2
├─ webpack-dev-middleware@1.12.2
├─ webpack-dev-server@2.11.3
├─ webpack-manifest-plugin@1.3.2
├─ webpack@3.8.1
├─ websocket-extensions@0.1.3
├─ whatwg-fetch@2.0.3
├─ whatwg-url@4.8.0
├─ whet.extend@0.9.9
├─ which@1.3.1
├─ widest-line@2.0.0
├─ window-size@0.1.0
├─ wordwrap@1.0.0
├─ wrap-ansi@2.1.0
├─ write-file-atomic@2.3.0
├─ write@0.2.1
├─ xml-name-validator@2.0.1
├─ xtend@4.0.1
└─ yargs-parser@5.0.0
Done in 173.82s.

Success! Created user-crud-project at c:\articles\user-crud-project
Inside that directory, you can run several commands:

  yarn start
    Starts the development server.

  yarn build
    Bundles the app into static files for production.

  yarn test
    Starts the test runner.

  yarn eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:

  cd user-crud-project
  yarn start

Happy hacking!





We will install the following components for our application:

axios semantic-ui-react semantic-ui-css reactable react-dom react-router-dom react-bootstrap




c:\articles\user-crud-project>npm i axios semantic-ui-react semantic-ui-css reactable react-dom react-router-dom react-bootstrap --save
npm WARN rm not removing c:\articles\user-crud-project\node_modules\.bin\jest.cmd as it wasn't installed by c:\articles\user-crud-project\node_modules\jest
npm WARN rm not removing c:\articles\user-crud-project\node_modules\.bin\jest as it wasn't installed by c:\articles\user-crud-project\node_modules\jest
npm WARN rm not removing c:\articles\user-crud-project\node_modules\.bin\esparse.cmd as it wasn't installed by c:\articles\user-crud-project\node_modules\esprima
npm WARN rm not removing c:\articles\user-crud-project\node_modules\.bin\esvalidate.cmd as it wasn't installed by c:\articles\user-crud-project\node_modules\esprima
npm WARN rm not removing c:\articles\user-crud-project\node_modules\.bin\esparse as it wasn't installed by c:\articles\user-crud-project\node_modules\esprima
npm WARN rm not removing c:\articles\user-crud-project\node_modules\.bin\esvalidate as it wasn't installed by c:\articles\user-crud-project\node_modules\esprima
npm WARN rm not removing c:\articles\user-crud-project\node_modules\.bin\browserslist.cmd as it wasn't installed by c:\articles\user-crud-project\node_modules\browserslist
npm WARN rm not removing c:\articles\user-crud-project\node_modules\.bin\browserslist as it wasn't installed by c:\articles\user-crud-project\node_modules\browserslist

> uglifyjs-webpack-plugin@0.4.6 postinstall c:\articles\user-crud-project\node_modules\uglifyjs-webpack-plugin
> node lib/post_install.js

npm notice created a lockfile as package-lock.json. You should commit this file.
npm WARN ajv-keywords@3.2.0 requires a peer of ajv@^6.0.0 but none is installed. You must install peer dependencies yourself.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.4 (node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.4: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})

+ react-bootstrap@0.32.4
+ semantic-ui-css@2.4.0
+ react-dom@16.5.2
+ axios@0.18.0
+ reactable@1.1.0
+ react-router-dom@4.3.1
+ semantic-ui-react@0.82.5
added 219 packages from 178 contributors, removed 104 packages, updated 1077 packages and audited 14675 packages in 331.774s




c:\articles\user-crud-project>npm i react-loading --save
npm WARN ajv-keywords@3.2.0 requires a peer of ajv@^6.0.0 but none is installed. You must install peer dependencies yourself.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.4 (node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.4: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})

+ react-loading@2.0.3
added 1 package from 1 contributor, updated 2 packages and audited 14676 packages in 125.523s
found 0 vulnerabilities





In the index.js, we created routing for our CRUD application using Router. Here we have created mapping for Edit User, Create User 
and Show User components. In the App.js, we are fetching the users using REST API and axios and then we are displaying those users in
tabular format. 

When user data loads using REST API, we are displaying a loading message and image, so that the user will know that the data is being loaded.
Once the data load is complete, the loading message and image will go away and the data will be presented to the user in tabular format.

In the table, we also provide link to view the user details. When user clicks on the "View" link in the table, he navigates
to the user details page where he has options to Edit the user or to Delete the user. When user clicks on the Edit button, he navigates to
the Edit user screen where he can update the user data.

I have attached the screenshots here and also a sample REST API response JSON in users.json file.




References:

https://www.djamware.com/post/59faec0a80aca7739224ee1f/building-crud-web-application-using-mern-stack
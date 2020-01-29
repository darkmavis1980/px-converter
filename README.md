px-converter
============



[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/px-converter.svg)](https://npmjs.org/package/px-converter)
[![Downloads/week](https://img.shields.io/npm/dw/px-converter.svg)](https://npmjs.org/package/px-converter)
[![License](https://img.shields.io/npm/l/px-converter.svg)](https://github.com/experimental/px-converter/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g px-converter
$ px-converter COMMAND
running command...
$ px-converter (-v|--version|version)
px-converter/0.1.0 darwin-x64 node-v13.3.0
$ px-converter --help [COMMAND]
USAGE
  $ px-converter COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`px-converter from:pt [POINT]`](#px-converter-frompt-point)
* [`px-converter from:rem [REM]`](#px-converter-fromrem-rem)
* [`px-converter help [COMMAND]`](#px-converter-help-command)
* [`px-converter table:rem [BASEPIXEL]`](#px-converter-tablerem-basepixel)
* [`px-converter to:pt [PIXEL]`](#px-converter-topt-pixel)
* [`px-converter to:rem [PIXEL]`](#px-converter-torem-pixel)

## `px-converter from:pt [POINT]`

describe the command here

```
USAGE
  $ px-converter from:pt [POINT]

ARGUMENTS
  POINT  Point to convert

OPTIONS
  -h, --help  show CLI help

EXAMPLE
  $ px-converter from:pt 12
  16px
```

_See code: [src/commands/from/pt.ts](https://github.com/experimental/px-converter/blob/v0.1.0/src/commands/from/pt.ts)_

## `px-converter from:rem [REM]`

Convert a given rem value to the corresponding pixel value

```
USAGE
  $ px-converter from:rem [REM]

ARGUMENTS
  REM  Rem to convert

OPTIONS
  -b, --base=base  [default: 16] Base pixel
  -f, --force
  -h, --help       show CLI help

EXAMPLE
  $ px-converter from:rem 2
  32 px
```

_See code: [src/commands/from/rem.ts](https://github.com/experimental/px-converter/blob/v0.1.0/src/commands/from/rem.ts)_

## `px-converter help [COMMAND]`

display help for px-converter

```
USAGE
  $ px-converter help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.2.3/src/commands/help.ts)_

## `px-converter table:rem [BASEPIXEL]`

describe the command here

```
USAGE
  $ px-converter table:rem [BASEPIXEL]

ARGUMENTS
  BASEPIXEL  Base Pixel

OPTIONS
  -f, --force
  -h, --help         show CLI help
  -r, --range=range  [default: 10,42] Range of pixels

EXAMPLE
  $ px-converter table:rem
  Pixel     Rem
  10px      0.625rem
  11px      0.6875rem
  12px      0.75rem
  ...
```

_See code: [src/commands/table/rem.ts](https://github.com/experimental/px-converter/blob/v0.1.0/src/commands/table/rem.ts)_

## `px-converter to:pt [PIXEL]`

describe the command here

```
USAGE
  $ px-converter to:pt [PIXEL]

ARGUMENTS
  PIXEL  Pixel to convert

OPTIONS
  -h, --help  show CLI help

EXAMPLE
  $ px-converter to:rem 16
  1rem
```

_See code: [src/commands/to/pt.ts](https://github.com/experimental/px-converter/blob/v0.1.0/src/commands/to/pt.ts)_

## `px-converter to:rem [PIXEL]`

describe the command here

```
USAGE
  $ px-converter to:rem [PIXEL]

ARGUMENTS
  PIXEL  Pixel to convert

OPTIONS
  -b, --base=base  [default: 16] Base pixel
  -f, --force
  -h, --help       show CLI help

EXAMPLE
  $ px-converter to:rem 16
  1rem
```

_See code: [src/commands/to/rem.ts](https://github.com/experimental/px-converter/blob/v0.1.0/src/commands/to/rem.ts)_
<!-- commandsstop -->

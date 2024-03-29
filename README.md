px-converter
============



[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/px-converter.svg)](https://npmjs.org/package/px-converter)
[![Downloads/week](https://img.shields.io/npm/dw/px-converter.svg)](https://npmjs.org/package/px-converter)
[![License](https://img.shields.io/npm/l/px-converter.svg)](https://github.com/experimental/px-converter/blob/master/package.json)
![Build Status](https://github.com/darkmavis1980/px-converter/workflows/CI/badge.svg)

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
px-converter/0.4.2 darwin-arm64 node-v16.17.0
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
* [`px-converter joules`](#px-converter-joules)
* [`px-converter table:pt`](#px-converter-tablept)
* [`px-converter table:rem [BASEPIXEL]`](#px-converter-tablerem-basepixel)
* [`px-converter to:pt [PIXEL]`](#px-converter-topt-pixel)
* [`px-converter to:rem [PIXEL]`](#px-converter-torem-pixel)
* [`px-converter to:rgb [HEX]`](#px-converter-torgb-hex)

## `px-converter from:pt [POINT]`

Convert a given point (pt) value to the corresponding pixel value

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

_See code: [src/commands/from/pt.ts](https://github.com/darkmavis1980/px-converter/blob/v0.4.2/src/commands/from/pt.ts)_

## `px-converter from:rem [REM]`

Convert a given rem value to the corresponding pixel value

```
USAGE
  $ px-converter from:rem [REM]

ARGUMENTS
  REM  Rem to convert

OPTIONS
  -b, --base=base  [default: 16] Base pixel
  -h, --help       show CLI help

EXAMPLE
  $ px-converter from:rem 2
  32px
```

_See code: [src/commands/from/rem.ts](https://github.com/darkmavis1980/px-converter/blob/v0.4.2/src/commands/from/rem.ts)_

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

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.18/src/commands/help.ts)_

## `px-converter joules`

Take mass and height as input and returns the potential energy in Joules

```
USAGE
  $ px-converter joules

OPTIONS
  -h, --help  show CLI help

EXAMPLE
  $ px-converter joules
  ? Specify the mass in Kg: 0.249
  ? Specify the height from the ground in meters: 50
  An object with mass of 0.249Kg from an height of 50 meters, will generate 122.0928 Joules
```

_See code: [src/commands/joules.ts](https://github.com/darkmavis1980/px-converter/blob/v0.4.2/src/commands/joules.ts)_

## `px-converter table:pt`

Return a table of conversions between pixels and points

```
USAGE
  $ px-converter table:pt

OPTIONS
  -h, --help         show CLI help
  -r, --range=range  [default: 10,42] Range of pixels

EXAMPLE
  $ px-converter table:pt
  Pixel     Point
  10px      7.5pt
  11px      8.25pt
  12px      9pt
  ...
```

_See code: [src/commands/table/pt.ts](https://github.com/darkmavis1980/px-converter/blob/v0.4.2/src/commands/table/pt.ts)_

## `px-converter table:rem [BASEPIXEL]`

Return a table of conversions between pixels and rems, if no BASEPIXEL value is passed, it will default to 16 pixels

```
USAGE
  $ px-converter table:rem [BASEPIXEL]

ARGUMENTS
  BASEPIXEL  Base Pixel

OPTIONS
  -b, --base=base    [default: 16] Base pixel
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

_See code: [src/commands/table/rem.ts](https://github.com/darkmavis1980/px-converter/blob/v0.4.2/src/commands/table/rem.ts)_

## `px-converter to:pt [PIXEL]`

Convert a given pixel value to the corresponding point value

```
USAGE
  $ px-converter to:pt [PIXEL]

ARGUMENTS
  PIXEL  Pixel to convert

OPTIONS
  -h, --help  show CLI help

EXAMPLE
  $ px-converter to:pt 16
  12pt
```

_See code: [src/commands/to/pt.ts](https://github.com/darkmavis1980/px-converter/blob/v0.4.2/src/commands/to/pt.ts)_

## `px-converter to:rem [PIXEL]`

Convert a given pixel value to the corresponding rem value

```
USAGE
  $ px-converter to:rem [PIXEL]

ARGUMENTS
  PIXEL  Pixel to convert

OPTIONS
  -b, --base=base  [default: 16] Base pixel
  -h, --help       show CLI help

EXAMPLE
  $ px-converter to:rem 16
  1rem
```

_See code: [src/commands/to/rem.ts](https://github.com/darkmavis1980/px-converter/blob/v0.4.2/src/commands/to/rem.ts)_

## `px-converter to:rgb [HEX]`

Convert a given hex value to the corresponding rgb value

```
USAGE
  $ px-converter to:rgb [HEX]

ARGUMENTS
  HEX  Hex value

OPTIONS
  -h, --help  show CLI help

EXAMPLE
  $ px-converter to:rgb FFFFFF
  rgb(255,255,255)
```

_See code: [src/commands/to/rgb.ts](https://github.com/darkmavis1980/px-converter/blob/v0.4.2/src/commands/to/rgb.ts)_
<!-- commandsstop -->

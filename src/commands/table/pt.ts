// import {generatePtTable} from '../../lib/conversion'
// import {DEFAULT_RANGE} from '../../constants'

// export default class TablePt extends Command {
//   static description = 'Return a table of conversions between pixels and points'

//   static examples = [
//     `$ px-converter table:pt
// Pixel     Point
// 10px      7.5pt
// 11px      8.25pt
// 12px      9pt
// ...
// `,
//   ]

//   static flags = {
//     help: flags.help({char: 'h'}),
//     // flag with a value (-r, --range=MIN,MAX)
//     range: flags.string({char: 'r', description: 'Range of pixels', default: DEFAULT_RANGE.toString()}),
//   }

//   async run(): Promise<void> {
//     const {flags} = this.parse(TablePt)
//     const range: number[]|string[] = flags.range ? flags.range.split(',').map(i => Number(i)) : DEFAULT_RANGE

//     cli.table(generatePtTable(range), {
//       px: {
//         header: 'Pixel',
//         minWidth: 10,
//       },
//       rem: {
//         header: 'Point',
//         minWidth: 10,
//       },
//     })
//   }
// }

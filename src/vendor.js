import '@material/web/all.js'
import { styles as typescaleStyles } from '@material/web/typography/md-typescale-styles.js'
import flatpickr from 'flatpickr'
import Chinese from 'flatpickr/dist/l10n/zh.js'
import 'flatpickr/dist/flatpickr.min.css'
import confetti from 'canvas-confetti'

document.adoptedStyleSheets.push(typescaleStyles.styleSheet)

window.flatpickr = flatpickr
window.flatpickr.l10ns = window.flatpickr.l10ns || {}
window.flatpickr.l10ns.zh = Chinese
flatpickr.localize(Chinese)

window.confetti = confetti
import {Router} from "express"
import {routerCatalog} from './routeCatalog.js'
import { routerDresses } from './routeGoods.js'
import { routerPantsuits } from './routePantsuits.js'
import { routerBlouses } from './routeBlouses.js'
import { routerTracksuits } from './routeTracksuits.js'

export const router = Router()
router.use('/catalog', routerCatalog)
router.use('/dresses', routerDresses)
router.use('/pantsuits', routerPantsuits)
router.use('/blouses', routerBlouses)
router.use('/tracksuits', routerTracksuits)
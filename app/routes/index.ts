import { Router } from 'https://deno.land/x/oak/mod.ts'
import { router as routerCreature } from './creature.ts';
import { router as routerSpell } from './spell.ts';

const router = new Router();

router.use(routerCreature.routes());
router.use(routerSpell.routes());

export default router;
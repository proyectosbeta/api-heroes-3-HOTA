import { Router } from 'https://deno.land/x/oak/mod.ts'
import {
  getCreatures as getcastleCreatures,
  getCreature as getcastleCreature,
} from '../controllers/castle/creature.controller.ts';
import {
  getCreatures as getRampartCreatures,
  getCreature as getRampartCreature,
} from '../controllers/rampart/creature.controller.ts';

const router = new Router();

router
  .get('/castle/creature', getcastleCreatures)
  .get('/castle/creature/:id', getcastleCreature);

router
  .get('/rampart/creature', getRampartCreatures)
  .get('/rampart/creature/:id', getRampartCreature);

export default router;
import { Router } from 'https://deno.land/x/oak/mod.ts'
import {
  getCreatures,
  getCreature,
} from '../controllers/castle/creature.controller.ts';

const router = new Router();

router
  .get('/castle/creature', getCreatures)
  .get('/castle/creature/:id', getCreature);

export default router;
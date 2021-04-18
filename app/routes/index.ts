import { Router } from 'https://deno.land/x/oak/mod.ts'
import {
  getCreatures,
  getCreature,
} from '../controllers/creature.controller.ts';

const router = new Router();

router
  .get('/creature', getCreatures)
  .get('/creature/:factory', getCreatures)
  // .get('/creature/:factory/:id', getCreature);

export default router;
import { Router } from 'https://deno.land/x/oak/mod.ts'
import {
  getSpells,
  getSpell,
} from '../controllers/spell.controller.ts';

const router = new Router();

router
  .get('/spell', getSpells)
  // .get('/spell/:id', getSpell)
  .get('/spell/:magic', getSpells)
  // .get('/spell/:magic/:id', getSpell);

export { router };
import { Router } from "../../deps.ts";
import { getSpell, getSpells } from "../controllers/spell.controller.ts";

const router = new Router();

router
  .get("/spells/:magic", getSpells)
  .get('/spells/:magic/:id', getSpell);

export { router };

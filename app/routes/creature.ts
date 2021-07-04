import { Router } from "../../deps.ts";
import {
  getCreature,
  getCreatures,
} from "../controllers/creature.controller.ts";

const router = new Router();

router
  // .get("/creature", getCreatures)
  // .get('/creature/:id', getCreature)
  .get("/creature/:factory", getCreatures)
  .get('/creature/:factory/:id', getCreature);

export { router };

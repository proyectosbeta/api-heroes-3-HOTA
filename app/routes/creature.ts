import { Router } from "../../deps.ts";
import {
  getCreature,
  getCreatures,
} from "../controllers/creature.controller.ts";

const router = new Router();

router
  .get("/creature/:town", getCreatures)
  .get('/creature/:town/:id', getCreature);

export { router };

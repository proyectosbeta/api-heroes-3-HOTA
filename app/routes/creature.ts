import { Router } from "../../deps.ts";
import {
  getCreature,
  getCreatures,
} from "../controllers/creature.controller.ts";

const router = new Router();

router
  .get("/creatures/:town", getCreatures)
  .get('/creatures/:town/:id', getCreature);

export { router };

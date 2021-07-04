import { Router } from "../../deps.ts";
import { router as routerCreature } from "./creature.ts";
import { router as routerSpell } from "./spell.ts";

const router = new Router();

router.use(routerCreature.routes());
router.use(routerSpell.routes());

export default router;

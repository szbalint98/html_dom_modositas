import {CIPOLISTA} from "./adat.js";
import { felsorol, felsorolasOsszeallit, kiiras } from "./fuggveny.js";
kiiras(CIPOLISTA);
const CIPOKELEM=document.getElementById("cipok");
const TABLADIV=document.getElementById("dives");
let txt=felsorol(CIPOLISTA)
let textmasik=felsorolasOsszeallit(CIPOLISTA)
CIPOKELEM.innerHTML="<h1>hello</h1>";
CIPOKELEM.querySelector("#cipok");
TABLADIV.querySelector("#dives")
TABLADIV.innerHTML+=textmasik
CIPOKELEM.innerHTML+=txt;


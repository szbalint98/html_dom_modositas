import {CIPOLISTA} from "./adat.js";
import { felsorol, felsorolasOsszeallit, kiiras, legdragabbneve, osszeg, osszeg2 } from "./fuggveny.js";

const CIPOKELEM=document.getElementById("cipok");
const TABLADIV=document.getElementById("tabla");
const OSSZEG=document.getElementById("osszegzes");

kiiras(CIPOLISTA);
let txt=felsorol(CIPOLISTA);
let textmasik=felsorolasOsszeallit(CIPOLISTA);
let ossz=osszeg(CIPOLISTA);
let neve=legdragabbneve(CIPOLISTA);
let kc=osszeg2(CIPOLISTA);

CIPOKELEM.querySelector("#cipok");
TABLADIV.querySelector("#tabla");
TABLADIV.innerHTML+=textmasik;
CIPOKELEM.innerHTML+=txt;

OSSZEG.innerHTML+=`A termékek összára: ${ossz}<br>`;
OSSZEG.innerHTML+=`A legdragabb termek neve: ${neve}<br>`;
OSSZEG.innerHTML+=`Ennyi db körömcipő van:: ${kc}`;


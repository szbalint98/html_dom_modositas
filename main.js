import {CIPOLISTA} from "./adat.js";
import { felsorol, felsorolasOsszeallit, kiiras, legdragabbneve, osszeg, osszeg2 } from "./fuggveny.js";
kiiras(CIPOLISTA);
const CIPOKELEM=document.getElementById("cipok");
const TABLADIV=document.getElementById("dives");
const OSSZEG=document.getElementById("osszegzes")
let txt=felsorol(CIPOLISTA)
let textmasik=felsorolasOsszeallit(CIPOLISTA)
let ossz=osszeg(CIPOLISTA)
let neve=legdragabbneve(CIPOLISTA)
let kc=osszeg2(CIPOLISTA)
CIPOKELEM.innerHTML="<h1>hello</h1>";
CIPOKELEM.querySelector("#cipok");
TABLADIV.querySelector("#dives")

TABLADIV.innerHTML+=textmasik
CIPOKELEM.innerHTML+=txt;
OSSZEG.innerHTML+=`A termékek összára: ${ossz}<br>`;
OSSZEG.innerHTML+=`A legdragabb termek neve: ${neve}<br>`;
OSSZEG.innerHTML+=`Ennyi db körömcipő van:: ${kc}`;


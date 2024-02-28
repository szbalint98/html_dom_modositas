import {CIPOLISTA} from "./adat.js";
export function kiiras(lista){
    for (let index = 0; index < lista.length; index++) {
        console.log(`${index+1}. Cipő típusa: ${lista[index].tipus}`)
        
    }
}
export function felsorol(lista){
    let txt="<ul>"
    for (let index = 0; index < lista.length; index++) {
        txt+=`<li>${index+1}. Cipő típusa: ${lista[index].tipus}</li>
        <li>${index+1}. Cipő szine: ${lista[index].szin}</li>
        `;
    
}
    txt+="</ul>"
    console.log(txt)
    return txt;
}
export function felsorolasOsszeallit(lista){
    let txt="<table>"
    txt+="<tr>"
    txt+="<th>Típus</th> <th>Ár</th> <th>Szín</th> <br>"
    txt+="</tr>"
    
    for (let index = 0; index < lista.length; index++) {
        txt+=`<tr>
        <td>${lista[index].tipus}  </td>
        <td>${lista[index].ar}Ft  </td>
        <td> ${lista[index].szin}  </td>
         </tr>`;
    
}
    txt+="</tr>"
    txt+="</table>"
    console.log(txt)
    return txt;
}
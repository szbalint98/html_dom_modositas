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
export function osszeg(lista){
    let osszeg=0;
    let max=0;
    let maxneve=""
       for (let index = 0; index < lista.length; index++) {
            osszeg+=lista[index].ar
            if (max<lista[index].ar) {
                maxneve=lista[index].tipus
            }
        
    }
    return osszeg
}
export function legdragabbneve(lista){
    
    let max=0;
    let maxneve=""
       for (let index = 0; index < lista.length; index++) {
            
            if (lista[max].ar<lista[index].ar) {
                    max=index;
                    
            }
        
    }
    maxneve=lista[max].tipus
    return maxneve
}
export function osszeg2(lista){
    let kcipo=0;
    
       for (let index = 0; index < lista.length; index++) {
            
            if (lista[index].tipus=="körömcipő") {
                kcipo+=1
            }
        
    }
    return kcipo
}

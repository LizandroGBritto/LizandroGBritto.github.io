const CALCULAR = document.getElementById('calcular');
const ERROR = document.getElementById('error');
const FLU = document.getElementById('flu');
const MAN = document.getElementById('man');
const MM = document.getElementById('mm2');

CALCULAR.addEventListener('click', () => {
    const DATO = document.getElementById('peso').value
    //validamos que se cargue un dato:
    if (DATO > 0 && DATO < 31){
        ERROR.style.display = 'none'
        let flujo = sega(DATO);
        let mantenimiento = flujo/24;
        let media = mantenimiento+mantenimiento/2;
        FLU.innerHTML = flujo + ' litros Diarios';
        MAN.innerHTML = 'Para Mantenimiento ' + mantenimiento.toFixed(0) + ' cc/hr';
        MM.innerHTML = 'Para media ' + media.toFixed(0) + ' cc/hr';
        FLU.style.display = 'block';
        MAN.style.display = 'block';
        MM.style.display = 'block';
    } else if (DATO > 30){
        ERROR.style.display = 'none'
        let flujo = supCorporal(DATO);
        console.log(flujo*1500);
        FLU.innerHTML = 'Superficie en  1500: '+ (flujo*1500).toFixed(0) + ' cc';
        MAN.innerHTML = 'Superficie en  2000: '+ (flujo*2000).toFixed(0) + ' cc';
        FLU.style.display = 'block';
        MAN.style.display = 'block';
    } else {
        ERROR.style.display = 'block';
        FLU.style.display = 'none';
        MAN.style.display = 'none';
        MM.style.display = 'none';
    }
})
function sega(peso) {
        let administracion = 0;
        if (peso <= 10) {
            administracion = peso * 100;
        } else if (peso <= 20) {
            administracion = 10 * 100 + (peso - 10) * 50;
        } else {
            administracion = 10 * 100 + 10 * 50 + (peso - 20) * 20;
        }
    
        return administracion;
    }
function supCorporal(peso) {
        let sup = 0;
       sup = ( (peso * 4) + 7) / (peso + 90);
    
        return sup;
    }   


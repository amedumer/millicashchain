// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import MillicashMillicentCashDid from './millicash/millicent.cash.did'
import MillicashMillicentCashIssuer from './millicash/millicent.cash.issuer'
import MillicashMillicentCashRegulator from './millicash/millicent.cash.regulator'
import MillicashMillicentCashVerifiablecredential from './millicash/millicent.cash.verifiablecredential'
import MillicentCashMillicentCashDid from './millicent/cash/millicent.cash.did'
import MillicentCashMillicentCashIssuer from './millicent/cash/millicent.cash.issuer'
import MillicentCashMillicentCashRegulator from './millicent/cash/millicent.cash.regulator'
import MillicentCashMillicentCashVerifiablecredential from './millicent/cash/millicent.cash.verifiablecredential'


export default { 
  MillicashMillicentCashDid: load(MillicashMillicentCashDid, 'millicent.cash.did'),
  MillicashMillicentCashIssuer: load(MillicashMillicentCashIssuer, 'millicent.cash.issuer'),
  MillicashMillicentCashRegulator: load(MillicashMillicentCashRegulator, 'millicent.cash.regulator'),
  MillicashMillicentCashVerifiablecredential: load(MillicashMillicentCashVerifiablecredential, 'millicent.cash.verifiablecredential'),
  MillicentCashMillicentCashDid: load(MillicentCashMillicentCashDid, 'millicent.cash.did'),
  MillicentCashMillicentCashIssuer: load(MillicentCashMillicentCashIssuer, 'millicent.cash.issuer'),
  MillicentCashMillicentCashRegulator: load(MillicentCashMillicentCashRegulator, 'millicent.cash.regulator'),
  MillicentCashMillicentCashVerifiablecredential: load(MillicentCashMillicentCashVerifiablecredential, 'millicent.cash.verifiablecredential'),
  
}


function load(mod, fullns) {
    return function init(store) {        
        if (store.hasModule([fullns])) {
            throw new Error('Duplicate module name detected: '+ fullns)
        }else{
            store.registerModule([fullns], mod)
            store.subscribe((mutation) => {
                if (mutation.type == 'common/env/INITIALIZE_WS_COMPLETE') {
                    store.dispatch(fullns+ '/init', null, {
                        root: true
                    })
                }
            })
        }
    }
}

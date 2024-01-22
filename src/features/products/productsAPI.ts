
export function fetchProducts() {
  return Promise.resolve({data: [
    {regex: '(AGUA MIN.SERRAS DE CUNHA S GAS PET.1.5l)', text: 'Água 1.5L'},
    {regex: '(LIMAO TAITI kg)', text: 'Limão Taiti'},
    {regex: '(MAMAO PAPAYA un)', text: 'Mamão Papaya'},
    {regex: '(OVOS NATUREGG CAIP.VERM.GDE.LIV.ANT.10un)', text: 'Ovos'},
    {regex: '(SOBRECOXA FGO.KORIN CONG.600g)', text: 'Sobrecoxa de Frango'},
  ]});
}

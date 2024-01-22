
export function fetchProducts() {
  return Promise.resolve({data: [
    {regex: '(AGUA MIN.SERRAS DE CUNHA S GAS PET.1.5l|AGUA SERRA NEGRA 1,5L HIDRATTA)', text: 'Água 1.5L'},
    {regex: '(CREME LEITE VEG.NOT|CR LEITE VEG)', text: 'Creme de Leite'},
    {regex: '(ALIMENTO VEG.NOT MILK|BEB VEG NOT MILK)', text: 'Leite'},
    {regex: '(LIMAO TAITI kg)', text: 'Limão Taiti'},
    {regex: '(MAMAO PAPAYA un)', text: 'Mamão Papaya'},
    {regex: '(MORANGO BD)', text: 'Morango'},
    {regex: '(OVOS NATUREGG CAIP)', text: 'Ovos'},
    {regex: '(SOBRECOXA FGO.KORIN CONG.600g)', text: 'Sobrecoxa de Frango'},
  ]});
}

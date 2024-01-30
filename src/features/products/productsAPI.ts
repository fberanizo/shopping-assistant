
export function fetchProducts() {
  return Promise.resolve({data: [
    {regex: '(AGUA)', text: 'Água 1.5L'},
    {regex: '(CREME LEITE VEG.NOT|CR LEITE VEG)', text: 'Creme de Leite'},
    {regex: '(NOT MILK)', text: 'Leite'},
    {regex: '(LIMAO)', text: 'Limão Taiti'},
    {regex: '(MAMAO)', text: 'Mamão Papaya'},
    {regex: '(MORANGO)', text: 'Morango'},
    {regex: '(OVOS)', text: 'Ovos'},
    {regex: '(SOBRECOXA FGO.KORIN CONG.600g)', text: 'Sobrecoxa de Frango'},
    {regex: '(TAP.DA TERRINHA|GOMA)', text: 'Tapioca'},
  ]});
}

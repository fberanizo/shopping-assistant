
export function fetchProducts() {
  return Promise.resolve({data: [
    {regex: '(ACUCAR)', text: 'Açúcar'},
    {regex: '(AGUA|AG M)', text: 'Água 1.5L'},
    {regex: '(ARROZ)', text: 'Arroz'},
    {regex: '(ATUM)', text: 'Atum'},
    {regex: '(BACON|BAC PALETA)', text: 'Bacon'},
    {regex: '(CEBOLA)', text: 'Cebola'},
    {regex: '(COUVE)', text: 'Couve'},
    {regex: '(COGUMELO)', text: 'Cogumelo'},
    {regex: '(CREAM CHEESE|CR CHEESE)', text: 'Cream Cheese'},
    {regex: '(CREME LEITE|CR LEITE)', text: 'Creme de Leite'},
    {regex: '(DETERGENTE)', text: 'Detergente'},
    {regex: '(DESOD)', text: 'Desodorante'},
    {regex: '(NOT MILK)', text: 'Leite'},
    {regex: '(LIMAO)', text: 'Limão Taiti'},
    {regex: '(LIN CAL)', text: 'Linguiça Calabresa'},
    {regex: '(MACARRAO)', text: 'Macarrão'},
    {regex: '(MAMAO)', text: 'Mamão Papaya'},
    {regex: '(MORANGO)', text: 'Morango'},
    {regex: '(OVOS)', text: 'Ovos'},
    {regex: '(QJO|QUEIJO)', text: 'Queijo'},
    {regex: '(TOALHA)', text: 'Papel Toalha'},
    {regex: '(PEITO FGO)', text: 'Peito de Frango'},
    {regex: '(RAP ?10)', text: 'Rap 10'},
    {regex: '(SALMAO)', text: 'Salmão'},
    {regex: '(COXA)', text: 'Sobrecoxa/Coxa de Frango'},
    {regex: '(SUCO)', text: 'Suco'},
    {regex: '(TAP|TERRINHA|GOMA)', text: 'Tapioca'},
    {regex: '(TOMATE PELADO)', text: 'Tomate Pelado'},
    {regex: '(VIN)', text: 'Vinho'},
  ]});
}

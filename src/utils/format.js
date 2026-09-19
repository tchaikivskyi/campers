export const formatPrice = (price) => `€${price.toFixed(2).replace('.', ',')}`

export const formatLocation = (location) =>
  location.split(', ').reverse().join(', ')

export const formatUnits = (value) =>
  value.replace(/(\d)([a-z])/i, '$1 $2').replace('/', ' / ')

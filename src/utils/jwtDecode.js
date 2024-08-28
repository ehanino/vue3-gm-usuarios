export const formatearConSeparadorMiles = (valor) => {
    if (valor == null) return '';
    valor = parseFloat(valor);
    return valor.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};


export function jwtDecode(token) {
  try {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
  } catch (error) {
    console.error('Error decoding JWT:', error);
    return null;
  }
}

export function getUserInfoFromToken(token) {
  const decodedToken = jwtDecode(token);
  if (decodedToken) {
    // Imprimimos el token decodificado para depuración
    console.log('Decoded token:', decodedToken);
    return  decodedToken.user_id;
  }
  return null;
}
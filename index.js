/*-------------------------------------------------------------
-------------------Ejercicio 1---------------------------------
--------------------------------------------------------------- */

//?Hacer un programa que al ingresar un numero en base binaria lo transforme a base decimal.
//?Si el numero ingresado no es válido debe mostrar un error en pantalla.

//?Aclarración: No utilizar la funciones de conversion de base que brinde el lenguaje.

//! PASOS PARA CONVERTIR BINARIO A NUMERO
/*

Paso 1: Escribe el número binario. Asegúrate de conocer el valor de cada posición de bit. En el sistema binario, las posiciones de los 
bits representan potencias de 2, comenzando desde la derecha y aumentando en potencia de 2 a medida que te desplazas hacia la izquierda. 

La posición más a la derecha es 2^0, la siguiente es 2^1, luego 2^2, y así sucesivamente.


Paso 2: Asigna un valor a cada posición de bit en función de su posición. 

Comienza asignando 1 al bit más a la derecha (el bit de menor peso) y luego duplica ese valor a medida que te mueves hacia la izquierda.


Paso 3: Multiplica cada bit en el número binario por su valor asignado y suma los resultados.

Ejemplo: Vamos a convertir el número binario 1101 en decimal.

Bit más a la derecha (2^0): 1 * 2^0 = 1
Segundo bit desde la derecha (2^1): 0 * 2^1 = 0
Tercer bit desde la derecha (2^2): 1 * 2^2 = 4
Cuarto bit desde la derecha (2^3): 1 * 2^3 = 8
Paso 4: Suma todos los resultados obtenidos en el paso anterior:

1 + 0 + 4 + 8 = 13

Entonces, el número binario 1101 es igual a 13 en decimal.



*/

// Esta función toma un número binario como entrada y lo convierte en su valor decimal.
function tobinary(numero) {
  // Inicializa una variable llamada 'rta' para almacenar el resultado final en decimal.
  let rta = 0;

  // Calcula la longitud (cantidad de dígitos) del número binario.
  let largo = numero.length - 1; //!se resta 1 porque arranca con el indice 0:

  //!Por ejemplo, si el número binario es "10101", la longitud de la cadena es 5, pero los índices de los caracteres van desde 0 hasta 4.
  //!Por lo tanto, al restar 1, obtenemos 4, que es el índice del último dígito '1' en el número binario.

  // Itera a través de cada dígito del número binario, de derecha a izquierda.
  for (let i = 0; i <= largo; i++) {
    switch (
      numero.charAt(i) //todo por que charAT(i)?
    ) {
      case "0":
        // Si el dígito es '0', no tiene sentido multiplicar y sumar, ya que su contribución es cero.
        break;
      case "1":
        // Si el dígito es '1', suma 2 elevado a la potencia correspondiente a su posición en el número binario.
        rta += 2 ** (largo - i);
        break;
      default:
        // Si el dígito no es ni '0' ni '1', se considera un error y se devuelve un mensaje de error.
        return "Hay un error en la expresión de ingreso. No es un número binario";
    }
  }

  // Muestra el resultado en la consola.
  console.log(rta);

  // Devuelve el resultado en formato decimal.
  return rta;
}

// Esta función se llama cuando se presiona un botón en la página web.
function procesarBinario() {
  // Obtiene el valor ingresado por el usuario desde un elemento de entrada HTML con el ID 'numero'.
  let numero = document.getElementById("numero").value;

  // Llama a la función 'tobinary' para convertir el número binario en decimal y muestra el resultado en la página web.
  document.getElementById("resultado").innerHTML =
    `${numero} en binario es: ` + tobinary(numero);
}

/*-------------------------------------------------------------
  -------------------Ejercicio 2---------------------------------
  ---------------------------------------------------------------
  //?Realiza un programa que permita ingresar una direccion IP y su Mascara.
  //?Se debe decir a que clase corresponde (A, B o C).
  //?Si hay un error con los datos ingresados debe anunciarlo a pantalla
  */

//! CLASES DE IP

/*
  
  El concepto de clases de direcciones IP se utiliza para dividir el espacio de direcciones IP en diferentes rangos según su tamaño y alcance. 
  Estas clases se crearon en los primeros días de Internet para facilitar la asignación de direcciones IP en función de las necesidades de las 
  organizaciones. 
  
  Hay cinco clases de direcciones IP: A, B, C, D y E, pero las clases A, B y C son las más comunes y se utilizan para la asignación de direcciones IP
  en redes públicas y privadas. 
  
  Clase A (por ejemplo, 10.0.0.0 a 10.255.255.255):
  
  Rango: 0.0.0.0 a 127.255.255.255.
  Primer octeto: 0xxxxxxx (0 a 127 en decimal).
  Uso común: Reservada para redes muy grandes, como organizaciones globales. Puede contener hasta 16 millones de direcciones IP.
  
  
  Clase B (por ejemplo, 172.16.0.0 a 172.31.255.255):
  
  Rango: 128.0.0.0 a 191.255.255.255.
  Primer octeto: 10xxxxxx (128 a 191 en decimal).
  Uso común: Utilizada para redes de tamaño mediano. Puede contener hasta 65,000 direcciones IP.
  
  
  
  Clase C (por ejemplo, 192.168.0.0 a 192.168.255.255):
  
  Rango: 192.0.0.0 a 223.255.255.255.
  Primer octeto: 110xxxxx (192 a 223 en decimal).
  Uso común: Asignada a redes pequeñas y medianas. Puede contener hasta 254 direcciones IP.
  Clases D y E: Estas clases no se utilizan comúnmente para asignar direcciones IP a redes específicas. La Clase D se usa para multicast, mientras que la Clase E se reserva para propósitos experimentales.
  
  
  */

//!mascara de red

/* 
  
  Máscara de Clase A:
  
  Notación Decimal: 255.0.0.0
  Notación Binaria: 11111111.00000000.00000000.00000000
  
  
  Máscara de Clase B:
  
  Notación Decimal: 255.255.0.0
  Notación Binaria: 11111111.11111111.00000000.00000000
  
  
  Máscara de Clase C:
  
  Notación Decimal: 255.255.255.0
  Notación Binaria: 11111111.11111111.11111111.00000000
  
  
  Máscara de Clase D (Multicast):
  
  Notación Decimal: 224.0.0.0
  Notación Binaria: 11100000.00000000.00000000.00000000
  
  
  Máscara de Clase E (Experimental):
  
  Notación Decimal: 240.0.0.0
  Notación Binaria: 11110000.00000000.00000000.00000000
  
  
  Máscara de Subred Personalizada:
  
  Notación Decimal: 255.255.255.192
  Notación Binaria: 11111111.11111111.11111111.11000000
  
  
  Las máscaras de subred permiten definir el tamaño de la red y el número de hosts que pueden existir en ella. 
  Una máscara de subred más larga (con más bits de red) significa una red más pequeña con menos hosts, mientras que una máscara de subred más corta
  (con menos bits de red) significa una red más grande con más hosts. 
  
  Por ejemplo, una máscara de 255.255.255.0 permite 254 hosts en una red, mientras que una máscara de 255.255.255.192 permite solo 62 hosts en
  la misma cantidad de direcciones IP disponibles.
  
  */

//!ejemplos

/*
  Dirección IP Clase A:
  
  Dirección IP: 10.0.0.1
  Máscara de Red: 255.0.0.0
  
  Dirección IP Clase B:
  
  Dirección IP: 172.16.0.1
  Máscara de Red: 255.255.0.0
  Dirección IP Clase C:
  
  Dirección IP: 192.168.1.1
  Máscara de Red: 255.255.255.0
  Dirección IP Fuera de Rango (Clase A):
  
  Dirección IP: 128.0.0.1
  Máscara de Red: 255.0.0.0
  Dirección IP con Máscara No Reconocida:
  
  Dirección IP: 192.168.1.1
  Máscara de Red: 255.0.255.0
  
  */

// Función que verifica la clase de una dirección IP dado su formato y máscara de red.
function chkClase(ip, clase) {
  // Separamos los octetos de la dirección IP por el punto.
  let octetos = ip.split(".");

  // Si no hay exactamente 4 octetos, el formato es incorrecto.
  if (octetos.length != 4) return "Error en el formato del IP.";

  // Iteramos a través de los 4 octetos.
  for (let i = 0; i < 4; i++) {
    let rango = Number(octetos[i]);

    // Comprobamos si el octeto es un número válido.
    if (isNaN(rango)) {
      return "Error en el formato del IP 2.";
    } else {
      if (i === 0) {
        // Si es el primer octeto, verificamos su rango según la clase especificada.
        if (rango < 0 || rango > 255)
          return "Error en la dirección IP. Los octetos toman valor entre 0 y 255";
        switch (clase) {
          case "A":
            if (rango < 1 || rango > 126)
              return "Error en el rango de la IP para la clase A.";
            break;
          case "B":
            if (rango < 128 || rango > 191)
              return "Error en el rango de la IP para la clase B.";
            break;
          case "C":
            if (rango < 192 || rango > 223)
              return "Error en el rango de la IP para la clase C.";
            break;
        }
      } else {
        // Para los tres últimos octetos, verificamos que estén en el rango de 0 a 255.
        if (rango < 0 || rango > 255)
          return "Error en la dirección IP. Los octetos toman valor entre 0 y 255";
      }
    }
  }
  // Si no se produjo ningún error hasta este punto, la dirección IP es válida y pertenece a la clase especificada.
  return `Categoría de la red: Clase ${clase}`;
}

// Función que procesa la clase de la dirección IP ingresada por el usuario.
function procesarClaseIP() {
  let ip = document.getElementById("ip").value; // Obtenemos la dirección IP ingresada.
  let mascara = document.getElementById("mascara").value; // Obtenemos la máscara de red ingresada.
  let dir_status; // Variable para almacenar el resultado de la verificación de la clase.

  // Determinamos la clase de la dirección IP según la máscara de red ingresada.
  switch (mascara) {
    // Clase A
    case "255.0.0.0":
    case "11111111.0.0.0":
      dir_status = chkClase(ip, "A");
      break;
    // Clase B
    case "255.255.0.0":
    case "11111111.11111111.0.0":
      dir_status = chkClase(ip, "B");
      break;
    // Clase C
    case "255.255.255.0":
    case "11111111.11111111.11111111.0":
      dir_status = chkClase(ip, "C");
      break;
    default:
      // Si la máscara de red no coincide con ninguna de las clases conocidas, hay un error.
      dir_status = "Hay un error en la máscara de red.";
  }

  // Mostramos el resultado de la verificación de la clase en la página web.
  document.getElementById("resultadoClaseIP").innerHTML = dir_status;
}

/*-------------------------------------------------------------
  -------------------Ejercicio 3---------------------------------
  ---------------------------------------------------------------
  //?Ingresar un dominio y mostrar a pantalla  
  //?Cual es el TLD. Aclarando si este pertenece a un pais.
  //?Cual es el dominio.
  //?cual es el subdominio (de tenerlo).
  
  */
//Genero un objeto que se encargue de chequear si termina con una denominacion de pais.
//Dado lo abierto que estan ahora los TLD, interpreto que si la ultima parte no pertenece a
//un pais, es que es parte ya de un TLD genérico.
//Este es el listado oficial sacado de internet.

// Definimos un objeto llamado "paises" que contiene una función "get" y una tabla de datos.

let paises = {
  get: function (denominacion) {
    // La función "get" busca en la tabla de datos y devuelve el país correspondiente a la denominación del TLD.
    return this.tabla.find((p) => p.cctld === denominacion);
  },
  // La tabla de datos contiene las denominaciones de TLD (Top-Level Domain) y sus países correspondientes.
  tabla: [
    { cctld: "ac", pais: "Isla Ascension" },
    { cctld: "ad", pais: "Andorra" },
    { cctld: "ae", pais: "Emiratos Árabes Unidos" },
    { cctld: "af", pais: "Afganistán" },
    { cctld: "ag", pais: "Antigua y Barbuda" },
    { cctld: "ai", pais: "Anguilla" },
    { cctld: "al", pais: "Albania" },
    { cctld: "am", pais: "Armenia" },
    { cctld: "ao", pais: "Angola" },
    { cctld: "aq", pais: "Antátida" },
    { cctld: "ar", pais: "Argentina" },
    { cctld: "as", pais: "Samoa Americana" },
    { cctld: "at", pais: "Austria" },
    { cctld: "au", pais: "Australia" },
    { cctld: "aw", pais: "Aruba" },
    { cctld: "az", pais: "Azerbaiyán" },
    { cctld: "ba", pais: "Bosnia-Herzegovina" },
    { cctld: "bb", pais: "Barbados" },
    { cctld: "bd", pais: "Bangladés" },
    { cctld: "be", pais: "Bélgica" },
    { cctld: "bf", pais: "Burkina Faso" },
    { cctld: "bg", pais: "Bulgaria" },
    { cctld: "bh", pais: "Baréin" },
    { cctld: "bi", pais: "Burundi" },
    { cctld: "bj", pais: "Benín" },
    { cctld: "bl", pais: "Saint-Barthélemy" },
    { cctld: "bm", pais: "Bermudas" },
    { cctld: "bn", pais: "Brunéi" },
    { cctld: "bo", pais: "Boliva" },
    { cctld: "br", pais: "Brasil" },
    { cctld: "bq", pais: "Bonaire, Saba, San Eustaquio" },
    { cctld: "bs", pais: "Bahamas" },
    { cctld: "bt", pais: "Bután" },
    { cctld: "bv", pais: "Isla Bouvet" },
    { cctld: "bw", pais: "Botsvana" },
    { cctld: "by", pais: "Bielorrusia" },
    { cctld: "bz", pais: "Belice" },
    { cctld: "ca", pais: "Canadá" },
    { cctld: "cc", pais: "Islas Cocos" },
    { cctld: "cd", pais: "República Democrática del Congo" },
    { cctld: "cf", pais: "República Centroafricana" },
    { cctld: "cg", pais: "República del Congo" },
    { cctld: "ch", pais: "Suiza" },
    { cctld: "ci", pais: "Costa de Marfil" },
    { cctld: "ck", pais: "Islas Cook" },
    { cctld: "cl", pais: "Chile" },
    { cctld: "cm", pais: "Camerún" },
    { cctld: "cn", pais: "República Popular China" },
    { cctld: "co", pais: "Colombia" },
    { cctld: "cr", pais: "Costa Rica" },
    { cctld: "cs", pais: "Checoslovaquia (ahora eliminado)" },
    { cctld: "cu", pais: "Cuba" },
    { cctld: "cv", pais: "Cabo Verde" },
    { cctld: "cw", pais: "Curaçao" },
    { cctld: "cx", pais: "Isla de Navidad" },
    { cctld: "cy", pais: "Chipre" },
    { cctld: "cz", pais: "Chequia" },
    { cctld: "dd", pais: "República Democrática Alemana" },
    { cctld: "de", pais: "Alemania" },
    { cctld: "dj", pais: "Djibouti" },
    { cctld: "dk", pais: "Dinamarca" },
    { cctld: "dm", pais: "Dominica" },
    { cctld: "do", pais: "República Dominicana" },
    { cctld: "dz", pais: "Algeria" },
    { cctld: "ec", pais: "Ecuador" },
    { cctld: "ee", pais: "Estonia" },
    { cctld: "eg", pais: "Egipto" },
    { cctld: "er", pais: "Eritrea" },
    { cctld: "es", pais: "España" },
    { cctld: "et", pais: "Etiopía" },
    { cctld: "eu", pais: "Unión Europea" },
    { cctld: "fi", pais: "Finlandia" },
    { cctld: "fj", pais: "Fiji" },
    { cctld: "fk", pais: "Islas Malvinas" },
    { cctld: "fm", pais: "Micronesia" },
    { cctld: "fo", pais: "Feroe" },
    { cctld: "fr", pais: "Francia" },
    { cctld: "ga", pais: "Gabun" },
    { cctld: "gd", pais: "Granada" },
    { cctld: "ge", pais: "Georgia" },
    { cctld: "gf", pais: "Guyana Francesa" },
    { cctld: "gg", pais: "Guernsey" },
    { cctld: "gh", pais: "Ghana" },
    { cctld: "gi", pais: "Gibraltar" },
    { cctld: "gl", pais: "Groenlandia" },
    { cctld: "gm", pais: "Gambia" },
    { cctld: "gn", pais: "Guinea" },
    { cctld: "gp", pais: "Guadalupe" },
    { cctld: "gq", pais: "Guinea Ecuatorial" },
    { cctld: "gr", pais: "Grecia" },
    { cctld: "gs", pais: "Georgia del Sur y las Islas Sandwich del Sur" },
    { cctld: "gt", pais: "Guatemala" },
    { cctld: "gu", pais: "Guam" },
    { cctld: "gw", pais: "Guinea-Bissau" },
    { cctld: "gy", pais: "Guayana" },
    { cctld: "hk", pais: "Hong Kong" },
    { cctld: "hm", pais: "Islas Heard y McDonald" },
    { cctld: "hn", pais: "Honduras" },
    { cctld: "hr", pais: "Croacia" },
    { cctld: "ht", pais: "Haití" },
    { cctld: "hu", pais: "Hungría" },
    { cctld: "id", pais: "Indonesia" },
    { cctld: "ie", pais: "Irlanda" },
    { cctld: "il", pais: "Israel" },
    { cctld: "im", pais: "Isla de Man" },
    { cctld: "in", pais: "India" },
    { cctld: "io", pais: "erritorio Británico del Océano Índico" },
    { cctld: "iq", pais: "Irak" },
    { cctld: "ir", pais: "Irán" },
    { cctld: "is", pais: "Islandia" },
    { cctld: "it", pais: "Italia" },
    { cctld: "je", pais: "Jersey" },
    { cctld: "jm", pais: "Jamaica" },
    { cctld: "jo", pais: "Jordania" },
    { cctld: "jp", pais: "Japón" },
    { cctld: "ke", pais: "Kenia" },
    { cctld: "kg", pais: "Kirguistán" },
    { cctld: "kh", pais: "Camboya" },
    { cctld: "ki", pais: "Kiribati" },
    { cctld: "km", pais: "Comoras" },
    { cctld: "kn", pais: "St. Kitts y Nevis" },
    { cctld: "kp", pais: "Corea del Norte" },
    { cctld: "kr", pais: "Corea del Sur" },
    { cctld: "kw", pais: "Kuwait" },
    { cctld: "ky", pais: "Islas Caimán" },
    { cctld: "kz", pais: "Kazajstán" },
    { cctld: "la", pais: "Laos" },
    { cctld: "lb", pais: "Líbano" },
    { cctld: "lc", pais: "Santa Lucia" },
    { cctld: "li", pais: "Liechtenstein" },
    { cctld: "lk", pais: "Sri Lanka" },
    { cctld: "lr", pais: "Liberia" },
    { cctld: "ls", pais: "Lesoto" },
    { cctld: "lt", pais: "Lituania" },
    { cctld: "lu", pais: "Luxemburgo" },
    { cctld: "lv", pais: "Letonia" },
    { cctld: "ly", pais: "Libia" },
    { cctld: "ma", pais: "Marruecos" },
    { cctld: "mc", pais: "Mónaco" },
    { cctld: "md", pais: "Moldavia" },
    { cctld: "me", pais: "Montenegro" },
    { cctld: "mf", pais: "Saint-Martin" },
    { cctld: "mg", pais: "Madagascar" },
    { cctld: "mh", pais: "Islas Marshall" },
    { cctld: "mk", pais: "Macedonia" },
    { cctld: "ml", pais: "Mali" },
    { cctld: "mm", pais: "Myanmar" },
    { cctld: "mn", pais: "Mongolia" },
    { cctld: "mo", pais: "Macau" },
    { cctld: "mp", pais: "Islas Marinas del Norte" },
    { cctld: "mq", pais: "Martinica" },
    { cctld: "mr", pais: "Mauritania" },
    { cctld: "ms", pais: "Montserrat" },
    { cctld: "mt", pais: "Malta" },
    { cctld: "mu", pais: "República de Mauricio" },
    { cctld: "mv", pais: "Maledivas" },
    { cctld: "mw", pais: "Malawi" },
    { cctld: "mx", pais: "México" },
    { cctld: "my", pais: "Malasia" },
    { cctld: "mz", pais: "Mozambique" },
    { cctld: "na", pais: "Namibia" },
    { cctld: "nc", pais: "Caledonia" },
    { cctld: "ne", pais: "Níger" },
    { cctld: "nf", pais: "Isla Norfolk" },
    { cctld: "ng", pais: "Nigeria" },
    { cctld: "ni", pais: "Nicaragua" },
    { cctld: "nl", pais: "Países Bajos" },
    { cctld: "no", pais: "Noruega" },
    { cctld: "np", pais: "Nepal" },
    { cctld: "nr", pais: "Nauru" },
    { cctld: "nu", pais: "Niue" },
    { cctld: "nz", pais: "Nueva Zelanda" },
    { cctld: "om", pais: "Omán" },
    { cctld: "pa", pais: "Panamá" },
    { cctld: "pe", pais: "Perú" },
    { cctld: "pf", pais: "Polinesia Francesa" },
    { cctld: "pg", pais: "Papua Nueva Guinea" },
    { cctld: "ph", pais: "Filipinas" },
    { cctld: "pk", pais: "Pakistán" },
    { cctld: "pl", pais: "Polonia" },
    { cctld: "pm", pais: "Saint Pedro y Miquelón" },
    { cctld: "pn", pais: "Islas Pitcairn" },
    { cctld: "pr", pais: "Puerto Rico" },
    { cctld: "ps", pais: "Estado de Palestina" },
    { cctld: "pt", pais: "Portugal" },
    { cctld: "pw", pais: "Palau" },
    { cctld: "py", pais: "Paraguay" },
    { cctld: "qa", pais: "Katar" },
    { cctld: "re", pais: "Reunión" },
    { cctld: "ro", pais: "Rumania" },
    { cctld: "rs", pais: "Serbia" },
    { cctld: "ru", pais: "Rusia" },
    { cctld: "rw", pais: "Ruanda" },
    { cctld: "sa", pais: "Arabia Saudita" },
    { cctld: "sb", pais: "Islas Salomón" },
    { cctld: "sc", pais: "Seychelles" },
    { cctld: "sd", pais: "Sudán" },
    { cctld: "se", pais: "Suecia" },
    { cctld: "sg", pais: "Singapur" },
    { cctld: "sh", pais: "St. Helena" },
    { cctld: "si", pais: "Eslovenia" },
    { cctld: "sj", pais: "Svalbard y Jan Mayen" },
    { cctld: "sk", pais: "Eslovaquia" },
    { cctld: "sl", pais: "Sierra Leona" },
    { cctld: "sm", pais: "San Marino" },
    { cctld: "sn", pais: "Senegal" },
    { cctld: "so", pais: "Somalia" },
    { cctld: "sr", pais: "Surinam" },
    { cctld: "ss", pais: "Sudán del Sur" },
    { cctld: "st", pais: "Santo Tomé y Príncipe" },
    {
      cctld: "su",
      pais: "Unión Soviética (desde la disulución se utiliza el TLD ruso)",
    },
    { cctld: "sv", pais: "El Salvador" },
    { cctld: "sx", pais: "Sint Maarten" },
    { cctld: "sy", pais: "Siria" },
    { cctld: "sz", pais: "Swazilandia" },
    { cctld: "tc", pais: "Islas Turcas y Caicos" },
    { cctld: "td", pais: "Chad" },
    { cctld: "tf", pais: "Tierras Australes y Antárticas Francesas" },
    { cctld: "tg", pais: "Togo" },
    { cctld: "th", pais: "Tailandia" },
    { cctld: "tj", pais: "Tayikistán" },
    { cctld: "tk", pais: "Tokelau" },
    { cctld: "tl", pais: "Timor Occidental (anteriormente .tp)" },
    { cctld: "tm", pais: "Turkmenistán" },
    { cctld: "tn", pais: "Túnez" },
    { cctld: "to", pais: "Tonga" },
    { cctld: "tr", pais: "Turquía, República Turca del Norte de Chipre" },
    { cctld: "tt", pais: "Trinidad y Tobago" },
    { cctld: "tv", pais: "Tuvalu" },
    { cctld: "tw", pais: "Taiwán" },
    { cctld: "tz", pais: "Tanzania" },
    { cctld: "ua", pais: "Ucrania" },
    { cctld: "ug", pais: "Uganda" },
    { cctld: "uk", pais: "Reino Unido" },
    { cctld: "us", pais: "Estados Unidos" },
    { cctld: "uy", pais: "Uruguay" },
    { cctld: "uz", pais: "Uzbekistán" },
    { cctld: "va", pais: "Ciudad del Vaticano" },
    { cctld: "vc", pais: "St. Vincente y las Granadinas" },
    { cctld: "ve", pais: "Venezuela" },
    { cctld: "vg", pais: "Islas Vírgenes Británicas" },
    { cctld: "vi", pais: "Islas Vírgenes de los EE.UU" },
    { cctld: "vn", pais: "Vietnam" },
    { cctld: "vu", pais: "Vanuatu" },
    { cctld: "wf", pais: "Wallis y Futuna (también .fr)" },
    { cctld: "ws", pais: "Samoa" },
    { cctld: "ye", pais: "Yemen" },
    { cctld: "za", pais: "Sudáfrica" },
    { cctld: "zm", pais: "Zambia" },
    { cctld: "zw", pais: "Zimbabue" },
  ],
};

// Función "procesarDN" que se ejecuta cuando se presiona un botón en la página.
function procesarDN() {
  // Obtenemos el valor ingresado en el campo de entrada con el ID "dominio".
  let dominio = document.getElementById("dominio").value;
  // Dividimos el dominio en sus partes separadas por puntos.
  let partes = dominio.split(".");
  let rta = "";

  // Verificamos si hay al menos dos partes en el nombre de dominio.
  if (partes.length < 2) {
    document.getElementById("resultadoDN").innerHTML =
      "Error en el formato del dominio";
    return;
  }

  // Obtenemos información del país si el TLD corresponde a un país en la tabla "paises".
  let i = partes.length - 1; // Restamos uno para facilitar el acceso a las partes del dominio.
  let pais = paises.get(partes[i]);

  if (pais) {
    // Si encontramos una denominación de país, la interpretamos como tal.
    rta = `<div>Denominación de país: ${partes[i]} (${pais.pais})<div/>`;
    i--;
  }

  // Si todavía tenemos más partes, las consideramos como TLD (Top-Level Domain).
  if (i > 0) rta += `<div>TLD: ${partes[i--]}<div/>`;

  // La siguiente parte se considera el dominio principal.
  rta += `<div>Dominio: ${partes[i--]}<div/>`;

  // Cualquier parte restante se considera un subdominio.
  for (; i > -1; i--) {
    rta += `<div>Subdominio: ${partes[i]}<div/>`;
  }

  // Mostramos la respuesta en el elemento con el ID "resultadoDN" en la página.
  document.getElementById("resultadoDN").innerHTML = rta;
}

//! ejemplo

/*
  
  Si ingresas "www.google.com":
  
  Dominio: "google"
  Subdominio: "www"
  TLD (Top-Level Domain): "com"
  Entonces, en este caso:
  
  "google" es el dominio principal (el nombre del sitio web).
  
  "www" es un subdominio que a menudo se utiliza para indicar la versión de un sitio web accesible a través de la World Wide Web.
  
  "com" es el TLD, que indica que es un dominio de nivel superior genérico (en este caso, ".com" generalmente se asocia con organizaciones 
  comerciales).
  
  
  */
